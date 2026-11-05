# game/packages/game-core/src/spiral-test-support.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {commandSpiral,type SpiralState} from './spiral';
```
</details>

## enterMainDungeon

导出接口 · 源码第 3 行。

Cross the actual visible surface and gather. Combat tests start beyond this boundary.

```ts
export function enterMainDungeon(s: SpiralState, host?: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `s` | 否 | `SpiralState` | — |
| `host` | 是 | `string` | s.data.members[0].playerId |
