# game/packages/contracts/src/combat-rollback.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {storyObject as obj,storyList as list,storyId as id,storyText as text,storyNumber as num,storyEnum as one} from './story';
```
</details>

## RollbackKind

导出接口 · 源码第 3 行。

```ts
export type RollbackKind = keyof typeof ROLLBACK_LABELS;
```

## CombatCheckpoint

导出接口 · 源码第 5 行。

Authority-only recovery data. Player projections must omit the entire collection.

```ts
export interface CombatCheckpoint {
    id: string;
    sceneId: string;
    at: number;
    label: string;
    kinds: RollbackKind[];
    data: Record<string, unknown>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `at` | 否 | `number` | 见结构定义及所属功能文档 |
| `label` | 否 | `string` | 见结构定义及所属功能文档 |
| `kinds` | 否 | `RollbackKind[]` | 见结构定义及所属功能文档 |
| `data` | 否 | `Record<string,unknown>` | 见结构定义及所属功能文档 |

## parseCombatCheckpoints

导出接口 · 源码第 6 行。

```ts
export function parseCombatCheckpoints(raw: unknown): CombatCheckpoint[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## checkpointFor

导出接口 · 源码第 7 行。

```ts
export function checkpointFor(rows: CombatCheckpoint[]|undefined, sceneId: string, kind: RollbackKind): CombatCheckpoint | undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `rows` | 否 | `CombatCheckpoint[]&#124;undefined` | — |
| `sceneId` | 否 | `string` | — |
| `kind` | 否 | `RollbackKind` | — |

## recordCheckpoint

导出接口 · 源码第 8 行。

```ts
export function recordCheckpoint(rows: CombatCheckpoint[]|undefined, sceneId: string, kinds: RollbackKind[], label: string, data: Record<string,unknown>): CombatCheckpoint[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `rows` | 否 | `CombatCheckpoint[]&#124;undefined` | — |
| `sceneId` | 否 | `string` | — |
| `kinds` | 否 | `RollbackKind[]` | — |
| `label` | 否 | `string` | — |
| `data` | 否 | `Record<string,unknown>` | — |
