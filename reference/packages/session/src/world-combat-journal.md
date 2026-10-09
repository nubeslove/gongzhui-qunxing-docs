# game/packages/session/src/world-combat-journal.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {attributeModifier} from '@aelzerant/game-core';
import {emptyStory,sceneMeasuredDistance,SCENE_MEASUREMENT_DEFAULTS,type CombatCard,type CombatTrace,type StoryMessage} from '@aelzerant/contracts';
import type {WorldDocument,WorldAction} from './world-types';
import {recordCombatSettlement,storyRollStep} from './combat-journal';
```
</details>

## recordWorldCombatJournal

导出接口 · 源码第 5 行。

```ts
export function recordWorldCombatJournal(before: WorldDocument, next: WorldDocument, action: WorldAction, sender: string, now: number): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `before` | 否 | `WorldDocument` | — |
| `next` | 否 | `WorldDocument` | — |
| `action` | 否 | `WorldAction` | — |
| `sender` | 否 | `string` | — |
| `now` | 否 | `number` | — |
