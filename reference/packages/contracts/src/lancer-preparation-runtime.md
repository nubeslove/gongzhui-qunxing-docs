# game/packages/contracts/src/lancer-preparation-runtime.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {isLancerRuntimeField} from './lancer-runtime-fields';
import type {ManualTable} from './tabletop';
```
</details>

## withoutLancerRehearsal

导出接口 · 源码第 4 行。

Remove play changes made while trying a local preparation copy. Configuration stays editable.

```ts
export function withoutLancerRehearsal(base: ManualTable, draft: ManualTable): ManualTable;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `base` | 否 | `ManualTable` | — |
| `draft` | 否 | `ManualTable` | — |
