# game/packages/session/src/story-player-progress.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {storyId,type StoryWorkspace} from '@aelzerant/contracts';
```
</details>

## PlayerProgressCommand

导出接口 · 源码第 3 行。

```ts
export type PlayerProgressCommand = {
    type: 'progress.mark';
    key: string;
} | {
    type: 'progress.reset';
    playerId: string;
    key?: string;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.type` | 否 | `'progress.mark'` | 见结构定义及所属功能文档 |
| `分支1.key` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.type` | 否 | `'progress.reset'` | 见结构定义及所属功能文档 |
| `分支2.playerId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.key` | 是 | `string` | 见结构定义及所属功能文档 |

## applyPlayerProgressCommand

导出接口 · 源码第 7 行。

```ts
export function applyPlayerProgressCommand(story: StoryWorkspace, raw: unknown, c: {senderId:string;now:number}, gm: boolean): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `raw` | 否 | `unknown` | — |
| `c` | 否 | `{senderId:string;now:number}` | — |
| `gm` | 否 | `boolean` | — |
