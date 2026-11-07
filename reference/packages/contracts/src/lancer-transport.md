# game/packages/contracts/src/lancer-transport.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {storyObject,storyText,storyNumber,storyEnum,storyList} from './story';
```
</details>

## LancerTransport

导出接口 · 源码第 3 行。

Authoritative continuation for official escort/evacuation, never supplied by a client command.

```ts
export interface LancerTransport {
    npcEvacuation?: 'alone';
    scene: string;
    timing: 'own' | 'any';
    regions: string[];
    targets: string[];
    units: string[];
    objects: string[];
    following?: {
        unit: string;
        turn: number;
        remaining: number;
        targets: string[];
    };
    request?: string;
    window?: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `npcEvacuation` | 是 | `'alone'` | 见结构定义及所属功能文档 |
| `scene` | 否 | `string` | 见结构定义及所属功能文档 |
| `timing` | 否 | `'own'&#124;'any'` | 见结构定义及所属功能文档 |
| `regions` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `targets` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `units` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `objects` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `following` | 是 | `{unit:string;turn:number;remaining:number;targets:string[]}` | 见结构定义及所属功能文档 |
| `following.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `following.turn` | 否 | `number` | 见结构定义及所属功能文档 |
| `following.remaining` | 否 | `number` | 见结构定义及所属功能文档 |
| `following.targets` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `request` | 是 | `string` | 见结构定义及所属功能文档 |
| `window` | 是 | `number` | 见结构定义及所属功能文档 |

## parseLancerTransport

导出接口 · 源码第 8 行。

```ts
export function parseLancerTransport(raw: unknown): LancerTransport;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
