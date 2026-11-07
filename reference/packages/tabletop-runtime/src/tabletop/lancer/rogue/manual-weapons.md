# game/packages/tabletop-runtime/src/tabletop/lancer/rogue/manual-weapons.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../../README.md)

## ARENA_MANUAL_WEAPONS

导出接口 · 源码第 4 行。

These imported weapons need a chosen mode or conditional text. Their printed
base values make them installable; firing is explicitly routed to the owner's
ability desk instead of silently treating their special rules as a basic shot.

```ts
export const ARENA_MANUAL_WEAPONS: Record<string, {
    damage: string;
    range: string;
}>;
```
