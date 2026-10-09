# game/packages/session/src/library-delete.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {WorldLibrary} from '@aelzerant/contracts';
```
</details>

## deleteLibraryDocuments

导出接口 · 源码第 3 行。

Single and folder deletion share all dependency checks; callers own permission and atomic persistence.

```ts
export function deleteLibraryDocuments(library: WorldLibrary, ids: ReadonlySet<string>, removeDirectoryEntries?: boolean): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `library` | 否 | `WorldLibrary` | — |
| `ids` | 否 | `ReadonlySet<string>` | — |
| `removeDirectoryEntries` | 是 | `boolean` | true |
