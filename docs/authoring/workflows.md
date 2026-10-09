# GM 与 AI 备团工作流

## 从小包到完整世界

最稳妥的起点是在客户端创建一份空世界或一张合法角色，导出作为版本样板；AI 在副本上增加内容。已有源码时，使用本地接口生成并校验。已有团本改造应保留原稿和改动清单，避免覆盖真实团的进行状态。

一份完整模组建议包含：入口说明、章节手记、地点图、演员卡、互动事件、和平与战斗出口、遭遇配置、素材清单。这个目录安排是作者的工作目录，不是新的客户端导入格式。

```text
module/
  world.json
  asset-sources.json
  compendium-objects.json   # 只有使用合集时才需要
  media/
  authoring/               # GM 私密草稿，不自动公开
  README.md
```

## 章节、日记和目录

用 `story.sceneDirectory` 组织场景章节，`folders` 表示层级，`entries[sceneId]` 表示文件夹和顺序。使用 `story.journalDirectory` 组织记录，`sceneJournals` 把地点链接到对应手记。目录名不控制玩家访问；实际权限仍由文档、页面与场景导航决定。

一段主持手记至少有“目的、当前局势、玩家能知道的线索、NPC 想要什么、可能行动及后果、离场条件”。展示给玩家的文本单独存放，GM 判断和未揭示答案使用私密正文／秘密块。不要把私密内容仅用灰字或折叠框隐藏。

字段：[目录](../../reference/packages/contracts/src/document-directory.md)、[日记分页](../../reference/packages/contracts/src/story-journal.md)、[任务与笔记](../../reference/packages/contracts/src/story-progress.md)、[秘密块](../../reference/packages/contracts/src/journal-secrets.md)。

## 图集、对白与战术地图

| 模型 | 用途 | 行为 |
| --- | --- | --- |
| WorldAtlas | 世界／城市／地区／地点的层级导航 | 点击热区浏览图片；不直接移动战术棋子 |
| StoryStage | 互动对白舞台 | 登场、退场、台词、背景与氛围 |
| AdventureEvent.cinematic | CG 与短片 | 过场展示，不等于互动对白 |
| ManualMap / SceneMap | 战术或探索场景 | 棋子、墙门、视野、区域、测量与战斗 |

图集的 `x/y` 为 0–1 归一化坐标；战术地图的 `x/y/z` 使用格单位；素材帧的像素尺寸是另一种单位。不要混算。图集允许多个根地图，节点最大 16 层；隐藏父节点会一并隐藏子节点。GM `atlas.travel` 更新队伍位置，玩家个人浏览不修改位置。

## 对白演出

StageScript 包含 `id,revision,name,sceneId,background,cast,cues,eventIds`，可选 `requires` 剧情条件。候场名单≤100人，预制台词≤300条；**同时登场最多六人**，slot 取0–5。无数值 NPC 的 `actorId` 可以空，台词 speakerId 必须引用候场角色或空旁白。

| 步骤 | 命令 | 必需信息 |
| --- | --- | --- |
| 新建／修订 | `stage.save` | `value,expected`；新建 expected=null |
| 打开 | `stage.open` | `id` |
| 登场 | `stage.enter` | `runId,slot,characterId` 或受控 `actorId` |
| 发言 | `stage.say` | `runId,castId,text` |
| 使用预制台词 | `stage.cue` | `runId,cueId`，角色须已登场 |
| 退场／关闭 | `stage.leave / stage.close` | `runId`，退场另带 castId |
| 切换氛围 | `stage.ambience` | `value: default/reverie` |

ManualTable 使用 `{kind:'adventure',command:{op:..., ...}}`。候场角色、未来台词与脚本条件不发给玩家；已登场立绘和已说台词可以展示。粉红氛围只改视觉，不改变角色关系或规则数值。

## 事件、投票与场景机关

事件的条件、选项、成功／失败效果、可见性、触发器都要按 [AdventureState](../../reference/packages/contracts/src/adventure-events.md) 填写。通用叙事事件与区域／LANCER 机关分别有合同，不要用同名字段硬拼。

投票事件使用 `resolution: vote`。打开时固定参与名单，GM 不占票；收齐后由 GM 确认，多数结果不会直接绕过主持人执行。平票可由 GM 选并列选项或重新投票，旧 round 请求被拒绝。投票期间参与玩家的闲聊与演出发言受限；结束事件解除限制。

部署效果 `{type:'deploy',sceneId,units,ifAbsent:true}` 只补缺席棋子，保留已在场角色状态。重复点击章节不能复活首领或重置资源。切换场景与开战应使用已注册的事件／战斗入口，不能通过新建角色伪造恢复。

## 遭遇与资源消耗

先准备角色，再放置棋子，最后按实际规则创建战斗。多场景角色资料和场景棋子不是同一层；一个人物可以在多个场景出现，但要明确原型与独立实例的继承策略。开战前检查阵营、控制者、站位、部署区域和当前生命／资源。

每个遭遇列出目标、失败出口、撤退方式与非战斗解法。为主角等级／人数提供不同编组，而不是只改敌人数量而忽略行动经济。规则自动化尚未覆盖的能力需在 NPC 卡上说明具体人工裁定环节，不把全部能力写成“由 GM 决定”。

## 导入后的验收

1. 在恢复副本中检查图集、目录、角色、事件和所有引用。
2. 以普通玩家身份检查隐藏 NPC、未来台词、答案和附件没有被提前发出。
3. 走一次正常路径、失败路径和重复操作；检查资源不会重复获得。
4. 检查战斗入口、保存恢复、立绘状态切换、地图高度和媒体播放。
5. 记录需要素材授权、客户端更新或人工裁定的部分；不要把 JSON 解析成功称作完整团测。
