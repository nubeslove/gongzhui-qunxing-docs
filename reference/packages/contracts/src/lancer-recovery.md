# game/packages/contracts/src/lancer-recovery.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## LANCER_RECOVERY_STATS

导出接口 · 源码第 1 行。

```ts
export const LANCER_RECOVERY_STATS = ['hp', 'heat', 'structure', 'stress', 'overshield', 'burn', 'repair', 'cp', 'overcharge', 'quick', 'freeQuick', 'movement'] as const;
```

## LancerRecoveryStat

导出接口 · 源码第 2 行。

```ts
export type LancerRecoveryStat = typeof LANCER_RECOVERY_STATS[number];
```

## LancerRecovery

导出接口 · 源码第 3 行。

```ts
export interface LancerRecovery {
    id: string;
    unit: string;
    ownerId: string;
    source: 'queue' | 'manual' | 'automatic';
    title: string;
    resumeDecision?: {
        id: string;
        remainingMs: number;
    };
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `ownerId` | 否 | `string` | 见结构定义及所属功能文档 |
| `source` | 否 | `'queue'&#124;'manual'&#124;'automatic'` | 见结构定义及所属功能文档 |
| `title` | 否 | `string` | 见结构定义及所属功能文档 |
| `resumeDecision` | 是 | `{id:string;remainingMs:number}` | 见结构定义及所属功能文档 |
| `resumeDecision.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `resumeDecision.remainingMs` | 否 | `number` | 见结构定义及所属功能文档 |

## LancerRecoveryPatch

导出接口 · 源码第 4 行。

```ts
export interface LancerRecoveryPatch {
    unit: string;
    stats?: Partial<Record<LancerRecoveryStat, number>>;
    destroyed?: boolean;
    conditions?: string[];
    equipment?: {
        id: string;
        used: number;
        destroyed: boolean;
        loaded?: boolean;
    }[];
    position?: {
        x: number;
        y: number;
        z: number;
    };
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `stats` | 是 | `Partial<Record<LancerRecoveryStat,number>>` | 见结构定义及所属功能文档 |
| `destroyed` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `conditions` | 是 | `string[]` | 见结构定义及所属功能文档 |
| `equipment` | 是 | `{id:string;used:number;destroyed:boolean;loaded?:boolean}[]` | 见结构定义及所属功能文档 |
| `equipment.[].id` | 否 | `string` | 见结构定义及所属功能文档 |
| `equipment.[].used` | 否 | `number` | 见结构定义及所属功能文档 |
| `equipment.[].destroyed` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `equipment.[].loaded` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `position` | 是 | `{x:number;y:number;z:number}` | 见结构定义及所属功能文档 |
| `position.x` | 否 | `number` | 见结构定义及所属功能文档 |
| `position.y` | 否 | `number` | 见结构定义及所属功能文档 |
| `position.z` | 否 | `number` | 见结构定义及所属功能文档 |

## LancerRecoveryIntent

导出接口 · 源码第 5 行。

```ts
export type LancerRecoveryIntent = {
    type: 'recovery';
    op: 'open';
    unit: string;
} | {
    type: 'recovery';
    op: 'cancel';
    id: string;
} | {
    type: 'recovery';
    op: 'resolve';
    id: string;
    note: string;
    patches: LancerRecoveryPatch[];
    continuation: 'resume' | 'finish';
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.type` | 否 | `'recovery'` | 见结构定义及所属功能文档 |
| `分支1.op` | 否 | `'open'` | 见结构定义及所属功能文档 |
| `分支1.unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.type` | 否 | `'recovery'` | 见结构定义及所属功能文档 |
| `分支2.op` | 否 | `'cancel'` | 见结构定义及所属功能文档 |
| `分支2.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.type` | 否 | `'recovery'` | 见结构定义及所属功能文档 |
| `分支3.op` | 否 | `'resolve'` | 见结构定义及所属功能文档 |
| `分支3.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.note` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.patches` | 否 | `LancerRecoveryPatch[]` | 见结构定义及所属功能文档 |
| `分支3.continuation` | 否 | `'resume'&#124;'finish'` | 见结构定义及所属功能文档 |

## parseLancerRecovery

导出接口 · 源码第 6 行。

```ts
export function parseLancerRecovery(raw: unknown): LancerRecovery;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
