# game/apps/desktop/src/story/minigames/layout.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

## GameRect

导出接口 · 源码第 1 行。

```ts
export interface GameRect {
    x: number;
    y: number;
    width: number;
    height: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `x` | 否 | `number` | 见结构定义及所属功能文档 |
| `y` | 否 | `number` | 见结构定义及所属功能文档 |
| `width` | 否 | `number` | 见结构定义及所属功能文档 |
| `height` | 否 | `number` | 见结构定义及所属功能文档 |

## intersects

导出接口 · 源码第 2 行。

```ts
export const intersects: (a: GameRect, b: GameRect, gap?: number): boolean;
```

## placeGamePanel

导出接口 · 源码第 4 行。

Place controls against an edge without covering a retained HUD or another panel.

```ts
export function placeGamePanel(size: {width:number;height:number}, area: GameRect, blocked: GameRect[], anchor: 'top'|'bottom-left'|'bottom-right'): GameRect|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `size` | 否 | `{width:number;height:number}` | — |
| `area` | 否 | `GameRect` | — |
| `blocked` | 否 | `GameRect[]` | — |
| `anchor` | 否 | `'top'&#124;'bottom-left'&#124;'bottom-right'` | — |

## placeGameCues

导出接口 · 源码第 13 行。

Stable slots, nearest the centre first. Returns no layout instead of covering UI.

```ts
export function placeGameCues(count: number, area: GameRect, blocked: GameRect[], width?: number, height?: number): GameRect[]|undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `count` | 否 | `number` | — |
| `area` | 否 | `GameRect` | — |
| `blocked` | 否 | `GameRect[]` | — |
| `width` | 是 | `number` | 160 |
| `height` | 是 | `number` | 154 |
