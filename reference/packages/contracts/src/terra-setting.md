# game/packages/contracts/src/terra-setting.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {StoryWorkspace,StoryPack} from './story';
import type {ManualTable} from './tabletop';
```
</details>

## isTerraSpecies

导出接口 · 源码第 4 行。

```ts
export const isTerraSpecies: (id: string): boolean;
```

## ensureTerraSetting

导出接口 · 源码第 6 行。

Save migration is non-destructive: keep authored resources and add the required setting.

```ts
export function ensureTerraSetting(story: StoryWorkspace): StoryWorkspace;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |

## assertTerraActorChanges

导出接口 · 源码第 11 行。

```ts
export function assertTerraActorChanges(before: ManualTable, after: ManualTable): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `before` | 否 | `ManualTable` | — |
| `after` | 否 | `ManualTable` | — |
