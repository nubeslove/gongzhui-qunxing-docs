# 字符串扩展字段

ManualActor.fields 的所有值都是字符串。此清单列出代码直接读取或写入的字面量键及插值模式；普通任意资料字段不代表规则执行器会消费。数值、JSON 字符串和枚举的含义见各规则手册。某些参数化键由表驱动生成，须结合关联类型与注册表。

## `Token`

- `game/apps/desktop/src/tabletop/lancer/pilotArtworkTransfer.ts:5` → `a.fields['Token']`
- `game/apps/desktop/src/heartsea/CharacterSheet.tsx:17` → `actor.fields['Token']`
- `game/apps/desktop/src/heartsea/CharacterSheet.tsx:26` → `actor.fields['Token']`
- `game/apps/desktop/src/heartsea/WorldDesktop.tsx:55` → `a.fields['Token']`

## `heartsea.abilities`

- `game/apps/desktop/src/heartsea/CharacterSheet.tsx:25` → `actor.fields['heartsea.abilities']`

## `heartsea.background`

- `game/apps/desktop/src/heartsea/CharacterSheet.tsx:19` → `actor.fields['heartsea.background']`
- `game/apps/desktop/src/heartsea/CharacterSheet.tsx:25` → `actor.fields['heartsea.background']`

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

- `game/apps/desktop/src/heartsea/CharacterSheet.tsx:25` → `actor.fields['heartsea.primary']`

## `lancer.${key}（插值）`

