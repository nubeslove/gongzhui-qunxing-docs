import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const str={type:'string'},num={type:'number'},bool={type:'boolean'},unknown={description:'调用方提供的 JSON 内容；此端点不进行完整游戏合同校验。'};
const obj=(properties,required=Object.keys(properties))=>({type:'object',properties,required});
// Public summary fields are explicitly selected; invitation codes use an authorized endpoint.
const baseDefinitions=JSON.parse(fs.readFileSync(path.join(root,'schemas/contracts.schema.json'),'utf8')).$defs;
const summaryRef=JSON.parse(fs.readFileSync(path.join(root,'schemas/WorldSummary.schema.json'),'utf8')).$ref.split('/').at(-1);
function sharedRefs(v){if(Array.isArray(v))return v.map(sharedRefs);if(v&&typeof v==='object')return Object.fromEntries(Object.entries(v).map(([k,x])=>[k,k==='$ref'&&typeof x==='string'&&x.startsWith('#')?'./contracts.schema.json'+x:sharedRefs(x)]));return v;}
const serverSummary=sharedRefs(baseDefinitions[summaryRef]);// toWorldSummary now returns explicit public fields and omits inviteCode.
fs.writeFileSync(path.join(root,'schemas/ServerWorldSummary.schema.json'),JSON.stringify({$schema:'https://json-schema.org/draft/2020-12/schema',title:'ServerWorldSummary',description:'当前显式构造的 WorldSummary；邀请码只从授权分享设置取得。',...serverSummary},null,2)+'\n');
const ref=n=>({$ref:`../schemas/${n==='WorldSummary'?'ServerWorldSummary':n}.schema.json`});
const arr=items=>({type:'array',items});
const ok=obj({ok:{const:true}}),paths={};
const rows=[];
function add(method,url,summary,{auth='account',body,result=ok,status=200,errors=[],description='',binary=false,deprecated=false}={}){
 const parameters=[...url.matchAll(/\{(\w+)\}/g)].map(m=>({name:m[1],in:'path',required:true,schema:{type:'string'},description:m[1]==='id'?'平台服务器 worldId；不是本地 table.id':m[1]==='hash'?'64 位小写 SHA-256': '资源相对路径；按路径编码，不包含 ..'}));
 const op={operationId:method+'_'+url.replace(/[^a-zA-Z0-9]+/g,'_'),summary,description:description+`\n权限：${auth==='none'?(url==='/api/internal/updates/claim'?'本机更新代理密钥':'无需登录'):auth==='admin'?'站长或被授予提交更新权限的管理员':auth==='gm'?'世界创建者或平台管理员':auth==='member'?'该世界 GM 或当前成员':'有效账号'}。`,tags:[url.includes('/auth')?'账号':url.includes('community')?'社区':url.includes('/publication')?'公开发布':url.includes('/media')?'共享媒体':'平台'],...(auth==='none'?{security:[]}:{}),...(parameters.length?{parameters}:{}),...(deprecated?{deprecated:true}:{})};
 if(body)op.requestBody={required:true,content:{[binary?'application/octet-stream':'application/json']:{schema:body}}};
 op.responses={ [status]:{description:'成功',content:{[result==='binary'?'application/octet-stream':'application/json']:{schema:result==='binary'?{type:'string',format:'binary'}:result}}} };
 for(const code of new Set([...errors,...(auth==='none'?[]:[401]),...(body?[400,413]:[])]))op.responses[code]={description:({400:'参数、版本或业务校验失败',401:'令牌无效或账号密码错误',403:'没有访问权限',404:'资源不存在',409:'修订冲突或账号占用',413:'请求体过大',426:'旧注册方式已停用',429:'请求限流',500:'服务或文件故障',503:'认证忙或保存失败'})[code]||'请求失败',content:{'application/json':{schema:obj({error:str})},'text/plain':{schema:str},'text/html':{schema:str}}};
 if(deprecated)delete op.responses[status];
 paths[url]??={};paths[url][method]=op;rows.push({method,url,summary,auth,body,result,description,status,errors});
}
add('get','/api/health','健康与能力标记',{auth:'none',result:obj({ok:bool,version:str,commit:str,players:num,worlds:num,ts:num,capabilities:arr(str)}),description:'包含世界访问、管理员角色、签名客户端更新与发布队列能力。返回当前运行 version 与 commit；计数不是活跃连接人数。'});
add('get','/api/auth/config','认证配置',{auth:'none',result:ref('AuthConfig'),errors:[429]});
add('get','/api/auth/me','当前身份',{result:ref('AccountInfo'),errors:[429]});
for(const action of ['register','login','claim','password'])add('post',`/api/auth/${action}`,({register:'创建账号',login:'登录',claim:'绑定旧身份',password:'更改密码'})[action],{auth:['register','login'].includes(action)?'none':'account',body:action==='password'?obj({password:str,currentPassword:str,captcha:obj({ticket:str,randstr:str})},['password','currentPassword']):ref('AuthCredentials'),result:ref('AuthResult'),errors:[401,409,429,503],description:action==='claim'?'保持旧 playerId；需携带原有效令牌。':action==='password'?'password 为新密码；currentPassword 为旧密码。成功撤销旧会话并返回新令牌。':'注册昵称省略时使用标准化账号；按认证配置携带新的本地验证码凭据。'});
add('post','/api/auth/profile','修改昵称',{body:obj({nickname:{type:'string',minLength:1,maxLength:100}}),result:obj({nickname:str}),errors:[429,503]});
add('post','/api/auth/logout','注销当前会话',{errors:[409,429,503],description:'旧未绑定身份返回 409；先绑定再退出。无需 JSON 正文。'});
add('post','/api/register','旧设备码注册已停用',{auth:'none',deprecated:true,errors:[426],description:'始终返回 426。RegisterRequest 等历史类型仍保留，但不是可用注册入口。'});
add('get','/api/players','账号目录',{result:obj({players:arr(ref('PlayerInfo'))}),description:'当前返回全服务器身份摘要，不返回密码或令牌。'});
add('get','/api/worlds','世界目录',{result:obj({worlds:arr(ref('WorldSummary'))}),description:'只返回本人有权访问的世界，邀请码不包含在摘要。没有分页和系统过滤参数。'});
add('post','/api/worlds','登记服务器世界',{body:obj({name:{type:'string',minLength:1,maxLength:200},systemId:{enum:['aaf','dnd5e-2024','lancer','otherworld-journey'],default:'aaf'},ruleVariant:{...ref('RuleVariant'),description:'仅接受兼容矩阵中与 systemId 对应的变体'}},['name']),result:obj({world:ref('WorldSummary')}),status:201,description:'仅登记世界、GM 与成员关系；不会导入本地地图、角色或完整模组。创建者切换为该世界成员。'});
add('post','/api/worlds/{id}/join','加入世界',{result:obj({ok:bool,world:ref('WorldSummary')}),errors:[404],description:'按 canAccessWorld 校验可见性、成员和移除状态；私密世界首次使用 join-invite。平台管理员可访问。一个账号只有一个当前 worldId。'});
add('post','/api/worlds/{id}/leave','离开世界',{errors:[404],description:'仅当账号当前 worldId 匹配时清空；不会删除本地世界。'});
add('post','/api/worlds/{id}/kick','移除成员',{auth:'gm',body:obj({playerId:str}),errors:[400,403,404],description:'不能移除当前 GM；保存后撤销目标信令连接。'});
add('post','/api/worlds/{id}/delete','提交云端下架或删除任务',{auth:'gm',body:obj({mode:{enum:['unpublish','delete']},reason:str},[]),result:obj({ok:bool,job:{type:'object'}}),status:202,errors:[403,409,503],description:'默认 unpublish；先持久保存清理回执，再异步清理。已完成可返回 200；202 不代表文件均已删除。实际需要世界拥有者或对应管理权限。'});
add('post','/api/worlds/{id}/transfer','转交世界归属',{auth:'gm',body:obj({toPlayerId:str,requestId:str,expectedOwnerId:str,expectedVersion:num,reason:str}),result:obj({ok:bool,receipt:{type:'object'},world:ref('WorldSummary')}),errors:[400,403,404,409,503],description:'使用幂等请求号和预期拥有者／发布版本；接收者须已加入、未被屏蔽且账号有效。实际需要拥有者或归属转让权限，不是任意世界内 GM。'});
add('post','/api/worlds/{id}/snapshot','写入 GM 备份快照',{auth:'gm',body:obj({state:unknown},[]),result:obj({ok:bool,snapshot:ref('WorldSnapshot')}),errors:[403,404],description:'JSON 请求上限 64 MiB。state 缺省为 null；服务器包装 version/at，不验证世界业务内容。'});
add('get','/api/worlds/{id}/snapshot','读取 GM 备份快照',{auth:'gm',result:obj({snapshot:ref('WorldSnapshot')}),errors:[403,404]});
add('put','/api/worlds/{id}/assets','替换旧式 JSON 资源集',{auth:'gm',body:obj({files:{type:'object',additionalProperties:unknown}}),result:obj({ok:bool,version:num,manifest:ref('AssetManifest')}),errors:[403,404],description:'整个 files 集合替换，不是增量追加。哈希针对 canonicalJson；清单及正文也要求 canAccessWorld 权限，不应在玩家可见资源中写 GM 秘密。请求上限 2 MiB。'});
add('get','/api/worlds/{id}/manifest','旧式 JSON 资源清单',{result:obj({manifest:ref('AssetManifest')}),errors:[404],description:'要求登录并通过 canAccessWorld；无权访问时返回 404。'});
add('get','/api/worlds/{id}/file/{path}','旧式 JSON 资源正文',{result:ref('AssetPayload'),errors:[404],description:'path 对应 Express 通配符 :path(*)；可以包含斜线。要求登录并通过 canAccessWorld。'});
add('get','/api/worlds/{id}/publication','当前公开发布清单',{auth:'member',result:obj({publication:{anyOf:[ref('WorldPublication'),{type:'null'}]}}),errors:[403,500],description:'未发布时 publication 为 null；“公开”指该世界成员可读。'});
add('put','/api/worlds/{id}/publication/blobs/{hash}','预上传发布附件',{auth:'gm',body:{type:'string',format:'binary'},binary:true,result:obj({hash:str,size:num}),errors:[403],description:'Content-Type 必须精确为 application/octet-stream。1–64,000,000 字节，按流计算 SHA-256；上传并不自动公开，提交清单后才可下载。'});
add('get','/api/worlds/{id}/publication/blobs/{hash}','下载当前发布附件',{auth:'member',result:'binary',errors:[400,403,404],description:'仅接受当前清单中的哈希；Content-Type 固定为 application/octet-stream。不是可任意读取历史哈希的接口。'});
add('post','/api/worlds/{id}/publication','原子提交发布版本',{auth:'gm',body:obj({expectedVersion:{type:'integer',minimum:0},publication:ref('WorldPublication')}),result:obj({publication:ref('WorldPublication')}),errors:[403,409],description:'先传全部 blob，再提交。需精确一个 table.json、最多 300 附件；table.json ≤2,000,000 字节。核对 system/version/host/serverWorldId、清单和 publicTable 无私密内容。返回版本为 expectedVersion+1。409 后重读合并。'});
add('get','/api/worlds/{id}/media','共享媒体清单',{auth:'member',result:obj({manifest:ref('MediaManifest')}),errors:[403,500]});
add('get','/api/worlds/{id}/media/blob/{hash}','下载共享媒体',{auth:'member',result:'binary',errors:[403,404,500],description:'响应 Content-Type 为清单检测到的 MIME。仅能读当前清单引用；读取后复核长度与哈希。'});
add('put','/api/worlds/{id}/media/file/{path}','上传共享媒体',{auth:'gm',body:{type:'string',format:'binary'},binary:true,result:obj({manifest:ref('MediaManifest')}),errors:[403],description:'建议 Content-Type: application/octet-stream；按文件头判断实际类型。每文件 ≤32,000,000 字节、合计 ≤512,000,000 字节。清单中的同路径替换；不用这一接口上传 GLB。'});
add('get','/api/community','社区视图',{result:ref('CommunityView'),description:'帖子、公告及本账号相关好友；canPublish 表示公告管理员资格。'});
add('post','/api/community','社区动作',{body:ref('CommunityAction'),result:ref('CommunityView'),description:'post/reply/delete-post/friend-request/friend-accept/friend-remove/notice。本人删除或管理员管理，接受申请仅限接收方；权限／业务错误当前统一 400。'});

