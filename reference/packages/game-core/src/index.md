# game/packages/game-core/src/index.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## 重新导出的模块

```ts
export * from "./types";
export * from './aaf/state';
export * from './aaf/damage';
export * from './aaf/turn';
export * from './aaf/actions';
export * from "./geometry";
export * from "./validation";
export * from "./combat";
export * from "./persistence";
export * from "./ai";
export { nextRandom } from "./random";
export { LANCER_SYSTEM_PASSIVES, canStabilizeCondition } from './lancer/thermal-systems';
export { LANCER_WEAPON_OPERATIONS, lancerWeaponSpinning, lancerWeaponCanSkirmish } from './lancer/weapon-operation';
export { LANCER_WEAPON_SEQUENCES } from './lancer/weapon-sequences';
export * from './lancer/npc';
export * from './lancer/maintenance';
export * from './lancer/battle';
export * from './lancer/areas';
export { LANCER_WEAPON_EVENTS } from './lancer/weapon-events';
export { LANCER_WEAPON_PROFILES, lancerShotWeapon, lancerWeaponProfiles } from './lancer/weapon-profiles';
export { LANCER_WEAPON_EFFECTS } from './lancer/weapon-effects';
export * from './lancer/targeting';
export { planLancerAttack } from './lancer/attack-planning';
export * from './lancer/action-availability';
export { LANCER_EXECUTABLE_SYSTEMS, lancerSystemDefinition, lancerSystemPointInRange } from './lancer/systems';
export { lancerCover } from './lancer/effects';
export { LANCER_TALENT_EFFECTS } from './lancer/talents';
export { LANCER_TECH_OPTIONS, LANCER_TECH_SYSTEMS, availableLancerTech } from './lancer/tech';
export { canAnswerLancerDecision } from './lancer/decisions';
export { lancerFlightOptions } from './lancer/flight';
export * from './dnd';
export { dndCover } from './dnd/geometry';
export {lancerPosition} from './lancer/geometry';
export {attributeModifier} from '@aelzerant/rules-engine';
export {planDndApproach} from './dnd/approach';
export {dndSpellArea} from './dnd/areas';
export * from './lancer/pilot';
export * from './lancer/pilot-equipment';
export * from './lancer/pilot-gear';
export * from './lancer/ready';
export * from './lancer/ai-control';
export * from './lancer/control-state';
export * from './lancer/nhp';
export * from './utopia';
```
