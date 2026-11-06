# game/packages/session/src/story-resource-packages.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {emptyStory,storyGm,installResourcePackage,enableResourcePackage,parseResourcePackage,parseStory,type StoryWorkspace,type GameSystemId,type ResourcePackage} from '@aelzerant/contracts';
```
</details>

## StoryResourcePackageChange

导出接口 · 源码第 2 行。

```ts
export type StoryResourcePackageChange = {
    op: 'install';
    package: ResourcePackage;
    hash: string;
} | {
    op: 'enable';
    packageId: string;
    enabled: boolean;
    choices?: Record<string, string>;
} | {
    op: 'remove';
    packageId: string;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.op` | 否 | `'install'` | 见结构定义及所属功能文档 |
| `分支1.package` | 否 | `ResourcePackage` | 见结构定义及所属功能文档 |
| `分支1.hash` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.op` | 否 | `'enable'` | 见结构定义及所属功能文档 |
| `分支2.packageId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.enabled` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `分支2.choices` | 是 | `Record<string,string>` | 见结构定义及所属功能文档 |
| `分支3.op` | 否 | `'remove'` | 见结构定义及所属功能文档 |
| `分支3.packageId` | 否 | `string` | 见结构定义及所属功能文档 |

## changeStoryResourcePackage

导出接口 · 源码第 7 行。

Only the trusted center service supplies installation bytes, after release/hash verification.

```ts
export function changeStoryResourcePackage(previous: StoryWorkspace|undefined, change: StoryResourcePackageChange, context: {ownerId:string;senderId:string;systemId:GameSystemId;busy:boolean}): StoryWorkspace;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `previous` | 否 | `StoryWorkspace&#124;undefined` | — |
| `change` | 否 | `StoryResourcePackageChange` | — |
| `context` | 否 | `{ownerId:string;senderId:string;systemId:GameSystemId;busy:boolean}` | — |
