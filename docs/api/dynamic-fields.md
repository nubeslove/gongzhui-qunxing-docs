# 字符串扩展字段

ManualActor.fields 的所有值都是字符串。此清单列出代码直接读取或写入的字面量键及插值模式；普通任意资料字段不代表规则执行器会消费。数值、JSON 字符串和枚举的含义见各规则手册。某些参数化键由表驱动生成，须结合关联类型与注册表。

## `Token`

- `game/apps/desktop/src/heartsea/CharacterSheet.tsx:17` → `actor.fields['Token']`
- `game/apps/desktop/src/heartsea/CharacterSheet.tsx:26` → `actor.fields['Token']`
- `game/apps/desktop/src/heartsea/tokenArtwork.ts:6` → `prior?.fields['Token']`
- `game/apps/desktop/src/heartsea/tokenArtwork.ts:6` → `actor.fields['Token']`
- `game/apps/desktop/src/heartsea/WorldDesktop.tsx:55` → `a.fields['Token']`

## `heartsea.abilities`

- `game/apps/desktop/src/heartsea/CharacterSheet.tsx:25` → `actor.fields['heartsea.abilities']`

## `heartsea.background`

- `game/apps/desktop/src/heartsea/CharacterSheet.tsx:19` → `actor.fields['heartsea.background']`
- `game/apps/desktop/src/heartsea/CharacterSheet.tsx:25` → `actor.fields['heartsea.background']`

## `heartsea.class`

- `game/apps/desktop/src/heartsea/characters.ts:9` → `a.fields['heartsea.class']`

## `heartsea.kind`

- `game/apps/desktop/src/heartsea/CharacterSheet.tsx:19` → `actor.fields['heartsea.kind']`
- `game/apps/desktop/src/heartsea/CharacterSheet.tsx:25` → `actor.fields['heartsea.kind']`
- `game/apps/desktop/src/heartsea/Home.tsx:35` → `a.fields['heartsea.kind']`
- `game/apps/desktop/src/heartsea/WorldDesktop.tsx:72` → `a.fields['heartsea.kind']`

## `heartsea.mark`

- `game/apps/desktop/src/heartsea/CharacterSheet.tsx:25` → `actor.fields['heartsea.mark']`

## `heartsea.memories`

- `game/apps/desktop/src/heartsea/CharacterSheet.tsx:23` → `actor.fields['heartsea.memories']`

## `heartsea.path`

- `game/apps/desktop/src/heartsea/CharacterSheet.tsx:25` → `actor.fields['heartsea.path']`

## `heartsea.primary`

- `game/apps/desktop/src/heartsea/characters.ts:11` → `a.fields['heartsea.primary']`
- `game/apps/desktop/src/heartsea/CharacterSheet.tsx:25` → `actor.fields['heartsea.primary']`

## `lancer.${key}（插值）`

- `game/apps/desktop/src/tabletop/lancer/compcon.ts:31` → `f[`lancer.${key}`]`
- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:23` → `actor.fields[`${LC}${key}`]`
- `game/apps/desktop/src/tabletop/lancer/model.ts:111` → `fields[`${LC}${key}`]`

## `lancer.${kind}.${i}（插值）`

- `game/apps/desktop/src/tabletop/lancer/model.ts:39` → `fields[`${LC}${kind}.${i}`]`
- `game/apps/desktop/src/tabletop/lancer/model.ts:40` → `fields[`${LC}${kind}.${i}`]`
- `game/apps/desktop/src/tabletop/lancer/model.ts:64` → `f[`${LC}${kind}.${i}`]`

## `lancer.${kind}.${j}（插值）`

- `game/apps/desktop/src/tabletop/lancer/progression.ts:80` → `baseline.fields[`lancer.${kind}.${j}`]`
- `game/apps/desktop/src/tabletop/lancer/progression.ts:80` → `baseline.fields[`lancer.${kind}.${j}`]`

## `lancer.${kind}.${match}（插值）`

- `game/apps/desktop/src/tabletop/lancer/progression.ts:81` → `baseline.fields[`lancer.${kind}.${match}`]`

## `lancer.agility（插值）`

- `game/apps/desktop/src/tabletop/lancer/model.ts:51` → `f[`${LC}agility`]`

## `lancer.ai`

- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:39` → `actor.fields['lancer.ai']`
- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:39` → `actor.fields['lancer.ai']`
- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:64` → `actor.fields['lancer.ai']`
- `game/apps/desktop/src/tabletop/lancer/maintenance.ts:13` → `a.fields['lancer.ai']`
- `game/apps/desktop/src/tabletop/lancer/maintenance.ts:13` → `a.fields['lancer.ai']`
- `game/apps/desktop/src/tabletop/lancer/maintenance.ts:13` → `a.fields['lancer.ai']`

