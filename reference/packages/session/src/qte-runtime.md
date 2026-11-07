# game/packages/session/src/qte-runtime.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseQteDefinition,type QteCue,type QteDefinition,type GameObject,type MinigameInput,type MinigameModule} from '@aelzerant/contracts';
```
</details>

## CueProgress

导出接口 · 源码第 3 行。

```ts
export interface CueProgress {
    [key: string]: import('@aelzerant/contracts').GameJson | undefined;
    done?: boolean;
    grade?: string;
    score?: number;
    started?: number;
    error?: number;
    hits?: number;
    x?: number;
    y?: number;
    released?: number;
    interrupted?: number;
    chordStart?: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `[key:string]` | 否 | `import('@aelzerant/contracts').GameJson&#124;undefined` | 动态键 |
| `done` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `grade` | 是 | `string` | 见结构定义及所属功能文档 |
| `score` | 是 | `number` | 见结构定义及所属功能文档 |
| `started` | 是 | `number` | 见结构定义及所属功能文档 |
| `error` | 是 | `number` | 见结构定义及所属功能文档 |
| `hits` | 是 | `number` | 见结构定义及所属功能文档 |
| `x` | 是 | `number` | 见结构定义及所属功能文档 |
| `y` | 是 | `number` | 见结构定义及所属功能文档 |
| `released` | 是 | `number` | 见结构定义及所属功能文档 |
| `interrupted` | 是 | `number` | 见结构定义及所属功能文档 |
| `chordStart` | 是 | `number` | 见结构定义及所属功能文档 |

## QteState

内部依赖类型 · 源码第 4 行。

```ts
interface QteState {
    held: Record<string, boolean>;
    progress: Record<string, CueProgress>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `held` | 否 | `Record<string,boolean>` | 见结构定义及所属功能文档 |
| `progress` | 否 | `Record<string,CueProgress>` | 见结构定义及所属功能文档 |

## QteRecognizerContext

导出接口 · 源码第 5 行。

```ts
export interface QteRecognizerContext {
    cue: QteCue;
    progress: CueProgress;
    held: Readonly<Record<string, boolean>>;
    event: MinigameInput;
    complete: (timingAt: number) => void;
    fail: () => void;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `cue` | 否 | `QteCue` | 见结构定义及所属功能文档 |
| `progress` | 否 | `CueProgress` | 见结构定义及所属功能文档 |
| `held` | 否 | `Readonly<Record<string,boolean>>` | 见结构定义及所属功能文档 |
| `event` | 否 | `MinigameInput` | 见结构定义及所属功能文档 |
| `complete` | 否 | `(timingAt:number)=>void` | 见结构定义及所属功能文档 |
| `fail` | 否 | `()=>void` | 见结构定义及所属功能文档 |

## QteRecognizer

导出接口 · 源码第 6 行。

```ts
export type QteRecognizer = (context: QteRecognizerContext) => void;
```

## registerQteRecognizer

导出接口 · 源码第 9 行。

A custom recognizer participates in the same timing/scoring pipeline as built-in cues.

```ts
export function registerQteRecognizer(id: string, recognizer: QteRecognizer): ()=>void;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | — |
| `recognizer` | 否 | `QteRecognizer` | — |

## qteModule

导出接口 · 源码第 58 行。

```ts
export const qteModule: MinigameModule;
```
