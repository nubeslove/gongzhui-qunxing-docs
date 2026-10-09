# 平台 HTTP 接口

核对源码：server 的 index/auth/community/media/publications。共 32 个 method + path 组合（含停用的旧注册入口）。[OpenAPI 3.1](../../api/openapi.json) 收录每个请求、路径参数、返回结构和状态码。

## 通用约定

生产使用 HTTPS。业务接口带 `Authorization: Bearer <token>`；token 为不透明会话令牌，不是 JWT。`X-Player-Id` 可省略，若提供必须与令牌本人一致，不能代替认证。时间戳为毫秒；字段与路径大小写敏感。

账号 JSON 上限 16 KiB，普通 JSON 2 MiB，快照 JSON 64 MiB；二进制端点另有十进制字节限制。CORS 预检允许 GET/POST/PUT/DELETE/OPTIONS；不在白名单的来源预检返回 403。服务器返回错误不保证都是 JSON，请先检查状态码与 Content-Type。

账号名 trim → NFKC → 小写，1–64 字符且不能含空白或控制符；密码保持原样、非空、最多 4096 UTF-8 字节，没有额外复杂度要求。昵称 1–100 字符。生产必须使用腾讯验证码，ticket 最多 4096 字符、randstr 最多 256 字符，一次性使用。会话有效期 30 天，同账号最多保留五份；改密使旧会话失效。

认证限流：每 IP 每分钟 30 次、服务总量每分钟 120 次、账号名五分钟 15 次；密码计算同时最多两项。429 应遵守 Retry-After（部分账号名限制没有此头）；验证码失败后重新获取票据。不要给第三方 AI 真实账号令牌。

## 路由清单

| 方法 | 路径 | 权限 | 用途 |
| --- | --- | --- | --- |
| GET | `/api/health` | 匿名 | 健康与能力标记 |
| GET | `/api/auth/config` | 匿名 | 认证配置 |
| GET | `/api/auth/me` | 已登录 | 当前身份 |
| POST | `/api/auth/register` | 匿名 | 创建账号 |
| POST | `/api/auth/login` | 匿名 | 登录 |
| POST | `/api/auth/claim` | 已登录 | 绑定旧身份 |
| POST | `/api/auth/password` | 已登录 | 更改密码 |
| POST | `/api/auth/profile` | 已登录 | 修改昵称 |
| POST | `/api/auth/logout` | 已登录 | 注销当前会话 |
| POST | `/api/register` | 匿名 | 旧设备码注册已停用 |
| GET | `/api/players` | 已登录 | 账号目录 |
| GET | `/api/worlds` | 已登录 | 世界目录 |
| POST | `/api/worlds` | 已登录 | 登记服务器世界 |
| POST | `/api/worlds/{id}/join` | 已登录 | 加入世界 |
| POST | `/api/worlds/{id}/leave` | 已登录 | 离开世界 |
| POST | `/api/worlds/{id}/kick` | 该世界 GM | 移除成员 |
| POST | `/api/worlds/{id}/delete` | 该世界 GM | 删除服务器世界 |
| POST | `/api/worlds/{id}/transfer` | 该世界 GM | 转交服务器 GM 身份 |
| POST | `/api/worlds/{id}/snapshot` | 该世界 GM | 写入 GM 备份快照 |
| GET | `/api/worlds/{id}/snapshot` | 该世界 GM | 读取 GM 备份快照 |
| PUT | `/api/worlds/{id}/assets` | 该世界 GM | 替换旧式 JSON 资源集 |
| GET | `/api/worlds/{id}/manifest` | 已登录 | 旧式 JSON 资源清单 |
| GET | `/api/worlds/{id}/file/{path}` | 已登录 | 旧式 JSON 资源正文 |
| GET | `/api/worlds/{id}/publication` | GM／当前成员 | 当前公开发布清单 |
| PUT | `/api/worlds/{id}/publication/blobs/{hash}` | 该世界 GM | 预上传发布附件 |
| GET | `/api/worlds/{id}/publication/blobs/{hash}` | GM／当前成员 | 下载当前发布附件 |
| POST | `/api/worlds/{id}/publication` | 该世界 GM | 原子提交发布版本 |
| GET | `/api/worlds/{id}/media` | GM／当前成员 | 共享媒体清单 |
| GET | `/api/worlds/{id}/media/blob/{hash}` | GM／当前成员 | 下载共享媒体 |
| PUT | `/api/worlds/{id}/media/file/{path}` | 该世界 GM | 上传共享媒体 |
| GET | `/api/community` | 已登录 | 社区视图 |
| POST | `/api/community` | 已登录 | 社区动作 |

