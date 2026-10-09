#!/usr/bin/env node
/** Portable backup assembler; Node 20+, no dependencies, no network, no account access. */
import fs from 'node:fs/promises';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
const sha=bytes=>createHash('sha256').update(bytes).digest('hex');
const json=async file=>JSON.parse(await fs.readFile(file,'utf8'));
const inside=(root,file)=>{const rel=path.relative(root,file);return rel!==''&&!rel.startsWith('..'+path.sep)&&rel!=='..'&&!path.isAbsolute(rel);};
function headerCheck(world){
 if(world.schemaVersion!==1||!world.id||!world.hostId||!world.systemId||!Array.isArray(world.assets)||!Array.isArray(world.actors))throw Error('不是 ManualTable 世界原稿；AAF 使用独立 WorldDocument');
 const ids=new Set();let bytes=0;
 for(const f of world.assets){if(!/^assets\/(?:(?:images|audio|video|models|documents)\/)?[a-f0-9]{64}\.(?:png|jpg|jpeg|webp|gif|svg|ogg|mp3|wav|glb|webm|mp4|pdf)$/.test(f.path)||path.posix.basename(f.path).split('.')[0]!==f.hash||!/^[a-f0-9]{64}$/.test(f.hash)||!Number.isSafeInteger(f.size)||f.size<1||f.size>64000000||ids.has(f.path))throw Error('附件清单无效');ids.add(f.path);bytes+=f.size;}
 if(bytes>512000000)throw Error('附件总量超过 512 MB');return world;
}
export async function packWorld(worldFile,sourceFile,assetRoot,output,objectsFile){
 const world=headerCheck(await json(worldFile)),sources=await json(sourceFile),root=await fs.realpath(assetRoot),parts=[];
 if(objectsFile)world.compendiumObjects=await json(objectsFile);
 if(world.story?.compendiums?.length&&!world.compendiumObjects)throw Error('世界含合集，请提供 compendium-objects.json');
 for(const f of world.assets){const source=sources[f.path];if(typeof source!=='string'||path.isAbsolute(source))throw Error('附件来源必须是相对路径：'+f.path);const file=await fs.realpath(path.resolve(root,source));if(!inside(root,file))throw Error('附件越出指定素材目录');const data=await fs.readFile(file);if(data.length!==f.size||sha(data)!==f.hash)throw Error('附件与清单不符：'+f.name);parts.push(data);}
 const meta=Buffer.from(JSON.stringify(world));if(meta.length>64000000)throw Error('世界资料超过 64 MB');
 const header=Buffer.alloc(12);header.write('AAFWLD02');header.writeUInt32LE(meta.length,8);
 await fs.writeFile(output,Buffer.concat([header,meta,...parts]),{flag:'wx'});
 return{output,assets:parts.length,bytes:12+meta.length+parts.reduce((n,b)=>n+b.length,0)};
}
export async function inspectWorld(input){
 const bytes=await fs.readFile(input);if(bytes.length<12||!['AAFWLD01','AAFWLD02'].includes(bytes.subarray(0,8).toString()))throw Error('不是 .aafworld 备份');
 const length=bytes.readUInt32LE(8);if(length>64000000||length+12>bytes.length)throw Error('世界资料长度损坏');
 const world=headerCheck(JSON.parse(bytes.subarray(12,12+length).toString('utf8')));let offset=12+length;
 for(const f of world.assets){const part=bytes.subarray(offset,offset+f.size);if(part.length!==f.size||sha(part)!==f.hash)throw Error('附件损坏：'+f.name);offset+=f.size;}
 if(offset!==bytes.length)throw Error('备份有多余数据');
 return{name:world.name,system:world.systemId,variant:world.ruleVariant?.id,scenes:(world.scenes?.length??0)+1,actors:world.actors.length,assets:world.assets.length,compendiums:world.story?.compendiums?.map(p=>({name:p.name,count:p.count})),stageScripts:world.story?.adventure?.stage?.scripts.length??0,bytes:bytes.length};
}
if(process.argv[1]&&path.resolve(process.argv[1])===fileURLToPath(import.meta.url)){
 try{const [command,...args]=process.argv.slice(2);if(command==='inspect'&&args.length===1)console.log(JSON.stringify(await inspectWorld(...args),null,2));else if(command==='pack'&&(args.length===4||args.length===5))console.log(JSON.stringify(await packWorld(...args),null,2));else throw Error('用法：node tools/world-pack.mjs inspect 世界.aafworld\n或：node tools/world-pack.mjs pack world.json asset-sources.json 素材根目录 新世界.aafworld [compendium-objects.json]');}
 catch(e){console.error(e.message);process.exitCode=1;}
}
