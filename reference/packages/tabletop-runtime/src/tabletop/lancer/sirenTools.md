# game/packages/tabletop-runtime/src/tabletop/lancer/sirenTools.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {hexFootprint,hexDistance,regionContains,storyGm,type ManualTable,type SceneRegion} from '@aelzerant/contracts';
import {lancerPosition,lancerFloor} from '@aelzerant/game-core';
import {sirenCombatMap} from '../../../../../content/lancer-official/siren-maps';
import {log} from '../../../../game-core/src/lancer/state';
import {syncCombatCards} from './combatAdapter';
import {applyTableEncounter} from '../encounterManager';
```
</details>

## SirenCommand

导出接口 · 源码第 8 行。

```ts
export type SirenCommand = {
    action: 'lift' | 'collapse' | 'magma-prepare';
    round?: number;
    turn?: number;
    bossFell?: boolean;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `action` | 否 | `'lift'&#124;'collapse'&#124;'magma-prepare'` | 见结构定义及所属功能文档 |
| `round` | 是 | `number` | 见结构定义及所属功能文档 |
| `turn` | 是 | `number` | 见结构定义及所属功能文档 |
| `bossFell` | 是 | `boolean` | 见结构定义及所属功能文档 |

## prepareSirenMagma

导出接口 · 源码第 13 行。

```ts
export function prepareSirenMagma(t: ManualTable): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |

## applySirenCommand

导出接口 · 源码第 26 行。

```ts
export function applySirenCommand(t: ManualTable, sender: string, c: SirenCommand): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `t` | 否 | `ManualTable` | — |
| `sender` | 否 | `string` | — |
| `c` | 否 | `SirenCommand` | — |