## `lancer.base.${key}（插值）`

- `game/apps/desktop/src/tabletop/lancer/model.ts:46` → `f[`${LC}base.${key}`]`

## `lancer.brawlerDie`

- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:45` → `actor.fields['lancer.brawlerDie']`
- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:71` → `actor.fields['lancer.brawlerDie']`

## `lancer.conditions`

- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:68` → `actor.fields['lancer.conditions']`
- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:77` → `actor.fields['lancer.conditions']`

## `lancer.contentPacks`

- `game/apps/desktop/src/tabletop/lancer/content.ts:15` → `a.fields['lancer.contentPacks']`
- `game/apps/desktop/src/tabletop/lancer/content.ts:16` → `a.fields['lancer.contentPacks']`
- `game/apps/desktop/src/tabletop/lancer/progression.ts:16` → `a.fields['lancer.contentPacks']`

## `lancer.cp`

- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:73` → `actor.fields['lancer.cp']`

## `lancer.cp（插值）`

- `game/apps/desktop/src/tabletop/lancer/model.ts:83` → `f[`${LC}cp`]`

## `lancer.creation`

- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:14` → `actor.fields['lancer.creation']`
- `game/apps/desktop/src/tabletop/lancer/Hangar.tsx:22` → `a.fields['lancer.creation']`
- `game/apps/desktop/src/tabletop/lancer/Hangar.tsx:22` → `a.fields['lancer.creation']`
- `game/apps/desktop/src/tabletop/lancer/Hangar.tsx:23` → `actor.fields['lancer.creation']`
- `game/apps/desktop/src/tabletop/lancer/Hangar.tsx:23` → `actor.fields['lancer.creation']`
- `game/apps/desktop/src/tabletop/lancer/Hangar.tsx:23` → `actor.fields['lancer.creation']`
- `game/apps/desktop/src/tabletop/lancer/Hangar.tsx:23` → `actor.fields['lancer.creation']`
- `game/apps/desktop/src/tabletop/lancer/Hangar.tsx:23` → `actor.fields['lancer.creation']`
- `game/apps/desktop/src/tabletop/lancer/LancerCharacter.tsx:25` → `a.fields['lancer.creation']`
- `game/apps/desktop/src/tabletop/lancer/LancerCharacter.tsx:44` → `actor.fields['lancer.creation']`
- `game/apps/desktop/src/tabletop/lancer/progression.ts:16` → `a.fields['lancer.creation']`
- `game/apps/desktop/src/tabletop/lancer/progression.ts:85` → `next.fields['lancer.creation']`

## `lancer.current.${key}（插值）`

- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:69` → `actor.fields[`lancer.current.${key}`]`
- `game/apps/desktop/src/tabletop/lancer/model.ts:81` → `f[`${LC}current.${key}`]`
- `game/apps/desktop/src/tabletop/lancer/model.ts:100` → `fields[`${LC}current.${key}`]`
- `game/apps/desktop/src/tabletop/lancer/model.ts:117` → `next.fields[`${LC}current.${key}`]`
- `game/packages/game-core/src/lancer/npc.ts:55` → `actor.fields[`lancer.current.${key}`]`

## `lancer.current.repair`

- `game/apps/desktop/src/tabletop/lancer/MaintenancePanel.tsx:23` → `a.fields['lancer.current.repair']`
- `game/apps/desktop/src/tabletop/lancer/MaintenancePanel.tsx:29` → `a.fields['lancer.current.repair']`

## `lancer.destroyed.${kind}.${i}（插值）`

- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:74` → `actor.fields[`lancer.destroyed.${kind}.${i}`]`
- `game/apps/desktop/src/tabletop/lancer/progression.ts:79` → `next.fields[`lancer.destroyed.${kind}.${i}`]`
- `game/apps/desktop/src/tabletop/lancer/progression.ts:81` → `next.fields[`lancer.destroyed.${kind}.${i}`]`

