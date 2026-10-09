# game/packages/session/src/world-effects.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type { ActorDocument, SceneDocument, WorldDocument } from "./world-types";
```
</details>

## tickEffects

导出接口 · 源码第 4 行。

Duration bookkeeping only; a description never becomes executable rules.

```ts
export function tickEffects(actor: ActorDocument, tick: ActorDocument["effects"][number]["tick"]): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ActorDocument` | — |
| `tick` | 否 | `ActorDocument["effects"][number]["tick"]` | — |

## tickCombatEffects

导出接口 · 源码第 13 行。

Consume only events created by this command, before the event history is compacted.

```ts
export function tickCombatEffects(world: WorldDocument, scene: SceneDocument, fromEvent: number): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `scene` | 否 | `SceneDocument` | — |
| `fromEvent` | 否 | `number` | — |
