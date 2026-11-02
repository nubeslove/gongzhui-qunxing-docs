# game/packages/rules-engine/src/dnd/monster-powers.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {DndAbility,DndCharacter,DndDamageType} from '@aelzerant/contracts';
import {dndEntry,DND_DAMAGE_NAMES} from './index';
import type {DndSpellExecutor} from './spells';
```
</details>

## DndMonsterPower

导出接口 · 源码第 5 行。

```ts
export interface DndMonsterPower {
    id: string;
    name: string;
    description: string;
    source: string;
    dc: number;
    formula: string;
    recharge?: number;
    profile: DndSpellExecutor;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `description` | 否 | `string` | 见结构定义及所属功能文档 |
| `source` | 否 | `string` | 见结构定义及所属功能文档 |
| `dc` | 否 | `number` | 见结构定义及所属功能文档 |
| `formula` | 否 | `string` | 见结构定义及所属功能文档 |
| `recharge` | 是 | `number` | 见结构定义及所属功能文档 |
| `profile` | 否 | `DndSpellExecutor` | 见结构定义及所属功能文档 |

## dndMonsterPowers

导出接口 · 源码第 8 行。

Accept the complete, plain save-for-half breath grammar. Extra riders require their own executor.

```ts
export function dndMonsterPowers(c: DndCharacter): DndMonsterPower[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |

## syncDndMonsterPowers

导出接口 · 源码第 17 行。

```ts
export function syncDndMonsterPowers(c: DndCharacter): DndCharacter;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
