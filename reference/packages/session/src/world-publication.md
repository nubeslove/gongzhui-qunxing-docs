# game/packages/session/src/world-publication.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {canonicalJson,emptyStory,mergePublicationFields,type PublicationChoices,type PublicationConflict} from '@aelzerant/contracts';
import {restoreWorld} from './world-persistence';
import type {WorldDocument} from './world-types';
```
</details>

## mergeNativePublication

导出接口 · 源码第 19 行。

Native documents retain their own schema. Local rehearsal never replaces live RNG or decisions.

```ts
export function mergeNativePublication(base: WorldDocument, draft: WorldDocument, live: WorldDocument, choices?: PublicationChoices): { conflicts: PublicationConflict[]; world: WorldDocument; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `base` | 否 | `WorldDocument` | — |
| `draft` | 否 | `WorldDocument` | — |
| `live` | 否 | `WorldDocument` | — |
| `choices` | 是 | `PublicationChoices` | {} |

## nativePublicationValue

导出接口 · 源码第 52 行。

Conflict detail reads only the requested normalized field; never ship the complete live save.

```ts
export function nativePublicationValue(world: WorldDocument, path: string): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `path` | 否 | `string` | — |

## nativePublicationDescriptor

导出接口 · 源码第 63 行。

```ts
export const nativePublicationDescriptor: (draft: { id: string; name: string; }, systemVersion: string): { schemaVersion: number; worldId: string; name: string; systemId: string; systemVersion: string; };
```
