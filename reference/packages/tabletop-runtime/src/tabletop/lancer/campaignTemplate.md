# game/packages/tabletop-runtime/src/tabletop/lancer/campaignTemplate.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {emptyStory,newWorldAssetPack,sceneArchiveLibrary,parseManualTable,storyGm,type ManualTable} from '@aelzerant/contracts';
import {readyLancer} from './model';
```
</details>

## lancerCampaignTemplate

导出接口 · 源码第 5 行。

Explicit preparation allowlist. A template is never an online-room backup.

```ts
export function lancerCampaignTemplate(source: ManualTable): ManualTable;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `source` | 否 | `ManualTable` | — |
