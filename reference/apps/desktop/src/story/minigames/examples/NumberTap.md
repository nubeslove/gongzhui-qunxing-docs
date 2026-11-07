# game/apps/desktop/src/story/minigames/examples/NumberTap.tsx

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {useEffect} from 'react';
import {registerMinigameModule} from '@aelzerant/session/core';
import {numberTapModule} from '../../../../../../packages/session/src/examples/number-tap';
import {registerMinigameClient,keyboardMouseInput,placeGameCues,type MinigameViewProps} from '../index';
```
</details>

## NumberTapView

导出接口 · 源码第 6 行。

```ts
export function NumberTapView(p: MinigameViewProps): import("@source/node_modules/.pnpm/@types+react@18.3.31/node_modules/@types/react/index").JSX.Element | null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `p` | 否 | `MinigameViewProps` | — |

## installNumberTapExample

导出接口 · 源码第 15 行。

Call only from a trusted extension bootstrap; repeat the authority registration on the server.

```ts
export function installNumberTapExample(): () => void;
```
