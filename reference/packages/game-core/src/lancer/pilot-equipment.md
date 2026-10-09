# game/packages/game-core/src/lancer/pilot-equipment.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {LancerCombatWeapon} from '@aelzerant/contracts';
```
</details>

## lancerPilotWeapon

导出接口 · 源码第 22 行。

```ts
export function lancerPilotWeapon(id: keyof typeof LANCER_PILOT_WEAPONS, slot: number, type?: 'kinetic'|'energy'|'explosive'): LancerCombatWeapon;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `id` | 否 | `keyof typeof LANCER_PILOT_WEAPONS` | — |
| `slot` | 否 | `number` | — |
| `type` | 是 | `'kinetic'&#124;'energy'&#124;'explosive'` | 'kinetic' |
