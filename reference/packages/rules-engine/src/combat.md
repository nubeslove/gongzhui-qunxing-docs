# game/packages/rules-engine/src/combat.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## mulberry32

导出接口 · 源码第 8 行。

确定性 RNG（mulberry32）

```ts
export function mulberry32(seed: number): () => number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `seed` | 否 | `number` | — |

## DiceLog

导出接口 · 源码第 19 行。

```ts
export interface DiceLog {
    d20: number[];
    bonusFaces: number[];
    penaltyFaces: number[];
    flat: number;
    total: number;
    nat20: boolean;
    nat1: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `d20` | 否 | `number[]` | 见结构定义及所属功能文档 |
| `bonusFaces` | 否 | `number[]` | 见结构定义及所属功能文档 |
| `penaltyFaces` | 否 | `number[]` | 见结构定义及所属功能文档 |
| `flat` | 否 | `number` | 见结构定义及所属功能文档 |
| `total` | 否 | `number` | 见结构定义及所属功能文档 |
| `nat20` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `nat1` | 否 | `boolean` | 见结构定义及所属功能文档 |

## AttackInput

导出接口 · 源码第 29 行。

```ts
export interface AttackInput {
    attrMod: number;
    proficiency: number;
    bonusDice?: number;
    penaltyDice?: number;
    advantage?: boolean;
    disadvantage?: boolean;
    targetAC: number;
    rng: () => number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `attrMod` | 否 | `number` | 见结构定义及所属功能文档 |
| `proficiency` | 否 | `number` | 见结构定义及所属功能文档 |
| `bonusDice` | 是 | `number` | 见结构定义及所属功能文档 |
| `penaltyDice` | 是 | `number` | 见结构定义及所属功能文档 |
| `advantage` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `disadvantage` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `targetAC` | 否 | `number` | 见结构定义及所属功能文档 |
| `rng` | 否 | `() => number` | 见结构定义及所属功能文档 |

## AttackResult

导出接口 · 源码第 40 行。

```ts
export interface AttackResult {
    dice: DiceLog;
    hit: boolean;
    crit: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `dice` | 否 | `DiceLog` | 见结构定义及所属功能文档 |
| `hit` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `crit` | 否 | `boolean` | 见结构定义及所属功能文档 |

## resolveAttack

导出接口 · 源码第 50 行。

攻击检定：D20+属性+熟练（至多一次）+奖励惩罚骰（1:1 抵消，至多 3 枚，取最大面）
大成功（自然20）=必定命中且重击；大失败（自然1）=必定未命中。

```ts
export function resolveAttack(a: AttackInput): AttackResult;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `AttackInput` | — |

## rollDie

导出接口 · 源码第 78 行。

```ts
export function rollDie(sides: number, rng: () => number): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `sides` | 否 | `number` | — |
| `rng` | 否 | `() => number` | — |

## parseDamageDice

导出接口 · 源码第 83 行。

掷 N 面骰 N 枚 + 固定值（伤害骰解析支持 "1d8"/"2d6"，类型后缀分离）

```ts
export function parseDamageDice(text: string): { count: number; sides: number; flat: number; type: string };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 否 | `string` | — |

## DamageInput

导出接口 · 源码第 96 行。

```ts
export interface DamageInput {
    dice: {
        count: number;
        sides: number;
        flat: number;
        type: string;
    };
    attrFlat?: number;
    dr?: number;
    resistances?: string[];
    vulnerabilities?: string[];
    precise?: boolean;
    rng: () => number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `dice` | 否 | `{ count: number; sides: number; flat: number; type: string }` | 见结构定义及所属功能文档 |
| `dice.count` | 否 | `number` | 见结构定义及所属功能文档 |
| `dice.sides` | 否 | `number` | 见结构定义及所属功能文档 |
| `dice.flat` | 否 | `number` | 见结构定义及所属功能文档 |
| `dice.type` | 否 | `string` | 见结构定义及所属功能文档 |
| `attrFlat` | 是 | `number` | 见结构定义及所属功能文档 |
| `dr` | 是 | `number` | 见结构定义及所属功能文档 |
| `resistances` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `vulnerabilities` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `precise` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `rng` | 否 | `() => number` | 见结构定义及所属功能文档 |

## DamageResult

导出接口 · 源码第 106 行。

```ts
export interface DamageResult {
    raw: number;
    rollTotal: number;
    flatTotal: number;
    afterDR: number;
    afterResistance: number;
    afterVulnerability: number;
    final: number;
    dice: number[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `raw` | 否 | `number` | 见结构定义及所属功能文档 |
| `rollTotal` | 否 | `number` | 见结构定义及所属功能文档 |
| `flatTotal` | 否 | `number` | 见结构定义及所属功能文档 |
| `afterDR` | 否 | `number` | 见结构定义及所属功能文档 |
| `afterResistance` | 否 | `number` | 见结构定义及所属功能文档 |
| `afterVulnerability` | 否 | `number` | 见结构定义及所属功能文档 |
| `final` | 否 | `number` | 见结构定义及所属功能文档 |
| `dice` | 否 | `number[]` | 见结构定义及所属功能文档 |

## computeDamage

导出接口 · 源码第 121 行。

伤害结算顺序：重击翻倍（骰+固定）→ DR（取最高固定减）→ 抗性（减半）→ 易伤（翻倍）→ 向下取整。
精准伤害：无视 DR/抗性；不重击翻倍。

```ts
export function computeDamage(inp: DamageInput, crit?: boolean): DamageResult;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `inp` | 否 | `DamageInput` | — |
| `crit` | 是 | `boolean` | false |

## initiative

导出接口 · 源码第 149 行。

先攻：D20+敏捷调整值；玩家平手玩家优先（faction 排序），NPC 平手按名称定序

```ts
export function initiative(entries: { id: string; dexMod: number; faction: string }[], rng: () => number): { id: string; roll: number; total: number; }[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `entries` | 否 | `{ id: string; dexMod: number; faction: string }[]` | — |
| `rng` | 否 | `() => number` | — |
