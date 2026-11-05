# game/packages/contracts/src/monster-health.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## MONSTER_HP_VISIBILITIES

导出接口 · 源码第 2 行。

World-scoped monster health visibility. LANCER always uses exact values.

```ts
export const MONSTER_HP_VISIBILITIES = ['exact', 'wounded', 'hidden'] as const;
```

## MonsterHpVisibility

导出接口 · 源码第 3 行。

```ts
export type MonsterHpVisibility = typeof MONSTER_HP_VISIBILITIES[number];
```

## MonsterHpBand

导出接口 · 源码第 4 行。

```ts
export type MonsterHpBand = 'healthy' | 'wounded' | 'critical' | 'dead';
```

## monsterHpVisibilityFor

导出接口 · 源码第 8 行。

```ts
export function monsterHpVisibilityFor(story: {monsterHpVisibility?:MonsterHpVisibility}|undefined, systemId: string): MonsterHpVisibility;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `{monsterHpVisibility?:MonsterHpVisibility}&#124;undefined` | — |
| `systemId` | 否 | `string` | — |

## monsterHpBand

导出接口 · 源码第 12 行。

```ts
export function monsterHpBand(hp: number, max: number): MonsterHpBand;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `hp` | 否 | `number` | — |
| `max` | 否 | `number` | — |

## monsterDamageTaken

导出接口 · 源码第 19 行。

Net damage currently carried by the creature.

```ts
export function monsterDamageTaken(hp: number, max: number): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `hp` | 否 | `number` | — |
| `max` | 否 | `number` | — |

## monsterHpDisplay

导出接口 · 源码第 20 行。

```ts
export function monsterHpDisplay(hp: number, max: number, mode: MonsterHpVisibility): { mode: "exact"; band: MonsterHpBand; fraction: number; damage: number; current: number; max: number; } | { mode: "wounded"; band: MonsterHpBand; fraction: number; damage: number; current?: undefined; max?: undefined; } | { mode: "hidden"; band: MonsterHpBand; fraction: number; damage: number; current?: undefined; max?: undefined; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `hp` | 否 | `number` | — |
| `max` | 否 | `number` | — |
| `mode` | 否 | `MonsterHpVisibility` | — |
