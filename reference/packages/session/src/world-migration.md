# game/packages/session/src/world-migration.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import { restoreBattle, type BattleSave } from "./battle-authority";
import { WorldAuthority } from "./world-authority";
import { restoreWorld } from "./world-persistence";
import { actorProfile } from "./world-validation";
```
</details>

## migrateBattleWorld

导出接口 · 源码第 7 行。

Preserve old battle state and random stream; the old record remains untouched.

```ts
export function migrateBattleWorld(value: BattleSave, name: string): import("@source/packages/session/src/world-types").WorldDocument;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `BattleSave` | — |
| `name` | 否 | `string` | — |
