# game/packages/game-core/src/dnd/sorcery.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {cancelDndReady} from './ready';
import {attachDndSpellEffect} from './attach-effect';
import {DND_SPELL_EXECUTORS,dndSpellChoiceOptions} from '@aelzerant/rules-engine';
import {dndObservableCast} from '@aelzerant/rules-engine';
import {stopDndCasting} from './long-casting';
import {addDndFeatureEffect} from './class-features';
import {dndFeatureEffect,dndFeatureExpiry,dndConditionImmune} from '@aelzerant/rules-engine';
import {dndCleaveProblem,resolveDndMastery} from './weapon-mastery';
import {DND_MASTERY_NAMES} from '@aelzerant/rules-engine';
import {dndVerbalProblem} from './spell-components';
import {dndFreeSpellCast,dndSpellPayment,spendDndSpellPayment,dndSpellSourceName,dndRaging,dndUntrainedArmor} from '@aelzerant/rules-engine';
import {chooseDndHeroicDie,rollDndOwnedDice} from './roll-decisions';
import {dndAttackDefenses} from './attack-defense';
import {dndCover} from './geometry';
import {dndClassLevel,dndMartialDie,DND_DAMAGE_NAMES} from '@aelzerant/rules-engine';
import {dndContextTest} from './rolls';
import {dndZoneEntryJobs} from './ongoing-zones';
import {rollDndDamageJob,rerollDndDamageDie,dndDamageJobParts,type DndDamagePart} from './damage-roll';
import {dndEndActionEffects} from './combat-effects';
import {dndCharmedBy} from '@aelzerant/rules-engine';
import {dndActorMagicBlock,dndCannotUseMagic,dndCastOrigin} from './magic-fields';
import {dndMagicRegion,dndEffectTargetProblem} from './scene-spells';
import {dndEffectActive} from './effects';
import {dndPlayerCanTarget,actorController,actorControlled,createTimedDecision,pauseTimedDecision,timedDecisionExpired,timedDecisionDefault,timedDecisionAnswer,dndCanSeeActor,type ManualActor,type ManualTable,type DndIntent,type DndMagicJob,type DndMagicPrompt,type DndCastFrame,type DndDamageType} from '@aelzerant/contracts';
import {dndActiveSpellProfiles,DND_CATALOG,dndEntry,dndDice,dndDie,dndTest,dndMod,dndIncapacitated,dndPactPool,dndSpellSlot,spendDndSpellSlot,dndCastingAbility,dndSpellSources,spellfireLevel,spellfireDie,spellfireBolster,sorcererClass,syncSorcery,sorcerySlotCosts,sorceryMetamagic,crownActive,innateBonus} from '@aelzerant/rules-engine';
import {dndEffectRollModifiers} from './effects';
import {applyDndTeleport} from './teleport';
import {pushDndActor} from './forced-movement';
import {dndFeatherChoices,dndFeatherTargetProblem} from './feather-fall';
import {dndFeatherEffect,dndIsFalling} from './falling';
import {consumeDndMaterial} from './spell-components';
import {resolveDndResize} from './resize';
import {dndGrappleChoices,dndUnarmedLabel,dndUnarmedAutoFail,resolveDndUnarmed,resolveDndGrappleEscape} from './grappling';
```
</details>

## Job

内部依赖类型 · 源码第 34 行。

```ts
type Job = DndMagicJob;
```

## CombatTrace

内部依赖类型 · 源码第 35 行。

```ts
type CombatTrace = import('@aelzerant/contracts').CombatTrace;
```

## DamageJob

内部依赖类型 · 源码第 36 行。

```ts
type DamageJob = Extract<Job, {
    kind: 'damage';
}>;
```

## SorceryContext

导出接口 · 源码第 37 行。

```ts
export interface SorceryContext {
    table: ManualTable;
    senderId: string;
    now: number;
    random: () => number;
    id: () => string;
    actor: (id: string) => ManualActor;
    distance: (a: string, b: string) => number;
    spend: (a: ManualActor, kind: 'action' | 'bonus' | 'reaction', magic?: boolean) => void;
    log: (text: string, ...actors: ManualActor[]) => void;
    rollLog: (a: ManualActor, label: string, r: ReturnType<typeof dndTest>, ...others: ManualActor[]) => void;
    heal: (a: ManualActor, amount: number) => void;
    damage: (a: ManualActor, amount: number, type: DndDamageType, critical?: boolean, sourceId?: string, additional?: DndDamagePart[], melee?: boolean, event?: {
        attack?: boolean;
        spell?: string;
        factor?: number;
        halfDefense?: boolean;
    }) => void;
    visual: (kind: 'spell', id: string, actor: string, targets: string[]) => void;
    trace?: (event: CombatTrace) => void;
    execute: (job: Job) => Job[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | 见结构定义及所属功能文档 |
| `senderId` | 否 | `string` | 见结构定义及所属功能文档 |
| `now` | 否 | `number` | 见结构定义及所属功能文档 |
| `random` | 否 | `()=>number` | 见结构定义及所属功能文档 |
| `id` | 否 | `()=>string` | 见结构定义及所属功能文档 |
| `actor` | 否 | `(id:string)=>ManualActor` | 见结构定义及所属功能文档 |
| `distance` | 否 | `(a:string,b:string)=>number` | 见结构定义及所属功能文档 |
| `spend` | 否 | `(a:ManualActor,kind:'action'&#124;'bonus'&#124;'reaction',magic?:boolean)=>void` | 见结构定义及所属功能文档 |
| `log` | 否 | `(text:string,...actors:ManualActor[])=>void` | 见结构定义及所属功能文档 |
| `rollLog` | 否 | `(a:ManualActor,label:string,r:ReturnType<typeof dndTest>,...others:ManualActor[])=>void` | 见结构定义及所属功能文档 |
| `heal` | 否 | `(a:ManualActor,amount:number)=>void` | 见结构定义及所属功能文档 |
| `damage` | 否 | `(a:ManualActor,amount:number,type:DndDamageType,critical?:boolean,sourceId?:string,additional?:DndDamagePart[],melee?:boolean,event?:{attack?:boolean;spell?:string;factor?:number;halfDefense?:boolean})=>void` | 见结构定义及所属功能文档 |
| `visual` | 否 | `(kind:'spell',id:string,actor:string,targets:string[])=>void` | 见结构定义及所属功能文档 |
| `trace` | 是 | `(event:CombatTrace)=>void` | 见结构定义及所属功能文档 |
| `execute` | 否 | `(job:Job)=>Job[]` | 见结构定义及所属功能文档 |

## dndSorceryRuntime

导出接口 · 源码第 49 行。

```ts
export function dndSorceryRuntime(ctx: SorceryContext): { run: (jobs: Job[]) => void; decision: (intent: DndIntent) => boolean; operation: (intent: Extract<DndIntent, { type: "sorcery"; }>) => void; points: (id: string, cost: number) => void; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `ctx` | 否 | `SorceryContext` | — |