## `lancer.destroyed.${kind}.${match}（插值）`

- `game/apps/desktop/src/tabletop/lancer/progression.ts:81` → `baseline.fields[`lancer.destroyed.${kind}.${match}`]`

## `lancer.destroyed.system.${i}（插值）`

- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:46` → `actor.fields[`lancer.destroyed.system.${i}`]`
- `game/packages/game-core/src/lancer/npc.ts:56` → `actor.fields[`lancer.destroyed.system.${i}`]`
- `game/packages/game-core/src/lancer/npc.ts:58` → `actor.fields[`lancer.destroyed.system.${i}`]`

## `lancer.destroyed.system.${systems.length-1}（插值）`

- `game/apps/desktop/src/tabletop/lancer/compcon.ts:45` → `f[`lancer.destroyed.system.${systems.length-1}`]`

## `lancer.destroyed.unit`

- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:41` → `actor.fields['lancer.destroyed.unit']`
- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:73` → `actor.fields['lancer.destroyed.unit']`
- `game/apps/desktop/src/tabletop/lancer/MaintenancePanel.tsx:30` → `a.fields['lancer.destroyed.unit']`
- `game/apps/desktop/src/tabletop/lancer/MaintenancePanel.tsx:34` → `a.fields['lancer.destroyed.unit']`
- `game/packages/game-core/src/lancer/npc.ts:61` → `actor.fields['lancer.destroyed.unit']`

## `lancer.destroyed.weapon.${i}（插值）`

- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:22` → `actor.fields[`lancer.destroyed.weapon.${i}`]`
- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:35` → `actor.fields[`lancer.destroyed.weapon.${i}`]`
- `game/packages/game-core/src/lancer/npc.ts:54` → `actor.fields[`lancer.destroyed.weapon.${i}`]`

## `lancer.destroyed.weapon.${weapons.length-1}（插值）`

- `game/apps/desktop/src/tabletop/lancer/compcon.ts:44` → `f[`lancer.destroyed.weapon.${weapons.length-1}`]`

## `lancer.engineering（插值）`

- `game/apps/desktop/src/tabletop/lancer/model.ts:51` → `f[`${LC}engineering`]`

## `lancer.frame`

- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:18` → `actor.fields['lancer.frame']`
- `game/apps/desktop/src/tabletop/lancer/compcon.ts:30` → `f['lancer.frame']`
- `game/apps/desktop/src/tabletop/lancer/content.ts:35` → `a.fields['lancer.frame']`
- `game/apps/desktop/src/tabletop/lancer/FramePicker.tsx:11` → `actor.fields['lancer.frame']`
- `game/apps/desktop/src/tabletop/lancer/progression.ts:21` → `next.fields['lancer.frame']`
- `game/apps/desktop/src/tabletop/lancer/progression.ts:21` → `next.fields['lancer.frame']`
- `game/apps/desktop/src/tabletop/lancer/ResourceCatalog.tsx:15` → `actor?.fields['lancer.frame']`

## `lancer.frameLicense`

- `game/apps/desktop/src/tabletop/lancer/compcon.ts:35` → `f['lancer.frameLicense']`
- `game/apps/desktop/src/tabletop/lancer/progression.ts:21` → `next.fields['lancer.frameLicense']`

## `lancer.frameLicense（插值）`

- `game/apps/desktop/src/tabletop/lancer/model.ts:76` → `f[`${LC}frameLicense`]`

## `lancer.frame（插值）`

- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:49` → `actor.fields[`${LC}frame`]`
- `game/apps/desktop/src/tabletop/lancer/model.ts:31` → `actor.fields[`${LC}frame`]`
- `game/apps/desktop/src/tabletop/lancer/model.ts:44` → `f[`${LC}frame`]`
- `game/apps/desktop/src/tabletop/lancer/model.ts:45` → `f[`${LC}frame`]`
- `game/apps/desktop/src/tabletop/lancer/model.ts:110` → `fields[`${LC}frame`]`

## `lancer.gunslingerDie`

- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:45` → `actor.fields['lancer.gunslingerDie']`
- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:72` → `actor.fields['lancer.gunslingerDie']`

## `lancer.hull`

- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:82` → `a.fields['lancer.hull']`
- `game/apps/desktop/src/tabletop/lancer/progression.ts:16` → `a.fields['lancer.hull']`

