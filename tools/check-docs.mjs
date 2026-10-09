#!/usr/bin/env node
/** Offline repository checks; dependency-free. Schema evaluator supports the keywords emitted here,
 * not a general-purpose replacement for a full JSON Schema implementation or game parsers. */
import fs from 'node:fs';import path from 'node:path';import os from 'node:os';import {fileURLToPath} from 'node:url';
import {packWorld,inspectWorld} from './world-pack.mjs';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..'),failures=[];
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.name==='.git'||e.name==='node_modules'?[]:e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);
const files=walk(root),json=new Map();const relative=f=>path.relative(root,f).replaceAll('\\','/');
for(const f of files.filter(f=>f.endsWith('.json')))try{json.set(f,JSON.parse(fs.readFileSync(f,'utf8')));}catch(e){failures.push(relative(f)+': '+e.message);}
function pointer(doc,fragment){if(!fragment)return doc;return fragment.replace(/^\//,'').split('/').reduce((v,k)=>v?.[decodeURIComponent(k).replaceAll('~1','/').replaceAll('~0','~')],doc);}
function resolveRef(ref,file){const [url,fragment='']=ref.split('#');if(/^[a-z]+:/i.test(url))throw Error('本库不允许远程Schema引用: '+ref);const dest=url?path.resolve(path.dirname(file),decodeURIComponent(url)):file;const value=pointer(json.get(dest),fragment);if(value===undefined)throw Error('缺失Schema引用 '+ref+' in '+relative(file));return[value,dest];}
let links=0,refs=0;
for(const f of files.filter(f=>f.endsWith('.md'))){
 const body=fs.readFileSync(f,'utf8').replace(/```[\s\S]*?```/g,'');
 for(const m of body.matchAll(/!?\[[^\]\n]*\]\((<?[^)\n]+>?)\)/g)){
  const href=m[1].replace(/^<|>$/g,'').split(/\s+"/)[0];if(/^(?:https?:|mailto:|#|app:)/i.test(href))continue;
  const dest=path.resolve(path.dirname(f),decodeURIComponent(href.split('#')[0]));links++;
  if(!fs.existsSync(dest))failures.push(relative(f)+' -> '+href);
 }
}
function checkRefs(value,file){if(!value||typeof value!=='object')return;if(typeof value.$ref==='string'){refs++;try{resolveRef(value.$ref,file);}catch(e){failures.push(e.message);}}for(const v of Object.values(value))checkRefs(v,file);}
for(const [f,value]of json)if(f.includes(path.sep+'schemas'+path.sep)||f.includes(path.sep+'api'+path.sep)||f.endsWith('.schema.json'))checkRefs(value,f);
const equal=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
function validate(v,s,file,where='$'){
 if(s===true)return[];if(s===false)return[where+': never'];
 if(s.$ref){const [t,p]=resolveRef(s.$ref,file);return validate(v,t,p,where);}
 let errors=[];
 if(Object.hasOwn(s,'const')&&!equal(v,s.const))errors.push(where+': const');
 if(s.enum&&!s.enum.some(x=>equal(v,x)))errors.push(where+': enum');
 if(s.anyOf&&!s.anyOf.some(t=>!validate(v,t,file,where).length))errors.push(where+': no anyOf branch');
 if(s.allOf)errors.push(...s.allOf.flatMap(t=>validate(v,t,file,where)));
 if(s.not&&!validate(v,s.not,file,where).length)errors.push(where+': not');
 if(s.if){const branch=!validate(v,s.if,file,where).length?s.then:s.else;if(branch)errors.push(...validate(v,branch,file,where));}
 const isObject=v!==null&&typeof v==='object'&&!Array.isArray(v);
 const types={string:typeof v==='string',number:typeof v==='number'&&Number.isFinite(v),integer:Number.isSafeInteger(v),boolean:typeof v==='boolean',null:v===null,object:isObject,array:Array.isArray(v)};
 if(s.type&&!types[s.type])return [...errors,where+': expected '+s.type];
 if(isObject){
  for(const k of s.required??[])if(!Object.hasOwn(v,k))errors.push(where+'.'+k+': required');
  for(const [k,x]of Object.entries(v))if(s.properties?.[k]!==undefined)errors.push(...validate(x,s.properties[k],file,where+'.'+k));else if(s.additionalProperties===false)errors.push(where+'.'+k+': additional property');else if(s.additionalProperties&&typeof s.additionalProperties==='object')errors.push(...validate(x,s.additionalProperties,file,where+'.'+k));
 }
 if(Array.isArray(v)){
  if(s.minItems!==undefined&&v.length<s.minItems)errors.push(where+': minItems');if(s.maxItems!==undefined&&v.length>s.maxItems)errors.push(where+': maxItems');if(s.uniqueItems&&new Set(v.map(x=>JSON.stringify(x))).size!==v.length)errors.push(where+': uniqueItems');
  v.forEach((x,i)=>{const t=s.prefixItems?.[i]??s.items;if(t!==undefined)errors.push(...validate(x,t,file,where+'['+i+']'));});
 }
 if(typeof v==='string'){if(s.minLength!==undefined&&[...v].length<s.minLength)errors.push(where+': minLength');if(s.maxLength!==undefined&&[...v].length>s.maxLength)errors.push(where+': maxLength');if(s.pattern&&!new RegExp(s.pattern).test(v))errors.push(where+': pattern');}
 if(typeof v==='number'){if(s.minimum!==undefined&&v<s.minimum)errors.push(where+': minimum');if(s.maximum!==undefined&&v>s.maximum)errors.push(where+': maximum');}
 return errors;
}
let examples=0;
const manifest=json.get(path.join(root,'examples/manifest.json'));
for(const entry of manifest?.files??[])if(entry.schema){const f=path.join(root,'schemas',entry.schema+'.schema.json');try{const issues=validate(json.get(path.join(root,entry.file)),json.get(f),f);examples++;if(issues.length)failures.push(entry.file+': '+issues.slice(0,10).join('; '));}catch(e){failures.push(entry.file+': '+e.message);}}
const releaseFile=path.join(root,'release/release-manifest.schema.json'),release=json.get(path.join(root,'release/release-manifest.example.json'));
failures.push(...validate(release,json.get(releaseFile),releaseFile).map(e=>'release: '+e));
if(!validate({...release,status:'published'},json.get(releaseFile),releaseFile).length)failures.push('草稿不能伪装成已发行版本');
let packChecks=0;
// Temporary sandbox is only removed after its absolute path is checked under os.tmpdir().
const temp=fs.mkdtempSync(path.join(os.tmpdir(),'gongzhui-docs-'));
try{
 const sources=path.join(temp,'sources.json'),output=path.join(temp,'demo.aafworld');fs.writeFileSync(sources,'{}');
 await packWorld(path.join(root,'examples/heartsea/world.json'),sources,temp,output);const view=await inspectWorld(output);if(view.system!=='otherworld-journey')throw Error('规则身份变化');packChecks++;
 let refused=false;try{await packWorld(path.join(root,'examples/heartsea/world.json'),sources,temp,output);}catch{refused=true;}if(!refused)throw Error('覆盖已有备份');packChecks++;
 const bad=path.join(temp,'bad.aafworld');fs.writeFileSync(bad,'bad');refused=false;try{await inspectWorld(bad);}catch{refused=true;}if(!refused)throw Error('损坏备份未拒绝');packChecks++;
}catch(e){failures.push('pack: '+e.message);}finally{const resolved=path.resolve(temp),base=path.resolve(os.tmpdir())+path.sep;if(!resolved.startsWith(base)||!path.basename(resolved).startsWith('gongzhui-docs-'))throw Error('临时路径校验失败');fs.rmSync(resolved,{recursive:true});}
const report={date:'2026-10-10',jsonFiles:json.size,localLinks:links,schemaRefs:refs,schemaExamples:examples,releaseChecks:2,packChecks,failures};
fs.writeFileSync(path.join(root,'reference/docs-check-report.json'),JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));if(failures.length)process.exitCode=1;
