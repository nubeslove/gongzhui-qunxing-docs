# game/packages/tabletop-runtime/src/tabletop/lancer/equipmentAccess.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ManualActor} from '@aelzerant/contracts';
import {checkLancerLoadout} from '@aelzerant/rules-engine';
import {LANCER_CATALOG,installLancerResource,type LancerCatalogEntry} from './catalog';
import {equipmentAvailability} from './content';
import {readLancer,setEquipment} from './model';
import {coreSystemId} from './coreResources';
```
</details>

## equipAvailableResource

导出接口 · 源码第 7 行。

```ts
export function equipAvailableResource(actor: ManualActor, entry: LancerCatalogEntry, mount?: number, replace?: boolean, brace?: number): ManualActor;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |
| `entry` | 否 | `LancerCatalogEntry` | — |
| `mount` | 是 | `number` | 0 |
| `replace` | 是 | `boolean` | false |
| `brace` | 是 | `number` | -1 |

## equippedScopeIssues

导出接口 · 源码第 19 行。

```ts
export function equippedScopeIssues(actor: ManualActor): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |
