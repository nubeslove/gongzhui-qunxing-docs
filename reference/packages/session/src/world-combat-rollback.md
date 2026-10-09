# game/packages/session/src/world-combat-rollback.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {revertCombatJournal} from './combat-journal';
import {emptyStory,recordCheckpoint,storyGm,type RollbackKind} from '@aelzerant/contracts';
import type {WorldDocument} from './world-types';
```
</details>

## recordWorldCombatCheckpoint

导出接口 · 源码第 4 行。

```ts
export function recordWorldCombatCheckpoint(before: WorldDocument, next: WorldDocument, action: Record<string,unknown>): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `before` | 否 | `WorldDocument` | — |
| `next` | 否 | `WorldDocument` | — |
| `action` | 否 | `Record<string,unknown>` | — |

## restoreWorldCombatCheckpoint

导出接口 · 源码第 19 行。

```ts
export function restoreWorldCombatCheckpoint(world: WorldDocument, sender: string, action: Record<string,unknown>): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `sender` | 否 | `string` | — |
| `action` | 否 | `Record<string,unknown>` | — |
