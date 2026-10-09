# game/packages/contracts/src/roll-visibility.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {StoryMessage} from './story';
import type {RollMode} from './world-conversation';
```
</details>

## PrivateRollMode

导出接口 · 源码第 3 行。

```ts
export type PrivateRollMode = Exclude<RollMode, 'public'>;
```

## RollPrivacy

导出接口 · 源码第 4 行。

```ts
export interface RollPrivacy {
    mode: PrivateRollMode;
    revision: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `mode` | 否 | `PrivateRollMode` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |

## privateRollMode

导出接口 · 源码第 6 行。

The original privacy policy remains authoritative even while the result is public.

```ts
export function privateRollMode(message: StoryMessage): PrivateRollMode;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `message` | 否 | `StoryMessage` | — |

## canManageRollVisibility

导出接口 · 源码第 7 行。

```ts
export function canManageRollVisibility(message: StoryMessage, playerId: string, gm: boolean): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `message` | 否 | `StoryMessage` | — |
| `playerId` | 否 | `string` | — |
| `gm` | 否 | `boolean` | — |
