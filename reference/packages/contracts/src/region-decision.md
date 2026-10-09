# game/packages/contracts/src/region-decision.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseEnvironmentDecision,type EnvironmentDecision} from './environment-decision';
import {parseTimedDecision,type TimedDecision} from './decision-policy';
import {storyObject,storyList,storyId,storyNumber} from './story';
import type {RegionNotice} from './region-events';
```
</details>

## RegionDecision

导出接口 · 源码第 5 行。

```ts
export interface RegionDecision {
    gate: TimedDecision;
    kind?: 'environment';
    environment?: EnvironmentDecision;
    transfer?: {
        sceneId: string;
        effect: RegionNotice;
    };
    accepted?: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `gate` | 否 | `TimedDecision` | 见结构定义及所属功能文档 |
| `kind` | 是 | `'environment'` | 见结构定义及所属功能文档 |
| `environment` | 是 | `EnvironmentDecision` | 见结构定义及所属功能文档 |
| `transfer` | 是 | `{sceneId:string;effect:RegionNotice}` | 见结构定义及所属功能文档 |
| `transfer.sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `transfer.effect` | 否 | `RegionNotice` | 见结构定义及所属功能文档 |
| `accepted` | 是 | `boolean` | 见结构定义及所属功能文档 |

## parseRegionDecisions

导出接口 · 源码第 7 行。

Public projections contain only the gate. The authority alone retains destination and trigger context.

```ts
export function parseRegionDecisions(raw: unknown): RegionDecision[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
