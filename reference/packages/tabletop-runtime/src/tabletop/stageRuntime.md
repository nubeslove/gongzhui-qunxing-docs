# game/packages/tabletop-runtime/src/tabletop/stageRuntime.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {characterPortrait,actorControlled,adventureSpeechBlocked,emptyAdventure,emptyStory,parseStageScript,parseStageCharacter,storyGm,storyId,storyText,type ManualTable,type StageCommand,type StageCharacter} from '@aelzerant/contracts';
```
</details>

## applyStageCommand

导出接口 · 源码第 4 行。

Runs in the same isolated, saved world transaction as every other adventure command.

```ts
export function applyStageCommand(table: ManualTable, senderId: string, command: StageCommand, now: number): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `senderId` | 否 | `string` | — |
| `command` | 否 | `StageCommand` | — |
| `now` | 否 | `number` | — |
