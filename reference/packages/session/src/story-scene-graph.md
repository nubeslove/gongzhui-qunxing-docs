# game/packages/session/src/story-scene-graph.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseSceneGraph,storyId,storyObject,storyText,type SceneNode,type StoryWorkspace} from '@aelzerant/contracts';
```
</details>

## SceneGraphCommand

导出接口 · 源码第 3 行。

```ts
export type SceneGraphCommand = {
    type: 'graph.create';
    id: string;
    name: string;
    expected?: number;
} | {
    type: 'graph.rename';
    id: string;
    name: string;
    expected?: number;
} | {
    type: 'graph.delete';
    id: string;
    expected?: number;
} | {
    type: 'graph.select';
    id: string;
    expected?: number;
} | {
    type: 'graph.save';
    id: string;
    nodes: SceneNode[];
    expected?: number;
} | {
    type: 'graph.reset';
    id?: string;
    expected?: number;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.type` | 否 | `'graph.create'` | 见结构定义及所属功能文档 |
| `分支1.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.name` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.expected` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支2.type` | 否 | `'graph.rename'` | 见结构定义及所属功能文档 |
| `分支2.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.name` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.expected` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支3.type` | 否 | `'graph.delete'` | 见结构定义及所属功能文档 |
| `分支3.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.expected` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支4.type` | 否 | `'graph.select'` | 见结构定义及所属功能文档 |
| `分支4.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.expected` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支5.type` | 否 | `'graph.save'` | 见结构定义及所属功能文档 |
| `分支5.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支5.nodes` | 否 | `SceneNode[]` | 见结构定义及所属功能文档 |
| `分支5.expected` | 是 | `number` | 见结构定义及所属功能文档 |
| `分支6.type` | 否 | `'graph.reset'` | 见结构定义及所属功能文档 |
| `分支6.id` | 是 | `string` | 见结构定义及所属功能文档 |
| `分支6.expected` | 是 | `number` | 见结构定义及所属功能文档 |

## applySceneGraphCommand

导出接口 · 源码第 11 行。

```ts
export function applySceneGraphCommand(story: StoryWorkspace, raw: unknown, c: {sceneIds?:ReadonlySet<string>}, gm: boolean): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `raw` | 否 | `unknown` | — |
| `c` | 否 | `{sceneIds?:ReadonlySet<string>}` | — |
| `gm` | 否 | `boolean` | — |
