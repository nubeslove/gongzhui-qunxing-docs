# game/packages/rules-engine/src/utopia/actions.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {UtopiaCharacter,UtopiaDamage} from '@aelzerant/contracts';
import {utopiaEntry,utopiaInstalled,utopiaRank,utopiaStats} from './index';
```
</details>

## UtopiaWeaponProfile

导出接口 · 源码第 3 行。

```ts
export interface UtopiaWeaponProfile {
    id: string;
    name: string;
    size: string;
    class: string;
    range: number;
    threat: number;
    melee: boolean;
    damage: string;
    damageType: UtopiaDamage;
    burn: number;
    heat: number;
    ap: boolean;
    smart: boolean;
    loading: boolean;
    reliable: number;
    knockback: number;
    inaccurate: boolean;
    heavyOrdnance: boolean;
    arcing: boolean;
    seeking: boolean;
    area?: {
        kind: 'blast' | 'burst' | 'line' | 'cone';
        size: number;
    };
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `size` | 否 | `string` | 见结构定义及所属功能文档 |
| `class` | 否 | `string` | 见结构定义及所属功能文档 |
| `range` | 否 | `number` | 见结构定义及所属功能文档 |
| `threat` | 否 | `number` | 见结构定义及所属功能文档 |
| `melee` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `damage` | 否 | `string` | 见结构定义及所属功能文档 |
| `damageType` | 否 | `UtopiaDamage` | 见结构定义及所属功能文档 |
| `burn` | 否 | `number` | 见结构定义及所属功能文档 |
| `heat` | 否 | `number` | 见结构定义及所属功能文档 |
| `ap` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `smart` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `loading` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `reliable` | 否 | `number` | 见结构定义及所属功能文档 |
| `knockback` | 否 | `number` | 见结构定义及所属功能文档 |
| `inaccurate` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `heavyOrdnance` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `arcing` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `seeking` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `area` | 是 | `{kind:'blast'&#124;'burst'&#124;'line'&#124;'cone';size:number}` | 见结构定义及所属功能文档 |
| `area.kind` | 否 | `'blast'&#124;'burst'&#124;'line'&#124;'cone'` | 见结构定义及所属功能文档 |
| `area.size` | 否 | `number` | 见结构定义及所属功能文档 |

## utopiaWeapon

导出接口 · 源码第 4 行。

```ts
export function utopiaWeapon(c: UtopiaCharacter, entry: string, mode?: string): UtopiaWeaponProfile;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `UtopiaCharacter` | — |
| `entry` | 否 | `string` | — |
| `mode` | 是 | `string` | '' |

## utopiaTacticalOptions

导出接口 · 源码第 32 行。

```ts
export function utopiaTacticalOptions(c: UtopiaCharacter): { basic: ({ readonly id: "attack"; readonly name: "交火"; readonly cost: 1; readonly target: "unit"; } | { readonly id: "barrage"; readonly name: "齐射"; readonly cost: 2; readonly target: "unit"; } | { readonly id: "boost"; readonly name: "推进"; readonly cost: 1; readonly target: "self"; } | { readonly id: "disengage"; readonly name: "脱离"; readonly cost: 2; readonly target: "self"; } | { readonly id: "ram"; readonly name: "冲撞"; readonly cost: 1; readonly target: "unit"; } | { readonly id: "unarmed"; readonly name: "徒手打击"; readonly cost: 2; readonly target: "unit"; } | { readonly id: "hide"; readonly name: "躲藏"; readonly cost: 1; readonly target: "self"; } | { readonly id: "search"; readonly name: "搜索"; readonly cost: 1; readonly target: "point"; } | { readonly id: "reload"; readonly name: "装填单件"; readonly cost: 1; readonly target: "self"; } | { readonly id: "attune"; readonly name: "自调谐"; readonly cost: 1; readonly target: "self"; } | { readonly id: "stabilize"; readonly name: "稳固处置"; readonly cost: 2; readonly target: "self"; } | { readonly id: "scan"; readonly name: "扫描"; readonly cost: 1; readonly target: "unit"; } | { readonly id: "lockon"; readonly name: "锁定"; readonly cost: 1; readonly target: "unit"; } | { readonly id: "bolster"; readonly name: "防护校验"; readonly cost: 1; readonly target: "unit"; } | { readonly id: "invade"; readonly name: "电子注扰"; readonly cost: 1; readonly target: "unit"; } | { readonly id: "overcharge"; readonly name: "超限"; readonly cost: 0; readonly target: "self"; } | { readonly id: "shutdown"; readonly name: "关机"; readonly cost: 1; readonly target: "self"; } | { readonly id: "restart"; readonly name: "重新启动"; readonly cost: 2; readonly target: "unit"; } | { readonly id: "stand"; readonly name: "起立"; readonly cost: 0; readonly target: "self"; })[]; weapons: { name: string; id: string; entry: string; mount: number; charges: number; loaded: boolean; destroyed: boolean; module?: string; }[] | { id: string; entry: string; name: string; }[]; systems: { name: string; meta: string; id: string; entry: string; mount: number; charges: number; loaded: boolean; destroyed: boolean; module?: string; }[]; sensors: number; psionics: boolean; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `UtopiaCharacter` | — |
