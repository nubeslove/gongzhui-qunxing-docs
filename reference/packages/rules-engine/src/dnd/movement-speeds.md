# game/packages/rules-engine/src/dnd/movement-speeds.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {DndCharacter} from '@aelzerant/contracts';
import {dndEntry} from './index';
import {dndActiveSpellProfiles} from './spell-effects';
import {dndClassLevel,dndMartialArts,dndFeatureEffect} from './class-features';
```
</details>

## dndSpiderClimbActive

导出接口 · 源码第 6 行。

```ts
export const dndSpiderClimbActive: (c: DndCharacter): boolean;
```

## dndMovementSpeeds

导出接口 · 源码第 10 行。

Explicit overrides also support authored monsters; older imports infer the printed speeds.

```ts
export function dndMovementSpeeds(c: DndCharacter): { fly?: number | undefined; swim?: number | undefined; climb?: number | undefined; burrow?: number | undefined; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |

## dndBaseMovementSpeed

导出接口 · 源码第 18 行。

```ts
export function dndBaseMovementSpeed(c: DndCharacter, mode?: string): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `mode` | 是 | `string` | 'walk' |
