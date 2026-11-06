# game/apps/desktop/src/story/minigames/input.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {MinigameInput} from '@aelzerant/contracts';
```
</details>

## GameInputEvent

导出接口 · 源码第 3 行。

```ts
export type GameInputEvent = Omit<MinigameInput, 'at' | 'seq'>;
```

## GameInputMapper

导出接口 · 源码第 4 行。

```ts
export type GameInputMapper = (event: Event) => GameInputEvent | undefined;
```

## keyboardMouseInput

导出接口 · 源码第 10 行。

```ts
export const keyboardMouseInput: (event: Event): GameInputEvent | undefined;
```

## acquireGameInput

导出接口 · 源码第 31 行。

```ts
export function acquireGameInput(input: (event:Event)=>void, unavailable: ()=>void): ()=>void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `input` | 否 | `(event:Event)=>void` | — |
| `unavailable` | 否 | `()=>void` | — |
