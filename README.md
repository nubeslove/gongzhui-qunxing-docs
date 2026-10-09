# 共坠群星 · 开发与 AI 备团文档

为 GM、资源作者和开发者提供可核对的接口、全部共享字段、分规则扩展说明、离线示例及部署规范。产品名为 **共坠群星_V0.1_TRPG在线跑团客户端**，应用内名称为 **共坠群星**。

**本版核对日期：2026-10-10；源码应用版本：0.1.0。** 这是源码接口快照，不代表已经发布同日的安装包。原生构建和旧包同步仍暂停。

## 从这里开始

| 你的目标 | 阅读入口 |
| --- | --- |
| 把资料交给自己的 AI，让它制作资源或备团 | [AI 使用说明](AI-START.md) → [最小示例](examples/README.md) |
| 导入角色、资源、日记、场景或完整世界 | [文件格式与导入](docs/authoring/formats.md) |
| 制作章节、演出、投票、探索图及战斗遭遇 | [备团工作流](docs/authoring/workflows.md) |
| 查询一个字段、参数或动作 | [字段与函数总索引](reference/README.md)、[离线查询工具](tools/README.md) |
| 对接账号、世界目录和资源服务 | [HTTP 接口](docs/api/http.md)、[OpenAPI](api/openapi.json) |
| 扩展运行时或联机 | [架构](docs/development/architecture.md)、[命令与联机](docs/api/commands-and-network.md) |
| 查询AAF动态动作、桌面能力或宏 | [动作参数](docs/api/aaf-actions.md)、[原生接口与宏](docs/api/native-and-macros.md) |
| 整理安装包、服务端版本或迁移存档 | [版本与产物](docs/operations/releases.md) |
| 部署服务器、改善网络、分发素材 | [部署](docs/operations/deployment.md)、[网络与存储](docs/operations/network-and-storage.md) |

## 按规则阅读

| 分区 | 存档身份 | 专门说明 |
| --- | --- | --- |
| AAF · 艾尔泽兰特 | `aaf` / `aaf-2026-09` | [建卡、天赋、共鸣、物理装备、独立世界模型](docs/systems/aaf.md) |
| 龙与地下城 | `dnd5e-2024` / `2024` | [5R 建卡、持续效果、施法、反应与自动化边界](docs/systems/dnd5e-2024.md) |
| 枪骑兵 | `lancer` / `1` | [机甲、驾驶员、NHP、任务与自定义装备](docs/systems/lancer.md) |
| 梦旅心海 | `otherworld-journey` / `0.1-editorial.1` | [叙事卡、地图、立绘、关系与独立职业](docs/systems/heartsea.md) |
| 行于泰拉 | `dnd5e-2024` + `terra-walker` 变体 | [强制资源、种族背景、表现与基础规则分工](docs/systems/terra-walker.md) |
| 新乌托邦 | `lancer` + `new-utopia` 变体 | [独立资源、战斗、伤害通道与维修](docs/systems/new-utopia.md) |

`terra-walker` 和 `new-utopia` 不是额外的 `GameSystemId`。梦旅心海沿用历史 ID，不能把显示名称当作导入 ID。全部版本字段见 [兼容矩阵](docs/development/compatibility.md)。

## 文档怎样保证可核对

- `reference/` 从代码声明提取：保留每个字段、可选性、类型、联合分支、函数参数与返回值；不复制实现函数体。`symbols.json` 供 AI 搜索。
- `schemas/` 提供规范化数据的 JSON Schema；数值约束、依赖引用与权限仍以游戏解析器为准。
- `catalogs/` 只列可引用的资源 ID、名称及分类，不转载完整规则条文或插图。
- `examples/` 使用专门编写的虚构内容；[验证记录](VALIDATION.md) 说明实际经过哪些解析器和备份恢复检查。
- [源码指纹](reference/source-snapshot.json) 记录生成依据。当前工作区含未提交改动，不能仅凭主仓库某次提交号代表这批文档。
- [平台源码指纹](reference/platform-source-snapshot.json) 另记录HTTP、原生命令、宏和发行配置的人工核对来源。

## 当前支持的边界

客户端 GM 主机负责战斗和私密世界原稿。平台服务器提供账号、社区、大厅、WebRTC 信令、资源托管和快照。当前没有面向第三方 AI 的在线世界编辑 REST API，也没有通用外部插件加载器。

资源作者可以制作数据包、图片／音频／视频／模型附件、角色、演出台本、事件及已注册的效果节点。新的结算算法、全新系统 ID、任意 UI 页面或协议变更需要修改源码并发布匹配版本。现有规则目录的存在不等于该目录所有能力都已自动结算，见各规则的边界说明。

本库不包含原始规则 PDF／CHM、个人模组全文、游戏美术、账号信息、真实存档或游戏安装包。文档仓库的公开可见性不授予第三方规则、美术或商标的再分发许可，详见 [内容范围](CONTENT-POLICY.md)。
