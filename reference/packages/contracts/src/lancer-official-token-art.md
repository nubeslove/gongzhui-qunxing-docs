# game/packages/contracts/src/lancer-official-token-art.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ManualActor,ManualMap} from './tabletop';
```
</details>

## officialSilhouette

导出接口 · 源码第 42 行。

```ts
export function officialSilhouette(path: string|undefined): string | undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `path` | 否 | `string&#124;undefined` | — |

## lancerActorNpcAppearance

导出接口 · 源码第 47 行。

```ts
export function lancerActorNpcAppearance(actor: ManualActor): { grunt?: boolean | undefined; npc: any; } | undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |

## restoreLancerNpcAppearance

导出接口 · 源码第 61 行。

Restore old prefabs before private NPC sheets are removed from player views.

```ts
export function restoreLancerNpcAppearance(actors: ManualActor[], maps: Pick<ManualMap,'tokens'>[]): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actors` | 否 | `ManualActor[]` | — |
| `maps` | 否 | `Pick<ManualMap,'tokens'>[]` | — |
