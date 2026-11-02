# game/packages/session/src/story-theatre.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {
  THEATRE_ACTIONS,THEATRE_ACTION_IDS,THEATRE_EMOTES,WORLD_CALENDAR_PLUGIN,emptyBossBarState,emptyTheatreState,parseBossBarState,parsePluginManifest,parseStoryPlugins,
  stageMedia,storyEnum,storyObject,storyText,type PluginManifest,type StoryWorkspace,type TheatreAction,type TheatreEmote,
} from '@aelzerant/contracts';
import type {StoryContext} from './story-workspace';
```
</details>

## TheatreCommand

导出接口 · 源码第 7 行。

```ts
export type TheatreCommand = {
    type: 'theatre.open';
    sceneId?: string;
    background?: string;
    cast: {
        actorId: string;
        name: string;
        portrait?: string;
        side?: 'left' | 'right';
    }[];
} | {
    type: 'theatre.close';
} | {
    type: 'theatre.focus';
    actorId: string | null;
} | {
    type: 'theatre.speech';
    actorId: string;
    text: string;
} | {
    type: 'theatre.clear';
} | {
    type: 'theatre.emote';
    actorId: string;
    emote: TheatreEmote | null;
} | {
    type: 'theatre.action';
    actorId: string;
    action: TheatreAction;
} | {
    type: 'theatre.mirror';
    actorId: string;
    mirrored: boolean;
} | {
    type: 'theatre.side';
    actorId: string;
    side: 'left' | 'right';
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.type` | 否 | `'theatre.open'` | 见结构定义及所属功能文档 |
| `分支1.sceneId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支1.background` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支1.cast` | 否 | `{actorId:string;name:string;portrait?:string;side?:'left'&#124;'right'}[]` | 见结构定义及所属功能文档 |
| `分支1.cast.[].actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.cast.[].name` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.cast.[].portrait` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支1.cast.[].side` | 是 | `'left'&#124;'right'` | 见结构定义及所属功能文档 |
| `分支2.type` | 否 | `'theatre.close'` | 见结构定义及所属功能文档 |
| `分支3.type` | 否 | `'theatre.focus'` | 见结构定义及所属功能文档 |
| `分支3.actorId` | 否 | `string&#124;null` | 见结构定义及所属功能文档 |
| `分支4.type` | 否 | `'theatre.speech'` | 见结构定义及所属功能文档 |
| `分支4.actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.text` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支5.type` | 否 | `'theatre.clear'` | 见结构定义及所属功能文档 |
| `分支6.type` | 否 | `'theatre.emote'` | 见结构定义及所属功能文档 |
| `分支6.actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支6.emote` | 否 | `TheatreEmote&#124;null` | 见结构定义及所属功能文档 |
| `分支7.type` | 否 | `'theatre.action'` | 见结构定义及所属功能文档 |
| `分支7.actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支7.action` | 否 | `TheatreAction` | 见结构定义及所属功能文档 |
| `分支8.type` | 否 | `'theatre.mirror'` | 见结构定义及所属功能文档 |
| `分支8.actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支8.mirrored` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支9.type` | 否 | `'theatre.side'` | 见结构定义及所属功能文档 |
| `分支9.actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支9.side` | 否 | `'left'&#124;'right'` | 见结构定义及所属功能文档 |

## PluginCommand

导出接口 · 源码第 17 行。

```ts
export type PluginCommand = {
    type: 'plugins.set';
    enabled: string[];
    calendar?: boolean;
} | {
    type: 'plugins.import';
    manifest: PluginManifest;
} | {
    type: 'plugins.remove';
    id: string;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.type` | 否 | `'plugins.set'` | 见结构定义及所属功能文档 |
| `分支1.enabled` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支1.calendar` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支2.type` | 否 | `'plugins.import'` | 见结构定义及所属功能文档 |
| `分支2.manifest` | 否 | `PluginManifest` | 见结构定义及所属功能文档 |
| `分支3.type` | 否 | `'plugins.remove'` | 见结构定义及所属功能文档 |
| `分支3.id` | 否 | `string` | 见结构定义及所属功能文档 |

## BossBarCommand

导出接口 · 源码第 21 行。

```ts
export type BossBarCommand = {
    type: 'bossbar.show';
    name: string;
    max: number;
    current?: number;
    subtitle?: string;
    phases?: number;
    phase?: number;
    color?: string;
    portrait?: string;
} | {
    type: 'bossbar.update';
    name?: string;
    max?: number;
    current?: number;
    subtitle?: string;
    phases?: number;
    phase?: number;
    color?: string;
    portrait?: string | null;
} | {
    type: 'bossbar.close';
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.type` | 否 | `'bossbar.show'` | 见结构定义及所属功能文档 |
| `分支1.name` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.max` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支1.current` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支1.subtitle` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支1.phases` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支1.phase` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支1.color` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支1.portrait` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支2.type` | 否 | `'bossbar.update'` | 见结构定义及所属功能文档 |
| `分支2.name` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支2.max` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支2.current` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支2.subtitle` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支2.phases` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支2.phase` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支2.color` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支2.portrait` | 是 | `string&#124;null` | 见结构定义及所属功能文档 |
| `分支3.type` | 否 | `'bossbar.close'` | 见结构定义及所属功能文档 |

## applyTheatreCommand

导出接口 · 源码第 31 行。

```ts
export function applyTheatreCommand(story: StoryWorkspace, raw: unknown, c: StoryContext, gm: boolean): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `raw` | 否 | `unknown` | — |
| `c` | 否 | `StoryContext` | — |
| `gm` | 否 | `boolean` | — |

## applyBossBarCommand

导出接口 · 源码第 112 行。

```ts
export function applyBossBarCommand(story: StoryWorkspace, raw: unknown, gm: boolean): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `raw` | 否 | `unknown` | — |
| `gm` | 否 | `boolean` | — |

## applyPluginCommand

导出接口 · 源码第 135 行。

```ts
export function applyPluginCommand(story: StoryWorkspace, raw: unknown, gm: boolean): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `raw` | 否 | `unknown` | — |
| `gm` | 否 | `boolean` | — |
