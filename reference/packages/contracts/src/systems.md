# game/packages/contracts/src/systems.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## GameSystemId

导出接口 · 源码第 8 行。

```ts
export type GameSystemId = keyof typeof GAME_SYSTEMS;
```

## isGameSystemId

导出接口 · 源码第 9 行。

```ts
export function isGameSystemId(value: unknown): value is GameSystemId;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |

## systemOf

导出接口 · 源码第 12 行。

```ts
export function systemOf(value: { systemId?: GameSystemId }): GameSystemId;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `{ systemId?: GameSystemId }` | — |

## systemIdentity

导出接口 · 源码第 13 行。

```ts
export function systemIdentity(value: unknown): { systemId: GameSystemId; systemVersion: string };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |
