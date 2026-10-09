# game/packages/contracts/src/door-feedback.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {storyObject as obj,storyNumber as num,storyEnum as one,storyId as id} from './story';
import {safeMedia} from './world-library';
import type {SceneWall,ScenePoint} from './scene-features';
```
</details>

## DoorSoundEvent

导出接口 · 源码第 6 行。

```ts
export type DoorSoundEvent = keyof typeof DOOR_SOUND_EVENTS;
```

## DoorSound

导出接口 · 源码第 7 行。

```ts
export interface DoorSound {
    preset: keyof typeof DOOR_SOUNDS;
    volume: number;
    radius: number;
    clips?: Partial<Record<DoorSoundEvent, string>>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `preset` | 否 | `keyof typeof DOOR_SOUNDS` | 见结构定义及所属功能文档 |
| `volume` | 否 | `number` | 见结构定义及所属功能文档 |
| `radius` | 否 | `number` | 见结构定义及所属功能文档 |
| `clips` | 是 | `Partial<Record<DoorSoundEvent,string>>` | 见结构定义及所属功能文档 |

## DoorSignal

导出接口 · 源码第 8 行。

```ts
export interface DoorSignal {
    id: string;
    event: Exclude<DoorSoundEvent, 'attempt'>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `event` | 否 | `Exclude<DoorSoundEvent,'attempt'>` | 见结构定义及所属功能文档 |

## parseDoorSound

导出接口 · 源码第 9 行。

```ts
export function parseDoorSound(raw: unknown): DoorSound;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseDoorSignal

导出接口 · 源码第 10 行。

```ts
export function parseDoorSignal(raw: unknown): DoorSignal;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## doorSoundGain

导出接口 · 源码第 11 行。

```ts
export function doorSoundGain(wall: SceneWall, listeners: readonly ScenePoint[], gm?: boolean): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `wall` | 否 | `SceneWall` | — |
| `listeners` | 否 | `readonly ScenePoint[]` | — |
| `gm` | 是 | `boolean` | false |

## publicDoorMedia

导出接口 · 源码第 16 行。

```ts
export function publicDoorMedia(wall: SceneWall, assets: readonly{path:string;public?:boolean}[]): SceneWall;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `wall` | 否 | `SceneWall` | — |
| `assets` | 否 | `readonly{path:string;public?:boolean}[]` | — |

## DoorSignalTracker

导出接口 · 源码第 22 行。

State refreshes/config edits never replay an old door event. Rejoining seeds a new baseline.

```ts
export class DoorSignalTracker {
  update(scene: string | null, walls: readonly SceneWall[]): SceneWall[];
}
```
