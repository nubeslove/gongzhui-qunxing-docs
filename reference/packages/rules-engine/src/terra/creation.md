# game/packages/rules-engine/src/terra/creation.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {isTerraSpecies,type DndCharacter,type DndDamageType} from '@aelzerant/contracts';
import type {DndGuidedInput} from '../dnd/creation';
import type {DndBuildChoice} from '../dnd/creation-choices';
import type {DndEntry} from '../dnd/catalog-types';
import {TERRA_CREATION_ENTRIES} from './creation.generated';
```
</details>

## terraFixedSkills

导出接口 · 源码第 9 行。

```ts
export const terraFixedSkills: (speciesId: string): string[];
```

## terraBuildChoices

导出接口 · 源码第 10 行。

```ts
export function terraBuildChoices(input: DndGuidedInput, skills: Record<string,{name:string}>, tools: DndEntry[]): DndBuildChoice[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `input` | 否 | `DndGuidedInput` | — |
| `skills` | 否 | `Record<string,{name:string}>` | — |
| `tools` | 否 | `DndEntry[]` | — |

## applyTerraSpecies

导出接口 · 源码第 22 行。

Permanent, unconditional traits only. Reactions and conditional advantages remain explicit rule text.

```ts
export function applyTerraSpecies(character: DndCharacter): DndCharacter;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `character` | 否 | `DndCharacter` | — |

## terraSpeciesFields

导出接口 · 源码第 32 行。

```ts
export function terraSpeciesFields(speciesId: string): Record<string, string>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `speciesId` | 否 | `string` | — |
