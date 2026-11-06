# 小游戏与 QTE DIY

本页对应已发布的 NAA 0.2.43，接口提取自 `57c4c477612d0a909f045f9c04779910be041872`，核对日期 2026-11-06。正式服务器及配套客户端已完成[发布核对](../../VALIDATION.md#0243-正式发布核对)；使用前仍须核对实际版本。AAF 仅为 NAA 内的一种规则。

## 先选择交付物

- **GM 编排**：启用 QTE 及其依赖的小游戏前置，在“编排 QTE”编辑时间轴与整场条件。可多选、复制、平移题目，并在可视化界面与 JSON 之间切换。导入 JSON 创建新编号的未保存副本；“试玩”仅在本机运行。
- **自定义玩法**：维护者在服务端注册确定性判定模块，并在客户端注册输入映射与 React 绘制。插件清单和世界开关只控制依赖及启用状态，不下载、安装或执行代码。
- **扩展 QTE 题型**：服务端与客户端都安装识别器，客户端另安装该题型的绘制。JSON 配置不会变成 JavaScript。

[原创 QTE 预设](../../examples/shared/qte-preset.json) 是一题空格点按练习，没有角色绑定或世界后果。它已通过 `parseQteDefinition` 和 `parseMinigamePreset`；[运行时示例记录](../../examples/manifest.json) 可查验证结果。JSON Schema 描述规范化结构，不替代权限、按键冲突及运行规则校验。

## 公开接口与源码位置

以下链接均指向本仓库的声明和字段参考；实现源码需另外持有匹配提交。

| 用途 | 参考入口 |
| --- | --- |
| 预设、输入、个人结果、团队条件、世界后果和判定模块 | [小游戏合同](../../reference/packages/contracts/src/minigame.md) |
| QTE 定义、题目与解析器 | [QTE 合同](../../reference/packages/contracts/src/qte.md) |
| 插件依赖及版本约束 | [依赖合同](../../reference/packages/contracts/src/plugin-dependencies.md) |
| 权威判定模块注册 | [小游戏运行器](../../reference/packages/session/src/minigame-modules.md) |
| QTE 识别器注册 | [QTE 运行器](../../reference/packages/session/src/qte-runtime.md) |
| 客户端导出入口 | [小游戏 SDK 入口](../../reference/apps/desktop/src/story/minigames/index.md) |
| 客户端注册与 View 参数 | [客户端 SDK](../../reference/apps/desktop/src/story/minigames/sdk.md) |
| 键鼠输入映射与布局避让 | [输入](../../reference/apps/desktop/src/story/minigames/input.md)、[布局](../../reference/apps/desktop/src/story/minigames/layout.md) |
| QTE 绘制扩展 | [QTE View](../../reference/apps/desktop/src/story/minigames/QteView.md) |
| 独立玩法示例签名 | [number-tap 判定模块](../../reference/packages/session/src/examples/number-tap.md)、[NumberTap 客户端](../../reference/apps/desktop/src/story/minigames/examples/NumberTap.md) |

完整示例源码分别位于 `game/packages/session/src/examples/number-tap.ts` 与 `game/apps/desktop/src/story/minigames/examples/NumberTap.tsx`。这里公开其声明、安装入口与指纹，不复制实现函数体。示例默认不注册、不启用；可信客户端入口调用示例安装函数，服务端另调用 `registerMinigameModule(numberTapModule)`。

## 接入独立玩法

清单的 `id`、预设 `pluginId`、判定模块 `id` 与客户端注册 `id` 必须一致。示意清单如下；它只表达依赖，不是独立可执行包：

```json
{
  "id": "example-number-tap",
  "name": "空格计数挑战",
  "version": "1.0.0",
  "description": "开发接口示例",
  "category": "tools",
  "capability": "minigame",
  "requires": [{ "id": "minigame-foundation", "minimum": "1.0.0", "before": "2.0.0" }]
}
```

`minimum` 包含下界，`before` 不包含上界，均使用三段数字版本。缺失依赖、版本不符或循环依赖阻止启用。停用前置会反向列出全部受影响的已启用插件，确认后终止相关场次，保留预设。

服务端从 `@aelzerant/session/core` 使用 `registerMinigameModule`。模块提供 `validate`、`duration`、`create`、`input`、`advance` 和 `result`。判定应为确定性的纯函数，只根据配置、状态、输入和游戏时间返回结果；不读取 DOM、联网或直接改角色。`clear` 输入必须释放按住状态。

客户端从 `game/apps/desktop/src/story/minigames/index.ts` 使用 `registerMinigameClient({id, module, View, mapInput})`，返回卸载函数。`mapInput` 将独占捕获的原生事件转换为语义事件；宿主填写序号与时间。View 收到配置、状态、游戏时间、暂停状态、可用区域、遮挡区域、输入回调及不可用回调。遵守 `area`／`blocked`，通过布局函数避让，空间不足时调用 `unavailable(reason)`。不要另设全局键盘监听器或自行锁定世界输入。

服务端检查权限、会话编号、输入序号与时间，并最终决定结果。指定的小游戏输入／准备命令允许参与者并发提交，不因其他参与者更新全局修订号而被误拒绝；这不会绕过会话和顺序验证。服务端在没有 GM 在线时也推进场次计时。玩家失焦、掉线或无法布局时按预设策略处理，默认等待 GM 处置。

## QTE 配置与扩展

`definition.version` 为 `1`。题目包含出现时间 `at`、持续时间 `duration`、响应／节拍方式 `timing`、目标时间 `targetMs`、按键、长按／连打／滑动参数、判定等级及扩展 `config`。内置题型为 `tap`、`hold`、`mash`、`chord` 和 `swipe`。

响应等级从出现时刻计算；节拍等级计算距 `at + targetMs` 的绝对时差。长按默认按开始按住时间判级，连打忽略系统自动重复，滑动要求持续按住指定鼠标键并满足方向与距离。

| 配置 | 含义 |
| --- | --- |
| `definition.config.sharedInput` | 默认 `false`，并发题目共享按键时拒绝；显式允许后同一次输入可交给多个题目 |
| `cue.config.wrongKey` | `ignore`／`fail`；失败仅针对当前未被其他题目使用的键 |
| `cue.config.chordToleranceMs` | 组合键的按下间隔，默认 150 毫秒 |
| `cue.config.chordHold` | 组合键是否需按住至长按要求 |
| `cue.config.interruptMs` | 长按累计中断容差 |
| `cue.config.releaseTiming` | 长按改用松开时间判级 |
| `cue.config.angleDegrees` | 滑动方向容差，默认 31 度 |
| `cue.config.reverse` | 反向移动处理：`ignore`／`fail` |

`registerQteRecognizer(type, recognizer)` 与 `registerQteView(type, View)` 均返回卸载函数。识别器接收题目、进度、按住状态、事件、`complete(timingAt)` 和 `fail()`；自定义配置从 `cue.config` 读取，扩展进度保持可序列化 JSON。服务端和客户端安装同一识别器，判级仍经过统一规则。

## 结果与权限边界

团队条件可按全员、人数或总分决定。后果分别声明个人／团队范围、成功／失败／总是触发，以及自动执行／GM 确认。个人后果可指向参与者绑定角色；团队后果必须指定角色。状态、资源、计数器使用世界现有规则接口。

后果通过唯一 effect ID 去重；失败保留待处理项和错误供 GM 修正后重试或忽略。有未处理后果时不能开始新场次，后续宏最后执行。任意脚本宏不会由服务器自动执行。小游戏功能适用于正常插件权限允许的世界与竞技场；它不会解锁其他受限世界工具。

用户可导出预设 JSON，由 GM 确认导入和启用；不要伪造 GM、会话或结算结果。其他文件格式与联机边界见 [备团工作流](workflows.md) 和 [命令与联机](../api/commands-and-network.md)。
