# game/packages/session/src/world-repository.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type { SaveStorage } from "./battle-repository";
import { restoreWorld } from "./world-persistence";
import type { WorldDocument } from "./world-types";
import { requireId } from "./world-validation";
```
</details>

## WorldRepository

导出接口 · 源码第 7 行。

Atomic single-record commits; explicit imports can repair corrupt records.

```ts
export class WorldRepository {
  constructor(storage: SaveStorage, worldId: string, hostId: string);
  load(): { save: WorldDocument; recovered: boolean; } | null;
  save(value: WorldDocument): void;
  export(): string | null;
  import(raw: string): WorldDocument;
}
```
