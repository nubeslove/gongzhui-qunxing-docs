# game/packages/contracts/src/dnd-detection.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {storyObject as obj,storyText as text,storyNumber as num,storyEnum as one,storyList as list} from './story';
```
</details>

## DndMagicBarrier

导出接口 · 源码第 4 行。

```ts
export interface DndMagicBarrier {
    material: keyof typeof DND_MAGIC_MATERIALS;
    inches: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `material` | 否 | `keyof typeof DND_MAGIC_MATERIALS` | 见结构定义及所属功能文档 |
| `inches` | 否 | `number` | 见结构定义及所属功能文档 |

## parseDndMagicBarrier

导出接口 · 源码第 5 行。

```ts
export function parseDndMagicBarrier(raw: unknown): DndMagicBarrier;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## dndMagicBarrierBlocks

导出接口 · 源码第 6 行。

```ts
export function dndMagicBarrierBlocks(b: DndMagicBarrier): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `DndMagicBarrier` | — |

## DND_MAGIC_SCHOOLS

导出接口 · 源码第 7 行。

```ts
export const DND_MAGIC_SCHOOLS = ['防护', '咒法', '预言', '惑控', '塑能', '幻术', '死灵', '变化'] as const;
```

## DndMagicSchool

导出接口 · 源码第 8 行。

```ts
export type DndMagicSchool = typeof DND_MAGIC_SCHOOLS[number];
```

## DndItemAura

导出接口 · 源码第 10 行。

Item exposure is independent of equipping or attunement. A hidden item can be sensed but has no visible aura.

```ts
export interface DndItemAura {
    visible?: boolean;
    magical?: boolean;
    barrier?: DndMagicBarrier;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `visible` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `magical` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `barrier` | 是 | `DndMagicBarrier` | 见结构定义及所属功能文档 |

## parseDndItemAura

导出接口 · 源码第 11 行。

```ts
export function parseDndItemAura(raw: unknown): DndItemAura;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## DndMagicDetection

导出接口 · 源码第 12 行。

```ts
export interface DndMagicDetection {
    effect: string;
    scene: string;
    otherMagic: boolean;
    uncertain: boolean;
    suppressed: boolean;
    scan?: {
        at: number;
        round?: number;
        auras: {
            label: string;
            schools: DndMagicSchool[];
        }[];
        uncertain: boolean;
    };
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `effect` | 否 | `string` | 见结构定义及所属功能文档 |
| `scene` | 否 | `string` | 见结构定义及所属功能文档 |
| `otherMagic` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `uncertain` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `suppressed` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `scan` | 是 | `{at:number;round?:number;auras:{label:string;schools:DndMagicSchool[]}[];uncertain:boolean}` | 见结构定义及所属功能文档 |
| `scan.at` | 否 | `number` | 见结构定义及所属功能文档 |
| `scan.round` | 是 | `number` | 见结构定义及所属功能文档 |
| `scan.auras` | 否 | `{label:string;schools:DndMagicSchool[]}[]` | 见结构定义及所属功能文档 |
| `scan.auras.[].label` | 否 | `string` | 见结构定义及所属功能文档 |
| `scan.auras.[].schools` | 否 | `DndMagicSchool[]` | 见结构定义及所属功能文档 |
| `scan.uncertain` | 否 | `boolean` | 见结构定义及所属功能文档 |

## parseDndMagicDetection

导出接口 · 源码第 16 行。

```ts
export function parseDndMagicDetection(raw: unknown): DndMagicDetection;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
