# game/apps/desktop/src/story/minigames/QteView.tsx

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {useEffect,useMemo,useRef,type ComponentType} from 'react';
import {parseQteDefinition,type QteCue} from '@aelzerant/contracts';
import {qteModule} from '@aelzerant/session/core';
import {registerMinigameClient,type MinigameViewProps} from './sdk';
import {keyboardMouseInput} from './input';
import {placeGameCues,intersects,type GameRect} from './layout';
```
</details>

## QteCueViewProps

导出接口 · 源码第 7 行。

```ts
export interface QteCueViewProps {
    cue: QteCue;
    elapsed: number;
    progress: Record<string, unknown>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `cue` | 否 | `QteCue` | 见结构定义及所属功能文档 |
| `elapsed` | 否 | `number` | 见结构定义及所属功能文档 |
| `progress` | 否 | `Record<string,unknown>` | 见结构定义及所属功能文档 |

## registerQteView

导出接口 · 源码第 9 行。

```ts
export function registerQteView(id: string, view: ComponentType<QteCueViewProps>): ()=>void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | — |
| `view` | 否 | `ComponentType<QteCueViewProps>` | — |

## qteTypeNames

导出接口 · 源码第 10 行。

```ts
export const qteTypeNames: Record<string, string>;
```

## keyName

导出接口 · 源码第 11 行。

```ts
export const keyName: (key: string): string;
```

## QteView

导出接口 · 源码第 18 行。

```ts
export function QteView(p: MinigameViewProps): import("@source/node_modules/.pnpm/@types+react@18.3.31/node_modules/@types/react/index").JSX.Element;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `p` | 否 | `MinigameViewProps` | — |
