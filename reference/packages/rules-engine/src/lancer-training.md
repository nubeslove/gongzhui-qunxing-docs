# game/packages/rules-engine/src/lancer-training.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type { LancerModifiers } from './lancer';
```
</details>

## LancerCoreChoice

导出接口 · 源码第 2 行。

```ts
export interface LancerCoreChoice {
    id: string;
    mount?: number;
    weapon?: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `mount` | 是 | `number` | 见结构定义及所属功能文档 |
| `weapon` | 是 | `number` | 见结构定义及所属功能文档 |

## LancerTalentChoice

导出接口 · 源码第 3 行。

```ts
export interface LancerTalentChoice {
    id: string;
    rank: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `rank` | 否 | `number` | 见结构定义及所属功能文档 |

## LancerTraining

导出接口 · 源码第 4 行。

```ts
export interface LancerTraining {
    bonuses: LancerCoreChoice[];
    talents: LancerTalentChoice[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `bonuses` | 否 | `LancerCoreChoice[]` | 见结构定义及所属功能文档 |
| `talents` | 否 | `LancerTalentChoice[]` | 见结构定义及所属功能文档 |

## LancerCoreDefinition

导出接口 · 源码第 5 行。

```ts
export interface LancerCoreDefinition {
    id: string;
    name: string;
    maker: string;
    page: number;
    description: string;
    modifiers?: LancerModifiers;
    choice?: 'mount' | 'weapon';
    status: 'ready' | 'partial' | 'pending';
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `maker` | 否 | `string` | 见结构定义及所属功能文档 |
| `page` | 否 | `number` | 见结构定义及所属功能文档 |
| `description` | 否 | `string` | 见结构定义及所属功能文档 |
| `modifiers` | 是 | `LancerModifiers` | 见结构定义及所属功能文档 |
| `choice` | 是 | `'mount'&#124;'weapon'` | 见结构定义及所属功能文档 |
| `status` | 否 | `'ready'&#124;'partial'&#124;'pending'` | 见结构定义及所属功能文档 |

## parseLancerTraining

导出接口 · 源码第 44 行。

Unknown extension IDs remain in the card; only reviewed registry entries add mechanics.

```ts
export function parseLancerTraining(raw: unknown): LancerTraining;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## lancerTrainingModifiers

导出接口 · 源码第 54 行。

```ts
export function lancerTrainingModifiers(training: LancerTraining): LancerModifiers;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `training` | 否 | `LancerTraining` | — |
