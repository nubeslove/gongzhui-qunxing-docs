# game/packages/game-core/src/utopia/flight.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {committedTokenMotion,emptySceneFeatures} from '@aelzerant/contracts';
import {utopiaHas,utopiaRoll} from '@aelzerant/rules-engine';
import {lancerFloor} from '../lancer/geometry';
import {unit,battle,message,type UtopiaContext} from './state';
```
</details>

## checkFlightStructure

导出接口 · 源码第 6 行。

```ts
export function checkFlightStructure(x: UtopiaContext, id: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |
| `id` | 否 | `string` | — |

## settleFlight

导出接口 · 源码第 14 行。

Falls happen at the end of the current action; their damage uses the ordinary queue.

```ts
export function settleFlight(x: UtopiaContext, ending?: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |
| `ending` | 是 | `string` | — |
