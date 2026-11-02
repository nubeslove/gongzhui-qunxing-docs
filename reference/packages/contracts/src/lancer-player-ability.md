# game/packages/contracts/src/lancer-player-ability.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {LANCER_CONDITIONS,type LancerCondition,type LancerDamageType} from './lancer-combat';
```
</details>

## LancerPlayerEffect

导出接口 · 源码第 4 行。

Player-declared effects for owned rules without a dedicated executable action.

```ts
export type LancerPlayerEffect = {
    kind: 'damage';
    target: string;
    formula: string;
    damageType: LancerDamageType;
    ap: boolean;
    attack: boolean;
    save?: {
        skill: 'hull' | 'agility' | 'systems' | 'engineering';
        dc: number;
        half: boolean;
        condition?: LancerCondition;
    };
} | {
    kind: 'condition';
    target: string;
    condition: LancerCondition;
    remove: boolean;
    duration: 'scene' | 'start' | 'end';
} | {
    kind: 'resource';
    target: string;
    resource: 'hp' | 'heat' | 'overshield' | 'burn' | 'repair' | 'cp' | 'structure' | 'stress';
    amount: number;
} | {
    kind: 'move';
    target: string;
    x: number;
    y: number;
    z: number;
    teleport: boolean;
} | {
    kind: 'equipment';
    target: string;
    equipment: string;
    operation: 'repair' | 'reload' | 'refill';
} | {
    kind: 'counter';
    target: string;
    name: string;
    amount: number;
} | {
    kind: 'roll';
    target: string;
    formula: string;
} | {
    kind: 'deploy';
    target: string;
    name: string;
    x: number;
    y: number;
    z: number;
    size: 0.5 | 1 | 2;
    hp: number;
    armor: number;
    evasion: number;
    edef: number;
    entity: 'drone' | 'cover';
} | {
    kind: 'recall';
    target: string;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.kind` | 否 | `'damage'` | 见结构定义及所属功能文档 |
| `分支1.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.formula` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.damageType` | 否 | `LancerDamageType` | 见结构定义及所属功能文档 |
| `分支1.ap` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支1.attack` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支1.save` | 是 | `{skill:'hull'&#124;'agility'&#124;'systems'&#124;'engineering';dc:number;half:boolean;condition?:LancerCondition}` | 见结构定义及所属功能文档 |
| `分支1.save.skill` | 否 | `'hull'&#124;'agility'&#124;'systems'&#124;'engineering'` | 见结构定义及所属功能文档 |
| `分支1.save.dc` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支1.save.half` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支1.save.condition` | 是 | `LancerCondition` | 见结构定义及所属功能文档 |
| `分支2.kind` | 否 | `'condition'` | 见结构定义及所属功能文档 |
| `分支2.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.condition` | 否 | `LancerCondition` | 见结构定义及所属功能文档 |
| `分支2.remove` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支2.duration` | 否 | `'scene'&#124;'start'&#124;'end'` | 见结构定义及所属功能文档 |
| `分支3.kind` | 否 | `'resource'` | 见结构定义及所属功能文档 |
| `分支3.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.resource` | 否 | `'hp'&#124;'heat'&#124;'overshield'&#124;'burn'&#124;'repair'&#124;'cp'&#124;'structure'&#124;'stress'` | 见结构定义及所属功能文档 |
| `分支3.amount` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支4.kind` | 否 | `'move'` | 见结构定义及所属功能文档 |
| `分支4.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.x` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支4.y` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支4.z` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支4.teleport` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支5.kind` | 否 | `'equipment'` | 见结构定义及所属功能文档 |
| `分支5.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支5.equipment` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支5.operation` | 否 | `'repair'&#124;'reload'&#124;'refill'` | 见结构定义及所属功能文档 |
| `分支6.kind` | 否 | `'counter'` | 见结构定义及所属功能文档 |
| `分支6.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支6.name` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支6.amount` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支7.kind` | 否 | `'roll'` | 见结构定义及所属功能文档 |
| `分支7.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支7.formula` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支8.kind` | 否 | `'deploy'` | 见结构定义及所属功能文档 |
| `分支8.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支8.name` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支8.x` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支8.y` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支8.z` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支8.size` | 否 | `0.5&#124;1&#124;2` | 见结构定义及所属功能文档 |
| `分支8.hp` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支8.armor` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支8.evasion` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支8.edef` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支8.entity` | 否 | `'drone'&#124;'cover'` | 见结构定义及所属功能文档 |
| `分支9.kind` | 否 | `'recall'` | 见结构定义及所属功能文档 |
| `分支9.target` | 否 | `string` | 见结构定义及所属功能文档 |

## LancerPlayerAbility

导出接口 · 源码第 14 行。

```ts
export interface LancerPlayerAbility {
    source: string;
    name: string;
    note: string;
    cost: 'quick' | 'full' | 'free' | 'protocol' | 'reaction' | 'followup';
    cp: number;
    repair: number;
    heat: number;
    charge: boolean;
    loading?: boolean;
    frequency: 'none' | 'turn' | 'round' | 'scene';
    effects: LancerPlayerEffect[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `source` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `note` | 否 | `string` | 见结构定义及所属功能文档 |
| `cost` | 否 | `'quick'&#124;'full'&#124;'free'&#124;'protocol'&#124;'reaction'&#124;'followup'` | 见结构定义及所属功能文档 |
| `cp` | 否 | `number` | 见结构定义及所属功能文档 |
| `repair` | 否 | `number` | 见结构定义及所属功能文档 |
| `heat` | 否 | `number` | 见结构定义及所属功能文档 |
| `charge` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `loading` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `frequency` | 否 | `'none'&#124;'turn'&#124;'round'&#124;'scene'` | 见结构定义及所属功能文档 |
| `effects` | 否 | `LancerPlayerEffect[]` | 见结构定义及所属功能文档 |

## LancerPlayerMemory

导出接口 · 源码第 18 行。

```ts
export interface LancerPlayerMemory {
    receipts: string[];
    uses: Record<string, number>;
    counts: Record<string, number>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `receipts` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `uses` | 否 | `Record<string,number>` | 见结构定义及所属功能文档 |
| `counts` | 否 | `Record<string,number>` | 见结构定义及所属功能文档 |

## parseLancerPlayerMemory

导出接口 · 源码第 25 行。

```ts
export function parseLancerPlayerMemory(raw: unknown): LancerPlayerMemory;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseLancerPlayerEffect

导出接口 · 源码第 30 行。

```ts
export function parseLancerPlayerEffect(raw: unknown): LancerPlayerEffect;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseLancerPlayerAbility

导出接口 · 源码第 44 行。

```ts
export function parseLancerPlayerAbility(raw: unknown): LancerPlayerAbility;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
