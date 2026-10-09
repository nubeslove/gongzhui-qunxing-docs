# 场景、素材与高度

## 地图结构与坐标

ManualMap 的 `width/depth` 为格尺寸，`tokens` 为棋子，`blocks` 为实体，`features` 包含墙门、区域、光源、音源、绘图、笔记、贴图与迷雾。背景图只是画面，不能自己提供碰撞或高度。

完整字段按用途读取：[场景特性](../../reference/packages/contracts/src/scene-features.md)、[区域](../../reference/packages/contracts/src/scene-region.md)、[画布／网格](../../reference/packages/contracts/src/scene-canvas.md)、[墙门](../../reference/packages/contracts/src/scene-door.md)、[测量](../../reference/packages/contracts/src/scene-measurement.md)、[视野](../../reference/packages/contracts/src/scene-perception.md)、[LANCER 物件](../../reference/packages/contracts/src/lancer-scene.md)。

## 二维高度

地面 z=0。z 使用格，不是尺；一格5ft时，z=4表示+20ft，z=-2表示-10ft。二维棋子允许负高度。角色、区域表面、墙体和物件的高度属于规则数据；显示可以隐藏 z 轴，但不能丢掉它。

二维距离在当前规则既有平面距离上加入垂直差：`sqrt(horizontal² + dz²)`，最后换算规则单位。平面部分仍保持规则现有网格算法，不能统一改成三个轴都欧式距离。LANCER／新乌托邦保留本身三维几何，不套用二维攀爬过程。

`RegionEnvironment.surface = {elevation,climbable,dc?}` 指定区域表面高度；elevation为-100至200格，dc为1至100。区域的效应体积 bottom/top 和可站立 surface 是不同概念。多个表面重叠按现有最高表面逻辑处理，不是完整的多层桥梁／地下室空间系统。

## 移动与攀爬

选择步行时跨到高地会检查可攀爬性；GM 可要求检定，并通过环境决策确认通过或失败。拥有相应攀爬速度免除此普通攀爬检定与额外攀爬成本；普通攀爬额外支付移动距离。困难地形和其他独立减速仍按所属规则计算。

失败者留在原处；同一战斗回合不允许反复尝试检定。当前实现是 GM 确認裁定，不宣称已自动掷特技。飞行使用自身速度与高度变化，绕过普通地面攀爬要求，但实体、地图边界、规则状态和具体能力仍适用。

字段与计算入口：[scene-elevation](../../reference/packages/contracts/src/scene-elevation.md)、[环境配置](../../reference/packages/contracts/src/scene-environment.md)、[移动决策](../../reference/packages/session/src/elevation-movement.md)。

## Token 与立绘

Token 源素材约束为正方形，地图棋子以圆形外观管理；有自定义图片时不叠加默认底板。立绘按2:3展示，角色形象和地图棋子使用不同字段。图标采用正方形单元，不把长方形图上传后依赖 UI 随意拉伸。

ManualActor.fields 使用 `立绘`、`立绘·半血`、`立绘·濒死` 保存三种状态；`Token` 保存棋子图片，原型／场景可有明确覆盖。生命>一半为满血，0<生命≤一半为半血，生命≤0为濒死；缺差分回退普通立绘，不回退Token。详情：[token-images](../../reference/packages/contracts/src/token-images.md)、[character-portraits](../../reference/packages/contracts/src/character-portraits.md)、[token-appearance](../../reference/packages/contracts/src/token-appearance.md)。

## 素材寻址与可见性

清单记录 `path,hash,size,mime,name`，ManualAsset另有 `public`。哈希按原字节计算，规范路径为 `assets/<类别>/<sha256>.<扩展名>`；旧平铺路径仍在部分入口兼容。某些字段使用 `asset:` 前缀，某些使用裸路径，遵从对应解析器。

演出背景和图集图片只接受各自白名单，不接受任意远程 URL；音乐播放列表可用受支持的HTTP(S)地址。把素材放进 GM 库不代表向玩家公开。已经向玩家发送的字节无法靠撤权使其从对方磁盘消失。
