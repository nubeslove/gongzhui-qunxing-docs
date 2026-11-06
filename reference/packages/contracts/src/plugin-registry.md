# game/packages/contracts/src/plugin-registry.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {GameSystemId} from './systems';
import type {BuiltinPluginId,PluginManifest} from './theatre';
```
</details>

## BUILTIN_PLUGINS

导出接口 · 源码第 5 行。

Only implemented, audited plugins are listed as built-ins. Candidates stay in the research doc.

```ts
export const BUILTIN_PLUGINS: (PluginManifest & {
    id: BuiltinPluginId;
})[];
```

## builtinPluginsFor

导出接口 · 源码第 38 行。

```ts
export function builtinPluginsFor(systemId: GameSystemId): PluginManifest[];
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `systemId` | 否 | `GameSystemId` | — |
