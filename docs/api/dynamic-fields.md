# 字符串扩展字段

ManualActor.fields 的所有值都是字符串。此清单列出代码直接读取或写入的字面量键及插值模式；普通任意资料字段不代表规则执行器会消费。数值、JSON 字符串和枚举的含义见各规则手册。某些参数化键由表驱动生成，须结合关联类型与注册表。

## `Token`

- `game/packages/tabletop-runtime/src/heartsea/tokenArtwork.ts:6` → `prior?.fields['Token']`
- `game/packages/tabletop-runtime/src/heartsea/tokenArtwork.ts:6` → `actor.fields['Token']`
- `game/apps/desktop/src/tabletop/lancer/pilotArtworkTransfer.ts:5` → `a.fields['Token']`
- `game/apps/desktop/src/heartsea/CharacterSheet.tsx:17` → `actor.fields['Token']`
- `game/apps/desktop/src/heartsea/CharacterSheet.tsx:26` → `actor.fields['Token']`
- `game/apps/desktop/src/heartsea/WorldDesktop.tsx:55` → `a.fields['Token']`

## `heartsea.abilities`

- `game/apps/desktop/src/heartsea/CharacterSheet.tsx:25` → `actor.fields['heartsea.abilities']`

## `heartsea.background`

- `game/apps/desktop/src/heartsea/CharacterSheet.tsx:19` → `actor.fields['heartsea.background']`
- `game/apps/desktop/src/heartsea/CharacterSheet.tsx:25` → `actor.fields['heartsea.background']`

## `heartsea.class`

- `game/packages/tabletop-runtime/src/heartsea/characters.ts:9` → `a.fields['heartsea.class']`

## `heartsea.kind`

- `game/apps/desktop/src/heartsea/CharacterSheet.tsx:19` → `actor.fields['heartsea.kind']`
- `game/apps/desktop/src/heartsea/CharacterSheet.tsx:25` → `actor.fields['heartsea.kind']`
- `game/apps/desktop/src/heartsea/Home.tsx:41` → `a.fields['heartsea.kind']`
- `game/apps/desktop/src/heartsea/WorldDesktop.tsx:72` → `a.fields['heartsea.kind']`

## `heartsea.mark`

- `game/apps/desktop/src/heartsea/CharacterSheet.tsx:25` → `actor.fields['heartsea.mark']`

## `heartsea.memories`

- `game/apps/desktop/src/heartsea/CharacterSheet.tsx:23` → `actor.fields['heartsea.memories']`

## `heartsea.path`

- `game/apps/desktop/src/heartsea/CharacterSheet.tsx:25` → `actor.fields['heartsea.path']`

## `heartsea.primary`

- `game/packages/tabletop-runtime/src/heartsea/characters.ts:11` → `a.fields['heartsea.primary']`
- `game/apps/desktop/src/heartsea/CharacterSheet.tsx:25` → `actor.fields['heartsea.primary']`

## `lancer.${key}（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:117` → `fields[`${LC}${key}`]`
- `game/apps/desktop/src/tabletop/lancer/compcon.ts:31` → `f[`lancer.${key}`]`
- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:23` → `actor.fields[`${LC}${key}`]`

## `lancer.${kind}.${i}（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:41` → `fields[`${LC}${kind}.${i}`]`
- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:42` → `fields[`${LC}${kind}.${i}`]`
- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:69` → `f[`${LC}${kind}.${i}`]`

## `lancer.${kind}.${j}（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/progression.ts:83` → `baseline.fields[`lancer.${kind}.${j}`]`
- `game/packages/tabletop-runtime/src/tabletop/lancer/progression.ts:83` → `baseline.fields[`lancer.${kind}.${j}`]`

## `lancer.${kind}.${match}（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/progression.ts:84` → `baseline.fields[`lancer.${kind}.${match}`]`

## `lancer.actorRole`

- `game/apps/desktop/src/tabletop/lancer/actorGroup.ts:7` → `actor.fields['lancer.actorRole']`
- `game/apps/desktop/src/tabletop/lancer/Hangar.tsx:38` → `next.fields['lancer.actorRole']`

## `lancer.agility（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:55` → `f[`${LC}agility`]`

## `lancer.ai`

- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:45` → `actor.fields['lancer.ai']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:45` → `actor.fields['lancer.ai']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:79` → `actor.fields['lancer.ai']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/maintenance.ts:13` → `a.fields['lancer.ai']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/maintenance.ts:13` → `a.fields['lancer.ai']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/maintenance.ts:13` → `a.fields['lancer.ai']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:170` → `a.fields['lancer.ai']`

## `lancer.base.${key}（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:48` → `f[`${LC}base.${key}`]`

## `lancer.brawlerDie`

- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:52` → `actor.fields['lancer.brawlerDie']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:87` → `actor.fields['lancer.brawlerDie']`

## `lancer.conditions`

- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:83` → `actor.fields['lancer.conditions']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:93` → `actor.fields['lancer.conditions']`
- `game/packages/game-core/src/lancer/npc-profile.ts:5` → `actor.fields['lancer.conditions']`

## `lancer.contentPacks`

- `game/packages/tabletop-runtime/src/tabletop/lancer/content.ts:15` → `a.fields['lancer.contentPacks']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/content.ts:16` → `a.fields['lancer.contentPacks']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/creation.ts:22` → `actor.fields['lancer.contentPacks']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/creation.ts:40` → `submitted.fields['lancer.contentPacks']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/importPilot.ts:12` → `actor.fields['lancer.contentPacks']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/importPilot.ts:15` → `actor.fields['lancer.contentPacks']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/importPilot.ts:23` → `actor.fields['lancer.contentPacks']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/progression.ts:18` → `a.fields['lancer.contentPacks']`

## `lancer.cp`

- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:89` → `actor.fields['lancer.cp']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:158` → `actorFor(t,p).fields['lancer.cp']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:158` → `a.fields['lancer.cp']`
- `game/apps/desktop/src/tabletop/lancer/rogue/previewFixture.ts:24` → `a.fields['lancer.cp']`

## `lancer.cp（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:88` → `f[`${LC}cp`]`

## `lancer.creation`

- `game/packages/tabletop-runtime/src/tabletop/lancer/campaignTemplate.ts:12` → `a.fields['lancer.creation']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:19` → `actor.fields['lancer.creation']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/creation.ts:34` → `previous.fields['lancer.creation']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/creation.ts:42` → `submitted.fields['lancer.creation']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/importPilot.ts:25` → `actor.fields['lancer.creation']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/nodeExecution.ts:14` → `a.fields['lancer.creation']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/progression.ts:18` → `a.fields['lancer.creation']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/progression.ts:88` → `next.fields['lancer.creation']`
- `game/apps/desktop/src/tabletop/lancer/Hangar.tsx:36` → `actor.fields['lancer.creation']`
- `game/apps/desktop/src/tabletop/lancer/Hangar.tsx:37` → `a.fields['lancer.creation']`
- `game/apps/desktop/src/tabletop/lancer/LancerCharacter.tsx:25` → `actor.fields['lancer.creation']`
- `game/apps/desktop/src/tabletop/lancer/LancerCharacter.tsx:40` → `a.fields['lancer.creation']`
- `game/apps/desktop/src/tabletop/lancer/LancerCharacter.tsx:62` → `actor.fields['lancer.creation']`
- `game/apps/desktop/src/tabletop/lancer/LancerCharacter.tsx:65` → `actor.fields['lancer.creation']`
- `game/apps/desktop/src/tabletop/lancer/LancerDesktop.tsx:177` → `hangarActor?.fields['lancer.creation']`
- `game/apps/desktop/src/tabletop/lancer/LancerDesktop.tsx:179` → `hangarActor?.fields['lancer.creation']`
- `game/apps/desktop/src/tabletop/lancer/LancerDesktop.tsx:179` → `hangarActor?.fields['lancer.creation']`
- `game/apps/desktop/src/tabletop/lancer/LancerHome.tsx:52` → `actor?.fields['lancer.creation']`
- `game/apps/desktop/src/tabletop/lancer/manualNodeControls.ts:7` → `a.fields['lancer.creation']`
- `game/apps/desktop/src/tabletop/lancer/PilotImport.tsx:14` → `a.fields['lancer.creation']`
- `game/apps/desktop/src/tabletop/lancer/PilotImport.tsx:15` → `r.actor.fields['lancer.creation']`
- `game/apps/desktop/src/tabletop/lancer/terminal/Directories.tsx:43` → `actor.fields['lancer.creation']`
- `game/apps/desktop/src/tabletop/lancer/terminal/Directories.tsx:44` → `actor.fields['lancer.creation']`
- `game/apps/desktop/src/tabletop/lancer/useTerminalOnboarding.ts:12` → `a.fields['lancer.creation']`
- `game/apps/desktop/src/tabletop/lancer/useTerminalOnboarding.ts:13` → `a.fields['lancer.creation']`
- `game/apps/desktop/src/tabletop/lancer/WorldPilotImport.tsx:14` → `a.fields['lancer.creation']`

## `lancer.current.${key}（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:85` → `actor.fields[`lancer.current.${key}`]`
- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:86` → `f[`${LC}current.${key}`]`
- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:106` → `fields[`${LC}current.${key}`]`
- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:123` → `next.fields[`${LC}current.${key}`]`
- `game/packages/game-core/src/lancer/npc-profile.ts:13` → `actor.fields[`lancer.current.${key}`]`
- `game/packages/game-core/src/lancer/npc.ts:50` → `actor.fields[`lancer.current.${key}`]`

