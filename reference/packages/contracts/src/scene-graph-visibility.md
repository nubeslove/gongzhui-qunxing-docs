# game/packages/contracts/src/scene-graph-visibility.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {SceneGraphLibrary} from './story';
```
</details>

## visibleSceneGraphs

导出接口 · 源码第 4 行。

Hide unrevealed chapter names and links to private GM notes as well as nodes.

```ts
export function visibleSceneGraphs(library: SceneGraphLibrary, sceneIds?: ReadonlySet<string>): SceneGraphLibrary|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `library` | 否 | `SceneGraphLibrary` | — |
| `sceneIds` | 是 | `ReadonlySet<string>` | — |
