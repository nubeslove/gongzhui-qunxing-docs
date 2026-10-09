# AAF世界动作参数

当前注册103个命令。下面从实际处理器提取读取的action字段、直接校验表达式、拒绝条件和转交类型；不是凭命令名称猜测的接口。嵌套结构和业务检查继续沿“转交类型”到[符号索引](../../reference/README.md)查询。

完整外层为WorldCommand：requestId、expectedRevision、action.kind。静态提取中的条件为**拒绝条件**，不是应填入JSON的值；局部变量需结合对应类型理解。参数表不把“代码读取过”误写成“所有场景都必填”，可选性以联合类型／解析器为准。

[机器可读动作表](../../reference/action-parameters.json) · [解析器范围／默认值表达式](../../reference/parser-constraints.json) · [命令事务与联机](commands-and-network.md)

数值参数的requireInteger(value,min,max)表示闭区间整数；requireText(value,max)是非空受限文字，optionalText允许空串。默认值如action.quantity ?? 1只在参数省略时使用。

## aaf.level

来源：`game/packages/session/src/world-aaf.ts` 第29行。共享world-aaf入口还检查战斗锁、角色一致性并递增aaf.revision；具体分支可有额外GM限制。

读取字段：`actorId`、`expected`、`level`、`extraTp`。

直接校验：

