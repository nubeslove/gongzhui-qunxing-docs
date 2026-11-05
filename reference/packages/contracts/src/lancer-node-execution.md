# game/packages/contracts/src/lancer-node-execution.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {storyObject as obj,storyList as list,storyId as id,storyText as text,storyNumber as num,storyEnum as one} from './story';
```
</details>

## LancerNodeRestPlan

导出接口 · 源码第 2 行。

```ts
export interface LancerNodeRestPlan {
    kind: 'short' | 'full';
    actors: string[];
    printer: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `'short'&#124;'full'` | 见结构定义及所属功能文档 |
| `actors` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `printer` | 否 | `boolean` | 见结构定义及所属功能文档 |

## LancerNodeEndPlan

导出接口 · 源码第 3 行。

```ts
export interface LancerNodeEndPlan {
    actors: string[];
    questIds: string[];
    resourceIds: string[];
    level: number | null;
    summary: string;
    returnTerminal: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `actors` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `questIds` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `resourceIds` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `level` | 否 | `number&#124;null` | 见结构定义及所属功能文档 |
| `summary` | 否 | `string` | 见结构定义及所属功能文档 |
| `returnTerminal` | 否 | `boolean` | 见结构定义及所属功能文档 |

## LancerNodeRun

导出接口 · 源码第 4 行。

```ts
export interface LancerNodeRun {
    id: string;
    graphId: string;
    nodeId: string;
    name: string;
    kind: 'rest' | 'event' | 'end';
    status: 'active' | 'completed';
    participants: string[];
    completed: {
        actorId: string;
        by: string;
        at: number;
    }[];
    startedAt: number;
    endedAt?: number;
    restKind?: 'short' | 'full';
    printer?: boolean;
    restId?: string;
    resourceGrants?: {
        actorId: string;
        resourceId: string;
    }[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `graphId` | 否 | `string` | 见结构定义及所属功能文档 |
| `nodeId` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `kind` | 否 | `'rest'&#124;'event'&#124;'end'` | 见结构定义及所属功能文档 |
| `status` | 否 | `'active'&#124;'completed'` | 见结构定义及所属功能文档 |
| `participants` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `completed` | 否 | `{actorId:string;by:string;at:number}[]` | 见结构定义及所属功能文档 |
| `completed.[].actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `completed.[].by` | 否 | `string` | 见结构定义及所属功能文档 |
| `completed.[].at` | 否 | `number` | 见结构定义及所属功能文档 |
| `startedAt` | 否 | `number` | 见结构定义及所属功能文档 |
| `endedAt` | 是 | `number` | 见结构定义及所属功能文档 |
| `restKind` | 是 | `'short'&#124;'full'` | 见结构定义及所属功能文档 |
| `printer` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `restId` | 是 | `string` | 见结构定义及所属功能文档 |
| `resourceGrants` | 是 | `{actorId:string;resourceId:string}[]` | 见结构定义及所属功能文档 |
| `resourceGrants.[].actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `resourceGrants.[].resourceId` | 否 | `string` | 见结构定义及所属功能文档 |

## LancerNodeIntent

导出接口 · 源码第 5 行。

```ts
export type LancerNodeIntent = {
    op: 'start';
    eventOnly?: boolean;
    graphId: string;
    nodeId: string;
    executionId: string;
    expectedExecutionId: string | null;
    repeat: boolean;
    confirmed: boolean;
} | {
    op: 'complete';
    executionId: string;
    actorId: string;
    recovered: boolean;
} | {
    op: 'finish';
    executionId: string;
    force: boolean;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.op` | 否 | `'start'` | 见结构定义及所属功能文档 |
| `分支1.eventOnly` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支1.graphId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.nodeId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.executionId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.expectedExecutionId` | 否 | `string&#124;null` | 见结构定义及所属功能文档 |
| `分支1.repeat` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支1.confirmed` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支2.op` | 否 | `'complete'` | 见结构定义及所属功能文档 |
| `分支2.executionId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.recovered` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支3.op` | 否 | `'finish'` | 见结构定义及所属功能文档 |
| `分支3.executionId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.force` | 否 | `boolean` | 见结构定义及所属功能文档 |

## parseLancerNodeRestPlan

导出接口 · 源码第 11 行。

```ts
export function parseLancerNodeRestPlan(raw: unknown): LancerNodeRestPlan;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseLancerNodeEndPlan

导出接口 · 源码第 12 行。

```ts
export function parseLancerNodeEndPlan(raw: unknown): LancerNodeEndPlan;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseLancerNodeIntent

导出接口 · 源码第 13 行。

```ts
export function parseLancerNodeIntent(raw: unknown): LancerNodeIntent;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseLancerNodeRuns

导出接口 · 源码第 14 行。

```ts
export function parseLancerNodeRuns(raw: unknown): Record<string,LancerNodeRun>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## nodeRunKey

导出接口 · 源码第 15 行。

```ts
export const nodeRunKey: (graphId: string, nodeId: string): string;
```

## projectLancerNodeRuns

导出接口 · 源码第 16 行。

```ts
export function projectLancerNodeRuns(runs: Record<string,LancerNodeRun>, readable: ReadonlySet<string>): { [k: string]: { resourceGrants?: { actorId: string; resourceId: string; }[]; participants: string[]; completed: { actorId: string; by: string; at: number; }[]; id: string; graphId: string; nodeId: string; name: string; kind: "rest" | "event" | "end"; status: "active" | "completed"; startedAt: number; endedAt?: number; restKind?: "short" | "full"; printer?: boolean; restId?: string; }; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `runs` | 否 | `Record<string,LancerNodeRun>` | — |
| `readable` | 否 | `ReadonlySet<string>` | — |
