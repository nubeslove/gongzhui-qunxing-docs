# game/packages/contracts/src/official-tactical-missions.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {OFFICIAL_TACTICAL_GOALS} from './official-tactical-goals';
import {newTacticalConfig,newTacticalMission,officialTacticalSummary,TACTICAL_PLUGIN,type OfficialTacticalRule} from './tactical-mission';
import {canonicalJson,type ManualTable} from './index';
```
</details>

## Supported

内部依赖类型 · 源码第 5 行。

```ts
type Supported = {
    evacuationEnd?: 'party';
    npcEvacuation?: 'alone';
    targetLoss?: 'hostiles' | 'draw';
    rule: OfficialTacticalRule['rule'];
    rounds: number;
    target?: number;
    regions: string[];
    targets?: string[];
    targetActors?: string[];
    reconRequired?: boolean;
    weighted?: boolean;
    tie?: OfficialTacticalRule['tie'];
    eliminate?: boolean;
    enemyLimit?: number;
    ignoreGrunts?: boolean;
    mechsOnly?: boolean;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `evacuationEnd` | 是 | `'party'` | 见结构定义及所属功能文档 |
| `npcEvacuation` | 是 | `'alone'` | 见结构定义及所属功能文档 |
| `targetLoss` | 是 | `'hostiles'&#124;'draw'` | 见结构定义及所属功能文档 |
| `rule` | 否 | `OfficialTacticalRule['rule']` | 见结构定义及所属功能文档 |
| `rounds` | 否 | `number` | 见结构定义及所属功能文档 |
| `target` | 是 | `number` | 见结构定义及所属功能文档 |
| `regions` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `targets` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `targetActors` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `reconRequired` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `weighted` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `tie` | 是 | `OfficialTacticalRule['tie']` | 见结构定义及所属功能文档 |
| `eliminate` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `enemyLimit` | 是 | `number` | 见结构定义及所属功能文档 |
| `ignoreGrunts` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `mechsOnly` | 是 | `boolean` | 见结构定义及所属功能文档 |

## installOfficialTacticalMissions

导出接口 · 源码第 59 行。

Idempotent migration: official identity AND exact built-in scene IDs; never replace a GM mission.

```ts
export function installOfficialTacticalMissions(table: ManualTable): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
