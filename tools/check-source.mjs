#!/usr/bin/env node
import fs from 'node:fs';import path from 'node:path';import {createHash} from 'node:crypto';import {fileURLToPath} from 'node:url';
const source=path.resolve(process.argv[2]||'');if(!process.argv[2])throw Error('需要源码根目录');
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..'),read=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8')),failures=[];
const snapshot=read('reference/source-snapshot.json');
const platform=read('reference/platform-source-snapshot.json');
for(const f of [...snapshot.files,...platform.files]){const p=path.join(source,f.path);if(!fs.existsSync(p)||createHash('sha256').update(fs.readFileSync(p)).digest('hex')!==f.sha256)failures.push('源码已变动: '+f.path);}
const routes=new Set();
for(const name of ['index','auth','community','publications','media']){
 const text=fs.readFileSync(path.join(source,'game/apps/server/src/'+name+'.ts'),'utf8');
 for(const m of text.matchAll(/app\.(get|post|put|delete)\(\s*['"]([^'"]+)['"]/g))routes.add(m[1]+' '+m[2].replace(/:(\w+)(?:\(\*\))?/g,'{$1}'));
 if(text.includes('app.post(`/api/auth/${action}`')){const list=text.match(/for \(const action of \[([^\]]+)\]/);if(!list)throw Error('账号路由列表变化，需要人工核对');for(const m of list[1].matchAll(/'([^']+)'/g))routes.add('post /api/auth/'+m[1]);}
}
const spec=read('api/openapi.json'),documented=new Set(Object.entries(spec.paths).flatMap(([p,ops])=>Object.keys(ops).filter(k=>['get','post','put','delete'].includes(k)).map(k=>k+' '+p)));
for(const r of routes)if(!documented.has(r))failures.push('API未文档化: '+r);for(const r of documented)if(!routes.has(r))failures.push('API源码中不存在: '+r);
const kinds=read('reference/world-command-kinds.json'),actions=read('reference/action-parameters.json');for(const k of kinds)if(!actions.actions[k]?.length)failures.push('动作未文档化: '+k);
const report={date:'2026-10-10',sourceFiles:snapshot.files.length,platformSourceFiles:platform.files.length,httpOperations:routes.size,aafCommands:kinds.length,failures};fs.writeFileSync(path.join(root,'reference/source-check-report.json'),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));if(failures.length)process.exitCode=1;
