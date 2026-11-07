# game/packages/tabletop-runtime/src/tabletop/lancer/rogue/rewardPools.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../../README.md)

## RogueRole

导出接口 · 源码第 1 行。

```ts
export type RogueRole = 'melee' | 'ranged' | 'tech' | 'tank' | 'support';
```

## PoolEntry

内部依赖类型 · 源码第 2 行。

```ts
type PoolEntry = {
    kind: string;
    name: string;
    text: string;
    tags: string[];
    metadata?: string;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `text` | 否 | `string` | 见结构定义及所属功能文档 |
| `tags` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `metadata` | 是 | `string` | 见结构定义及所属功能文档 |

## roguePoolRoles

导出接口 · 源码第 4 行。

Weapon type is authoritative: SMART and NEXUS are still weapon attacks, not tech attacks.

```ts
export function roguePoolRoles(r: PoolEntry): RogueRole[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `r` | 否 | `PoolEntry` | — |

## rogueRoleForJob

导出接口 · 源码第 19 行。

```ts
export function rogueRoleForJob(job: string): RogueRole;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `job` | 否 | `string` | — |

## roguePoolWeight

导出接口 · 源码第 20 行。

```ts
export function roguePoolWeight(role: RogueRole, roles: RogueRole[]): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `role` | 否 | `RogueRole` | — |
| `roles` | 否 | `RogueRole[]` | — |
