import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
const source=path.resolve(process.argv[2]||'');if(!process.argv[2])throw Error('需要游戏源码根目录');
const out=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const ts=createRequire(path.join(source,'game/apps/desktop/package.json'))('typescript');
const write=(p,v)=>{fs.mkdirSync(path.dirname(path.join(out,p)),{recursive:true});fs.writeFileSync(path.join(out,p),typeof v==='string'?v:JSON.stringify(v,null,2)+'\n');};
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);
const groups={
 aaf:['game/packages/rules-engine/src/aaf-catalog.generated.ts','game/packages/rules-engine/src/aaf-character-catalog.generated.ts'],
 'dnd5e-2024':['game/packages/rules-engine/src/dnd/catalog.generated.ts','game/packages/rules-engine/src/dnd/creation-options.generated.ts','game/packages/rules-engine/src/dnd/spellfire.generated.ts'],
 lancer:['game/apps/desktop/src/tabletop/lancer/data/catalog.json'],
 'terra-walker':['game/packages/rules-engine/src/terra/creation.generated.ts'],
 'new-utopia':['game/packages/rules-engine/src/utopia/catalog.generated.ts'],
 heartsea:['game/apps/desktop/public/heartsea/library.json']
};
const counts={};
for(const [group,files] of Object.entries(groups)){
 const rows=[];
 for(const file of files){if(!fs.existsSync(path.join(source,file)))throw Error('Missing catalogue '+file);const text=fs.readFileSync(path.join(source,file),'utf8');
  const take=(v,location)=>{if(!v||typeof v!=='object')return;if(typeof v.id==='string'&&(typeof v.name==='string'||typeof v.title==='string'))rows.push({id:v.id,name:v.name??v.title,...Object.fromEntries(['kind','category','type','book','level','origin','automation','status'].filter(k=>['string','number','boolean'].includes(typeof v[k])).map(k=>[k,v[k]])),source:file,location});};
  if(file.endsWith('.json')){const visit=(v,p)=>{take(v,p);if(Array.isArray(v))v.forEach((x,i)=>visit(x,p+'['+i+']'));else if(v&&typeof v==='object')for(const [k,x]of Object.entries(v))if(typeof x==='object'&&x!==null)visit(x,p+'.'+k);};visit(JSON.parse(text),'$');}
  else {const sf=ts.createSourceFile(file,text,ts.ScriptTarget.Latest,true);const visit=n=>{if(ts.isObjectLiteralExpression(n)){const v={};for(const p of n.properties)if(ts.isPropertyAssignment(p)){const val=p.initializer;if(ts.isStringLiteral(val)||ts.isNumericLiteral(val))v[p.name.getText(sf).replace(/^['"]|['"]$/g,'')]=ts.isNumericLiteral(val)?Number(val.text):val.text;}take(v,'line '+(sf.getLineAndCharacterOfPosition(n.getStart()).line+1));}ts.forEachChild(n,visit);};visit(sf);}
 }
 const unique=[...new Map(rows.map(r=>[r.source+'|'+r.id+'|'+r.location,r])).values()];write(`catalogs/${group}.json`,{date:'2026-10-10',scope:'ID and names only. Index inclusion does not establish automation or redistribution rights.',entries:unique});counts[group]=unique.length;
}
// String dictionaries are part of the interface, despite not having statically named TS properties.
const dynamic=[];
for(const dir of ['game/apps/desktop/src/tabletop/lancer','game/apps/desktop/src/heartsea','game/apps/desktop/src/terra','game/packages/game-core/src/lancer']){
 for(const file of walk(path.join(source,dir)).filter(f=>/\.tsx?$/.test(f)&&!/\.test\.|\.generated\./.test(f))){const text=fs.readFileSync(file,'utf8'),sf=ts.createSourceFile(file,text,ts.ScriptTarget.Latest,true);const visit=n=>{if(ts.isElementAccessExpression(n)&&n.argumentExpression&&/(?:fields|^f$)/.test(n.expression.getText(sf))){const arg=n.argumentExpression;let key=ts.isStringLiteral(arg)?arg.text:ts.isTemplateExpression(arg)?arg.getText(sf).slice(1,-1).replaceAll('${LC}','lancer.')+ '（插值）':null;if(key)dynamic.push({key,source:path.relative(source,file).replaceAll('\\','/'),line:sf.getLineAndCharacterOfPosition(n.getStart()).line+1,expression:n.getText(sf)});}ts.forEachChild(n,visit);};visit(sf);}
}
const keys=[...new Set(dynamic.map(x=>x.key))].sort();write('reference/dynamic-fields.json',dynamic);
write('docs/api/dynamic-fields.md','# 字符串扩展字段\n\nManualActor.fields 的所有值都是字符串。此清单列出代码直接读取或写入的字面量键及插值模式；普通任意资料字段不代表规则执行器会消费。数值、JSON 字符串和枚举的含义见各规则手册。某些参数化键由表驱动生成，须结合关联类型与注册表。\n\n'+keys.map(k=>{const hits=dynamic.filter(x=>x.key===k);return `## \`${k}\`\n\n`+hits.map(x=>`- \`${x.source}:${x.line}\` → \`${x.expression}\``).join('\n');}).join('\n\n')+'\n');
write('catalogs/README.md','# 可引用的数据目录\n\n只索引当前源码中的资源 ID、名称、分类、来源定位和原始状态标记。不附完整规则正文。不同目录可能包含嵌套子项，同名／同 ID 必须结合来源分类定位，数量不是自动化覆盖率。\n\n| 规则 | 索引条目 | 文件 |\n| --- | --- | --- |\n'+Object.entries(counts).map(([g,n])=>`| ${g} | ${n} | [${g}.json](${g}.json) |`).join('\n')+'\n\n引用前核对世界是否启用对应扩展。没有出现的资源不要自行猜测 ID；从客户端导出或向 GM 获取。\n');
console.log(JSON.stringify({catalogs:counts,dynamicFields:keys.length}));
