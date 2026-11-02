# game/packages/tabletop-runtime/src/tabletop/narrativeActor.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ManualActor} from '@aelzerant/contracts';
```
</details>

## isNarrativeActor

导出接口 · 源码第 4 行。

A portrait and identity for dialogue; never a default pilot or combat build.

```ts
export const isNarrativeActor: (actor: Pick<ManualActor, "fields"> | undefined): boolean;
```

## newNarrativeActor

导出接口 · 源码第 5 行。

```ts
export function newNarrativeActor(name: string, ownerId: string, id?: string): ManualActor;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `name` | 否 | `string` | — |
| `ownerId` | 否 | `string` | — |
| `id` | 是 | `string` | crypto.randomUUID() |
