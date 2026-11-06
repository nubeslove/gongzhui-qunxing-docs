# game/packages/rules-engine/src/dnd/monster-actions.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {DndCharacter,DndDamageType,DndAttack,DndAbility} from '@aelzerant/contracts';
import type {DndEntry} from './catalog-types';
import {DND_CATALOG,DND_DAMAGE_NAMES} from './index';
```
</details>

## importDndMonsterActions

导出接口 · 源码第 29 行。

Import the stat block's explicit attack grammar; retain separate damage types and modes.

```ts
export function importDndMonsterActions(c: DndCharacter, e: DndEntry): DndCharacter;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `e` | 否 | `DndEntry` | — |
