# game/packages/rules-engine/src/dnd/subclass-spells.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {DndCharacter} from '@aelzerant/contracts';
import {DND_CATALOG,dndEntry} from './index';
import {spellfirePrepared} from './sorcery';
import {dndClassSpellAbility} from './multiclass';
```
</details>

## dndAlwaysPrepared

导出接口 · 源码第 7 行。

Only explicit always-prepared tables; selections and terrain-dependent lists are excluded.

```ts
export function dndAlwaysPrepared(c: Pick<DndCharacter,'classes'>, classId?: string): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `Pick<DndCharacter,'classes'>` | — |
| `classId` | 是 | `string` | — |

## syncDndAlwaysPrepared

导出接口 · 源码第 23 行。

```ts
export function syncDndAlwaysPrepared(c: DndCharacter): DndCharacter;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
