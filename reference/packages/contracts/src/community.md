# game/packages/contracts/src/community.ts

源码核对日：2026-11-07。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## COMMUNITY_SCOPES

导出接口 · 源码第 1 行。

```ts
export const COMMUNITY_SCOPES = ['aaf', 'dnd5e-2024', 'lancer', 'terra-walker', 'new-utopia', 'otherworld-journey'] as const;
```

## CommunityScope

导出接口 · 源码第 2 行。

```ts
export type CommunityScope = typeof COMMUNITY_SCOPES[number];
```

## communityScope

导出接口 · 源码第 3 行。

```ts
export function communityScope(value: unknown): CommunityScope | undefined;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `value` | 否 | `unknown` | — |

## CommunityPost

导出接口 · 源码第 8 行。

```ts
export interface CommunityPost {
    scope?: CommunityScope;
    id: string;
    authorId: string;
    title: string;
    body: string;
    category: "discussion" | "party" | "feedback";
    createdAt: number;
    replies: CommunityReply[];
    views?: number;
    deleted?: boolean;
    pinned?: boolean;
    featured?: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `scope` | 是 | `CommunityScope` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `authorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `title` | 否 | `string` | 见结构定义及所属功能文档 |
| `body` | 否 | `string` | 见结构定义及所属功能文档 |
| `category` | 否 | `"discussion" &#124; "party" &#124; "feedback"` | 见结构定义及所属功能文档 |
| `createdAt` | 否 | `number` | 见结构定义及所属功能文档 |
| `replies` | 否 | `CommunityReply[]` | 见结构定义及所属功能文档 |
| `views` | 是 | `number` | 见结构定义及所属功能文档 |
| `deleted` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `pinned` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `featured` | 是 | `boolean` | 见结构定义及所属功能文档 |

## CommunityReply

导出接口 · 源码第 9 行。

```ts
export interface CommunityReply {
    id: string;
    authorId: string;
    body: string;
    createdAt: number;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `authorId` | 否 | `string` | 见结构定义及所属功能文档 |
| `body` | 否 | `string` | 见结构定义及所属功能文档 |
| `createdAt` | 否 | `number` | 见结构定义及所属功能文档 |

## CommunityNotice

导出接口 · 源码第 10 行。

```ts
export interface CommunityNotice {
    scope?: CommunityScope;
    id: string;
    title: string;
    body: string;
    createdAt: number;
    authorId: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `scope` | 是 | `CommunityScope` | 见结构定义及所属功能文档 |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `title` | 否 | `string` | 见结构定义及所属功能文档 |
| `body` | 否 | `string` | 见结构定义及所属功能文档 |
| `createdAt` | 否 | `number` | 见结构定义及所属功能文档 |
| `authorId` | 否 | `string` | 见结构定义及所属功能文档 |

## Friendship

导出接口 · 源码第 11 行。

```ts
export interface Friendship {
    id: string;
    from: string;
    to: string;
    status: "pending" | "accepted";
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `from` | 否 | `string` | 见结构定义及所属功能文档 |
| `to` | 否 | `string` | 见结构定义及所属功能文档 |
| `status` | 否 | `"pending" &#124; "accepted"` | 见结构定义及所属功能文档 |

## CommunityView

导出接口 · 源码第 12 行。

```ts
export interface CommunityView {
    posts: CommunityPost[];
    notices: CommunityNotice[];
    friendships: Friendship[];
    canPublish: boolean;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `posts` | 否 | `CommunityPost[]` | 见结构定义及所属功能文档 |
| `notices` | 否 | `CommunityNotice[]` | 见结构定义及所属功能文档 |
| `friendships` | 否 | `Friendship[]` | 见结构定义及所属功能文档 |
| `canPublish` | 否 | `boolean` | 见结构定义及所属功能文档 |

## CommunityAction

导出接口 · 源码第 13 行。

```ts
export type CommunityAction = {
    kind: "post";
    title: string;
    body: string;
    category: CommunityPost["category"];
    scope?: CommunityScope;
} | {
    kind: "reply";
    postId: string;
    body: string;
} | {
    kind: "read-post";
    postId: string;
} | {
    kind: "delete-post";
    postId: string;
} | {
    kind: "friend-request";
    playerId: string;
} | {
    kind: "friend-accept" | "friend-remove";
    id: string;
} | {
    kind: "moderate";
    postId: string;
    pinned?: boolean;
    featured?: boolean;
} | {
    kind: "notice";
    title: string;
    body: string;
    scope?: CommunityScope;
};
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `分支1.kind` | 否 | `"post"` | 见结构定义及所属功能文档 |
| `分支1.title` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.body` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支1.category` | 否 | `CommunityPost["category"]` | 见结构定义及所属功能文档 |
| `分支1.scope` | 是 | `CommunityScope` | 见结构定义及所属功能文档 |
| `分支2.kind` | 否 | `"reply"` | 见结构定义及所属功能文档 |
| `分支2.postId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支2.body` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支3.kind` | 否 | `"read-post"` | 见结构定义及所属功能文档 |
| `分支3.postId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支4.kind` | 否 | `"delete-post"` | 见结构定义及所属功能文档 |
| `分支4.postId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支5.kind` | 否 | `"friend-request"` | 见结构定义及所属功能文档 |
| `分支5.playerId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支6.kind` | 否 | `"friend-accept" &#124; "friend-remove"` | 见结构定义及所属功能文档 |
| `分支6.id` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支7.kind` | 否 | `"moderate"` | 见结构定义及所属功能文档 |
| `分支7.postId` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支7.pinned` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支7.featured` | 是 | `boolean` | 见结构定义及所属功能文档 |
| `分支8.kind` | 否 | `"notice"` | 见结构定义及所属功能文档 |
| `分支8.title` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支8.body` | 否 | `string` | 见结构定义及所属功能文档 |
| `分支8.scope` | 是 | `CommunityScope` | 见结构定义及所属功能文档 |
