# game/apps/desktop/src/story/compendiumObjects.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {compendiumHash} from '@aelzerant/contracts';
import {compendiumObjectHash,type CompendiumObjects} from '@aelzerant/tabletop-runtime/story/compendiumObjects';
```
</details>

## 重新导出的模块

```ts
export * from '@aelzerant/tabletop-runtime/story/compendiumObjects';
```

## compendiumObjects

导出接口 · 源码第 6 行。

Objects are immutable and content-addressed; old revisions remain available for recovery.

```ts
export const compendiumObjects: CompendiumObjects;
```
