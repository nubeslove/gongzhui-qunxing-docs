# game/packages/tabletop-runtime/src/tabletop/lancer/rogue/loadout.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ManualActor,RoguePlayer} from '@aelzerant/contracts';
import {checkLancerLoadout,type LancerWeapon} from '@aelzerant/rules-engine';
import {readLancer,setEquipment} from '../model';
import {LANCER_CATALOG} from '../catalog';
```
</details>

## fitRogueStartingWeapons

导出接口 · 源码第 6 行。

Initial frame drafts always retain a legal GMS loadout, even on auxiliary-only mounts.

```ts
export function fitRogueStartingWeapons(a: ManualActor, p: RoguePlayer): ManualActor;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `a` | 否 | `ManualActor` | — |
| `p` | 否 | `RoguePlayer` | — |
