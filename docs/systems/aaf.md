# AAF · 艾尔泽兰特

身份：`aaf / aaf-2026-09`。主世界模型为 **WorldDocument**，角色为 **ActorDocument**。不要把 DND 的动作／法术位／熟练加值套入 AAF。

## 数据分层

| 层 | 对象 | 主要字段与职责 |
| --- | --- | --- |
| 世界 | WorldDocument | actors/scenes/catalog/journals 为字典；story 存共享叙事资料；rngState 为权威随机状态 |
| 角色 | ActorDocument | profile、mp、owners、visibility、inventory、resources、effects、aaf、ownedItems |
| 战术资料 | ActorProfile / CombatantInput | 生命、护甲、六属性、武器、移动与战斗输入；场景坐标在棋子层 |
| 成长与共鸣 | AafCharacter | level、extraTp、learning、learned、items、placements、uses、automatic、targets |
| 创建记录 | AafBuild | 属性生成、背景／成长点、种族／支系、职业等级、生活／技能训练、选择卡与背景 |
| 定义目录 | AafCatalog | version=1、字符串 revision、talents、items |

全字段：[world-types](../../reference/packages/session/src/world-types.md)、[aaf](../../reference/packages/contracts/src/aaf.md)、[aaf-build](../../reference/packages/contracts/src/aaf-build.md)、[战斗输入](../../reference/packages/game-core/src/types.md)。历史 `CharacterSheet` 是旧独立建卡资料，不等于当前世界 ActorDocument。

## 天赋与费用

`AafTalentNode` 包含 `id,name,branch,description,cost,requires,x,y`。requires为前置节点ID；x/y是天赋树排布坐标，不是地图位置。`learned` 保存 `{node,paid}`，保留学习时的节点快照和支付费用。目录修订不能悄悄更改已学天赋费用。

`learning` 明确区分 `creation / level-up / long-rest / item / closed`；在不允许的时机学习会被拒绝。等级、额外TP、学习、退款和目录刷新应经过 AAF 世界动作与角色 revision，不直接改 learned 数组后广播。

## 共鸣与物理装备

`AafItemDefinition` 用 `kind:equipment/rune/socket` 和 `installation:equipment/independent/embedded/gem` 描述不同安装关系。`shape` 是物件网格轮廓，`ranges` 是影响范围；`slots/hostTags/sockets/coverage/socketPolicy/maxActiveCopies` 是装备和宿主约束，不是装饰信息。

`AafItemInstance` 保存 `definition` 快照、equipped、slot、hostId、remaining及可选defective/quantity/bagIndex。`placements` 记录实例ID、x/y、四向rotation、containerId与损坏格。`remaining` 和角色 `uses` 是不同记录，不可统一重置。

16个物理槽位：头部、颈部、披肩、衣袍、盔甲、腰带、护腕、脚部、左戒指、右戒指、饰品一、饰品二、左手、右手、远程、工具。`physical` 记录银币价格、千克重量、叠放以及armor/shield/weapon结构。双手武器、轻盾、装备占格与共鸣排布分别校验。

`AafRange` 有 adjacent/direction/diagonal/ring/cells/ray/row/column/edge/corners/all 等模式，还可配置direction、distance、targets、scope、stack、targetKind、blueprints、selected、transfer。枚举的全部字段与分支见 [aaf字段](../../reference/packages/contracts/src/aaf.md)，计算签名见 [纯计算](../../reference/packages/rules-engine/src/aaf.md)。

## 本地创建与调用

```ts
import {WorldAuthority} from './packages/session/src/world-authority';
const authority = WorldAuthority.create('demo-world', 'demo-gm', '示例世界', 12345);
const original = authority.exportSave();
// 使用 WorldCommand {requestId, expectedRevision, action} 提交具体动作。
// 游戏内由已认证的 GM 会话发送，不向公网 HTTP 直接发送此对象。
```

创建／修改角色、场景、天赋与装备的有效动作见 [AAF动态命令](../api/aaf-actions.md) 和 [WorldAuthority](../../reference/packages/session/src/world-authority.md)。典型AAF动作包括 `aaf.level / aaf.learning / aaf.talent.learn / aaf.talent.refund / aaf.item.grant / aaf.item.equip / aaf.layout / aaf.item.use / aaf.rest.complete`。命令名字本身不说明权限，必须看处理器与字段。

## 特殊边界

角色的 `profile.aafRules` 与战斗单位的 `aafRules` 保存可执行规则状态；它与装备／天赋的 `aaf` 不是同一对象。`AafRuleState` 包含专注、物语点、英雄骰、条件、护盾、专注维持、修正、防御、资源池、毒病诅咒、持续伤害、力竭、负伤、施法能力、回合行动额度及待决检定。`lastCheck / pending / cast / ready` 是结算中的状态，备团不能伪造它们来跳过支付或反应窗口。

`AafAbility` 将成本、射程、目标数、命中／豁免、效果、持续时间、专注、成分、吟唱／仪式与已知／准备状态分别记录。`AafEffectOperation` 只有已注册的伤害、治疗、护盾、生命损失、专注、状态与持续效果等分支；自然语言描述不能扩充枚举。伤害类别、条件和回合边界见 [aaf-rules](../../reference/packages/contracts/src/aaf-rules.md)，完整反应流程见 [aaf-flow](../../reference/packages/contracts/src/aaf-flow.md)，动作参数见 [AafAction](../../reference/packages/game-core/src/aaf/actions.md)。这些是源码接口快照，客户端安装包是否包含同一实现仍需核对发行记录。

- AAF属性调整值使用自己的 `attributeModifier`；不能默认采用 DND 的 `(属性-10)/2`。
- 移动预算与普通攻击／特殊攻击使用 AAF 合同；二维高度在既有平面距离上加入z差。
- 工坊已经保存自动触发顺序与对象，但登记顺序不代表全部卡片效果已接入自动发动。
- 天赋、共鸣资源的逐卡战斗效果、制造费用和部分普通装备转换仍有未完成部分。`aaf.item.use` 的登记次数不自动证明伤害、治疗和所有派生值都会结算。
- 世界数据保存与撤销经过权威事务；GM私密目录和玩家投影分开。

资源定位：[AAF ID 索引](../../catalogs/aaf.json)。示例：[AAF目录](../../examples/aaf/catalog.json)；它是可供源码解析的定义目录，不是已经承诺可双击安装的插件。
