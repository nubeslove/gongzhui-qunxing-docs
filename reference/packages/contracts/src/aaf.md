# game/packages/contracts/src/aaf.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseAafBuild, parseAafPhysical, type AafBuild, type AafPhysicalItem} from './aaf-build';
```
</details>

## AafCell

导出接口 · 源码第 3 行。

AAF resources are data. Character acquisitions keep their definition snapshot.

```ts
export type AafCell = {
    x: number;
    y: number;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `x` | 否 | `number` | 见结构定义及所属功能文档 |
| `y` | 否 | `number` | 见结构定义及所属功能文档 |

## AafRotation

导出接口 · 源码第 4 行。

```ts
export type AafRotation = 0 | 1 | 2 | 3;
```

## AafDirection

导出接口 · 源码第 5 行。

```ts
export type AafDirection = 'up' | 'right' | 'down' | 'left';
```

## AafTalentNode

导出接口 · 源码第 6 行。

```ts
export interface AafTalentNode {
    id: string;
    name: string;
    branch: string;
    description: string;
    cost: number;
    requires: string[];
    x: number;
    y: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `branch` | 否 | `string` | 见结构定义及所属功能文档 |
| `description` | 否 | `string` | 见结构定义及所属功能文档 |
| `cost` | 否 | `number` | 见结构定义及所属功能文档 |
| `requires` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `x` | 否 | `number` | 见结构定义及所属功能文档 |
| `y` | 否 | `number` | 见结构定义及所属功能文档 |

## AafRange

导出接口 · 源码第 10 行。

```ts
export interface AafRange {
    id: string;
    label: string;
    mode: 'adjacent' | 'direction' | 'diagonal' | 'ring' | 'cells' | 'ray' | 'row' | 'column' | 'edge' | 'corners' | 'all';
    direction?: AafDirection;
    distance?: number;
    cells?: AafCell[];
    transfer?: 'specified';
    targets: string[];
    negative?: boolean;
    scope: 'equipment' | 'bearer';
    stack: number;
    targetKind?: 'rune';
    blueprints?: string[];
    selected?: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `label` | 否 | `string` | 见结构定义及所属功能文档 |
| `mode` | 否 | `'adjacent' &#124; 'direction' &#124; 'diagonal' &#124; 'ring' &#124; 'cells' &#124; 'ray' &#124; 'row' &#124; 'column' &#124; 'edge' &#124; 'corners' &#124; 'all'` | 见结构定义及所属功能文档 |
| `direction` | 是 | `AafDirection` | 见结构定义及所属功能文档 |
| `distance` | 是 | `number` | 见结构定义及所属功能文档 |
| `cells` | 是 | `AafCell[]` | 见结构定义及所属功能文档 |
| `transfer` | 是 | `'specified'` | 见结构定义及所属功能文档 |
| `targets` | 否 | `string[]` | Any matching tag qualifies. Empty means any magical equipment. |
| `negative` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `scope` | 否 | `'equipment' &#124; 'bearer'` | 见结构定义及所属功能文档 |
| `stack` | 否 | `number` | 见结构定义及所属功能文档 |
| `targetKind` | 是 | `'rune'` | Some inscriptions affect another rune rather than an equipment block. |
| `blueprints` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `selected` | 是 | `boolean` | 见结构定义及所属功能文档 |

## AafItemDefinition

导出接口 · 源码第 20 行。

```ts
export interface AafItemDefinition {
    id: string;
    name: string;
    description: string;
    category: string;
    kind: 'equipment' | 'rune' | 'socket';
    shape: AafCell[];
    rotatable: boolean;
    installation: 'equipment' | 'independent' | 'embedded' | 'gem';
    tags: string[];
    slots: string[];
    hostTags: string[];
    sockets: number;
    ranges: AafRange[];
    maxUses: number;
    rarity: string;
    physical?: AafPhysicalItem;
    socketPolicy?: 'no-shape' | 'distinct';
    coverage?: {
        label: string;
        groups: {
            zones: string[];
            tags: string[];
        }[];
        minimum: number;
        distinct: 'none' | 'items' | 'blueprints';
    }[];
    maxActiveCopies?: number;
    useGrant?: string;
    relation?: 'long-slot' | 'double-deck' | 'embrace' | 'bridge' | 'probe' | 'guide';
    relay?: boolean;
    outlets?: {
        origin: AafCell;
        direction: AafDirection;
        relations: ('adjacent' | 'direction')[];
    }[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `description` | 否 | `string` | 见结构定义及所属功能文档 |
| `category` | 否 | `string` | 见结构定义及所属功能文档 |
| `kind` | 否 | `'equipment' &#124; 'rune' &#124; 'socket'` | 见结构定义及所属功能文档 |
| `shape` | 否 | `AafCell[]` | 见结构定义及所属功能文档 |
| `rotatable` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `installation` | 否 | `'equipment' &#124; 'independent' &#124; 'embedded' &#124; 'gem'` | 见结构定义及所属功能文档 |
| `tags` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `slots` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `hostTags` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `sockets` | 否 | `number` | 见结构定义及所属功能文档 |
| `ranges` | 否 | `AafRange[]` | 见结构定义及所属功能文档 |
| `maxUses` | 否 | `number` | 见结构定义及所属功能文档 |
| `rarity` | 否 | `string` | 见结构定义及所属功能文档 |
| `physical` | 是 | `AafPhysicalItem` | 见结构定义及所属功能文档 |
| `socketPolicy` | 是 | `'no-shape' &#124; 'distinct'` | 见结构定义及所属功能文档 |
| `coverage` | 是 | `{ label: string; groups: { zones: string[]; tags: string[] }[]; minimum: number; distinct: 'none' &#124; 'items' &#124; 'blueprints' }[]` | Each group is a position/type requirement. Distinct groups may need distinct physical items or blueprints. |
| `coverage.[].label` | 否 | `string` | 见结构定义及所属功能文档 |
| `coverage.[].groups` | 否 | `{ zones: string[]; tags: string[] }[]` | 见结构定义及所属功能文档 |
| `coverage.[].groups.[].zones` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `coverage.[].groups.[].tags` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `coverage.[].minimum` | 否 | `number` | 见结构定义及所属功能文档 |
| `coverage.[].distinct` | 否 | `'none' &#124; 'items' &#124; 'blueprints'` | 见结构定义及所属功能文档 |
| `maxActiveCopies` | 是 | `number` | 见结构定义及所属功能文档 |
| `useGrant` | 是 | `string` | Supplies a separately tracked extra use to the rune selected in this range. |
| `relation` | 是 | `'long-slot' &#124; 'double-deck' &#124; 'embrace' &#124; 'bridge' &#124; 'probe' &#124; 'guide'` | 见结构定义及所属功能文档 |
| `relay` | 是 | `boolean` | A relay may not itself be relayed or placed inside a socket. |
| `outlets` | 是 | `{ origin: AafCell; direction: AafDirection; relations: ('adjacent' &#124; 'direction')[] }[]` | 见结构定义及所属功能文档 |
| `outlets.[].origin` | 否 | `AafCell` | 见结构定义及所属功能文档 |
| `outlets.[].direction` | 否 | `AafDirection` | 见结构定义及所属功能文档 |
| `outlets.[].relations` | 否 | `('adjacent' &#124; 'direction')[]` | 见结构定义及所属功能文档 |

## AafCatalog

导出接口 · 源码第 37 行。

```ts
export interface AafCatalog {
    version: 1;
    revision: string;
    talents: AafTalentNode[];
    items: AafItemDefinition[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `version` | 否 | `1` | 见结构定义及所属功能文档 |
| `revision` | 否 | `string` | 见结构定义及所属功能文档 |
| `talents` | 否 | `AafTalentNode[]` | 见结构定义及所属功能文档 |
| `items` | 否 | `AafItemDefinition[]` | 见结构定义及所属功能文档 |

## AafLearnedTalent

导出接口 · 源码第 38 行。

```ts
export interface AafLearnedTalent {
    node: AafTalentNode;
    paid: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `node` | 否 | `AafTalentNode` | 见结构定义及所属功能文档 |
| `paid` | 否 | `number` | 见结构定义及所属功能文档 |

## AafItemInstance

导出接口 · 源码第 39 行。

```ts
export interface AafItemInstance {
    id: string;
    definition: AafItemDefinition;
    equipped: boolean;
    slot: string;
    hostId?: string;
    remaining: number;
    defective?: boolean;
    quantity?: number;
    bagIndex?: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `definition` | 否 | `AafItemDefinition` | 见结构定义及所属功能文档 |
| `equipped` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `slot` | 否 | `string` | 见结构定义及所属功能文档 |
| `hostId` | 是 | `string` | 见结构定义及所属功能文档 |
| `remaining` | 否 | `number` | 见结构定义及所属功能文档 |
| `defective` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `quantity` | 是 | `number` | 见结构定义及所属功能文档 |
| `bagIndex` | 是 | `number` | 见结构定义及所属功能文档 |

## AafPlacement

导出接口 · 源码第 40 行。

```ts
export interface AafPlacement extends AafCell {
    id: string;
    rotation: AafRotation;
    containerId?: string;
    blocked?: AafCell;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `rotation` | 否 | `AafRotation` | 见结构定义及所属功能文档 |
| `containerId` | 是 | `string` | 见结构定义及所属功能文档 |
| `blocked` | 是 | `AafCell` | 见结构定义及所属功能文档 |

## AafCharacter

导出接口 · 源码第 41 行。

```ts
export interface AafCharacter {
    version: 1;
    revision: number;
    level: number;
    extraTp: number;
    learning: 'creation' | 'level-up' | 'long-rest' | 'item' | 'closed';
    learned: AafLearnedTalent[];
    items: AafItemInstance[];
    placements: AafPlacement[];
    uses: Record<string, number>;
    automatic: string[];
    targets: Record<string, string[]>;
    build?: AafBuild;
    buildDraft?: AafBuild;
    buildApplied?: boolean;
    purseSp?: number;
    rolls?: number[][];
    gearBase?: {
        ac: number;
        speed: number;
    };
    activeHand?: '左手' | '右手';
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `version` | 否 | `1` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `level` | 否 | `number` | 见结构定义及所属功能文档 |
| `extraTp` | 否 | `number` | 见结构定义及所属功能文档 |
| `learning` | 否 | `'creation' &#124; 'level-up' &#124; 'long-rest' &#124; 'item' &#124; 'closed'` | 见结构定义及所属功能文档 |
| `learned` | 否 | `AafLearnedTalent[]` | 见结构定义及所属功能文档 |
| `items` | 否 | `AafItemInstance[]` | 见结构定义及所属功能文档 |
| `placements` | 否 | `AafPlacement[]` | 见结构定义及所属功能文档 |
| `uses` | 否 | `Record<string, number>` | 见结构定义及所属功能文档 |
| `automatic` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `targets` | 否 | `Record<string, string[]>` | 见结构定义及所属功能文档 |
| `build` | 是 | `AafBuild` | 见结构定义及所属功能文档 |
| `buildDraft` | 是 | `AafBuild` | 见结构定义及所属功能文档 |
| `buildApplied` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `purseSp` | 是 | `number` | 见结构定义及所属功能文档 |
| `rolls` | 是 | `number[][]` | 见结构定义及所属功能文档 |
| `gearBase` | 是 | `{ac:number;speed:number}` | 见结构定义及所属功能文档 |
| `gearBase.ac` | 否 | `number` | 见结构定义及所属功能文档 |
| `gearBase.speed` | 否 | `number` | 见结构定义及所属功能文档 |
| `activeHand` | 是 | `'左手'&#124;'右手'` | 见结构定义及所属功能文档 |

## emptyAafCharacter

导出接口 · 源码第 48 行。

```ts
export const emptyAafCharacter: (): AafCharacter;
```

## parseAafTalent

导出接口 · 源码第 62 行。

```ts
export function parseAafTalent(v: unknown): AafTalentNode;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v` | 否 | `unknown` | — |

## parseAafItemDefinition

导出接口 · 源码第 65 行。

```ts
export function parseAafItemDefinition(v: unknown): AafItemDefinition;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v` | 否 | `unknown` | — |

## parseAafCatalog

导出接口 · 源码第 99 行。

```ts
export function parseAafCatalog(v: unknown): AafCatalog;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v` | 否 | `unknown` | — |

## parseAafCharacter

导出接口 · 源码第 107 行。

```ts
export function parseAafCharacter(v: unknown): AafCharacter;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v` | 否 | `unknown` | — |
