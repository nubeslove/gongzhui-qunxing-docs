# game/packages/session/src/story-presentation.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {PRESENTATION_EFFECTS,PRESENTATION_MODES,PRESENTATION_TRANSITIONS,storyEnum,storyId,storyList,storyObject,type PresentationEffect,type PresentationMode,type PresentationTransition,type StoryWorkspace} from '@aelzerant/contracts';
```
</details>

## PresentationCommand

导出接口 · 源码第 3 行。

```ts
export type PresentationCommand = {
    type: 'presentation.set';
    mode: PresentationMode;
    sceneId?: string | null;
    transition?: PresentationTransition;
    effects?: PresentationEffect[];
    expected?: number;
} | {
    type: 'presentation.close';
    expected?: number;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.type` | 否 | `'presentation.set'` | 见结构定义及所属功能文档 |
| `分支1.mode` | 否 | `PresentationMode` | 见结构定义及所属功能文档 |
| `分支1.sceneId` | 是 | `string&#124;null` | 见结构定义及所属功能文档 |
| `分支1.transition` | 是 | `PresentationTransition` | 见结构定义及所属功能文档 |
| `分支1.effects` | 是 | `PresentationEffect[]` | 见结构定义及所属功能文档 |
| `分支1.expected` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支2.type` | 否 | `'presentation.close'` | 见结构定义及所属功能文档 |
| `分支2.expected` | 是 | `number` | 见结构定义及所属功能文档 |

## applyPresentationCommand

导出接口 · 源码第 13 行。

世界级演出模式。终端是默认；场景/演出/部署/战斗都必须指向一个存在的场景。

```ts
export function applyPresentationCommand(story: StoryWorkspace, raw: unknown, c: {sceneIds?:ReadonlySet<string>;now:number}, gm: boolean): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `raw` | 否 | `unknown` | — |
| `c` | 否 | `{sceneIds?:ReadonlySet<string>;now:number}` | — |
| `gm` | 否 | `boolean` | — |