- `game/apps/desktop/src/tabletop/lancer/compcon.ts:31` → `f[`lancer.${key}`]`
- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:23` → `actor.fields[`${LC}${key}`]`

## `lancer.actorRole`

- `game/apps/desktop/src/tabletop/lancer/actorGroup.ts:7` → `actor.fields['lancer.actorRole']`
- `game/apps/desktop/src/tabletop/lancer/Hangar.tsx:39` → `next.fields['lancer.actorRole']`

## `lancer.conditions`

- `game/packages/game-core/src/lancer/npc-profile.ts:5` → `actor.fields['lancer.conditions']`

## `lancer.cp`

- `game/apps/desktop/src/tabletop/lancer/rogue/previewFixture.ts:23` → `a.fields['lancer.cp']`

## `lancer.creation`

- `game/apps/desktop/src/tabletop/lancer/Hangar.tsx:37` → `actor.fields['lancer.creation']`
- `game/apps/desktop/src/tabletop/lancer/Hangar.tsx:38` → `a.fields['lancer.creation']`
- `game/apps/desktop/src/tabletop/lancer/LancerCharacter.tsx:25` → `actor.fields['lancer.creation']`
- `game/apps/desktop/src/tabletop/lancer/LancerCharacter.tsx:39` → `a.fields['lancer.creation']`
- `game/apps/desktop/src/tabletop/lancer/LancerCharacter.tsx:63` → `actor.fields['lancer.creation']`
- `game/apps/desktop/src/tabletop/lancer/LancerDesktop.tsx:147` → `hangarActor?.fields['lancer.creation']`
- `game/apps/desktop/src/tabletop/lancer/LancerDesktop.tsx:149` → `hangarActor?.fields['lancer.creation']`
- `game/apps/desktop/src/tabletop/lancer/LancerDesktop.tsx:149` → `hangarActor?.fields['lancer.creation']`
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

- `game/packages/game-core/src/lancer/npc-profile.ts:13` → `actor.fields[`lancer.current.${key}`]`
- `game/packages/game-core/src/lancer/npc.ts:60` → `actor.fields[`lancer.current.${key}`]`

## `lancer.current.hp`

- `game/apps/desktop/src/tabletop/lancer/rogue/previewFixture.ts:23` → `a.fields['lancer.current.hp']`

## `lancer.current.repair`

- `game/apps/desktop/src/tabletop/lancer/MaintenancePanel.tsx:23` → `a.fields['lancer.current.repair']`
- `game/apps/desktop/src/tabletop/lancer/MaintenancePanel.tsx:29` → `a.fields['lancer.current.repair']`
- `game/apps/desktop/src/tabletop/lancer/rogue/previewFixture.ts:23` → `a.fields['lancer.current.repair']`

## `lancer.current.stress`

- `game/apps/desktop/src/tabletop/lancer/rogue/previewFixture.ts:23` → `a.fields['lancer.current.stress']`

## `lancer.current.structure`

- `game/apps/desktop/src/tabletop/lancer/rogue/previewFixture.ts:23` → `a.fields['lancer.current.structure']`

## `lancer.destroyed.system.${i}（插值）`

- `game/packages/game-core/src/lancer/npc.ts:61` → `actor.fields[`lancer.destroyed.system.${i}`]`
- `game/packages/game-core/src/lancer/npc.ts:63` → `actor.fields[`lancer.destroyed.system.${i}`]`

## `lancer.destroyed.system.${systems.length-1}（插值）`

- `game/apps/desktop/src/tabletop/lancer/compcon.ts:45` → `f[`lancer.destroyed.system.${systems.length-1}`]`

## `lancer.destroyed.unit`

- `game/apps/desktop/src/tabletop/lancer/MaintenancePanel.tsx:30` → `a.fields['lancer.destroyed.unit']`
- `game/apps/desktop/src/tabletop/lancer/MaintenancePanel.tsx:34` → `a.fields['lancer.destroyed.unit']`
- `game/apps/desktop/src/tabletop/lancer/manualNodeControls.ts:7` → `a.fields['lancer.destroyed.unit']`
- `game/packages/game-core/src/lancer/npc-profile.ts:16` → `actor.fields['lancer.destroyed.unit']`
- `game/packages/game-core/src/lancer/npc.ts:66` → `actor.fields['lancer.destroyed.unit']`

## `lancer.destroyed.weapon.${i}（插值）`

- `game/packages/game-core/src/lancer/npc-profile.ts:21` → `actor.fields[`lancer.destroyed.weapon.${i}`]`
- `game/packages/game-core/src/lancer/npc.ts:59` → `actor.fields[`lancer.destroyed.weapon.${i}`]`

## `lancer.destroyed.weapon.${weapons.length-1}（插值）`

- `game/apps/desktop/src/tabletop/lancer/compcon.ts:44` → `f[`lancer.destroyed.weapon.${weapons.length-1}`]`

## `lancer.destroyed.weapon.0`

- `game/apps/desktop/src/tabletop/lancer/rogue/previewFixture.ts:23` → `a.fields['lancer.destroyed.weapon.0']`

## `lancer.frame`

- `game/apps/desktop/src/tabletop/lancer/compcon.ts:30` → `f['lancer.frame']`
- `game/apps/desktop/src/tabletop/lancer/FramePicker.tsx:10` → `actor.fields['lancer.frame']`
- `game/apps/desktop/src/tabletop/lancer/FramePicker.tsx:14` → `actor.fields['lancer.frame']`
- `game/apps/desktop/src/tabletop/lancer/MechAssembly.tsx:31` → `actor.fields['lancer.frame']`
- `game/apps/desktop/src/tabletop/lancer/ResourceCatalog.tsx:20` → `actor?.fields['lancer.frame']`
- `game/apps/desktop/src/tabletop/lancer/rogue/tokenArt.ts:12` → `actor?.fields['lancer.frame']`

## `lancer.frameLicense`

- `game/apps/desktop/src/tabletop/lancer/compcon.ts:35` → `f['lancer.frameLicense']`

## `lancer.frame（插值）`

- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:49` → `actor.fields[`${LC}frame`]`

## `lancer.import.mechId`

- `game/apps/desktop/src/tabletop/lancer/compcon.ts:34` → `f['lancer.import.mechId']`

