# game/packages/tabletop-runtime/src/tabletop/lancer/tokenAppearance.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import images from './npc-token-art.json';
```
</details>

## lancerNpcTokenImage

导出接口 · 源码第 3 行。

Resolve a public appearance identity to an installed image without exposing combat statistics.

```ts
export function lancerNpcTokenImage(classId: string, grunt?: boolean): string|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `classId` | 否 | `string` | — |
| `grunt` | 是 | `boolean` | false |

## lancerNpcTokenAppearance

导出接口 · 源码第 9 行。

Serializable appearance identity, independent of private combat statistics and world asset blobs.

```ts
export function lancerNpcTokenAppearance(classId: string, grunt?: boolean): {npc:string;grunt?:boolean};
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `classId` | 否 | `string` | — |
| `grunt` | 是 | `boolean` | false |

## isBuiltinLancerNpcImage

导出接口 · 源码第 14 行。

```ts
export const isBuiltinLancerNpcImage: (path: string): boolean;
```
