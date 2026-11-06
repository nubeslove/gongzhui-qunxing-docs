# game/packages/contracts/src/lancer-weapon-presentation-map.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {LancerFeedbackCue} from './lancer-combat';
```
</details>

## LANCER_WEAPON_PRESENTATION_CUES

导出接口 · 源码第 4 行。

Audited catalog identities, including original arena equipment. Mode-dependent shots remain resolved by the shared helper.

```ts
export const LANCER_WEAPON_PRESENTATION_CUES: Readonly<Record<string, LancerFeedbackCue>>;
```
