# game/packages/contracts/src/lancer-maintenance.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## LancerRepairPlan

导出接口 · 源码第 2 行。

Between-scene intents carry choices, never calculated recovery or random results.

```ts
export interface LancerRepairPlan {
    hp: boolean;
    structure: number;
    stress: number;
    equipment: string[];
    refill: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `hp` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `structure` | 否 | `number` | 见结构定义及所属功能文档 |
| `stress` | 否 | `number` | 见结构定义及所属功能文档 |
| `equipment` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `refill` | 否 | `number` | 见结构定义及所属功能文档 |

## LancerMaintenanceIntent

导出接口 · 源码第 3 行。

```ts
export type LancerMaintenanceIntent = {
    type: 'beginRest';
    actors: string[];
} | {
    type: 'endRest';
} | {
    type: 'newMission';
    name: string;
} | {
    type: 'repair';
    actor: string;
    plan: LancerRepairPlan;
} | {
    type: 'rebuild';
    actor: string;
    recovered: boolean;
    contributions: {
        actor: string;
        amount: number;
    }[];
} | {
    type: 'supplyDrop';
    actor: string;
    targets: string[];
} | {
    type: 'fullRepair';
    actors: string[];
    recovered: string[];
    printer: boolean;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.type` | 否 | `'beginRest'` | 见结构定义及所属功能文档 |
| `分支1.actors` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支2.type` | 否 | `'endRest'` | 见结构定义及所属功能文档 |
| `分支3.type` | 否 | `'newMission'` | 见结构定义及所属功能文档 |
| `分支3.name` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.type` | 否 | `'repair'` | 见结构定义及所属功能文档 |
| `分支4.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.plan` | 否 | `LancerRepairPlan` | 见结构定义及所属功能文档 |
| `分支5.type` | 否 | `'rebuild'` | 见结构定义及所属功能文档 |
| `分支5.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支5.recovered` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支5.contributions` | 否 | `{actor:string;amount:number}[]` | 见结构定义及所属功能文档 |
| `分支5.contributions.[].actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支5.contributions.[].amount` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支6.type` | 否 | `'supplyDrop'` | 见结构定义及所属功能文档 |
| `分支6.actor` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支6.targets` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支7.type` | 否 | `'fullRepair'` | 见结构定义及所属功能文档 |
| `分支7.actors` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支7.recovered` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `分支7.printer` | 否 | `boolean` | 见结构定义及所属功能文档 |

## LancerMission

导出接口 · 源码第 11 行。

```ts
export interface LancerMission {
    version: 1;
    serial: number;
    name: string;
    rest: {
        id: string;
        actors: string[];
    } | null;
    supplyUsed: string[];
    log: {
        id: string;
        text: string;
        actors: string[];
        at: number;
    }[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `version` | 否 | `1` | 见结构定义及所属功能文档 |
| `serial` | 否 | `number` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `rest` | 否 | `{id:string;actors:string[]}&#124;null` | 见结构定义及所属功能文档 |
| `rest.分支1.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `rest.分支1.actors` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `supplyUsed` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `log` | 否 | `{id:string;text:string;actors:string[];at:number}[]` | 见结构定义及所属功能文档 |
| `log.[].id` | 否 | `string` | 见结构定义及所属功能文档 |
| `log.[].text` | 否 | `string` | 见结构定义及所属功能文档 |
| `log.[].actors` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `log.[].at` | 否 | `number` | 见结构定义及所属功能文档 |

## parseLancerMaintenance

导出接口 · 源码第 21 行。

```ts
export function parseLancerMaintenance(raw: unknown): LancerMaintenanceIntent;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseLancerMission

导出接口 · 源码第 34 行。

```ts
export function parseLancerMission(raw: unknown): LancerMission;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## projectLancerMission

导出接口 · 源码第 39 行。

```ts
export function projectLancerMission(m: LancerMission, visible: Set<string>): LancerMission;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `m` | 否 | `LancerMission` | — |
| `visible` | 否 | `Set<string>` | — |