## `lancer.hull（插值）`

- `game/apps/desktop/src/tabletop/lancer/model.ts:51` → `f[`${LC}hull`]`

## `lancer.import.mechId`

- `game/apps/desktop/src/tabletop/lancer/compcon.ts:34` → `f['lancer.import.mechId']`

## `lancer.import.pilotId`

- `game/apps/desktop/src/tabletop/lancer/compcon.ts:34` → `f['lancer.import.pilotId']`

## `lancer.import.source`

- `game/apps/desktop/src/tabletop/lancer/compcon.ts:34` → `f['lancer.import.source']`

## `lancer.leaderPool`

- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:45` → `actor.fields['lancer.leaderPool']`
- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:45` → `actor.fields['lancer.leaderPool']`
- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:66` → `actor.fields['lancer.leaderPool']`
- `game/apps/desktop/src/tabletop/lancer/model.ts:96` → `fields['lancer.leaderPool']`

## `lancer.level`

- `game/apps/desktop/src/tabletop/lancer/compcon.ts:30` → `f['lancer.level']`
- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:46` → `actor.fields['lancer.level']`
- `game/apps/desktop/src/tabletop/lancer/PilotEquipment.tsx:5` → `f['lancer.level']`
- `game/apps/desktop/src/tabletop/lancer/pilotProfile.ts:4` → `actor.fields['lancer.level']`
- `game/apps/desktop/src/tabletop/lancer/progression.ts:22` → `a.fields['lancer.level']`

## `lancer.level（插值）`

- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:40` → `actor.fields[`${LC}level`]`
- `game/apps/desktop/src/tabletop/lancer/model.ts:52` → `f[`${LC}level`]`

## `lancer.licenses`

- `game/apps/desktop/src/tabletop/lancer/content.ts:21` → `a.fields['lancer.licenses']`
- `game/apps/desktop/src/tabletop/lancer/progression.ts:16` → `a.fields['lancer.licenses']`
- `game/apps/desktop/src/tabletop/lancer/progression.ts:21` → `next.fields['lancer.licenses']`
- `game/apps/desktop/src/tabletop/lancer/ProgressionEditors.tsx:21` → `actor.fields['lancer.licenses']`

## `lancer.loaded.${i}（插值）`

- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:22` → `actor.fields[`lancer.loaded.${i}`]`
- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:35` → `actor.fields[`lancer.loaded.${i}`]`
- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:74` → `actor.fields[`lancer.loaded.${i}`]`
- `game/apps/desktop/src/tabletop/lancer/progression.ts:79` → `next.fields[`lancer.loaded.${i}`]`
- `game/apps/desktop/src/tabletop/lancer/progression.ts:81` → `next.fields[`lancer.loaded.${i}`]`
- `game/packages/game-core/src/lancer/npc.ts:54` → `actor.fields[`lancer.loaded.${i}`]`

## `lancer.loaded.${match}（插值）`

- `game/apps/desktop/src/tabletop/lancer/progression.ts:81` → `baseline.fields[`lancer.loaded.${match}`]`
- `game/apps/desktop/src/tabletop/lancer/progression.ts:81` → `baseline.fields[`lancer.loaded.${match}`]`

## `lancer.mod.${key}（插值）`

- `game/apps/desktop/src/tabletop/lancer/model.ts:49` → `f[`${LC}mod.${key}`]`

## `lancer.mounts（插值）`

- `game/apps/desktop/src/tabletop/lancer/model.ts:57` → `f[`${LC}mounts`]`

## `lancer.nhp`

- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:40` → `actor.fields['lancer.nhp']`
- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:40` → `actor.fields['lancer.nhp']`
- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:63` → `actor.fields['lancer.nhp']`
- `game/apps/desktop/src/tabletop/lancer/maintenance.ts:13` → `a.fields['lancer.nhp']`
- `game/apps/desktop/src/tabletop/lancer/maintenance.ts:13` → `a.fields['lancer.nhp']`
- `game/apps/desktop/src/tabletop/lancer/maintenance.ts:13` → `a.fields['lancer.nhp']`
- `game/apps/desktop/src/tabletop/lancer/NhpProfile.tsx:6` → `actor.fields['lancer.nhp']`
- `game/apps/desktop/src/tabletop/lancer/NhpProfile.tsx:7` → `fields['lancer.nhp']`
- `game/apps/desktop/src/tabletop/lancer/NhpProfile.tsx:7` → `fields['lancer.nhp']`

## `lancer.npc`

- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:15` → `actor.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/deployment.ts:15` → `a.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/Hangar.tsx:23` → `actor.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/Hangar.tsx:23` → `actor.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/Hangar.tsx:24` → `actor.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/maintenance.ts:20` → `a.fields['lancer.npc']`
- `game/apps/desktop/src/tabletop/lancer/MaintenancePanel.tsx:16` → `a.fields['lancer.npc']`
- `game/packages/game-core/src/lancer/npc.ts:33` → `actor.fields['lancer.npc']`
- `game/packages/game-core/src/lancer/npc.ts:34` → `actor.fields['lancer.npc']`

## `lancer.overcharge`

- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:73` → `actor.fields['lancer.overcharge']`

## `lancer.overcharge（插值）`

- `game/apps/desktop/src/tabletop/lancer/model.ts:83` → `f[`${LC}overcharge`]`

## `lancer.pilot.burn`

- `game/apps/desktop/src/tabletop/lancer/maintenance.ts:13` → `a.fields['lancer.pilot.burn']`
- `game/apps/desktop/src/tabletop/lancer/NhpProfile.tsx:7` → `fields['lancer.pilot.burn']`
- `game/apps/desktop/src/tabletop/lancer/pilotProfile.ts:18` → `f['lancer.pilot.burn']`

## `lancer.pilot.conditions`

- `game/apps/desktop/src/tabletop/lancer/maintenance.ts:13` → `a.fields['lancer.pilot.conditions']`
- `game/apps/desktop/src/tabletop/lancer/NhpProfile.tsx:7` → `fields['lancer.pilot.conditions']`
- `game/apps/desktop/src/tabletop/lancer/pilotProfile.ts:7` → `f['lancer.pilot.conditions']`

## `lancer.pilot.damage.${slot}（插值）`

- `game/apps/desktop/src/tabletop/lancer/PilotEquipment.tsx:5` → `f[`lancer.pilot.damage.${slot}`]`
- `game/apps/desktop/src/tabletop/lancer/pilotProfile.ts:13` → `f[`lancer.pilot.damage.${slot}`]`

## `lancer.pilot.dead`

- `game/apps/desktop/src/tabletop/lancer/maintenance.ts:13` → `a.fields['lancer.pilot.dead']`
- `game/apps/desktop/src/tabletop/lancer/NhpProfile.tsx:7` → `fields['lancer.pilot.dead']`
- `game/apps/desktop/src/tabletop/lancer/pilotProfile.ts:18` → `f['lancer.pilot.dead']`

## `lancer.pilot.ejected`

- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:41` → `actor.fields['lancer.pilot.ejected']`
- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:65` → `actor.fields['lancer.pilot.ejected']`

## `lancer.pilot.gear.${slot}（插值）`

- `game/apps/desktop/src/tabletop/lancer/PilotEquipment.tsx:5` → `f[`lancer.pilot.gear.${slot}`]`
- `game/apps/desktop/src/tabletop/lancer/PilotEquipment.tsx:5` → `f[`lancer.pilot.gear.${slot}`]`
- `game/apps/desktop/src/tabletop/lancer/pilotProfile.ts:17` → `f[`lancer.pilot.gear.${slot}`]`

## `lancer.pilot.gearUsed.${g.id.split('-').at(-1)}（插值）`

- `game/apps/desktop/src/tabletop/lancer/pilotProfile.ts:22` → `actor.fields[`lancer.pilot.gearUsed.${g.id.split('-').at(-1)}`]`

## `lancer.pilot.gearUsed.${slot}（插值）`

- `game/apps/desktop/src/tabletop/lancer/maintenance.ts:13` → `a.fields[`lancer.pilot.gearUsed.${slot}`]`
- `game/apps/desktop/src/tabletop/lancer/pilotProfile.ts:17` → `f[`lancer.pilot.gearUsed.${slot}`]`

## `lancer.pilot.hp`

- `game/apps/desktop/src/tabletop/lancer/maintenance.ts:13` → `a.fields['lancer.pilot.hp']`
- `game/apps/desktop/src/tabletop/lancer/NhpProfile.tsx:7` → `fields['lancer.pilot.hp']`
- `game/apps/desktop/src/tabletop/lancer/PilotEquipment.tsx:5` → `f['lancer.pilot.hp']`
- `game/apps/desktop/src/tabletop/lancer/pilotProfile.ts:7` → `f['lancer.pilot.hp']`
- `game/apps/desktop/src/tabletop/lancer/progression.ts:84` → `next.fields['lancer.pilot.hp']`

## `lancer.pilot.loaded.${slot}（插值）`

- `game/apps/desktop/src/tabletop/lancer/maintenance.ts:13` → `a.fields[`lancer.pilot.loaded.${slot}`]`
- `game/apps/desktop/src/tabletop/lancer/pilotProfile.ts:14` → `f[`lancer.pilot.loaded.${slot}`]`

## `lancer.pilot.loaded.${w.mount}（插值）`

- `game/apps/desktop/src/tabletop/lancer/pilotProfile.ts:23` → `actor.fields[`lancer.pilot.loaded.${w.mount}`]`

## `lancer.pilot.maxHp`

- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:46` → `actor.fields['lancer.pilot.maxHp']`
- `game/apps/desktop/src/tabletop/lancer/pilotProfile.ts:7` → `f['lancer.pilot.maxHp']`
- `game/apps/desktop/src/tabletop/lancer/progression.ts:78` → `next.fields['lancer.pilot.maxHp']`
- `game/apps/desktop/src/tabletop/lancer/progression.ts:78` → `baseline.fields['lancer.pilot.maxHp']`
- `game/apps/desktop/src/tabletop/lancer/progression.ts:84` → `next.fields['lancer.pilot.maxHp']`

