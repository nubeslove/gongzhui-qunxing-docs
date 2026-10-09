#!/usr/bin/env node
/** Maintainer tool: read a local game checkout; publish declarations and fingerprints, never implementation bodies or assets. */
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
const root=path.resolve(process.argv[2]||'');
if(!process.argv[2]||!fs.existsSync(path.join(root,'game/FOUNDATION.md')))throw Error('Usage: node tools/extract-reference.mjs /path/to/source-checkout');
const out=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const require=createRequire(path.join(root,'game/apps/desktop/package.json'));
const ts=require('typescript');
const rel=p=>path.relative(root,p).replaceAll('\\','/');
const portable=s=>s.replaceAll(root.replaceAll('\\','/')+'/game/','@source/').replaceAll(root.replaceAll('\\','\\\\')+'\\\\game\\\\','@source/');
const write=(p,s)=>{fs.mkdirSync(path.dirname(path.join(out,p)),{recursive:true});fs.writeFileSync(path.join(out,p),portable(s));};
const json=(p,v)=>write(p,JSON.stringify(v,null,2)+'\n');
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);
const roots=['contracts','rules-engine','game-core','session','network','assets','world-model'].map(p=>`game/packages/${p}/src`);
const extra=['game/tools/preparation.ts','game/apps/desktop/src/tabletop/model.ts','game/apps/desktop/src/tabletop/worldBackup.ts','game/apps/desktop/src/story/compendiumObjects.ts','game/apps/desktop/src/heartsea/readerContent.ts','game/apps/desktop/src/heartsea/characters.ts','game/apps/desktop/src/tabletop/lancer/model.ts','game/apps/desktop/src/tabletop/lancer/progression.ts','game/apps/desktop/src/tabletop/lancer/pilot.ts','game/apps/desktop/src/tabletop/lancer/catalog.ts','game/apps/desktop/src/terra/wiki/library.ts','game/apps/desktop/src/platform/sections.ts','game/apps/desktop/src/tabletop/storage.ts'].filter(p=>fs.existsSync(path.join(root,p)));
const files=[...roots.flatMap(d=>fs.existsSync(path.join(root,d))?walk(path.join(root,d)):[]),...extra.map(p=>path.join(root,p))].filter(p=>p.endsWith('.ts')&&!/\.(test|generated)\.ts$|test-helpers\.ts$/.test(p)).sort();
const program=ts.createProgram(files,{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.ESNext,moduleResolution:ts.ModuleResolutionKind.Bundler,strict:true,skipLibCheck:true,resolveJsonModule:true,jsx:ts.JsxEmit.ReactJSX});
const checker=program.getTypeChecker(),printer=ts.createPrinter({newLine:ts.NewLineKind.LineFeed,removeComments:true});
const escaped=s=>String(s).replaceAll('|','&#124;').replaceAll('\n',' ').replaceAll('\r','');
const exported=n=>!!n.modifiers?.some(m=>m.kind===ts.SyntaxKind.ExportKeyword);
const doc=n=>ts.displayPartsToString(checker.getSymbolAtLocation(n.name)?.getDocumentationComment(checker)??[]).replaceAll('\r','');
const typetext=(n,sf)=>n?printer.printNode(ts.EmitHint.Unspecified,n,sf).trim():'';
const index=[],fingerprints=[];
const decls=new Map();
function fields(node,prefix='',out=[]){
 if(ts.isTypeLiteralNode(node)||ts.isInterfaceDeclaration(node))for(const m of node.members){
  if(ts.isPropertySignature(m)){
   const name=prefix+m.name.getText(),t=m.type;
   out.push({name,optional:!!m.questionToken,type:t?.getText()||'unknown',description:doc(m)});
   if(t)fields(t,name+'.',out);
  } else if(ts.isIndexSignatureDeclaration(m))out.push({name:prefix+'['+m.parameters.map(x=>x.getText()).join(', ')+']',optional:false,type:m.type.getText(),description:'动态键'});
 }
 else if(ts.isUnionTypeNode(node)||ts.isIntersectionTypeNode(node))node.types.forEach((t,i)=>fields(t,prefix+(ts.isUnionTypeNode(node)?`分支${i+1}.`:''),out));
 else if(ts.isParenthesizedTypeNode(node))fields(node.type,prefix,out);
 else if(ts.isArrayTypeNode(node))fields(node.elementType,prefix+'[].',out);
 return out;
}
for(const file of files){
 const sf=program.getSourceFile(file);if(!sf)continue;
 const source=rel(file),dest='reference/'+source.replace(/^game\//,'').replace(/\.ts$/,'.md');
 const entries=[];
 for(const n of sf.statements){
  if(ts.isInterfaceDeclaration(n)||ts.isTypeAliasDeclaration(n)){
   const name=n.name.text;const entry={name,kind:ts.isInterfaceDeclaration(n)?'interface':'type',exported:exported(n),description:doc(n),declaration:typetext(n,sf),fields:fields(ts.isInterfaceDeclaration(n)?n:n.type),line:sf.getLineAndCharacterOfPosition(n.getStart()).line+1};
   entries.push(entry);decls.set(source+'#'+name,{node:n,sf});
  } else if(ts.isFunctionDeclaration(n)&&exported(n)&&n.name){
   const sig=checker.getSignatureFromDeclaration(n);
   let result=n.type?.getText()||(sig?checker.typeToString(checker.getReturnTypeOfSignature(sig),n,ts.TypeFormatFlags.NoTruncation):'unknown');
   if(result.length>16000)result='unknown /* inferred result: consult the named contract */';
   entries.push({name:n.name.text,kind:'function',exported:true,description:doc(n),parameters:n.parameters.map(p=>({name:p.name.getText(),optional:!!p.questionToken||!!p.initializer,type:p.type?.getText()||checker.typeToString(checker.getTypeAtLocation(p)),...(p.initializer&&p.initializer.getText().length<160?{default:p.initializer.getText()}:{})})),returns:result,declaration:`export function ${n.name.text}${n.typeParameters?'<' +n.typeParameters.map(t=>t.getText()).join(', ')+'>':''}(${n.parameters.map(p=>p.name.getText()+(p.questionToken||p.initializer?'?':'')+': '+(p.type?.getText()||checker.typeToString(checker.getTypeAtLocation(p)))).join(', ')}): ${result};`,line:sf.getLineAndCharacterOfPosition(n.getStart()).line+1});
  } else if(ts.isVariableStatement(n)&&exported(n)){
   for(const d of n.declarationList.declarations){
    if(!ts.isIdentifier(d.name))continue;
    const name=d.name.text,t=checker.getTypeAtLocation(d.name),sigs=t.getCallSignatures();
    if(sigs.length){const signature=checker.signatureToString(sigs[0],d,ts.TypeFormatFlags.NoTruncation);if(signature.length<16000)entries.push({name,kind:'function-value',exported:true,declaration:`export const ${name}: ${signature};`,description:doc(d),line:sf.getLineAndCharacterOfPosition(d.getStart()).line+1});}
    else {let init=d.initializer;while(init&&(ts.isAsExpression(init)||ts.isSatisfiesExpression(init)))init=init.expression;const literal=init&&(ts.isStringLiteral(init)||ts.isNumericLiteral(init)||init.kind===ts.SyntaxKind.TrueKeyword||init.kind===ts.SyntaxKind.FalseKeyword||ts.isArrayLiteralExpression(init)&&init.elements.every(x=>ts.isStringLiteral(x)||ts.isNumericLiteral(x)));
     if(literal)entries.push({name,kind:'constant',exported:true,declaration:`export const ${name} = ${typetext(d.initializer,sf)};`,description:doc(d),line:sf.getLineAndCharacterOfPosition(d.getStart()).line+1});
    }
   }
  } else if(ts.isClassDeclaration(n)&&exported(n)&&n.name){
   const members=n.members.filter(m=>!m.modifiers?.some(x=>x.kind===ts.SyntaxKind.PrivateKeyword||x.kind===ts.SyntaxKind.ProtectedKeyword)).flatMap(m=>{
    const prefix=m.modifiers?.some(x=>x.kind===ts.SyntaxKind.StaticKeyword)?'static ':'';
    if(ts.isConstructorDeclaration(m))return['constructor('+m.parameters.map(p=>p.name.getText()+(p.questionToken||p.initializer?'?':'')+': '+(p.type?.getText()||checker.typeToString(checker.getTypeAtLocation(p)))).join(', ')+')'];
    if(ts.isMethodDeclaration(m)){const sig=checker.getSignatureFromDeclaration(m);return sig?[`${prefix}${m.name.getText()}${checker.signatureToString(sig,m,ts.TypeFormatFlags.NoTruncation)}`]:[];}
    if(ts.isGetAccessorDeclaration(m)){const sig=checker.getSignatureFromDeclaration(m);return sig?[`${prefix}get ${m.name.getText()}(): ${checker.typeToString(checker.getReturnTypeOfSignature(sig),m,ts.TypeFormatFlags.NoTruncation)}`]:[];}
    if(ts.isPropertyDeclaration(m)&&!ts.isPrivateIdentifier(m.name))return[`${prefix}${m.modifiers?.some(x=>x.kind===ts.SyntaxKind.ReadonlyKeyword)?'readonly ':''}${m.name.getText()}${m.questionToken?'?':''}: ${m.type?.getText()||checker.typeToString(checker.getTypeAtLocation(m),m,ts.TypeFormatFlags.NoTruncation)}`];
    return[];
   });entries.push({name:n.name.text,kind:'class',exported:true,description:doc(n),declaration:`export class ${n.name.text} {\n${members.map(x=>'  '+x+';').join('\n')}\n}`,line:sf.getLineAndCharacterOfPosition(n.getStart()).line+1});
  }
 }
 const reexports=sf.statements.filter(ts.isExportDeclaration).map(n=>n.getText());
 if(!entries.length&&!reexports.length)continue;
 fingerprints.push({path:source,sha256:createHash('sha256').update(sf.text).digest('hex'),bytes:Buffer.byteLength(sf.text)});
 const imports=sf.statements.filter(ts.isImportDeclaration).map(n=>n.getText());
 const parts=[`# ${source}\n\n源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。\n\n[全部索引](${path.posix.relative(path.posix.dirname(dest),'reference/README.md')})\n`];
 if(imports.length)parts.push('<details><summary>类型依赖</summary>\n\n```ts\n'+imports.join('\n')+'\n```\n</details>\n');
 if(reexports.length)parts.push('## 重新导出的模块\n\n```ts\n'+reexports.join('\n')+'\n```\n');
 for(const e of entries){index.push({...e,source,document:dest,anchor:e.name.toLowerCase()});parts.push(`## ${e.name}\n\n${e.exported?'导出接口':'内部依赖类型'} · 源码第 ${e.line} 行。${e.description?'\n\n'+e.description:''}\n\n\`\`\`ts\n${e.declaration}\n\`\`\`\n`);
  if(e.fields?.length)parts.push('| 字段 | 可选 | 类型 | 含义／来源注释 |\n| --- | --- | --- | --- |\n'+e.fields.map(f=>`| \`${escaped(f.name)}\` | ${f.optional?'是':'否'} | \`${escaped(f.type)}\` | ${escaped(f.description||'见结构定义及所属功能文档')} |`).join('\n')+'\n');
  if(e.parameters?.length)parts.push('| 参数 | 可选 | 类型 | 默认值 |\n| --- | --- | --- | --- |\n'+e.parameters.map(p=>`| \`${escaped(p.name)}\` | ${p.optional?'是':'否'} | \`${escaped(p.type)}\` | ${escaped(p.default??'—')} |`).join('\n')+'\n');
 }
 write(dest,parts.join('\n'));
}
json('reference/symbols.json',index);
json('reference/source-snapshot.json',{date:'2026-10-10',version:'0.1.0',scope:'Shared contracts, rules engine signatures, game core, session, transport, assets, world model and selected local authoring entry points. No rulebook prose or asset binaries.',files:fingerprints});
const platformFiles=['index','auth','auth-security','community','media','publications','signaling','store'].map(n=>'game/apps/server/src/'+n+'.ts').concat(['game/package.json','game/apps/server/package.json','game/apps/desktop/package.json','game/apps/desktop/src-tauri/tauri.conf.json','game/apps/desktop/src-tauri/src/lib.rs','game/apps/desktop/src-tauri/src/wiki_backup.rs','game/apps/desktop/src-tauri/src/world_assets.rs','game/apps/desktop/src/net/BattleConnection.ts','game/apps/desktop/src/tabletop/ManualConnection.ts','game/apps/desktop/src/story/scriptMacro.ts','game/apps/desktop/src/story/macroRunner.ts']);
json('reference/platform-source-snapshot.json',{date:'2026-10-10',scope:'Manually documented HTTP, deployment, native and macro entry points; hashes only.',files:platformFiles.map(p=>{const bytes=fs.readFileSync(path.join(root,p));return{path:p,sha256:createHash('sha256').update(bytes).digest('hex'),bytes:bytes.length};})});
write('reference/README.md',`# 源码字段与调用签名\n\n共 ${fingerprints.length} 个文件、${index.length} 项类型／函数／常量。按包拆分，每个文件包含字段表、联合类型全部分支、参数、返回类型和依赖。带内部依赖标记的类型不承诺可从包顶层导入。\n\n- [机器可读符号目录](symbols.json)\n- [源码指纹](source-snapshot.json)\n- [规范化 JSON 结构](../schemas/README.md)\n\n| 源文件 | 声明数 |\n| --- | --- |\n`+fingerprints.map(f=>`| [${f.path.replace('game/','')}](${path.posix.relative('reference','reference/'+f.path.replace(/^game\//,'').replace(/\.ts$/,'.md'))}) | ${index.filter(e=>e.source===f.path).length} |`).join('\n')+'\n');
// JSON schemas describe normalized serializable data, not parser defaults, permissions or action semantics.
const definitions={},seen=new Map(),unsupported=[];
const candidates=[
 ['ResourceFile','resource-transfer'],['ActorFile','actor-transfer'],['JournalFile','journal-transfer'],['SceneArchiveHeader','scene-archive'],['WorldAssetPack','world-assets'],['CompendiumBody','compendium'],['CompendiumIndex','compendium'],['ManualTable','tabletop'],['ManualActor','tabletop'],['StoryResource','story'],['StageScript','story-stage'],['AdventureEvent','adventure-events'],['WorldAtlas','world-atlas'],['DndCharacter','dnd'],['DndIntent','dnd'],['LancerEquipmentAutomation','lancer-custom'],['LancerCombatIntent','lancer-combat'],['UtopiaCharacter','utopia'],['UtopiaIntent','utopia'],['WorldPublication','tabletop'],['AuthCredentials','auth'],['AuthResult','auth'],['AuthConfig','auth'],['AccountInfo','auth'],['CommunityAction','community'],['CommunityView','community'],['RegionEnvironment','scene-environment'],['TokenAppearance','token-appearance'],['CardStackFile','card-stack-file'],['AafCharacter','aaf'],['AafCatalog','aaf'],['WorldSummary','index'],['PlayerInfo','index'],['WorldSnapshot','index'],['AssetManifest','index'],['AssetPayload','index'],['MediaManifest','media'],['TableAction','@game/apps/desktop/src/tabletop/model.ts'],['WorldDocument','@game/packages/session/src/world-types.ts'],['ActorDocument','@game/packages/session/src/world-types.ts'],['WorldCommand','@game/packages/session/src/world-types.ts']
];
candidates.push(['RuleVariant','rule-variant']);
let anonymous=0;
function schema(t,depth=0){
 const f=t.flags;
 if(f&ts.TypeFlags.StringLiteral)return{const:t.value,type:'string'};
 if(f&ts.TypeFlags.NumberLiteral)return{const:t.value,type:'number'};
 if(f&ts.TypeFlags.BooleanLiteral)return{const:t.intrinsicName==='true',type:'boolean'};
 if(f&ts.TypeFlags.String)return{type:'string'};
 if(f&ts.TypeFlags.Number)return{type:'number'};
 if(f&ts.TypeFlags.Boolean)return{type:'boolean'};
 if(f&ts.TypeFlags.Null)return{type:'null'};
 if(f&ts.TypeFlags.Never)return false;
 if(f&(ts.TypeFlags.Undefined|ts.TypeFlags.Void))return false;
 if(f&(ts.TypeFlags.Any|ts.TypeFlags.Unknown)){return{description:'未知 JSON 内容：必须结合解析器或具体使用入口校验。'};}
 if(t.isUnion()){const types=t.types.filter(x=>!(x.flags&(ts.TypeFlags.Undefined|ts.TypeFlags.Void)));if(types.length===1)return schema(types[0],depth+1);return{anyOf:types.map(x=>schema(x,depth+1))};}
 if(checker.isArrayType(t))return{type:'array',items:schema(checker.getTypeArguments(t)[0],depth+1)};
 if(checker.isTupleType(t)){const args=checker.getTypeArguments(t);return{type:'array',prefixItems:args.map(x=>schema(x,depth+1)),minItems:args.length,maxItems:args.length};}
 if(seen.has(t.id))return{$ref:'#/$defs/'+seen.get(t.id)};
 if(depth>80)throw Error('Schema nesting too deep');
 const sym=t.aliasSymbol||t.symbol,decl=sym?.declarations?.[0];
 if(t.getCallSignatures().length||t.getConstructSignatures().length){unsupported.push(checker.typeToString(t));return{description:'不可序列化的函数／构造器；不能放入 JSON。',not:{}};}
 const base=sym?.name&&!sym.name.startsWith('__')?sym.name.replace(/[^\w-]/g,'_'):'Object';
 let name=base;while(Object.hasOwn(definitions,name))name=base+'_'+(++anonymous);
 seen.set(t.id,name);definitions[name]={};
 const props={},required=[];
 for(const p of checker.getPropertiesOfType(t)){
  if(p.name.startsWith('__@'))continue;
  const d=p.valueDeclaration||p.declarations?.[0]||decl;
  if(!d)continue;
  const pt=checker.getTypeOfSymbolAtLocation(p,d);props[p.name]=schema(pt,depth+1);
  const description=ts.displayPartsToString(p.getDocumentationComment(checker));if(description&&typeof props[p.name]==='object')props[p.name].description=description;
  if(!(p.flags&ts.SymbolFlags.Optional))required.push(p.name);
 }
 const str=checker.getIndexTypeOfType(t,ts.IndexKind.String);
 definitions[name]={type:'object',properties:props,...(required.length?{required}:{}),additionalProperties:str?schema(str,depth+1):false};
 return{$ref:'#/$defs/'+name};
}
const schemaRoots={};
for(const [name,file] of candidates){const entry=decls.get((file.startsWith('@')?file.slice(1):`game/packages/contracts/src/${file}.ts`)+`#${name}`);if(!entry){unsupported.push('Missing root '+name);continue;}schemaRoots[name]=schema(checker.getTypeAtLocation(entry.node.name));}
json('schemas/contracts.schema.json',{$schema:'https://json-schema.org/draft/2020-12/schema',$id:'urn:gongzhui:contracts:2026-10-10',title:'共坠群星规范化数据结构 2026-10-10',description:'只验证规范化后的结构；无法替代游戏解析器、版本校验、引用完整性和权限。通过 wrappers 选择根类型。',$defs:definitions});
function externalRefs(value){if(Array.isArray(value))return value.map(externalRefs);if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).map(([k,v])=>[k,k==='$ref'&&typeof v==='string'&&v.startsWith('#')?'./contracts.schema.json'+v:externalRefs(v)]));return value;}
for(const [name,s] of Object.entries(schemaRoots))json(`schemas/${name}.schema.json`,{$schema:'https://json-schema.org/draft/2020-12/schema',title:name,...externalRefs(s)});
json('schemas/roots.json',externalRefs(schemaRoots));
write('schemas/README.md',`# 机器可读结构\n\nJSON Schema Draft 2020-12，来源为当前 TypeScript 合同。这里是**规范化输出结构**：必填属性可能由游戏解析器补默认值。结构校验不包含全部数值范围、跨对象引用、规则版本、授权及业务条件，最终以客户端导入／源码解析器为准。没有网络 API 的 schema 不会因此变成网络 API。\n\n${Object.keys(schemaRoots).map(n=>`- [${n}](${n}.schema.json)`).join('\n')}\n\n底层 [contracts.schema.json](contracts.schema.json) 收集全部递归定义；离线使用时请保留同目录文件。\n`);
json('reference/extraction-report.json',{files:fingerprints.length,symbols:index.length,fields:index.reduce((n,e)=>n+(e.fields?.length??0),0),schemaRoots:Object.keys(schemaRoots),definitions:Object.keys(definitions).length,unsupported});
console.log(JSON.stringify({files:fingerprints.length,symbols:index.length,fields:index.reduce((n,e)=>n+(e.fields?.length??0),0),schemaRoots:Object.keys(schemaRoots).length,definitions:Object.keys(definitions).length,unsupported}));
