# game/packages/contracts/src/community-center-validation.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseRuntimeManifest} from './community-plugin-runtime';
import {parseResourcePackage} from './resource-packages';
import {isCommunitySection,type CommunityPackageBody,type CommunitySectionId,type CenterKind} from './community-center';
```
</details>

## centerId

导出接口 · 源码第 5 行。

```ts
export function centerId(raw: unknown): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## centerRecord

导出接口 · 源码第 6 行。

```ts
export function centerRecord(raw: unknown): Record<string,unknown>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## centerKeys

导出接口 · 源码第 7 行。

```ts
export function centerKeys(v: Record<string,unknown>, keys: string[]): void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `v` | 否 | `Record<string,unknown>` | — |
| `keys` | 否 | `string[]` | — |

## centerText

导出接口 · 源码第 8 行。

```ts
export function centerText(raw: unknown, max: number, empty?: boolean): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
| `max` | 否 | `number` | — |
| `empty` | 是 | `boolean` | false |

## centerVersion

导出接口 · 源码第 9 行。

```ts
export function centerVersion(raw: unknown): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## centerKind

导出接口 · 源码第 10 行。

```ts
export function centerKind(raw: unknown): CenterKind;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## centerSection

导出接口 · 源码第 11 行。

```ts
export function centerSection(raw: unknown): CommunitySectionId;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## centerRevision

导出接口 · 源码第 12 行。

```ts
export function centerRevision(raw: unknown): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## parseCommunityPackage

导出接口 · 源码第 14 行。

```ts
export function parseCommunityPackage(raw: unknown): CommunityPackageBody;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
