# game/packages/game-core/src/dnd/adjudication.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {dndSpellCanTargetObjects,dndCastingAbility,dndSpellSlot,spendDndSpellSlot} from '@aelzerant/rules-engine';
import {dndPlayerCanTarget} from '@aelzerant/contracts';
import {dndCover} from './geometry';
import {dndDistance} from './index';
import {actorAccess,actorControlled,createTimedDecision,DND_CONDITIONS,DND_DAMAGE_TYPES,parseDndHudRef,type CombatVisual,type DndIntent,type DndAdjudicationResult,type ManualActor,type ManualTable} from '@aelzerant/contracts';
import {dndEntry,dndSpellTargets,dndHudActions,dndHudKey,dndIncapacitated,type DndHudAction} from '@aelzerant/rules-engine';
```
</details>

## Hooks

内部依赖类型 · 源码第 7 行。

```ts
type Hooks = {
    senderId: string;
    now: number;
    id: () => string;
    spend: (a: ManualActor, k: 'action' | 'bonus' | 'reaction', magic?: boolean) => void;
    damage: (a: ManualActor, n: number, t: DndAdjudicationResult['effects'][number]['damageType']) => void;
    heal: (a: ManualActor, n: number) => void;
    log: (s: string, ...actors: ManualActor[]) => void;
    visual: (kind: CombatVisual['kind'], id: string, source: string, targets: string[]) => void;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `senderId` | 否 | `string` | 见结构定义及所属功能文档 |
| `now` | 否 | `number` | 见结构定义及所属功能文档 |
| `id` | 否 | `()=>string` | 见结构定义及所属功能文档 |
| `spend` | 否 | `(a:ManualActor,k:'action'&#124;'bonus'&#124;'reaction',magic?:boolean)=>void` | 见结构定义及所属功能文档 |
| `damage` | 否 | `(a:ManualActor,n:number,t:DndAdjudicationResult['effects'][number]['damageType'])=>void` | 见结构定义及所属功能文档 |
| `heal` | 否 | `(a:ManualActor,n:number)=>void` | 见结构定义及所属功能文档 |
| `log` | 否 | `(s:string,...actors:ManualActor[])=>void` | 见结构定义及所属功能文档 |
| `visual` | 否 | `(kind:CombatVisual['kind'],id:string,source:string,targets:string[])=>void` | 见结构定义及所属功能文档 |

## adjudicateDnd

导出接口 · 源码第 12 行。

A held GM decision: no automatic timeout, no cost until the GM commits the result.

```ts
export function adjudicateDnd(table: ManualTable, intent: DndIntent, h: Hooks): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `intent` | 否 | `DndIntent` | — |
| `h` | 否 | `Hooks` | — |
