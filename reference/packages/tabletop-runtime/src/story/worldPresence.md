# game/packages/tabletop-runtime/src/story/worldPresence.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import {isRecord,type NetMessage,type ScenePoint} from '@aelzerant/contracts';
```
</details>

## PresenceMember

导出接口 · 源码第 3 行。

```ts
export interface PresenceMember {
    id: string;
    online: boolean;
    latency: number | null;
    afk: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `online` | 否 | `boolean` | 见结构定义及所属功能文档 |
| `latency` | 否 | `number&#124;null` | 见结构定义及所属功能文档 |
| `afk` | 否 | `boolean` | 见结构定义及所属功能文档 |

## PresenceCursor

导出接口 · 源码第 4 行。

```ts
export interface PresenceCursor {
    id: string;
    sceneId: string;
    point: ScenePoint;
    at: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `point` | 否 | `ScenePoint` | 见结构定义及所属功能文档 |
| `at` | 否 | `number` | 见结构定义及所属功能文档 |

## PresencePing

导出接口 · 源码第 5 行。

```ts
export interface PresencePing extends PresenceCursor {
    serial: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `serial` | 否 | `string` | 见结构定义及所属功能文档 |

## PresenceTyping

导出接口 · 源码第 6 行。

```ts
export interface PresenceTyping {
    id: string;
    channel: string;
    at: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `channel` | 否 | `string` | 见结构定义及所属功能文档 |
| `at` | 否 | `number` | 见结构定义及所属功能文档 |

## PresencePlan

导出接口 · 源码第 7 行。

```ts
export interface PresencePlan {
    label?: string;
    path?: ScenePoint[];
    measurement?: ScenePoint[];
    cells?: ScenePoint[];
    selected?: {
        point: ScenePoint;
        size: number;
    }[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `label` | 是 | `string` | 见结构定义及所属功能文档 |
| `path` | 是 | `ScenePoint[]` | 见结构定义及所属功能文档 |
| `measurement` | 是 | `ScenePoint[]` | 见结构定义及所属功能文档 |
| `cells` | 是 | `ScenePoint[]` | 见结构定义及所属功能文档 |
| `selected` | 是 | `{point:ScenePoint;size:number}[]` | 见结构定义及所属功能文档 |
| `selected.[].point` | 否 | `ScenePoint` | 见结构定义及所属功能文档 |
| `selected.[].size` | 否 | `number` | 见结构定义及所属功能文档 |

## PresencePlanning

导出接口 · 源码第 8 行。

```ts
export interface PresencePlanning {
    id: string;
    sceneId: string;
    plan: PresencePlan;
    at: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `sceneId` | 否 | `string` | 见结构定义及所属功能文档 |
| `plan` | 否 | `PresencePlan` | 见结构定义及所属功能文档 |
| `at` | 否 | `number` | 见结构定义及所属功能文档 |

## validPresencePlan

导出接口 · 源码第 9 行。

```ts
export function validPresencePlan(raw: unknown, width?: number, height?: number): raw is PresencePlan;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
| `width` | 是 | `number` | 10000 |
| `height` | 是 | `number` | 10000 |

## PresenceSnapshot

导出接口 · 源码第 15 行。

```ts
export interface PresenceSnapshot {
    planning: PresencePlanning[];
    members: PresenceMember[];
    cursors: PresenceCursor[];
    pings: PresencePing[];
    typing: PresenceTyping[];
    error: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `planning` | 否 | `PresencePlanning[]` | 见结构定义及所属功能文档 |
| `members` | 否 | `PresenceMember[]` | 见结构定义及所属功能文档 |
| `cursors` | 否 | `PresenceCursor[]` | 见结构定义及所属功能文档 |
| `pings` | 否 | `PresencePing[]` | 见结构定义及所属功能文档 |
| `typing` | 否 | `PresenceTyping[]` | 见结构定义及所属功能文档 |
| `error` | 否 | `string` | 见结构定义及所属功能文档 |

## PresenceTransport

导出接口 · 源码第 16 行。

```ts
export interface PresenceTransport {
    hostId: string;
    send: (message: NetMessage) => void;
    sendTo: (id: string, message: NetMessage) => void;
    sceneFor: (id: string) => {
        id: string;
        width: number;
        height: number;
    } | undefined;
    gm: (id: string) => boolean;
    kick: (id: string) => Promise<void>;
    canReadChannel?: (id: string, channel: string) => boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `hostId` | 否 | `string` | 见结构定义及所属功能文档 |
| `send` | 否 | `(message:NetMessage)=>void` | 见结构定义及所属功能文档 |
| `sendTo` | 否 | `(id:string,message:NetMessage)=>void` | 见结构定义及所属功能文档 |
| `sceneFor` | 否 | `(id:string)=>{id:string;width:number;height:number}&#124;undefined` | 见结构定义及所属功能文档 |
| `gm` | 否 | `(id:string)=>boolean` | 见结构定义及所属功能文档 |
| `kick` | 否 | `(id:string)=>Promise<void>` | 见结构定义及所属功能文档 |
| `canReadChannel` | 是 | `(id:string,channel:string)=>boolean` | 见结构定义及所属功能文档 |

## WorldPresence

导出接口 · 源码第 23 行。

Ephemeral, unsequenced traffic. Never enters saves, combat history or reconnect replay.

```ts
export class WorldPresence {
  registerSelf?: ()=>void;
  constructor(selfId: string);
  get: () => PresenceSnapshot;
  isConnected: () => boolean;
  subscribe: (fn: () => void) => () => void;
  onRevoked: (fn: () => void) => () => void;
  revoke: () => void;
  attach(transport: PresenceTransport): void;
  disconnect(): void;
  setScene(id: string | null): void;
  setAfk(value: boolean): void;
  ready(): void;
  peers(ids: string[]): void;
  clientState(connected: boolean): void;
  plan(plan: PresencePlan | null): void;
  cursor(point: ScenePoint | null): void;
  ping(point: ScenePoint): void;
  typing(channel: string, active: boolean, recipients?: string[]): void;
  kick(id: string): void;
  probe(): void;
  receive(from: string, message: NetMessage): boolean;
}
```
