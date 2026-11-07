# game/packages/tabletop-runtime/src/tabletop/lancer/rogue/arsenal.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {LancerCustomAction,LancerCustomWeaponProfile,LancerEquipmentAutomation} from '@aelzerant/contracts';
import type {RogueResource} from './resources';
import type {LancerCatalogEntry} from '../catalog';
```
</details>

## ArenaEquipment

导出接口 · 源码第 5 行。

```ts
export interface ArenaEquipment extends LancerCatalogEntry {
    execution: LancerEquipmentAutomation;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `execution` | 否 | `LancerEquipmentAutomation` | 见结构定义及所属功能文档 |

## ARENA_EQUIPMENT

导出接口 · 源码第 10 行。

```ts
export const ARENA_EQUIPMENT: ArenaEquipment[];
```

## ARENA_STAT_MODS

导出接口 · 源码第 28 行。

```ts
export const ARENA_STAT_MODS: Record<string, Record<string, number>>;
```

## ARENA_RESOURCES

导出接口 · 源码第 34 行。

```ts
export const ARENA_RESOURCES: RogueResource[];
```

## arenaModifiers

导出接口 · 源码第 45 行。

```ts
export function arenaModifiers(talents: Record<string,number>, mods: string[]): Record<string,number>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `talents` | 否 | `Record<string,number>` | — |
| `mods` | 否 | `string[]` | — |
