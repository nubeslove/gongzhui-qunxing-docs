# game/packages/contracts/src/content-drafts.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parsePluginManifest,isBuiltinPluginId,type PluginManifest} from './theatre';
import {parseCompendiumBody,type CompendiumBody,COMPENDIUM_LIMITS} from './compendium';
import {isGameSystemId,type GameSystemId} from './systems';
```
</details>

## ContentDraftPayload

导出接口 · 源码第 5 行。

```ts
export type ContentDraftPayload = {
    kind: 'plugin';
    manifest: PluginManifest;
} | {
    kind: 'compendium-entry';
    entry: CompendiumBody;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.kind` | 否 | `'plugin'` | 见结构定义及所属功能文档 |
| `分支1.manifest` | 否 | `PluginManifest` | 见结构定义及所属功能文档 |
| `分支2.kind` | 否 | `'compendium-entry'` | 见结构定义及所属功能文档 |
| `分支2.entry` | 否 | `CompendiumBody` | 见结构定义及所属功能文档 |

## ContentDraftBody

导出接口 · 源码第 6 行。

```ts
export interface ContentDraftBody {
    name: string;
    description: string;
    systemId: GameSystemId;
    payload: ContentDraftPayload;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `description` | 否 | `string` | 见结构定义及所属功能文档 |
| `systemId` | 否 | `GameSystemId` | 见结构定义及所属功能文档 |
| `payload` | 否 | `ContentDraftPayload` | 见结构定义及所属功能文档 |

## ContentDraftSummary

导出接口 · 源码第 7 行。

```ts
export interface ContentDraftSummary {
    id: string;
    name: string;
    description: string;
    systemId: GameSystemId;
    kind: ContentDraftPayload['kind'];
    revision: number;
    authorId: string;
    updatedAt: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `description` | 否 | `string` | 见结构定义及所属功能文档 |
| `systemId` | 否 | `GameSystemId` | 见结构定义及所属功能文档 |
| `kind` | 否 | `ContentDraftPayload['kind']` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `authorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `updatedAt` | 否 | `number` | 见结构定义及所属功能文档 |

## ContentDraftVersion

导出接口 · 源码第 8 行。

```ts
export interface ContentDraftVersion extends ContentDraftSummary {
    payload: ContentDraftPayload;
    reason: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `payload` | 否 | `ContentDraftPayload` | 见结构定义及所属功能文档 |
| `reason` | 否 | `string` | 见结构定义及所属功能文档 |

## ContentDraftReceipt

导出接口 · 源码第 9 行。

```ts
export interface ContentDraftReceipt {
    requestId: string;
    contentId: string;
    revision: number;
    hash: string;
    replayed: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `requestId` | 否 | `string` | 见结构定义及所属功能文档 |
| `contentId` | 否 | `string` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `hash` | 否 | `string` | 见结构定义及所属功能文档 |
| `replayed` | 否 | `boolean` | 见结构定义及所属功能文档 |

## ContentDraftPage

导出接口 · 源码第 10 行。

```ts
export interface ContentDraftPage {
    total: number;
    items: ContentDraftSummary[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `total` | 否 | `number` | 见结构定义及所属功能文档 |
| `items` | 否 | `ContentDraftSummary[]` | 见结构定义及所属功能文档 |

## contentDraftId

导出接口 · 源码第 21 行。

```ts
export function contentDraftId(raw: unknown): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseContentDraft

导出接口 · 源码第 26 行。

Draft validation does not publish assets, install content or execute a plugin.

```ts
export function parseContentDraft(raw: unknown): ContentDraftBody;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
