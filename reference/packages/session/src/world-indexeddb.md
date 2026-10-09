# game/packages/session/src/world-indexeddb.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import { restoreWorld } from "./world-persistence";
import type { WorldDocument } from "./world-types";
import { requireId } from "./world-validation";
```
</details>

## IndexedDBWorldRepository

导出接口 · 源码第 6 行。

Large world records and backup are one IndexedDB transaction, not localStorage strings.

```ts
export class IndexedDBWorldRepository {
  constructor(worldId: string, hostId: string, name?: string);
  load(): Promise<{ save: WorldDocument; recovered: boolean; } | null>;
  save(world: WorldDocument): Promise<void>;
  import(raw: string): Promise<WorldDocument>;
}
```
