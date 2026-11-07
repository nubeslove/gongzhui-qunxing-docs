# game/packages/session/src/world-directory-table.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {emptyStory,emptyWorldLibrary,tableFromDirectory,type DirectoryTableCommand} from '@aelzerant/contracts';
import {assertGm} from './world-validation';
import type {WorldHandler} from './world-types';
```
</details>

## directoryTableHandlers

导出接口 · 源码第 3 行。

```ts
export const directoryTableHandlers: Record<string, WorldHandler>;
```