## `lancer.current.heat`

- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:166` → `actorFor(t,p).fields['lancer.current.heat']`

## `lancer.current.hp`

- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/growth.ts:14` → `actor.fields['lancer.current.hp']`
- `game/apps/desktop/src/tabletop/lancer/rogue/previewFixture.ts:24` → `a.fields['lancer.current.hp']`

## `lancer.current.npc-weapon-${i}-used（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:84` → `actor.fields[`lancer.current.npc-weapon-${i}-used`]`

## `lancer.current.repair`

- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/maintenance.ts:22` → `actor.fields['lancer.current.repair']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/retraining.ts:53` → `updated.fields['lancer.current.repair']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:170` → `a.fields['lancer.current.repair']`
- `game/apps/desktop/src/tabletop/lancer/MaintenancePanel.tsx:24` → `a.fields['lancer.current.repair']`
- `game/apps/desktop/src/tabletop/lancer/MaintenancePanel.tsx:30` → `a.fields['lancer.current.repair']`
- `game/apps/desktop/src/tabletop/lancer/rogue/previewFixture.ts:24` → `a.fields['lancer.current.repair']`

## `lancer.current.stress`

- `game/apps/desktop/src/tabletop/lancer/rogue/previewFixture.ts:24` → `a.fields['lancer.current.stress']`

## `lancer.current.structure`

- `game/apps/desktop/src/tabletop/lancer/rogue/previewFixture.ts:24` → `a.fields['lancer.current.structure']`

## `lancer.defaultTriggers`

- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:16` → `actor.fields['lancer.defaultTriggers']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:75` → `actor.fields['lancer.defaultTriggers']`

## `lancer.destroyed.${kind}.${index}（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/maintenance.ts:7` → `actor.fields[`lancer.destroyed.${kind}.${index}`]`

## `lancer.destroyed.${kind}.${i}（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:90` → `actor.fields[`lancer.destroyed.${kind}.${i}`]`
- `game/packages/tabletop-runtime/src/tabletop/lancer/progression.ts:82` → `next.fields[`lancer.destroyed.${kind}.${i}`]`
- `game/packages/tabletop-runtime/src/tabletop/lancer/progression.ts:84` → `next.fields[`lancer.destroyed.${kind}.${i}`]`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/retraining.ts:44` → `actor.fields[`lancer.destroyed.${kind}.${i}`]`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:66` → `a.fields[`lancer.destroyed.${kind}.${i}`]`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:74` → `updated.fields[`lancer.destroyed.${kind}.${i}`]`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:152` → `a.fields[`lancer.destroyed.${kind}.${i}`]`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:155` → `next.fields[`lancer.destroyed.${kind}.${i}`]`

## `lancer.destroyed.${kind}.${match}（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/progression.ts:84` → `baseline.fields[`lancer.destroyed.${kind}.${match}`]`

## `lancer.destroyed.system.${i}（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:53` → `actor.fields[`lancer.destroyed.system.${i}`]`
- `game/packages/game-core/src/lancer/npc.ts:51` → `actor.fields[`lancer.destroyed.system.${i}`]`
- `game/packages/game-core/src/lancer/npc.ts:53` → `actor.fields[`lancer.destroyed.system.${i}`]`

## `lancer.destroyed.system.${systems.length-1}（插值）`

- `game/apps/desktop/src/tabletop/lancer/compcon.ts:45` → `f[`lancer.destroyed.system.${systems.length-1}`]`

## `lancer.destroyed.unit`

- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:48` → `actor.fields['lancer.destroyed.unit']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:89` → `actor.fields['lancer.destroyed.unit']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/maintenance.ts:30` → `actor.fields['lancer.destroyed.unit']`
- `game/apps/desktop/src/tabletop/lancer/MaintenancePanel.tsx:31` → `a.fields['lancer.destroyed.unit']`
- `game/apps/desktop/src/tabletop/lancer/MaintenancePanel.tsx:35` → `a.fields['lancer.destroyed.unit']`
- `game/apps/desktop/src/tabletop/lancer/manualNodeControls.ts:7` → `a.fields['lancer.destroyed.unit']`
- `game/packages/game-core/src/lancer/npc-profile.ts:16` → `actor.fields['lancer.destroyed.unit']`
- `game/packages/game-core/src/lancer/npc.ts:56` → `actor.fields['lancer.destroyed.unit']`

## `lancer.destroyed.weapon.${i}（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:27` → `actor.fields[`lancer.destroyed.weapon.${i}`]`
- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:41` → `actor.fields[`lancer.destroyed.weapon.${i}`]`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/retraining.ts:49` → `updated.fields[`lancer.destroyed.weapon.${i}`]`
- `game/packages/game-core/src/lancer/npc-profile.ts:21` → `actor.fields[`lancer.destroyed.weapon.${i}`]`
- `game/packages/game-core/src/lancer/npc.ts:49` → `actor.fields[`lancer.destroyed.weapon.${i}`]`

## `lancer.destroyed.weapon.${weapons.length-1}（插值）`

- `game/apps/desktop/src/tabletop/lancer/compcon.ts:44` → `f[`lancer.destroyed.weapon.${weapons.length-1}`]`

## `lancer.destroyed.weapon.0`

- `game/apps/desktop/src/tabletop/lancer/rogue/previewFixture.ts:24` → `a.fields['lancer.destroyed.weapon.0']`

## `lancer.dustgrave.mesmer`

- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:52` → `actor.fields['lancer.dustgrave.mesmer']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:74` → `actor.fields['lancer.dustgrave.mesmer']`

## `lancer.dustgrave.mesmerSix`

- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:52` → `actor.fields['lancer.dustgrave.mesmerSix']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:74` → `actor.fields['lancer.dustgrave.mesmerSix']`

## `lancer.engineering（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:55` → `f[`${LC}engineering`]`

## `lancer.extraTalents`

- `game/packages/tabletop-runtime/src/tabletop/lancer/importPilot.ts:17` → `actor.fields['lancer.extraTalents']`

## `lancer.extraTriggers`

- `game/packages/tabletop-runtime/src/tabletop/lancer/importPilot.ts:17` → `actor.fields['lancer.extraTriggers']`

## `lancer.frame`

- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:23` → `actor.fields['lancer.frame']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/content.ts:42` → `a.fields['lancer.frame']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/frameCore.ts:9` → `actor.fields['lancer.frame']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/progression.ts:18` → `a.fields['lancer.frame']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/progression.ts:23` → `next.fields['lancer.frame']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/progression.ts:23` → `next.fields['lancer.frame']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/abilities.ts:10` → `actor?.fields['lancer.frame']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/retraining.ts:34` → `actor.fields['lancer.frame']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:133` → `a.fields['lancer.frame']`
- `game/apps/desktop/src/tabletop/lancer/battleBoardModel.ts:7` → `actor?.fields['lancer.frame']`
- `game/apps/desktop/src/tabletop/lancer/compcon.ts:30` → `f['lancer.frame']`
- `game/apps/desktop/src/tabletop/lancer/FramePicker.tsx:10` → `actor.fields['lancer.frame']`
- `game/apps/desktop/src/tabletop/lancer/FramePicker.tsx:14` → `actor.fields['lancer.frame']`
- `game/apps/desktop/src/tabletop/lancer/MechAssembly.tsx:33` → `actor.fields['lancer.frame']`
- `game/apps/desktop/src/tabletop/lancer/ResourceCatalog.tsx:20` → `actor?.fields['lancer.frame']`
- `game/apps/desktop/src/tabletop/lancer/rogue/RogueRetraining.tsx:14` → `actor.fields['lancer.frame']`
- `game/apps/desktop/src/tabletop/lancer/rogue/tokenArt.ts:53` → `actor?.fields['lancer.frame']`

## `lancer.frameLicense`

- `game/packages/tabletop-runtime/src/tabletop/lancer/progression.ts:23` → `next.fields['lancer.frameLicense']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/retraining.ts:40` → `updated.fields['lancer.frameLicense']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:101` → `a.fields['lancer.frameLicense']`
- `game/apps/desktop/src/tabletop/lancer/compcon.ts:35` → `f['lancer.frameLicense']`

## `lancer.frameLicense（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:81` → `f[`${LC}frameLicense`]`

## `lancer.frame（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:33` → `actor.fields[`${LC}frame`]`
- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:46` → `f[`${LC}frame`]`
- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:47` → `f[`${LC}frame`]`
- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:116` → `fields[`${LC}frame`]`
- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:49` → `actor.fields[`${LC}frame`]`

## `lancer.gunslingerDie`

- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:52` → `actor.fields['lancer.gunslingerDie']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:88` → `actor.fields['lancer.gunslingerDie']`

## `lancer.hull`

- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:98` → `a.fields['lancer.hull']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/progression.ts:18` → `a.fields['lancer.hull']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:98` → `a.fields['lancer.hull']`

## `lancer.hull（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:55` → `f[`${LC}hull`]`

## `lancer.import.mechId`

- `game/apps/desktop/src/tabletop/lancer/compcon.ts:34` → `f['lancer.import.mechId']`

## `lancer.import.pilotId`

- `game/apps/desktop/src/tabletop/lancer/compcon.ts:34` → `f['lancer.import.pilotId']`

## `lancer.import.source`

- `game/apps/desktop/src/tabletop/lancer/compcon.ts:34` → `f['lancer.import.source']`

## `lancer.importException`

- `game/packages/tabletop-runtime/src/tabletop/lancer/creation.ts:37` → `previous.fields['lancer.importException']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/importPilot.ts:17` → `actor.fields['lancer.importException']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/importPilot.ts:18` → `actor.fields['lancer.importException']`

## `lancer.importReceipt`

- `game/packages/tabletop-runtime/src/tabletop/lancer/importPilot.ts:36` → `existing.fields['lancer.importReceipt']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/importPilot.ts:37` → `actor.fields['lancer.importReceipt']`
- `game/apps/desktop/src/tabletop/lancer/pilotArtworkTransfer.ts:27` → `copy.fields['lancer.importReceipt']`

## `lancer.leaderPool`

- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:52` → `actor.fields['lancer.leaderPool']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:52` → `actor.fields['lancer.leaderPool']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:81` → `actor.fields['lancer.leaderPool']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:101` → `fields['lancer.leaderPool']`

## `lancer.level`

- `game/packages/tabletop-runtime/src/tabletop/lancer/creation.ts:19` → `actor.fields['lancer.level']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/creation.ts:20` → `actor.fields['lancer.level']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/importPilot.ts:12` → `actor.fields['lancer.level']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/importPilot.ts:14` → `actor.fields['lancer.level']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/importPilot.ts:19` → `actor.fields['lancer.level']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/importPilot.ts:22` → `actor.fields['lancer.level']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/importPilot.ts:22` → `actor.fields['lancer.level']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/nodeExecution.ts:39` → `a.fields['lancer.level']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/pilotProfile.ts:4` → `actor.fields['lancer.level']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/progression.ts:24` → `a.fields['lancer.level']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:31` → `f['lancer.level']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:98` → `a.fields['lancer.level']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/startingGrants.ts:7` → `actor.fields['lancer.level']`
- `game/apps/desktop/src/tabletop/lancer/compcon.ts:30` → `f['lancer.level']`
- `game/apps/desktop/src/tabletop/lancer/CoreBonusBrowser.tsx:9` → `actor.fields['lancer.level']`
- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:46` → `actor.fields['lancer.level']`
- `game/apps/desktop/src/tabletop/lancer/PilotEquipment.tsx:5` → `f['lancer.level']`
- `game/apps/desktop/src/tabletop/lancer/WorldPilotImport.tsx:20` → `a.fields['lancer.level']`

## `lancer.levelGrant`

- `game/packages/tabletop-runtime/src/tabletop/lancer/nodeExecution.ts:39` → `a.fields['lancer.levelGrant']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/nodeExecution.ts:39` → `a.fields['lancer.levelGrant']`
- `game/apps/desktop/src/tabletop/lancer/LancerCharacter.tsx:49` → `actor.fields['lancer.levelGrant']`

## `lancer.level（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:56` → `f[`${LC}level`]`
- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:40` → `actor.fields[`${LC}level`]`

## `lancer.licenses`

- `game/packages/tabletop-runtime/src/tabletop/lancer/content.ts:27` → `a.fields['lancer.licenses']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/progression.ts:18` → `a.fields['lancer.licenses']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/progression.ts:23` → `next.fields['lancer.licenses']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:34` → `f['lancer.licenses']`
- `game/apps/desktop/src/tabletop/lancer/ProgressionEditors.tsx:27` → `actor.fields['lancer.licenses']`

## `lancer.loaded.${i}（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:27` → `actor.fields[`lancer.loaded.${i}`]`
- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:41` → `actor.fields[`lancer.loaded.${i}`]`
- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:90` → `actor.fields[`lancer.loaded.${i}`]`
- `game/packages/tabletop-runtime/src/tabletop/lancer/progression.ts:82` → `next.fields[`lancer.loaded.${i}`]`
- `game/packages/tabletop-runtime/src/tabletop/lancer/progression.ts:84` → `next.fields[`lancer.loaded.${i}`]`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/retraining.ts:44` → `actor.fields[`lancer.loaded.${i}`]`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/retraining.ts:49` → `updated.fields[`lancer.loaded.${i}`]`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:66` → `a.fields[`lancer.loaded.${i}`]`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:74` → `updated.fields[`lancer.loaded.${i}`]`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:152` → `a.fields[`lancer.loaded.${i}`]`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:155` → `next.fields[`lancer.loaded.${i}`]`
- `game/packages/game-core/src/lancer/npc-profile.ts:21` → `actor.fields[`lancer.loaded.${i}`]`
- `game/packages/game-core/src/lancer/npc.ts:49` → `actor.fields[`lancer.loaded.${i}`]`

## `lancer.loaded.${match}（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/progression.ts:84` → `baseline.fields[`lancer.loaded.${match}`]`
- `game/packages/tabletop-runtime/src/tabletop/lancer/progression.ts:84` → `baseline.fields[`lancer.loaded.${match}`]`

## `lancer.mech.maxHp`

- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:104` → `fields['lancer.mech.maxHp']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/growth.ts:15` → `actor.fields['lancer.mech.maxHp']`

## `lancer.mod.${key}（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:51` → `f[`${LC}mod.${key}`]`

## `lancer.moduleRewards`

- `game/packages/tabletop-runtime/src/tabletop/lancer/content.ts:35` → `a.fields['lancer.moduleRewards']`

## `lancer.mounts（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:61` → `f[`${LC}mounts`]`

## `lancer.nhp`

- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:46` → `actor.fields['lancer.nhp']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:46` → `actor.fields['lancer.nhp']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:78` → `actor.fields['lancer.nhp']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/maintenance.ts:13` → `a.fields['lancer.nhp']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/maintenance.ts:13` → `a.fields['lancer.nhp']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/maintenance.ts:13` → `a.fields['lancer.nhp']`
- `game/apps/desktop/src/tabletop/lancer/NhpProfile.tsx:6` → `actor.fields['lancer.nhp']`
- `game/apps/desktop/src/tabletop/lancer/NhpProfile.tsx:7` → `fields['lancer.nhp']`
- `game/apps/desktop/src/tabletop/lancer/NhpProfile.tsx:7` → `fields['lancer.nhp']`

## `lancer.npc`

- `game/packages/tabletop-runtime/src/tabletop/lancer/campaignTemplate.ts:8` → `a.fields['lancer.npc']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/campaignTemplate.ts:12` → `a.fields['lancer.npc']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:20` → `actor.fields['lancer.npc']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:73` → `actor.fields['lancer.npc']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/deployment.ts:19` → `actor.fields['lancer.npc']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/deployment.ts:30` → `a.fields['lancer.npc']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/deployment.ts:30` → `a.fields['lancer.npc']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/deployment.ts:62` → `table.actors.find(a=>a.id===u.actorId)?.fields['lancer.npc']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/frameCore.ts:8` → `actor.fields['lancer.npc']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/importPilot.ts:9` → `actor.fields['lancer.npc']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/maintenance.ts:21` → `a.fields['lancer.npc']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/nodeExecution.ts:14` → `a.fields['lancer.npc']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/reinforcements.ts:28` → `actor?.fields['lancer.npc']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/solsticeReinforcements.ts:12` → `a.fields['lancer.npc']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/solsticeReinforcements.ts:13` → `a!.fields['lancer.npc']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/wallflowerTools.ts:16` → `a.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/actorGroup.ts:8` → `actor.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/DeploymentPanel.tsx:15` → `table.actors.find(v=>v.id===a.id)?.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/Hangar.tsx:41` → `actor.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/Hangar.tsx:41` → `actor.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/Hangar.tsx:43` → `actor.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/hud/ImportantBroadcast.tsx:19` → `a.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/hud/sceneStatusModel.ts:10` → `actor?.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/hud/sceneStatusModel.ts:15` → `a.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/LancerDesktop.tsx:93` → `a.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/LancerDesktop.tsx:177` → `hangarActor?.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/MaintenancePanel.tsx:17` → `a.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/manualNodeControls.ts:7` → `a.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/npcImport.ts:43` → `actor.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/npcImport.ts:43` → `actor.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/PilotImport.tsx:14` → `a.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/useTerminalOnboarding.ts:11` → `a.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/WorldPilotImport.tsx:16` → `a.fields['lancer.npc']`
- `game/packages/game-core/src/lancer/npc.ts:25` → `actor.fields['lancer.npc']`
- `game/packages/game-core/src/lancer/npc.ts:26` → `actor.fields['lancer.npc']`
- `game/packages/game-core/src/lancer/official-tactical-mission.ts:19` → `a.fields['lancer.npc']`
- `game/packages/game-core/src/lancer/official-tactical-mission.ts:23` → `a.fields['lancer.npc']`
- `game/packages/game-core/src/lancer/official-tactical-mission.ts:173` → `a.fields['lancer.npc']`

## `lancer.npc.source`

- `game/apps/desktop/src/tabletop/lancer/npcImport.ts:44` → `actor.fields['lancer.npc.source']`

## `lancer.overcharge`

- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:89` → `actor.fields['lancer.overcharge']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/maintenance.ts:27` → `actor.fields['lancer.overcharge']`

## `lancer.overcharge（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:88` → `f[`${LC}overcharge`]`
- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:100` → `actor.fields[`${LC}overcharge`]`

## `lancer.pilot.burn`

- `game/packages/tabletop-runtime/src/tabletop/lancer/maintenance.ts:13` → `a.fields['lancer.pilot.burn']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/pilotProfile.ts:21` → `f['lancer.pilot.burn']`
- `game/apps/desktop/src/tabletop/lancer/NhpProfile.tsx:7` → `fields['lancer.pilot.burn']`

## `lancer.pilot.conditions`

- `game/packages/tabletop-runtime/src/tabletop/lancer/maintenance.ts:13` → `a.fields['lancer.pilot.conditions']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/pilotProfile.ts:8` → `f['lancer.pilot.conditions']`
- `game/apps/desktop/src/tabletop/lancer/NhpProfile.tsx:7` → `fields['lancer.pilot.conditions']`

## `lancer.pilot.damage.${slot}（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/pilotProfile.ts:15` → `f[`lancer.pilot.damage.${slot}`]`
- `game/apps/desktop/src/tabletop/lancer/PilotEquipment.tsx:5` → `f[`lancer.pilot.damage.${slot}`]`

## `lancer.pilot.dead`

- `game/packages/tabletop-runtime/src/tabletop/lancer/maintenance.ts:13` → `a.fields['lancer.pilot.dead']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/pilotProfile.ts:21` → `f['lancer.pilot.dead']`
- `game/apps/desktop/src/tabletop/lancer/NhpProfile.tsx:7` → `fields['lancer.pilot.dead']`

## `lancer.pilot.ejected`

- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:48` → `actor.fields['lancer.pilot.ejected']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:80` → `actor.fields['lancer.pilot.ejected']`

## `lancer.pilot.gear.${slot}（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/pilotProfile.ts:19` → `f[`lancer.pilot.gear.${slot}`]`
- `game/apps/desktop/src/tabletop/lancer/PilotEquipment.tsx:5` → `f[`lancer.pilot.gear.${slot}`]`
- `game/apps/desktop/src/tabletop/lancer/PilotEquipment.tsx:5` → `f[`lancer.pilot.gear.${slot}`]`

## `lancer.pilot.gearUsed.${g.id.split('-').at(-1)}（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/pilotProfile.ts:25` → `actor.fields[`lancer.pilot.gearUsed.${g.id.split('-').at(-1)}`]`

## `lancer.pilot.gearUsed.${slot}（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/maintenance.ts:13` → `a.fields[`lancer.pilot.gearUsed.${slot}`]`
- `game/packages/tabletop-runtime/src/tabletop/lancer/pilotProfile.ts:19` → `f[`lancer.pilot.gearUsed.${slot}`]`

## `lancer.pilot.hp`

- `game/packages/tabletop-runtime/src/tabletop/lancer/maintenance.ts:13` → `a.fields['lancer.pilot.hp']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/pilotProfile.ts:8` → `f['lancer.pilot.hp']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/progression.ts:87` → `next.fields['lancer.pilot.hp']`
- `game/apps/desktop/src/tabletop/lancer/NhpProfile.tsx:7` → `fields['lancer.pilot.hp']`
- `game/apps/desktop/src/tabletop/lancer/PilotEquipment.tsx:5` → `f['lancer.pilot.hp']`

## `lancer.pilot.loaded.${slot}（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/maintenance.ts:13` → `a.fields[`lancer.pilot.loaded.${slot}`]`
- `game/packages/tabletop-runtime/src/tabletop/lancer/pilotProfile.ts:16` → `f[`lancer.pilot.loaded.${slot}`]`

## `lancer.pilot.loaded.${w.mount}（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/pilotProfile.ts:26` → `actor.fields[`lancer.pilot.loaded.${w.mount}`]`

## `lancer.pilot.maxHp`

- `game/packages/tabletop-runtime/src/tabletop/lancer/pilotProfile.ts:8` → `f['lancer.pilot.maxHp']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/progression.ts:81` → `next.fields['lancer.pilot.maxHp']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/progression.ts:81` → `baseline.fields['lancer.pilot.maxHp']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/progression.ts:87` → `next.fields['lancer.pilot.maxHp']`
- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:46` → `actor.fields['lancer.pilot.maxHp']`

