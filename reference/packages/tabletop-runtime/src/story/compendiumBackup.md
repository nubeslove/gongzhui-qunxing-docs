# game/packages/tabletop-runtime/src/story/compendiumBackup.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {readCompendiumMediaBlob} from './compendiumMedia';
import {COMPENDIUM_LIMITS,canonicalJson,parseCompendiumBody,parseCompendiumCatalog,parseCompendiumIndex,storyObject,type CompendiumPack,type StoryWorkspace} from '@aelzerant/contracts';
import {compendiumObjectHash,readCompendiumObject,type CompendiumObjects} from './compendiumObjects';
```
</details>

## CompendiumBackupObjects

导出接口 · 源码第 4 行。

```ts
export type CompendiumBackupObjects = Record<string, unknown>;
```

## collectCompendiumObjects

导出接口 · 源码第 6 行。

The same closure is used by file export, server backup, and restoration.

```ts
export function collectCompendiumObjects(packs: readonly CompendiumPack[], store: CompendiumObjects): Promise<CompendiumBackupObjects>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `packs` | 否 | `readonly CompendiumPack[]` | — |
| `store` | 否 | `CompendiumObjects` | — |

## attachCompendiumObjects

导出接口 · 源码第 12 行。

```ts
export function attachCompendiumObjects<T extends {story?:StoryWorkspace}>(world: T, store: CompendiumObjects): Promise<T & {compendiumObjects?:CompendiumBackupObjects}>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `T` | — |
| `store` | 否 | `CompendiumObjects` | — |

## restoreCompendiumObjects

导出接口 · 源码第 13 行。

```ts
export function restoreCompendiumObjects(raw: unknown, store: CompendiumObjects): Promise<void>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
| `store` | 否 | `CompendiumObjects` | — |
