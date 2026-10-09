# game/packages/session/src/battle-repository.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import { isId } from "@aelzerant/contracts";
import { restoreBattle, type BattleSave } from "./battle-authority";
```
</details>

## SaveStorage

导出接口 · 源码第 4 行。

```ts
export interface SaveStorage {
    get(key: string): string | null;
    set(key: string, value: string): void;
    remove(key: string): void;
}
```

## BattleRepository

导出接口 · 源码第 10 行。

Storage.set must atomically replace one record (localStorage / transactional DB adapter).

```ts
export class BattleRepository {
  constructor(storage: SaveStorage, worldId: string, hostId: string);
  load(): { save: BattleSave; recovered: boolean; } | null;
  save(value: BattleSave): void;
  export(): string | null;
  import(raw: string): void;
  delete(): void;
}
```
