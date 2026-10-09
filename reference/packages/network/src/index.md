# game/packages/network/src/index.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type { NetMessage, SignalKind, SignalMessage } from "@aelzerant/contracts";
import { isInteger, isRecord } from "@aelzerant/contracts";
import { JsonFraming } from "./framing";
```
</details>

## SignalLink

导出接口 · 源码第 18 行。

```ts
export interface SignalLink {
    send(msg: SignalMessage): void;
    onSignal(cb: (msg: SignalMessage) => void): void;
    onMembers(cb: (memberIds: string[]) => void): void;
    onStatus(cb: (connected: boolean) => void): void;
    onRevoked?(cb: () => void): void;
    close(): void;
}
```

## signalViaServer

导出接口 · 源码第 27 行。

```ts
export function signalViaServer(url: string, token: string, worldId: string): SignalLink;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `url` | 否 | `string` | — |
| `token` | 否 | `string` | — |
| `worldId` | 否 | `string` | — |

## PeerState

导出接口 · 源码第 89 行。

```ts
export type PeerState = "connecting" | "connected" | "closed";
```

## RTCFactory

内部依赖类型 · 源码第 91 行。

```ts
type RTCFactory = (cfg: RTCConfiguration) => RTCPeerConnection;
```

## RPCDataChannel

导出接口 · 源码第 116 行。

DataChannel 的极简封装（JSON 字符串帧）

```ts
export class RPCDataChannel {
  constructor(raw: RTCDataChannel);
  onOpen?: () => void;
  onClose?: () => void;
  onMessage?: (msg: NetMessage, chan: RPCDataChannel) => void;
  attachOpen(cb: () => void): void;
  send(msg: NetMessage): boolean;
  get open(): boolean;
  close(): void;
}
```

## HostPeer

导出接口 · 源码第 169 行。

```ts
export interface HostPeer {
    playerId: string;
    state: PeerState;
    channel: RPCDataChannel | null;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `playerId` | 否 | `string` | 见结构定义及所属功能文档 |
| `state` | 否 | `PeerState` | 见结构定义及所属功能文档 |
| `channel` | 否 | `RPCDataChannel &#124; null` | 见结构定义及所属功能文档 |

## HostSessionOptions

导出接口 · 源码第 175 行。

```ts
export interface HostSessionOptions {
    selfId: string;
    link: SignalLink;
    iceServers?: RTCIceServer[];
    rtc?: RTCFactory;
    logCap?: number;
    snapshot?: (playerId: string) => NetMessage[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `selfId` | 否 | `string` | 见结构定义及所属功能文档 |
| `link` | 否 | `SignalLink` | 见结构定义及所属功能文档 |
| `iceServers` | 是 | `RTCIceServer[]` | 见结构定义及所属功能文档 |
| `rtc` | 是 | `RTCFactory` | 测试注入点（默认全局 RTCPeerConnection） |
| `logCap` | 是 | `number` | 事件日志上限（默认 512） |
| `snapshot` | 是 | `(playerId: string) => NetMessage[]` | Latest per-player public state, used even when event history has been truncated. |

## HostSession

导出接口 · 源码第 187 行。

```ts
export class HostSession {
  constructor(opts: HostSessionOptions);
  onIntent(cb: (fromId: string, msg: NetMessage) => void): void;
  onPeers(cb: (peers: HostPeer[]) => void): void;
  listPeers(): HostPeer[];
  eventCount(): number;
  invite(playerId: string): void;
  broadcast(msg: NetMessage): void;
  sendTo(playerId: string, msg: NetMessage): void;
  drop(playerId: string): void;
  close(): void;
}
```

## ClientSessionOptions

导出接口 · 源码第 330 行。

```ts
export interface ClientSessionOptions {
    selfId: string;
    hostId: string;
    link: SignalLink;
    iceServers?: RTCIceServer[];
    rtc?: RTCFactory;
    reconnectAttempts?: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `selfId` | 否 | `string` | 见结构定义及所属功能文档 |
| `hostId` | 否 | `string` | 见结构定义及所属功能文档 |
| `link` | 否 | `SignalLink` | 见结构定义及所属功能文档 |
| `iceServers` | 是 | `RTCIceServer[]` | 见结构定义及所属功能文档 |
| `rtc` | 是 | `RTCFactory` | 见结构定义及所属功能文档 |
| `reconnectAttempts` | 是 | `number` | 断线重连尝试上限（默认 3，间隔 2s） |

## ClientSession

导出接口 · 源码第 340 行。

```ts
export class ClientSession {
  constructor(opts: ClientSessionOptions);
  onEvent(cb: (msg: NetMessage) => void): void;
  onState(cb: (state: PeerState) => void): void;
  getState(): PeerState;
  send(msg: NetMessage): boolean;
  close(): void;
}
```
