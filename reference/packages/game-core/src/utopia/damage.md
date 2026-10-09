# game/packages/game-core/src/utopia/damage.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {checkFlightStructure} from './flight';
import {areaReduction} from './areas';
import type {UtopiaStep} from '@aelzerant/contracts';
import {utopiaDamageAmount,utopiaStats,utopiaEntry,utopiaEquipmentSp,utopiaChargeLimit,utopiaResonanceCap} from '@aelzerant/rules-engine';
import {unit,battle,condition,canReact,ask,wreck,intact,addLog,type UtopiaContext} from './state';
```
</details>

## DamageStep

导出接口 · 源码第 6 行。

```ts
export type DamageStep = Extract<UtopiaStep, {
    type: 'damage';
}>;
```

## resolveDamage

导出接口 · 源码第 20 行。

Overflow is already mitigated: queue it as HP loss so armour is never charged twice.

```ts
export function resolveDamage(x: UtopiaContext, s: DamageStep): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |
| `s` | 否 | `DamageStep` | — |
