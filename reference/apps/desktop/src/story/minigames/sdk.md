# game/apps/desktop/src/story/minigames/sdk.tsx

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ComponentType} from 'react';
import type {GameObject,MinigameModule} from '@aelzerant/contracts';
import type {GameInputEvent,GameInputMapper} from './input';
import type {GameRect} from './layout';
```
</details>

## MinigameViewProps

导出接口 · 源码第 5 行。

```ts
export interface MinigameViewProps {
    definition: GameObject;
    state: GameObject;
    elapsed: number;
    paused: boolean;
    area: GameRect;
    blocked: GameRect[];
    input: (event: GameInputEvent) => void;
    unavailable: (reason: string) => void;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `definition` | 否 | `GameObject` | 见结构定义及所属功能文档 |
| `state` | 否 | `GameObject` | 见结构定义及所属功能文档 |
| `elapsed` | 否 | `number` | 见结构定义及所属功能文档 |
| `paused` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `area` | 否 | `GameRect` | 见结构定义及所属功能文档 |
| `blocked` | 否 | `GameRect[]` | 见结构定义及所属功能文档 |
| `input` | 否 | `(event:GameInputEvent)=>void` | 见结构定义及所属功能文档 |
| `unavailable` | 否 | `(reason:string)=>void` | 见结构定义及所属功能文档 |

## MinigameClient

导出接口 · 源码第 9 行。

```ts
export interface MinigameClient {
    id: string;
    module: MinigameModule;
    View: ComponentType<MinigameViewProps>;
    mapInput: GameInputMapper;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `module` | 否 | `MinigameModule` | 见结构定义及所属功能文档 |
| `View` | 否 | `ComponentType<MinigameViewProps>` | 见结构定义及所属功能文档 |
| `mapInput` | 否 | `GameInputMapper` | 见结构定义及所属功能文档 |

## registerMinigameClient

导出接口 · 源码第 13 行。

```ts
export function registerMinigameClient(client: MinigameClient): ()=>void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `client` | 否 | `MinigameClient` | — |

## getMinigameClient

导出接口 · 源码第 17 行。

```ts
export function getMinigameClient(id: string): MinigameClient;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | — |
