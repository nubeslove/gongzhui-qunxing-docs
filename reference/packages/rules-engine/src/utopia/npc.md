# game/packages/rules-engine/src/utopia/npc.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {UtopiaCharacter,UtopiaDamage} from '@aelzerant/contracts';
import {utopiaEntry} from './index';
```
</details>

## utopiaNpc

导出接口 · 源码第 3 行。

```ts
export function utopiaNpc(id: string, tier?: 1|2|3, players?: number): UtopiaCharacter;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | — |
| `tier` | 是 | `1&#124;2&#124;3` | 1 |
| `players` | 是 | `number` | 3 |