## `lancer.import.pilotId`

- `game/apps/desktop/src/tabletop/lancer/compcon.ts:34` → `f['lancer.import.pilotId']`

## `lancer.import.source`

- `game/apps/desktop/src/tabletop/lancer/compcon.ts:34` → `f['lancer.import.source']`

## `lancer.importReceipt`

- `game/apps/desktop/src/tabletop/lancer/pilotArtworkTransfer.ts:27` → `copy.fields['lancer.importReceipt']`

## `lancer.level`

- `game/apps/desktop/src/tabletop/lancer/compcon.ts:30` → `f['lancer.level']`
- `game/apps/desktop/src/tabletop/lancer/CoreBonusBrowser.tsx:9` → `actor.fields['lancer.level']`
- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:46` → `actor.fields['lancer.level']`
- `game/apps/desktop/src/tabletop/lancer/PilotEquipment.tsx:5` → `f['lancer.level']`
- `game/apps/desktop/src/tabletop/lancer/WorldPilotImport.tsx:20` → `a.fields['lancer.level']`

## `lancer.levelGrant`

- `game/apps/desktop/src/tabletop/lancer/LancerCharacter.tsx:47` → `actor.fields['lancer.levelGrant']`

## `lancer.level（插值）`

- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:40` → `actor.fields[`${LC}level`]`

## `lancer.licenses`

- `game/apps/desktop/src/tabletop/lancer/ProgressionEditors.tsx:27` → `actor.fields['lancer.licenses']`

## `lancer.loaded.${i}（插值）`

- `game/packages/game-core/src/lancer/npc-profile.ts:21` → `actor.fields[`lancer.loaded.${i}`]`
- `game/packages/game-core/src/lancer/npc.ts:59` → `actor.fields[`lancer.loaded.${i}`]`

## `lancer.nhp`

- `game/apps/desktop/src/tabletop/lancer/NhpProfile.tsx:6` → `actor.fields['lancer.nhp']`
- `game/apps/desktop/src/tabletop/lancer/NhpProfile.tsx:7` → `fields['lancer.nhp']`
- `game/apps/desktop/src/tabletop/lancer/NhpProfile.tsx:7` → `fields['lancer.nhp']`

## `lancer.npc`

- `game/apps/desktop/src/tabletop/lancer/actorGroup.ts:8` → `actor.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/DeploymentPanel.tsx:13` → `table.actors.find(v=>v.id===a.id)?.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/DeploymentPanel.tsx:15` → `table.actors.find(v=>v.id===a.id)?.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/Hangar.tsx:42` → `actor.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/Hangar.tsx:42` → `actor.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/Hangar.tsx:43` → `actor.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/hud/ImportantBroadcast.tsx:19` → `a.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/hud/sceneStatusModel.ts:10` → `actor?.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/hud/sceneStatusModel.ts:15` → `a.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/LancerDesktop.tsx:72` → `a.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/LancerDesktop.tsx:147` → `hangarActor?.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/MaintenancePanel.tsx:16` → `a.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/manualNodeControls.ts:7` → `a.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/npcImport.ts:43` → `actor.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/npcImport.ts:43` → `actor.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/PilotImport.tsx:14` → `a.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/useTerminalOnboarding.ts:11` → `a.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/WorldPilotImport.tsx:16` → `a.fields['lancer.npc']`
- `game/packages/game-core/src/lancer/npc.ts:35` → `actor.fields['lancer.npc']`
- `game/packages/game-core/src/lancer/npc.ts:36` → `actor.fields['lancer.npc']`

## `lancer.npc.source`

- `game/apps/desktop/src/tabletop/lancer/npcImport.ts:44` → `actor.fields['lancer.npc.source']`

## `lancer.pilot.burn`

- `game/apps/desktop/src/tabletop/lancer/NhpProfile.tsx:7` → `fields['lancer.pilot.burn']`

## `lancer.pilot.conditions`

