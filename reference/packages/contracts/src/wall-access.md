# game/packages/contracts/src/wall-access.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {storyObject,storyText,storyList,storyEnum} from './story';
```
</details>

## WallAccessCondition

导出接口 · 源码第 4 行。

Author-authored conditions. Resolution belongs to each ruleset; these never grant access by themselves.

```ts
export interface WallAccessCondition {
    kind: 'gm' | 'check' | 'spell' | 'item';
    detail: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `'gm'&#124;'check'&#124;'spell'&#124;'item'` | 见结构定义及所属功能文档 |
| `detail` | 否 | `string` | 见结构定义及所属功能文档 |

## WallAccess

导出接口 · 源码第 5 行。

```ts
export interface WallAccess {
    unlock: WallAccessCondition[];
    discover: WallAccessCondition[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `unlock` | 否 | `WallAccessCondition[]` | 见结构定义及所属功能文档 |
| `discover` | 否 | `WallAccessCondition[]` | 见结构定义及所属功能文档 |

## parseWallAccess

导出接口 · 源码第 7 行。

```ts
export function parseWallAccess(raw: unknown): WallAccess;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
