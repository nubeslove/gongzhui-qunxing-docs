# game/packages/tabletop-runtime/src/tabletop/lancer/scenePreparation.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {isNarrativeActor} from '../narrativeActor';
import {canonicalJson,parseLancerZone,storyGm,emptyStory,type ManualTable,type LancerDeploymentZone} from '@aelzerant/contracts';
```
</details>

## LancerScenePreparation

导出接口 · 源码第 3 行。

```ts
export interface LancerScenePreparation {
    actorIds: string[];
    zones: LancerDeploymentZone[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `actorIds` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `zones` | 否 | `LancerDeploymentZone[]` | 见结构定义及所属功能文档 |

## LancerScenePreparationAction

导出接口 · 源码第 4 行。

```ts
export type LancerScenePreparationAction = {
    kind: 'scene.lancer-preparation';
    sceneId: string;
    before: LancerScenePreparation;
    value: LancerScenePreparation;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `kind` | 否 | `'scene.lancer-preparation'` | 见结构定义及所属功能文档 |
| `sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `before` | 否 | `LancerScenePreparation` | 见结构定义及所属功能文档 |
| `value` | 否 | `LancerScenePreparation` | 见结构定义及所属功能文档 |

## applyLancerScenePreparation

导出接口 · 源码第 5 行。

```ts
export function applyLancerScenePreparation(table: ManualTable, sender: string, action: LancerScenePreparationAction): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `sender` | 否 | `string` | — |
| `action` | 否 | `LancerScenePreparationAction` | — |
