# game/packages/contracts/src/world-calendar.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## SceneKind

导出接口 · 源码第 3 行。

```ts
export type SceneKind = keyof typeof SCENE_KINDS;
```

## parseSceneKind

导出接口 · 源码第 4 行。

```ts
export function parseSceneKind(value: unknown): SceneKind;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |

## resolvedSceneKind

导出接口 · 源码第 8 行。

```ts
export function resolvedSceneKind(value: SceneKind | undefined, hasEncounter?: boolean): SceneKind;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `SceneKind &#124; undefined` | — |
| `hasEncounter` | 是 | `boolean` | false |

## CalendarMonth

导出接口 · 源码第 11 行。

```ts
export interface CalendarMonth {
    id: string;
    name: string;
    days: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `days` | 否 | `number` | 见结构定义及所属功能文档 |

## CalendarPhase

导出接口 · 源码第 12 行。

```ts
export interface CalendarPhase {
    id: string;
    name: string;
    days: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `days` | 否 | `number` | 见结构定义及所属功能文档 |

## CalendarDate

导出接口 · 源码第 13 行。

```ts
export interface CalendarDate {
    year: number;
    month: string;
    day: number;
    hour: number;
    minute: number;
    second: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `year` | 否 | `number` | 见结构定义及所属功能文档 |
| `month` | 否 | `string` | 见结构定义及所属功能文档 |
| `day` | 否 | `number` | 见结构定义及所属功能文档 |
| `hour` | 否 | `number` | 见结构定义及所属功能文档 |
| `minute` | 否 | `number` | 见结构定义及所属功能文档 |
| `second` | 否 | `number` | 见结构定义及所属功能文档 |

## CalendarEvent

导出接口 · 源码第 14 行。

```ts
export interface CalendarEvent {
    id: string;
    name: string;
    month: string;
    day: number;
    year: number | null;
    description: string;
    visibility: 'public' | 'gm';
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `month` | 否 | `string` | 见结构定义及所属功能文档 |
| `day` | 否 | `number` | 见结构定义及所属功能文档 |
| `year` | 否 | `number &#124; null` | 见结构定义及所属功能文档 |
| `description` | 否 | `string` | 见结构定义及所属功能文档 |
| `visibility` | 否 | `'public' &#124; 'gm'` | 见结构定义及所属功能文档 |

## WorldCalendar

导出接口 · 源码第 17 行。

```ts
export interface WorldCalendar {
    version: 1;
    revision: number;
    era: string;
    months: CalendarMonth[];
    hoursPerDay: number;
    minutesPerHour: number;
    secondsPerMinute: number;
    phases: CalendarPhase[];
    phaseOffset: number;
    phaseOverrides: Array<{
        month: string;
        day: number;
        phase: string;
    }>;
    current: CalendarDate;
    events: CalendarEvent[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `version` | 否 | `1` | 见结构定义及所属功能文档 |
| `revision` | 否 | `number` | 见结构定义及所属功能文档 |
| `era` | 否 | `string` | 见结构定义及所属功能文档 |
| `months` | 否 | `CalendarMonth[]` | 见结构定义及所属功能文档 |
| `hoursPerDay` | 否 | `number` | 见结构定义及所属功能文档 |
| `minutesPerHour` | 否 | `number` | 见结构定义及所属功能文档 |
| `secondsPerMinute` | 否 | `number` | 见结构定义及所属功能文档 |
| `phases` | 否 | `CalendarPhase[]` | 见结构定义及所属功能文档 |
| `phaseOffset` | 否 | `number` | 见结构定义及所属功能文档 |
| `phaseOverrides` | 否 | `Array<{ month: string; day: number; phase: string }>` | 见结构定义及所属功能文档 |
| `current` | 否 | `CalendarDate` | 见结构定义及所属功能文档 |
| `events` | 否 | `CalendarEvent[]` | 见结构定义及所属功能文档 |

## CalendarCommand

导出接口 · 源码第 24 行。

```ts
export type CalendarCommand = {
    type: 'calendar.configure';
    expectedRevision: number;
    calendar: WorldCalendar;
} | {
    type: 'calendar.setTime';
    expectedRevision: number;
    date: CalendarDate;
} | {
    type: 'calendar.advance';
    expectedRevision: number;
    amount: number;
    unit: 'day' | 'hour' | 'minute' | 'second';
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.type` | 否 | `'calendar.configure'` | 见结构定义及所属功能文档 |
| `分支1.expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支1.calendar` | 否 | `WorldCalendar` | 见结构定义及所属功能文档 |
| `分支2.type` | 否 | `'calendar.setTime'` | 见结构定义及所属功能文档 |
| `分支2.expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支2.date` | 否 | `CalendarDate` | 见结构定义及所属功能文档 |
| `分支3.type` | 否 | `'calendar.advance'` | 见结构定义及所属功能文档 |
| `分支3.expectedRevision` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支3.amount` | 否 | `number` | 见结构定义及所属功能文档 |
| `分支3.unit` | 否 | `'day' &#124; 'hour' &#124; 'minute' &#124; 'second'` | 见结构定义及所属功能文档 |

## defaultWorldCalendar

导出接口 · 源码第 53 行。

```ts
export function defaultWorldCalendar(): WorldCalendar;
```

## parseCalendarDate

导出接口 · 源码第 59 行。

```ts
export function parseCalendarDate(value: unknown, calendar: Pick<WorldCalendar, 'months' | 'hoursPerDay' | 'minutesPerHour' | 'secondsPerMinute'>): CalendarDate;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |
| `calendar` | 否 | `Pick<WorldCalendar, 'months' &#124; 'hoursPerDay' &#124; 'minutesPerHour' &#124; 'secondsPerMinute'>` | — |

## calendarDay

导出接口 · 源码第 65 行。

```ts
export function calendarDay(calendar: Pick<WorldCalendar, 'months'>, date: Pick<CalendarDate, 'year' | 'month' | 'day'>): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `calendar` | 否 | `Pick<WorldCalendar, 'months'>` | — |
| `date` | 否 | `Pick<CalendarDate, 'year' &#124; 'month' &#124; 'day'>` | — |

## calendarTicks

导出接口 · 源码第 70 行。

```ts
export function calendarTicks(calendar: WorldCalendar, date: CalendarDate): number;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `calendar` | 否 | `WorldCalendar` | — |
| `date` | 否 | `CalendarDate` | — |

## parseWorldCalendar

导出接口 · 源码第 75 行。

```ts
export function parseWorldCalendar(raw: unknown): WorldCalendar;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |

## advanceCalendar

导出接口 · 源码第 101 行。

```ts
export function advanceCalendar(calendar: WorldCalendar, amount: number, unit: 'day' | 'hour' | 'minute' | 'second'): CalendarDate;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `calendar` | 否 | `WorldCalendar` | — |
| `amount` | 否 | `number` | — |
| `unit` | 否 | `'day' &#124; 'hour' &#124; 'minute' &#124; 'second'` | — |

## calendarPhase

导出接口 · 源码第 114 行。

```ts
export function calendarPhase(calendar: WorldCalendar, date?: CalendarDate): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `calendar` | 否 | `WorldCalendar` | — |
| `date` | 是 | `CalendarDate` | calendar.current |

## calendarEvents

导出接口 · 源码第 123 行。

```ts
export const calendarEvents: (calendar: WorldCalendar, date: CalendarDate): CalendarEvent[];
```
