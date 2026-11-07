# game/packages/contracts/src/plugin-dependencies.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {BUILTIN_PLUGINS} from './plugin-registry';
import {emptyStoryPlugins,worldCalendarPluginEnabled,type PluginManifest,type PluginRequirement,type StoryPlugins} from './theatre';
import type {GameSystemId} from './systems';
```
</details>

## pluginCatalog

导出接口 · 源码第 5 行。

```ts
export function pluginCatalog(plugins: StoryPlugins|undefined): Map<string,PluginManifest>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `plugins` | 否 | `StoryPlugins&#124;undefined` | — |

## activePluginIds

导出接口 · 源码第 9 行。

```ts
export function activePluginIds(plugins: StoryPlugins|undefined, systemId: GameSystemId): Set<string>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `plugins` | 否 | `StoryPlugins&#124;undefined` | — |
| `systemId` | 否 | `GameSystemId` | — |

## pluginStateToken

导出接口 · 源码第 14 行。

```ts
export function pluginStateToken(plugins: StoryPlugins|undefined): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `plugins` | 否 | `StoryPlugins&#124;undefined` | — |

## pluginDependencyOrder

导出接口 · 源码第 27 行。

Dependency-first order; detects a cycle before proposing any changes.

```ts
export function pluginDependencyOrder(catalog: ReadonlyMap<string,PluginManifest>, roots: Iterable<string>): string[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `catalog` | 否 | `ReadonlyMap<string,PluginManifest>` | — |
| `roots` | 否 | `Iterable<string>` | — |

## validateActivePlugins

导出接口 · 源码第 43 行。

```ts
export function validateActivePlugins(plugins: StoryPlugins, systemId: GameSystemId): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `plugins` | 否 | `StoryPlugins` | — |
| `systemId` | 否 | `GameSystemId` | — |

## PluginChangePlan

导出接口 · 源码第 47 行。

```ts
export interface PluginChangePlan {
    enabled: string[];
    calendar?: boolean;
    affected: string[];
    expected: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `enabled` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `calendar` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `affected` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `expected` | 否 | `string` | 见结构定义及所属功能文档 |

## planPluginChange

导出接口 · 源码第 48 行。

```ts
export function planPluginChange(plugins: StoryPlugins|undefined, systemId: GameSystemId, id: string, on: boolean): PluginChangePlan;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `plugins` | 否 | `StoryPlugins&#124;undefined` | — |
| `systemId` | 否 | `GameSystemId` | — |
| `id` | 否 | `string` | — |
| `on` | 否 | `boolean` | — |
