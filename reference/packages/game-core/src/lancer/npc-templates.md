# game/packages/game-core/src/lancer/npc-templates.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {LancerNpc,LancerCombatUnit,ManualActor} from '@aelzerant/contracts';
```
</details>

## validateNpcTemplates

导出接口 · 源码第 2 行。

```ts
export function validateNpcTemplates(n: LancerNpc): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `n` | 否 | `LancerNpc` | — |

## applyNpcTemplates

导出接口 · 源码第 13 行。

```ts
export function applyNpcTemplates(u: LancerCombatUnit, actor: ManualActor): LancerCombatUnit;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `u` | 否 | `LancerCombatUnit` | — |
| `actor` | 否 | `ManualActor` | — |
