# game/packages/session/src/minigame-modules.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {MinigameModule} from '@aelzerant/contracts';
import {qteModule} from './qte-runtime';
```
</details>

## registerMinigameModule

导出接口 · 源码第 4 行。

```ts
export function registerMinigameModule(module: MinigameModule): ()=>void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `module` | 否 | `MinigameModule` | — |

## minigameModule

导出接口 · 源码第 8 行。

```ts
export function minigameModule(id: string): MinigameModule;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | — |
