# game/packages/game-core/src/spiral/content.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {emptyAafRules,aafCombatDuration,type AafAbility,type AafEffectOperation,type SpiralClass,type SpiralMember,type SpiralSettings} from '@aelzerant/contracts';
import type {CombatantInput} from '../types';
import {parseDamageDice} from '@aelzerant/rules-engine';
```
</details>

## SPIRAL_CLASSES

导出接口 · 源码第 6 行。

Trial content is independent of handbook resources and can be replaced as one versioned pack.

```ts
export const SPIRAL_CLASSES: Record<SpiralClass, {
    name: string;
    glyph: string;
    description: string;
    kits: Array<{
        id: string;
        name: string;
        description: string;
    }>;
}>;
```

## spiralAbility

导出接口 · 源码第 11 行。

```ts
export function spiralAbility(id: string, name: string, effects: AafEffectOperation[], extra?: Partial<AafAbility>): AafAbility;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | — |
| `name` | 否 | `string` | — |
| `effects` | 否 | `AafEffectOperation[]` | — |
| `extra` | 是 | `Partial<AafAbility>` | {} |

## spiralHero

导出接口 · 源码第 14 行。

```ts
export function spiralHero(member: SpiralMember, settings: SpiralSettings, index: number): CombatantInput;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `member` | 否 | `SpiralMember` | — |
| `settings` | 否 | `SpiralSettings` | — |
| `index` | 否 | `number` | — |
