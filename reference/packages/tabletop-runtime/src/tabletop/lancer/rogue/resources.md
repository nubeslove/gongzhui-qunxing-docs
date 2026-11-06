# game/packages/tabletop-runtime/src/tabletop/lancer/rogue/resources.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {coreSystemId} from '../coreResources';
import {roguePoolRoles,roguePoolWeight,rogueRoleForJob} from './rewardPools';
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

导出接口 · 源码第 13 行。

```ts
export const rogueEquipment: (id: string): { compconId: string | undefined; id: string; kind: string; name: string; book: string; bookTitle: string; page: number; metadata: string; text: string; sp: number; limited: number; automation: string; size?: string; damage?: string; range?: string; tags?: string; } | undefined;
```

## rogueJob

导出接口 · 源码第 30 行。

```ts
export const rogueJob: (id: string): { readonly id: "vanguard"; readonly name: "近战"; readonly text: "生命上限 +2；速度 +1。"; readonly bonuses: readonly ["生命上限 +2", "速度 +1"]; readonly stats: { readonly hp: 2; readonly speed: 1; }; readonly tags: readonly ["近战", "机动"]; } | { readonly id: "gunner"; readonly name: "远程"; readonly text: "武器攻击加值 +1；热度上限 +2。"; readonly bonuses: readonly ["武器攻击加值 +1", "热度上限 +2"]; readonly stats: { readonly attack: 1; readonly heat: 2; }; readonly tags: readonly ["远程", "火炮", "巢房"]; } | { readonly id: "hacker"; readonly name: "科技"; readonly text: "科技攻击加值 +1；电子防御 +2。"; readonly bonuses: readonly ["科技攻击加值 +1", "电子防御 +2"]; readonly stats: { readonly tech: 1; readonly edef: 2; }; readonly tags: readonly ["科技", "控制"]; } | { readonly id: "tank"; readonly name: "坦克"; readonly text: "生命上限 +2；装甲 +1（仍受装甲上限限制）。"; readonly bonuses: readonly ["生命上限 +2", "装甲 +1"]; readonly stats: { readonly hp: 2; readonly armor: 1; }; readonly tags: readonly ["守护", "近战"]; } | { readonly id: "engineer"; readonly name: "辅助"; readonly text: "维修上限 +2；受限装备使用次数 +1。"; readonly bonuses: readonly ["维修上限 +2", "受限装备使用次数 +1"]; readonly stats: { readonly repair: 2; readonly limited: 1; }; readonly tags: readonly ["维修", "无人机", "守护"]; } | { readonly id: "vanguard"; readonly name: "先锋"; readonly text: "生命上限 +2；速度 +1。贴近敌人，持续推进。"; readonly bonuses: readonly ["生命上限 +2", "速度 +1"]; readonly stats: { readonly hp: 2; readonly speed: 1; }; readonly tags: readonly ["近战", "机动"]; } | { readonly id: "gunner"; readonly name: "炮手"; readonly text: "武器攻击加值 +1；热度上限 +2。稳定火力，承受持续开火的负荷。"; readonly bonuses: readonly ["武器攻击加值 +1", "热度上限 +2"]; readonly stats: { readonly attack: 1; readonly heat: 2; }; readonly tags: readonly ["远程", "火炮"]; } | { readonly id: "hacker"; readonly name: "黑客"; readonly text: "科技攻击加值 +1；电子防御 +2。突破敌方系统，也保护自己的链路。"; readonly bonuses: readonly ["科技攻击加值 +1", "电子防御 +2"]; readonly stats: { readonly tech: 1; readonly edef: 2; }; readonly tags: readonly ["科技", "控制"]; } | { readonly id: "swarm"; readonly name: "蜂后"; readonly text: "感应 +3；系统槽 +1。以更广的感应范围和更多装置组织蜂群。"; readonly bonuses: readonly ["感应 +3", "系统槽 +1"]; readonly stats: { readonly sensors: 3; }; readonly tags: readonly ["巢房", "无人机"]; } | { readonly id: "engineer"; readonly name: "工程师"; readonly text: "维修上限 +2；受限装备使用次数 +1。保持战场维修与支援设备的续航。"; readonly bonuses: readonly ["维修上限 +2", "受限装备使用次数 +1"]; readonly stats: { readonly repair: 2; readonly limited: 1; }; readonly tags: readonly ["维修", "守护"]; } | { readonly id: "salvager"; readonly name: "回收员"; readonly text: "开局额外获得 8 物资；每场战斗结算额外获得 2 物资，任务失利仍生效。"; readonly bonuses: readonly ["开局物资 +8", "每场战后物资 +2"]; readonly stats: {}; readonly tags: readonly ["经济", "续航"]; } | undefined;
```

## rogueSlotCapacity

导出接口 · 源码第 31 行。

```ts
export const rogueSlotCapacity: (player: string | RoguePlayer, kind: string): number;
```

## rogueUnlockedFrames

导出接口 · 源码第 32 行。

```ts
export const rogueUnlockedFrames: (p: RoguePlayer): string[];
```

## ROGUE_KIND_NAMES

导出接口 · 源码第 33 行。

```ts
export const ROGUE_KIND_NAMES: Record<RogueKind, string>;
```

## ROGUE_RARITIES

导出接口 · 源码第 34 行。

```ts
export const ROGUE_RARITIES: Record<RogueRarity, string>;
```

## RogueResource

导出接口 · 源码第 36 行。

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

导出接口 · 源码第 37 行。

```ts
export function resourceTags(text: string): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 否 | `string` | — |

## ROGUE_RESOURCES

导出接口 · 源码第 52 行。

```ts
export const ROGUE_RESOURCES: RogueResource[];
```

## rogueRandom

导出接口 · 源码第 61 行。

```ts
export function rogueRandom(run: Pick<LancerRogueRun,'seed'>): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `run` | 否 | `Pick<LancerRogueRun,'seed'>` | — |

## drawRogueCards

导出接口 · 源码第 64 行。

```ts
export function drawRogueCards(run: LancerRogueRun, p: RoguePlayer, kind: 'talent'|'license'|'mod'|'equipment'|'shop'|'frame', exclude?: string[]): RogueCard[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `run` | 否 | `LancerRogueRun` | — |
| `p` | 否 | `RoguePlayer` | — |
| `kind` | 否 | `'talent'&#124;'license'&#124;'mod'&#124;'equipment'&#124;'shop'&#124;'frame'` | — |
| `exclude` | 是 | `string[]` | [] |

## learnRogueChoice

导出接口 · 源码第 82 行。

```ts
export function learnRogueChoice(p: RoguePlayer, r: RogueResource): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `p` | 否 | `RoguePlayer` | — |
| `r` | 否 | `RogueResource` | — |