## `lancer.pilot.suit`

- `game/packages/tabletop-runtime/src/tabletop/lancer/pilotProfile.ts:5` → `f['lancer.pilot.suit']`
- `game/apps/desktop/src/tabletop/lancer/PilotEquipment.tsx:4` → `f['lancer.pilot.suit']`

## `lancer.pilot.unconscious`

- `game/packages/tabletop-runtime/src/tabletop/lancer/maintenance.ts:13` → `a.fields['lancer.pilot.unconscious']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/pilotProfile.ts:10` → `f['lancer.pilot.unconscious']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/progression.ts:87` → `next.fields['lancer.pilot.unconscious']`
- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:46` → `actor.fields['lancer.pilot.unconscious']`
- `game/apps/desktop/src/tabletop/lancer/NhpProfile.tsx:7` → `fields['lancer.pilot.unconscious']`

## `lancer.pilot.weapon.${slot}（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/pilotProfile.ts:12` → `f[`lancer.pilot.weapon.${slot}`]`
- `game/apps/desktop/src/tabletop/lancer/PilotEquipment.tsx:5` → `f[`lancer.pilot.weapon.${slot}`]`
- `game/apps/desktop/src/tabletop/lancer/PilotEquipment.tsx:5` → `f[`lancer.pilot.weapon.${slot}`]`

## `lancer.pilot.weaponUsed.${slot}（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/pilotProfile.ts:16` → `f[`lancer.pilot.weaponUsed.${slot}`]`

## `lancer.pilot.weaponUsed.${w.mount}（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/pilotProfile.ts:26` → `actor.fields[`lancer.pilot.weaponUsed.${w.mount}`]`

## `lancer.prototype.design`

- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:103` → `fields['lancer.prototype.design']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/prototypeEquipment.ts:21` → `actor.fields['lancer.prototype.design']`

## `lancer.prototype.plan.damage`

- `game/packages/tabletop-runtime/src/tabletop/lancer/prototypeEquipment.ts:9` → `actor.fields['lancer.prototype.plan.damage']`

## `lancer.prototype.plan.mods`

- `game/packages/tabletop-runtime/src/tabletop/lancer/prototypeEquipment.ts:10` → `actor.fields['lancer.prototype.plan.mods']`

## `lancer.prototype.plan.type`

- `game/packages/tabletop-runtime/src/tabletop/lancer/prototypeEquipment.ts:9` → `actor.fields['lancer.prototype.plan.type']`

## `lancer.rogue`

- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:35` → `actor.fields['lancer.rogue']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:38` → `actor.fields['lancer.rogue']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:66` → `f['lancer.rogue']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:68` → `f['lancer.rogue']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:68` → `f['lancer.rogue']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:74` → `f['lancer.rogue']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:84` → `f['lancer.rogue']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:100` → `actor.fields['lancer.rogue']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:31` → `f['lancer.rogue']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:98` → `a.fields['lancer.rogue']`

## `lancer.rogue.bindings`

- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:33` → `f['lancer.rogue.bindings']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:68` → `a.fields['lancer.rogue.bindings']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:68` → `a.fields['lancer.rogue.bindings']`

## `lancer.rogue.boss`

- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/battle.ts:20` → `a.fields['lancer.rogue.boss']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/objectives.ts:61` → `t.actors.find(a=>a.id===u.actorId)?.fields['lancer.rogue.boss']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/objectives.ts:73` → `t.actors.find(a=>a.id===u.actorId)?.fields['lancer.rogue.boss']`

## `lancer.rogue.bounty`

- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/battle.ts:35` → `t.actors.find(a=>a.id===p.actor)!.fields['lancer.rogue.bounty']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/battle.ts:49` → `a.fields['lancer.rogue.bounty']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/battle.ts:49` → `a.fields['lancer.rogue.bounty']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:170` → `a.fields['lancer.rogue.bounty']`

## `lancer.rogue.equipmentState`

- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/maintenance.ts:24` → `actor.fields['lancer.rogue.equipmentState']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/maintenance.ts:26` → `actor.fields['lancer.rogue.equipmentState']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/retraining.ts:43` → `updated.fields['lancer.rogue.equipmentState']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/retraining.ts:50` → `updated.fields['lancer.rogue.equipmentState']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:65` → `a.fields['lancer.rogue.equipmentState']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:74` → `actorFor(t,p).fields['lancer.rogue.equipmentState']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:151` → `a.fields['lancer.rogue.equipmentState']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:156` → `next.fields['lancer.rogue.equipmentState']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:158` → `a.fields['lancer.rogue.equipmentState']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:170` → `a.fields['lancer.rogue.equipmentState']`

## `lancer.rogue.hpDebt`

- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/growth.ts:16` → `actor.fields['lancer.rogue.hpDebt']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/growth.ts:18` → `actor.fields['lancer.rogue.hpDebt']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/maintenance.ts:29` → `actor.fields['lancer.rogue.hpDebt']`

## `lancer.rogue.manualStats`

- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/abilities.ts:35` → `a.fields['lancer.rogue.manualStats']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/abilities.ts:35` → `a.fields['lancer.rogue.manualStats']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:38` → `f['lancer.rogue.manualStats']`
- `game/apps/desktop/src/tabletop/lancer/rogue/RogueAbilityDesk.tsx:32` → `actor.fields['lancer.rogue.manualStats']`
- `game/apps/desktop/src/tabletop/lancer/rogue/RogueAbilityDesk.tsx:34` → `actor.fields['lancer.rogue.manualStats']`

## `lancer.rogue.mounts`

- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:66` → `f['lancer.rogue.mounts']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:32` → `f['lancer.rogue.mounts']`

## `lancer.rogue.portrait`

- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:98` → `a.fields['lancer.rogue.portrait']`
- `game/apps/desktop/src/tabletop/lancer/CharacterReadView.tsx:22` → `actor.fields['lancer.rogue.portrait']`
- `game/apps/desktop/src/tabletop/lancer/rogue/RogueBase.tsx:38` → `actor.fields['lancer.rogue.portrait']`
- `game/apps/desktop/src/tabletop/lancer/rogue/RogueDesktop.tsx:60` → `a?.fields['lancer.rogue.portrait']`
- `game/apps/desktop/src/tabletop/lancer/rogue/RogueDesktop.tsx:60` → `a.fields['lancer.rogue.portrait']`

## `lancer.rogue.target`

- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/ai.ts:35` → `t.actors.find(a=>a.id===u.actorId)?.fields['lancer.rogue.target']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/battle.ts:20` → `a.fields['lancer.rogue.target']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/battle.ts:20` → `a.fields['lancer.rogue.target']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/objectives.ts:73` → `t.actors.find(a=>a.id===u.actorId)?.fields['lancer.rogue.target']`
- `game/apps/desktop/src/tabletop/lancer/rogue/missionStatus.ts:13` → `table.actors.find(a=>a.id===u.actorId)?.fields['lancer.rogue.target']`

## `lancer.side`

- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:48` → `actor.fields['lancer.side']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/deployment.ts:30` → `a.fields['lancer.side']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/deployment.ts:30` → `a.fields['lancer.side']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/deployment.ts:30` → `a.fields['lancer.side']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/importPilot.ts:20` → `actor.fields['lancer.side']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/maintenance.ts:41` → `p.fields['lancer.side']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/maintenance.ts:41` → `a.fields['lancer.side']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/maintenance.ts:50` → `t.fields['lancer.side']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/maintenance.ts:50` → `a.fields['lancer.side']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/nodeExecution.ts:14` → `a.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/actorGroup.ts:6` → `actor.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/customNpc.ts:13` → `actor.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/Hangar.tsx:37` → `a.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/Hangar.tsx:37` → `a.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/Hangar.tsx:38` → `next.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/Hangar.tsx:41` → `actor.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/Hangar.tsx:41` → `t.actors.find(a=>a.id===actor.id)!.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/hud/ImportantBroadcast.tsx:19` → `a.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/hud/sceneStatusModel.ts:15` → `a.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/LancerDesktop.tsx:93` → `a.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/MaintenancePanel.tsx:17` → `a.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/MaintenancePanel.tsx:17` → `a.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/MaintenancePanel.tsx:17` → `actor.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/manualNodeControls.ts:7` → `a.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/npcImport.ts:44` → `actor.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/NpcSheet.tsx:23` → `actor.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/NpcSheet.tsx:23` → `actor.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/NpcSheet.tsx:23` → `actor.fields['lancer.side']`
- `game/packages/game-core/src/lancer/npc-profile.ts:15` → `actor.fields['lancer.side']`
- `game/packages/game-core/src/lancer/npc.ts:56` → `actor.fields['lancer.side']`
- `game/packages/game-core/src/lancer/official-tactical-mission.ts:19` → `a.fields['lancer.side']`

## `lancer.startingBonus`

- `game/packages/tabletop-runtime/src/tabletop/lancer/creation.ts:21` → `actor.fields['lancer.startingBonus']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/importPilot.ts:19` → `actor.fields['lancer.startingBonus']`
- `game/apps/desktop/src/tabletop/lancer/CreationWizard.tsx:35` → `actor.fields['lancer.startingBonus']`

## `lancer.startingGrants`

- `game/packages/tabletop-runtime/src/tabletop/lancer/importPilot.ts:16` → `actor.fields['lancer.startingGrants']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/startingGrants.ts:4` → `actor.fields['lancer.startingGrants']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/startingGrants.ts:9` → `actor.fields['lancer.startingGrants']`

## `lancer.startingLevel`

- `game/packages/tabletop-runtime/src/tabletop/lancer/creation.ts:20` → `actor.fields['lancer.startingLevel']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/importPilot.ts:19` → `actor.fields['lancer.startingLevel']`
- `game/apps/desktop/src/tabletop/lancer/CreationWizard.tsx:35` → `actor.fields['lancer.startingLevel']`
- `game/apps/desktop/src/tabletop/lancer/CreationWizard.tsx:35` → `actor.fields['lancer.startingLevel']`
- `game/apps/desktop/src/tabletop/lancer/CreationWizard.tsx:35` → `actor.fields['lancer.startingLevel']`
- `game/apps/desktop/src/tabletop/lancer/CreationWizard.tsx:35` → `actor.fields['lancer.startingLevel']`
- `game/apps/desktop/src/tabletop/lancer/GrantEditor.tsx:4` → `actor.fields['lancer.startingLevel']`

## `lancer.systems`

- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:170` → `a.fields['lancer.systems']`

## `lancer.systems（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:55` → `f[`${LC}systems`]`

## `lancer.talentWeapon.${key}.destroyed（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:90` → `actor.fields[`lancer.talentWeapon.${key}.destroyed`]`

## `lancer.talentWeapon.${key}.used（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:90` → `actor.fields[`lancer.talentWeapon.${key}.used`]`

## `lancer.talentWeapon.fuel-rod.destroyed`

- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:43` → `actor.fields['lancer.talentWeapon.fuel-rod.destroyed']`

## `lancer.talentWeapon.fuel-rod.used`

- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:43` → `actor.fields['lancer.talentWeapon.fuel-rod.used']`

## `lancer.talentWeapon.prototype.destroyed`

- `game/packages/tabletop-runtime/src/tabletop/lancer/prototypeEquipment.ts:29` → `actor.fields['lancer.talentWeapon.prototype.destroyed']`

## `lancer.talentWeapon.prototype.used`

- `game/packages/tabletop-runtime/src/tabletop/lancer/prototypeEquipment.ts:29` → `actor.fields['lancer.talentWeapon.prototype.used']`
- `game/apps/desktop/src/tabletop/lancer/TalentEquipment.tsx:11` → `actor.fields['lancer.talentWeapon.prototype.used']`

## `lancer.tokenArtwork`

- `game/apps/desktop/src/tabletop/lancer/LancerActorTokenArtwork.tsx:19` → `fields['lancer.tokenArtwork']`
- `game/apps/desktop/src/tabletop/lancer/LancerActorTokenArtwork.tsx:19` → `fields['lancer.tokenArtwork']`
- `game/apps/desktop/src/tabletop/lancer/LancerActorTokenArtwork.tsx:23` → `actor.fields['lancer.tokenArtwork']`
- `game/apps/desktop/src/tabletop/lancer/rogue/tokenArt.ts:42` → `actor?.fields['lancer.tokenArtwork']`

## `lancer.torrentDie`

- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:52` → `actor.fields['lancer.torrentDie']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:86` → `actor.fields['lancer.torrentDie']`

## `lancer.training`

- `game/packages/tabletop-runtime/src/tabletop/lancer/progression.ts:18` → `a.fields['lancer.training']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:33` → `f['lancer.training']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/startingGrants.ts:12` → `actor.fields['lancer.training']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/startingGrants.ts:12` → `actor.fields['lancer.training']`

## `lancer.training（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:49` → `f[`${LC}training`]`

## `lancer.triggers`

- `game/packages/tabletop-runtime/src/tabletop/lancer/pilotProfile.ts:21` → `f['lancer.triggers']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/progression.ts:18` → `a.fields['lancer.triggers']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/progression.ts:42` → `baseline?.fields['lancer.triggers']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/startingGrants.ts:13` → `actor.fields['lancer.triggers']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/startingGrants.ts:13` → `actor.fields['lancer.triggers']`
- `game/apps/desktop/src/tabletop/lancer/ProgressionEditors.tsx:19` → `actor.fields['lancer.triggers']`

## `lancer.version`

- `game/packages/tabletop-runtime/src/tabletop/lancer/campaignTemplate.ts:12` → `a.fields['lancer.version']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/importPilot.ts:9` → `actor.fields['lancer.version']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/progression.ts:92` → `a.fields['lancer.version']`
- `game/apps/desktop/src/tabletop/lancer/MaintenancePanel.tsx:17` → `a.fields['lancer.version']`
- `game/apps/desktop/src/tabletop/lancer/PilotImport.tsx:14` → `a.fields['lancer.version']`
- `game/apps/desktop/src/tabletop/lancer/WorldPilotImport.tsx:16` → `a.fields['lancer.version']`

## `lancer.version（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:112` → `actor.fields[`${LC}version`]`
- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:25` → `actor.fields[`${LC}version`]`
- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:29` → `actor.fields[`${LC}version`]`
- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:30` → `actor.fields[`${LC}version`]`

## `lancer.wallflower.counter.wallflower-layer`

- `game/packages/tabletop-runtime/src/tabletop/lancer/wallflowerTools.ts:16` → `a.fields['lancer.wallflower.counter.wallflower-layer']`

## `lancer.wallflower.counter.wallflower-phase`

- `game/packages/tabletop-runtime/src/tabletop/lancer/wallflowerTools.ts:16` → `a.fields['lancer.wallflower.counter.wallflower-phase']`

## `lancer.wallflower.counter.wallflower-unlocked`

- `game/packages/tabletop-runtime/src/tabletop/lancer/wallflowerTools.ts:16` → `a.fields['lancer.wallflower.counter.wallflower-unlocked']`

## `lancer.weapon.${i}（插值）`

- `game/packages/tabletop-runtime/src/tabletop/lancer/progression.ts:18` → `a.fields[`lancer.weapon.${i}`]`

## `lancer.winter.frame`

- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:53` → `f['lancer.winter.frame']`

## `lancer.wreckLost`

- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:52` → `actor.fields['lancer.wreckLost']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/combatAdapter.ts:82` → `actor.fields['lancer.wreckLost']`
- `game/apps/desktop/src/tabletop/lancer/MaintenancePanel.tsx:35` → `a.fields['lancer.wreckLost']`

## `module.condition`

- `game/packages/tabletop-runtime/src/tabletop/lancer/deployment.ts:27` → `a.fields['module.condition']`

## `module.dustgrave.ally`

- `game/packages/tabletop-runtime/src/tabletop/lancer/dustgraveTools.ts:11` → `f['module.dustgrave.ally']`

## `module.dustgrave.boss`

