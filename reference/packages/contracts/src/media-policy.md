# game/packages/contracts/src/media-policy.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## MediaPlanAction

导出接口 · 源码第 7 行。

Shared admission rules for media a GM uploads into a world.
Images re-encode losslessly-enough as WebP in the app. Video is refused: a gateway upload is capped
per file and a world has a storage budget, so raw footage breaks both. Uncompressed audio stays
accepted rather than converted, because the browser can only re-encode it in real time.

```ts
export type MediaPlanAction = 'accept' | 'convert' | 'reject';
```

## MediaUploadPlan

导出接口 · 源码第 8 行。

```ts
export interface MediaUploadPlan {
    action: MediaPlanAction;
    target?: 'image/webp';
    notice: string;
    reason?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `action` | 否 | `MediaPlanAction` | 见结构定义及所属功能文档 |
| `target` | 是 | `'image/webp'` | Present when the app must transcode before upload. |
| `notice` | 否 | `string` | One line the upload dialog shows in every case. |
| `reason` | 是 | `string` | Present when `action` is `reject`: what the GM should do instead. |

## MediaUploadInput

导出接口 · 源码第 17 行。

```ts
export interface MediaUploadInput {
    type: string;
    bytes: number;
    worldBytes: number;
    worldLimitBytes: number;
    maxFileBytes?: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `type` | 否 | `string` | Detected type, never the file extension. |
| `bytes` | 否 | `number` | 见结构定义及所属功能文档 |
| `worldBytes` | 否 | `number` | Bytes already stored for this world, from the world manifest. |
| `worldLimitBytes` | 否 | `number` | Per-world budget; keep it configurable because bucket sizes differ per deployment. |
| `maxFileBytes` | 是 | `number` | Largest single upload the gateway ticket accepts. |

## planMediaUpload

导出接口 · 源码第 43 行。

```ts
export function planMediaUpload(input: MediaUploadInput): MediaUploadPlan;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `input` | 否 | `MediaUploadInput` | — |
