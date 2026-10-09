#!/usr/bin/env node
// Extract direct validation expressions and action parameter references, not implementation bodies.
import fs from 'node:fs';import path from 'node:path';import {createRequire} from 'node:module';import {fileURLToPath} from 'node:url';
const source=path.resolve(process.argv[2]||'');if(!process.argv[2])throw Error('需要源码根目录');
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const require=createRequire(path.join(source,'game/apps/desktop/package.json')),ts=require('typescript');
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);
const files=walk(path.join(source,'game/packages')).filter(f=>f.endsWith('.ts')&&!/\.test\.ts$|\.generated\.ts$|node_modules|[/\\]dist[/\\]/.test(f));
const kinds=JSON.parse(fs.readFileSync(path.join(root,'reference/world-command-kinds.json'),'utf8')),actions=new Map(kinds.map(k=>[k,[]])),validators=[];
const esc=s=>String(s).replaceAll('|','&#124;').replaceAll('\n',' ');
const expression=n=>n.getText().replace(/\s+/g,' ').trim();
const uniq=x=>[...new Set(x)];
const short=n=>n.getText().length<=500&&!/=>|function\s*\(/.test(n.getText());
function detail(node,sf){
 const fields=[],checks=[],guards=[],delegates=[];
 function visit(n){
  if(ts.isPropertyAccessExpression(n)&&n.expression.getText()==='action')fields.push(n.name.text);
  if(ts.isCallExpression(n)&&/^(require[A-Z]|parse[A-Z]|is[A-Z]|story(Number|String|Boolean|Id|Object)|optionalText|assetReference|ownedActor|assertGm|idList|visibility|actorProfile)/.test(n.expression.getText())&&short(n))checks.push(expression(n));
  if(ts.isIfStatement(n)&&short(n.expression)&&n.thenStatement.getText().includes('throw'))guards.push(expression(n.expression));
  if(ts.isAsExpression(n)&&n.expression.getText().includes('action'))delegates.push(n.type.getText());
  ts.forEachChild(n,visit);
 } visit(node);
 return {source:path.relative(source,sf.fileName).replaceAll('\\','/'),line:sf.getLineAndCharacterOfPosition(node.getStart()).line+1,fields:uniq(fields.filter(x=>x!=='kind')),checks:uniq(checks),rejectionConditions:uniq(guards),delegatedTypes:uniq(delegates.filter(t=>t!=='unknown'))};
}
for(const file of files){
 const sf=ts.createSourceFile(file,fs.readFileSync(file,'utf8'),ts.ScriptTarget.Latest,true);
 function add(k,n){if(actions.has(k))actions.get(k).push(detail(n,sf));}
 function visit(n){
  if(ts.isPropertyAssignment(n)&&ts.isStringLiteral(n.name))add(n.name.text,n.initializer);
  if(ts.isCaseClause(n)&&ts.isStringLiteral(n.expression))add(n.expression.text,n);
  if(ts.isBinaryExpression(n)&&n.operatorToken.kind===ts.SyntaxKind.EqualsToken&&ts.isElementAccessExpression(n.left)&&ts.isStringLiteral(n.left.argumentExpression))add(n.left.argumentExpression.text,n.right);
  if(ts.isFunctionDeclaration(n)&&n.name&&/^(parse|require|is|validate|assert)[A-Z]/.test(n.name.text)&&n.body){
   const d=detail(n.body,sf);if(d.checks.length||d.rejectionConditions.length)validators.push({name:n.name.text,...d});
  }
  ts.forEachChild(n,visit);
 }visit(sf);
}
// These commands are routed specially before/around the ordinary handler table.
actions.set('world.undo',[{source:'game/packages/session/src/world-authority.ts',fields:[],checks:['senderId === hostId','history.length > 0'],rejectionConditions:[],delegatedTypes:[],note:'仅GM；只撤销当前有限历史中的可逆编辑；不提供任意战斗回滚。'}]);
const special={
 'combat.rollback':{source:'game/packages/session/src/world-combat-rollback.ts',type:'CombatRollbackCommand'},
 'adjudication.apply':{source:'game/packages/session/src/world-adjudication.ts',type:'AdjudicationCommand'},
 'actor.copy':{source:'game/packages/session/src/world-actor-transfer.ts',type:'ActorTransferCommand'},
 'actor.import':{source:'game/packages/session/src/world-actor-transfer.ts',type:'ActorTransferCommand'}
};
for(const [k,s]of Object.entries(special))if(!actions.get(k)?.length){const file=path.join(source,s.source),sf=ts.createSourceFile(file,fs.readFileSync(file,'utf8'),ts.ScriptTarget.Latest,true);const d=detail(sf,sf);d.delegatedTypes=uniq([...d.delegatedTypes,s.type]);actions.set(k,[d]);}
// AAF character cases share actor ownership and a separate aaf.revision guard.
for(const [k,records]of actions)if(k.startsWith('aaf.')&&k!=='aaf.catalog')for(const d of records){d.fields=uniq(['actorId','expected',...d.fields]);d.checks=uniq(['ownedActor(world, action.actorId, context)','action.expected === current.revision',...d.checks]);d.note='共享world-aaf入口还检查战斗锁、角色一致性并递增aaf.revision；具体分支可有额外GM限制。';}
const missing=[...actions].filter(([,v])=>!v.length).map(([k])=>k);
fs.writeFileSync(path.join(root,'reference/action-parameters.json'),JSON.stringify({date:'2026-10-10',kind:'static-direct-expressions',missing,actions:Object.fromEntries(actions)},null,2)+'\n');
fs.writeFileSync(path.join(root,'reference/parser-constraints.json'),JSON.stringify({date:'2026-10-10',scope:'Direct parser/validator call arguments and rejection predicates. Not exhaustive interprocedural validation.',validators},null,2)+'\n');
const heading=`# AAF世界动作参数\n\n当前注册${kinds.length}个命令。下面从实际处理器提取读取的action字段、直接校验表达式、拒绝条件和转交类型；不是凭命令名称猜测的接口。嵌套结构和业务检查继续沿“转交类型”到[符号索引](../../reference/README.md)查询。\n\n完整外层为WorldCommand：requestId、expectedRevision、action.kind。静态提取中的条件为**拒绝条件**，不是应填入JSON的值；局部变量需结合对应类型理解。参数表不把“代码读取过”误写成“所有场景都必填”，可选性以联合类型／解析器为准。\n\n[机器可读动作表](../../reference/action-parameters.json) · [解析器范围／默认值表达式](../../reference/parser-constraints.json) · [命令事务与联机](commands-and-network.md)\n\n数值参数的requireInteger(value,min,max)表示闭区间整数；requireText(value,max)是非空受限文字，optionalText允许空串。默认值如action.quantity ?? 1只在参数省略时使用。\n\n`;
fs.writeFileSync(path.join(root,'docs/api/aaf-actions.md'),heading+[...actions].map(([k,records])=>`## ${k}\n\n`+records.map(d=>`来源：\`${d.source}\`${d.line?' 第'+d.line+'行':''}。${d.note??''}\n\n读取字段：${d.fields.length?d.fields.map(f=>'`'+f+'`').join('、'):'无额外直接字段'}。\n\n${d.delegatedTypes.length?'转交类型：'+d.delegatedTypes.map(t=>'`'+t+'`').join('、')+'。\n\n':''}${d.checks.length?'直接校验：\n\n'+d.checks.map(c=>'- `'+esc(c)+'`').join('\n')+'\n\n':''}${d.rejectionConditions.length?'<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>\n\n'+d.rejectionConditions.map(c=>'- `'+esc(c)+'`').join('\n')+'\n\n</details>\n\n':''}`).join('')).join(''));
console.log(JSON.stringify({commands:kinds.length,missing,validators:validators.length}));if(missing.length)process.exitCode=1;
