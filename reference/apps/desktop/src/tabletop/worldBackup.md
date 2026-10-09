# game/apps/desktop/src/tabletop/worldBackup.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {rebindWorldHost} from './rebindWorldHost';
import type {CompendiumObjects} from '../story/compendiumObjects';
import {attachCompendiumObjects,restoreCompendiumObjects} from '../story/compendiumBackup';
import { validateLocalPdf, inspectGlb, parseManualTable, type GameSystemId, type ManualTable } from '@aelzerant/contracts';
import { hashBlob } from './storage';
```
</details>

## createWorldBackup

导出接口 · 源码第 7 行。

```ts
export function createWorldBackup(table: ManualTable, read: (path:string)=>Promise<Blob>, objects?: CompendiumObjects): Promise<Blob>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `read` | 否 | `(path:string)=>Promise<Blob>` | — |
| `objects` | 是 | `CompendiumObjects` | — |

## readWorldBackup

导出接口 · 源码第 14 行。

Validate every byte before the caller writes any cache/world records. Never reuse a server binding.

```ts
export function readWorldBackup(blob: Blob, hostId: string, systemId: GameSystemId, objects?: CompendiumObjects): Promise<{ table: ManualTable; files: { hash: string; blob: Blob; }[]; }>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `blob` | 否 | `Blob` | — |
| `hostId` | 否 | `string` | — |
| `systemId` | 否 | `GameSystemId` | — |
| `objects` | 是 | `CompendiumObjects` | — |
