#!/usr/bin/env node
import fs from 'node:fs';import path from 'node:path';import {createRequire} from 'node:module';import {pathToFileURL,fileURLToPath} from 'node:url';
const source=path.resolve(process.argv[2]||'');if(!process.argv[2])throw Error('需要游戏源码根目录');
const out=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const require=createRequire(path.join(source,'game/package.json'));const {register}=require('tsx/esm/api');register();require('tsx/cjs/api').register();
const load=p=>import(pathToFileURL(path.join(source,p)).href);
const C=await load('game/packages/contracts/src/index.ts');
const {WorldAuthority,worldCommandKinds}=await load('game/packages/session/src/world-authority.ts');
const {restoreWorld}=await load('game/packages/session/src/world-persistence.ts');
const {exportWorldActor,inspectWorldActor}=await load('game/packages/session/src/world-actor-transfer.ts');
const {newHeartseaActor}=await load('game/apps/desktop/src/heartsea/characters.ts');
const {utopiaPreset,validateUtopiaBuild}=await load('game/packages/rules-engine/src/utopia/index.ts');
const {parseWeapon,activateLancer,readLancer}=await load('game/apps/desktop/src/tabletop/lancer/model.ts');
const {createWorldBackup,readWorldBackup}=await load('game/apps/desktop/src/tabletop/worldBackup.ts');
const preparation=await load('game/tools/preparation.ts');
const {applyDraft,validateDraft,previewForPlayer}=preparation.default??preparation;
const manifest=[];let checks=0;
function save(file,data,parser,schema){const value=parser(data);checks++;const p='examples/'+file;fs.mkdirSync(path.dirname(path.join(out,p)),{recursive:true});fs.writeFileSync(path.join(out,p),JSON.stringify(value,null,2)+'\n');manifest.push({file:p,schema,parser:parser.name||'adapter',status:'runtime-parser-passed'});return value;}
const base=(system,variant)=>({schemaVersion:1,id:'demo-'+(variant?.id??system),systemId:system,systemVersion:C.GAME_SYSTEMS[system].version,...(variant?{ruleVariant:variant}:{}),name:'渡口的一天 · 接口示例',hostId:'demo-gm',revision:0,publishedVersion:0,updatedAt:1791475200000,activeSceneId:'initial',activeSceneName:'旧渡口',actors:[],assets:[],map:{width:24,depth:18,background:null,blocks:[],tokens:[]},journal:'',privateNotes:'示例秘密：渡船明天才会抵达。',messages:[],story:C.emptyStory()});
const actor=(id,name)=>({id,name,ownerId:'',public:false,fields:{},notes:''});
const resource=(system)=>({format:'aaf-resources',version:1,systemId:system,rootId:'demo-lantern',resources:[{id:'demo-lantern',systemId:system,name:'渡口提灯',kind:'item',description:'一盏可供演出使用的提灯。它不自动产生光源或修改数值。',packId:'homebrew',visibility:'gm',tags:['示例'],children:[],activities:[]}]});
for(const system of ['aaf','dnd5e-2024','lancer','otherworld-journey'])save((system==='otherworld-journey'?'heartsea':system)+'/resource.json',resource(system),C.parseResourceFile,'ResourceFile');
const dnd=C.parseDndCharacter({version:1,kind:'monster',side:'neutral',level:1,classes:[],feats:[],abilities:{str:10,dex:10,con:10,int:10,wis:10,cha:10},skills:{},saves:[],proficiency:2,ac:10,speed:30,initiative:0,hp:8,maxHp:8,tempHp:0,hitDice:[],spellAbility:null,spells:[],slots:Array.from({length:9},()=>({max:0,used:0})),weapons:[],shield:false,attacks:[],resources:{},conditions:[],exhaustion:0,resistances:[],immunities:[],vulnerabilities:[],death:{successes:0,failures:0,stable:false},inspiration:false});
const dndActor=C.parseManualActor({...actor('demo-guide','渡口向导'),dnd});
const heartseaActor=C.parseManualActor({...newHeartseaActor('见习引航员','', '使徒'),id:'demo-heartsea-guide',public:false});
const utopia=utopiaPreset();if(validateUtopiaBuild(utopia,true).length)throw Error('Default Utopia build invalid');checks++;
const utopiaActor=C.parseManualActor({...actor('demo-utopia','训练使徒'),utopia});
const lancerActor=C.parseManualActor({...activateLancer(actor('demo-lancer','训练驾驶员')),id:'demo-lancer'});if(readLancer(lancerActor).errors.length)throw Error('Lancer model errors');checks++;
function actorFile(system,a){return{format:'aaf-actor',version:1,systemId:system,systemVersion:C.GAME_SYSTEMS[system].version,actor:a,resources:[],grants:[],counters:[],catalog:[]};}
for(const [folder,system,a]of [['dnd5e-2024','dnd5e-2024',dndActor],['heartsea','otherworld-journey',heartseaActor],['new-utopia','lancer',utopiaActor],['lancer','lancer',lancerActor]])save(folder+'/actor.json',actorFile(system,a),C.parseActorFile,'ActorFile');
const weapon={name:'训练步枪',sp:0,limited:0,used:0,notes:'自编接口示例；平衡性由GM决定。',resourceId:'custom:demo-rifle',size:'main',mount:0,brace:-1,damage:'1d6 kinetic',range:'10',tags:'',automation:{version:1,kind:'weapon',profile:{weaponType:'rifle',damageParts:[{damage:'1d6',type:'kinetic'}],range:10,threat:1,accuracy:0,selfHeat:0,reliable:0,knockback:0,tags:[]}}};
save('lancer/weapon.json',weapon,parseWeapon,null);save('lancer/automation.json',weapon.automation,C.parseLancerAutomation,'LancerEquipmentAutomation');
save('aaf/catalog.json',{version:1,revision:'demo-1',talents:[{id:'demo-pathfinder',name:'熟悉道路',branch:'示例',description:'示例天赋，只记录学习，不声称附带自动数值。',cost:1,requires:[],x:0,y:0}],items:[]},C.parseAafCatalog,'AafCatalog');
const aaf=WorldAuthority.create('demo-aaf','demo-gm','AAF 空白备团草稿',12345).exportSave();save('aaf/world.json',aaf,v=>restoreWorld(v,'demo-aaf','demo-gm'),'WorldDocument');
const aafAuthor=WorldAuthority.create('demo-aaf-actor','demo-gm','独立角色示例',12345);
const createActor={requestId:'demo-create',expectedRevision:0,action:{kind:'actor.create',id:'demo-guide',profile:{name:'渡口向导',faction:'npc',hp:8,maxHp:8,ac:10,speed:30,attrs:{str:10,dex:10,con:10,int:10,wis:10,cha:10}},owners:[],visibility:'gm'}};
const actorReceipt=await aafAuthor.dispatchAsync('demo-gm',createActor);if(!actorReceipt.ok)throw Error(actorReceipt.message);checks++;
save('aaf/create-actor-command.json',createActor,C=>C,'WorldCommand');
const aafActorFile=exportWorldActor(aafAuthor.exportSave(),'demo-guide');inspectWorldActor(aafActorFile);checks++;
save('aaf/actor.json',aafActorFile,C.parseActorFile,'ActorFile');
save('shared/journal.json',{format:'aaf-journal',version:1,entry:{id:'demo-journal',kind:'journal',title:'旧渡口 · GM手记',body:'目的：认识向导。线索：渡船延期。和平出口：等待或改道。战斗出口：另备战术场景。',visibility:'gm',authorId:'demo-gm',status:'open',sceneId:'initial'}},C.parseJournalFile,'JournalFile');
const atlas=save('shared/atlas.json',{version:1,revision:0,currentId:'demo-pier',nodes:[{id:'demo-coast',parentId:null,name:'示例海岸',kind:'region',x:.5,y:.5,image:'',description:'请由GM上传区域地图。',people:[],visible:true},{id:'demo-pier',parentId:'demo-coast',name:'旧渡口',kind:'place',x:.4,y:.65,image:'',description:'玩家可以与向导交谈。',people:[],visible:true}]},C.parseWorldAtlas,'WorldAtlas');
const stage=save('shared/stage.json',{id:'demo-greeting',revision:0,name:'渡口初见',sceneId:'initial',background:'',cast:[{id:'guide',actorId:'',name:'向导',portrait:'',slot:1}],cues:[{id:'hello',speakerId:'guide',text:'你们打算往哪边走？'}],eventIds:[]},C.parseStageScript,'StageScript');
const event=save('shared/event.json',{id:'demo-route',revision:0,name:'选择下一站',text:'向导等待队伍的决定。',image:'',notes:'只是演示选项与剧情变量。',audience:'all',resolution:'vote',options:[{id:'wait',label:'留在渡口',description:'先了解附近的消息。',effects:[{type:'flag',key:'demo-route',value:'wait'}],failure:[]},{id:'walk',label:'沿岸步行',description:'由GM准备下一张地图。',effects:[{type:'flag',key:'demo-route',value:'walk'}],failure:[]}]},C.parseAdventureEvent,'AdventureEvent');
save('shared/elevation.json',{surface:{elevation:4,climbable:true,dc:12}},C.parseRegionEnvironment,'RegionEnvironment');
for(const [folder,system,variant,a]of [['dnd5e-2024','dnd5e-2024',null,dndActor],['lancer','lancer',null,lancerActor],['heartsea','otherworld-journey',null,heartseaActor],['terra-walker','dnd5e-2024',{id:'terra-walker',version:'0.9.1',base:'2024'},null],['new-utopia','lancer',{...C.NEW_UTOPIA_VARIANT},utopiaActor]]){
 let w=base(system,variant);if(a)w.actors=[a];w.story.atlas=atlas;w.story.adventure=C.emptyAdventure();w.story.adventure.stage={scripts:[stage],ambience:'default'};w.story.adventure.events=[event];
 if(variant?.id==='terra-walker')w.story.packs.push({id:'terra',name:'行于泰拉 · 泰拉行者 0.9.1（必需）',enabled:true});
 w=save(folder+'/world.json',w,C.parseManualTable,'ManualTable');
 const validated=validateDraft(w);checks++;
 const view=previewForPlayer(validated,'demo-player');if(view.privateNotes||view.actors.some(a=>a.notes)||view.story?.adventure?.stage?.scripts.length)throw Error('Player projection leaks preparation data');checks++;
 const backup=await createWorldBackup(w,async()=>{throw Error('Demo has no assets');});
 const recovered=await readWorldBackup(backup,'demo-restored-gm',system);
 if(recovered.table.hostId!=='demo-restored-gm'||recovered.table.id===w.id||recovered.table.serverWorldId)throw Error('Backup rebind failed');checks++;
}
// Exercise an actual local authoring command on a copy; do not publish injected built-in setting prose.
const empty=base('dnd5e-2024');empty.story.adventure=C.emptyAdventure();const drafted=applyDraft(empty,[{kind:'adventure',command:{op:'stage.save',expected:null,value:stage}}]);
if(!drafted.story.adventure.stage.scripts.some(s=>s.id===stage.id))throw Error('Stage authoring failed');checks++;
fs.writeFileSync(path.join(out,'examples/manifest.json'),JSON.stringify({date:'2026-10-10',checks,files:manifest},null,2)+'\n');
fs.writeFileSync(path.join(out,'reference/world-command-kinds.json'),JSON.stringify(worldCommandKinds,null,2)+'\n');
console.log(JSON.stringify({examples:manifest.length,checks,aafCommands:worldCommandKinds.length}));
