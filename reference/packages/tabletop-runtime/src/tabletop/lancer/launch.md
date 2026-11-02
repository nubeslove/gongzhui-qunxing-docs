# game/packages/tabletop-runtime/src/tabletop/lancer/launch.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseManualTable,storyGm,type ManualTable} from '@aelzerant/contracts';
import {applyTableStory} from '../storyActions';
import {applyDeploymentCommand} from './deployment';
```
</details>

## LancerLaunchAction

导出接口 · 源码第 4 行。

```ts
export type LancerLaunchAction = {
    kind: 'lancer.launch';
    sceneId: string;
    actorIds: string[];
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `'lancer.launch'` | 见结构定义及所属功能文档 |
| `sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `actorIds` | 否 | `string[]` | 见结构定义及所属功能文档 |

## launchLancerBattle

导出接口 · 源码第 6 行。

One authority commit: a failed roster or deployment check never pushes a half-open scene.

```ts
export function launchLancerBattle(table: ManualTable, sender: string, action: LancerLaunchAction, members?: ReadonlySet<string>): ManualTable;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `sender` | 否 | `string` | — |
| `action` | 否 | `LancerLaunchAction` | — |
| `members` | 是 | `ReadonlySet<string>` | — |
