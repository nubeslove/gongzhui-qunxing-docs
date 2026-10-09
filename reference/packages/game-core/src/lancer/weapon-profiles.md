# game/packages/game-core/src/lancer/weapon-profiles.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import { lancerSystemActive } from './system-passives';
import { mimicLancerProfile } from './mimic';
import { spinningLancerProfile } from './weapon-operation';
import type { LancerCombatUnit, LancerCombatWeapon } from '@aelzerant/contracts';
```
</details>

## LancerWeaponProfile

导出接口 · 源码第 6 行。

```ts
export interface LancerWeaponProfile {
    id: string;
    name: string;
    description: string;
    patch: Partial<LancerCombatWeapon>;
    tags?: string[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `description` | 否 | `string` | 见结构定义及所属功能文档 |
| `patch` | 否 | `Partial<LancerCombatWeapon>` | 见结构定义及所属功能文档 |
| `tags` | 是 | `string[]` | 见结构定义及所属功能文档 |

## lancerWeaponProfiles

导出接口 · 源码第 17 行。

```ts
export function lancerWeaponProfiles(w: LancerCombatWeapon): LancerWeaponProfile[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `w` | 否 | `LancerCombatWeapon` | — |

## lancerShotWeapon

导出接口 · 源码第 21 行。

Return an immutable shot profile; expenditures still belong to the installed weapon.

```ts
export function lancerShotWeapon(u: LancerCombatUnit, w: LancerCombatWeapon, profile?: string): LancerCombatWeapon;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |
| `w` | 否 | `LancerCombatWeapon` | — |
| `profile` | 是 | `string` | — |
