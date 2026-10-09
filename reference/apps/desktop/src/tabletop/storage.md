# game/apps/desktop/src/tabletop/storage.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {installTerraResources} from '../terra/worldLibrary';
import {worldMatchesSection} from '../platform/worldIdentity';
import {NEW_UTOPIA_VARIANT,sceneCanvasStyle} from '@aelzerant/contracts';
import {saveWorldAssetCatalog,saveWorldAssetFile} from '../story/worldAssetStorage';
import { GAME_SYSTEMS,emptyStory,newWorldAssetPack, parseManualTable, type GameSystemId, type ManualTable } from '@aelzerant/contracts';
import {product,isTerra,isNewUtopia,assertProductTable} from '../product';
```
</details>

## readLocal

导出接口 · 源码第 8 行。

```ts
export function readLocal<T>(store: string, key: string): Promise<T | undefined>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `store` | 否 | `string` | — |
| `key` | 否 | `string` | — |

## writeLocal

导出接口 · 源码第 9 行。

```ts
export function writeLocal(store: string, key: string, value: unknown): Promise<void>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `store` | 否 | `string` | — |
| `key` | 否 | `string` | — |
| `value` | 否 | `unknown` | — |

## localWorlds

导出接口 · 源码第 10 行。

```ts
export function localWorlds(playerId: string, systemId: GameSystemId): Promise<ManualTable[]>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `playerId` | 否 | `string` | — |
| `systemId` | 否 | `GameSystemId` | — |

## saveTable

导出接口 · 源码第 11 行。

```ts
export const saveTable: (table: ManualTable): Promise<void>;
```

## loadTable

导出接口 · 源码第 12 行。

```ts
export const loadTable: (hostId: string, id: string): Promise<ManualTable | null>;
```

## newTable

导出接口 · 源码第 13 行。

```ts
export function newTable(name: string, hostId: string, systemId: GameSystemId): ManualTable;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `name` | 否 | `string` | — |
| `hostId` | 否 | `string` | — |
| `systemId` | 否 | `GameSystemId` | — |

## hashBlob

导出接口 · 源码第 14 行。

```ts
export function hashBlob(blob: Blob): Promise<string>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `blob` | 否 | `Blob` | — |
