# 文件格式、字段与导入

## 先选容器

| 产物 | 结构／入口 | 携带内容 | 不携带或限制 |
| --- | --- | --- | --- |
| 单项资源与依赖 | `ResourceFile`，`format: aaf-resources, version: 1` | 根资源、子资源和被引用资源 | 不含角色资源池、控制权和素材字节；≤1,900,000 字节 |
| 角色 | `ActorFile`，`format: aaf-actor, version: 1` | 角色、授予资源、计数器、必要目录 | 不含场景和完整日记；≤1,900,000 字节 |
| 日记／任务 | `JournalFile`，`format: aaf-journal, version: 1` | 一份 StoryEntry 及其页 | 不携带外部附件；≤1,900,000 字节 |
| 场景 | `SceneArchiveHeader`，`format: aaf.scene, version: 1` | 指定适配器的场景 payload 与附件 | 元数据≤1,900,000 字节，附件合计≤512,000,000 字节 |
| 合集 | `CompendiumPack + CompendiumIndex + CompendiumBody` | 哈希索引、正文和可携带素材分片 | 世界只存目录，不能只复制目录当作完整合集 |
| ManualTable 完整世界 | `.aafworld` / `AAFWLD02` | 世界原稿、附件、有需要时包括合集对象 | 不等于服务器目录登记；备份会含 GM 私密资料 |
| AAF 世界原稿 | `WorldDocument` / WorldRepository | AAF 世界、角色、场景、规则状态 | 与 ManualTable 世界备份格式不同 |

完整字段： [ResourceFile](../../reference/packages/contracts/src/resource-transfer.md)、[ActorFile](../../reference/packages/contracts/src/actor-transfer.md)、[JournalFile](../../reference/packages/contracts/src/journal-transfer.md)、[场景](../../reference/packages/contracts/src/scene-archive.md)、[合集](../../reference/packages/contracts/src/compendium.md)。不要依据扩展名猜测 JSON 结构。

## 通用资源

`StoryResource` 必填 `id, systemId, name, kind, description, packId, visibility, tags, children, activities`。可选 `image, source, access`。`kind` 仅接受 `species / class / background / feature / spell / technique / item / equipment / monster / rule`。`visibility` 为 `gm` 或 `public`；更精细的权限用 `access`。

| ResourceActivity 字段 | 含义 |
| --- | --- |
| `id / name` | 活动 ID 与显示名，资源内部稳定唯一 |
| `activation` | `free/action/bonus/reaction/quick/full/passive`；合法标签不保证所有规则都有对应预算 |
| `cost` | 行动费用，由所属规则的适配器解释 |
| `pool / poolCost` | 消耗的角色资源池键及费用；空 pool 表示没有此项消耗 |
| `target` | `self/single/multiple/area` |
| `range / count` | 范围与可选目标数量，单位按适配器解释，不能混用 LANCER 格与 DND 尺 |
| `duration / trigger` | 持续时间与 `use/turn-start/turn-end/enter/leave/aura` 触发入口 |
| `effects` | `kind,target,value,key` 列表；只有注册类型能执行 |
| `visual` | 可选演出参数，不能取代数值效果 |

`ResourceEffect.kind` 为 `damage / heal / counter / modifier / condition / template`，`target` 为 `self / targets`。`value` 是受限表达式文本，不是 JavaScript。每个效果是否已由目标规则消费，必须核对 [resource-runtime](../../reference/packages/session/src/resource-runtime.md) 与该规则说明。完整嵌套字段见 [story](../../reference/packages/contracts/src/story.md) 与 [resource-visual](../../reference/packages/contracts/src/resource-visual.md)。

ResourceFile 的资源必须同规则、包含 rootId、依赖完整且没有无关条目；资源树最多 16 层，不能循环引用。资源文件上限 5,000 条。跨世界导入会重映射 ID、清除素材引用并把无法迁移的文档链接标为失效；导入完成后重新绑定附件。

## 角色载荷

`ActorFile.actor` 为规则决定的对象，不是随意扩展的通用卡片。AAF 使用 `ActorDocument`；其余主要为 `ManualActor`。角色包不得包含 `tokenInstance` 场景实例关联。`resources` 只能是该角色授予资源的闭包，并且使用 `packId: homebrew`；`grants` 引用根资源；`counters` 省略 actorId，由导入端重新绑定。

