# game/packages/tabletop-runtime/src/tabletop/lancer/rogue/resources.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import talentTextData from './talent-text.json';
import {ARENA_MANUAL_WEAPONS} from './manual-weapons';
import type {LancerRogueRun,RogueCard,RogueKind,RoguePlayer,RogueRarity} from '@aelzerant/contracts';
import {ALL_CORE,ALL_TALENTS,EQUIPMENT_ACCESS,LICENSES} from '../content';
import {LANCER_CATALOG,LANCER_REFERENCES} from '../catalog';
import {LANCER_FRAMES} from '../frames';
import {ARENA_EQUIPMENT,ARENA_RESOURCES} from './arsenal';
```
</details>

## rogueEquipment

导出接口 · 源码第 11 行。

```ts
export const rogueEquipment: (id: string): import("@source/packages/tabletop-runtime/src/tabletop/lancer/catalog").LancerCatalogEntry | undefined;
```

## rogueSlotCapacity

导出接口 · 源码第 21 行。

```ts
export const rogueSlotCapacity: (job: string, kind: string): 4 | 5;
```

## RogueResource

导出接口 · 源码第 25 行。

```ts
export interface RogueResource {
    id: string;
    kind: RogueKind;
    name: string;
    text: string;
    tags: string[];
    rarity: RogueRarity;
    source?: string;
    license?: string;
    rank?: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `kind` | 否 | `RogueKind` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `text` | 否 | `string` | 见结构定义及所属功能文档 |
| `tags` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `rarity` | 否 | `RogueRarity` | 见结构定义及所属功能文档 |
| `source` | 是 | `string` | 见结构定义及所属功能文档 |
| `license` | 是 | `string` | 见结构定义及所属功能文档 |
| `rank` | 是 | `number` | 见结构定义及所属功能文档 |

## resourceTags

导出接口 · 源码第 26 行。

```ts
export function resourceTags(text: string): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 否 | `string` | — |

## rogueRandom

导出接口 · 源码第 49 行。

```ts
export function rogueRandom(run: Pick<LancerRogueRun,'seed'>): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `run` | 否 | `Pick<LancerRogueRun,'seed'>` | — |

## drawRogueCards

导出接口 · 源码第 52 行。

```ts
export function drawRogueCards(run: LancerRogueRun, p: RoguePlayer, kind: 'talent'|'license'|'mod'|'equipment'|'shop'|'frame'): RogueCard[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `run` | 否 | `LancerRogueRun` | — |
| `p` | 否 | `RoguePlayer` | — |
| `kind` | 否 | `'talent'&#124;'license'&#124;'mod'&#124;'equipment'&#124;'shop'&#124;'frame'` | — |

## learnRogueChoice

导出接口 · 源码第 68 行。

```ts
export function learnRogueChoice(p: RoguePlayer, r: RogueResource): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `p` | 否 | `RoguePlayer` | — |
| `r` | 否 | `RogueResource` | — |
