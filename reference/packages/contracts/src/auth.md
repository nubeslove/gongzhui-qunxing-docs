# game/packages/contracts/src/auth.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## CaptchaProof

导出接口 · 源码第 2 行。

Platform identity shared by every rule lobby. Passwords never enter saved sessions.

```ts
export interface CaptchaProof {
    ticket: string;
    randstr: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `ticket` | 否 | `string` | 见结构定义及所属功能文档 |
| `randstr` | 否 | `string` | 见结构定义及所属功能文档 |

## AuthConfig

导出接口 · 源码第 3 行。

```ts
export interface AuthConfig {
    captcha: 'none' | 'tencent';
    appId?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `captcha` | 否 | `'none' &#124; 'tencent'` | 见结构定义及所属功能文档 |
| `appId` | 是 | `string` | 见结构定义及所属功能文档 |

## AuthCredentials

导出接口 · 源码第 4 行。

```ts
export interface AuthCredentials {
    username: string;
    password: string;
    nickname?: string;
    captcha?: CaptchaProof;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `username` | 否 | `string` | 见结构定义及所属功能文档 |
| `password` | 否 | `string` | 见结构定义及所属功能文档 |
| `nickname` | 是 | `string` | 见结构定义及所属功能文档 |
| `captcha` | 是 | `CaptchaProof` | 见结构定义及所属功能文档 |

## AuthResult

导出接口 · 源码第 5 行。

```ts
export interface AuthResult {
    playerId: string;
    nickname: string;
    username: string;
    token: string;
    expiresAt: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `playerId` | 否 | `string` | 见结构定义及所属功能文档 |
| `nickname` | 否 | `string` | 见结构定义及所属功能文档 |
| `username` | 否 | `string` | 见结构定义及所属功能文档 |
| `token` | 否 | `string` | 见结构定义及所属功能文档 |
| `expiresAt` | 否 | `number` | 见结构定义及所属功能文档 |

## AccountInfo

导出接口 · 源码第 6 行。

```ts
export interface AccountInfo {
    playerId: string;
    nickname: string;
    username: string | null;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `playerId` | 否 | `string` | 见结构定义及所属功能文档 |
| `nickname` | 否 | `string` | 见结构定义及所属功能文档 |
| `username` | 否 | `string &#124; null` | 见结构定义及所属功能文档 |