- `game/packages/tabletop-runtime/src/tabletop/lancer/dustgraveTools.ts:33` → `a.fields['module.dustgrave.boss']`

## `module.dustgrave.broadcast`

- `game/packages/tabletop-runtime/src/tabletop/lancer/dustgraveTools.ts:54` → `f['module.dustgrave.broadcast']`

## `module.dustgrave.carry`

- `game/packages/tabletop-runtime/src/tabletop/lancer/dustgraveTools.ts:78` → `f['module.dustgrave.carry']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/dustgraveTools.ts:78` → `f['module.dustgrave.carry']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/dustgraveTools.ts:79` → `f['module.dustgrave.carry']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/dustgraveTools.ts:81` → `f['module.dustgrave.carry']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/dustgraveTools.ts:86` → `f['module.dustgrave.carry']`

## `module.dustgrave.factoryWon`

- `game/packages/tabletop-runtime/src/tabletop/lancer/dustgraveTools.ts:11` → `f['module.dustgrave.factoryWon']`

## `module.dustgrave.siegeWon`

- `game/packages/tabletop-runtime/src/tabletop/lancer/dustgraveTools.ts:11` → `f['module.dustgrave.siegeWon']`

## `module.dustgrave.wave`

- `game/packages/tabletop-runtime/src/tabletop/lancer/dustgraveReinforcements.ts:15` → `a.fields['module.dustgrave.wave']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/dustgraveReinforcements.ts:15` → `a.fields['module.dustgrave.wave']`
- `game/packages/game-core/src/lancer/official-tactical-mission.ts:173` → `a.fields['module.dustgrave.wave']`

## `module.encounter`

- `game/packages/tabletop-runtime/src/tabletop/lancer/deployment.ts:19` → `actor.fields['module.encounter']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/dustgraveReinforcements.ts:10` → `actors[0]!.fields['module.encounter']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/wallflowerReinforcements.ts:7` → `actors[0]!.fields['module.encounter']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/wallflowerTools.ts:24` → `a.fields['module.encounter']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/winterReinforcements.ts:21` → `selected[0].fields['module.encounter']`

## `module.party`

- `game/packages/tabletop-runtime/src/tabletop/lancer/dustgraveTools.ts:43` → `f['module.party']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/sirenTools.ts:20` → `f['module.party']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/sirenTools.ts:35` → `f['module.party']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/sirenTools.ts:37` → `f['module.party']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/wallflowerTools.ts:38` → `f['module.party']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/wallflowerTools.ts:78` → `f['module.party']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/wallflowerTools.ts:82` → `f['module.party']`

## `module.phase`

- `game/packages/tabletop-runtime/src/tabletop/lancer/deployment.ts:29` → `a.fields['module.phase']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/deployment.ts:29` → `a.fields['module.phase']`
- `game/packages/game-core/src/lancer/official-tactical-mission.ts:22` → `a.fields['module.phase']`
- `game/packages/game-core/src/lancer/official-tactical-mission.ts:22` → `a.fields['module.phase']`

## `module.requires`

- `game/packages/tabletop-runtime/src/tabletop/lancer/dustgraveTools.ts:14` → `actor.fields['module.requires']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/dustgraveTools.ts:22` → `a.fields['module.requires']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/winterReinforcements.ts:7` → `actor.fields['module.requires']`
- `game/packages/game-core/src/lancer/official-tactical-mission.ts:21` → `a.fields['module.requires']`

## `module.reserve`

- `game/packages/tabletop-runtime/src/tabletop/lancer/deployment.ts:19` → `actor.fields['module.reserve']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/deployment.ts:27` → `a.fields['module.reserve']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/deployment.ts:30` → `a.fields['module.reserve']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/dustgraveReinforcements.ts:14` → `a.fields['module.reserve']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/solsticeReinforcements.ts:12` → `a.fields['module.reserve']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/wallflowerReinforcements.ts:6` → `a.fields['module.reserve']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/winterReinforcements.ts:30` → `a.fields['module.reserve']`
- `game/packages/game-core/src/lancer/official-tactical-mission.ts:20` → `a.fields['module.reserve']`

## `module.result.magma-route`

- `game/packages/tabletop-runtime/src/tabletop/lancer/sirenTools.ts:15` → `f['module.result.magma-route']`

## `module.scene`

- `game/packages/tabletop-runtime/src/tabletop/lancer/deployment.ts:17` → `actor.fields['module.scene']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/deployment.ts:19` → `actor.fields['module.scene']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/deployment.ts:24` → `a.fields['module.scene']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/deployment.ts:24` → `a.fields['module.scene']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/deployment.ts:30` → `a.fields['module.scene']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/deployment.ts:60` → `actor?.fields['module.scene']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/dustgraveReinforcements.ts:14` → `a.fields['module.scene']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/dustgraveTools.ts:22` → `a.fields['module.scene']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/dustgraveTools.ts:33` → `a.fields['module.scene']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/reinforcements.ts:32` → `actor.fields['module.scene']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/reinforcements.ts:32` → `actor.fields['module.scene']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/solsticeReinforcements.ts:12` → `a.fields['module.scene']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/solsticeReinforcements.ts:13` → `a.fields['module.scene']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/wallflowerReinforcements.ts:21` → `a.fields['module.scene']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/wallflowerTools.ts:24` → `a.fields['module.scene']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/wallflowerTools.ts:66` → `a.fields['module.scene']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/winterReinforcements.ts:30` → `a.fields['module.scene']`
- `game/packages/game-core/src/lancer/official-tactical-mission.ts:19` → `a.fields['module.scene']`
- `game/packages/game-core/src/lancer/official-tactical-mission.ts:173` → `a.fields['module.scene']`

## `module.siren.liftRound`

- `game/packages/tabletop-runtime/src/tabletop/lancer/sirenTools.ts:49` → `f['module.siren.liftRound']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/sirenTools.ts:65` → `f['module.siren.liftRound']`

## `module.siren.magmaPhase`

- `game/packages/tabletop-runtime/src/tabletop/lancer/sirenTools.ts:17` → `f['module.siren.magmaPhase']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/sirenTools.ts:33` → `f['module.siren.magmaPhase']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/sirenTools.ts:42` → `f['module.siren.magmaPhase']`

## `module.siren.magmaRoute`

- `game/packages/tabletop-runtime/src/tabletop/lancer/sirenTools.ts:19` → `f['module.siren.magmaRoute']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/sirenTools.ts:23` → `f['module.siren.magmaRoute']`

## `module.siren.terrainPrefix`

- `game/packages/tabletop-runtime/src/tabletop/lancer/sirenTools.ts:36` → `f['module.siren.terrainPrefix']`

## `module.siren.thermalShield`

- `game/packages/tabletop-runtime/src/tabletop/lancer/sirenTools.ts:23` → `f['module.siren.thermalShield']`

## `module.step`

- `game/packages/tabletop-runtime/src/tabletop/lancer/wallflowerTools.ts:59` → `f['module.step']`

## `module.wallflower.boss`

- `game/packages/tabletop-runtime/src/tabletop/lancer/wallflowerReinforcements.ts:9` → `a.fields['module.wallflower.boss']`

## `module.wallflower.councilStarted`

- `game/packages/tabletop-runtime/src/tabletop/lancer/wallflowerTools.ts:48` → `f['module.wallflower.councilStarted']`

## `module.wallflower.eidolonType`

- `game/packages/tabletop-runtime/src/tabletop/lancer/wallflowerTools.ts:59` → `f['module.wallflower.eidolonType']`

## `module.wallflower.finalFailed`

- `game/packages/tabletop-runtime/src/tabletop/lancer/wallflowerTools.ts:59` → `f['module.wallflower.finalFailed']`

## `module.wallflower.finalPrepared`

- `game/packages/tabletop-runtime/src/tabletop/lancer/wallflowerTools.ts:41` → `f['module.wallflower.finalPrepared']`

## `module.wallflower.wave`

