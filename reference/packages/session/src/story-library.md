# game/packages/session/src/story-library.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {importCardStack} from './story-card-stack-file';
import {applyCardStackCommand,touchSourceStacks} from './story-card-stacks';
import {resetCardTemplate} from '@aelzerant/contracts';
import {applyCardCommand} from './story-cards';
import {applyLibraryDirectory,saveLibraryPlacement} from './story-library-directory';
import {deleteLibraryDocuments} from './library-delete';
import {tableDocumentVisible,type TableDocumentReference} from '@aelzerant/contracts';
import {journalEntryAccess,journalReadable,type StoryEntry} from '@aelzerant/contracts';
import {parseMacroArgs,macroText,parseMacroBar,emptyMacroBar,parseChatInput,storyObject,numericRollData} from '@aelzerant/contracts';
import {parseSceneAudioBinding,sameSceneAudio} from '@aelzerant/contracts';
import {emptyWorldLibrary,parseLibraryDocument,documentAccess,evaluateDice,storyId as id,storyText as text,storyEnum as one,storyNumber as num,storyList as list,type StoryWorkspace,type LibraryDocument,type RollTable,type WorldPlaylist,type RollMode} from '@aelzerant/contracts';
import type {StoryContext} from './story-workspace';
import {applyConversation} from './story-conversation';
```
</details>

## applyLibraryCommand

导出接口 · 源码第 14 行。

```ts
export function applyLibraryCommand(story: StoryWorkspace, cmd: Record<string,unknown>, c: StoryContext, gm: boolean): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `cmd` | 否 | `Record<string,unknown>` | — |
| `c` | 否 | `StoryContext` | — |
| `gm` | 否 | `boolean` | — |
