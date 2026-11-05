# game/packages/game-core/src/lancer/entry.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {LancerBattle} from '@aelzerant/contracts';
```
</details>

## advanceLancerEntry

导出接口 · 源码第 2 行。

```ts
export function advanceLancerEntry(b: LancerBattle, hostId: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `hostId` | 否 | `string` | — |