- `game/apps/desktop/src/tabletop/lancer/NhpProfile.tsx:7` → `fields['lancer.pilot.conditions']`

## `lancer.pilot.damage.${slot}（插值）`

- `game/apps/desktop/src/tabletop/lancer/PilotEquipment.tsx:5` → `f[`lancer.pilot.damage.${slot}`]`

## `lancer.pilot.dead`

- `game/apps/desktop/src/tabletop/lancer/NhpProfile.tsx:7` → `fields['lancer.pilot.dead']`

## `lancer.pilot.gear.${slot}（插值）`

- `game/apps/desktop/src/tabletop/lancer/PilotEquipment.tsx:5` → `f[`lancer.pilot.gear.${slot}`]`
- `game/apps/desktop/src/tabletop/lancer/PilotEquipment.tsx:5` → `f[`lancer.pilot.gear.${slot}`]`

## `lancer.pilot.hp`

- `game/apps/desktop/src/tabletop/lancer/NhpProfile.tsx:7` → `fields['lancer.pilot.hp']`
- `game/apps/desktop/src/tabletop/lancer/PilotEquipment.tsx:5` → `f['lancer.pilot.hp']`

## `lancer.pilot.maxHp`

- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:46` → `actor.fields['lancer.pilot.maxHp']`

## `lancer.pilot.suit`

- `game/apps/desktop/src/tabletop/lancer/PilotEquipment.tsx:4` → `f['lancer.pilot.suit']`

## `lancer.pilot.unconscious`

- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:46` → `actor.fields['lancer.pilot.unconscious']`
- `game/apps/desktop/src/tabletop/lancer/NhpProfile.tsx:7` → `fields['lancer.pilot.unconscious']`

## `lancer.pilot.weapon.${slot}（插值）`

- `game/apps/desktop/src/tabletop/lancer/PilotEquipment.tsx:5` → `f[`lancer.pilot.weapon.${slot}`]`
- `game/apps/desktop/src/tabletop/lancer/PilotEquipment.tsx:5` → `f[`lancer.pilot.weapon.${slot}`]`

## `lancer.rogue.boss`

- `game/apps/desktop/src/tabletop/lancer/rogue/tokenArt.ts:9` → `actor?.fields['lancer.rogue.boss']`

## `lancer.rogue.manualStats`

- `game/apps/desktop/src/tabletop/lancer/rogue/RogueAbilityDesk.tsx:32` → `actor.fields['lancer.rogue.manualStats']`
- `game/apps/desktop/src/tabletop/lancer/rogue/RogueAbilityDesk.tsx:34` → `actor.fields['lancer.rogue.manualStats']`

## `lancer.rogue.portrait`

- `game/apps/desktop/src/tabletop/lancer/rogue/RogueBase.tsx:28` → `actor.fields['lancer.rogue.portrait']`
- `game/apps/desktop/src/tabletop/lancer/rogue/RogueDesktop.tsx:42` → `a?.fields['lancer.rogue.portrait']`
- `game/apps/desktop/src/tabletop/lancer/rogue/RogueDesktop.tsx:42` → `a.fields['lancer.rogue.portrait']`

## `lancer.rogue.target`

- `game/apps/desktop/src/tabletop/lancer/rogue/missionStatus.ts:13` → `table.actors.find(a=>a.id===u.actorId)?.fields['lancer.rogue.target']`

## `lancer.side`

