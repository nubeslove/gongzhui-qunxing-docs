# 可复用的最小示例

示例均为专门编写的虚构“渡口”资料，不含真实存档、规则书全文、个人模组或外部图片。数值用于演示格式，不代表经过平衡性设计的成品角色或冒险。

| 文件 | 用法与注意 |
| --- | --- |
| [AAF角色](aaf/actor.json) | ActorFile；经过实际创建命令、导出、AAF角色检查器与文件解析 |
| [AAF创建动作](aaf/create-actor-command.json) | WorldCommand，仅适用于最新修订为空白世界的示例；不是角色导入文件 |
| [AAF空世界](aaf/world.json) | 独立WorldDocument，不使用下方ManualTable打包器 |
| [AAF目录](aaf/catalog.json) | AafCatalog；只有原创说明型天赋，不宣称自动加值 |
| [DND角色](dnd5e-2024/actor.json)／[世界](dnd5e-2024/world.json) | 含九阶零法术位池的中立NPC、对白与事件 |
| [LANCER角色](lancer/actor.json)／[世界](lancer/world.json) | 基础训练模型；结构合法不等于完成全部玩家建卡选择 |
| [LANCER武器](lancer/weapon.json)／[执行数据](lancer/automation.json) | 对应字段片段；不能当作通用ResourceFile直接导入 |
| [心海角色](heartsea/actor.json)／[世界](heartsea/world.json) | 使用独立心海字段，关系、特长空表由作者自行填写 |
| [泰拉世界](terra-walker/world.json) | 显式变体及必需pack标记；客户端校验注入内置设定，公共例子不复制设定全文 |
| [新乌托邦角色](new-utopia/actor.json)／[世界](new-utopia/world.json) | 经当前预设与规则建卡检查的训练使徒，不能导入原版LANCER世界冒充原版角色 |
| [日记文件](shared/journal.json) | aaf-journal独立导入容器 |
| [图集](shared/atlas.json) | WorldAtlas片段；两级导航，素材留空 |
| [演出脚本](shared/stage.json) | StageScript片段；新建用stage.save及expected:null |
| [事件](shared/event.json) | AdventureEvent片段；两选项投票，改变示例剧情变量 |
| [高度区域](shared/elevation.json) | RegionEnvironment片段；4格高地，可攀爬、DC12；5ft/格时对应20ft |

四种基础系统还分别提供 [AAF资源](aaf/resource.json)、[DND资源](dnd5e-2024/resource.json)、[LANCER资源](lancer/resource.json)、[心海资源](heartsea/resource.json)。它们都是aaf-resources格式，systemId不同。资源仅有说明，没有伪造“提灯自动照明”的执行逻辑。

## 生成可恢复的ManualTable备份

需要Node 20以上，工具不联网、不读取账号、不写运行中世界。先创建一个空素材目录和 `asset-sources.json`，本例没有附件，内容为 `{}`。

```sh
node tools/world-pack.mjs pack examples/heartsea/world.json asset-sources.json media demo-heartsea.aafworld
node tools/world-pack.mjs inspect demo-heartsea.aafworld
```

实际素材示例：`asset-sources.json` 以清单path为键、相对素材根目录的文件名为值。程序检查真实路径没有越过目录、字节数和SHA-256匹配，拒绝覆盖已存在输出。含合集时另传compendium-objects.json。它验证容器完整性，**不包含游戏引擎，也不能替代客户端业务解析**。

在客户端恢复到新副本，世界ID与GM绑定会重新设置。未来的修改应在自己的副本上另存；不要把manifest.json当成游戏导入文件。

[验证清单](manifest.json) 列出每个JSON的解析器与Schema；[完整验证说明](../VALIDATION.md) 区分实际检查与尚未完成的安装版验收。
