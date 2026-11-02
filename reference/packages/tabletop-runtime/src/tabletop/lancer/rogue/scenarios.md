# game/packages/tabletop-runtime/src/tabletop/lancer/rogue/scenarios.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ManualBlock} from '@aelzerant/contracts';
import type {ArenaMap} from './encounters';
```
</details>

## ArenaRule

导出接口 · 源码第 4 行。

```ts
export type ArenaRule = 'defend' | 'escape' | 'jam' | 'escort' | 'cargo' | 'control' | 'terminals' | 'hunt' | 'chase' | 'blackbox' | 'production' | 'rescue' | 'calibrate' | 'siege' | 'fortress' | 'twins' | 'furnace' | 'hive' | 'matrix';
```

## ArenaScenarioDefinition

导出接口 · 源码第 5 行。

```ts
export interface ArenaScenarioDefinition {
    rule: ArenaRule;
    task: string;
    objectives: string[];
    rules: string;
    goal: number;
    pressure: number;
    waves: 'continuous' | 'reserves' | 'checkpoint' | 'none';
    roster: string[][];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `rule` | 否 | `ArenaRule` | 见结构定义及所属功能文档 |
| `task` | 否 | `string` | 见结构定义及所属功能文档 |
| `objectives` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `rules` | 否 | `string` | 见结构定义及所属功能文档 |
| `goal` | 否 | `number` | 见结构定义及所属功能文档 |
| `pressure` | 否 | `number` | 见结构定义及所属功能文档 |
| `waves` | 否 | `'continuous'&#124;'reserves'&#124;'checkpoint'&#124;'none'` | 见结构定义及所属功能文档 |
| `roster` | 否 | `string[][]` | 见结构定义及所属功能文档 |

## Row

内部依赖类型 · 源码第 14 行。

```ts
type Row = [
    ArenaRule,
    string,
    string[],
    string,
    number,
    number,
    ArenaScenarioDefinition['waves']
];
```

## scenarioDefinition

导出接口 · 源码第 54 行。

```ts
export function scenarioDefinition(m: ArenaMap): ArenaScenarioDefinition;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `m` | 否 | `ArenaMap` | — |

## scenarioPoints

导出接口 · 源码第 55 行。

```ts
export function scenarioPoints(m: ArenaMap): { x: number; y: number; }[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `m` | 否 | `ArenaMap` | — |

## arenaObjectId

导出接口 · 源码第 64 行。

```ts
export const arenaObjectId: (i: number): string;
```

## scenarioObjects

导出接口 · 源码第 65 行。

```ts
export function scenarioObjects(m: ArenaMap): ManualBlock[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `m` | 否 | `ArenaMap` | — |
