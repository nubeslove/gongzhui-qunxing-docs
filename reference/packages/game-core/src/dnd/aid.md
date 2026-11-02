# game/packages/game-core/src/dnd/aid.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {DndCharacter} from '@aelzerant/contracts';
import {dndEntry} from '@aelzerant/rules-engine';
```
</details>

## syncDndAid

导出接口 · 源码第 5 行。

Store the already-applied delta so cleanup, reload and overlapping casts cannot heal repeatedly.

```ts
export function syncDndAid(c: DndCharacter): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
