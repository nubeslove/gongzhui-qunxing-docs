# game/packages/contracts/src/user-colors.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {StoryWorkspace} from './story';
```
</details>

## USER_COLORS

导出接口 · 源码第 2 行。

```ts
export const USER_COLORS = ['#4eaa85', '#d98b52', '#8874ce', '#498dbd', '#c96289', '#9c9f40', '#44a5af', '#b879b5', '#b87953', '#627dc9', '#d27260', '#6caa5c'];
```

## defaultUserColor

导出接口 · 源码第 3 行。

```ts
export function defaultUserColor(id: string): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | — |

## userColor

导出接口 · 源码第 4 行。

```ts
export function userColor(story: StoryWorkspace|undefined, id: string): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace&#124;undefined` | — |
| `id` | 否 | `string` | — |

## parseUserColor

导出接口 · 源码第 5 行。

```ts
export function parseUserColor(raw: unknown): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## assignUserColor

导出接口 · 源码第 6 行。

```ts
export function assignUserColor(story: StoryWorkspace, id: string): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `id` | 否 | `string` | — |
