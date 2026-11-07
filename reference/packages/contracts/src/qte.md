# game/packages/contracts/src/qte.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {gameObject,gameText,gameNumber,gameChoice,gameList,type GameObject,type MinigamePreset} from './minigame';
```
</details>

## QTE_TYPES

导出接口 · 源码第 2 行。

```ts
export const QTE_TYPES = ['tap', 'hold', 'mash', 'chord', 'swipe'] as const;
```

## QteType

导出接口 · 源码第 3 行。

```ts
export type QteType = typeof QTE_TYPES[number];
```

## QteGrade

导出接口 · 源码第 4 行。

```ts
export interface QteGrade {
    id: string;
    label: string;
    windowMs: number;
    score: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `label` | 否 | `string` | 见结构定义及所属功能文档 |
| `windowMs` | 否 | `number` | 见结构定义及所属功能文档 |
| `score` | 否 | `number` | 见结构定义及所属功能文档 |

## QteCue

导出接口 · 源码第 5 行。

```ts
export interface QteCue {
    id: string;
    type: string;
    label: string;
    at: number;
    duration: number;
    timing: 'reaction' | 'beat';
    targetMs: number;
    keys: string[];
    holdMs: number;
    hits: number;
    direction: 'up' | 'down' | 'left' | 'right';
    distance: number;
    grades: QteGrade[];
    config: GameObject;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `type` | 否 | `string` | 见结构定义及所属功能文档 |
| `label` | 否 | `string` | 见结构定义及所属功能文档 |
| `at` | 否 | `number` | 见结构定义及所属功能文档 |
| `duration` | 否 | `number` | 见结构定义及所属功能文档 |
| `timing` | 否 | `'reaction'&#124;'beat'` | 见结构定义及所属功能文档 |
| `targetMs` | 否 | `number` | 见结构定义及所属功能文档 |
| `keys` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `holdMs` | 否 | `number` | 见结构定义及所属功能文档 |
| `hits` | 否 | `number` | 见结构定义及所属功能文档 |
| `direction` | 否 | `'up'&#124;'down'&#124;'left'&#124;'right'` | 见结构定义及所属功能文档 |
| `distance` | 否 | `number` | 见结构定义及所属功能文档 |
| `grades` | 否 | `QteGrade[]` | 见结构定义及所属功能文档 |
| `config` | 否 | `GameObject` | 见结构定义及所属功能文档 |

## QteDefinition

导出接口 · 源码第 10 行。

```ts
export interface QteDefinition {
    version: 1;
    cues: QteCue[];
    passScore: number;
    missScore: number;
    config: GameObject;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `version` | 否 | `1` | 见结构定义及所属功能文档 |
| `cues` | 否 | `QteCue[]` | 见结构定义及所属功能文档 |
| `passScore` | 否 | `number` | 见结构定义及所属功能文档 |
| `missScore` | 否 | `number` | 见结构定义及所属功能文档 |
| `config` | 否 | `GameObject` | 见结构定义及所属功能文档 |

## parseQteDefinition

导出接口 · 源码第 11 行。

```ts
export function parseQteDefinition(raw: unknown): QteDefinition;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## newQteCue

导出接口 · 源码第 31 行。

```ts
export function newQteCue(id: string, at?: number): QteCue;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | — |
| `at` | 是 | `number` | 0 |

## newQtePreset

导出接口 · 源码第 32 行。

```ts
export function newQtePreset(id: string): MinigamePreset;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | — |
