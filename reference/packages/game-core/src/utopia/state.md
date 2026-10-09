# game/packages/game-core/src/utopia/state.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {actorControlled,storyGm,type ManualTable,type UtopiaBattle,type UtopiaCharacter,type UtopiaCondition,type UtopiaDecision,type UtopiaTurn} from '@aelzerant/contracts';
import {utopiaHas,utopiaStats} from '@aelzerant/rules-engine';
```
</details>

## UtopiaContext

导出接口 · 源码第 4 行。

```ts
export interface UtopiaContext {
    table: ManualTable;
    senderId: string;
    random: () => number;
    now: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | 见结构定义及所属功能文档 |
| `senderId` | 否 | `string` | 见结构定义及所属功能文档 |
| `random` | 否 | `()=>number` | 见结构定义及所属功能文档 |
| `now` | 否 | `number` | 见结构定义及所属功能文档 |

## isGm

导出接口 · 源码第 5 行。

```ts
export const isGm: (x: UtopiaContext): boolean;
```

## requireGm

导出接口 · 源码第 6 行。

```ts
export function requireGm(x: UtopiaContext): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |

## battle

导出接口 · 源码第 7 行。

```ts
export function battle(x: UtopiaContext): UtopiaBattle;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |

## unit

导出接口 · 源码第 8 行。

```ts
export function unit(x: UtopiaContext, id: string): { token: import("@source/packages/contracts/src/tabletop").ManualToken; actor: import("@source/packages/contracts/src/tabletop").ManualActor; card: UtopiaCharacter; turn: UtopiaTurn | undefined; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |
| `id` | 否 | `string` | — |

## intact

导出接口 · 源码第 13 行。

```ts
export const intact: (c: UtopiaCharacter): boolean;
```

## control

导出接口 · 源码第 14 行。

```ts
export function control(x: UtopiaContext, actorId: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |
| `actorId` | 否 | `string` | — |

## activeUnit

导出接口 · 源码第 15 行。

```ts
export function activeUnit(x: UtopiaContext, id: string, allowShutdown?: boolean): { token: import("@source/packages/contracts/src/tabletop").ManualToken; actor: import("@source/packages/contracts/src/tabletop").ManualActor; card: UtopiaCharacter; turn: UtopiaTurn | undefined; } & { turn: UtopiaTurn; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |
| `id` | 否 | `string` | — |
| `allowShutdown` | 是 | `boolean` | false |

## addLog

导出接口 · 源码第 21 行。

```ts
export function addLog(x: UtopiaContext, text: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |
| `text` | 否 | `string` | — |

## message

导出接口 · 源码第 22 行。

```ts
export function message(x: UtopiaContext, text: string, actorIds?: string[]): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |
| `text` | 否 | `string` | — |
| `actorIds` | 是 | `string[]` | — |

## condition

导出接口 · 源码第 23 行。

```ts
export function condition(c: UtopiaCharacter, name: UtopiaCondition, source: string, next?: boolean, channel?: 'E'|'P'|'X'): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `UtopiaCharacter` | — |
| `name` | 否 | `UtopiaCondition` | — |
| `source` | 否 | `string` | — |
| `next` | 是 | `boolean` | false |
| `channel` | 是 | `'E'&#124;'P'&#124;'X'` | — |

## clearCondition

导出接口 · 源码第 28 行。

```ts
export function clearCondition(c: UtopiaCharacter, name: UtopiaCondition): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `UtopiaCharacter` | — |
| `name` | 否 | `UtopiaCondition` | — |

## spend

导出接口 · 源码第 29 行。

```ts
export function spend(x: UtopiaContext, id: string, action: string, cost: 0|1|2, free?: boolean): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |
| `id` | 否 | `string` | — |
| `action` | 否 | `string` | — |
| `cost` | 否 | `0&#124;1&#124;2` | — |
| `free` | 是 | `boolean` | false |

## canReact

导出接口 · 源码第 36 行。

```ts
export function canReact(x: UtopiaContext, id: string, kind: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |
| `id` | 否 | `string` | — |
| `kind` | 否 | `string` | — |

## useReaction

导出接口 · 源码第 40 行。

```ts
export function useReaction(x: UtopiaContext, id: string, kind: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |
| `id` | 否 | `string` | — |
| `kind` | 否 | `string` | — |

## ask

导出接口 · 源码第 41 行。

```ts
export function ask(x: UtopiaContext, actor: string, kind: UtopiaDecision['kind'], title: string, options: UtopiaDecision['options'], skip: boolean): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |
| `actor` | 否 | `string` | — |
| `kind` | 否 | `UtopiaDecision['kind']` | — |
| `title` | 否 | `string` | — |
| `options` | 否 | `UtopiaDecision['options']` | — |
| `skip` | 否 | `boolean` | — |

## wreck

导出接口 · 源码第 44 行。

```ts
export function wreck(x: UtopiaContext, id: string, power?: boolean): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |
| `id` | 否 | `string` | — |
| `power` | 是 | `boolean` | false |

## heal

导出接口 · 源码第 45 行。

```ts
export function heal(x: UtopiaContext, id: string, amount: number): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |
| `id` | 否 | `string` | — |
| `amount` | 否 | `number` | — |

## environmentBattle

导出接口 · 源码第 48 行。

Noncombat hazards still use the same damage/structure queue and saveable decisions.

```ts
export function environmentBattle(x: UtopiaContext): UtopiaBattle;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |
