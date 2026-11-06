# game/packages/contracts/src/lancer-starting-grants.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {storyObject,storyList,storyId,storyText,storyNumber,storyEnum} from './story';
```
</details>

## LancerStartingGrant

导出接口 · 源码第 2 行。

```ts
export type LancerStartingGrant = {
    id: string;
    kind: 'skills' | 'triggers' | 'talents' | 'sp';
    amount: number;
    target?: string;
    reason: string;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `kind` | 否 | `'skills'&#124;'triggers'&#124;'talents'&#124;'sp'` | 见结构定义及所属功能文档 |
| `amount` | 否 | `number` | 见结构定义及所属功能文档 |
| `target` | 是 | `string` | 见结构定义及所属功能文档 |
| `reason` | 否 | `string` | 见结构定义及所属功能文档 |

## parseLancerStartingGrants

导出接口 · 源码第 3 行。

```ts
export function parseLancerStartingGrants(raw: unknown): LancerStartingGrant[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