`ManualActor` 必填 `id,name,ownerId,public,fields,notes`，可选 `dnd,utopia,inspection,sceneObject,ownedItems,access,prototypeToken,tokenInstance`。`fields` 最多 120 项，键≤100 字符，值≤4,000 字符；name≤120 字符，notes≤40,000 字符。不同规则读取不同字段，请看 [字符串字段清单](../api/dynamic-fields.md)。

字段详细页：[ManualActor / ManualTable](../../reference/packages/contracts/src/tabletop.md)、[AAF ActorDocument](../../reference/packages/session/src/world-types.md)、[持有物](../../reference/packages/contracts/src/owned-item.md)、[原型与实例](../../reference/packages/contracts/src/token-prototype.md)。

## ManualTable 世界的关键结构

| 字段 | 使用要求 |
| --- | --- |
| `schemaVersion` | 当前为 1 |
| `id / hostId` | 本机世界与主持人身份；导入新副本会重绑定 |
| `systemId / systemVersion / ruleVariant` | 精确使用兼容矩阵 |
| `revision / publishedVersion / updatedAt` | 本地修订、服务器发布版本、毫秒时间戳 |
| `activeSceneId / map` | 当前场景标识与地图 |
| `scenes` | 其他场景数组；不要再放一次当前场景；最多总计 128 场景 |
| `actors` | 全世界角色资料；棋子放在每张 map.tokens 中 |
| `assets` | 实际世界附件清单；二进制放在备份尾部或本地对象存储 |
| `story` | 资源、日记、合集、图集、演出、事件、权限和目录 |
| `dndBattle / lancerBattle / utopiaBattle` | 对应规则的战斗状态；新草稿通常省略，由开战命令生成 |
| `privateNotes` | GM 私密内容；公共投影会清空 |
| `worldActiveSceneId / sceneSummaries` | 玩家投影元数据；GM 原稿不应人为写入 |

完整字段含全部子类型见 [字段页](../../reference/packages/contracts/src/tabletop.md) 与 [规范化 schema](../../schemas/ManualTable.schema.json)。示例只展示安全最小世界，不包含真实游戏素材。

## `.aafworld` 二进制布局

1. 前 8 字节 ASCII：`AAFWLD02`；读取兼容 `AAFWLD01`。
2. 接下来 4 字节：little-endian 无符号 32 位元数据字节长度。
3. UTF-8 JSON 元数据：ManualTable，可附合集对象；最多 64,000,000 字节。
4. 按 `assets` 清单顺序拼接附件原字节。每项长度与 SHA-256 必须相符；合计最多 512,000,000 字节。不允许额外尾部数据。

这不是 ZIP。将 JSON 重命名成 `.aafworld` 无法导入。恢复会检查所属规则、附件、GLB 和 PDF，并创建新世界副本。元数据限制和附件限制分别计算。

```sh
node tools/world-pack.mjs pack world.json asset-sources.json media new-world.aafworld
node tools/world-pack.mjs inspect new-world.aafworld
```

有合集时末尾再传 `compendium-objects.json`。该工具离线运行，只组装／核对容器，不承诺完整业务校验；客户端恢复是最终入口。AAF WorldDocument 请走其专门导出／导入路径，不能塞进此工具。

## 素材的几种不同限制

| 通道 | 单文件 | 总量／条目 | 类型边界 |
| --- | --- | --- | --- |
| WorldAssetPack | 64,000,000 字节 | 最多 10,000 清单项 | 图像、音频、视频、PDF、GLB |
| 服务器 publication | 64,000,000 字节 | 1 个 table.json + 300 附件 | path 白名单决定；table.json≤2,000,000 字节 |
| 服务器 media | 32,000,000 字节 | 合计≤512,000,000 字节 | 支持图像、音频、视频、PDF；没有 GLB |
| 场景包 | GLB 64,000,000；其余32,000,000 | 总附件≤512,000,000 | 场景解析器的类型白名单比素材库窄，不含 GIF/SVG |
| 合集 | 单对象1,900,000；包64,000,000 | 最多128合集、每合集2,000条 | 索引、正文与素材分片分别校验 |

服务器上传不是全部格式的通用导入。场景包、合集包、世界备份有各自读写入口。`asset:` 前缀、`assets/...` 路径和远程 URL 是否允许，也依使用字段分别校验。
