# game/packages/rules-engine/src/dnd/mastery-choices.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {DndCharacter} from '@aelzerant/contracts';
import {DND_CATALOG,dndBase,dndEntry} from './index';
import {dndClassRow} from './characters';
import {dndWeaponTrained} from './traits';
```
</details>

## dndClassMasteryCount

导出接口 · 源码第 6 行。

```ts
export function dndClassMasteryCount(classId: string, level: number): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `classId` | 否 | `string` | — |
| `level` | 否 | `number` | — |

## dndMasteryCapacity

导出接口 · 源码第 10 行。

```ts
export function dndMasteryCapacity(c: DndCharacter): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |

## dndMasteryRestReplacements

导出接口 · 源码第 11 行。

```ts
export function dndMasteryRestReplacements(c: DndCharacter): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |

## dndRangedMasteryCapacity

导出接口 · 源码第 12 行。

```ts
export function dndRangedMasteryCapacity(c: DndCharacter): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |

## dndRangedMasteryReplacements

导出接口 · 源码第 13 行。

```ts
export function dndRangedMasteryReplacements(c: DndCharacter): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |

## dndMasteryEligible

导出接口 · 源码第 14 行。

```ts
export function dndMasteryEligible(c: DndCharacter, id: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `id` | 否 | `string` | — |

## dndClassMasteryOptions

导出接口 · 源码第 18 行。

```ts
export function dndClassMasteryOptions(classId: string, level: number): import("@source/packages/rules-engine/src/index").DndEntry[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `classId` | 否 | `string` | — |
| `level` | 否 | `number` | — |

## changeDndMasteries

导出接口 · 源码第 21 行。

```ts
export function changeDndMasteries(c: DndCharacter, selected: string[]): { masteryRangedReplacements: number; masteryReplacements: number; choices: { 'weapon-mastery': string; }; magicDetection?: import("@source/packages/contracts/src/dnd-detection").DndMagicDetection; lastLightObject?: { id: string; name: string; covered: boolean; scene: string; }; sizeState?: { base: number; current: number; order: number; tokens: Record<string, number>; }; slowFall?: { scene: string; seconds: number; }; aidHpBonus?: number; itemFocus?: { item: string; ending: boolean; }; magicItemsSuppressed?: boolean; legendaryInLair?: boolean; legendaryUsed?: string[]; wildCreatedSlots?: number[]; wildShape?: import("@source/packages/contracts/src/dnd").DndWildShape; wildForms?: string[]; wildReplacements?: number; casting?: import("@source/packages/contracts/src/dnd").DndCasting; heldWeapon?: string; gagged?: boolean; rite?: { remaining: number; round: number; }; airborne?: boolean; damageTaken?: number; hiding?: { total: number; }; readied?: import("@source/packages/contracts/src/dnd").DndReadied; bloodiedOverride?: boolean; load?: "encumbered" | "heavilyEncumbered" | "overloaded"; effects?: import("@source/packages/contracts/src/dnd-effects").DndActiveEffect[]; auraPractice?: { source: string; day: number; days: number; }[]; sorcery?: import("@source/packages/contracts/src/dnd-magic").DndSorceryState; version: 1; kind: "pc" | "monster"; side: "party" | "hostile" | "neutral"; level: number; classes: { id: string; level: number; subclass?: string; }[]; lineage?: { name: string; ability: import("@source/packages/contracts/src/dnd").DndAbility; cantrip?: string; }; species?: string; background?: string; feats: string[]; monster?: string; abilities: Record<import("@source/packages/contracts/src/dnd").DndAbility, number>; skills: Record<string, number>; saves: import("@source/packages/contracts/src/dnd").DndAbility[]; skillBonuses?: Record<string, number>; saveBonuses?: Partial<Record<import("@source/packages/contracts/src/dnd").DndAbility, number>>; movementSpeeds?: Partial<Record<"fly" | "swim" | "climb" | "burrow", number>>; proficiency: number; ac: number; speed: number; initiative: number; hp: number; maxHp: number; tempHp: number; hitDice: { sides: number; max: number; used: number; }[]; spellAbility: import("@source/packages/contracts/src/dnd").DndAbility | null; spells: string[]; slots: import("@source/packages/contracts/src/dnd").DndPool[]; spellSources?: Record<string, { ability: import("@source/packages/contracts/src/dnd").DndAbility; spells: string[]; atWill?: boolean; castLevel?: number; name?: string; freeCast?: { spell: string; resource: string; }; }>; training?: { armor: string[]; weapons: string[]; tools: string[]; }; pact?: import("@source/packages/contracts/src/dnd").DndPool & { level: number; }; spellbook?: string[]; preparation?: { trigger: "long-rest" | "short-rest" | "level-up"; classes: string[]; learn?: Record<string, number>; }; weapons: string[]; armor?: string; shield: boolean; attacks: import("@source/packages/contracts/src/dnd").DndAttack[]; multiattacks?: string[][]; resources: Record<string, import("@source/packages/contracts/src/dnd").DndPool & { refresh: "short" | "long" | "manual"; }>; conditions: import("@source/packages/contracts/src/dnd").DndConditionState[]; exhaustion: number; resistances: import("@source/packages/contracts/src/dnd").DndDamageType[]; immunities: import("@source/packages/contracts/src/dnd").DndDamageType[]; conditionImmunities?: import("@source/packages/contracts/src/dnd").DndCondition[]; vulnerabilities: import("@source/packages/contracts/src/dnd").DndDamageType[]; death: { successes: number; failures: number; stable: boolean; }; concentration?: { spell: string; targets: string[]; }; inspiration: boolean; experience?: number; advancement?: "milestone" | "xp"; abilityGeneration?: { method: import("@source/packages/contracts/src/dnd").DndAbilityMethod; scores: Record<import("@source/packages/contracts/src/dnd").DndAbility, number>; boosts: Record<import("@source/packages/contracts/src/dnd").DndAbility, number>; }; inventory?: import("@source/packages/contracts/src/dnd").DndInventoryItem[]; currency?: { cp: number; sp: number; ep: number; gp: number; pp: number; }; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `selected` | 否 | `string[]` | — |
