# 新乌托邦

分区／独立产品为new-utopia，存档基础systemId仍为lancer，**战斗模型独立**。

```json
{"systemId":"lancer","systemVersion":"1","ruleVariant":{"id":"new-utopia","version":"0.1.1","base":"lancer-1","resources":"1.0"}}
```

不能把LANCER原版战斗、维修、热量、先攻与装备规则直接套过来。新乌托邦角色在 `ManualActor.utopia`，世界战斗在 `utopiaBattle`，意图为 `{kind:'utopia',intent:UtopiaIntent}`。

## UtopiaCharacter

| 字段 | 用途／限制 |
| --- | --- |
| version、level、frame | version=1；等级1–13；frame为核心条目ID |
| tune | 四项调校，普通角色每项0–6；NPC有单独范围 |
| background、triggers | 背景与触发词分配 |
| talents、technology、cores、feats、tools | 天赋、技术、核心奖励、专长、工具，必须引用当前目录 |
| equipment | 每项id、entry、mount、charges、loaded、destroyed，可选module |
| resources | hp、structure、power、heat、resonance、erosion、repair、cp、shield、burn、overcharge |
| conditions | name、source，可选untilTurn、selfCost、channel |
| turns、uses | 每轮回合数与能力用量 |
| npc | 独立阶级、rank、基础stats、武器、能力、来源 |

资源上限约束包括structure≤4、power≤4、erosion≤3、cp≤1。合法结构不保证完整建卡合法；继续运行 `validateUtopiaBuild(character,true)` 检查成长点数、挂载与资源。新建资源用 `utopiaFreshResources`，不能每次修改角色就调用补满。

全字段与意图：[utopia合同](../../reference/packages/contracts/src/utopia.md)。计算：[utopia规则](../../reference/packages/rules-engine/src/utopia/index.md)，NPC构建：[npc](../../reference/packages/rules-engine/src/utopia/npc.md)。

## 规则差异

- 伤害类型额外含resonance；伤害通道E/P/X与原版LANCER不同，应明确目标stats.channels。
- power与LANCER的stress不是可随意互换的字段；共鸣与侵蚀另有成本和上限。
- NPC rank可为grunt/standard/swarm/elite/boss/object；tier为1/2/3。多回合单位用turns与UtopiaTurn.remaining管理，不能复制同一棋子来增加回合。
- 装备entry引用核心目录，实例id用于当前装配；损坏、装填、受限次数分别保存。
- 三维场景、飞行、掩体与机关使用独立消费路径；当前分区默认图格显示2m，但机械坐标仍是格。

## 战斗与维修

UtopiaBattle包含phase(deployment/active/ended)、round、turn、side、lastSide、active、units、queue、pending、log、scanned、areas。意图包括create、reinforce、prepare、start、activate、endTurn、endBattle、move、act、decide、damage、condition、ruling、rest、build、roll、interact等，全部参数见合同联合类型。

维修模式为cooldown/hp/structure/power/erosion/refit/rebuild/equipment，并携带actors、confirmed与可选equipment。具体费用由对应执行器处理，不把所有模式统一成“满状态休息”。手动ruling要记录reason和实际变动。

旧版参考资料默认不等于当前核心规则。核心目录、玩家可读资源和NPC／预设总数不是同一个指标。复杂能力仍有明确人工裁定部分；有正文不表示自动执行完成。来源ID索引：[new-utopia.json](../../catalogs/new-utopia.json)。

## 创作与导入

优先使用 `utopiaPreset` 创建合法基线，再通过build意图确认改变；新增NPC用独立NPC结构。例子：[使徒角色](../../examples/new-utopia/actor.json)、[世界身份](../../examples/new-utopia/world.json)。私人模组文本、图像和真实存档不在本库分发。