## `lancer.pilot.suit`

- `game/apps/desktop/src/tabletop/lancer/PilotEquipment.tsx:4` → `f['lancer.pilot.suit']`
- `game/apps/desktop/src/tabletop/lancer/pilotProfile.ts:5` → `f['lancer.pilot.suit']`

## `lancer.pilot.unconscious`

- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:46` → `actor.fields['lancer.pilot.unconscious']`
- `game/apps/desktop/src/tabletop/lancer/maintenance.ts:13` → `a.fields['lancer.pilot.unconscious']`
- `game/apps/desktop/src/tabletop/lancer/NhpProfile.tsx:7` → `fields['lancer.pilot.unconscious']`
- `game/apps/desktop/src/tabletop/lancer/pilotProfile.ts:9` → `f['lancer.pilot.unconscious']`
- `game/apps/desktop/src/tabletop/lancer/progression.ts:84` → `next.fields['lancer.pilot.unconscious']`

## `lancer.pilot.weapon.${slot}（插值）`

- `game/apps/desktop/src/tabletop/lancer/PilotEquipment.tsx:5` → `f[`lancer.pilot.weapon.${slot}`]`
- `game/apps/desktop/src/tabletop/lancer/PilotEquipment.tsx:5` → `f[`lancer.pilot.weapon.${slot}`]`
- `game/apps/desktop/src/tabletop/lancer/pilotProfile.ts:11` → `f[`lancer.pilot.weapon.${slot}`]`

## `lancer.prototype.design`

- `game/apps/desktop/src/tabletop/lancer/model.ts:98` → `fields['lancer.prototype.design']`
- `game/apps/desktop/src/tabletop/lancer/prototypeEquipment.ts:21` → `actor.fields['lancer.prototype.design']`

## `lancer.prototype.plan.damage`

- `game/apps/desktop/src/tabletop/lancer/prototypeEquipment.ts:9` → `actor.fields['lancer.prototype.plan.damage']`

## `lancer.prototype.plan.mods`

- `game/apps/desktop/src/tabletop/lancer/prototypeEquipment.ts:10` → `actor.fields['lancer.prototype.plan.mods']`

## `lancer.prototype.plan.type`

- `game/apps/desktop/src/tabletop/lancer/prototypeEquipment.ts:9` → `actor.fields['lancer.prototype.plan.type']`

## `lancer.side`

- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:41` → `actor.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/deployment.ts:15` → `a.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/Hangar.tsx:22` → `a.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/Hangar.tsx:22` → `a.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/Hangar.tsx:23` → `actor.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/Hangar.tsx:23` → `t.actors.find(a=>a.id===actor.id)!.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/maintenance.ts:40` → `p.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/maintenance.ts:40` → `a.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/maintenance.ts:49` → `t.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/maintenance.ts:49` → `a.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/MaintenancePanel.tsx:16` → `a.fields['lancer.side']`
- `game/apps/desktop/src/tabletop/lancer/MaintenancePanel.tsx:16` → `actor.fields['lancer.side']`
- `game/packages/game-core/src/lancer/npc.ts:61` → `actor.fields['lancer.side']`

