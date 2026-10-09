# game/packages/contracts/src/aaf-movement.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## AafSpeedMode

导出接口 · 源码第 3 行。

```ts
export type AafSpeedMode = keyof typeof AAF_SPEED_MODES;
```

## AafMovementSpeeds

导出接口 · 源码第 4 行。

```ts
export type AafMovementSpeeds = Partial<Record<Exclude<AafSpeedMode, 'walk'>, number>>;
```

## AafMovementGrant

导出接口 · 源码第 5 行。

```ts
export interface AafMovementGrant {
    mode: AafSpeedMode;
    total: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `mode` | 否 | `AafSpeedMode` | 见结构定义及所属功能文档 |
| `total` | 否 | `number` | 见结构定义及所属功能文档 |

## AafMovementPool

导出接口 · 源码第 6 行。

```ts
export interface AafMovementPool extends AafMovementGrant {
    id: string;
    remaining: number;
    speedAtGrant: number;
    outOfTurn: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `remaining` | 否 | `number` | 见结构定义及所属功能文档 |
| `speedAtGrant` | 否 | `number` | 见结构定义及所属功能文档 |
| `outOfTurn` | 否 | `boolean` | 见结构定义及所属功能文档 |

## AafTurnMovement

导出接口 · 源码第 7 行。

```ts
export interface AafTurnMovement {
    grants: AafMovementPool[];
    diagonals: number;
    distance: number;
    selectedId?: string;
    dragId?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `grants` | 否 | `AafMovementPool[]` | 见结构定义及所属功能文档 |
| `diagonals` | 否 | `number` | 见结构定义及所属功能文档 |
| `distance` | 否 | `number` | 见结构定义及所属功能文档 |
| `selectedId` | 是 | `string` | 见结构定义及所属功能文档 |
| `dragId` | 是 | `string` | 见结构定义及所属功能文档 |

## isAafTurnMovement

导出接口 · 源码第 8 行。

```ts
export function isAafTurnMovement(value: unknown): value is AafTurnMovement;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |

## isAafSpeedMode

导出接口 · 源码第 12 行。

```ts
export function isAafSpeedMode(value: unknown): value is AafSpeedMode;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |

## isAafMovementSpeeds

导出接口 · 源码第 13 行。

```ts
export function isAafMovementSpeeds(value: unknown): value is AafMovementSpeeds;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |

## aafSpeed

导出接口 · 源码第 16 行。

```ts
export function aafSpeed(profile: {speed:number;movementSpeeds?:AafMovementSpeeds}, mode: AafSpeedMode): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `profile` | 否 | `{speed:number;movementSpeeds?:AafMovementSpeeds}` | — |
| `mode` | 否 | `AafSpeedMode` | — |

## aafMovementRemaining

导出接口 · 源码第 17 行。

```ts
export function aafMovementRemaining(profile: {speed:number;movementSpeeds?:AafMovementSpeeds}, turn: {moveLeft:number;movement?:AafMovementGrant}, mode: AafSpeedMode): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `profile` | 否 | `{speed:number;movementSpeeds?:AafMovementSpeeds}` | — |
| `turn` | 否 | `{moveLeft:number;movement?:AafMovementGrant}` | — |
| `mode` | 否 | `AafSpeedMode` | — |
