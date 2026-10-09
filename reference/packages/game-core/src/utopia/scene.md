# game/packages/game-core/src/utopia/scene.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {lancerObject,lancerObjectToken,lancerEffectiveBlock,regionAffectsFootprint,type UtopiaPoint} from '@aelzerant/contracts';
import {utopiaDamageRoll,utopiaStats} from '@aelzerant/rules-engine';
import {planLancerSceneEvent} from '../lancer/scene-events';
import {lancerBlockDistance,lancerLineOfSight,lancerFloor} from '../lancer/geometry';
import {unit,battle,control,spend,message,intact,environmentBattle,type UtopiaContext} from './state';
import {utopiaSave} from './actions';
```
</details>

## interact

导出接口 · 源码第 7 行。

```ts
export function interact(x: UtopiaContext, token: string, object: string, action: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |
| `token` | 否 | `string` | — |
| `object` | 否 | `string` | — |
| `action` | 否 | `string` | — |

## commitScene

导出接口 · 源码第 19 行。

```ts
export function commitScene(x: UtopiaContext, object: string, action: string, token: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |
| `object` | 否 | `string` | — |
| `action` | 否 | `string` | — |
| `token` | 否 | `string` | — |
