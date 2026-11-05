# game/packages/contracts/src/team-assets.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {storyId,storyList,storyNumber,storyObject,storyText} from './story';
```
</details>

## TeamAsset

导出接口 · 源码第 2 行。

```ts
export interface TeamAsset {
    id: string;
    name: string;
    unit: string;
    total: number;
    notes: string;
    held: Record<string, number>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `total` | 否 | `number` | 见结构定义及所属功能文档 |
| `notes` | 否 | `string` | 见结构定义及所属功能文档 |
| `held` | 否 | `Record<string,number>` | 见结构定义及所属功能文档 |

## BaseFacility

导出接口 · 源码第 3 行。

```ts
export interface BaseFacility {
    id: string;
    name: string;
    status: string;
    notes: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `status` | 否 | `string` | 见结构定义及所属功能文档 |
| `notes` | 否 | `string` | 见结构定义及所属功能文档 |

## TeamAssets

导出接口 · 源码第 4 行。

```ts
export interface TeamAssets {
    revision: number;
    baseName: string;
    assets: TeamAsset[];
    facilities: BaseFacility[];
    history: {
        id: string;
        at: number;
        operator: string;
        text: string;
    }[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `baseName` | 否 | `string` | 见结构定义及所属功能文档 |
| `assets` | 否 | `TeamAsset[]` | 见结构定义及所属功能文档 |
| `facilities` | 否 | `BaseFacility[]` | 见结构定义及所属功能文档 |
| `history` | 否 | `{id:string;at:number;operator:string;text:string}[]` | 见结构定义及所属功能文档 |
| `history.[].id` | 否 | `string` | 见结构定义及所属功能文档 |
| `history.[].at` | 否 | `number` | 见结构定义及所属功能文档 |
| `history.[].operator` | 否 | `string` | 见结构定义及所属功能文档 |
| `history.[].text` | 否 | `string` | 见结构定义及所属功能文档 |

## emptyTeamAssets

导出接口 · 源码第 5 行。

```ts
export const emptyTeamAssets: (): TeamAssets;
```

## assetCount

导出接口 · 源码第 6 行。

```ts
export function assetCount(raw: unknown): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseTeamAssets

导出接口 · 源码第 7 行。

```ts
export function parseTeamAssets(raw: unknown): TeamAssets;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## TeamAssetsCommand

导出接口 · 源码第 12 行。

```ts
export type TeamAssetsCommand = {
    type: 'team.asset.save';
    value: Omit<TeamAsset, 'held'>;
    expectedRevision: number;
} | {
    type: 'team.asset.delete';
    id: string;
    expectedRevision: number;
} | {
    type: 'team.asset.transfer';
    id: string;
    operation: 'take' | 'return';
    quantity: number;
    memberId?: string;
    expectedRevision: number;
} | {
    type: 'team.base.save';
    name: string;
    expectedRevision: number;
} | {
    type: 'team.facility.save';
    value: BaseFacility;
    expectedRevision: number;
} | {
    type: 'team.facility.delete';
    id: string;
    expectedRevision: number;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.type` | 否 | `'team.asset.save'` | 见结构定义及所属功能文档 |
| `分支1.value` | 否 | `Omit<TeamAsset,'held'>` | 见结构定义及所属功能文档 |
| `分支1.expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支2.type` | 否 | `'team.asset.delete'` | 见结构定义及所属功能文档 |
| `分支2.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支3.type` | 否 | `'team.asset.transfer'` | 见结构定义及所属功能文档 |
| `分支3.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.operation` | 否 | `'take'&#124;'return'` | 见结构定义及所属功能文档 |
| `分支3.quantity` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支3.memberId` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支3.expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支4.type` | 否 | `'team.base.save'` | 见结构定义及所属功能文档 |
| `分支4.name` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支5.type` | 否 | `'team.facility.save'` | 见结构定义及所属功能文档 |
| `分支5.value` | 否 | `BaseFacility` | 见结构定义及所属功能文档 |
| `分支5.expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支6.type` | 否 | `'team.facility.delete'` | 见结构定义及所属功能文档 |
| `分支6.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支6.expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |
