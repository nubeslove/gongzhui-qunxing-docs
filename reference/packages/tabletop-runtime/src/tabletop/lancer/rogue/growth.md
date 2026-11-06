# game/packages/tabletop-runtime/src/tabletop/lancer/rogue/growth.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ManualActor} from '@aelzerant/contracts';
import {readLancer} from '../model';
```
</details>

## ROGUE_ATTRIBUTES

导出接口 · 源码第 4 行。

```ts
export const ROGUE_ATTRIBUTES = ['hull', 'agility', 'systems', 'engineering'] as const;
```

## RogueAttributes

导出接口 · 源码第 5 行。

```ts
export type RogueAttributes = Record<typeof ROGUE_ATTRIBUTES[number], number>;
```

## rogueAttributes

导出接口 · 源码第 6 行。

```ts
export const rogueAttributes: (actor: ManualActor): RogueAttributes;
```

## preserveRogueDamage

导出接口 · 源码第 9 行。

Capacity changes preserve damage, including damage beyond the smaller capacity.

```ts
export function preserveRogueDamage(actor: ManualActor, before: {hp:number;max:number;structure:number;debt:number}): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |
| `before` | 否 | `{hp:number;max:number;structure:number;debt:number}` | — |

## rogueHealthSnapshot

导出接口 · 源码第 18 行。

```ts
export function rogueHealthSnapshot(actor: ManualActor): { hp: number; max: number; structure: number; debt: number; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |
