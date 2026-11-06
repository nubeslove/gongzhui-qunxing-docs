# LANCER · 枪骑兵

身份：`lancer / 1`。LL为0–12，与新乌托邦的1–13等级不同。目前实现与验收一律以 **2D 地图**为基准；3D 地图仅作为 LANCER 扩展。高度坐标、体型、武器挂载、机体与驾驶员状态仍按 LANCER 独立模型解释。

地图、棋子、章节、演出、休整与中心约定见 [LANCER 备团指南](../authoring/lancer-preparation.md)。制作官模或原创遭遇前先读该页，再查本页字段；本页新增的出击确认与部署约定对应 0.2.44，使用新能力前须核对实际客户端和服务端版本。

## 战场反馈与持续范围（0.2.45）

瞄准距离采用青色虚线，实际效应范围采用洋红实线；超距目标显示距离与差额，测距线超出射程的部分为红色。移动预览同时显示路径距离和实际费用，困难地形与攀爬按规则扣除；因交战结束本次移动时，地图显示“交战！”。

武器表现按稳定资源 ID 与实际射击模式区分，包括抛射炮击、射线、等离子、喷焰、导弹、霰弹、近战、引力等。范围由已结算的真实几何驱动。系统和核心能力使用实际动作及战斗状态产生护盾、散热、隐形、传送、无人机等反馈；被动数值项不虚构持续范围。

冰遁无人机展开爆发 1 科技隔离场，原有科技效果暂停并保留到期规则，离开范围后恢复仍未到期的效果。虫巢无人机展开爆发 2 灰浴虫群，提供对应掩护及伤害；范围随无人机移位、回收或摧毁而更新。烟雾、燃烧和无人机范围从保存的战斗状态重建，关闭动画仍保留静态标识。

目录覆盖与自动化覆盖是两回事。仍使用玩家自主结算的能力，依照玩家实际提交的伤害、条件、护盾和部署显示反馈；尚无专用执行入口的规则不能仅凭名称生成或结束持续范围。

本轮逐项核对的实际边界如下，数量不表示逐件完成实机操作：

| 类别 | 核对范围与当前缺口 |
| --- | --- |
| 武器 | 193 项目录武器、8 项原创竞技场武器，另行核对 29 类运行时衍生／配置武器。按实际资源与模式连接对应表现。 |
| 系统 | 289 项；35 项有专门执行路径，254 项仍为自主结算、资料或配置内容，需要逐项补足执行入口及其真实状态。 |
| 骨架核心能力 | 70 项；6 项有专门执行路径，64 项仍使用自主结算。16 项自主核心卡尚缺续页合并，不能将卡面视作完整规则。 |
| 核心奖励 | 42 项；注册表状态为 26 项 ready、3 项 partial、13 项 pending；这不是逐项画面验收结果。 |
| SP 改装 | 322 项，包含 16 项数值、42 项核心奖励、264 项系统；系统来源中 32 项有执行路径、232 项仍为资料／自主结算。与上面的系统、核心奖励交叉，不重复计算独立规则。 |

真实 2D 画面检查覆盖各表现类别、静态持续区域及六角外缘；不能扩大为所有规则均已自动化。被毁虫巢无人机的战斗内维修／重新部署仍缺专门入口。

## 角色卡的字符串字段

ManualActor.fields 保存以下核心键，**所有值都是字符串**。JSON结构需先序列化。

| 键／模式 | 内容 |
| --- | --- |
| `lancer.version` | `'1'` |
| `lancer.level` | LL，0–12 |
| `lancer.frame` | 已有骨架ID，或`custom` |
| `lancer.hull / agility / systems / engineering` | 四项机甲技能，0–6 |
| `lancer.base.<stat>` | 自定义骨架基础值；不能把最终值再当基础值 |
| `lancer.mod.<stat>` | 额外修正，另有attack、limited |
| `lancer.mounts` | 自定义挂载点，逗号分隔，最多8 |
| `lancer.weapon.0` … `.7` | JSON字符串形式的LancerWeapon |
| `lancer.system.0` … `.11` | JSON字符串形式的LancerEquipment |
| `lancer.training` | JSON形式的天赋、核心奖励与其选择 |
| `lancer.current.hp/heat/structure/stress/repair/overshield/burn` | 当前资源，不等于上限 |
| `lancer.cp / lancer.overcharge` | 核心能量0或1；超限次数 |
| 驾驶员、NHP、原型、天赋专属字段 | 使用完整 [动态字段清单](../api/dynamic-fields.md) 与对应适配器 |

计算输入LancerBuild含level、skills、base、modifiers。stats包含hp、armor、evasion、edef、speed、sensors、tech、save、heat、repair、sp、size；计算结果另有attack、limited，并给出source说明。字段和函数：[lancer规则](../../reference/packages/rules-engine/src/lancer.md)、[角色适配器](../../reference/apps/desktop/src/tabletop/lancer/model.md)、[升级](../../reference/apps/desktop/src/tabletop/lancer/progression.md)。

## 自动化装备

基础LancerEquipment有name、sp、limited、used、notes，可选resourceId和automation。LancerWeapon另有size、mount、brace、damage、range、tags。自动化装备必须使用 `resourceId: custom:...`，完整定义JSON≤3,900字符。武器不能装system自动化，系统也不能装weapon自动化。

```json
{"version":1,"kind":"weapon","profile":{"weaponType":"rifle","damageParts":[{"damage":"1d6","type":"kinetic"}],"range":10,"threat":1,"accuracy":0,"selfHeat":0,"reliable":0,"knockback":0,"tags":[]}}
```

这是 `automation` 的内容，不是完整导入容器。完整装备见 [示例](../../examples/lancer/weapon.json)。自定义武器支持rifle/cqb/cannon/launcher/nexus/melee；伤害为kinetic/energy/explosive/burn/heat；标签为ap/loading/ordnance/smart/seeking/melee/arcing/overkill。范围area为blast/burst/line/cone，size1–30。普通射程、威胁、自热、可靠、击退0–100；accuracy -6至6。

system自动化可有1–8个actions，每项id、name、description、cost、target、range、selfHeat、effects；cost为quick/full/protocol。每项1–8效果，支持damage/save/condition/overshield/cool/reload。骰式只接受整数或NdM±K，1–20枚、2–100面，不能填脚本。全部分支：[lancer-custom](../../reference/packages/contracts/src/lancer-custom.md)。

## 战斗、驾驶员与NHP

世界使用lancerBattle，意图为 `{kind:'lancer',intent:LancerCombatIntent}`。LancerCombatUnit、LancerBattleStep、LancerDecision构成机体状态、结算队列与等待；不要跳过队列直接覆写hp或structure。

机体hp、heat、structure、stress、repair、overshield、burn分开保存。命中判定、科技攻击、精准／困难、武器挂载、核心能量、充能和重装都由对应执行器检查。任务记录和维修另用LancerMission／LancerMaintenanceIntent，不能只清空热度称为完成休整。

驾驶员离机具有独立步战资料、装备和棋子关联。骑乘使用LancerRide；AI可在pilot/ai/cascade间切换。NHP可涉及mech/subaltern/casket、压力容量、负担和失控，不能用普通玩家ownerId替代控制流程。扫描信息属于有访问范围的情报，不默认向所有玩家广播。

字段：[lancer-combat](../../reference/packages/contracts/src/lancer-combat.md)、[维修](../../reference/packages/contracts/src/lancer-maintenance.md)、[场景物件](../../reference/packages/contracts/src/lancer-scene.md)。执行签名在 `reference/packages/game-core/src/lancer/` 下按攻击、NHP、驾驶员、准备动作、场景事件、位移等拆分。

## 出击确认与部署（0.2.44）

普通新出击保留全员确认：GM 与参战玩家分别确认，全部就绪后才进入部署。`LancerEntry.freeDeployment=true` 表示确认后的自由落位；此时 `current` 为 `null`，各玩家仍只能部署自己拥有且获准部署的单位。该字段不取消确认或归属校验，不能用直接写坐标跳过权威动作。

GM 左键选择地图落点，部署成功后自动切到下一台非玩家单位；保存失败不会消耗当前单位。代部署其他玩家是独立的可选操作，仍校验玩家身份与部署权限。玩家收到的编队不包含隐藏敌军；部署阶段重连不会重播出击演出。全部落位后开始战斗。竞技场、旧式顺序出击及没有出击记录的存档继续按各自流程处理。

## 创建资源时的边界

武器文本、目录记录、自动化profile和战斗装备实例不是一回事。部分扩展核心奖励与天赋只有资料或部分效果；看到目录ID不代表运行器能完整处理。原型装备、天赋生成武器和厂商核心奖励有额外选择与先决条件，须通过对应建卡流程。不要把重置为“战斗准备”当作允许在每次导入时补满全部资源。

资源：[LANCER ID 索引](../../catalogs/lancer.json)。三维距离保留本规则算法；不对LANCER套用二维地形攀爬检定。
