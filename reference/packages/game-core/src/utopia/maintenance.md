# game/packages/game-core/src/utopia/maintenance.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {emptyStory,emptyAdventure,parseUtopiaCharacter,type UtopiaIntent} from '@aelzerant/contracts';
import {utopiaStats,utopiaFreshResources,utopiaChargeLimit,validateUtopiaBuild,utopiaEquipmentSp,utopiaEntry} from '@aelzerant/rules-engine';
import {control,requireGm,isGm,intact,message,type UtopiaContext} from './state';
```
</details>

## Rest

内部依赖类型 · 源码第 4 行。

```ts
type Rest = Extract<UtopiaIntent, {
    type: 'rest';
}>;
```

## rest

导出接口 · 源码第 5 行。

```ts
export function rest(x: UtopiaContext, i: Rest): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |
| `i` | 否 | `Rest` | — |

## saveBuild

导出接口 · 源码第 32 行。

```ts
export function saveBuild(x: UtopiaContext, i: Extract<UtopiaIntent,{type:'build'}>): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `x` | 否 | `UtopiaContext` | — |
| `i` | 否 | `Extract<UtopiaIntent,{type:'build'}>` | — |
