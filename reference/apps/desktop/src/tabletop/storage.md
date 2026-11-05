# game/apps/desktop/src/tabletop/storage.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {installTerraResources} from '../terra/worldLibrary';
import {worldMatchesSection} from '../platform/worldIdentity';
import {NEW_UTOPIA_VARIANT,sceneCanvasStyle} from '@aelzerant/contracts';
import {saveWorldAssetCatalog,saveWorldAssetFile} from '../story/worldAssetStorage';
import { GAME_SYSTEMS,emptyStory,newWorldAssetPack, parseManualTable, type GameSystemId, type ManualTable } from '@aelzerant/contracts';
import {product,isTerra,isNewUtopia,assertProductTable} from '../product';
import {withLocalStorageLock} from './localStorageLock';
import {hashReferences} from './resourceReferences';
```
</details>

## 重新导出的模块

```ts
export {hashBlob} from './blobHash';
```

## readLocal

导出接口 · 源码第 10 行。

```ts
export function readLocal<T>(store: string, key: string): Promise<T | undefined>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `store` | 否 | `string` | — |
| `key` | 否 | `string` | — |

## writeLocal

导出接口 · 源码第 11 行。

```ts
export function writeLocal(store: string, key: string, value: unknown): Promise<void>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `store` | 否 | `string` | — |
| `key` | 否 | `string` | — |
| `value` | 否 | `unknown` | — |

## updateLocalRecord

导出接口 · 源码第 13 行。

Read-modify-write shares one IndexedDB transaction, including across windows.

```ts
export function updateLocalRecord<T>(store: string, key: string, change: (current:T|undefined)=>T): Promise<void>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `store` | 否 | `string` | — |
| `key` | 否 | `string` | — |
| `change` | 否 | `(current:T&#124;undefined)=>T` | — |

## deleteLocalWorld

导出接口 · 源码第 15 行。

```ts
export function deleteLocalWorld(owner: string, id: string, serverWorldId?: string): Promise<void>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `owner` | 否 | `string` | — |
| `id` | 否 | `string` | — |
| `serverWorldId` | 是 | `string` | — |

## localRecords

导出接口 · 源码第 16 行。

```ts
export function localRecords<T>(store: string, prefix: string): Promise<Array<{key:string;value:T}>>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `store` | 否 | `string` | — |
| `prefix` | 否 | `string` | — |

## removeLocalRecord

导出接口 · 源码第 17 行。

```ts
export function removeLocalRecord(store: string, key: string): Promise<void>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `store` | 否 | `string` | — |
| `key` | 否 | `string` | — |

## localWorlds

导出接口 · 源码第 18 行。

```ts
export function localWorlds(playerId: string, systemId: GameSystemId): Promise<ManualTable[]>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `playerId` | 否 | `string` | — |
| `systemId` | 否 | `GameSystemId` | — |

## saveTable

导出接口 · 源码第 19 行。

```ts
export const saveTable: (table: ManualTable): Promise<void>;
```

## loadTable

导出接口 · 源码第 20 行。

```ts
export const loadTable: (hostId: string, id: string): Promise<ManualTable | null>;
```

## newTable

导出接口 · 源码第 21 行。

```ts
export function newTable(name: string, hostId: string, systemId: GameSystemId): ManualTable;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `name` | 否 | `string` | — |
| `hostId` | 否 | `string` | — |
| `systemId` | 否 | `GameSystemId` | — |