const access=obj({visibility:{enum:['public','invite']},inviteCode:str,members:arr(obj({id:str,name:str}))});
add('post','/api/worlds/join-invite','通过邀请码加入世界',{body:obj({inviteCode:str}),result:obj({world:ref('WorldSummary')}),errors:[403]});
add('get','/api/worlds/{id}/access','读取世界分享设置',{auth:'gm',result:access,errors:[403]});
add('post','/api/worlds/{id}/access','修改分享与成员资格',{auth:'gm',body:obj({visibility:{enum:['public','invite']},rotateInvite:bool,removePlayerId:str,addPlayerId:str},[]),result:access,errors:[400,403],description:'私密化保留当前成员并轮换邀请码。移除成员会撤销本世界访问与管理员演出角色记录。'});
const role=obj({worldId:str,hostId:str,playerId:str,nickname:str,role:{enum:['gm','player']},admin:bool});
add('get','/api/worlds/{id}/role','读取世界内管理员角色',{result:role,errors:[403,404],description:'可选 playerId 查询参数；普通账号只能查本人，创建者或管理员可查他人。创建者 hostId 与管理员附加 role 分开。'});
add('post','/api/worlds/{id}/role','平台管理员切换自己的世界角色',{body:obj({role:{enum:['gm','player']}}),result:role,errors:[400,403,404,409],description:'仅平台管理员、已进入世界、且不是世界创建者时可调用；不能提升其他玩家。'});
add('get','/api/worlds/{id}/roles','读取本世界主持人名单',{auth:'member',result:obj({worldId:str,hostId:str,gms:arr(str)}),errors:[403,404]});
for(const scope of ['media','publication']){
 add('post',`/api/worlds/{id}/${scope}/upload`,'获得外部附件上传 URL',{auth:'gm',body:scope==='media'?obj({path:str,hash:str,size:num,mime:str}):obj({hash:str,size:num}),result:obj({url:str}),errors:[400,403,503],description:'需配置外部对象存储。短期签名 URL 仅用于该对象上传；不能给不受信任 AI。'});
 if(scope==='media')add('post',`/api/worlds/{id}/${scope}/gc`,'回收外部孤立附件',{auth:'gm',result:obj({removed:num,kept:num}),errors:[400,403,503],description:'无需正文。对比本世界当前清单，删除不再被清单引用的对象；不是按年龄删除。'});
}
add('post','/api/worlds/{id}/media/commit','核验并登记外部媒体',{auth:'gm',body:obj({path:str,hash:str,size:num,mime:str}),result:obj({manifest:ref('MediaManifest')}),errors:[400,403,503],description:'服务端核验对象长度、哈希和文件类型后提交；SVG 走全文校验的本机通道。'});
const releaseSchema=obj({id:str,version:str,commit:str,docsCommit:str,publishedAt:str,notes:str,protocol:num,minClientVersion:str,artifacts:{type:'object',additionalProperties:obj({url:str,signature:str,sha256:str})}});
const jobSchema=obj({id:str,release:releaseSchema,requestedBy:str,requestedAt:str,status:{enum:['awaiting-approval','approved','queued','preparing','stopping','switching','checking','complete','rolled-back','failed']},message:str,previous:str,backup:str},['id','release','requestedBy','requestedAt','status','message']);
add('get','/api/releases/current','运行版本与已激活发行',{auth:'none',result:obj({version:str,commit:str,protocol:num,release:{anyOf:[releaseSchema,{type:'null'}]}}),description:'无需账号；no-store。候选版本不会提前向客户端发布。'});
add('get','/api/updates/{target}/{arch}/{current}','Tauri 签名更新检查',{auth:'none',result:obj({version:str,notes:str,pub_date:str,url:str,signature:str}),errors:[400],description:'无更新或不支持该平台返回 204，无 JSON 正文。仅返回已激活且高于 current 的稳定版本。'});
paths['/api/updates/{target}/{arch}/{current}'].get.responses[204]={description:'无可用更新；空正文'};
add('get','/api/admin/releases','候选发布与部署状态',{auth:'admin',result:obj({active:{anyOf:[releaseSchema,{type:'null'}]},candidates:arr(releaseSchema),jobs:arr(jobSchema)}),errors:[403]});
add('post','/api/admin/releases','登记不可覆盖的候选发布',{auth:'admin',body:releaseSchema,result:obj({release:releaseSchema}),status:201,errors:[400,403],description:'64 KB 上限，完整项目与文档提交 SHA；下载 URL 来自 UPDATE_ARTIFACT_ORIGINS；必须提供签名客户端包。'});
add('post','/api/admin/releases/{id}/deploy','管理员申请部署',{auth:'admin',body:obj({commit:str}),result:jobSchema,status:202,errors:[400,403],description:'确认完整候选提交编号，只允许一个未完成任务。进入 awaiting-approval；必须由站长审核，202 不表示已经更新成功。'});

