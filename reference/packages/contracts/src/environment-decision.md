# game/packages/contracts/src/environment-decision.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {storyObject as obj,storyText as text,storyNumber as num,storyId as id,storyEnum as one,storyList as list} from './story';
import {parseEnvironmentEffect,type EnvironmentEffect} from './scene-environment';
import type {ScenePoint} from './scene-features';
```
</details>

## EnvironmentDecision

导出接口 · 源码第 4 行。

```ts
export interface EnvironmentDecision {
    phase: 'jump' | 'climb' | 'fall' | 'effect';
    turn?: string;
    sceneId: string;
    tokenId: string;
    actorId: string;
    name: string;
    origin: ScenePoint;
    path?: ScenePoint[];
    checks?: string[];
    signature?: string;
    effect: EnvironmentEffect;
    failure?: 'return' | 'fall' | 'gm';
    resolution?: {
        outcome: 'success' | 'return' | 'fall' | 'apply' | 'cancel';
        point?: ScenePoint;
        effect?: EnvironmentEffect;
    };
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `phase` | 否 | `'jump'&#124;'climb'&#124;'fall'&#124;'effect'` | 见结构定义及所属功能文档 |
| `turn` | 是 | `string` | 见结构定义及所属功能文档 |
| `sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `tokenId` | 否 | `string` | 见结构定义及所属功能文档 |
| `actorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `origin` | 否 | `ScenePoint` | 见结构定义及所属功能文档 |
| `path` | 是 | `ScenePoint[]` | 见结构定义及所属功能文档 |
| `checks` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `signature` | 是 | `string` | 见结构定义及所属功能文档 |
| `effect` | 否 | `EnvironmentEffect` | 见结构定义及所属功能文档 |
| `failure` | 是 | `'return'&#124;'fall'&#124;'gm'` | 见结构定义及所属功能文档 |
| `resolution` | 是 | `{outcome:'success'&#124;'return'&#124;'fall'&#124;'apply'&#124;'cancel';point?:ScenePoint;effect?:EnvironmentEffect}` | 见结构定义及所属功能文档 |
| `resolution.outcome` | 否 | `'success'&#124;'return'&#124;'fall'&#124;'apply'&#124;'cancel'` | 见结构定义及所属功能文档 |
| `resolution.point` | 是 | `ScenePoint` | 见结构定义及所属功能文档 |
| `resolution.effect` | 是 | `EnvironmentEffect` | 见结构定义及所属功能文档 |

## environmentPoint

导出接口 · 源码第 10 行。

```ts
export const environmentPoint: (raw: unknown): ScenePoint;
```

## parseEnvironmentDecision

导出接口 · 源码第 11 行。

```ts
export function parseEnvironmentDecision(raw: unknown): EnvironmentDecision;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
