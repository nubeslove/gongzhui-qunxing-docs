# game/packages/contracts/src/lancer-scene.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ManualBlock, ManualMap, ManualToken} from './tabletop';
import type {SceneFeatures} from './scene-features';
```
</details>

## LancerSceneAction

导出接口 · 源码第 4 行。

```ts
export interface LancerSceneAction {
    id: string;
    name: string;
    cost: 'quick' | 'full' | 'free';
    range: number;
    target: string;
    enabled: boolean;
    once?: boolean;
    effects?: LancerSceneEffect[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `cost` | 否 | `'quick'&#124;'full'&#124;'free'` | 见结构定义及所属功能文档 |
| `range` | 否 | `number` | 见结构定义及所属功能文档 |
| `target` | 否 | `string` | 见结构定义及所属功能文档 |
| `enabled` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `once` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `effects` | 是 | `LancerSceneEffect[]` | 见结构定义及所属功能文档 |

## LancerSceneEffect

导出接口 · 源码第 9 行。

```ts
export type LancerSceneEffect = {
    kind: 'state';
    target: string;
    enabled: boolean;
    allowFall?: boolean;
} | {
    kind: 'create';
    template: string;
    id: string;
    x: number;
    y: number;
    z: number;
    rotation: number;
    from?: {
        x: number;
        y: number;
        z: number;
    };
} | {
    kind: 'remove';
    target: string;
} | {
    kind: 'hazard';
    area: string;
    damage: string;
    damageType: 'kinetic' | 'energy' | 'explosive' | 'burn' | 'heat';
    save?: {
        skill: 'hull' | 'agility' | 'systems' | 'engineering';
        dc: number;
        half: boolean;
    };
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.kind` | 否 | `'state'` | 见结构定义及所属功能文档 |
| `分支1.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.enabled` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支1.allowFall` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支2.kind` | 否 | `'create'` | 见结构定义及所属功能文档 |
| `分支2.template` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.x` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支2.y` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支2.z` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支2.rotation` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支2.from` | 是 | `{x:number;y:number;z:number}` | 见结构定义及所属功能文档 |
| `分支2.from.x` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支2.from.y` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支2.from.z` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支3.kind` | 否 | `'remove'` | 见结构定义及所属功能文档 |
| `分支3.target` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.kind` | 否 | `'hazard'` | 见结构定义及所属功能文档 |
| `分支4.area` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.damage` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.damageType` | 否 | `'kinetic'&#124;'energy'&#124;'explosive'&#124;'burn'&#124;'heat'` | 见结构定义及所属功能文档 |
| `分支4.save` | 是 | `{skill:'hull'&#124;'agility'&#124;'systems'&#124;'engineering';dc:number;half:boolean}` | 见结构定义及所属功能文档 |
| `分支4.save.skill` | 否 | `'hull'&#124;'agility'&#124;'systems'&#124;'engineering'` | 见结构定义及所属功能文档 |
| `分支4.save.dc` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支4.save.half` | 否 | `boolean` | 见结构定义及所属功能文档 |

## LancerSceneState

导出接口 · 源码第 15 行。

Alternative mesh and physical volume, expressed relative to the base object's centre.

```ts
export interface LancerSceneState {
    name: string;
    model?: string;
    width: number;
    depth: number;
    height: number;
    offsetX: number;
    offsetY: number;
    offsetZ: number;
    solid: boolean;
    sight: boolean;
    cover: 'none' | 'soft' | 'hard';
    walkable: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `model` | 是 | `string` | 见结构定义及所属功能文档 |
| `width` | 否 | `number` | 见结构定义及所属功能文档 |
| `depth` | 否 | `number` | 见结构定义及所属功能文档 |
| `height` | 否 | `number` | 见结构定义及所属功能文档 |
| `offsetX` | 否 | `number` | 见结构定义及所属功能文档 |
| `offsetY` | 否 | `number` | 见结构定义及所属功能文档 |
| `offsetZ` | 否 | `number` | 见结构定义及所属功能文档 |
| `solid` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `sight` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `cover` | 否 | `'none'&#124;'soft'&#124;'hard'` | 见结构定义及所属功能文档 |
| `walkable` | 否 | `boolean` | 见结构定义及所属功能文档 |

## LancerSceneObject

导出接口 · 源码第 19 行。

```ts
export interface LancerSceneObject {
    solid: boolean;
    sight: boolean;
    cover: 'none' | 'soft' | 'hard';
    walkable: boolean;
    enabled: boolean;
    durability?: {
        hp: number;
        maxHp: number;
        armor: number;
        evasion: number;
    };
    actions: LancerSceneAction[];
    activeName?: string;
    inactive?: LancerSceneState | null;
    template?: boolean;
    used?: string[];
    entrance?: {
        id: string;
        from: {
            x: number;
            y: number;
            z: number;
        };
    };
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `solid` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `sight` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `cover` | 否 | `'none'&#124;'soft'&#124;'hard'` | 见结构定义及所属功能文档 |
| `walkable` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `enabled` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `durability` | 是 | `{hp:number;maxHp:number;armor:number;evasion:number}` | 见结构定义及所属功能文档 |
| `durability.hp` | 否 | `number` | 见结构定义及所属功能文档 |
| `durability.maxHp` | 否 | `number` | 见结构定义及所属功能文档 |
| `durability.armor` | 否 | `number` | 见结构定义及所属功能文档 |
| `durability.evasion` | 否 | `number` | 见结构定义及所属功能文档 |
| `actions` | 否 | `LancerSceneAction[]` | 见结构定义及所属功能文档 |
| `activeName` | 是 | `string` | 见结构定义及所属功能文档 |
| `inactive` | 是 | `LancerSceneState&#124;null` | 见结构定义及所属功能文档 |
| `template` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `used` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `entrance` | 是 | `{id:string;from:{x:number;y:number;z:number}}` | 见结构定义及所属功能文档 |
| `entrance.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `entrance.from` | 否 | `{x:number;y:number;z:number}` | 见结构定义及所属功能文档 |
| `entrance.from.x` | 否 | `number` | 见结构定义及所属功能文档 |
| `entrance.from.y` | 否 | `number` | 见结构定义及所属功能文档 |
| `entrance.from.z` | 否 | `number` | 见结构定义及所属功能文档 |

## lancerObject

导出接口 · 源码第 27 行。

```ts
export function lancerObject(block: ManualBlock): LancerSceneObject;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `block` | 否 | `ManualBlock` | — |

## lancerObjectActive

导出接口 · 源码第 34 行。

```ts
export const lancerObjectActive: (b: ManualBlock): boolean;
```

## lancerEffectiveBlock

导出接口 · 源码第 35 行。

```ts
export function lancerEffectiveBlock(block: ManualBlock): ManualBlock;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `block` | 否 | `ManualBlock` | — |

## lancerObjectId

导出接口 · 源码第 41 行。

```ts
export const lancerObjectId: (blockId: string): string;
```

## lancerObjectToken

导出接口 · 源码第 42 行。

```ts
export function lancerObjectToken(b: ManualBlock): ManualToken;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `ManualBlock` | — |

## lancerLitFeatures

导出接口 · 源码第 47 行。

LANCER does not use dungeon exploration lighting; smoke/regions remain meaningful.

```ts
export function lancerLitFeatures(f: SceneFeatures|undefined): SceneFeatures|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `f` | 否 | `SceneFeatures&#124;undefined` | — |

## lancerLitMap

导出接口 · 源码第 52 行。

```ts
export const lancerLitMap: (map: ManualMap): ManualMap;
```

## parseLancerSceneObject

导出接口 · 源码第 53 行。

```ts
export function parseLancerSceneObject(raw: unknown): LancerSceneObject;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseLancerSceneEffect

导出接口 · 源码第 71 行。

```ts
export function parseLancerSceneEffect(raw: unknown): LancerSceneEffect;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
