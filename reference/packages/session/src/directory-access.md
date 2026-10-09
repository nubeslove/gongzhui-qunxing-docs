# game/packages/session/src/directory-access.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {isLibraryKind} from '@aelzerant/contracts';
import {checkedDirectoryAccessPlan,patchDirectoryAccess,canonicalJson,type DirectoryAccessActor,type DirectoryAccessCommand,type StoryWorkspace,type DocumentAccess} from '@aelzerant/contracts';
```
</details>

## applyDirectoryAccess

导出接口 · 源码第 4 行。

Candidate transaction only. Caller owns role validation and persistence.

```ts
export function applyDirectoryAccess(story: StoryWorkspace, actors: readonly DirectoryAccessActor[], command: DirectoryAccessCommand): {id:string;value:DocumentAccess}[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `actors` | 否 | `readonly DirectoryAccessActor[]` | — |
| `command` | 否 | `DirectoryAccessCommand` | — |
