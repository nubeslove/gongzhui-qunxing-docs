# game/packages/rules-engine/src/dnd/triggers.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {DndCharacter,DndMagicJob} from '@aelzerant/contracts';
import {dndEntry} from './index';
```
</details>

## DndActionEvent

导出接口 · 源码第 5 行。

Reviewed rule events produce serializable effects, never executable text from a resource.

```ts
export type DndActionEvent = 'attack' | 'magic';
```

## dndActionTriggerJobs

导出接口 · 源码第 9 行。

```ts
export function dndActionTriggerJobs(character: DndCharacter, actor: string, event: DndActionEvent): DndMagicJob[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `character` | 否 | `DndCharacter` | — |
| `actor` | 否 | `string` | — |
| `event` | 否 | `DndActionEvent` | — |
