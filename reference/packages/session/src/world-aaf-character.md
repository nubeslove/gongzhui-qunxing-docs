# game/packages/session/src/world-aaf-character.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {AAF_ATTRS, parseAafBuild, type AafCharacter, type AafAttributes} from '@aelzerant/contracts';
import {AAF_CREATION, aafBuildAttrs, aafBuildCards, aafBuildIssues, aafBuildStats, aafEquip, aafEquipmentStats, aafRaceGrants,aafSkillBonus} from '@aelzerant/rules-engine';
import {nextRandom} from '@aelzerant/game-core';
import {isAafMovementSpeeds,aafSpeed} from '@aelzerant/contracts';
import type {ActorDocument,WorldDocument,WorldAction,WorldContext} from './world-types';
import {assertGm,requireId,requireInteger,requireText} from './world-validation';
```
</details>

## aafCharacterCommands

导出接口 · 源码第 8 行。

```ts
export const aafCharacterCommands = ['aaf.build.save', 'aaf.build.roll', 'aaf.gear.equip', 'aaf.gear.base', 'aaf.gear.buy', 'aaf.bag.move', 'aaf.bag.split', 'aaf.purse', 'aaf.hand', 'aaf.skill.roll', 'aaf.speed.set'];
```

## handleAafCharacter

导出接口 · 源码第 10 行。

```ts
export function handleAafCharacter(world: WorldDocument, actor: ActorDocument, aaf: AafCharacter, action: WorldAction, context: WorldContext): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `actor` | 否 | `ActorDocument` | — |
| `aaf` | 否 | `AafCharacter` | — |
| `action` | 否 | `WorldAction` | — |
| `context` | 否 | `WorldContext` | — |

## applyAafEquipment

导出接口 · 源码第 91 行。

```ts
export function applyAafEquipment(actor: ActorDocument, aaf: AafCharacter): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ActorDocument` | — |
| `aaf` | 否 | `AafCharacter` | — |

## syncAafCombatEquipment

导出接口 · 源码第 105 行。

Equipment adjudication changes no action quota, HP or resource balance.

```ts
export function syncAafCombatEquipment(world: WorldDocument, actor: ActorDocument): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `world` | 否 | `WorldDocument` | — |
| `actor` | 否 | `ActorDocument` | — |
