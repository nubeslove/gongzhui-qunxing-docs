# game/packages/contracts/src/scene-note.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {safeMedia} from './world-library';
import {sceneCellLit,sceneRayBlocked,type SceneFeatures,type ScenePoint} from './scene-features';
import {storyObject as obj,storyList as list,storyId as id,storyText as text,storyNumber as num,storyEnum as one,type StoryEntry} from './story';
import {parseJournalReference,type JournalReference} from './journal-reference';
import {journalEntryAccess,journalPageAccess} from './journal-access';
```
</details>

## SceneNote

导出接口 · 源码第 8 行。

```ts
export interface SceneNote {
    id: string;
    x: number;
    y: number;
    z: number;
    label: string;
    reference?: JournalReference;
    icon: keyof typeof NOTE_ICONS;
    iconSrc?: string;
    iconTint?: string;
    size: number;
    color: string;
    textColor: string;
    fontSize: number;
    fontFamily: 'sans-serif' | 'serif' | 'monospace';
    anchor: keyof typeof NOTE_ANCHORS;
    global: boolean;
    hidden: boolean;
    locked: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `x` | 否 | `number` | 见结构定义及所属功能文档 |
| `y` | 否 | `number` | 见结构定义及所属功能文档 |
| `z` | 否 | `number` | 见结构定义及所属功能文档 |
| `label` | 否 | `string` | 见结构定义及所属功能文档 |
| `reference` | 是 | `JournalReference` | 见结构定义及所属功能文档 |
| `icon` | 否 | `keyof typeof NOTE_ICONS` | 见结构定义及所属功能文档 |
| `iconSrc` | 是 | `string` | 见结构定义及所属功能文档 |
| `iconTint` | 是 | `string` | 见结构定义及所属功能文档 |
| `size` | 否 | `number` | 见结构定义及所属功能文档 |
| `color` | 否 | `string` | 见结构定义及所属功能文档 |
| `textColor` | 否 | `string` | 见结构定义及所属功能文档 |
| `fontSize` | 否 | `number` | 见结构定义及所属功能文档 |
| `fontFamily` | 否 | `'sans-serif'&#124;'serif'&#124;'monospace'` | 见结构定义及所属功能文档 |
| `anchor` | 否 | `keyof typeof NOTE_ANCHORS` | 见结构定义及所属功能文档 |
| `global` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `hidden` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `locked` | 否 | `boolean` | 见结构定义及所属功能文档 |

## parseSceneNotes

导出接口 · 源码第 9 行。

```ts
export function parseSceneNotes(raw: unknown, width: number, height: number): SceneNote[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
| `width` | 否 | `number` | — |
| `height` | 否 | `number` | — |

## publicSceneNotes

导出接口 · 源码第 11 行。

Unknown references fail closed; limited access shows the marker but never a secret heading.

```ts
export function publicSceneNotes(notes: readonly SceneNote[], entries: readonly StoryEntry[], playerId?: string, visible?: ReadonlySet<string>): SceneNote[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `notes` | 否 | `readonly SceneNote[]` | — |
| `entries` | 否 | `readonly StoryEntry[]` | — |
| `playerId` | 是 | `string` | — |
| `visible` | 是 | `ReadonlySet<string>` | — |

## newSceneNote

导出接口 · 源码第 19 行。

```ts
export function newSceneNote(id: string, x?: number, y?: number, z?: number): SceneNote;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | — |
| `x` | 是 | `number` | 1 |
| `y` | 是 | `number` | 1 |
| `z` | 是 | `number` | 0 |

## noteInSight

导出接口 · 源码第 22 行。

```ts
export function noteInSight(features: SceneFeatures|undefined, n: ScenePoint, observers: readonly ScenePoint[]): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures&#124;undefined` | — |
| `n` | 否 | `ScenePoint` | — |
| `observers` | 否 | `readonly ScenePoint[]` | — |

## publicNoteIcon

导出接口 · 源码第 27 行。

```ts
export function publicNoteIcon(n: SceneNote, assets: readonly {path:string;public?:boolean}[]): SceneNote;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `n` | 否 | `SceneNote` | — |
| `assets` | 否 | `readonly {path:string;public?:boolean}[]` | — |
