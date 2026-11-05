# game/packages/tabletop-runtime/src/tabletop/atlasRuntime.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {emptyStory,parseWorldAtlas,storyGm,atlasPath,type AtlasCommand,type ManualTable} from '@aelzerant/contracts';
```
</details>

## applyAtlasCommand

导出接口 · 源码第 3 行。

```ts
export function applyAtlasCommand(table: ManualTable, senderId: string, command: AtlasCommand): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `table` | 否 | `ManualTable` | — |
| `senderId` | 否 | `string` | — |
| `command` | 否 | `AtlasCommand` | — |