## `lancer.systems（插值）`

- `game/apps/desktop/src/tabletop/lancer/model.ts:51` → `f[`${LC}systems`]`

## `lancer.talentWeapon.${key}.destroyed（插值）`

- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:74` → `actor.fields[`lancer.talentWeapon.${key}.destroyed`]`

## `lancer.talentWeapon.${key}.used（插值）`

- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:74` → `actor.fields[`lancer.talentWeapon.${key}.used`]`

## `lancer.talentWeapon.fuel-rod.destroyed`

- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:37` → `actor.fields['lancer.talentWeapon.fuel-rod.destroyed']`

## `lancer.talentWeapon.fuel-rod.used`

- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:37` → `actor.fields['lancer.talentWeapon.fuel-rod.used']`

## `lancer.talentWeapon.prototype.destroyed`

- `game/apps/desktop/src/tabletop/lancer/prototypeEquipment.ts:29` → `actor.fields['lancer.talentWeapon.prototype.destroyed']`

## `lancer.talentWeapon.prototype.used`

- `game/apps/desktop/src/tabletop/lancer/prototypeEquipment.ts:29` → `actor.fields['lancer.talentWeapon.prototype.used']`
- `game/apps/desktop/src/tabletop/lancer/TalentEquipment.tsx:11` → `actor.fields['lancer.talentWeapon.prototype.used']`

## `lancer.torrentDie`

- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:45` → `actor.fields['lancer.torrentDie']`
- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:70` → `actor.fields['lancer.torrentDie']`

## `lancer.training`

- `game/apps/desktop/src/tabletop/lancer/progression.ts:16` → `a.fields['lancer.training']`

## `lancer.training（插值）`

- `game/apps/desktop/src/tabletop/lancer/model.ts:47` → `f[`${LC}training`]`

## `lancer.triggers`

- `game/apps/desktop/src/tabletop/lancer/pilotProfile.ts:18` → `f['lancer.triggers']`
- `game/apps/desktop/src/tabletop/lancer/progression.ts:16` → `a.fields['lancer.triggers']`
- `game/apps/desktop/src/tabletop/lancer/progression.ts:40` → `baseline?.fields['lancer.triggers']`
- `game/apps/desktop/src/tabletop/lancer/ProgressionEditors.tsx:14` → `actor.fields['lancer.triggers']`

## `lancer.version`

- `game/apps/desktop/src/tabletop/lancer/progression.ts:89` → `a.fields['lancer.version']`

## `lancer.version（插值）`

- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:25` → `actor.fields[`${LC}version`]`
- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:29` → `actor.fields[`${LC}version`]`
- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:30` → `actor.fields[`${LC}version`]`
- `game/apps/desktop/src/tabletop/lancer/model.ts:106` → `actor.fields[`${LC}version`]`

## `lancer.wreckLost`

- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:45` → `actor.fields['lancer.wreckLost']`
- `game/apps/desktop/src/tabletop/lancer/combatAdapter.ts:67` → `actor.fields['lancer.wreckLost']`
- `game/apps/desktop/src/tabletop/lancer/MaintenancePanel.tsx:34` → `a.fields['lancer.wreckLost']`