add('get','/api/auth/challenge','取得本地图片验证码',{auth:'none',result:obj({id:str,image:str,expiresAt:num}),errors:[429,503],description:'两分钟有效且绑定请求来源；id 与用户输入随认证请求提交，不向 AI 传递验证码或会话凭据。'});
add('get','/api/worlds/{id}/members','世界成员摘要',{auth:'member',result:obj({players:arr({type:'object'}),blocked:arr(obj({playerId:str,nickname:str}))},['players']),errors:[403],description:'要求当前世界成员或 GM；blocked 仅 GM 可见。不返回私密角色卡或聊天。'});
add('get','/api/worlds/{id}/publication/compare','比较发布资源修订',{auth:'gm',result:{type:'object'},errors:[400,403,409],description:'query 必填 path 与非负整数 revision。返回当前原子发布存储的比较结果；不是客户端任意文件读取。'});
add('get','/api/worlds/{id}/publication/draft','取得备团稿',{auth:'gm',result:{type:'object'},errors:[403,409],description:'授权原子发布存储中的备团稿；不表示允许绕过世界命令直接修改运行状态。'});
add('get','/api/world-deletions','本人可见的清理任务',{result:obj({jobs:arr({type:'object'})}),errors:[401]});
add('post','/api/world-lifecycle/query','查询已下架的世界',{body:obj({worldIds:{type:'array',items:str,maxItems:128}}),result:obj({removed:arr(obj({worldId:str,mode:str,ownerId:str}))}),description:'仅返回本人曾为拥有者或成员的清理记录。'});
add('get','/api/worlds/{id}/deletion','查询世界清理回执',{auth:'gm',result:obj({job:{type:'object'}}),errors:[403,404]});
add('get','/api/worlds/{id}/transfer','查询转让资格和回执',{auth:'gm',result:obj({ownerId:str,version:num,recovering:bool,canTransfer:bool,receipt:{type:'object'},members:arr(obj({id:str,name:str}))},['ownerId','version','recovering','canTransfer','members']),errors:[403,404,503],description:'原转让操作者可查询自己的回执；可选成员由服务器按当前资格筛选。'});
add('post','/api/client/presence','报告当前客户端在线状态',{body:obj({clientId:str,leaving:bool},['clientId']),result:obj({ready:bool}),errors:[503],description:'用于在线会话与更新排空判断；不是地图标记或聊天接口。'});
add('post','/api/internal/updates/claim','本机更新代理领取审核任务',{auth:'none',body:obj({jobId:str,phase:{enum:['prepare'] }},['jobId']),result:{type:'object'},errors:[403,409],description:'仅服务器本机更新代理持有的 X-Update-Key 可调用；无账号 Bearer 不代表公开权限。需要先有站长审核，AI 备团不得调用。省略 phase 进入停机前领取检查。'});
paths['/api/internal/updates/claim'].post.security=[{updateKey:[]}];
add('get','/api/admin/releases/check','读取发行源并检查新版本',{auth:'admin',result:obj({latest:releaseSchema,currentVersion:str,available:bool}),errors:[403,409]});
for(const action of ['approve','force'])add('post',`/api/admin/releases/jobs/{id}/${action}`,action==='force'?'站长批准强制更新':'站长批准空闲更新',{auth:'admin',body:obj({commit:str}),result:jobSchema,errors:[403,409],description:action==='force'?'额外要求站长权限；保存后重启，并产生强制更新通知。':'额外要求站长权限；等待全平台连续无人在线满十分钟。'});
add('post','/api/admin/releases/jobs/{id}/reject','站长驳回未执行更新',{auth:'admin',body:obj({reason:str},[]),result:jobSchema,errors:[403,409],description:'额外要求站长权限；已开始执行的任务不能通过此入口撤销。'});
paths['/api/worlds/{id}/publication/compare'].get.parameters.push({name:'path',in:'query',required:true,schema:str},{name:'revision',in:'query',required:true,schema:{type:'integer',minimum:0}});

