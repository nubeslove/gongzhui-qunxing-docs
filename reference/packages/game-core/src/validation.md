# game/packages/game-core/src/validation.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import { isFiniteNumber, isId, isInteger, isRecord, isText, isAafMovementSpeeds, isAafSpeedMode } from "@aelzerant/contracts";
import { parseDamageDice } from "@aelzerant/rules-engine";
import {isAafRules} from '@aelzerant/contracts';
import {isAafAction} from './aaf/actions';
import type { CombatantInput, CombatIntent, WeaponProfile } from "./types";
```
</details>

## isWeapon

导出接口 · 源码第 14 行。

```ts
export function isWeapon(value: unknown): value is WeaponProfile;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |

## isCombatantInput

导出接口 · 源码第 26 行。

```ts
export function isCombatantInput(value: unknown): value is CombatantInput;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |

## isCombatIntent

导出接口 · 源码第 38 行。

```ts
export function isCombatIntent(value: unknown): value is CombatIntent;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |
