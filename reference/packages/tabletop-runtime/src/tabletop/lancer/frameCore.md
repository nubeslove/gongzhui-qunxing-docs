# game/packages/tabletop-runtime/src/tabletop/lancer/frameCore.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ManualActor} from '@aelzerant/contracts';
import {LANCER_EXECUTABLE_FEATURES} from '@aelzerant/game-core';
import {LANCER_REFERENCES} from './catalog';
import {LANCER_FRAMES} from './frames';
```
</details>

## campaignFrameCore

导出接口 · 源码第 7 行。

Automated cores keep their existing actions; the other frames expose their published rules.

```ts
export function campaignFrameCore(actor: ManualActor|undefined): { id: string; name: string; text: string; rank: number | undefined; } | undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor&#124;undefined` | — |
