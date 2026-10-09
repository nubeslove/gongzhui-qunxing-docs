# game/packages/contracts/src/token-motion.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {movementPath,type MovementPoint} from './movement-path';
import {storyId,storyNumber,storyObject} from './story';
```
</details>

## TokenMotion

导出接口 · 源码第 3 行。

```ts
export interface TokenMotion {
    id: string;
    serial: number;
    path: MovementPoint[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `serial` | 否 | `number` | 见结构定义及所属功能文档 |
| `path` | 否 | `MovementPoint[]` | 见结构定义及所属功能文档 |

## parseTokenMotion

导出接口 · 源码第 4 行。

```ts
export function parseTokenMotion(raw: unknown): TokenMotion;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## committedTokenMotion

导出接口 · 源码第 9 行。

Only interpolate a committed route that actually ends at the authoritative position.

```ts
export function committedTokenMotion(id: string, serial: number, from: MovementPoint, to: MovementPoint, path?: MovementPoint[]): TokenMotion|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | — |
| `serial` | 否 | `number` | — |
| `from` | 否 | `MovementPoint` | — |
| `to` | 否 | `MovementPoint` | — |
| `path` | 是 | `MovementPoint[]` | — |
