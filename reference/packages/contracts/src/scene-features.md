# game/packages/contracts/src/scene-features.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {dndSpellLightAt} from './dnd-magic-fields';
import {parseSenseMarkers,type SenseMarker} from './sense-markers';
import {parseTokenMotion,type TokenMotion} from './token-motion';
import {isSmoke,sceneObscured,magicalDarknessAt,sceneObserverSees,type SceneObserver} from './scene-obscurity';
import {parseWallAccess,type WallAccess} from './wall-access';
import {parseFogImage} from './scene-fog';
import type {SceneFrameRect} from './scene-frame';
import {SCENE_ILLUMINATION,sceneAmbientLit,type SceneIllumination} from './scene-illumination';
import {parseDrawingExtras,type DrawingStyleExtras} from './drawing-style';
import {parseDoorVisual,type DoorVisual} from './door-visual';
import {parseDoorSound,parseDoorSignal,type DoorSound,type DoorSignal} from './door-feedback';
import {parseSceneNotes,type SceneNote} from './scene-note';
import { storyObject as obj, storyList as list, storyText as text, storyId as id, storyNumber as num, storyEnum as one } from './story';
import {parseSceneRegions,type SceneRegion} from './scene-region';
import {EXPLORATION_MODES,type ExplorationMode} from './scene-exploration';
import {parseSceneTiles,type SceneTile} from './scene-tile';
import {parseSceneSounds,type SceneSound} from './scene-sound';
import {DRAWING_KINDS,type DrawingKind} from './scene-geometry';
import {WALL_CHANNELS,WALL_RESTRICTIONS,wallRayRestriction,lightActive,lightReaches,type WallChannel,type WallRestriction} from './scene-perception';
```
</details>

## ScenePoint

导出接口 · 源码第 21 行。

```ts
export interface ScenePoint {
    x: number;
    y: number;
    z: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `x` | 否 | `number` | 见结构定义及所属功能文档 |
| `y` | 否 | `number` | 见结构定义及所属功能文档 |
| `z` | 否 | `number` | 见结构定义及所属功能文档 |

## SceneWall

导出接口 · 源码第 22 行。

```ts
export interface SceneWall {
    wallKind?: keyof typeof import('./scene-perception').WALL_PRESETS;
    access?: WallAccess;
    doorVisual?: DoorVisual;
    doorSound?: DoorSound;
    doorSignal?: DoorSignal;
    id: string;
    a: ScenePoint;
    b: ScenePoint;
    bottom: number;
    top: number;
    movement: boolean;
    sight: boolean;
    light: boolean;
    sound?: boolean;
    door: 'none' | 'closed' | 'open' | 'locked';
    channels?: Partial<Record<WallChannel, WallRestriction>>;
    direction?: 'both' | 'left' | 'right';
    secret?: boolean;
    discovered?: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `wallKind` | 是 | `keyof typeof import('./scene-perception').WALL_PRESETS` | 见结构定义及所属功能文档 |
| `access` | 是 | `WallAccess` | 见结构定义及所属功能文档 |
| `doorVisual` | 是 | `DoorVisual` | 见结构定义及所属功能文档 |
| `doorSound` | 是 | `DoorSound` | 见结构定义及所属功能文档 |
| `doorSignal` | 是 | `DoorSignal` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `a` | 否 | `ScenePoint` | 见结构定义及所属功能文档 |
| `b` | 否 | `ScenePoint` | 见结构定义及所属功能文档 |
| `bottom` | 否 | `number` | 见结构定义及所属功能文档 |
| `top` | 否 | `number` | 见结构定义及所属功能文档 |
| `movement` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `sight` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `light` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `sound` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `door` | 否 | `'none'&#124;'closed'&#124;'open'&#124;'locked'` | 见结构定义及所属功能文档 |
| `channels` | 是 | `Partial<Record<WallChannel,WallRestriction>>` | 见结构定义及所属功能文档 |
| `direction` | 是 | `'both'&#124;'left'&#124;'right'` | 见结构定义及所属功能文档 |
| `secret` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `discovered` | 是 | `boolean` | 见结构定义及所属功能文档 |

## SceneLight

导出接口 · 源码第 23 行。

```ts
export interface SceneLight extends ScenePoint {
    spellRegion?: string;
    kind?: 'light' | 'smoke-circle' | 'smoke-rectangle';
    width?: number;
    height?: number;
    top?: number;
    id: string;
    radius: number;
    darkness: boolean;
    color: string;
    brightRadius?: number;
    angle?: number;
    rotation?: number;
    intensity?: number;
    disabled?: boolean;
    activationMin?: number;
    activationMax?: number;
    walls?: boolean;
    vision?: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `spellRegion` | 是 | `string` | 见结构定义及所属功能文档 |
| `kind` | 是 | `'light'&#124;'smoke-circle'&#124;'smoke-rectangle'` | 见结构定义及所属功能文档 |
| `width` | 是 | `number` | 见结构定义及所属功能文档 |
| `height` | 是 | `number` | 见结构定义及所属功能文档 |
| `top` | 是 | `number` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `radius` | 否 | `number` | 见结构定义及所属功能文档 |
| `darkness` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `color` | 否 | `string` | 见结构定义及所属功能文档 |
| `brightRadius` | 是 | `number` | 见结构定义及所属功能文档 |
| `angle` | 是 | `number` | 见结构定义及所属功能文档 |
| `rotation` | 是 | `number` | 见结构定义及所属功能文档 |
| `intensity` | 是 | `number` | 见结构定义及所属功能文档 |
| `disabled` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `activationMin` | 是 | `number` | 见结构定义及所属功能文档 |
| `activationMax` | 是 | `number` | 见结构定义及所属功能文档 |
| `walls` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `vision` | 是 | `boolean` | 见结构定义及所属功能文档 |

## SceneDrawing

导出接口 · 源码第 24 行。

```ts
export interface SceneDrawing extends DrawingStyleExtras {
    id: string;
    kind: DrawingKind;
    a: ScenePoint;
    b: ScenePoint;
    text: string;
    color: string;
    public: boolean;
    points?: ScenePoint[];
    rotation?: number;
    sort?: number;
    lineWidth?: number;
    strokeOpacity?: number;
    fill?: string;
    fillOpacity?: number;
    fontSize?: number;
    fontFamily?: string;
    locked?: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `kind` | 否 | `DrawingKind` | 见结构定义及所属功能文档 |
| `a` | 否 | `ScenePoint` | 见结构定义及所属功能文档 |
| `b` | 否 | `ScenePoint` | 见结构定义及所属功能文档 |
| `text` | 否 | `string` | 见结构定义及所属功能文档 |
| `color` | 否 | `string` | 见结构定义及所属功能文档 |
| `public` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `points` | 是 | `ScenePoint[]` | 见结构定义及所属功能文档 |
| `rotation` | 是 | `number` | 见结构定义及所属功能文档 |
| `sort` | 是 | `number` | 见结构定义及所属功能文档 |
| `lineWidth` | 是 | `number` | 见结构定义及所属功能文档 |
| `strokeOpacity` | 是 | `number` | 见结构定义及所属功能文档 |
| `fill` | 是 | `string` | 见结构定义及所属功能文档 |
| `fillOpacity` | 是 | `number` | 见结构定义及所属功能文档 |
| `fontSize` | 是 | `number` | 见结构定义及所属功能文档 |
| `fontFamily` | 是 | `string` | 见结构定义及所属功能文档 |
| `locked` | 是 | `boolean` | 见结构定义及所属功能文档 |

## SceneFeatures

导出接口 · 源码第 25 行。

```ts
export interface SceneFeatures {
    monochrome?: string[];
    tokenMonochrome?: Record<string, string[]>;
    tokenPerception?: import('./dnd-perception').TokenPerceptionMasks;
    senseMarkers?: SenseMarker[];
    tokenMotion?: TokenMotion;
    tokenVision?: Record<string, string[]>;
    fogImage?: string;
    globalLightBounds?: SceneFrameRect;
    illumination?: SceneIllumination;
    globalLightThreshold?: number | null;
    notes?: SceneNote[];
    movementCells?: Record<string, number>;
    darkCells?: string[];
    regions?: SceneRegion[];
    regionOnce?: string[];
    exploration?: ExplorationMode;
    explored?: Record<string, string[]>;
    sharedExplored?: string[];
    exploredCells?: string[];
    unexploredColor?: string;
    exploredColor?: string;
    tiles?: SceneTile[];
    sounds?: SceneSound[];
    walls: SceneWall[];
    lights: SceneLight[];
    drawings: SceneDrawing[];
    fog: boolean;
    dark: boolean;
    vision: number;
    revealed: string[];
    visible?: string[];
    darknessLevel?: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `monochrome` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `tokenMonochrome` | 是 | `Record<string,string[]>` | 见结构定义及所属功能文档 |
| `tokenPerception` | 是 | `import('./dnd-perception').TokenPerceptionMasks` | 见结构定义及所属功能文档 |
| `senseMarkers` | 是 | `SenseMarker[]` | 见结构定义及所属功能文档 |
| `tokenMotion` | 是 | `TokenMotion` | 见结构定义及所属功能文档 |
| `tokenVision` | 是 | `Record<string,string[]>` | 见结构定义及所属功能文档 |
| `fogImage` | 是 | `string` | 见结构定义及所属功能文档 |
| `globalLightBounds` | 是 | `SceneFrameRect` | 见结构定义及所属功能文档 |
| `illumination` | 是 | `SceneIllumination` | 见结构定义及所属功能文档 |
| `globalLightThreshold` | 是 | `number&#124;null` | 见结构定义及所属功能文档 |
| `notes` | 是 | `SceneNote[]` | 见结构定义及所属功能文档 |
| `movementCells` | 是 | `Record<string,number>` | 见结构定义及所属功能文档 |
| `darkCells` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `regions` | 是 | `SceneRegion[]` | 见结构定义及所属功能文档 |
| `regionOnce` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `exploration` | 是 | `ExplorationMode` | 见结构定义及所属功能文档 |
| `explored` | 是 | `Record<string,string[]>` | 见结构定义及所属功能文档 |
| `sharedExplored` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `exploredCells` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `unexploredColor` | 是 | `string` | 见结构定义及所属功能文档 |
| `exploredColor` | 是 | `string` | 见结构定义及所属功能文档 |
| `tiles` | 是 | `SceneTile[]` | 见结构定义及所属功能文档 |
| `sounds` | 是 | `SceneSound[]` | 见结构定义及所属功能文档 |
| `walls` | 否 | `SceneWall[]` | 见结构定义及所属功能文档 |
| `lights` | 否 | `SceneLight[]` | 见结构定义及所属功能文档 |
| `drawings` | 否 | `SceneDrawing[]` | 见结构定义及所属功能文档 |
| `fog` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `dark` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `vision` | 否 | `number` | 见结构定义及所属功能文档 |
| `revealed` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `visible` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `darknessLevel` | 是 | `number` | 见结构定义及所属功能文档 |

## emptySceneFeatures

导出接口 · 源码第 26 行。

```ts
export function emptySceneFeatures(): SceneFeatures;
```

## parseSceneFeatures

导出接口 · 源码第 27 行。

```ts
export function parseSceneFeatures(raw: unknown, width: number, height: number): SceneFeatures;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
| `width` | 否 | `number` | — |
| `height` | 否 | `number` | — |

## sceneRayTransmission

导出接口 · 源码第 55 行。

```ts
export function sceneRayTransmission(features: SceneFeatures|undefined, a: ScenePoint, b: ScenePoint, channel: WallChannel, sourceRange?: number): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures&#124;undefined` | — |
| `a` | 否 | `ScenePoint` | — |
| `b` | 否 | `ScenePoint` | — |
| `channel` | 否 | `WallChannel` | — |
| `sourceRange` | 是 | `number` | — |

## sceneRayBlocked

导出接口 · 源码第 59 行。

```ts
export function sceneRayBlocked(features: SceneFeatures|undefined, a: ScenePoint, b: ScenePoint, channel: WallChannel, sourceRange?: number): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures&#124;undefined` | — |
| `a` | 否 | `ScenePoint` | — |
| `b` | 否 | `ScenePoint` | — |
| `channel` | 否 | `WallChannel` | — |
| `sourceRange` | 是 | `number` | — |

## sceneCellLit

导出接口 · 源码第 61 行。

```ts
export function sceneCellLit(features: SceneFeatures, p: ScenePoint): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures` | — |
| `p` | 否 | `ScenePoint` | — |

## sceneVisibleCells

导出接口 · 源码第 68 行。

```ts
export function sceneVisibleCells(features: SceneFeatures, width: number, height: number, observers: SceneObserver[]): Set<string>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `features` | 否 | `SceneFeatures` | — |
| `width` | 否 | `number` | — |
| `height` | 否 | `number` | — |
| `observers` | 否 | `SceneObserver[]` | — |