## GET /api/health

健康与能力标记。当前能力：multi-system-worlds-v1、publications-v1、accounts-v1。计数不是活跃连接人数。

无需请求正文。

成功：200。返回结构：

```json
{
  "type": "object",
  "properties": {
    "ok": {
      "type": "boolean"
    },
    "players": {
      "type": "number"
    },
    "worlds": {
      "type": "number"
    },
    "ts": {
      "type": "number"
    },
    "capabilities": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "required": [
    "ok",
    "players",
    "worlds",
    "ts",
    "capabilities"
  ]
}
```

## GET /api/auth/config

认证配置。

无需请求正文。

成功：200。返回结构：

```json
{
  "$ref": "../schemas/AuthConfig.schema.json"
}
```

## GET /api/auth/me

当前身份。

无需请求正文。

成功：200。返回结构：

```json
{
  "$ref": "../schemas/AccountInfo.schema.json"
}
```

## POST /api/auth/register

创建账号。注册昵称省略时使用标准化账号；生产环境必须带新验证码票据。

请求正文：

```json
{
  "$ref": "../schemas/AuthCredentials.schema.json"
}
```

成功：200。返回结构：

```json
{
  "$ref": "../schemas/AuthResult.schema.json"
}
```

## POST /api/auth/login

登录。注册昵称省略时使用标准化账号；生产环境必须带新验证码票据。

请求正文：

```json
{
  "$ref": "../schemas/AuthCredentials.schema.json"
}
```

成功：200。返回结构：

```json
{
  "$ref": "../schemas/AuthResult.schema.json"
}
```

## POST /api/auth/claim

绑定旧身份。保持旧 playerId；需携带原有效令牌。

请求正文：

```json
{
  "$ref": "../schemas/AuthCredentials.schema.json"
}
```

成功：200。返回结构：

```json
{
  "$ref": "../schemas/AuthResult.schema.json"
}
```

## POST /api/auth/password

更改密码。password 为新密码；currentPassword 为旧密码。成功撤销旧会话并返回新令牌。

请求正文：

```json
{
  "type": "object",
  "properties": {
    "password": {
      "type": "string"
    },
    "currentPassword": {
      "type": "string"
    },
    "captcha": {
      "type": "object",
      "properties": {
        "ticket": {
          "type": "string"
        },
        "randstr": {
          "type": "string"
        }
      },
      "required": [
        "ticket",
        "randstr"
      ]
    }
  },
  "required": [
    "password",
    "currentPassword"
  ]
}
```

成功：200。返回结构：

```json
{
  "$ref": "../schemas/AuthResult.schema.json"
}
```

## POST /api/auth/profile

修改昵称。

请求正文：

```json
{
  "type": "object",
  "properties": {
    "nickname": {
      "type": "string",
      "minLength": 1,
      "maxLength": 100
    }
  },
  "required": [
    "nickname"
  ]
}
```

成功：200。返回结构：

```json
{
  "type": "object",
  "properties": {
    "nickname": {
      "type": "string"
    }
  },
  "required": [
    "nickname"
  ]
}
```

## POST /api/auth/logout