- `game/packages/tabletop-runtime/src/tabletop/lancer/wallflowerReinforcements.ts:13` → `actors[0]!.fields['module.wallflower.wave']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/wallflowerReinforcements.ts:20` → `actors[0]!.fields['module.wallflower.wave']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/wallflowerReinforcements.ts:20` → `a!.fields['module.wallflower.wave']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/wallflowerReinforcements.ts:21` → `a.fields['module.wallflower.wave']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/wallflowerTools.ts:66` → `a.fields['module.wallflower.wave']`

## `module.wallflower.waveCopy`

- `game/packages/tabletop-runtime/src/tabletop/lancer/wallflowerTools.ts:66` → `a.fields['module.wallflower.waveCopy']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/wallflowerTools.ts:68` → `next.fields['module.wallflower.waveCopy']`

## `module.winter.blockedIz`

- `game/packages/tabletop-runtime/src/tabletop/lancer/winterReinforcements.ts:35` → `f['module.winter.blockedIz']`

## `module.winter.class`

- `game/packages/tabletop-runtime/src/tabletop/lancer/winterReinforcements.ts:11` → `actor.fields['module.winter.class']`

## `module.winter.excludedGrunt`

- `game/packages/tabletop-runtime/src/tabletop/lancer/winterReinforcements.ts:11` → `f['module.winter.excludedGrunt']`

## `module.winter.group`

- `game/packages/tabletop-runtime/src/tabletop/lancer/winterReinforcements.ts:10` → `actor.fields['module.winter.group']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/winterReinforcements.ts:13` → `a.fields['module.winter.group']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/winterReinforcements.ts:39` → `a.fields['module.winter.group']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/winterReinforcements.ts:39` → `table.actors.find(a=>a.id===u.actorId)?.fields['module.winter.group']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/winterReinforcements.ts:43` → `actor.fields['module.winter.group']`

## `module.winter.kyrosAlive`

- `game/packages/tabletop-runtime/src/tabletop/lancer/winterReinforcements.ts:8` → `f['module.winter.kyrosAlive']`

## `呼号`

- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:11` → `actor.fields['呼号']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:98` → `a.fields['呼号']`
- `game/apps/desktop/src/tabletop/lancer/CharacterReadView.tsx:24` → `actor.fields['呼号']`
- `game/apps/desktop/src/tabletop/lancer/CharacterReadView.tsx:24` → `actor.fields['呼号']`
- `game/apps/desktop/src/tabletop/lancer/compcon.ts:32` → `f['呼号']`
- `game/apps/desktop/src/tabletop/lancer/CreationWizard.tsx:36` → `actor.fields['呼号']`
- `game/apps/desktop/src/tabletop/lancer/deploymentUnitLabel.ts:7` → `actor.fields['呼号']`
- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:40` → `actor.fields['呼号']`
- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:40` → `actor.fields['呼号']`
- `game/apps/desktop/src/tabletop/lancer/rogue/RogueBase.tsx:38` → `actor.fields['呼号']`
- `game/apps/desktop/src/tabletop/lancer/rogue/RogueBase.tsx:43` → `actors.find(a=>a.id===target.actor)?.fields['呼号']`
- `game/apps/desktop/src/tabletop/lancer/rogue/RogueDesktop.tsx:60` → `a?.fields['呼号']`
- `game/apps/desktop/src/tabletop/lancer/rogue/RogueDesktop.tsx:60` → `a?.fields['呼号']`
- `game/apps/desktop/src/tabletop/lancer/terminal/Directories.tsx:44` → `actor.fields['呼号']`
- `game/apps/desktop/src/tabletop/lancer/validationWorld.ts:13` → `pilot.fields['呼号']`
- `game/apps/desktop/src/tabletop/lancer/validationWorld.ts:13` → `contact.fields['呼号']`
- `game/apps/desktop/src/tabletop/lancer/validationWorld.ts:13` → `enemy.fields['呼号']`

## `图鉴编号`

- `game/apps/desktop/src/terra/enemyArt.ts:8` → `actor.fields['图鉴编号']`

## `天赋`

- `game/apps/desktop/src/tabletop/lancer/compcon.ts:33` → `f['天赋']`

## `执照`

- `game/apps/desktop/src/tabletop/lancer/CharacterReadView.tsx:33` → `actor.fields['执照']`
- `game/apps/desktop/src/tabletop/lancer/compcon.ts:33` → `f['执照']`
- `game/apps/desktop/src/tabletop/lancer/ProgressionEditors.tsx:27` → `actor.fields['执照']`
- `game/apps/desktop/src/tabletop/lancer/ProgressionEditors.tsx:27` → `actor.fields['执照']`

## `执照等级 LL`

- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:113` → `actor.fields['执照等级 LL']`

## `机甲名`

- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:11` → `actor.fields['机甲名']`
- `game/apps/desktop/src/tabletop/lancer/CharacterReadView.tsx:25` → `actor.fields['机甲名']`
- `game/apps/desktop/src/tabletop/lancer/compcon.ts:32` → `f['机甲名']`
- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:40` → `actor.fields['机甲名']`
- `game/apps/desktop/src/tabletop/lancer/MechAssembly.tsx:37` → `actor.fields['机甲名']`
- `game/apps/desktop/src/tabletop/lancer/MechAssembly.tsx:37` → `actor.fields['机甲名']`
- `game/apps/desktop/src/tabletop/lancer/terminal/Directories.tsx:44` → `actor.fields['机甲名']`

## `机甲型号`

- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:11` → `actor.fields['机甲型号']`
- `game/packages/tabletop-runtime/src/tabletop/lancer/model.ts:114` → `actor.fields['机甲型号']`
- `game/apps/desktop/src/tabletop/lancer/battleBoardModel.ts:7` → `actor?.fields['机甲型号']`
- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:49` → `actor.fields['机甲型号']`

## `核心加成`

- `game/apps/desktop/src/tabletop/lancer/compcon.ts:33` → `f['核心加成']`

## `状态与状况`

- `game/packages/tabletop-runtime/src/tabletop/lancer/maintenance.ts:30` → `a.fields['状态与状况']`
- `game/apps/desktop/src/tabletop/lancer/CharacterReadView.tsx:36` → `actor.fields['状态与状况']`

## `立绘`

- `game/packages/tabletop-runtime/src/tabletop/lancer/rogue/run.ts:98` → `a.fields['立绘']`
- `game/apps/desktop/src/tabletop/lancer/npcImport.ts:44` → `actor.fields['立绘']`
- `game/apps/desktop/src/tabletop/lancer/rogue/RogueBase.tsx:38` → `actor.fields['立绘']`
- `game/apps/desktop/src/tabletop/lancer/rogue/RogueDesktop.tsx:60` → `a?.fields['立绘']`
- `game/apps/desktop/src/tabletop/lancer/rogue/RogueDesktop.tsx:60` → `a.fields['立绘']`

## `背景`

- `game/apps/desktop/src/tabletop/lancer/CharacterReadView.tsx:29` → `actor.fields['背景']`
- `game/apps/desktop/src/tabletop/lancer/compcon.ts:32` → `f['背景']`
- `game/apps/desktop/src/tabletop/lancer/CreationWizard.tsx:36` → `actor.fields['背景']`

## `角色类型`

- `game/apps/desktop/src/tabletop/lancer/hud/sceneStatusModel.ts:15` → `a.fields['角色类型']`
- `game/apps/desktop/src/tabletop/lancer/rogue/tokenArt.ts:51` → `actor?.fields['角色类型']`

## `触发技`

- `game/apps/desktop/src/tabletop/lancer/CharacterReadView.tsx:30` → `actor.fields['触发技']`
- `game/apps/desktop/src/tabletop/lancer/ProgressionEditors.tsx:19` → `actor.fields['触发技']`
- `game/apps/desktop/src/tabletop/lancer/ProgressionEditors.tsx:19` → `actor.fields['触发技']`

## `驾驶员装备`

- `game/apps/desktop/src/tabletop/lancer/CharacterReadView.tsx:31` → `actor.fields['驾驶员装备']`
- `game/apps/desktop/src/tabletop/lancer/CreationWizard.tsx:36` → `actor.fields['驾驶员装备']`
