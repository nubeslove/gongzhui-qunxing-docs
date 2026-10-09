# LANCER · 枪骑兵

身份：`lancer / 1`。LL为0–12，与新乌托邦的1–13等级不同。三维坐标、体型、武器挂载、机体与驾驶员状态按LANCER独立模型解释。

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

## 创建资源时的边界

武器文本、目录记录、自动化profile和战斗装备实例不是一回事。部分扩展核心奖励与天赋只有资料或部分效果；看到目录ID不代表运行器能完整处理。原型装备、天赋生成武器和厂商核心奖励有额外选择与先决条件，须通过对应建卡流程。不要把重置为“战斗准备”当作允许在每次导入时补满全部资源。

资源：[LANCER ID 索引](../../catalogs/lancer.json)。三维距离保留本规则算法；不对LANCER套用二维地形攀爬检定。
