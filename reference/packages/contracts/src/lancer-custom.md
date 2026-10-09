# game/packages/contracts/src/lancer-custom.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## LANCER_CUSTOM_TAGS

导出接口 · 源码第 2 行。

Versioned, data-only equipment automation. Unknown nodes fail closed.

```ts
export const LANCER_CUSTOM_TAGS = ['ap', 'loading', 'ordnance', 'smart', 'seeking', 'melee', 'arcing', 'overkill'] as const;
```

## LANCER_CUSTOM_CONDITIONS

导出接口 · 源码第 3 行。

```ts
export const LANCER_CUSTOM_CONDITIONS = ['impaired', 'slowed', 'immobilized', 'stunned', 'jammed', 'exposed', 'prone', 'invisible', 'lockon', 'shredded', 'reactionless'] as const;
```

## CustomCondition

导出接口 · 源码第 4 行。

```ts
export type CustomCondition = typeof LANCER_CUSTOM_CONDITIONS[number];
```

## CustomDamageType

导出接口 · 源码第 5 行。

```ts
export type CustomDamageType = 'kinetic' | 'energy' | 'explosive' | 'burn' | 'heat';
```

## LancerCustomWeaponProfile

导出接口 · 源码第 6 行。

```ts
export interface LancerCustomWeaponProfile {
    weaponType: 'rifle' | 'cqb' | 'cannon' | 'launcher' | 'nexus' | 'melee';
    damageParts: {
        damage: string;
        type: CustomDamageType;
    }[];
    range: number;
    threat: number;
    accuracy: number;
    selfHeat: number;
    reliable: number;
    knockback: number;
    tags: (typeof LANCER_CUSTOM_TAGS[number])[];
    area?: {
        kind: 'blast' | 'burst' | 'line' | 'cone';
        size: number;
    };
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `weaponType` | 否 | `'rifle'&#124;'cqb'&#124;'cannon'&#124;'launcher'&#124;'nexus'&#124;'melee'` | 见结构定义及所属功能文档 |
| `damageParts` | 否 | `{damage:string;type:CustomDamageType}[]` | 见结构定义及所属功能文档 |
| `damageParts.[].damage` | 否 | `string` | 见结构定义及所属功能文档 |
| `damageParts.[].type` | 否 | `CustomDamageType` | 见结构定义及所属功能文档 |
| `range` | 否 | `number` | 见结构定义及所属功能文档 |
| `threat` | 否 | `number` | 见结构定义及所属功能文档 |
| `accuracy` | 否 | `number` | 见结构定义及所属功能文档 |
| `selfHeat` | 否 | `number` | 见结构定义及所属功能文档 |
| `reliable` | 否 | `number` | 见结构定义及所属功能文档 |
| `knockback` | 否 | `number` | 见结构定义及所属功能文档 |
| `tags` | 否 | `(typeof LANCER_CUSTOM_TAGS[number])[]` | 见结构定义及所属功能文档 |
| `area` | 是 | `{kind:'blast'&#124;'burst'&#124;'line'&#124;'cone';size:number}` | 见结构定义及所属功能文档 |
| `area.kind` | 否 | `'blast'&#124;'burst'&#124;'line'&#124;'cone'` | 见结构定义及所属功能文档 |
| `area.size` | 否 | `number` | 见结构定义及所属功能文档 |

## LancerCustomEffect

导出接口 · 源码第 13 行。

```ts
export type LancerCustomEffect = {
    type: 'damage';
    amount: string;
    damageType: CustomDamageType;
    ap: boolean;
} | {
    type: 'save';
    amount: string;
    damageType: CustomDamageType;
    skill: 'hull' | 'agility' | 'systems' | 'engineering';
    half: boolean;
    conditions: CustomCondition[];
} | {
    type: 'condition';
    condition: CustomCondition;
    duration: 'target-next-turn' | 'source-next-turn';
} | {
    type: 'overshield' | 'cool';
    amount: string;
} | {
    type: 'reload';
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.type` | 否 | `'damage'` | 见结构定义及所属功能文档 |
| `分支1.amount` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.damageType` | 否 | `CustomDamageType` | 见结构定义及所属功能文档 |
| `分支1.ap` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支2.type` | 否 | `'save'` | 见结构定义及所属功能文档 |
| `分支2.amount` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.damageType` | 否 | `CustomDamageType` | 见结构定义及所属功能文档 |
| `分支2.skill` | 否 | `'hull'&#124;'agility'&#124;'systems'&#124;'engineering'` | 见结构定义及所属功能文档 |
| `分支2.half` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支2.conditions` | 否 | `CustomCondition[]` | 见结构定义及所属功能文档 |
| `分支3.type` | 否 | `'condition'` | 见结构定义及所属功能文档 |
| `分支3.condition` | 否 | `CustomCondition` | 见结构定义及所属功能文档 |
| `分支3.duration` | 否 | `'target-next-turn'&#124;'source-next-turn'` | 见结构定义及所属功能文档 |
| `分支4.type` | 否 | `'overshield'&#124;'cool'` | 见结构定义及所属功能文档 |
| `分支4.amount` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支5.type` | 否 | `'reload'` | 见结构定义及所属功能文档 |

## LancerCustomAction

导出接口 · 源码第 19 行。

```ts
export interface LancerCustomAction {
    id: string;
    name: string;
    description: string;
    cost: 'quick' | 'full' | 'protocol';
    target: 'self' | 'ally' | 'enemy' | 'any';
    range: number;
    selfHeat: number;
    effects: LancerCustomEffect[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `description` | 否 | `string` | 见结构定义及所属功能文档 |
| `cost` | 否 | `'quick'&#124;'full'&#124;'protocol'` | 见结构定义及所属功能文档 |
| `target` | 否 | `'self'&#124;'ally'&#124;'enemy'&#124;'any'` | 见结构定义及所属功能文档 |
| `range` | 否 | `number` | 见结构定义及所属功能文档 |
| `selfHeat` | 否 | `number` | 见结构定义及所属功能文档 |
| `effects` | 否 | `LancerCustomEffect[]` | 见结构定义及所属功能文档 |

## LancerEquipmentAutomation

导出接口 · 源码第 23 行。

```ts
export type LancerEquipmentAutomation = {
    version: 1;
    kind: 'weapon';
    profile: LancerCustomWeaponProfile;
} | {
    version: 1;
    kind: 'system';
    actions: LancerCustomAction[];
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.version` | 否 | `1` | 见结构定义及所属功能文档 |
| `分支1.kind` | 否 | `'weapon'` | 见结构定义及所属功能文档 |
| `分支1.profile` | 否 | `LancerCustomWeaponProfile` | 见结构定义及所属功能文档 |
| `分支2.version` | 否 | `1` | 见结构定义及所属功能文档 |
| `分支2.kind` | 否 | `'system'` | 见结构定义及所属功能文档 |
| `分支2.actions` | 否 | `LancerCustomAction[]` | 见结构定义及所属功能文档 |

## LancerCustomSystemAutomation

导出接口 · 源码第 26 行。

```ts
export type LancerCustomSystemAutomation = Extract<LancerEquipmentAutomation, {
    kind: 'system';
}>;
```

## parseLancerFormula

导出接口 · 源码第 47 行。

```ts
export function parseLancerFormula(value: unknown, path?: string): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |
| `path` | 是 | `string` | '骰式' |

## parseLancerAutomation

导出接口 · 源码第 65 行。

```ts
export function parseLancerAutomation(raw: unknown, expected?: 'weapon'|'system'): LancerEquipmentAutomation;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
| `expected` | 是 | `'weapon'&#124;'system'` | — |
