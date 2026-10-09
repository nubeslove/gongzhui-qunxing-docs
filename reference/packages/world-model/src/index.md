# game/packages/world-model/src/index.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## Area

导出接口 · 源码第 9 行。

世设数据化（W1 · 结构归我）：
内容层 WorldModel v1 的类型 + 校验器 + 查询助手。
具体内容（regions/cultures/prices/monsters/npc/names）由设计师撰写，经 M6
资源管线发布（`world/*.json`）；本包只做结构与引用完整性校验。
挂接点：DR-047 物价 3 档 / DR-042 地区武器归属 / DR-041 身世锚点。

```ts
export type Area = "mainland" | "north" | "sea" | "bg";
```

## PriceTier

导出接口 · 源码第 10 行。

```ts
export type PriceTier = "capital" | "town" | "frontier";
```

## RegionDef

导出接口 · 源码第 12 行。

```ts
export interface RegionDef {
    id: string;
    name: string;
    area: Area;
    polity: string;
    prototype: string;
    conflicts: string[];
    priceTier: PriceTier;
    cultureTags: string[];
    monsters: string[];
    relations: {
        allies: string[];
        enemies: string[];
    };
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `area` | 否 | `Area` | 见结构定义及所属功能文档 |
| `polity` | 否 | `string` | 政体一句话（GM 叙事参考） |
| `prototype` | 否 | `string` | 现实/原型参考（拜占庭/蒙古…） |
| `conflicts` | 否 | `string[]` | 核心矛盾关键词 |
| `priceTier` | 否 | `PriceTier` | DR-047 物价档 |
| `cultureTags` | 否 | `string[]` | 引用 cultures.json 的 id |
| `monsters` | 否 | `string[]` | 怪物图鉴 id 列表（GM 侧分布） |
| `relations` | 否 | `{     allies: string[];     enemies: string[];   }` | 列国关系速查（友/敌；id 可为本表其他 region 或 powers 的 id） |
| `relations.allies` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `relations.enemies` | 否 | `string[]` | 见结构定义及所属功能文档 |

## CultureDef

导出接口 · 源码第 35 行。

```ts
export interface CultureDef {
    id: string;
    weapons: string[];
    nameStyle: string;
    flavor: string[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `weapons` | 否 | `string[]` | 地区/种族武器 id（DR-042 移出基础表的挂回点） |
| `nameStyle` | 否 | `string` | 命名风格（姓氏在前/氏族+名/教名…） |
| `flavor` | 否 | `string[]` | 服饰/饮食/信仰词条（游戏内 wiki 词条源） |

## PriceTierDef

导出接口 · 源码第 45 行。

```ts
export interface PriceTierDef {
    tier: PriceTier;
    goods: Record<string, number>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `tier` | 否 | `PriceTier` | 见结构定义及所属功能文档 |
| `goods` | 否 | `Record<string, number>` | 物品 id → 价格乘数（3 档） |

## PowerDef

导出接口 · 源码第 52 行。

跨域势力/威胁（列国关系速查表来源）：教廷/公会/怪物族/法尔克罗恩…

```ts
export interface PowerDef {
    id: string;
    name: string;
    kind: "faction" | "threat" | "guild" | "empire";
    note: string;
    allies: string[];
    enemies: string[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `kind` | 否 | `"faction" &#124; "threat" &#124; "guild" &#124; "empire"` | 见结构定义及所属功能文档 |
| `note` | 否 | `string` | 见结构定义及所属功能文档 |
| `allies` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `enemies` | 否 | `string[]` | 见结构定义及所属功能文档 |

## NpcTemplateDef

导出接口 · 源码第 61 行。

```ts
export interface NpcTemplateDef {
    id: string;
    role: string;
    anchors: string[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `role` | 否 | `string` | 官员/商人/戍士/冒险者师父… |
| `anchors` | 否 | `string[]` | 社会关系位（DR-041 身世锚点）：家族/宿敌/恩人… |

## WorldModel

导出接口 · 源码第 69 行。

```ts
export interface WorldModel {
    meta: {
        name: string;
        epochName: string;
        now: string;
        timelineNotes: string[];
    };
    regions: RegionDef[];
    cultures: CultureDef[];
    priceTiers: PriceTierDef[];
    npcTemplates: NpcTemplateDef[];
    powers: PowerDef[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `meta` | 否 | `{     name: string;     epochName: string;     /** 如 "AL 1000" */     now: string;     timelineNotes: string[];   }` | 世界名/历法纪元/时间线锚点（结构草案；详细字段随 W2 内容调整） |
| `meta.name` | 否 | `string` | 见结构定义及所属功能文档 |
| `meta.epochName` | 否 | `string` | 见结构定义及所属功能文档 |
| `meta.now` | 否 | `string` | 如 "AL 1000" |
| `meta.timelineNotes` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `regions` | 否 | `RegionDef[]` | 见结构定义及所属功能文档 |
| `cultures` | 否 | `CultureDef[]` | 见结构定义及所属功能文档 |
| `priceTiers` | 否 | `PriceTierDef[]` | 见结构定义及所属功能文档 |
| `npcTemplates` | 否 | `NpcTemplateDef[]` | 见结构定义及所属功能文档 |
| `powers` | 否 | `PowerDef[]` | 跨域势力/威胁（教廷/公会/怪物族…）与列国关系速查 |

## validateWorldModel

导出接口 · 源码第 90 行。

校验：返回错误列表（空数组=通过）

```ts
export function validateWorldModel(model: WorldModel): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model` | 否 | `WorldModel` | — |

## regionPriceTier

导出接口 · 源码第 129 行。

地区物价档查询（DR-047）：regionId → tier 定义

```ts
export function regionPriceTier(model: WorldModel, regionId: string): PriceTierDef | null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model` | 否 | `WorldModel` | — |
| `regionId` | 否 | `string` | — |

## regionCultures

导出接口 · 源码第 136 行。

地区文化合并视图（culture 引用展开）。查询用。

```ts
export function regionCultures(model: WorldModel, regionId: string): CultureDef[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `model` | 否 | `WorldModel` | — |
| `regionId` | 否 | `string` | — |
