# game/packages/contracts/src/theatre.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {isGameSystemId,type GameSystemId} from './systems';
import {stageMedia} from './story-stage';
```
</details>

## PluginCategory

导出接口 · 源码第 12 行。

```ts
export type PluginCategory = keyof typeof PLUGIN_CATEGORIES;
```

## PLUGIN_CAPABILITIES

导出接口 · 源码第 13 行。

```ts
export const PLUGIN_CAPABILITIES = ['theatre', 'theatre-preset', 'boss-bar', 'boss-bar-preset', 'world-calendar', 'system-terminal', 'fx', 'chat-alert', 'utility', 'minigame-host', 'minigame'] as const;
```

## PluginCapability

导出接口 · 源码第 14 行。

```ts
export type PluginCapability = typeof PLUGIN_CAPABILITIES[number];
```

## WORLD_CALENDAR_PLUGIN

导出接口 · 源码第 15 行。

```ts
export const WORLD_CALENDAR_PLUGIN = 'world-calendar';
```

## BUILTIN_PLUGIN_IDS

导出接口 · 源码第 17 行。

Imported presets may not shadow application-owned switches or capabilities.

```ts
export const BUILTIN_PLUGIN_IDS = ['tactical-missions', 'log-export', 'theatre', 'boss-bar', 'world-calendar', 'chat-alert', 'fx', 'system-terminal', 'minigame-foundation', 'qte'] as const;
```

## BuiltinPluginId

导出接口 · 源码第 18 行。

```ts
export type BuiltinPluginId = typeof BUILTIN_PLUGIN_IDS[number];
```

## isBuiltinPluginId

导出接口 · 源码第 19 行。

```ts
export function isBuiltinPluginId(id: string): id is BuiltinPluginId;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | — |

## PluginRequirement

导出接口 · 源码第 21 行。

