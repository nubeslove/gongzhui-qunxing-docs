# game/packages/session/src/resource-runtime.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type { ResourceActivity, StoryWorkspace } from '@aelzerant/contracts';
```
</details>

## ResourceSubject

导出接口 · 源码第 3 行。

```ts
export interface ResourceSubject {
    id: string;
    hp: number;
    maxHp: number;
    ac: number;
    actions?: number;
    counters: Record<string, {
        value: number;
        max: number;
    }>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `hp` | 否 | `number` | 见结构定义及所属功能文档 |
| `maxHp` | 否 | `number` | 见结构定义及所属功能文档 |
| `ac` | 否 | `number` | 见结构定义及所属功能文档 |
| `actions` | 是 | `number` | 见结构定义及所属功能文档 |
| `counters` | 否 | `Record<string,{value:number;max:number}>` | 见结构定义及所属功能文档 |

## ResourceResolution

导出接口 · 源码第 4 行。

```ts
export interface ResourceResolution {
    subjects: ResourceSubject[];
    log: string[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `subjects` | 否 | `ResourceSubject[]` | 见结构定义及所属功能文档 |
| `log` | 否 | `string[]` | 见结构定义及所属功能文档 |

## resourceFormula

导出接口 · 源码第 6 行。

Bounded dice syntax; no eval, property traversal or executable expressions.

```ts
export function resourceFormula(expression: string, roll: (sides:number)=>number): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `expression` | 否 | `string` | — |
| `roll` | 否 | `(sides:number)=>number` | — |

## resourceAutomationIssues

导出接口 · 源码第 11 行。

```ts
export function resourceAutomationIssues(a: ResourceActivity): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `ResourceActivity` | — |

## resolveResource

导出接口 · 源码第 19 行。

Produces a complete candidate; adapters must commit all of it or nothing.

```ts
export function resolveResource(a: ResourceActivity, sourceId: string, targetIds: string[], subjects: ResourceSubject[], roll: (sides:number)=>number): ResourceResolution;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `ResourceActivity` | — |
| `sourceId` | 否 | `string` | — |
| `targetIds` | 否 | `string[]` | — |
| `subjects` | 否 | `ResourceSubject[]` | — |
| `roll` | 否 | `(sides:number)=>number` | — |

## grantedResourceIds

导出接口 · 源码第 41 行。

```ts
export function grantedResourceIds(story: StoryWorkspace, actorId: string): Set<string>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `actorId` | 否 | `string` | — |
