# game/packages/tabletop-runtime/src/tabletop/sceneChannelVisits.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {emptyStory,recordSceneChannelVisit,type ManualTable} from '@aelzerant/contracts';
```
</details>

## recordTableSceneVisits

导出接口 · 源码第 2 行。

```ts
export function recordTableSceneVisits(before: ManualTable, next: ManualTable, users: ReadonlySet<string>): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `before` | 否 | `ManualTable` | — |
| `next` | 否 | `ManualTable` | — |
| `users` | 否 | `ReadonlySet<string>` | — |
