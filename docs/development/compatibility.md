# 身份、版本与兼容

核对真源：`contracts/src/systems.ts`、`rule-variant.ts`、`desktop/src/product.ts`。

| 分区 | systemId | systemVersion | ruleVariant |
| --- | --- | --- | --- |
| AAF | `aaf` | `aaf-2026-09` | 省略 |
| DND 2024 | `dnd5e-2024` | `2024` | 省略 |
| LANCER | `lancer` | `1` | 省略 |
| 梦旅心海 | `otherworld-journey` | `0.1-editorial.1` | 省略 |
| 行于泰拉 | `dnd5e-2024` | `2024` | `{"id":"terra-walker","version":"0.9.1","base":"2024"}` |
| 新乌托邦 | `lancer` | `1` | `{"id":"new-utopia","version":"0.1.1","base":"lancer-1","resources":"1.0"}` |

世界身份保存后不可因切换大厅分区、主题或 UI 而改变。FU 当前只是写作参考，不是支持的规则 ID。未知新规则不能仅往 JSON 写一个名字就接入。

## 不同版本字段各做什么

| 字段 | 作用 | 示例 |
| --- | --- | --- |
| 应用版本 | 客户端／服务器代码发行 | `0.1.0` |
| 文档快照 | 本次源码字段核对日期 | `2026-10-10` |
| `schemaVersion` / 文件 `version` | 存档或容器结构版本 | 当前主要为 `1` |
| `systemVersion` | 基础规则身份版本 | `2024` |
| `ruleVariant.version` | 指定私设规则版本 | `0.1.1` |
| 文档 `revision` | 并发修改校验 | 整数，不能当应用版本 |
| `publishedVersion` / publication `version` | 世界公开发布序号 | 提交成功由服务器递增 |
| 资源目录 `revision` | 资源定义快照版本 | AAF 为字符串 |
| 文件 `hash` | 实际内容的 SHA-256 | 64 位小写十六进制 |

## 已有迁移行为

旧世界缺省系统身份时，部分平台读取路径按 AAF 处理；这不是允许新包省略身份。ActorFile 严格检查注册规则版本。恢复 `.aafworld` 会重新生成世界 ID、绑定当前 GM、清除服务器世界绑定和发布计数。跨世界导入会重映射角色／资源 ID，并清除原控制者或不适用引用。

模板、导出文件、合集对象和完整世界使用不同格式，不可换扩展名互用。`WorldDocument` 的 `actors/scenes` 是字典；`ManualTable` 的 `actors/scenes` 是数组，而且当前地图单独放在 `map`。

## 本次确定的发行约定

客户端、服务端、文档、内容包各自有版本；一次发行用 `release-manifest` 绑定经过验证的组合。当前接口尚无完善的自动协议版本协商与自动迁移服务，因此运营上只发布明确测试过的客户端／服务器配对。不能把“schemaVersion 仍是 1”当作任意日期的二进制都兼容。

完整文件布局与保留策略见 [发行规范](../operations/releases.md)。
