# game/packages/session/src/story-calendar.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import { advanceCalendar, defaultWorldCalendar, parseCalendarDate, parseWorldCalendar, type StoryWorkspace } from '@aelzerant/contracts';
```
</details>

## applyCalendarCommand

导出接口 · 源码第 4 行。

Invoked within the existing save-before-broadcast transaction.

```ts
export function applyCalendarCommand(story: StoryWorkspace, command: Record<string, unknown>, gm: boolean): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `command` | 否 | `Record<string, unknown>` | — |
| `gm` | 否 | `boolean` | — |
