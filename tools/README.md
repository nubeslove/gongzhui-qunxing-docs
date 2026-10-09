# 离线工具与文档维护

## GM和AI：只需文档库

使用Node 20以上。查询和打包工具没有npm依赖、不联网。

```sh
node tools/query.mjs ManualActor
node tools/query.mjs StoryResource
node tools/query.mjs --action actor.create
node tools/query.mjs --catalog lancer
node tools/query.mjs --catalog heartsea 关键字
node tools/world-pack.mjs inspect your-world.aafworld
node tools/world-pack.mjs pack world.json asset-sources.json media new-world.aafworld
node tools/check-docs.mjs
```

query返回类型、字段或资源ID。world-pack面向ManualTable家族，详细调用见[示例](../examples/README.md)；它不会验证完整规则或远程上传。check-docs检查本库相对链接、JSON、引用和已覆盖的Schema结构约束，不启动游戏。

## 维护者：另需匹配游戏源码及已有依赖

下列工具只读取指定源码目录，写入本**文档仓库**。SOURCE_ROOT是包含game目录的游戏仓库根目录。生成步骤顺序有依赖：示例先生成注册命令清单，约束提取随后读取。

```sh
node tools/extract-reference.mjs SOURCE_ROOT
node tools/catalog-index.mjs SOURCE_ROOT
node tools/build-examples.mjs SOURCE_ROOT
node tools/extract-constraints.mjs SOURCE_ROOT
node tools/build-api.mjs
node tools/check-docs.mjs
node tools/check-source.mjs SOURCE_ROOT
```

- extract-reference使用源码已有TypeScript，提取声明、字段、参数、重新导出入口、规范化Schema和文件指纹，不复制实现函数体。
- 推导签名中的`@source/`代表游戏仓库的`game/`，用来替代维护者本机绝对路径，不是另一个已发布的npm包。
- catalog-index仅发布资源ID、名称、分类和自动化标记；不发布完整条文。
- build-examples使用源码已有tsx调用真实解析器；还检查玩家投影、备份恢复和本地备团命令。所有数据都是临时内存中的原创示例，不创建真实游戏世界。
- extract-constraints提取直接参数读取、校验调用与拒绝条件；内部转交类型须继续查询，不能当作完整静态程序证明。
- build-api根据人工逐路由核对的模型生成OpenAPI；新增服务路由时必须同步维护。check-source对比HTTP入口、注册命令与源码指纹。

生成的Schema描述规范化输出。动态fields键、数值范围、依赖闭包、权限、主持权和世界身份由实际解析／事务入口进一步验证。内部类型没有自动成为稳定SDK；这些工具不安装游戏、不打原生包、不创建用户账号。
