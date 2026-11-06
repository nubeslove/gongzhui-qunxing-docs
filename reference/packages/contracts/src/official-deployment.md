# game/packages/contracts/src/official-deployment.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {canonicalJson} from './index';
import type {ManualTable,ManualToken} from './tabletop';
import defaults from './official-deployment-defaults.json';
```
</details>

## upgradeOfficialDeployment

导出接口 · 源码第 9 行。

Only untouched .33 factory groups are identifiable. A changed scene or any battle stays intact.

```ts
export function upgradeOfficialDeployment(table: ManualTable): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
