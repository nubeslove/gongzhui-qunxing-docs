# game/tools/preparation.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../README.md)

<details><summary>类型依赖</summary>

```ts
import {emptyStory,parseManualTable,publicTable,type ManualTable,type GameSystemId} from '../packages/contracts/src/index';
import {newTable} from '../apps/desktop/src/tabletop/storage';
import {installTerraResources} from '../apps/desktop/src/terra/worldLibrary';
import {applyTableAction,type TableAction} from '../apps/desktop/src/tabletop/model';
import {createWorldBackup,readWorldBackup} from '../apps/desktop/src/tabletop/worldBackup';
```
</details>

## 重新导出的模块

```ts
export {createWorldBackup,readWorldBackup};
export type {CompendiumObjects} from '../apps/desktop/src/story/compendiumObjects';
```

## createDraft

导出接口 · 源码第 10 行。

```ts
export function createDraft(name: string, system?: GameSystemId, hostId?: string, variant?: ManualTable['ruleVariant']): ManualTable;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `name` | 否 | `string` | — |
| `system` | 是 | `GameSystemId` | 'dnd5e-2024' |
| `hostId` | 是 | `string` | 'preparation-gm' |
| `variant` | 是 | `ManualTable['ruleVariant']` | — |

## validateDraft

导出接口 · 源码第 13 行。

```ts
export function validateDraft(raw: unknown): ManualTable;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## applyDraft

导出接口 · 源码第 24 行。

A failed action never modifies the caller's draft.

```ts
export function applyDraft(raw: unknown, actions: readonly TableAction[]): ManualTable;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
| `actions` | 否 | `readonly TableAction[]` | — |

## previewForPlayer

导出接口 · 源码第 27 行。

```ts
export function previewForPlayer(raw: unknown, playerId: string): ManualTable;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
| `playerId` | 否 | `string` | — |