```ts
export interface PluginRequirement {
    id: string;
    minimum?: string;
    before?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `minimum` | 是 | `string` | 见结构定义及所属功能文档 |
| `before` | 是 | `string` | 见结构定义及所属功能文档 |

## PluginManifest

导出接口 · 源码第 22 行。

```ts
export interface PluginManifest {
    requires?: PluginRequirement[];
    id: string;
    name: string;
    version: string;
    description: string;
    author?: string;
    systemId?: GameSystemId;
    category: PluginCategory;
    capability: PluginCapability;
    config?: Record<string, unknown>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `requires` | 是 | `PluginRequirement[]` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `version` | 否 | `string` | 见结构定义及所属功能文档 |
| `description` | 否 | `string` | 见结构定义及所属功能文档 |
| `author` | 是 | `string` | 见结构定义及所属功能文档 |
| `systemId` | 是 | `GameSystemId` | 见结构定义及所属功能文档 |
| `category` | 否 | `PluginCategory` | 见结构定义及所属功能文档 |
| `capability` | 否 | `PluginCapability` | 见结构定义及所属功能文档 |
| `config` | 是 | `Record<string,unknown>` | Small declarative configuration. Never trusted as code. |

## StoryPlugins

导出接口 · 源码第 30 行。

```ts
export interface StoryPlugins {
    enabled: string[];
    imported: PluginManifest[];
    calendar?: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `enabled` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `imported` | 否 | `PluginManifest[]` | 见结构定义及所属功能文档 |
| `calendar` | 是 | `boolean` | 见结构定义及所属功能文档 |

## parsePluginManifest

导出接口 · 源码第 58 行。

```ts
export function parsePluginManifest(raw: unknown): PluginManifest;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## theatrePluginEnabled

导出接口 · 源码第 91 行。

Missing plugin settings use defaults; an explicit enabled list remains authoritative.

```ts
export function theatrePluginEnabled(plugins: StoryPlugins|undefined): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `plugins` | 否 | `StoryPlugins&#124;undefined` | — |

## emptyStoryPlugins

导出接口 · 源码第 92 行。

```ts
export function emptyStoryPlugins(): StoryPlugins;
```

## parseStoryPlugins

导出接口 · 源码第 93 行。

```ts
export function parseStoryPlugins(raw: unknown): StoryPlugins;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## worldCalendarPluginEnabled

导出接口 · 源码第 105 行。

World calendar is opt-out; LANCER family is opt-in by default.

```ts
export function worldCalendarPluginEnabled(plugins: StoryPlugins|undefined, systemId: GameSystemId): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `plugins` | 否 | `StoryPlugins&#124;undefined` | — |
| `systemId` | 否 | `GameSystemId` | — |

## THEATRE_EMOTES

导出接口 · 源码第 111 行。

```ts
export const THEATRE_EMOTES = ['happy', 'surprise', 'question', 'angry', 'sad', 'heart', 'thinking', 'nervous', 'music', 'sleepy'] as const;
```

## TheatreEmote

导出接口 · 源码第 112 行。

```ts
export type TheatreEmote = typeof THEATRE_EMOTES[number];
```

## THEATRE_EMOTE_NAMES

导出接口 · 源码第 113 行。

```ts
export const THEATRE_EMOTE_NAMES: Record<TheatreEmote, string>;
```

## TheatreAction

导出接口 · 源码第 128 行。

```ts
export type TheatreAction = keyof typeof THEATRE_ACTIONS;
```

## TheatreSide

导出接口 · 源码第 130 行。

```ts
export type TheatreSide = 'left' | 'right';
```

## TheatreActionEvent

导出接口 · 源码第 131 行。

```ts
export interface TheatreActionEvent {
    id: string;
    kind: TheatreAction;
    at: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `kind` | 否 | `TheatreAction` | 见结构定义及所属功能文档 |
| `at` | 否 | `number` | 见结构定义及所属功能文档 |

## TheatreSlot

导出接口 · 源码第 132 行。

```ts
export interface TheatreSlot {
    actorId: string;
    name: string;
    position: number;
    side: TheatreSide;
    portrait?: string;
    mirrored?: boolean;
    expression?: string;
    emote?: TheatreEmote;
    emoteId?: string;
    action?: TheatreActionEvent;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `position` | 否 | `number` | 见结构定义及所属功能文档 |
| `side` | 否 | `TheatreSide` | 见结构定义及所属功能文档 |
| `portrait` | 是 | `string` | 见结构定义及所属功能文档 |
| `mirrored` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `expression` | 是 | `string` | 见结构定义及所属功能文档 |
| `emote` | 是 | `TheatreEmote` | 见结构定义及所属功能文档 |
| `emoteId` | 是 | `string` | 见结构定义及所属功能文档 |
| `action` | 是 | `TheatreActionEvent` | 见结构定义及所属功能文档 |

## TheatreSpeech

导出接口 · 源码第 137 行。

```ts
export interface TheatreSpeech {
    id: string;
    actorId: string;
    name: string;
    text: string;
    at: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `text` | 否 | `string` | 见结构定义及所属功能文档 |
| `at` | 否 | `number` | 见结构定义及所属功能文档 |

## TheatreState

导出接口 · 源码第 138 行。

```ts
export interface TheatreState {
    active: boolean;
    cast: TheatreSlot[];
    focus: string | null;
    speech: TheatreSpeech | null;
    revision: number;
    sceneId?: string;
    background?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `active` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `cast` | 否 | `TheatreSlot[]` | 见结构定义及所属功能文档 |
| `focus` | 否 | `string&#124;null` | 见结构定义及所属功能文档 |
| `speech` | 否 | `TheatreSpeech&#124;null` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `sceneId` | 是 | `string` | 见结构定义及所属功能文档 |
| `background` | 是 | `string` | 见结构定义及所属功能文档 |

## emptyTheatreState

导出接口 · 源码第 139 行。

```ts
export function emptyTheatreState(): TheatreState;
```

## parseTheatreState

导出接口 · 源码第 140 行。

```ts
export function parseTheatreState(raw: unknown): TheatreState;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## theatreSide

导出接口 · 源码第 179 行。

```ts
export function theatreSide(slot: {side?:TheatreSide;position:number}): TheatreSide;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `slot` | 否 | `{side?:TheatreSide;position:number}` | — |

## theatreLayout

导出接口 · 源码第 181 行。

Stable edge grouping: changing speaker never moves other portraits.

```ts
export function theatreLayout<T extends {actorId:string;position:number;side?:TheatreSide}>(slots: T[], width: number, height: number): Record<string, { left: number; width: number; height: number; layer: number; }>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `slots` | 否 | `T[]` | — |
| `width` | 否 | `number` | — |
| `height` | 否 | `number` | — |