注销当前会话。旧未绑定身份返回 409；先绑定再退出。无需 JSON 正文。

无需请求正文。

成功：200。返回结构：

```json
{
  "type": "object",
  "properties": {
    "ok": {
      "const": true
    }
  },
  "required": [
    "ok"
  ]
}
```

## POST /api/register

旧设备码注册已停用。始终返回 426。RegisterRequest 等历史类型仍保留，但不是可用注册入口。

无需请求正文。

成功：不适用；426。返回结构：

```json
{
  "type": "object",
  "properties": {
    "ok": {
      "const": true
    }
  },
  "required": [
    "ok"
  ]
}
```

## GET /api/players

账号目录。当前返回全服务器身份摘要，不返回密码或令牌。

无需请求正文。

成功：200。返回结构：

```json
{
  "type": "object",
  "properties": {
    "players": {
      "type": "array",
      "items": {
        "$ref": "../schemas/PlayerInfo.schema.json"
      }
    }
  },
  "required": [
    "players"
  ]
}
```

## GET /api/worlds

世界目录。当前没有分页和系统过滤参数；由客户端筛选。运行时世界摘要可能包含 inviteCode，它不是额外的入场密码验证。

无需请求正文。

成功：200。返回结构：

```json
{
  "type": "object",
  "properties": {
    "worlds": {
      "type": "array",
      "items": {
        "$ref": "../schemas/ServerWorldSummary.schema.json"
      }
    }
  },
  "required": [
    "worlds"
  ]
}
```

## POST /api/worlds

登记服务器世界。仅登记世界、GM 与成员关系；不会导入本地地图、角色或完整模组。创建者切换为该世界成员。

请求正文：

```json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "maxLength": 200
    },
    "systemId": {
      "enum": [
        "aaf",
        "dnd5e-2024",
        "lancer",
        "otherworld-journey"
      ],
      "default": "aaf"
    },
    "ruleVariant": {
      "$ref": "../schemas/RuleVariant.schema.json",
      "description": "仅接受兼容矩阵中与 systemId 对应的变体"
    }
  },
  "required": [
    "name"
  ]
}
```

成功：201。返回结构：

```json
{
  "type": "object",
  "properties": {
    "world": {
      "$ref": "../schemas/ServerWorldSummary.schema.json"
    }
  },
  "required": [
    "world"
  ]
}
```

## POST /api/worlds/{id}/join

加入世界。当前实现按 worldId 加入，未校验邀请码或审批；同一账号只有一个当前 worldId。请勿将它当作邀请制私密入场服务。

无需请求正文。

成功：200。返回结构：

```json
{
  "type": "object",
  "properties": {
    "ok": {
      "type": "boolean"
    },
    "world": {
      "$ref": "../schemas/ServerWorldSummary.schema.json"
    }
  },
  "required": [
    "ok",
    "world"
  ]
}
```

## POST /api/worlds/{id}/leave

离开世界。仅当账号当前 worldId 匹配时清空；不会删除本地世界。

无需请求正文。

成功：200。返回结构：

```json
{
  "type": "object",
  "properties": {
    "ok": {
      "const": true
    }
  },
  "required": [
    "ok"
  ]
}
```

## POST /api/worlds/{id}/kick

移除成员。不能移除当前 GM；保存后撤销目标信令连接。

请求正文：

```json
{
  "type": "object",
  "properties": {
    "playerId": {
      "type": "string"
    }
  },
  "required": [
    "playerId"
  ]
}
```

成功：200。返回结构：

```json
{
  "type": "object",
  "properties": {
    "ok": {
      "const": true
    }
  },
  "required": [
    "ok"
  ]
}
```

## POST /api/worlds/{id}/delete

删除服务器世界。删除目录记录、快照与旧 JSON 资源，并清除成员归属。media/publications 磁盘目录没有自动回收，不把目录删除当作彻底擦除。

无需请求正文。

成功：200。返回结构：

