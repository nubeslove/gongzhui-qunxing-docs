# game/packages/contracts/src/compendium-migration.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseCompendiumBody,type CompendiumBody} from './compendium';
import {remapCompendiumReferences} from './compendium-reference';
import {mapArchiveStrings} from './scene-archive-content';
```
</details>

## rebaseCompendiumBody

导出接口 · 源码第 5 行。

Only self-pack addresses rebase; external pack UUIDs and source-world provenance stay explicit.

```ts
export function rebaseCompendiumBody(body: CompendiumBody, fromPack: string, toPack: string): CompendiumBody;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `body` | 否 | `CompendiumBody` | — |
| `fromPack` | 否 | `string` | — |
| `toPack` | 否 | `string` | — |
