# game/packages/session/src/story-resource-transfer.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseResourceFile,exportResourceFile,transferResourceFile,canonicalJson,parseResource,storyId,storyText,placeEntity,type StoryWorkspace} from '@aelzerant/contracts';
import type {StoryContext} from './story-workspace';
```
</details>

## applyResourceTransfer

导出接口 · 源码第 3 行。

```ts
export function applyResourceTransfer(story: StoryWorkspace, command: Record<string,unknown>, context: StoryContext, gm: boolean): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `command` | 否 | `Record<string,unknown>` | — |
| `context` | 否 | `StoryContext` | — |
| `gm` | 否 | `boolean` | — |
