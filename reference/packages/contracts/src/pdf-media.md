# game/packages/contracts/src/pdf-media.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## LOCAL_PDF_LIMIT

导出接口 · 源码第 1 行。

```ts
export const LOCAL_PDF_LIMIT = 32000000;
```

## isPdfHeader

导出接口 · 源码第 2 行。

```ts
export function isPdfHeader(bytes: Uint8Array): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `bytes` | 否 | `Uint8Array` | — |

## validateLocalPdf

导出接口 · 源码第 5 行。

```ts
export function validateLocalPdf(blob: Blob): Promise<Blob>;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `blob` | 否 | `Blob` | — |
