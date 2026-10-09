# game/packages/contracts/src/scene-audio.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {storyObject as object,storyId as id,storyEnum as one} from './story';
```
</details>

## AudioCategory

导出接口 · 源码第 3 行。

```ts
export type AudioCategory = keyof typeof AUDIO_CATEGORIES;
```

## SceneAudioBinding

导出接口 · 源码第 4 行。

```ts
export interface SceneAudioBinding {
    playlistId: string;
    trackId?: string;
    mode: 'replace' | 'mix';
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `playlistId` | 否 | `string` | 见结构定义及所属功能文档 |
| `trackId` | 是 | `string` | 见结构定义及所属功能文档 |
| `mode` | 否 | `'replace'&#124;'mix'` | 见结构定义及所属功能文档 |

## parseSceneAudioBinding

导出接口 · 源码第 5 行。

```ts
export function parseSceneAudioBinding(raw: unknown): SceneAudioBinding;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseSceneAudio

导出接口 · 源码第 6 行。

```ts
export function parseSceneAudio(raw: unknown): Record<string,SceneAudioBinding>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## sameSceneAudio

导出接口 · 源码第 7 行。

```ts
export function sameSceneAudio(a: SceneAudioBinding|null|undefined, b: SceneAudioBinding|null|undefined): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `SceneAudioBinding&#124;null&#124;undefined` | — |
| `b` | 否 | `SceneAudioBinding&#124;null&#124;undefined` | — |
