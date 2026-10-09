# game/packages/game-core/src/utopia/index.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {settleFlight} from './flight';
import {parseUtopiaIntent} from '@aelzerant/contracts';
import {environmentBattle} from './state';
import {interact,commitScene} from './scene';
import {committedTokenMotion,emptySceneFeatures} from '@aelzerant/contracts';
import {parseUtopiaCharacter,UTOPIA_CONDITIONS,type ManualTable,type UtopiaIntent,type UtopiaStep} from '@aelzerant/contracts';
import {utopiaStats,utopiaHas,utopiaWeapon,utopiaRoll,utopiaPreset,utopiaNpc} from '@aelzerant/rules-engine';
import {lancerDistance} from '../lancer/geometry';
import {battle,unit,isGm,requireGm,control,intact,condition,clearCondition,useReaction,message,addLog,type UtopiaContext} from './state';
import {resolveDamage} from './damage';
import {resolveAttack} from './weapons';
import {resolveAction} from './actions';
import {queueMovement,resolveMovement,planUtopiaMove} from './movement';
import {prepare,reinforce,start,activate,requestEndTurn,finishTurn,endBattle} from './turns';
import {rest,saveBuild} from './maintenance';
```
</details>

## 重新导出的模块

```ts
export {planUtopiaMove} from './movement';
export {utopiaAttackArea,weaponTargets} from './weapons';
export {UTOPIA_AUTOMATIC_ABILITIES} from './actions';
```

## applyUtopiaIntent

导出接口 · 源码第 38 行。

Mutates a transaction copy only. The caller commits after complete validation.

```ts
export function applyUtopiaIntent(table: ManualTable, intent: UtopiaIntent, context: {senderId:string;random?:()=>number;now?:number}): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `intent` | 否 | `UtopiaIntent` | — |
| `context` | 否 | `{senderId:string;random?:()=>number;now?:number}` | — |
