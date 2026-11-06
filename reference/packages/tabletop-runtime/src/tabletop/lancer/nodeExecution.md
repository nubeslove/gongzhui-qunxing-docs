# game/packages/tabletop-runtime/src/tabletop/lancer/nodeExecution.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {actorControlled,emptyStory,nodeRunKey,parseLancerNodeIntent,parseManualTable,storyGm,type LancerNodeIntent,type LancerNodeRun,type ManualTable} from '@aelzerant/contracts';
import {applyTableStory} from '../storyActions';
import {applyAdventureCommand} from '../adventureRuntime';
import {isNarrativeActor} from '../narrativeActor';
import {applyLancerMaintenance} from './maintenance';
```
</details>

## LancerNodeAction

导出接口 · 源码第 6 行。

```ts
export type LancerNodeAction = {
    kind: 'lancer.node';
    intent: LancerNodeIntent;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `'lancer.node'` | 见结构定义及所属功能文档 |
| `intent` | 否 | `LancerNodeIntent` | 见结构定义及所属功能文档 |

## executeLancerNode

导出接口 · 源码第 9 行。

Node execution is domain state inside the existing saved room transaction.
It does not introduce another request queue, reward store or local receipt.

```ts
export function executeLancerNode(table: ManualTable, sender: string, raw: LancerNodeIntent, members?: ReadonlySet<string>, random?: () => number): ManualTable;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `sender` | 否 | `string` | — |
| `raw` | 否 | `LancerNodeIntent` | — |
| `members` | 是 | `ReadonlySet<string>` | — |
| `random` | 是 | `() => number` | Math.random |
