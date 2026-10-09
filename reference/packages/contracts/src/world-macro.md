# game/packages/contracts/src/world-macro.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {storyObject as obj,storyList as list,storyId as id,storyNumber as num,storyText as text} from './story';
```
</details>

## MacroArgs

导出接口 · 源码第 2 行。

```ts
export type MacroArgs = Record<string, string | number | boolean | null>;
```

## parseMacroArgs

导出接口 · 源码第 3 行。

```ts
export function parseMacroArgs(raw: unknown): MacroArgs;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## macroText

导出接口 · 源码第 4 行。

```ts
export function macroText(body: string, args: MacroArgs): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `body` | 否 | `string` | — |
| `args` | 否 | `MacroArgs` | — |

## MacroBar

导出接口 · 源码第 5 行。

```ts
export interface MacroBar {
    revision: number;
    page: number;
    slots: (string | null)[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `page` | 否 | `number` | 见结构定义及所属功能文档 |
| `slots` | 否 | `(string&#124;null)[]` | 见结构定义及所属功能文档 |

## emptyMacroBar

导出接口 · 源码第 6 行。

```ts
export const emptyMacroBar: (): MacroBar;
```

## parseMacroBar

导出接口 · 源码第 7 行。

```ts
export function parseMacroBar(raw: unknown): MacroBar;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseMacroBars

导出接口 · 源码第 8 行。

```ts
export function parseMacroBars(raw: unknown): Record<string,MacroBar>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