- `ownedActor(world, action.actorId, context)`
- `action.expected === current.revision`
- `assertGm(context)`
- `requireInteger(action.level, 1, 20)`
- `requireInteger(action.extraTp, 0, 1000)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `aaf.buildApplied&&next!==aaf.level`
- `aafTpSpent(aaf) > aafTpTotal(next) + aaf.extraTp`

</details>

## aaf.learning

来源：`game/packages/session/src/world-aaf.ts` 第37行。共享world-aaf入口还检查战斗锁、角色一致性并递增aaf.revision；具体分支可有额外GM限制。

读取字段：`actorId`、`expected`、`window`。

转交类型：`'long-rest' | 'item' | 'closed'`。

直接校验：

- `ownedActor(world, action.actorId, context)`
- `action.expected === current.revision`
- `assertGm(context)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!['long-rest', 'item', 'closed'].includes(String(action.window))`

</details>

## aaf.talent.learn

来源：`game/packages/session/src/world-aaf.ts` 第43行。共享world-aaf入口还检查战斗锁、角色一致性并递增aaf.revision；具体分支可有额外GM限制。

读取字段：`actorId`、`expected`、`nodeId`。

直接校验：

- `ownedActor(world, action.actorId, context)`
- `action.expected === current.revision`
- `requireId(action.nodeId)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!node`
- `reason`

</details>

## aaf.talent.refund

来源：`game/packages/session/src/world-aaf.ts` 第48行。共享world-aaf入口还检查战斗锁、角色一致性并递增aaf.revision；具体分支可有额外GM限制。

读取字段：`actorId`、`expected`、`nodeId`。

直接校验：

- `ownedActor(world, action.actorId, context)`
- `action.expected === current.revision`
- `requireId(action.nodeId)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!['creation', 'long-rest', 'item'].includes(aaf.learning)`

</details>

## aaf.item.grant

来源：`game/packages/session/src/world-aaf.ts` 第53行。共享world-aaf入口还检查战斗锁、角色一致性并递增aaf.revision；具体分支可有额外GM限制。

读取字段：`actorId`、`expected`、`definition`、`definitionId`、`id`。

直接校验：

- `ownedActor(world, action.actorId, context)`
- `action.expected === current.revision`
- `assertGm(context)`
- `requireId(action.definitionId)`
- `parseAafItemDefinition(action.definition)`
- `requireId(action.id)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!definition`

</details>

## aaf.item.equip

来源：`game/packages/session/src/world-aaf.ts` 第59行。共享world-aaf入口还检查战斗锁、角色一致性并递增aaf.revision；具体分支可有额外GM限制。

读取字段：`actorId`、`expected`、`id`、`equipped`、`slot`、`hostId`。

直接校验：

- `ownedActor(world, action.actorId, context)`
- `action.expected === current.revision`
- `requireId(action.id)`
- `requireBoolean(action.equipped)`
- `requireText(action.slot &#124;&#124; '配件', 100)`
- `requireId(action.hostId)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!item`

</details>

## aaf.item.quality

来源：`game/packages/session/src/world-aaf.ts` 第65行。共享world-aaf入口还检查战斗锁、角色一致性并递增aaf.revision；具体分支可有额外GM限制。

读取字段：`actorId`、`expected`、`id`、`defective`。

直接校验：

- `ownedActor(world, action.actorId, context)`
- `action.expected === current.revision`
- `assertGm(context)`
- `requireId(action.id)`
- `requireBoolean(action.defective)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!item`

</details>

## aaf.item.active

来源：`game/packages/session/src/world-aaf.ts` 第71行。共享world-aaf入口还检查战斗锁、角色一致性并递增aaf.revision；具体分支可有额外GM限制。

读取字段：`actorId`、`expected`、`reason`、`id`、`equipped`。

直接校验：

- `ownedActor(world, action.actorId, context)`
- `action.expected === current.revision`
- `assertGm(context)`
- `requireText(action.reason, 1000)`
- `requireId(action.id)`
- `requireBoolean(action.equipped)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!item`

</details>

## aaf.item.transfer

来源：`game/packages/session/src/world-aaf.ts` 第96行。共享world-aaf入口还检查战斗锁、角色一致性并递增aaf.revision；具体分支可有额外GM限制。

读取字段：`actorId`、`expected`、`id`、`targetId`、`targetExpected`。

直接校验：

- `ownedActor(world, action.actorId, context)`
- `action.expected === current.revision`
- `assertGm(context)`
- `requireId(action.id)`
- `requireId(action.targetId)`
- `parseAafCharacter(next)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!item&#124;&#124;!target&#124;&#124;target.id===actor.id`
- `worldActorBusy(world,target.id)`
- `action.targetExpected!==next.revision`
- `invalid.length`

</details>

## aaf.item.consume

来源：`game/packages/session/src/world-aaf.ts` 第91行。共享world-aaf入口还检查战斗锁、角色一致性并递增aaf.revision；具体分支可有额外GM限制。

读取字段：`actorId`、`expected`、`id`。

直接校验：

- `ownedActor(world, action.actorId, context)`
- `action.expected === current.revision`
- `requireId(action.id)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!item?.definition.tags.includes('consumable')&#124;&#124;item.definition.shape.length`

</details>

## aaf.layout

来源：`game/packages/session/src/world-aaf.ts` 第76行。共享world-aaf入口还检查战斗锁、角色一致性并递增aaf.revision；具体分支可有额外GM限制。

读取字段：`actorId`、`expected`、`preparationMinutes`、`placements`、`automatic`、`targets`。

直接校验：

- `ownedActor(world, action.actorId, context)`
- `action.expected === current.revision`
- `parseAafCharacter({ ...aaf, placements: action.placements, automatic: action.automatic ?? aaf.automatic, targets: action.targets ?? aaf.targets })`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `action.preparationMinutes !== 10`

</details>

## aaf.item.use

来源：`game/packages/session/src/world-aaf.ts` 第82行。共享world-aaf入口还检查战斗锁、角色一致性并递增aaf.revision；具体分支可有额外GM限制。

读取字段：`actorId`、`expected`、`id`。

直接校验：

- `ownedActor(world, action.actorId, context)`
- `action.expected === current.revision`
- `requireId(action.id)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!item &#124;&#124; !item.definition.maxUses`
- `!aafItemActive(aaf, item)`
- `!pool`

</details>

## aaf.rest.complete

来源：`game/packages/session/src/world-aaf.ts` 第109行。共享world-aaf入口还检查战斗锁、角色一致性并递增aaf.revision；具体分支可有额外GM限制。

读取字段：`actorId`、`expected`、`heldThroughout`、`heldItemIds`。

转交类型：`string[]`。

直接校验：

- `ownedActor(world, action.actorId, context)`
- `action.expected === current.revision`
- `assertGm(context)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `action.heldThroughout !== true`

</details>

## aaf.resources.refresh

来源：`game/packages/session/src/world-aaf.ts` 第24行。共享world-aaf入口还检查战斗锁、角色一致性并递增aaf.revision；具体分支可有额外GM限制。

读取字段：`actorId`、`expected`、`catalogRevision`。

直接校验：

- `ownedActor(world, action.actorId, context)`
- `action.expected === current.revision`
- `assertGm(context)`
- `parseAafCharacter(aafRefreshResources(aaf,catalog))`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `action.catalogRevision!==catalog.revision`

</details>

## aaf.build.save

来源：`game/packages/session/src/world-aaf-character.ts` 第27行。共享world-aaf入口还检查战斗锁、角色一致性并递增aaf.revision；具体分支可有额外GM限制。

读取字段：`actorId`、`expected`、`build`、`apply`。

直接校验：

- `ownedActor(world, action.actorId, context)`
- `action.expected === current.revision`
- `parseAafBuild(action.build)`
- `assertGm(context)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `build.sourceRevision!==AAF_CREATION.revision&&aaf.build?.sourceRevision!==build.sourceRevision`
- `(build.status!=='draft'&#124;&#124;action.apply===true)&&issues.length`

</details>

## aaf.build.roll

来源：`game/packages/session/src/world-aaf-character.ts` 第23行。共享world-aaf入口还检查战斗锁、角色一致性并递增aaf.revision；具体分支可有额外GM限制。

读取字段：`actorId`、`expected`。

直接校验：

- `ownedActor(world, action.actorId, context)`
- `action.expected === current.revision`
- `assertGm(context)`

## aaf.gear.equip

来源：`game/packages/session/src/world-aaf-character.ts` 第66行。共享world-aaf入口还检查战斗锁、角色一致性并递增aaf.revision；具体分支可有额外GM限制。

读取字段：`actorId`、`expected`、`slot`、`id`。

直接校验：

- `ownedActor(world, action.actorId, context)`
- `action.expected === current.revision`
- `requireText(action.slot,100)`
- `requireId(action.id)`

## aaf.gear.base

来源：`game/packages/session/src/world-aaf-character.ts` 第58行。共享world-aaf入口还检查战斗锁、角色一致性并递增aaf.revision；具体分支可有额外GM限制。

读取字段：`actorId`、`expected`、`id`、`definitionId`。

直接校验：

- `ownedActor(world, action.actorId, context)`
- `action.expected === current.revision`
- `assertGm(context)`
- `requireId(action.id)`
- `requireId(action.definitionId)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!item&#124;&#124;item.definition.kind!=='equipment'&#124;&#124;item.hostId&#124;&#124;!base?.physical&#124;&#124;!base.slots.length`

</details>

## aaf.gear.buy

来源：`game/packages/session/src/world-aaf-character.ts` 第50行。共享world-aaf入口还检查战斗锁、角色一致性并递增aaf.revision；具体分支可有额外GM限制。

读取字段：`actorId`、`expected`、`definitionId`、`quantity`、`id`、`grant`。

直接校验：

- `ownedActor(world, action.actorId, context)`
- `action.expected === current.revision`
- `requireId(action.definitionId)`
- `requireInteger(action.quantity??1,1,99)`
- `requireId(action.id)`
- `assertGm(context)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!definition`
- `!definition.physical?.stackable&&quantity!==1`
- `(aaf.purseSp??0)<cost`

</details>

## aaf.bag.move

来源：`game/packages/session/src/world-aaf-character.ts` 第73行。共享world-aaf入口还检查战斗锁、角色一致性并递增aaf.revision；具体分支可有额外GM限制。

读取字段：`actorId`、`expected`、`id`、`index`、`stow`。

直接校验：

- `ownedActor(world, action.actorId, context)`
- `action.expected === current.revision`
- `requireId(action.id)`
- `requireInteger(action.index,0,511)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!item`
- `action.stow===true`
- `item.definition.kind!=='equipment'&#124;&#124;item.hostId`
- `other&&other.id!==item.id&&!other.equipped&&!item.equipped&&item.definition.physical?.stackable&&!item.definition.shape.length&&JSON.stringify(item.definition)===JSON.stringify(other.definition)`
- `quantity>9999`

</details>

## aaf.bag.split

来源：`game/packages/session/src/world-aaf-character.ts` 第82行。共享world-aaf入口还检查战斗锁、角色一致性并递增aaf.revision；具体分支可有额外GM限制。

读取字段：`actorId`、`expected`、`id`、`newId`、`quantity`。

直接校验：

- `ownedActor(world, action.actorId, context)`
- `action.expected === current.revision`
- `requireId(action.id)`
- `requireId(action.newId)`
- `requireInteger(action.quantity,1,(item.quantity??1)-1)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!item?.definition.physical?.stackable&#124;&#124;item.equipped`

</details>

## aaf.purse

来源：`game/packages/session/src/world-aaf-character.ts` 第87行。共享world-aaf入口还检查战斗锁、角色一致性并递增aaf.revision；具体分支可有额外GM限制。

读取字段：`actorId`、`expected`、`value`。

直接校验：

- `ownedActor(world, action.actorId, context)`
- `action.expected === current.revision`
- `assertGm(context)`
- `requireInteger(action.value,0,100000000)`

## aaf.hand

来源：`game/packages/session/src/world-aaf-character.ts` 第70行。共享world-aaf入口还检查战斗锁、角色一致性并递增aaf.revision；具体分支可有额外GM限制。

读取字段：`actorId`、`expected`、`hand`。

转交类型：`'左手'|'右手'`。

直接校验：

- `ownedActor(world, action.actorId, context)`
- `action.expected === current.revision`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!['左手','右手'].includes(String(action.hand))`

</details>

## aaf.skill.roll

来源：`game/packages/session/src/world-aaf-character.ts` 第16行。共享world-aaf入口还检查战斗锁、角色一致性并递增aaf.revision；具体分支可有额外GM限制。

读取字段：`actorId`、`expected`、`skill`、`messageId`。

直接校验：

- `ownedActor(world, action.actorId, context)`
- `action.expected === current.revision`
- `requireText(action.skill,100)`
- `requireId(action.messageId)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!aaf.build&#124;&#124;!aaf.buildApplied`
- `!AAF_CREATION.skills.includes(skill)`

</details>

## aaf.speed.set

来源：`game/packages/session/src/world-aaf-character.ts` 第12行。共享world-aaf入口还检查战斗锁、角色一致性并递增aaf.revision；具体分支可有额外GM限制。

读取字段：`actorId`、`expected`、`speeds`。

直接校验：

- `ownedActor(world, action.actorId, context)`
- `action.expected === current.revision`
- `assertGm(context)`
- `isAafMovementSpeeds(action.speeds)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!isAafMovementSpeeds(action.speeds)`

</details>

## aaf.catalog

来源：`game/packages/session/src/world-aaf.ts` 第125行。

读取字段：`expected`、`catalog`。

直接校验：

- `assertGm(context)`
- `parseAafCatalog(action.catalog)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `(world.aafCatalog?.revision ?? AAF_CATALOG.revision) !== action.expected`

</details>

## encounter.manage

来源：`game/packages/session/src/world-encounter.ts` 第20行。

读取字段：`sceneId`、`command`。

转交类型：`EncounterCommand`。

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `scene.id!==world.activeSceneId`
- `command.op==='award'`
- `!a`

</details>

## scene.resize

来源：`game/packages/session/src/world-scene-resize.ts` 第8行。

读取字段：`expectedRevision`、`sceneId`、`request`。

直接校验：

- `assertGm(context)`
- `requireId(action.sceneId)`
- `parseSceneMap(map)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!scene`
- `scene.combat`

</details>

## compendium.import

来源：`game/packages/session/src/world-compendium-import.ts` 第13行。

读取字段：`leaseId`。

直接校验：

- `assertGm(context)`
- `requireId(action.leaseId)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!batch`

</details>

## directory.table

来源：`game/packages/session/src/world-directory-table.ts` 第3行。

读取字段：无额外直接字段。

转交类型：`DirectoryTableCommand`。

直接校验：

- `assertGm(context)`

## directory.delete

来源：`game/packages/session/src/world-directory-delete.ts` 第5行。

读取字段：无额外直接字段。

转交类型：`DirectoryDeleteCommand`。

直接校验：

- `assertGm(context)`

## directory.access

来源：`game/packages/session/src/world-directory-access.ts` 第4行。

读取字段：无额外直接字段。

转交类型：`DirectoryAccessCommand`。

直接校验：

- `assertGm(context)`

## actor.owned

来源：`game/packages/session/src/world-owned-items.ts` 第6行。

读取字段：`actorId`。

转交类型：`OwnedItemCommand`。

直接校验：

- `ownedActor(world,action.actorId,context)`

## actor.sheet

来源：`game/packages/session/src/world-actor-access.ts` 第14行。

读取字段：`id`、`before`、`profile`。

直接校验：

- `ownedActor(world,action.id,context)`
- `actorProfile(action.before)`
- `actorProfile(action.profile)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `worldActorBusy(world,actor.id)`
- `canonicalJson(actor.profile)!==canonicalJson(actorProfile(action.before))`
- `!context.isGm&&context.senderId!==context.hostId&&JSON.stringify(next.aafRules)!==JSON.stringify(actor.profile.aafRules)`

</details>

## actor.access

来源：`game/packages/session/src/world-actor-access.ts` 第15行。

读取字段：`id`、`before`、`value`。

直接校验：

- `assertGm(context)`
- `requireId(action.id)`
- `parseActorAccess(action.before)`
- `parseActorAccess(action.value)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!actor`
- `canonicalJson(actorOwnership(actor))!==canonicalJson(parseActorAccess(action.before))`

</details>

## actor.copy

来源：`game/packages/session/src/world-actor-transfer.ts` 第1行。

读取字段：`id`、`name`、`targetId`、`folderId`、`sourceId`、`expected`、`file`。

转交类型：`ActorTransferCommand`。

直接校验：

- `parseActorFile(raw)`
- `parseActor(file.actor)`
- `requireId(action.id)`
- `requireText(action.name,200)`
- `requireId(action.targetId)`
- `requireId(action.sourceId)`
- `parseActorFile(action.expected)`
- `parseActorFile(action.file)`
- `assertGm(context)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!actor`
- `!c`
- `file.systemId!=='aaf'`
- `action.kind==='actor.import'&&action.targetId!==undefined&&(!target&#124;&#124;target.id!==id)`
- `target?.tokenInstance`
- `!target&&world.actors[id]`
- `target&&action.folderId!==undefined`
- `action.kind==='actor.copy'`
- `canonicalJson(file)!==canonicalJson(parseActorFile(action.expected))`
- `target&&canonicalJson(exportWorldActor(world,target.id))!==canonicalJson(parseActorFile(action.expected))`

</details>

## actor.import

来源：`game/packages/session/src/world-actor-transfer.ts` 第1行。

读取字段：`id`、`name`、`targetId`、`folderId`、`sourceId`、`expected`、`file`。

转交类型：`ActorTransferCommand`。

直接校验：

- `parseActorFile(raw)`
- `parseActor(file.actor)`
- `requireId(action.id)`
- `requireText(action.name,200)`
- `requireId(action.targetId)`
- `requireId(action.sourceId)`
- `parseActorFile(action.expected)`
- `parseActorFile(action.file)`
- `assertGm(context)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!actor`
- `!c`
- `file.systemId!=='aaf'`
- `action.kind==='actor.import'&&action.targetId!==undefined&&(!target&#124;&#124;target.id!==id)`
- `target?.tokenInstance`
- `!target&&world.actors[id]`
- `target&&action.folderId!==undefined`
- `action.kind==='actor.copy'`
- `canonicalJson(file)!==canonicalJson(parseActorFile(action.expected))`
- `target&&canonicalJson(exportWorldActor(world,target.id))!==canonicalJson(parseActorFile(action.expected))`

</details>

## scene.import

来源：`game/packages/session/src/world-scene-archive.ts` 第32行。

读取字段：`archive`、`id`、`name`、`folderId`、`replacement`。

直接校验：

- `assertGm(context)`
- `requireId(action.id)`
- `requireText(action.name,200)`
- `requireId(action.folderId)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `context.senderId!==world.hostId`

</details>

## scene.copy

来源：`game/packages/session/src/world-scene-copy.ts` 第7行。

读取字段：`sourceId`、`id`、`name`、`folderId`。

直接校验：

- `assertGm(context)`
- `requireId(action.sourceId)`
- `requireId(action.id)`
- `requireText(action.name)`
- `requireId(action.folderId)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!source`
- `world.scenes[id]&#124;&#124;Object.keys(world.scenes).length>=128`
- `source.combat`
- `!actor`
- `actor.tokenInstance`
- `Object.keys(world.actors).length>=10000`

</details>

## actor.inheritance

来源：`game/packages/session/src/world-token-instances.ts` 第13行。

读取字段：`id`、`mode`、`expected`。

转交类型：`ActorInheritanceMode`、`ActorInheritanceState`。

直接校验：

- `assertGm(context)`
- `requireId(action.id)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!actor?.tokenInstance`

</details>

## actor.prototype

来源：`game/packages/session/src/world-token-instances.ts` 第14行。

读取字段：`id`、`before`、`value`。

直接校验：

- `assertGm(context)`
- `requireId(action.id)`
- `parseTokenPrototype(action.value)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!actor&#124;&#124;actor.tokenInstance`
- `canonicalJson(action.before)!==canonicalJson(before)`

</details>

## story.use

来源：`game/packages/session/src/world-story.ts` 第11行。

读取字段：无额外直接字段。

## story.command

来源：`game/packages/session/src/world-story.ts` 第12行。

读取字段：`command`、`messageId`。

直接校验：

- `isRecord(action.command)`

## effect.tick

来源：`game/packages/session/src/world-actors.ts` 第16行。

读取字段：`tick`、`actorId`。

直接校验：

- `assertGm(context)`
- `ownedActor(world, action.actorId, context)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `action.tick !== "rest" && action.tick !== "manual"`

</details>

## actor.create

来源：`game/packages/session/src/world-actors.ts` 第21行。

读取字段：`id`、`templateId`、`profile`、`folderId`、`owners`、`visibility`、`portrait`、`aafCreation`。

直接校验：

- `assertGm(context)`
- `requireId(action.id)`
- `requireId(action.templateId)`
- `actorProfile(template?.profile ?? action.profile)`
- `requireId(action.folderId)`
- `idList(action.owners ?? [])`
- `visibility(action.visibility ?? "gm")`
- `assetReference(action.portrait ?? template?.image)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `world.actors[id] &#124;&#124; Object.keys(world.actors).length >= 10000`
- `action.templateId !== undefined && !template?.profile`

</details>

## actor.update

来源：`game/packages/session/src/world-actors.ts` 第34行。

读取字段：`id`、`profile`、`mp`、`burnStacks`、`owners`、`visibility`、`portrait`、`notes`。

直接校验：

- `assertGm(context)`
- `ownedActor(world, action.id, context)`
- `actorProfile(action.profile)`
- `idList(action.owners)`
- `visibility(action.visibility)`
- `assetReference(action.portrait)`
- `optionalText(action.notes, 50000)`
- `requireInteger(action.mp, 0, actor.profile.mpMax ?? 0)`
- `requireInteger(action.burnStacks, 0, 100)`

## actor.delete

来源：`game/packages/session/src/world-actors.ts` 第49行。

读取字段：`id`。

直接校验：

- `assertGm(context)`
- `ownedActor(world, action.id, context)`

## inventory.grant

来源：`game/packages/session/src/world-actors.ts` 第56行。

读取字段：`actorId`、`id`、`itemId`、`quantity`。

直接校验：

- `assertGm(context)`
- `ownedActor(world, action.actorId, context)`
- `requireId(action.id)`
- `requireId(action.itemId)`
- `requireInteger(action.quantity, 1, 1000000)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `world.catalog[itemId]?.kind !== "item"`

</details>

## inventory.quantity

来源：`game/packages/session/src/world-actors.ts` 第64行。

读取字段：`actorId`、`id`、`quantity`。

直接校验：

- `assertGm(context)`
- `ownedActor(world, action.actorId, context)`
- `requireId(action.id)`
- `requireInteger(action.quantity, 0, 1000000)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!item`

</details>

## inventory.equip

来源：`game/packages/session/src/world-actors.ts` 第73行。

读取字段：`actorId`、`id`、`slot`、`equipped`。

直接校验：

- `ownedActor(world, action.actorId, context)`
- `requireId(action.id)`
- `requireId(action.slot)`
- `requireBoolean(action.equipped)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!item`

</details>

## resource.set

来源：`game/packages/session/src/world-actors.ts` 第83行。

读取字段：`actorId`、`id`、`max`、`value`。

直接校验：

- `assertGm(context)`
- `ownedActor(world, action.actorId, context)`
- `requireId(action.id)`
- `requireInteger(action.max, 0, 1000000)`
- `requireInteger(action.value, 0, id==='focus'?1000000:max)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!actor.resources[id] && Object.keys(actor.resources).length >= 128`

</details>

## resource.delete

来源：`game/packages/session/src/world-actors.ts` 第91行。

读取字段：`actorId`、`id`。

直接校验：

- `assertGm(context)`
- `ownedActor(world, action.actorId, context)`
- `requireId(action.id)`

## effect.upsert

来源：`game/packages/session/src/world-actors.ts` 第95行。

读取字段：`actorId`、`effect`。

直接校验：

- `assertGm(context)`
- `ownedActor(world, action.actorId, context)`
- `requireRecord(action.effect)`
- `requireId(raw.id)`
- `requireText(raw.name, 200)`
- `requireInteger(raw.stacks, 1, 10000)`
- `requireInteger(raw.duration, 0, 1000000)`
- `optionalText(raw.description, 10000)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!["turn-start", "turn-end", "rest", "manual"].includes(String(raw.tick))`
- `actor.effects.length >= 128`

</details>

## effect.delete

来源：`game/packages/session/src/world-actors.ts` 第108行。

读取字段：`actorId`、`id`。

直接校验：

- `assertGm(context)`
- `ownedActor(world, action.actorId, context)`
- `requireId(action.id)`

## catalog.upsert

来源：`game/packages/session/src/world-catalog.ts` 第11行。

读取字段：`entry`。

直接校验：

- `assertGm(context)`
- `parseCatalogEntry(action.entry)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!world.catalog[entry.id] && Object.keys(world.catalog).length >= 10000`

</details>

## catalog.delete

来源：`game/packages/session/src/world-catalog.ts` 第17行。

读取字段：`id`。

直接校验：

- `assertGm(context)`
- `requireId(action.id)`

## catalog.import

来源：`game/packages/session/src/world-catalog.ts` 第22行。

读取字段：`pack`、`overwrite`。

直接校验：

- `assertGm(context)`
- `requireRecord(action.pack)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `pack.schemaVersion !== 1 &#124;&#124; !Array.isArray(pack.entries) &#124;&#124; pack.entries.length > 10000`
- `ids.has(entry.id)`
- `world.catalog[entry.id] && action.overwrite !== true`
- `Object.keys(world.catalog).length > 10000`

</details>

## journal.upsert

来源：`game/packages/session/src/world-narrative.ts` 第6行。

读取字段：`id`、`title`、`body`、`image`、`visibility`、`owners`。

直接校验：

- `assertGm(context)`
- `requireId(action.id)`
- `requireText(action.title, 500)`
- `optionalText(action.body, 100000)`
- `assetReference(action.image)`
- `visibility(action.visibility ?? "gm")`
- `idList(action.owners ?? [])`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!world.journals[id] && Object.keys(world.journals).length >= 10000`

</details>

## journal.delete

来源：`game/packages/session/src/world-narrative.ts` 第13行。

读取字段：`id`。

直接校验：

- `assertGm(context)`
- `requireId(action.id)`

## chat.send

来源：`game/packages/session/src/world-narrative.ts` 第14行。

读取字段：`id`、`recipients`、`text`。

直接校验：

- `requireId(action.id)`
- `idList(action.recipients)`
- `requireText(action.text, 4000)`

## dice.roll

来源：`game/packages/session/src/world-narrative.ts` 第22行。

读取字段：`id`、`count`、`sides`、`modifier`、`recipients`、`text`。

直接校验：

- `requireId(action.id)`
- `requireInteger(action.count, 1, 100)`
- `requireInteger(action.sides, 2, 10000)`
- `requireInteger(action.modifier ?? 0, -1000000, 1000000)`
- `idList(action.recipients)`
- `optionalText(action.text ?? "", 4000)`

## clock.upsert

来源：`game/packages/session/src/world-narrative.ts` 第34行。

读取字段：`id`、`max`、`name`、`value`、`visibility`、`owners`。

直接校验：

- `assertGm(context)`
- `requireId(action.id)`
- `requireInteger(action.max, 1, 10000)`
- `requireText(action.name, 500)`
- `requireInteger(action.value, 0, max)`
- `visibility(action.visibility ?? "public")`
- `idList(action.owners ?? [])`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!world.clocks[id] && Object.keys(world.clocks).length >= 128`

</details>

## clock.advance

来源：`game/packages/session/src/world-narrative.ts` 第41行。

读取字段：`id`、`delta`。

直接校验：

- `requireId(action.id)`
- `requireInteger(action.delta, -10000, 10000)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!clock &#124;&#124; (context.senderId !== context.hostId && !clock.owners.includes(context.senderId))`

</details>

## clock.delete

来源：`game/packages/session/src/world-narrative.ts` 第46行。

读取字段：`id`。

直接校验：

- `assertGm(context)`
- `requireId(action.id)`

## combat.quota

来源：`game/packages/session/src/world-scenes.ts` 第54行。

读取字段：`sceneId`、`id`、`quota`、`available`。

转交类型：`const`。

直接校验：

- `assertGm(context)`
- `requireId(action.id)`
- `requireText(action.quota)`
- `requireBoolean(action.available)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!scene.combat &#124;&#124; scene.id !== world.activeSceneId &#124;&#124; !quota`
- `!available && !quota[slot]`

</details>

## combat.adjust

来源：`game/packages/session/src/world-scenes.ts` 第70行。

读取字段：`sceneId`、`id`、`hp`、`mp`、`burnStacks`。

直接校验：

- `assertGm(context)`
- `requireId(action.id)`
- `requireInteger(action.hp, 0, actor.maxHp)`
- `requireInteger(action.mp, 0, actor.mpMax ?? 0)`
- `requireInteger(action.burnStacks, 0, 100)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!combat &#124;&#124; scene.id !== world.activeSceneId`
- `!actor`

</details>

## scene.bindings

来源：`game/packages/session/src/world-scenes.ts` 第89行。

读取字段：`sceneId`、`bindings`。

直接校验：

- `assertGm(context)`
- `requireRecord(action.bindings)`
- `requireId(id)`
- `requireId(owner)`
- `requireId(bindings[token.id])`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!scene.tokens[requireId(id)] &#124;&#124; !context.members.has(requireId(owner))`

</details>

## scene.create

来源：`game/packages/session/src/world-scenes.ts` 第97行。

读取字段：`id`、`name`、`sceneKind`、`map`、`background`、`folderId`。

直接校验：

- `assertGm(context)`
- `requireId(action.id)`
- `requireText(action.name)`
- `parseSceneKind(action.sceneKind??'adventure')`
- `parseSceneMap(action.map)`
- `assetReference(action.background)`
- `requireId(action.folderId)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `world.scenes[id] &#124;&#124; Object.keys(world.scenes).length >= 128`

</details>

## scene.door

来源：`game/packages/session/src/world-scenes.ts` 第107行。

读取字段：`sceneId`、`id`、`intent`。

直接校验：

- `requireId(action.id)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!context.isGm&&context.senderId!==context.hostId&&worldSceneId(world,context.senderId)!==scene.id`

</details>

## scene.perception

来源：`game/packages/session/src/world-scenes.ts` 第108行。

读取字段：`id`、`edit`。

直接校验：

- `assertGm(context)`

## scene.features

来源：`game/packages/session/src/world-scenes.ts` 第109行。

读取字段：`id`、`edits`。

## scene.canvas

来源：`game/packages/session/src/world-scenes.ts` 第110行。

读取字段：`sceneId`、`before`、`value`。

直接校验：

- `assertGm(context)`
- `assetReference(value.background)`

## scene.update

来源：`game/packages/session/src/world-scenes.ts` 第111行。

读取字段：`id`、`name`、`sceneKind`、`background`、`map`。

直接校验：

- `assertGm(context)`
- `requireText(action.name)`
- `parseSceneKind(action.sceneKind)`
- `assetReference(action.background)`
- `parseSceneMap(action.map)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `action.map !== undefined`

</details>

## scene.delete

来源：`game/packages/session/src/world-scenes.ts` 第123行。

读取字段：`id`。

直接校验：

- `assertGm(context)`

## scene.activate

来源：`game/packages/session/src/world-scenes.ts` 第126行。

读取字段：`id`。

直接校验：

- `assertGm(context)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `active && active.id !== scene.id && active.combat`

</details>

## token.place

来源：`game/packages/session/src/world-scenes.ts` 第133行。

读取字段：`sceneId`、`id`、`actorId`、`x`、`y`、`hidden`、`visionFeet`。

直接校验：

- `requireId(action.id)`
- `ownedActor(world, action.actorId, context)`
- `requireInteger(action.x, 0, scene.map.width - 1)`
- `requireInteger(action.y, 0, scene.map.height - 1)`
- `requireBoolean(action.hidden)`
- `requireInteger(action.visionFeet, 0, 10000)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!context.isGm&&context.senderId!==context.hostId&&scene.id!==worldSceneId(world,context.senderId)`
- `actor.tokenInstance`
- `!Number.isFinite(movementCost(scene.map, point, occupied))`

</details>

## token.remove

来源：`game/packages/session/src/world-scenes.ts` 第144行。

读取字段：`sceneId`、`id`。

直接校验：

- `assertGm(context)`
- `requireId(action.id)`

## token.configure

来源：`game/packages/session/src/world-scenes.ts` 第147行。

读取字段：`sceneId`、`id`、`configuration`、`expectedConfiguration`、`binding`、`toggleHidden`、`hidden`、`visionFeet`。

直接校验：

- `assertGm(context)`
- `requireId(action.id)`
- `parseTokenConfiguration(action.configuration)`
- `requireBoolean(action.hidden)`
- `requireInteger(action.visionFeet, 0, 10000)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!token`
- `action.configuration!==undefined`
- `canonicalJson(action.expectedConfiguration)!==canonicalJson(current)`

</details>

## token.move

来源：`game/packages/session/src/world-scenes.ts` 第156行。

读取字段：`sceneId`、`id`、`x`、`y`、`mode`。

转交类型：`import('@aelzerant/contracts').MovementChoice`。

直接校验：

- `requireInteger(action.x, 0, scene.map.width - 1)`
- `requireInteger(action.y, 0, scene.map.height - 1)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `scene.id !== worldSceneId(world,context.senderId) && context.senderId !== context.hostId && !context.isGm`
- `world.actors[token.actorId].profile.hp === 0 && context.senderId !== context.hostId && !context.isGm`
- `visible && !visible.has(cellKey(to))`

</details>

## combat.start

来源：`game/packages/session/src/world-scenes.ts` 第168行。

读取字段：`sceneId`、`seed`。

直接校验：

- `assertGm(context)`
- `requireInteger(action.seed, 0, 0xffffffff)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `world.activeSceneId !== scene.id`

</details>

## combat.stop

来源：`game/packages/session/src/world-scenes.ts` 第182行。

读取字段：`sceneId`。

直接校验：

- `assertGm(context)`

## combat.action

来源：`game/packages/session/src/world-scenes.ts` 第185行。

读取字段：`sceneId`、`intent`。

直接校验：

- `isCombatIntent(action.intent)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!scene.combat &#124;&#124; !isCombatIntent(action.intent) &#124;&#124; worldSceneId(world,context.senderId) !== scene.id`
- `intent.kind === "attack" && !visibleTokenIds(world, scene, context.senderId).has(intent.targetId)`
- `intent.kind==='aaf'`
- `next.events.at(-1)?.kind === "invalid"`

</details>

## combat.move

来源：`game/packages/session/src/world-scenes.ts` 第197行。

读取字段：`sceneId`、`id`、`x`、`y`、`mode`。

直接校验：

- `requireInteger(action.x, 0, scene.map.width - 1)`
- `requireInteger(action.y, 0, scene.map.height - 1)`
- `isAafSpeedMode(m)`
- `isAafSpeedMode(requested)`
- `isAafSpeedMode(mode)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!combat &#124;&#124; scene.id !== worldSceneId(world,context.senderId) &#124;&#124; combat.status !== "active"`
- `!actor.alive &#124;&#124; actor.id !== combat.activeId`
- `requested!=='adaptive'&&!isAafSpeedMode(requested)`
- `!path &#124;&#124; path.length < 2`
- `!isAafSpeedMode(mode)`
- `next.events.at(-1)?.kind === "invalid"`

</details>

## scene.fog

来源：`game/packages/session/src/world-scenes.ts` 第222行。

读取字段：`sceneId`、`enabled`、`cells`、`reveal`。

直接校验：

- `assertGm(context)`
- `requireBoolean(action.enabled)`
- `requireRecord(value)`
- `requireInteger(point.x, 0, scene.map.width - 1)`
- `requireInteger(point.y, 0, scene.map.height - 1)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `action.cells !== undefined`
- `!Array.isArray(action.cells) &#124;&#124; action.cells.length > scene.map.width * scene.map.height`

</details>

## annotation.upsert

来源：`game/packages/session/src/world-scenes.ts` 第231行。

读取字段：`sceneId`、`annotation`。

直接校验：

- `requireRecord(action.annotation)`
- `requireId(raw.id)`
- `requireRecord(value)`
- `requireInteger(point.x, 0, scene.map.width - 1)`
- `requireInteger(point.y, 0, scene.map.height - 1)`
- `visibility(raw.visibility ?? "public")`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `scene.id !== world.activeSceneId && context.senderId !== context.hostId && !context.isGm`
- `previous && previous.ownerId !== context.senderId && context.senderId !== context.hostId && !context.isGm`
- `!["pin", "drawing", "template"].includes(String(raw.kind)) &#124;&#124; !Array.isArray(raw.points) &#124;&#124; !raw.points.length &#124;&#124; raw.points.length > 1024`
- `!previous && Object.keys(scene.annotations).length >= 1024`

</details>

## annotation.delete

来源：`game/packages/session/src/world-scenes.ts` 第242行。

读取字段：`sceneId`、`id`。

直接校验：

- `requireId(action.id)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `annotation && annotation.ownerId !== context.senderId && context.senderId !== context.hostId && !context.isGm`

</details>

## scene.ambient

来源：`game/packages/session/src/world-environment.ts` 第8行。

读取字段：`sceneId`、`light`。

直接校验：

- `assertGm(context)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `action.light !== "bright" && action.light !== "dark"`

</details>

## door.set

来源：`game/packages/session/src/world-environment.ts` 第12行。

读取字段：`sceneId`、`x`、`y`、`open`、`tokenId`、`locked`、`secret`。

直接校验：

- `requireInteger(action.x, 0, scene.map.width - 1)`
- `requireInteger(action.y, 0, scene.map.height - 1)`
- `requireBoolean(action.open)`
- `requireBoolean(action.locked)`
- `requireBoolean(action.secret)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `context.senderId !== context.hostId`
- `scene.id !== world.activeSceneId &#124;&#124; !tile.door &#124;&#124; tile.door.secret &#124;&#124; tile.door.locked &#124;&#124; gridDistance(token, tile) > 5 &#124;&#124; (visible && !visible.has(`${x},${y}`))`
- `action.locked !== undefined &#124;&#124; action.secret !== undefined`

</details>

## light.set

来源：`game/packages/session/src/world-environment.ts` 第27行。

读取字段：`sceneId`、`x`、`y`、`radiusFeet`、`enabled`。

直接校验：

- `assertGm(context)`
- `requireInteger(action.x, 0, scene.map.width - 1)`
- `requireInteger(action.y, 0, scene.map.height - 1)`
- `requireInteger(action.radiusFeet, 0, 1000)`
- `requireBoolean(action.enabled)`

## audio.set

来源：`game/packages/session/src/world-audio.ts` 第9行。

读取字段：`assetId`、`playing`、`volume`、`loop`、`offsetSeconds`。

直接校验：

- `assertGm(context)`
- `assetReference(action.assetId)`
- `requireBoolean(action.playing)`
- `requireNumber(action.volume, 0, 1)`
- `requireBoolean(action.loop)`
- `requireNumber(action.offsetSeconds, 0, 86400)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `playing && !assetId`

</details>

## audio.control

来源：`game/packages/session/src/world-audio.ts` 第16行。

读取字段：`operation`、`seconds`、`volume`、`loop`。

直接校验：

- `assertGm(context)`
- `requireNumber(action.seconds, 0, 86400)`
- `requireNumber(action.volume, 0, 1)`
- `requireBoolean(action.loop)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!state.assetId`

</details>

## aaf.rules.configure

来源：`game/packages/session/src/world-aaf-rules.ts` 第39行。共享world-aaf入口还检查战斗锁、角色一致性并递增aaf.revision；具体分支可有额外GM限制。

读取字段：`actorId`、`expected`、`rules`。

直接校验：

- `ownedActor(world, action.actorId, context)`
- `action.expected === current.revision`
- `parseAafRules(action.rules)`

## aaf.rules.ability

来源：`game/packages/session/src/world-aaf-rules.ts` 第40行。共享world-aaf入口还检查战斗锁、角色一致性并递增aaf.revision；具体分支可有额外GM限制。

读取字段：`actorId`、`expected`、`ability`。

直接校验：

- `ownedActor(world, action.actorId, context)`
- `action.expected === current.revision`
- `parseAafAbility(action.ability)`

## aaf.rules.effect

来源：`game/packages/session/src/world-aaf-rules.ts` 第41行。共享world-aaf入口还检查战斗锁、角色一致性并递增aaf.revision；具体分支可有额外GM限制。

读取字段：`actorId`、`expected`、`effect`、`source`、`duration`。

直接校验：

- `ownedActor(world, action.actorId, context)`
- `action.expected === current.revision`
- `parseAafOperation(action.effect)`
- `requireText(action.source)`
- `parseAafDuration(action.duration)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `effect.kind==='shield'&&!ctx.combat`

</details>

## aaf.rules.check

来源：`game/packages/session/src/world-aaf-rules.ts` 第45行。共享world-aaf入口还检查战斗锁、角色一致性并递增aaf.revision；具体分支可有额外GM限制。

读取字段：`actorId`、`expected`、`check`。

直接校验：

- `ownedActor(world, action.actorId, context)`
- `action.expected === current.revision`
- `requireRecord(action.check)`
- `requireInteger(raw.dc,0,1000)`
- `requireText(raw.skill)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!['attribute','skill','save','initiative'].includes(String(raw.kind))`
- `!['str','dex','con','int','wis','cha'].includes(attribute)`

</details>

## aaf.rules.rest

来源：`game/packages/session/src/world-aaf-rules.ts` 第51行。共享world-aaf入口还检查战斗锁、角色一致性并递增aaf.revision；具体分支可有额外GM限制。

读取字段：`actorId`、`expected`、`rest`、`provisions`。

直接校验：

- `ownedActor(world, action.actorId, context)`
- `action.expected === current.revision`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `ctx.combat`
- `kind!=='short'&&kind!=='long'`
- `kind==='short'&&r.shortRests>=2`

</details>

## aaf.rules.boundary

来源：`game/packages/session/src/world-aaf-rules.ts` 第66行。共享world-aaf入口还检查战斗锁、角色一致性并递增aaf.revision；具体分支可有额外GM限制。

读取字段：`actorId`、`expected`、`event`。

转交类型：`AafBoundary`。

直接校验：

- `ownedActor(world, action.actorId, context)`
- `action.expected === current.revision`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!['scene-end','combat-end','long-rest-start','short-rest-start'].includes(String(action.event))`

</details>

## aaf.rules.hero

来源：`game/packages/session/src/world-aaf-rules.ts` 第69行。共享world-aaf入口还检查战斗锁、角色一致性并递增aaf.revision；具体分支可有额外GM限制。

读取字段：`actorId`、`expected`、`active`、`sacrifice`。

直接校验：

- `ownedActor(world, action.actorId, context)`
- `action.expected === current.revision`

## aaf.rules.defeat

来源：`game/packages/session/src/world-aaf-rules.ts` 第70行。共享world-aaf入口还检查战斗锁、角色一致性并递增aaf.revision；具体分支可有额外GM限制。

读取字段：`actorId`、`expected`。

直接校验：

- `ownedActor(world, action.actorId, context)`
- `action.expected === current.revision`

## aaf.rules.respond

来源：`game/packages/session/src/world-aaf-rules.ts` 第38行。共享world-aaf入口还检查战斗锁、角色一致性并递增aaf.revision；具体分支可有额外GM限制。

读取字段：`actorId`、`expected`、`action`。

直接校验：

- `ownedActor(world, action.actorId, context)`
- `action.expected === current.revision`
- `isAafAction(action.action)`

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!isAafAction(action.action)&#124;&#124;!['confirm','reroll','choose-reroll','end-concentration','react'].includes(action.action.type)`

</details>

## adjudication.apply

来源：`game/packages/session/src/world-authority.ts` 第44行。

读取字段：无额外直接字段。

## world.undo

来源：`game/packages/session/src/world-authority.ts`。仅GM；只撤销当前有限历史中的可逆编辑；不提供任意战斗回滚。

读取字段：无额外直接字段。

直接校验：

- `senderId === hostId`
- `history.length > 0`

## combat.rollback

来源：`game/packages/session/src/world-combat-rollback.ts` 第1行。

读取字段：`command`、`actorId`、`sceneId`、`intent`、`confirmed`、`id`、`rollbackKind`。

转交类型：`{op?:string}|undefined`、`{kind?:string}`、`RollbackKind`、`CombatRollbackCommand`。

<details><summary>检测到的拒绝条件（按各自代码分支生效）</summary>

- `!storyGm(world.story,world.hostId,sender)&#124;&#124;action.confirmed!==true`
- `!row&#124;&#124;row.sceneId!==action.sceneId&#124;&#124;!row.kinds.includes(action.rollbackKind as RollbackKind)`
- `!scene`
- `!a`

</details>
