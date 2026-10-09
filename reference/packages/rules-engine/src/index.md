# game/packages/rules-engine/src/index.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## 重新导出的模块

```ts
export * from './aaf';
export * from './aaf-checks';
export * from './aaf-catalog.generated';
export * from "./combat";
export * from "./lancer";
export * from './lancer-training';
export * from './dnd';
export * from './dnd/characters';
export * from './dnd/spells';
export * from './dnd/hud-actions';
export * from './dnd/progression';
export * from './dnd/equipment';
export * from './dnd/preparation';
export * from './terra/creation';
export * from './dnd/sorcery';
export * from './dnd/triggers';
export * from './dnd/spell-effects';
export * from './dnd/spell-reviews';
export * from './utopia';
export * from './utopia/actions';
export * from './utopia/npc';
export * from './aaf-character';
```

## attributeModifier

导出接口 · 源码第 11 行。

属性调整值 = ⌈属性值/2⌉ − 5（DR：与规则书对照表一致）

```ts
export function attributeModifier(score: number): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `score` | 否 | `number` | — |

## proficiencyBonus

导出接口 · 源码第 16 行。

熟练加值挡位（1-4:+2 / 5-8:+3 / 9-12:+4 / 13-16:+5 / 17-20:+6）

```ts
export function proficiencyBonus(level: number): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `level` | 否 | `number` | — |

## focusMax

导出接口 · 源码第 21 行。

专注值上限 = 3 + ⌈角色等级/2⌉（DR-024）

```ts
export function focusMax(level: number): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `level` | 否 | `number` | — |

## CheckInput

导出接口 · 源码第 25 行。

```ts
export interface CheckInput {
    attrScore: number;
    useProficiency?: boolean;
    expertise?: boolean;
    bonusDice?: number;
    penaltyDice?: number;
    advantage?: boolean;
    disadvantage?: boolean;
    level: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `attrScore` | 否 | `number` | 六属性之一 |
| `useProficiency` | 是 | `boolean` | 是否加入熟练加值（技能/攻击等） |
| `expertise` | 是 | `boolean` | 是否专精（双倍熟练） |
| `bonusDice` | 是 | `number` | 额外奖励骰枚数（D20 检定的唯一加值语言之一） |
| `penaltyDice` | 是 | `number` | 额外惩罚骰枚数 |
| `advantage` | 是 | `boolean` | 优势/劣势（同时存在则取消） |
| `disadvantage` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `level` | 否 | `number` | 见结构定义及所属功能文档 |

## CheckResult

导出接口 · 源码第 42 行。

```ts
export interface CheckResult {
    total: number;
    validModifiers: string[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `total` | 否 | `number` | 结果 = d20 + 调整值 + 熟练（0/1/2 倍）+ 奖励惩罚骰（取最大净额，至多 3 枚） |
| `validModifiers` | 否 | `string[]` | 见结构定义及所属功能文档 |

## validateBonusLanguage

导出接口 · 源码第 49 行。

D20 加值语言铁律校验：除奖励/惩罚骰与优势/劣势外，不允许任何散落固定 +/-。

```ts
export function validateBonusLanguage(modifiers: { kind: string; value: number }[]): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `modifiers` | 否 | `{ kind: string; value: number }[]` | — |