- `game/apps/desktop/src/tabletop/lancer/actorGroup.ts:6` → `actor.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/customNpc.ts:13` → `actor.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/Hangar.tsx:38` → `a.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/Hangar.tsx:38` → `a.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/Hangar.tsx:39` → `next.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/Hangar.tsx:42` → `actor.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/Hangar.tsx:42` → `t.actors.find(a=>a.id===actor.id)!.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/hud/ImportantBroadcast.tsx:19` → `a.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/hud/sceneStatusModel.ts:15` → `a.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/LancerDesktop.tsx:72` → `a.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/MaintenancePanel.tsx:16` → `a.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/MaintenancePanel.tsx:16` → `actor.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/manualNodeControls.ts:7` → `a.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/npcImport.ts:44` → `actor.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/NpcSheet.tsx:23` → `actor.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/NpcSheet.tsx:23` → `actor.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/NpcSheet.tsx:23` → `actor.fields['lancer.side']`
- `game/packages/game-core/src/lancer/npc-profile.ts:15` → `actor.fields['lancer.side']`
- `game/packages/game-core/src/lancer/npc.ts:66` → `actor.fields['lancer.side']`

## `lancer.startingBonus`

- `game/apps/desktop/src/tabletop/lancer/CreationWizard.tsx:34` → `actor.fields['lancer.startingBonus']`

## `lancer.startingLevel`

- `game/apps/desktop/src/tabletop/lancer/CreationWizard.tsx:34` → `actor.fields['lancer.startingLevel']`
- `game/apps/desktop/src/tabletop/lancer/CreationWizard.tsx:34` → `actor.fields['lancer.startingLevel']`
- `game/apps/desktop/src/tabletop/lancer/CreationWizard.tsx:34` → `actor.fields['lancer.startingLevel']`
- `game/apps/desktop/src/tabletop/lancer/CreationWizard.tsx:34` → `actor.fields['lancer.startingLevel']`
- `game/apps/desktop/src/tabletop/lancer/GrantEditor.tsx:4` → `actor.fields['lancer.startingLevel']`

## `lancer.talentWeapon.prototype.used`

- `game/apps/desktop/src/tabletop/lancer/TalentEquipment.tsx:11` → `actor.fields['lancer.talentWeapon.prototype.used']`

## `lancer.triggers`

- `game/apps/desktop/src/tabletop/lancer/ProgressionEditors.tsx:19` → `actor.fields['lancer.triggers']`

## `lancer.version`

- `game/apps/desktop/src/tabletop/lancer/PilotImport.tsx:14` → `a.fields['lancer.version']`
- `game/apps/desktop/src/tabletop/lancer/WorldPilotImport.tsx:16` → `a.fields['lancer.version']`

## `lancer.version（插值）`

- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:25` → `actor.fields[`${LC}version`]`
- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:29` → `actor.fields[`${LC}version`]`
- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:30` → `actor.fields[`${LC}version`]`

## `lancer.wreckLost`

- `game/apps/desktop/src/tabletop/lancer/MaintenancePanel.tsx:34` → `a.fields['lancer.wreckLost']`

## `呼号`

- `game/apps/desktop/src/tabletop/lancer/CharacterReadView.tsx:24` → `actor.fields['呼号']`
- `game/apps/desktop/src/tabletop/lancer/CharacterReadView.tsx:24` → `actor.fields['呼号']`
- `game/apps/desktop/src/tabletop/lancer/compcon.ts:32` → `f['呼号']`
- `game/apps/desktop/src/tabletop/lancer/CreationWizard.tsx:35` → `actor.fields['呼号']`
- `game/apps/desktop/src/tabletop/lancer/deploymentUnitLabel.ts:7` → `actor.fields['呼号']`
- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:40` → `actor.fields['呼号']`
- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:40` → `actor.fields['呼号']`
- `game/apps/desktop/src/tabletop/lancer/rogue/RogueBase.tsx:28` → `actor.fields['呼号']`
- `game/apps/desktop/src/tabletop/lancer/rogue/RogueBase.tsx:33` → `actors.find(a=>a.id===target.actor)?.fields['呼号']`
- `game/apps/desktop/src/tabletop/lancer/rogue/RogueDesktop.tsx:42` → `a?.fields['呼号']`
- `game/apps/desktop/src/tabletop/lancer/rogue/RogueDesktop.tsx:42` → `a?.fields['呼号']`
- `game/apps/desktop/src/tabletop/lancer/terminal/Directories.tsx:44` → `actor.fields['呼号']`
- `game/apps/desktop/src/tabletop/lancer/validationWorld.ts:13` → `pilot.fields['呼号']`
- `game/apps/desktop/src/tabletop/lancer/validationWorld.ts:13` → `contact.fields['呼号']`
- `game/apps/desktop/src/tabletop/lancer/validationWorld.ts:13` → `enemy.fields['呼号']`

## `天赋`

- `game/apps/desktop/src/tabletop/lancer/compcon.ts:33` → `f['天赋']`

## `执照`

- `game/apps/desktop/src/tabletop/lancer/CharacterReadView.tsx:33` → `actor.fields['执照']`
- `game/apps/desktop/src/tabletop/lancer/compcon.ts:33` → `f['执照']`
- `game/apps/desktop/src/tabletop/lancer/ProgressionEditors.tsx:27` → `actor.fields['执照']`
- `game/apps/desktop/src/tabletop/lancer/ProgressionEditors.tsx:27` → `actor.fields['执照']`

## `机甲名`

- `game/apps/desktop/src/tabletop/lancer/CharacterReadView.tsx:25` → `actor.fields['机甲名']`
- `game/apps/desktop/src/tabletop/lancer/compcon.ts:32` → `f['机甲名']`
- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:40` → `actor.fields['机甲名']`
- `game/apps/desktop/src/tabletop/lancer/MechAssembly.tsx:35` → `actor.fields['机甲名']`
- `game/apps/desktop/src/tabletop/lancer/MechAssembly.tsx:35` → `actor.fields['机甲名']`
- `game/apps/desktop/src/tabletop/lancer/terminal/Directories.tsx:44` → `actor.fields['机甲名']`

## `机甲型号`

- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:49` → `actor.fields['机甲型号']`

## `核心加成`

- `game/apps/desktop/src/tabletop/lancer/compcon.ts:33` → `f['核心加成']`

## `状态与状况`

- `game/apps/desktop/src/tabletop/lancer/CharacterReadView.tsx:36` → `actor.fields['状态与状况']`

## `立绘`

- `game/apps/desktop/src/tabletop/lancer/npcImport.ts:44` → `actor.fields['立绘']`
- `game/apps/desktop/src/tabletop/lancer/rogue/RogueBase.tsx:28` → `actor.fields['立绘']`
- `game/apps/desktop/src/tabletop/lancer/rogue/RogueDesktop.tsx:42` → `a?.fields['立绘']`
- `game/apps/desktop/src/tabletop/lancer/rogue/RogueDesktop.tsx:42` → `a.fields['立绘']`

## `背景`

- `game/apps/desktop/src/tabletop/lancer/CharacterReadView.tsx:29` → `actor.fields['背景']`
- `game/apps/desktop/src/tabletop/lancer/compcon.ts:32` → `f['背景']`
- `game/apps/desktop/src/tabletop/lancer/CreationWizard.tsx:35` → `actor.fields['背景']`

## `角色类型`

- `game/apps/desktop/src/tabletop/lancer/hud/sceneStatusModel.ts:15` → `a.fields['角色类型']`

## `触发技`

- `game/apps/desktop/src/tabletop/lancer/CharacterReadView.tsx:30` → `actor.fields['触发技']`
- `game/apps/desktop/src/tabletop/lancer/ProgressionEditors.tsx:19` → `actor.fields['触发技']`
- `game/apps/desktop/src/tabletop/lancer/ProgressionEditors.tsx:19` → `actor.fields['触发技']`

## `驾驶员装备`

- `game/apps/desktop/src/tabletop/lancer/CharacterReadView.tsx:31` → `actor.fields['驾驶员装备']`
- `game/apps/desktop/src/tabletop/lancer/CreationWizard.tsx:35` → `actor.fields['驾驶员装备']`
