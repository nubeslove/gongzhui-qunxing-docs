# 行于泰拉

分区／独立产品ID为terra-walker，世界系统仍是dnd5e-2024。必需身份：

```json
{"systemId":"dnd5e-2024","systemVersion":"2024","ruleVariant":{"id":"terra-walker","version":"0.9.1","base":"2024"}}
```

## 继承与特有部分

| 部分 | 实际使用 |
| --- | --- |
| 世界、角色、战斗 | ManualTable、ManualActor.dnd与DND执行流程 |
| 种族与背景 | 泰拉目录；不能用DND人类／精灵ID换名字冒充 |
| 必需资源包 | story.packs中的terra，创建／读取／恢复／保存都会补回启用标记 |
| 职业、装备与共用5R流程 | 按对应DND资源与执行器使用 |
| 主题、终端、助理衣装和特效 | 表现层，不改变世界身份和数值 |

当前种族ID为tw-R01至tw-R24，背景ID为tw-B01至tw-B16。详细定位见 [泰拉目录](../../catalogs/terra-walker.json)。推荐建卡入口为 `recommendedTerraInput` 与 `buildDndGuidedCharacter`，再经 `dnd.create` 保存。函数字段参考：[terra/creation](../../reference/packages/rules-engine/src/terra/creation.md)。

## 不可省略的约束

`packs.set`不能禁用或移除泰拉必需包。旧角色不会被偷偷删除或强制重建，但新建、改种族和导入新种族卡都需要满足泰拉限制。世界身份不能由当前UI主题推断；从其他规则导入资料应先做明确的内容转换。

通用角色字段、法术状态与决策请读 [DND说明](dnd5e-2024.md)。部分种族与条件能力仍需按原条文检查，没有逐项完成自动化的内容不可标成自动执行。图库助理的皮肤／动态骨骼不等于玩家地图Token或角色立绘。

## 模组与媒体

章节、地图、对白和战斗通过通用 [备团流程](../authoring/workflows.md) 组织。远程音源可以在支持HTTP(S)的播放列表字段使用，但图片型舞台字段仍要求世界素材。第三方官方音乐和原画的权利不因插件或文档公开而变化。

独立版数据库为`terra-walker-worlds`，统一客户端仍保留对应分区的数据身份；账号在统一版共用，不能因切分区另注册账号。独立发行配置仍保留，但当前没有重新发布安装包。

示例：[世界身份](../../examples/terra-walker/world.json)。示例不复制完整泰拉资料包，只用于说明变体与通用结构；真实新建流程会安装当前源码中的必需资源。
