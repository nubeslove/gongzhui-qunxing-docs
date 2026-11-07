# game/packages/tabletop-runtime/src/tabletop/lancer/committedMotion.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {committedTokenMotion,emptySceneFeatures,type ManualTable,type MovementPoint} from '@aelzerant/contracts';
```
</details>

## commitLancerMotion

导出接口 · 源码第 4 行。

Replay only newly committed steps, including continuation appended to the same log after a reaction.

```ts
export function commitLancerMotion(before: ManualTable, after: ManualTable, serial?: number): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `before` | 否 | `ManualTable` | — |
| `after` | 否 | `ManualTable` | — |
| `serial` | 是 | `number` | after.revision |
