# game/packages/game-core/src/lancer/recovery.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {LANCER_CONDITIONS,LANCER_RECOVERY_STATS,type LancerBattle,type LancerCombatUnit,type LancerRecoveryIntent,type ManualMap} from '@aelzerant/contracts';
import {log} from './state';
import {lancerGMControls} from './control-state';
```
</details>

## Authority

内部依赖类型 · 源码第 5 行。

```ts
type Authority = {
    senderId: string;
    hostId: string;
    recoveryHostId?: string;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `senderId` | 否 | `string` | 见结构定义及所属功能文档 |
| `hostId` | 否 | `string` | 见结构定义及所属功能文档 |
| `recoveryHostId` | 是 | `string` | 见结构定义及所属功能文档 |

## recoveryOwner

导出接口 · 源码第 6 行。

```ts
export function recoveryOwner(b: LancerBattle, u: LancerCombatUnit, ctx: Authority): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `u` | 否 | `LancerCombatUnit` | — |
| `ctx` | 否 | `Authority` | — |

## pauseLancerRecovery

导出接口 · 源码第 7 行。

```ts
export function pauseLancerRecovery(b: LancerBattle, unit: string, source: 'queue'|'manual', title: string): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `unit` | 否 | `string` | — |
| `source` | 否 | `'queue'&#124;'manual'` | — |
| `title` | 否 | `string` | — |

## applyLancerRecovery

导出接口 · 源码第 8 行。

```ts
export function applyLancerRecovery(b: LancerBattle, map: ManualMap, i: LancerRecoveryIntent, ctx: Authority): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `b` | 否 | `LancerBattle` | — |
| `map` | 否 | `ManualMap` | — |
| `i` | 否 | `LancerRecoveryIntent` | — |
| `ctx` | 否 | `Authority` | — |
