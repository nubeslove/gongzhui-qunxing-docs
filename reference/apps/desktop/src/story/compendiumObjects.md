# game/apps/desktop/src/story/compendiumObjects.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {COMPENDIUM_LIMITS,canonicalJson,compendiumHash} from '@aelzerant/contracts';
```
</details>

## CompendiumObjects

导出接口 · 源码第 2 行。

```ts
export interface CompendiumObjects {
    read(hash: string): Promise<string | undefined>;
    write(hash: string, text: string): Promise<void>;
}
```

## compendiumObjectHash

导出接口 · 源码第 3 行。

```ts
export function compendiumObjectHash(text: string): Promise<string>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `text` | 否 | `string` | — |

## writeCompendiumObject

导出接口 · 源码第 4 行。

```ts
export function writeCompendiumObject(store: CompendiumObjects, value: unknown): Promise<string>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `store` | 否 | `CompendiumObjects` | — |
| `value` | 否 | `unknown` | — |

## readCompendiumObject

导出接口 · 源码第 5 行。

```ts
export function readCompendiumObject(store: CompendiumObjects, hash: string): Promise<unknown>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `store` | 否 | `CompendiumObjects` | — |
| `hash` | 否 | `string` | — |
