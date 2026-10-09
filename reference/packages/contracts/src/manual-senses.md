# game/packages/contracts/src/manual-senses.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ManualActor,ManualMap,ManualToken} from './tabletop';
import {observerConditions,type SceneObserver} from './scene-obscurity';
```
</details>

## manualTokenObserver

导出接口 · 源码第 4 行。

Explicit contact overrides support ceilings, walls and liquids without pretending that flight is ground contact.

```ts
export function manualTokenObserver(map: ManualMap, token: ManualToken, actor: ManualActor|undefined): SceneObserver;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `map` | 否 | `ManualMap` | — |
| `token` | 否 | `ManualToken` | — |
| `actor` | 否 | `ManualActor&#124;undefined` | — |