paths['/api/worlds/{id}/role'].get.parameters.push({name:'playerId',in:'query',required:false,schema:str});
const spec={openapi:'3.1.0',info:{title:'千星奇域平台 HTTP API',version:'0.2.36-docs.20261105',description:'源码快照。未增加 API 版本前缀。GM 战斗命令、本地备团函数和 Tauri 命令不是这些 HTTP 路由。部分错误由 Express 返回文本或 HTML；调用方不要无条件 JSON.parse。'},servers:[{url:'http://127.0.0.1:3000',description:'本地示例，实际端口以启动配置为准'},{url:'https://game.example.com',description:'占位地址，部署时替换'}],security:[{bearerAuth:[]}],components:{securitySchemes:{updateKey:{type:'apiKey',in:'header',name:'X-Update-Key',description:'仅本机更新代理持有，不提供给AI或浏览器。'},bearerAuth:{type:'http',scheme:'bearer',description:'服务器签发的不透明会话令牌，非 JWT；不要发给 AI。'}}},paths};
fs.mkdirSync(path.join(root,'api'),{recursive:true});fs.writeFileSync(path.join(root,'api/openapi.json'),JSON.stringify(spec,null,2)+'\n');
fs.mkdirSync(path.join(root,'docs/api'),{recursive:true});
const text=`# 平台 HTTP 接口\n\n核对源码：server 的 index/auth/community/media/publications/world-access/world-roles/world-transfer/world-deletion/updates；其他独立管理模块未在此穷举。共 ${rows.length} 个 method + path 组合（含停用的旧注册入口）。[OpenAPI 3.1](../../api/openapi.json) 收录每个请求、路径参数、返回结构和状态码。\n\n## 通用约定\n\n生产使用 HTTPS。业务接口带 \`Authorization: Bearer <token>\`；token 为不透明会话令牌，不是 JWT。\`X-Player-Id\` 可省略，若提供必须与令牌本人一致，不能代替认证。时间戳为毫秒；字段与路径大小写敏感。\n\n账号 JSON 上限 16 KiB，普通 JSON 2 MiB，快照 JSON 64 MiB；二进制端点另有十进制字节限制。CORS 预检允许 GET/POST/PUT/DELETE/OPTIONS；不在白名单的来源预检返回 403。服务器返回错误不保证都是 JSON，请先检查状态码与 Content-Type。\n\n账号名 trim → NFKC → 小写，1–64 字符且不能含空白或控制符；密码保持原样、非空、最多 4096 UTF-8 字节，没有额外复杂度要求。昵称 1–100 字符。当前认证配置使用本地图片验证码（测试可为 none）；challenge 返回 id、image、expiresAt，认证时提交 ticket=id 与 randstr=用户输入，一次性使用。会话有效期 30 天，同账号最多保留五份；改密使旧会话失效。\n\n认证限流：每 IP 每分钟 30 次、服务总量每分钟 120 次、账号名五分钟 15 次；密码计算同时最多两项。429 应遵守 Retry-After（部分账号名限制没有此头）；验证码失败后重新获取票据。不要给第三方 AI 真实账号令牌。\n\n## 路由清单\n\n| 方法 | 路径 | 权限 | 用途 |\n| --- | --- | --- | --- |\n`+rows.map(r=>`| ${r.method.toUpperCase()} | \`${r.url}\` | ${{none:'匿名',account:'已登录',gm:'创建者／平台管理员',member:'可访问的世界成员',admin:'更新管理员'}[r.auth]} | ${r.summary} |`).join('\n')+'\n\n'+rows.map(r=>`## ${r.method.toUpperCase()} ${r.url}\n\n${r.summary}。${r.description}\n\n${r.body?'请求正文：\n\n```json\n'+JSON.stringify(r.body,null,2)+'\n```\n\n':'无需请求正文。\n\n'}成功：${r.url==='/api/register'?'不适用；426':r.status}。${r.result==='binary'?'返回文件字节；检查响应头。':'返回结构：\n\n```json\n'+JSON.stringify(r.result,null,2)+'\n```'}\n\n`).join('');
fs.writeFileSync(path.join(root,'docs/api/http.md'),text+'## 权限注意事项\n\n世界目录、加入和资源读取执行访问控制；私密入场、成员资格和世界内 GM 角色是不同权限。更新提交权由当前管理授权判定，审核与强制执行额外要求站长；兼容配置可使用显式更新 ID 名单。世界资源与应用发行包是不同通道。删除世界不等于回收全部附件。正式服及配套网页版 0.2.36 已上线并核验，本机桌面客户端已自动更新，实测版本为 0.2.36 且已就绪；源码、候选发布、站长审核和实际运行版本分别核对。本文不是发布授权。\n');
console.log(JSON.stringify({operations:rows.length,paths:Object.keys(paths).length}));
