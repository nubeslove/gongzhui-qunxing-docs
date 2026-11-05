# game/packages/rules-engine/src/dnd/wild-shape.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {DND_ABILITIES,type DndCharacter} from '@aelzerant/contracts';
import {DND_CATALOG,DND_SKILLS,dndEntry,dndMod,dndSkillBonus} from './index';
import {dndClassLevel} from './class-features';
import {dndMonster} from './characters';
import {dndMovementSpeeds} from './movement-speeds';
```
</details>

## dndMoonLevel

导出接口 · 源码第 7 行。

```ts
export const dndMoonLevel: (c: DndCharacter): number;
```

## dndWildLimits

导出接口 · 源码第 8 行。

```ts
export function dndWildLimits(c: DndCharacter): { level: number; count: number; cr: number; fly: boolean; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |

## dndWildFormInfo

导出接口 · 源码第 9 行。

```ts
export function dndWildFormInfo(id: string): { cr: number; beast: boolean; fly: boolean; size: number; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | — |

## dndWildEligible

导出接口 · 源码第 10 行。

```ts
export function dndWildEligible(c: DndCharacter, id: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `id` | 否 | `string` | — |

## changeDndWildForms

导出接口 · 源码第 11 行。

```ts
export function changeDndWildForms(c: DndCharacter, forms: string[]): { wildForms: string[]; wildReplacements: number; magicDetection?: import("@source/packages/contracts/src/dnd-detection").DndMagicDetection; lastLightObject?: { id: string; name: string; covered: boolean; scene: string; }; sizeState?: { base: number; current: number; order: number; tokens: Record<string, number>; }; slowFall?: { scene: string; seconds: number; }; aidHpBonus?: number; itemFocus?: { item: string; ending: boolean; }; magicItemsSuppressed?: boolean; legendaryInLair?: boolean; legendaryUsed?: string[]; wildCreatedSlots?: number[]; wildShape?: import("@source/packages/contracts/src/dnd").DndWildShape; casting?: import("@source/packages/contracts/src/dnd").DndCasting; heldWeapon?: string; gagged?: boolean; rite?: { remaining: number; round: number; }; masteryReplacements?: number; masteryRangedReplacements?: number; airborne?: boolean; damageTaken?: number; hiding?: { total: number; }; readied?: import("@source/packages/contracts/src/dnd").DndReadied; bloodiedOverride?: boolean; load?: "encumbered" | "heavilyEncumbered" | "overloaded"; effects?: import("@source/packages/contracts/src/dnd-effects").DndActiveEffect[]; auraPractice?: { source: string; day: number; days: number; }[]; sorcery?: import("@source/packages/contracts/src/dnd-magic").DndSorceryState; version: 1; kind: "pc" | "monster"; side: "party" | "hostile" | "neutral"; level: number; classes: { id: string; level: number; subclass?: string; }[]; lineage?: { name: string; ability: import("@source/packages/contracts/src/dnd").DndAbility; cantrip?: string; }; choices?: Record<string, string>; species?: string; background?: string; feats: string[]; monster?: string; abilities: Record<import("@source/packages/contracts/src/dnd").DndAbility, number>; skills: Record<string, number>; saves: import("@source/packages/contracts/src/dnd").DndAbility[]; skillBonuses?: Record<string, number>; saveBonuses?: Partial<Record<import("@source/packages/contracts/src/dnd").DndAbility, number>>; movementSpeeds?: Partial<Record<"fly" | "swim" | "climb" | "burrow", number>>; proficiency: number; ac: number; speed: number; initiative: number; hp: number; maxHp: number; tempHp: number; hitDice: { sides: number; max: number; used: number; }[]; spellAbility: import("@source/packages/contracts/src/dnd").DndAbility | null; spells: string[]; slots: import("@source/packages/contracts/src/dnd").DndPool[]; spellSources?: Record<string, { ability: import("@source/packages/contracts/src/dnd").DndAbility; spells: string[]; atWill?: boolean; castLevel?: number; name?: string; freeCast?: { spell: string; resource: string; }; }>; training?: { armor: string[]; weapons: string[]; tools: string[]; }; pact?: import("@source/packages/contracts/src/dnd").DndPool & { level: number; }; spellbook?: string[]; preparation?: { trigger: "long-rest" | "short-rest" | "level-up"; classes: string[]; learn?: Record<string, number>; }; weapons: string[]; armor?: string; shield: boolean; attacks: import("@source/packages/contracts/src/dnd").DndAttack[]; multiattacks?: string[][]; resources: Record<string, import("@source/packages/contracts/src/dnd").DndPool & { refresh: "short" | "long" | "manual"; }>; conditions: import("@source/packages/contracts/src/dnd").DndConditionState[]; exhaustion: number; resistances: import("@source/packages/contracts/src/dnd").DndDamageType[]; immunities: import("@source/packages/contracts/src/dnd").DndDamageType[]; conditionImmunities?: import("@source/packages/contracts/src/dnd").DndCondition[]; vulnerabilities: import("@source/packages/contracts/src/dnd").DndDamageType[]; death: { successes: number; failures: number; stable: boolean; }; concentration?: { spell: string; targets: string[]; }; inspiration: boolean; experience?: number; advancement?: "milestone" | "xp"; abilityGeneration?: { method: import("@source/packages/contracts/src/dnd").DndAbilityMethod; scores: Record<import("@source/packages/contracts/src/dnd").DndAbility, number>; boosts: Record<import("@source/packages/contracts/src/dnd").DndAbility, number>; }; inventory?: import("@source/packages/contracts/src/dnd").DndInventoryItem[]; currency?: { cp: number; sp: number; ep: number; gp: number; pp: number; }; };
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `forms` | 否 | `string[]` | — |

## DND_WILD_STAT_KEYS

导出接口 · 源码第 17 行。

```ts
export const DND_WILD_STAT_KEYS = ['ac', 'speed', 'movementSpeeds', 'initiative', 'armor', 'shield', 'heldWeapon', 'weapons', 'attacks', 'multiattacks', 'skillBonuses', 'saveBonuses', 'resistances', 'immunities', 'vulnerabilities', 'conditionImmunities'] as const;
```

## applyDndWildStats

导出接口 · 源码第 18 行。

```ts
export function applyDndWildStats(c: DndCharacter, id: string): DndCharacter;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `id` | 否 | `string` | — |

## dndWildSpellAllowed

导出接口 · 源码第 31 行。

```ts
export function dndWildSpellAllowed(c: DndCharacter, spell: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `c` | 否 | `DndCharacter` | — |
| `spell` | 否 | `string` | — |

## dndWildCandidates

导出接口 · 源码第 32 行。

```ts
export const dndWildCandidates: (c: DndCharacter): import("@source/packages/rules-engine/src/index").DndEntry[];
```
