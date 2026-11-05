# game/packages/contracts/src/official-source-overlays.ts

源码核对日：2026-11-05。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## Point

内部依赖类型 · 源码第 3 行。

```ts
type Point = [
    number,
    number
];
```

## Box

内部依赖类型 · 源码第 4 行。

```ts
type Box = [
    number,
    number,
    number,
    number
];
```

## Area

内部依赖类型 · 源码第 5 行。

```ts
type Area = {
    old: Box;
    pixels: Point[];
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `old` | 否 | `Box` | 见结构定义及所属功能文档 |
| `pixels` | 否 | `Point[]` | 见结构定义及所属功能文档 |
