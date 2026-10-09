# game/packages/session/src/world-token-presentation.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {actorControlled,actorControllers} from '@aelzerant/contracts';
import {tokenConfiguration,projectTokenBars,type TokenPresentation,type TokenResourceBar} from '@aelzerant/contracts';
import type {ActorDocument,TokenDocument} from './world-types';
```
</details>

## presentWorldToken

导出接口 · 源码第 4 行。

```ts
export function presentWorldToken(token: TokenDocument, actor: ActorDocument, playerId: string, gm: boolean): TokenPresentation;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `token` | 否 | `TokenDocument` | — |
| `actor` | 否 | `ActorDocument` | — |
| `playerId` | 否 | `string` | — |
| `gm` | 否 | `boolean` | — |
