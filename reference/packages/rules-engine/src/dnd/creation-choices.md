# game/packages/rules-engine/src/dnd/creation-choices.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {dndCreationEntries,DND_CATALOG,DND_SKILLS,dndEntry} from './index';
import {terraBuildChoices} from '../terra/creation';
import {dndClassRow} from './characters';
import type {DndGuidedInput} from './creation';
import type {DndEntry} from './catalog-types';
```
</details>

## DndBuildChoice

导出接口 · 源码第 7 行。

```ts
export type DndBuildChoice = {
    id: string;
    name: string;
    count: number;
    options: {
        id: string;
        name: string;
        entry?: DndEntry;
    }[];
    rule?: DndEntry;
    hint?: string;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `count` | 否 | `number` | 见结构定义及所属功能文档 |
| `options` | 否 | `{id:string;name:string;entry?:DndEntry}[]` | 见结构定义及所属功能文档 |
| `options.[].id` | 否 | `string` | 见结构定义及所属功能文档 |
| `options.[].name` | 否 | `string` | 见结构定义及所属功能文档 |
| `options.[].entry` | 是 | `DndEntry` | 见结构定义及所属功能文档 |
| `rule` | 是 | `DndEntry` | 见结构定义及所属功能文档 |
| `hint` | 是 | `string` | 见结构定义及所属功能文档 |

## dndChoiceValues

导出接口 · 源码第 8 行。

```ts
export const dndChoiceValues: (input: DndGuidedInput, key: string): string[];
```

## DND_INSTRUMENTS

导出接口 · 源码第 12 行。

```ts
export const DND_INSTRUMENTS = ['风笛', '鼓', '扬琴', '长笛', '鲁特琴', '里拉琴', '号角', '排箫', '芦笛', '提琴'];
```

## dndOriginFeats

导出接口 · 源码第 13 行。

```ts
export function dndOriginFeats(input: DndGuidedInput): { key: string; entry: DndEntry; }[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `input` | 否 | `DndGuidedInput` | — |

## dndBuildChoices

导出接口 · 源码第 17 行。

```ts
export function dndBuildChoices(input: DndGuidedInput): DndBuildChoice[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `input` | 否 | `DndGuidedInput` | — |

## validateDndBuildChoices

导出接口 · 源码第 57 行。

```ts
export function validateDndBuildChoices(input: DndGuidedInput): { groups: DndBuildChoice[]; selectedEntries: DndEntry[]; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `input` | 否 | `DndGuidedInput` | — |