```json
{
  "type": "object",
  "properties": {
    "ok": {
      "const": true
    }
  },
  "required": [
    "ok"
  ]
}
```

## POST /api/worlds/{id}/transfer

转交服务器 GM 身份。接收者必须已是当前成员；不自动传输 GM 本地私密存档和附件，应先完成备份交接。

请求正文：

```json
{
  "type": "object",
  "properties": {
    "toPlayerId": {
      "type": "string"
    }
  },
  "required": [
    "toPlayerId"
  ]
}
```

成功：200。返回结构：

```json
{
  "type": "object",
  "properties": {
    "ok": {
      "type": "boolean"
    },
    "world": {
      "$ref": "../schemas/ServerWorldSummary.schema.json"
    }
  },
  "required": [
    "ok",
    "world"
  ]
}
```

## POST /api/worlds/{id}/snapshot

写入 GM 备份快照。JSON 请求上限 64 MiB。state 缺省为 null；服务器包装 version/at，不验证世界业务内容。

请求正文：

```json
{
  "type": "object",
  "properties": {
    "state": {
      "description": "调用方提供的 JSON 内容；此端点不进行完整游戏合同校验。"
    }
  },
  "required": []
}
```

成功：200。返回结构：

```json
{
  "type": "object",
  "properties": {
    "ok": {
      "type": "boolean"
    },
    "snapshot": {
      "$ref": "../schemas/WorldSnapshot.schema.json"
    }
  },
  "required": [
    "ok",
    "snapshot"
  ]
}
```

## GET /api/worlds/{id}/snapshot

读取 GM 备份快照。

无需请求正文。

成功：200。返回结构：

```json
{
  "type": "object",
  "properties": {
    "snapshot": {
      "$ref": "../schemas/WorldSnapshot.schema.json"
    }
  },
  "required": [
    "snapshot"
  ]
}
```

## PUT /api/worlds/{id}/assets

替换旧式 JSON 资源集。整个 files 集合替换，不是增量追加。哈希针对 canonicalJson；当前清单及正文对所有已登录账号可读，不适合 GM 秘密。请求上限 2 MiB。

请求正文：

```json
{
  "type": "object",
  "properties": {
    "files": {
      "type": "object",
      "additionalProperties": {
        "description": "调用方提供的 JSON 内容；此端点不进行完整游戏合同校验。"
      }
    }
  },
  "required": [
    "files"
  ]
}
```

成功：200。返回结构：

```json
{
  "type": "object",
  "properties": {
    "ok": {
      "type": "boolean"
    },
    "version": {
      "type": "number"
    },
    "manifest": {
      "$ref": "../schemas/AssetManifest.schema.json"
    }
  },
  "required": [
    "ok",
    "version",
    "manifest"
  ]
}
```

## GET /api/worlds/{id}/manifest

旧式 JSON 资源清单。只要求登录，不要求世界成员。

无需请求正文。

成功：200。返回结构：

```json
{
  "type": "object",
  "properties": {
    "manifest": {
      "$ref": "../schemas/AssetManifest.schema.json"
    }
  },
  "required": [
    "manifest"
  ]
}
```

## GET /api/worlds/{id}/file/{path}

旧式 JSON 资源正文。path 对应 Express 通配符 :path(*)；可以包含斜线。只要求登录。

无需请求正文。

成功：200。返回结构：

```json
{
  "$ref": "../schemas/AssetPayload.schema.json"
}
```

## GET /api/worlds/{id}/publication

当前公开发布清单。未发布时 publication 为 null；“公开”指该世界成员可读。

无需请求正文。

成功：200。返回结构：

```json
{
  "type": "object",
  "properties": {
    "publication": {
      "anyOf": [
        {
          "$ref": "../schemas/WorldPublication.schema.json"
        },
        {
          "type": "null"
        }
      ]
    }
  },
  "required": [
    "publication"
  ]
}
```

