# game/packages/contracts/src/characters.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## AttrKey

导出接口 · 源码第 7 行。

角色卡数据模型（M2 骨架版）
说明：字段已按新版规则语义定义（专注值统一公式、27BUY 属性、装备槽 16 键）。
种族/职业的完整特性数据随规则书补齐后接入（当前为基础字段）。

```ts
export type AttrKey = "str" | "dex" | "con" | "int" | "wis" | "cha";
```

## ATTR_KEYS

导出接口 · 源码第 9 行。

```ts
export const ATTR_KEYS = ["str", "dex", "con", "int", "wis", "cha"];
```

## BuildMethod

导出接口 · 源码第 12 行。

buy24 remains readable for existing saves; new characters use buy27.

```ts
export type BuildMethod = "buy27" | "buy24" | "roll";
```

## CharacterSheet

导出接口 · 源码第 14 行。

```ts
export interface CharacterSheet {
    version: 1;
    playerId: string;
    characterId: string;
    name: string;
    level: number;
    buildMethod: BuildMethod;
    attributes: Record<AttrKey, number>;
    raceBonus: {
        plus2: AttrKey | null;
        plus1: AttrKey | null;
    };
    backgroundBonus?: Partial<Record<AttrKey, number>>;
    raceId: string | null;
    classId: string | null;
    equipment: Record<string, string>;
    gold: number;
    updatedAt: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `version` | 否 | `1` | 存档版本（后续迁移用） |
| `playerId` | 否 | `string` | 见结构定义及所属功能文档 |
| `characterId` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `level` | 否 | `number` | 见结构定义及所属功能文档 |
| `buildMethod` | 否 | `BuildMethod` | 见结构定义及所属功能文档 |
| `attributes` | 否 | `Record<AttrKey, number>` | 基础属性（未含背景提升；购买或投点结果） |
| `raceBonus` | 否 | `{ plus2: AttrKey &#124; null; plus1: AttrKey &#124; null }` | 旧版保存字段，仅在 backgroundBonus 缺失时作为背景分配兼容读取，不另加种族属性。 |
| `raceBonus.plus2` | 否 | `AttrKey &#124; null` | 见结构定义及所属功能文档 |
| `raceBonus.plus1` | 否 | `AttrKey &#124; null` | 见结构定义及所属功能文档 |
| `backgroundBonus` | 是 | `Partial<Record<AttrKey, number>>` | 见结构定义及所属功能文档 |
| `raceId` | 否 | `string &#124; null` | 见结构定义及所属功能文档 |
| `classId` | 否 | `string &#124; null` | 职业主修（M2 单选；兼职后续） |
| `equipment` | 否 | `Record<string, string>` | 装备槽：16 键（EQUIP_SLOT_KEYS）→ 物品 id（来自 items 目录） |
| `gold` | 否 | `number` | 初始资金（默认 300gp，以银币计=3000sp） |
| `updatedAt` | 否 | `number` | 见结构定义及所属功能文档 |

## emptyCharacter

导出接口 · 源码第 37 行。

```ts
export function emptyCharacter(playerId: string, characterId: string): CharacterSheet;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `playerId` | 否 | `string` | — |
| `characterId` | 否 | `string` | — |

## BUY_COST

导出接口 · 源码第 57 行。

2026-09-25: 27 buy; 14 costs 6 and 15 costs 8.

```ts
export const BUY_COST = [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 8] as const;
```

## buyCost

导出接口 · 源码第 59 行。

```ts
export function buyCost(score: number): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `score` | 否 | `number` | — |

## buySpent

导出接口 · 源码第 64 行。

```ts
export function buySpent(attrs: Record<AttrKey, number>): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `attrs` | 否 | `Record<AttrKey, number>` | — |

## BUY_BUDGET

导出接口 · 源码第 68 行。

```ts
export const BUY_BUDGET = 27;
```

## backgroundBonuses

导出接口 · 源码第 71 行。

Background replaces the former racial allocation; never count both.

```ts
export function backgroundBonuses(sheet: Pick<CharacterSheet,'backgroundBonus'|'raceBonus'>): Record<AttrKey,number>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `sheet` | 否 | `Pick<CharacterSheet,'backgroundBonus'&#124;'raceBonus'>` | — |
