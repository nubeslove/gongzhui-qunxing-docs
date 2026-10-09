# game/packages/network/src/framing.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import { isInteger, isRecord } from "@aelzerant/contracts";
```
</details>

## JsonFraming

导出接口 · 源码第 6 行。

Ordered channels allow one bounded in-progress message, no unbounded fragment table.

```ts
export class JsonFraming {
  encode(value: unknown): string[];
  decode(text: string): unknown | undefined;
  clear(): void;
}
```
