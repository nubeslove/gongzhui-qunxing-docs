# game/packages/contracts/src/region-events.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {regionAffectsFootprint,regionEffectPathEvents} from './region-coverage';
import type {EnvironmentEffect} from './scene-environment';
import {regionContains,regionPathEvents,type SceneRegion,type RegionBehavior,type RegionEventName} from './scene-region';
import {regionCombatEvents,type RegionCombatClock,type RegionCombatEvent} from './region-combat';
import type {SceneFeatures,ScenePoint} from './scene-features';
```
</details>

## RegionToken

导出接口 · 源码第 6 行。

```ts
export interface RegionToken {
    size?: number;
    id: string;
    actorId?: string;
    point: ScenePoint;
    owners: string[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `size` | 是 | `number` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `actorId` | 是 | `string` | 见结构定义及所属功能文档 |
| `point` | 否 | `ScenePoint` | 见结构定义及所属功能文档 |
| `owners` | 否 | `string[]` | 见结构定义及所属功能文档 |

## RegionNotice

导出接口 · 源码第 7 行。

```ts
export interface RegionNotice {
    environmentEffect?: EnvironmentEffect;
    confirmed?: boolean;
    teleport?: {
        sceneId: string;
        regionId: string;
        allowChoice?: boolean;
    };
    controllerId?: string;
    pause?: boolean;
    enabled?: boolean;
    macroId?: string;
    macroRevision?: number;
    actorId?: string;
    point?: ScenePoint;
    round?: number;
    turn?: number;
    regionId: string;
    behaviorId: string;
    tokenId: string;
    event: RegionEventName;
    text: string;
    audience: 'all' | 'gm' | 'owner';
    owners: string[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `environmentEffect` | 是 | `EnvironmentEffect` | 见结构定义及所属功能文档 |
| `confirmed` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `teleport` | 是 | `{sceneId:string;regionId:string;allowChoice?:boolean}` | 见结构定义及所属功能文档 |
| `teleport.sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `teleport.regionId` | 否 | `string` | 见结构定义及所属功能文档 |
| `teleport.allowChoice` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `controllerId` | 是 | `string` | 见结构定义及所属功能文档 |
| `pause` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `enabled` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `macroId` | 是 | `string` | 见结构定义及所属功能文档 |
| `macroRevision` | 是 | `number` | 见结构定义及所属功能文档 |
| `actorId` | 是 | `string` | 见结构定义及所属功能文档 |
| `point` | 是 | `ScenePoint` | 见结构定义及所属功能文档 |
| `round` | 是 | `number` | 见结构定义及所属功能文档 |
| `turn` | 是 | `number` | 见结构定义及所属功能文档 |
| `regionId` | 否 | `string` | 见结构定义及所属功能文档 |
| `behaviorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `tokenId` | 否 | `string` | 见结构定义及所属功能文档 |
| `event` | 否 | `RegionEventName` | 见结构定义及所属功能文档 |
| `text` | 否 | `string` | 见结构定义及所属功能文档 |
| `audience` | 否 | `'all'&#124;'gm'&#124;'owner'` | 见结构定义及所属功能文档 |
| `owners` | 否 | `string[]` | 见结构定义及所属功能文档 |

## RegionTransition

导出接口 · 源码第 8 行。

```ts
export interface RegionTransition {
    senderId?: string;
    isGm?: boolean;
    combatBefore?: RegionCombatClock;
    combatAfter?: RegionCombatClock;
    before?: SceneFeatures;
    after?: SceneFeatures;
    previous: RegionToken[];
    tokens: RegionToken[];
    paths?: Map<string, ScenePoint[]>;
    suppress?: boolean;
    managedRegionIds?: ReadonlySet<string>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `senderId` | 是 | `string` | 见结构定义及所属功能文档 |
| `isGm` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `combatBefore` | 是 | `RegionCombatClock` | 见结构定义及所属功能文档 |
| `combatAfter` | 是 | `RegionCombatClock` | 见结构定义及所属功能文档 |
| `before` | 是 | `SceneFeatures` | 见结构定义及所属功能文档 |
| `after` | 是 | `SceneFeatures` | 见结构定义及所属功能文档 |
| `previous` | 否 | `RegionToken[]` | 见结构定义及所属功能文档 |
| `tokens` | 否 | `RegionToken[]` | 见结构定义及所属功能文档 |
| `paths` | 是 | `Map<string,ScenePoint[]>` | 见结构定义及所属功能文档 |
| `suppress` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `managedRegionIds` | 是 | `ReadonlySet<string>` | 见结构定义及所属功能文档 |

## LiveBehavior

内部依赖类型 · 源码第 9 行。

```ts
interface LiveBehavior {
    region: SceneRegion;
    behavior: RegionBehavior;
    epoch: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `region` | 否 | `SceneRegion` | 见结构定义及所属功能文档 |
| `behavior` | 否 | `RegionBehavior` | 见结构定义及所属功能文档 |
| `epoch` | 否 | `number` | 见结构定义及所属功能文档 |

## BehaviorEvent

内部依赖类型 · 源码第 10 行。

```ts
interface BehaviorEvent {
    region: SceneRegion;
    behavior: RegionBehavior;
    event: RegionEventName;
    epoch: number;
    forced?: boolean;
    token?: RegionToken;
    clock?: RegionCombatEvent;
    enabled: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `region` | 否 | `SceneRegion` | 见结构定义及所属功能文档 |
| `behavior` | 否 | `RegionBehavior` | 见结构定义及所属功能文档 |
| `event` | 否 | `RegionEventName` | 见结构定义及所属功能文档 |
| `epoch` | 否 | `number` | 见结构定义及所属功能文档 |
| `forced` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `token` | 是 | `RegionToken` | 见结构定义及所属功能文档 |
| `clock` | 是 | `RegionCombatEvent` | 见结构定义及所属功能文档 |
| `enabled` | 否 | `boolean` | 见结构定义及所属功能文档 |

## applyRegionTransitions

导出接口 · 源码第 13 行。

Runs on the candidate before persistence. Viewing a scene never calls this executor.

```ts
export function applyRegionTransitions(input: RegionTransition): RegionNotice[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `input` | 否 | `RegionTransition` | — |
