# game/packages/contracts/src/world-library.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseCardDefinition,concealCardFace,type CardType,type CardDimensions} from './card-definition';
import {builtinCardImage} from './card-presets';
import type {CardStackImportCommand} from './card-stack-file';
import {parseCardStack,validateCardStacks,stackCardAccess,type CardStackState,type CardStackCommand} from './card-stacks';
import type {CardDealCommand,CardReturnCommand} from './card-actions';
import {LIBRARY_DIRECTORY_NAMES} from './document-directory';
import {parseLibraryDirectories,projectLibraryDirectories,type LibraryDirectories,type LibraryDirectoryCommand} from './library-directory';
import {parseTableDocument,type TableDocumentReference} from './table-document';
import {parseMacroBars,type MacroBar,type MacroArgs} from './world-macro';
import {AUDIO_CATEGORIES,parseSceneAudio,type SceneAudioBinding,type AudioCategory} from './scene-audio';
import {storyObject as obj,storyId as id,storyText as text,storyNumber as num,storyList as list,storyEnum as one} from './story';
```
</details>

## LibraryKind

导出接口 · 源码第 13 行。

```ts
export type LibraryKind = keyof typeof LIBRARY_KINDS;
```

## AccessLevel

导出接口 · 源码第 15 行。

```ts
export type AccessLevel = 'none' | 'limited' | 'observer' | 'owner';
```

## DocumentAccess

导出接口 · 源码第 16 行。

```ts
export interface DocumentAccess {
    default: AccessLevel;
    users: Record<string, AccessLevel>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `default` | 否 | `AccessLevel` | 见结构定义及所属功能文档 |
| `users` | 否 | `Record<string,AccessLevel>` | 见结构定义及所属功能文档 |

## LibraryBase

导出接口 · 源码第 17 行。

```ts
export interface LibraryBase {
    id: string;
    name: string;
    description: string;
    folder: string;
    revision: number;
    access: DocumentAccess;
    projected?: boolean;
    sourceOnly?: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `description` | 否 | `string` | 见结构定义及所属功能文档 |
| `folder` | 否 | `string` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `access` | 否 | `DocumentAccess` | 见结构定义及所属功能文档 |
| `projected` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `sourceOnly` | 是 | `boolean` | 见结构定义及所属功能文档 |

## TableRow

导出接口 · 源码第 18 行。

```ts
export interface TableRow {
    id: string;
    text: string;
    image: string;
    weight: number;
    range: [
        number,
        number
    ];
    kind: 'text' | 'entry' | 'table' | 'document';
    document?: TableDocumentReference | null;
    reference: string;
    drawn: boolean;
    disabled: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `text` | 否 | `string` | 见结构定义及所属功能文档 |
| `image` | 否 | `string` | 见结构定义及所属功能文档 |
| `weight` | 否 | `number` | 见结构定义及所属功能文档 |
| `range` | 否 | `[number,number]` | 见结构定义及所属功能文档 |
| `kind` | 否 | `'text'&#124;'entry'&#124;'table'&#124;'document'` | 见结构定义及所属功能文档 |
| `document` | 是 | `TableDocumentReference&#124;null` | 见结构定义及所属功能文档 |
| `reference` | 否 | `string` | 见结构定义及所属功能文档 |
| `drawn` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `disabled` | 否 | `boolean` | 见结构定义及所属功能文档 |

## RollTable

导出接口 · 源码第 19 行。

```ts
export interface RollTable extends LibraryBase {
    kind: 'table';
    formula: string;
    replacement: boolean;
    displayRoll: boolean;
    rows: TableRow[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `'table'` | 见结构定义及所属功能文档 |
| `formula` | 否 | `string` | 见结构定义及所属功能文档 |
| `replacement` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `displayRoll` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `rows` | 否 | `TableRow[]` | 见结构定义及所属功能文档 |

## CardFace

导出接口 · 源码第 20 行。

```ts
export interface CardFace {
    name: string;
    image: string;
    text: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `image` | 否 | `string` | 见结构定义及所属功能文档 |
| `text` | 否 | `string` | 见结构定义及所属功能文档 |

## WorldCard

导出接口 · 源码第 21 行。

```ts
export interface WorldCard {
    type?: CardType;
    dimensions?: CardDimensions;
    useDeckBack?: boolean;
    stackId?: string;
    id: string;
    name: string;
    suit: string;
    value: number;
    description: string;
    faces: CardFace[];
    back: CardFace;
    face: number;
    faceUp: boolean;
    area: 'deck' | 'hand' | 'table' | 'discard';
    holderId: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `type` | 是 | `CardType` | 见结构定义及所属功能文档 |
| `dimensions` | 是 | `CardDimensions` | 见结构定义及所属功能文档 |
| `useDeckBack` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `stackId` | 是 | `string` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `suit` | 否 | `string` | 见结构定义及所属功能文档 |
| `value` | 否 | `number` | 见结构定义及所属功能文档 |
| `description` | 否 | `string` | 见结构定义及所属功能文档 |
| `faces` | 否 | `CardFace[]` | 见结构定义及所属功能文档 |
| `back` | 否 | `CardFace` | 见结构定义及所属功能文档 |
| `face` | 否 | `number` | 见结构定义及所属功能文档 |
| `faceUp` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `area` | 否 | `'deck'&#124;'hand'&#124;'table'&#124;'discard'` | 见结构定义及所属功能文档 |
| `holderId` | 否 | `string` | 见结构定义及所属功能文档 |

## CardDeck

导出接口 · 源码第 22 行。

```ts
export interface CardDeck extends LibraryBase {
    defaultBack?: CardFace;
    stack?: CardStackState;
    kind: 'cards';
    cards: WorldCard[];
    order: string[];
    remaining?: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `defaultBack` | 是 | `CardFace` | 见结构定义及所属功能文档 |
| `stack` | 是 | `CardStackState` | 见结构定义及所属功能文档 |
| `kind` | 否 | `'cards'` | 见结构定义及所属功能文档 |
| `cards` | 否 | `WorldCard[]` | 见结构定义及所属功能文档 |
| `order` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `remaining` | 是 | `number` | 见结构定义及所属功能文档 |

## AudioTrack

导出接口 · 源码第 23 行。

```ts
export interface AudioTrack {
    category?: AudioCategory;
    preload?: boolean;
    id: string;
    name: string;
    src: string;
    volume: number;
    loop: boolean;
    fade: number;
    playing: boolean;
    paused?: boolean;
    offset: number;
    startedAt: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `category` | 是 | `AudioCategory` | 见结构定义及所属功能文档 |
| `preload` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `src` | 否 | `string` | 见结构定义及所属功能文档 |
| `volume` | 否 | `number` | 见结构定义及所属功能文档 |
| `loop` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `fade` | 否 | `number` | 见结构定义及所属功能文档 |
| `playing` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `paused` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `offset` | 否 | `number` | 见结构定义及所属功能文档 |
| `startedAt` | 否 | `number` | 见结构定义及所属功能文档 |

## WorldPlaylist

导出接口 · 源码第 24 行。

```ts
export interface WorldPlaylist extends LibraryBase {
    kind: 'playlist';
    mode: 'sequential' | 'shuffle' | 'simultaneous' | 'soundboard';
    tracks: AudioTrack[];
    repeat: boolean;
    played?: string[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `'playlist'` | 见结构定义及所属功能文档 |
| `mode` | 否 | `'sequential'&#124;'shuffle'&#124;'simultaneous'&#124;'soundboard'` | 见结构定义及所属功能文档 |
| `tracks` | 否 | `AudioTrack[]` | 见结构定义及所属功能文档 |
| `repeat` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `played` | 是 | `string[]` | 见结构定义及所属功能文档 |

## WorldMacro

导出接口 · 源码第 25 行。

```ts
export interface WorldMacro extends LibraryBase {
    kind: 'macro';
    type: 'chat' | 'roll' | 'script';
    body: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `'macro'` | 见结构定义及所属功能文档 |
| `type` | 否 | `'chat'&#124;'roll'&#124;'script'` | 见结构定义及所属功能文档 |
| `body` | 否 | `string` | 见结构定义及所属功能文档 |

## LibraryDocument

导出接口 · 源码第 26 行。

```ts
export type LibraryDocument = RollTable | CardDeck | WorldPlaylist | WorldMacro;
```

## WorldLibrary

导出接口 · 源码第 27 行。

```ts
export interface WorldLibrary {
    projected?: boolean;
    directories?: LibraryDirectories;
    version: 1;
    documents: LibraryDocument[];
    sceneAudio?: Record<string, SceneAudioBinding>;
    macroBars?: Record<string, MacroBar>;
    scriptUsers?: string[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `projected` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `directories` | 是 | `LibraryDirectories` | 见结构定义及所属功能文档 |
| `version` | 否 | `1` | 见结构定义及所属功能文档 |
| `documents` | 否 | `LibraryDocument[]` | 见结构定义及所属功能文档 |
| `sceneAudio` | 是 | `Record<string,SceneAudioBinding>` | 见结构定义及所属功能文档 |
| `macroBars` | 是 | `Record<string,MacroBar>` | 见结构定义及所属功能文档 |
| `scriptUsers` | 是 | `string[]` | 见结构定义及所属功能文档 |

## emptyWorldLibrary

导出接口 · 源码第 28 行。

```ts
export const emptyWorldLibrary: (): WorldLibrary;
```

## safeMedia

导出接口 · 源码第 31 行。

```ts
export function safeMedia(v: unknown): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v` | 否 | `unknown` | — |

## parseLibraryDocument

导出接口 · 源码第 34 行。

```ts
export function parseLibraryDocument(raw: unknown): LibraryDocument;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseWorldLibrary

导出接口 · 源码第 56 行。

```ts
export function parseWorldLibrary(raw: unknown): WorldLibrary;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## documentAccess

导出接口 · 源码第 62 行。

```ts
export function documentAccess(doc: LibraryBase, playerId: string|undefined, gm?: boolean): AccessLevel;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `doc` | 否 | `LibraryBase` | — |
| `playerId` | 否 | `string&#124;undefined` | — |
| `gm` | 是 | `boolean` | false |

## projectWorldLibrary

导出接口 · 源码第 63 行。

```ts
export function projectWorldLibrary(library: WorldLibrary, playerId: string|undefined, gm: boolean, visibleDocument?: (ref:TableDocumentReference)=>boolean): WorldLibrary;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `library` | 否 | `WorldLibrary` | — |
| `playerId` | 否 | `string&#124;undefined` | — |
| `gm` | 否 | `boolean` | — |
| `visibleDocument` | 是 | `(ref:TableDocumentReference)=>boolean` | ()=>false |

## newLibraryDocument

导出接口 · 源码第 75 行。

```ts
export function newLibraryDocument(kind: LibraryKind, id: string): LibraryDocument;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `kind` | 否 | `LibraryKind` | — |
| `id` | 否 | `string` | — |

## LibraryCommand

导出接口 · 源码第 82 行。

```ts
export type LibraryCommand = CardStackImportCommand | CardStackCommand | CardDealCommand | CardReturnCommand | LibraryDirectoryCommand | {
    type: 'macro.bar';
    bar: MacroBar;
    expectedRevision: number;
} | {
    type: 'library.sceneAudio';
    sceneId: string;
    binding: SceneAudioBinding | null;
    expected: SceneAudioBinding | null;
} | {
    type: 'library.scriptUsers';
    users: string[];
} | {
    type: 'library.save';
    document: LibraryDocument;
    expectedRevision: number;
    folderId?: string | null;
    expectedDirectoryRevision?: number;
    macroSlot?: {
        slot: number;
        expectedRevision: number;
    };
} | {
    type: 'library.delete';
    id: string;
    expectedRevision: number;
} | {
    type: 'table.draw';
    id: string;
    count: number;
    mode?: 'public' | 'gm' | 'blind' | 'self';
    rowId?: string;
} | {
    type: 'table.reset' | 'table.normalize';
    id: string;
} | {
    type: 'cards.draw';
    id: string;
    count: number;
    recipient: string;
    method: 'top' | 'bottom' | 'random';
    expectedRevision?: number;
} | {
    type: 'cards.move';
    id: string;
    cardIds: string[];
    area: 'hand' | 'table' | 'discard';
    recipient?: string;
    faceUp: boolean;
    expectedRevision?: number;
} | {
    type: 'cards.flip';
    id: string;
    cardId: string;
    face: number;
    faceUp: boolean;
    expectedRevision?: number;
} | {
    type: 'cards.shuffle' | 'cards.recall';
    id: string;
    expectedRevision?: number;
} | {
    type: 'playlist.control';
    id: string;
    action: 'play' | 'pause' | 'resume' | 'stop' | 'next' | 'ended';
    trackId?: string;
    expectedRevision?: number;
} | {
    type: 'macro.run';
    id: string;
    expectedRevision?: number;
    mode?: 'public' | 'gm' | 'blind' | 'self';
    actorId?: string;
    sceneId?: string;
    tokenId?: string;
    args?: MacroArgs;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支6.type` | 否 | `'macro.bar'` | 见结构定义及所属功能文档 |
| `分支6.bar` | 否 | `MacroBar` | 见结构定义及所属功能文档 |
| `分支6.expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支7.type` | 否 | `'library.sceneAudio'` | 见结构定义及所属功能文档 |
| `分支7.sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支7.binding` | 否 | `SceneAudioBinding&#124;null` | 见结构定义及所属功能文档 |
| `分支7.expected` | 否 | `SceneAudioBinding&#124;null` | 见结构定义及所属功能文档 |
| `分支8.type` | 否 | `'library.scriptUsers'` | 见结构定义及所属功能文档 |
| `分支8.users` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支9.type` | 否 | `'library.save'` | 见结构定义及所属功能文档 |
| `分支9.document` | 否 | `LibraryDocument` | 见结构定义及所属功能文档 |
| `分支9.expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支9.folderId` | 是 | `string&#124;null` | 见结构定义及所属功能文档 |
| `分支9.expectedDirectoryRevision` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支9.macroSlot` | 是 | `{slot:number;expectedRevision:number}` | 见结构定义及所属功能文档 |
| `分支9.macroSlot.slot` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支9.macroSlot.expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支10.type` | 否 | `'library.delete'` | 见结构定义及所属功能文档 |
| `分支10.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支10.expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支11.type` | 否 | `'table.draw'` | 见结构定义及所属功能文档 |
| `分支11.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支11.count` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支11.mode` | 是 | `'public'&#124;'gm'&#124;'blind'&#124;'self'` | 见结构定义及所属功能文档 |
| `分支11.rowId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支12.type` | 否 | `'table.reset'&#124;'table.normalize'` | 见结构定义及所属功能文档 |
| `分支12.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支13.type` | 否 | `'cards.draw'` | 见结构定义及所属功能文档 |
| `分支13.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支13.count` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支13.recipient` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支13.method` | 否 | `'top'&#124;'bottom'&#124;'random'` | 见结构定义及所属功能文档 |
| `分支13.expectedRevision` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支14.type` | 否 | `'cards.move'` | 见结构定义及所属功能文档 |
| `分支14.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支14.cardIds` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支14.area` | 否 | `'hand'&#124;'table'&#124;'discard'` | 见结构定义及所属功能文档 |
| `分支14.recipient` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支14.faceUp` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支14.expectedRevision` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支15.type` | 否 | `'cards.flip'` | 见结构定义及所属功能文档 |
| `分支15.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支15.cardId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支15.face` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支15.faceUp` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支15.expectedRevision` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支16.type` | 否 | `'cards.shuffle'&#124;'cards.recall'` | 见结构定义及所属功能文档 |
| `分支16.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支16.expectedRevision` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支17.type` | 否 | `'playlist.control'` | 见结构定义及所属功能文档 |
| `分支17.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支17.action` | 否 | `'play'&#124;'pause'&#124;'resume'&#124;'stop'&#124;'next'&#124;'ended'` | 见结构定义及所属功能文档 |
| `分支17.trackId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支17.expectedRevision` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支18.type` | 否 | `'macro.run'` | 见结构定义及所属功能文档 |
| `分支18.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支18.expectedRevision` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支18.mode` | 是 | `'public'&#124;'gm'&#124;'blind'&#124;'self'` | 见结构定义及所属功能文档 |
| `分支18.actorId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支18.sceneId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支18.tokenId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支18.args` | 是 | `MacroArgs` | 见结构定义及所属功能文档 |