## `呼号`

- `game/apps/desktop/src/tabletop/lancer/CharacterReadView.tsx:16` → `actor.fields['呼号']`
- `game/apps/desktop/src/tabletop/lancer/CharacterReadView.tsx:16` → `actor.fields['呼号']`
- `game/apps/desktop/src/tabletop/lancer/compcon.ts:32` → `f['呼号']`
- `game/apps/desktop/src/tabletop/lancer/CreationWizard.tsx:28` → `actor.fields['呼号']`
- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:40` → `actor.fields['呼号']`
- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:40` → `actor.fields['呼号']`
- `game/apps/desktop/src/tabletop/lancer/pilotProfile.ts:18` → `actor.fields['呼号']`

## `天赋`

- `game/apps/desktop/src/tabletop/lancer/compcon.ts:33` → `f['天赋']`

## `执照`

- `game/apps/desktop/src/tabletop/lancer/CharacterReadView.tsx:22` → `actor.fields['执照']`
- `game/apps/desktop/src/tabletop/lancer/compcon.ts:33` → `f['执照']`
- `game/apps/desktop/src/tabletop/lancer/ProgressionEditors.tsx:21` → `actor.fields['执照']`
- `game/apps/desktop/src/tabletop/lancer/ProgressionEditors.tsx:21` → `actor.fields['执照']`

## `执照等级 LL`

- `game/apps/desktop/src/tabletop/lancer/model.ts:107` → `actor.fields['执照等级 LL']`

## `机甲名`

- `game/apps/desktop/src/tabletop/lancer/CharacterReadView.tsx:16` → `actor.fields['机甲名']`
- `game/apps/desktop/src/tabletop/lancer/CharacterReadView.tsx:16` → `actor.fields['机甲名']`
- `game/apps/desktop/src/tabletop/lancer/CharacterReadView.tsx:23` → `actor.fields['机甲名']`
- `game/apps/desktop/src/tabletop/lancer/compcon.ts:32` → `f['机甲名']`
- `game/apps/desktop/src/tabletop/lancer/CreationWizard.tsx:32` → `actor.fields['机甲名']`
- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:40` → `actor.fields['机甲名']`

## `机甲型号`

- `game/apps/desktop/src/tabletop/lancer/CharacterReadView.tsx:16` → `actor.fields['机甲型号']`
- `game/apps/desktop/src/tabletop/lancer/LancerSheet.tsx:49` → `actor.fields['机甲型号']`
- `game/apps/desktop/src/tabletop/lancer/model.ts:108` → `actor.fields['机甲型号']`

## `核心加成`

- `game/apps/desktop/src/tabletop/lancer/compcon.ts:33` → `f['核心加成']`

## `状态与状况`

- `game/apps/desktop/src/tabletop/lancer/CharacterReadView.tsx:25` → `actor.fields['状态与状况']`
- `game/apps/desktop/src/tabletop/lancer/maintenance.ts:29` → `a.fields['状态与状况']`

## `背景`

- `game/apps/desktop/src/tabletop/lancer/CharacterReadView.tsx:20` → `actor.fields['背景']`
- `game/apps/desktop/src/tabletop/lancer/compcon.ts:32` → `f['背景']`
- `game/apps/desktop/src/tabletop/lancer/CreationWizard.tsx:28` → `actor.fields['背景']`

## `触发技`

- `game/apps/desktop/src/tabletop/lancer/CharacterReadView.tsx:20` → `actor.fields['触发技']`
- `game/apps/desktop/src/tabletop/lancer/CharacterReadView.tsx:20` → `actor.fields['触发技']`
- `game/apps/desktop/src/tabletop/lancer/ProgressionEditors.tsx:14` → `actor.fields['触发技']`
- `game/apps/desktop/src/tabletop/lancer/ProgressionEditors.tsx:14` → `actor.fields['触发技']`

## `驾驶员装备`

- `game/apps/desktop/src/tabletop/lancer/CharacterReadView.tsx:20` → `actor.fields['驾驶员装备']`
- `game/apps/desktop/src/tabletop/lancer/CreationWizard.tsx:28` → `actor.fields['驾驶员装备']`
