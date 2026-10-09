# game/apps/desktop/src/tabletop/lancer/progression.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {equippedScopeIssues} from './equipmentAccess';
import {CORE_BY_ID,ALL_CORE,LICENSES,ALL_TALENTS,contentPacks,packEnabled,licensePrerequisite,grantIssues} from './content';
import type {ManualActor} from '@aelzerant/contracts';
import {lancerGrowth} from '@aelzerant/rules-engine';
import {LANCER_FRAMES} from './frames';
import {activateLancer,readLancer,readyLancer,SKILLS} from './model';
import {prototypePlan} from './prototypeEquipment';
import {starterLancer} from './combatAdapter';
```
</details>

## Trigger

导出接口 · 源码第 10 行。

```ts
export type Trigger = {
    name: string;
    bonus: number;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `bonus` | 否 | `number` | 见结构定义及所属功能文档 |

## License

导出接口 · 源码第 11 行。

```ts
export type License = {
    id: string;
    rank: number;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `rank` | 否 | `number` | 见结构定义及所属功能文档 |

## CreationStep

导出接口 · 源码第 12 行。

```ts
export type CreationStep = 'level' | 'identity' | 'skills' | 'talents' | 'licenses' | 'mech' | 'review';
```

## TRIGGER_SUGGESTIONS

导出接口 · 源码第 14 行。

```ts
export const TRIGGER_SUGGESTIONS = ['保持冷静', '攻击或防守', '黑客或修理', '察觉威胁', '调查研究', '魅力影响', '潜行', '指挥鼓舞'];
```

## newLancerDraft

导出接口 · 源码第 15 行。

```ts
export function newLancerDraft(name: string, ownerId: string): ManualActor;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `name` | 否 | `string` | — |
| `ownerId` | 否 | `string` | — |

## readTriggers

导出接口 · 源码第 19 行。

```ts
export function readTriggers(a: ManualActor): Trigger[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `ManualActor` | — |

## readLicenses

导出接口 · 源码第 20 行。

```ts
export function readLicenses(a: ManualActor): License[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `ManualActor` | — |

## synchronizeLicenses

导出接口 · 源码第 21 行。

```ts
export function synchronizeLicenses(a: ManualActor): ManualActor;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `ManualActor` | — |

## levelOf

导出接口 · 源码第 22 行。

```ts
export function levelOf(a: ManualActor): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `ManualActor` | — |

## beginLancerUpgrade

导出接口 · 源码第 23 行。

```ts
export function beginLancerUpgrade(a: ManualActor): ManualActor;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `ManualActor` | — |

## progressionIssues

导出接口 · 源码第 24 行。

```ts
export function progressionIssues(actor: ManualActor, baseline?: ManualActor): Record<CreationStep,string[]>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |
| `baseline` | 是 | `ManualActor` | — |

## finishLancerProgression

导出接口 · 源码第 71 行。

```ts
export function finishLancerProgression(actor: ManualActor, baseline?: ManualActor): ManualActor;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |
| `baseline` | 是 | `ManualActor` | — |

## isRuntimeField

导出接口 · 源码第 87 行。

```ts
export function isRuntimeField(key: string): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `key` | 否 | `string` | — |

## actorFingerprint

导出接口 · 源码第 88 行。

```ts
export function actorFingerprint(a: ManualActor): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `ManualActor` | — |

## editableLancer

导出接口 · 源码第 89 行。

```ts
export function editableLancer(a: ManualActor): ManualActor;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `ManualActor` | — |
