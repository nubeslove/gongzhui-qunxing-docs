#!/usr/bin/env node
import fs from 'node:fs';import path from 'node:path';import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..'),args=process.argv.slice(2);
if(args[0]==='--catalog'){
 const allowed=['aaf','dnd5e-2024','lancer','terra-walker','new-utopia','heartsea'];if(!allowed.includes(args[1]))throw Error('可用目录：'+allowed.join(', '));
 const rows=JSON.parse(fs.readFileSync(path.join(root,'catalogs',args[1]+'.json'),'utf8')).entries,q=(args[2]??'').toLowerCase();
 console.log(JSON.stringify(rows.filter(r=>(r.id+' '+r.name).toLowerCase().includes(q)),null,2));
}else if(args[0]==='--action'){
 const actions=JSON.parse(fs.readFileSync(path.join(root,'reference/action-parameters.json'),'utf8')).actions;
 if(!args[1])console.log(JSON.stringify(Object.keys(actions),null,2));else if(actions[args[1]])console.log(JSON.stringify(actions[args[1]],null,2));else{console.error('未注册此动作');process.exitCode=1;}
}else{
 const q=args.join(' ').toLowerCase();if(!q)throw Error('用法：node tools/query.mjs 类型或函数名；或 --catalog 规则 [关键词]');
 const rows=JSON.parse(fs.readFileSync(path.join(root,'reference/symbols.json'),'utf8'));let found=rows.filter(r=>r.name.toLowerCase()===q);if(!found.length)found=rows.filter(r=>(r.name+' '+r.source).toLowerCase().includes(q));console.log(JSON.stringify(found,null,2));if(!found.length)process.exitCode=1;
}
