# game/packages/contracts/src/scene-copy.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {SceneFeatures} from './scene-features';
```
</details>

## copySceneFeatures

导出接口 · 源码第 4 行。

Fresh placeable identities. External document/media references remain in the same world.

```ts
export function copySceneFeatures(source: SceneFeatures|undefined, sourceScene: string, targetScene: string, newId?: ()=>string): SceneFeatures|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `source` | 否 | `SceneFeatures&#124;undefined` | — |
| `sourceScene` | 否 | `string` | — |
| `targetScene` | 否 | `string` | — |
| `newId` | 是 | `()=>string` | ()=>crypto.randomUUID() |
