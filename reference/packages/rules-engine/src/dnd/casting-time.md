# game/packages/rules-engine/src/dnd/casting-time.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {DndCharacter} from '@aelzerant/contracts';
import {dndEntry} from './index';
import {dndClassLevel} from './class-features';
```
</details>

## dndRitualSpell

导出接口 · 源码第 5 行。

```ts
export const dndRitualSpell: (spell: string): boolean;
```

## dndActionSpell

导出接口 · 源码第 7 行。

The ritual alternative does not change a spell's ordinary Action casting time.

```ts
export const dndActionSpell: (spell: string): boolean;
```

## dndCanRitual

导出接口 · 源码第 8 行。

```ts
export function dndCanRitual(c: DndCharacter, spell: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `spell` | 否 | `string` | — |

## dndCastingRounds

导出接口 · 源码第 9 行。

```ts
export function dndCastingRounds(spell: string, ritual?: boolean): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `spell` | 否 | `string` | — |
| `ritual` | 是 | `boolean` | false |

## dndCastingPrepared

导出接口 · 源码第 10 行。

```ts
export function dndCastingPrepared(c: DndCharacter, spell: string, ritual?: boolean): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `spell` | 否 | `string` | — |
| `ritual` | 是 | `boolean` | false |

## dndRitualCharacter

导出接口 · 源码第 11 行。

```ts
export function dndRitualCharacter(c: DndCharacter, spell: string, ritual?: boolean): DndCharacter;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `spell` | 否 | `string` | — |
| `ritual` | 是 | `boolean` | false |
