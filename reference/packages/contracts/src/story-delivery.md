# game/packages/contracts/src/story-delivery.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseJournalSecrets,visibleJournalSecrets,type JournalSecret} from './journal-secrets';
import {parseJournalPages,publicJournalPage,type JournalPage} from './story-journal';
import {storyObject,storyId,storyText,storyNumber,storyList,storyEnum} from './story';
```
</details>

## StoryHandout

导出接口 · 源码第 5 行。

```ts
export interface StoryHandout {
    secrets?: JournalSecret[];
    pages?: JournalPage[];
    id: string;
    title: string;
    body: string;
    authorId: string;
    at: number;
    recipients: string[] | null;
    readBy: {
        playerId: string;
        at: number;
    }[];
    closed: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `secrets` | 是 | `JournalSecret[]` | 见结构定义及所属功能文档 |
| `pages` | 是 | `JournalPage[]` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `title` | 否 | `string` | 见结构定义及所属功能文档 |
| `body` | 否 | `string` | 见结构定义及所属功能文档 |
| `authorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `at` | 否 | `number` | 见结构定义及所属功能文档 |
| `recipients` | 否 | `string[]&#124;null` | 见结构定义及所属功能文档 |
| `readBy` | 否 | `{playerId:string;at:number}[]` | 见结构定义及所属功能文档 |
| `readBy.[].playerId` | 否 | `string` | 见结构定义及所属功能文档 |
| `readBy.[].at` | 否 | `number` | 见结构定义及所属功能文档 |
| `closed` | 否 | `boolean` | 见结构定义及所属功能文档 |

## StoryRecap

导出接口 · 源码第 9 行。

```ts
export interface StoryRecap {
    id: string;
    authorId: string;
    at: number;
    sceneName: string;
    summary: string;
    nextSteps: string;
    visibility: 'gm' | 'public';
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `authorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `at` | 否 | `number` | 见结构定义及所属功能文档 |
| `sceneName` | 否 | `string` | 见结构定义及所属功能文档 |
| `summary` | 否 | `string` | 见结构定义及所属功能文档 |
| `nextSteps` | 否 | `string` | 见结构定义及所属功能文档 |
| `visibility` | 否 | `'gm'&#124;'public'` | 见结构定义及所属功能文档 |

## parseHandouts

导出接口 · 源码第 13 行。

```ts
export function parseHandouts(raw: unknown): StoryHandout[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseRecaps

导出接口 · 源码第 23 行。

```ts
export function parseRecaps(raw: unknown): StoryRecap[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
