# game/packages/session/src/story-onboarding.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {parseOnboarding,type StoryWorkspace} from '@aelzerant/contracts';
```
</details>

## OnboardingCommand

导出接口 · 源码第 3 行。

```ts
export type OnboardingCommand = {
    type: 'onboarding.set';
    value: unknown;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `type` | 否 | `'onboarding.set'` | 见结构定义及所属功能文档 |
| `value` | 否 | `unknown` | 见结构定义及所属功能文档 |

## applyOnboardingCommand

导出接口 · 源码第 4 行。

```ts
export function applyOnboardingCommand(story: StoryWorkspace, raw: unknown, gm: boolean): boolean;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `story` | 否 | `StoryWorkspace` | — |
| `raw` | 否 | `unknown` | — |
| `gm` | 否 | `boolean` | — |
