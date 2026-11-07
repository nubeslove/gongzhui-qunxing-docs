# game/packages/tabletop-runtime/src/story/compendiumFiles.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseCompendiumMediaChunk,type CompendiumMediaChunk} from '@aelzerant/contracts';
import {readCompendiumMediaBlob} from './compendiumMedia';
import {rebaseCompendiumBody} from '@aelzerant/contracts';
import {isLibraryCompendiumDocument,parseCompendiumDocument,COMPENDIUM_LIMITS,canonicalJson,captureCompendiumBody,parseCompendiumPack,parseCompendiumIndex,parseCompendiumBody,storyObject,type CompendiumBody,type CompendiumIndex,type CompendiumPack,type GameSystemId,type LibraryDocument} from '@aelzerant/contracts';
import type {CompendiumCall} from './compendiumHost';
import {compendiumObjectHash} from './compendiumObjects';
```
</details>

## CompendiumFile

导出接口 · 源码第 7 行。

```ts
export interface CompendiumFile {
    format: 'aaf-compendium';
    version: 1;
    pack: CompendiumPack;
    index: CompendiumIndex;
    bodies: Record<string, CompendiumBody>;
    media?: Record<string, CompendiumMediaChunk>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `format` | 否 | `'aaf-compendium'` | 见结构定义及所属功能文档 |
| `version` | 否 | `1` | 见结构定义及所属功能文档 |
| `pack` | 否 | `CompendiumPack` | 见结构定义及所属功能文档 |
| `index` | 否 | `CompendiumIndex` | 见结构定义及所属功能文档 |
| `bodies` | 否 | `Record<string,CompendiumBody>` | 见结构定义及所属功能文档 |
| `media` | 是 | `Record<string,CompendiumMediaChunk>` | 见结构定义及所属功能文档 |

## exportCompendiumFile

导出接口 · 源码第 8 行。

```ts
export function exportCompendiumFile(pack: CompendiumPack, call: CompendiumCall): Promise<CompendiumFile>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `pack` | 否 | `CompendiumPack` | — |
| `call` | 否 | `CompendiumCall` | — |

## parseCompendiumFile

导出接口 · 源码第 15 行。

```ts
export function parseCompendiumFile(raw: unknown, systemId: GameSystemId): Promise<CompendiumFile>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
| `systemId` | 否 | `GameSystemId` | — |

## importCompendiumFile

导出接口 · 源码第 23 行。

```ts
export function importCompendiumFile(file: CompendiumFile, call: CompendiumCall, progress: (message:string)=>void): Promise<CompendiumPack>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `file` | 否 | `CompendiumFile` | — |
| `call` | 否 | `CompendiumCall` | — |
| `progress` | 否 | `(message:string)=>void` | — |

## compendiumWorldCopy

导出接口 · 源码第 32 行。

```ts
export function compendiumWorldCopy(body: CompendiumBody, systemId: GameSystemId, worldId: string): LibraryDocument;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `body` | 否 | `CompendiumBody` | — |
| `systemId` | 否 | `GameSystemId` | — |
| `worldId` | 否 | `string` | — |
