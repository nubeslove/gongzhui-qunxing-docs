# game/packages/contracts/src/dnd-effects.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {storyObject as obj,storyId as id,storyNumber as num,storyList as list,storyEnum as one} from './story';
import type {ScenePoint} from './scene-features';
```
</details>

## DndActiveEffect

导出接口 · 源码第 4 行。

```ts
export interface DndActiveEffect {
    id: string;
    spell: string;
    source: string;
    remainingSeconds: number;
    updatedAt: number;
    outsideCombat: boolean;
    slot?: number;
    castId?: string;
    concentration?: boolean;
    suppressed?: boolean;
    dc?: number;
    choice?: string;
    heightened?: boolean;
    empower?: boolean;
    modifier?: number;
    charges?: number;
    usedTurn?: string;
    saved?: boolean;
    asleep?: boolean;
    region?: string;
    senses?: {
        darkvision?: number;
        seeInvisibility?: number;
    };
    origin?: ScenePoint;
    expires?: {
        actor: string;
        round: number;
        scene: string;
        phase?: 'start' | 'end';
    };
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `spell` | 否 | `string` | 见结构定义及所属功能文档 |
| `source` | 否 | `string` | 见结构定义及所属功能文档 |
| `remainingSeconds` | 否 | `number` | 见结构定义及所属功能文档 |
| `updatedAt` | 否 | `number` | 见结构定义及所属功能文档 |
| `outsideCombat` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `slot` | 是 | `number` | 见结构定义及所属功能文档 |
| `castId` | 是 | `string` | 见结构定义及所属功能文档 |
| `concentration` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `suppressed` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `dc` | 是 | `number` | 见结构定义及所属功能文档 |
| `choice` | 是 | `string` | 见结构定义及所属功能文档 |
| `heightened` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `empower` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `modifier` | 是 | `number` | 见结构定义及所属功能文档 |
| `charges` | 是 | `number` | 见结构定义及所属功能文档 |
| `usedTurn` | 是 | `string` | 见结构定义及所属功能文档 |
| `saved` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `asleep` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `region` | 是 | `string` | 见结构定义及所属功能文档 |
| `senses` | 是 | `{darkvision?:number;seeInvisibility?:number}` | 见结构定义及所属功能文档 |
| `senses.darkvision` | 是 | `number` | 见结构定义及所属功能文档 |
| `senses.seeInvisibility` | 是 | `number` | 见结构定义及所属功能文档 |
| `origin` | 是 | `ScenePoint` | 见结构定义及所属功能文档 |
| `expires` | 是 | `{actor:string;round:number;scene:string;phase?:'start'&#124;'end'}` | 见结构定义及所属功能文档 |
| `expires.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `expires.round` | 否 | `number` | 见结构定义及所属功能文档 |
| `expires.scene` | 否 | `string` | 见结构定义及所属功能文档 |
| `expires.phase` | 是 | `'start'&#124;'end'` | 见结构定义及所属功能文档 |

## DndSceneSpell

导出接口 · 源码第 14 行。

One spell instance owns its template and all additional scene visuals.

```ts
export interface DndSceneSpell extends DndActiveEffect {
    boundActor?: string;
    field?: 'antimagic' | 'globe';
    blockLevel?: number;
    auraFeet?: number;
    triggered?: Record<string, string>;
    createdTurn?: string;
    heightenTarget?: string;
    parts?: {
        lights: string[];
        tiles: string[];
        drawings: string[];
    };
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `boundActor` | 是 | `string` | 见结构定义及所属功能文档 |
| `field` | 是 | `'antimagic'&#124;'globe'` | 见结构定义及所属功能文档 |
| `blockLevel` | 是 | `number` | 见结构定义及所属功能文档 |
| `auraFeet` | 是 | `number` | 见结构定义及所属功能文档 |
| `triggered` | 是 | `Record<string,string>` | 见结构定义及所属功能文档 |
| `createdTurn` | 是 | `string` | 见结构定义及所属功能文档 |
| `heightenTarget` | 是 | `string` | 见结构定义及所属功能文档 |
| `parts` | 是 | `{lights:string[];tiles:string[];drawings:string[]}` | 见结构定义及所属功能文档 |
| `parts.lights` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `parts.tiles` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `parts.drawings` | 否 | `string[]` | 见结构定义及所属功能文档 |

## parseDndActiveEffect

导出接口 · 源码第 19 行。

```ts
export function parseDndActiveEffect(raw: unknown): DndActiveEffect;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseDndSceneSpell

导出接口 · 源码第 26 行。

```ts
export function parseDndSceneSpell(raw: unknown): DndSceneSpell;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
