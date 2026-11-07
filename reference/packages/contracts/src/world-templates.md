# game/packages/contracts/src/world-templates.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {GameSystemId} from './systems';
```
</details>

## WorldTemplateInfo

导出接口 · 源码第 4 行。

Catalogue descriptions contain no GM plot; archives are served after login.

```ts
export interface WorldTemplateInfo {
    id: string;
    name: string;
    systemId: GameSystemId;
    ruleVariant: string;
    description: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `systemId` | 否 | `GameSystemId` | 见结构定义及所属功能文档 |
| `ruleVariant` | 否 | `string` | 见结构定义及所属功能文档 |
| `description` | 否 | `string` | 见结构定义及所属功能文档 |

## WorldTemplate

导出接口 · 源码第 11 行。

```ts
export interface WorldTemplate extends WorldTemplateInfo {
    available: boolean;
    version?: string;
    size?: number;
    sha256?: string;
    contents?: {
        chapters: number;
        scenes: number;
        beats: number;
        players: number;
        compendiums: number;
    };
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `available` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `version` | 是 | `string` | 见结构定义及所属功能文档 |
| `size` | 是 | `number` | 见结构定义及所属功能文档 |
| `sha256` | 是 | `string` | 见结构定义及所属功能文档 |
| `contents` | 是 | `{chapters:number;scenes:number;beats:number;players:number;compendiums:number}` | 见结构定义及所属功能文档 |
| `contents.chapters` | 否 | `number` | 见结构定义及所属功能文档 |
| `contents.scenes` | 否 | `number` | 见结构定义及所属功能文档 |
| `contents.beats` | 否 | `number` | 见结构定义及所属功能文档 |
| `contents.players` | 否 | `number` | 见结构定义及所属功能文档 |
| `contents.compendiums` | 否 | `number` | 见结构定义及所属功能文档 |

## TERRA_WORLD_TEMPLATES

导出接口 · 源码第 18 行。

```ts
export const TERRA_WORLD_TEMPLATES: readonly WorldTemplateInfo[];
```