## PUT /api/worlds/{id}/publication/blobs/{hash}

预上传发布附件。Content-Type 必须精确为 application/octet-stream。1–64,000,000 字节，按流计算 SHA-256；上传并不自动公开，提交清单后才可下载。

请求正文：

```json
{
  "type": "string",
  "format": "binary"
}
```

成功：200。返回结构：

```json
{
  "type": "object",
  "properties": {
    "hash": {
      "type": "string"
    },
    "size": {
      "type": "number"
    }
  },
  "required": [
    "hash",
    "size"
  ]
}
```

## GET /api/worlds/{id}/publication/blobs/{hash}

下载当前发布附件。仅接受当前清单中的哈希；Content-Type 固定为 application/octet-stream。不是可任意读取历史哈希的接口。

无需请求正文。

成功：200。返回文件字节；检查响应头。

## POST /api/worlds/{id}/publication

原子提交发布版本。先传全部 blob，再提交。需精确一个 table.json、最多 300 附件；table.json ≤2,000,000 字节。核对 system/version/host/serverWorldId、清单和 publicTable 无私密内容。返回版本为 expectedVersion+1。409 后重读合并。

请求正文：

```json
{
  "type": "object",
  "properties": {
    "expectedVersion": {
      "type": "integer",
      "minimum": 0
    },
    "publication": {
      "$ref": "../schemas/WorldPublication.schema.json"
    }
  },
  "required": [
    "expectedVersion",
    "publication"
  ]
}
```

成功：200。返回结构：

```json
{
  "type": "object",
  "properties": {
    "publication": {
      "$ref": "../schemas/WorldPublication.schema.json"
    }
  },
  "required": [
    "publication"
  ]
}
```

## GET /api/worlds/{id}/media

共享媒体清单。

无需请求正文。

成功：200。返回结构：

```json
{
  "type": "object",
  "properties": {
    "manifest": {
      "$ref": "../schemas/MediaManifest.schema.json"
    }
  },
  "required": [
    "manifest"
  ]
}
```

## GET /api/worlds/{id}/media/blob/{hash}

下载共享媒体。响应 Content-Type 为清单检测到的 MIME。仅能读当前清单引用；读取后复核长度与哈希。

无需请求正文。

成功：200。返回文件字节；检查响应头。

## PUT /api/worlds/{id}/media/file/{path}

上传共享媒体。建议 Content-Type: application/octet-stream；按文件头判断实际类型。每文件 ≤32,000,000 字节、合计 ≤512,000,000 字节。清单中的同路径替换；不用这一接口上传 GLB。

请求正文：

```json
{
  "type": "string",
  "format": "binary"
}
```

成功：200。返回结构：

```json
{
  "type": "object",
  "properties": {
    "manifest": {
      "$ref": "../schemas/MediaManifest.schema.json"
    }
  },
  "required": [
    "manifest"
  ]
}
```

## GET /api/community

社区视图。帖子、公告及本账号相关好友；canPublish 表示公告管理员资格。

无需请求正文。

成功：200。返回结构：

```json
{
  "$ref": "../schemas/CommunityView.schema.json"
}
```

## POST /api/community

社区动作。post/reply/delete-post/friend-request/friend-accept/friend-remove/notice。本人删除或管理员管理，接受申请仅限接收方；权限／业务错误当前统一 400。

请求正文：

```json
{
  "$ref": "../schemas/CommunityAction.schema.json"
}
```

成功：200。返回结构：

```json
{
  "$ref": "../schemas/CommunityView.schema.json"
}
```

## 权限注意事项

当前世界目录和加入接口不是邀请审批系统。旧式 JSON 资源对全体已登录账号可读，而 publication/media 要求世界成员。不要把它们混用，也不要把服务器世界删除当作删除全部磁盘附件。生产发布前应根据实际社群规模补齐配额、审计与邀请访问策略；这些尚不是当前接口能力。
