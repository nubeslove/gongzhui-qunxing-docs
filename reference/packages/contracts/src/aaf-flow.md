# game/packages/contracts/src/aaf-flow.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {AafSpeedMode} from './aaf-movement';
```
</details>

## AafTrigger

导出接口 · 源码第 3 行。

```ts
export type AafTrigger = 'cast' | 'attack' | 'move' | 'stand' | 'item' | 'manual';
```

## AafFlowOperation

导出接口 · 源码第 4 行。

```ts
export type AafFlowOperation = {
    kind: 'ability';
    abilityId: string;
    targets: string[];
    concentrationId?: string;
} | {
    kind: 'counter';
    abilityId: string;
    frameId: string;
} | {
    kind: 'dispel';
    abilityId: string;
    targetId: string;
    concentrationId: string;
} | {
    kind: 'attack';
    targetId: string;
    mode: 'normal' | 'special' | 'offhand';
    nonlethal?: boolean;
    execution?: boolean;
} | {
    kind: 'move';
    x: number;
    y: number;
    z: number;
    mode: AafSpeedMode;
    grantId: string;
    cost: number;
} | {
    kind: 'stand';
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.kind` | 否 | `'ability'` | 见结构定义及所属功能文档 |
| `分支1.abilityId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.targets` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支1.concentrationId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支2.kind` | 否 | `'counter'` | 见结构定义及所属功能文档 |
| `分支2.abilityId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.frameId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.kind` | 否 | `'dispel'` | 见结构定义及所属功能文档 |
| `分支3.abilityId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.targetId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.concentrationId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.kind` | 否 | `'attack'` | 见结构定义及所属功能文档 |
| `分支4.targetId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.mode` | 否 | `'normal'&#124;'special'&#124;'offhand'` | 见结构定义及所属功能文档 |
| `分支4.nonlethal` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支4.execution` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支5.kind` | 否 | `'move'` | 见结构定义及所属功能文档 |
| `分支5.x` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支5.y` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支5.z` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支5.mode` | 否 | `AafSpeedMode` | 见结构定义及所属功能文档 |
| `分支5.grantId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支5.cost` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支6.kind` | 否 | `'stand'` | 见结构定义及所属功能文档 |

## AafFlowFrame

导出接口 · 源码第 12 行。

Fees are paid before a frame is added; resuming never pays those fees again.

```ts
export interface AafFlowFrame {
    id: string;
    actorId: string;
    label: string;
    event: AafTrigger;
    operation: AafFlowOperation;
    eligible: string[];
    opportunity: string[];
    passed: string[];
    cancelled: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `label` | 否 | `string` | 见结构定义及所属功能文档 |
| `event` | 否 | `AafTrigger` | 见结构定义及所属功能文档 |
| `operation` | 否 | `AafFlowOperation` | 见结构定义及所属功能文档 |
| `eligible` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `opportunity` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `passed` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `cancelled` | 否 | `boolean` | 见结构定义及所属功能文档 |

## AafReactionWindow

导出接口 · 源码第 16 行。

```ts
export interface AafReactionWindow {
    id: string;
    actorId: string;
    label: string;
    event: AafTrigger;
    responders: string[];
    opportunity: string[];
    depth: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `label` | 否 | `string` | 见结构定义及所属功能文档 |
| `event` | 否 | `AafTrigger` | 见结构定义及所属功能文档 |
| `responders` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `opportunity` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `depth` | 否 | `number` | 见结构定义及所属功能文档 |

## parseAafFlow

导出接口 · 源码第 19 行。

```ts
export function parseAafFlow(value: unknown): AafFlowFrame[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |
