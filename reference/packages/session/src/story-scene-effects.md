# game/packages/session/src/story-scene-effects.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {PRESENTATION_EFFECTS,storyEnum,storyId,storyList,type PresentationEffect,type StoryWorkspace} from '@aelzerant/contracts';
```
</details>

## SceneEffectsCommand

导出接口 · 源码第 3 行。

```ts
export type SceneEffectsCommand = {
    type: 'fx.set';
    sceneId: string;
    effects: PresentationEffect[];
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `type` | 否 | `'fx.set'` | 见结构定义及所属功能文档 |
| `sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `effects` | 否 | `PresentationEffect[]` | 见结构定义及所属功能文档 |

## applySceneEffectsCommand

导出接口 · 源码第 5 行。

```ts
export function applySceneEffectsCommand(story: StoryWorkspace, raw: unknown, c: {sceneIds?:ReadonlySet<string>}, gm: boolean): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `raw` | 否 | `unknown` | — |
| `c` | 否 | `{sceneIds?:ReadonlySet<string>}` | — |
| `gm` | 否 | `boolean` | — |
