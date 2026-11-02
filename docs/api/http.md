# 平台 HTTP 接口

核对源码：server 的 index/auth/community/media/publications/world-access/world-roles/updates。共 62 个 method + path 组合（含停用的旧注册入口）。[OpenAPI 3.1](../../api/openapi.json) 收录每个请求、路径参数、返回结构和状态码。

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
| GET | `/api/auth/challenge` | 匿名 | 取得本地图形验证码 |
| GET | `/api/worlds/{id}/members` | 可访问的世界成员 | 世界成员名单 |
| GET | `/api/worlds/{id}/publication/compare` | 创建者／平台管理员 | 比较发布文档修订 |
| GET | `/api/worlds/{id}/publication/draft` | 创建者／平台管理员 | 读取权威备团稿 |
| POST | `/api/client/presence` | 已登录 | 客户端在线心跳 |
| POST | `/api/internal/updates/claim` | 匿名 | 更新代理领取审核任务 |
| GET | `/api/admin/releases/check` | 更新管理员 | 检查配置的发行源 |
| POST | `/api/admin/releases/jobs/{id}/approve` | 更新管理员 | 站长审核并等待空闲更新 |
| POST | `/api/admin/releases/jobs/{id}/force` | 更新管理员 | 站长审核并强制更新 |
| POST | `/api/admin/releases/jobs/{id}/reject` | 更新管理员 | 站长驳回更新 |
| GET | `/api/world-deletions` | 已登录 | 本人可见的清理任务 |
| POST | `/api/world-lifecycle/query` | 已登录 | 查询世界下架状态 |
| GET | `/api/worlds/{id}/deletion` | 创建者／平台管理员 | 世界清理任务状态 |
| GET | `/api/world-templates` | 已登录 | 平台模组目录 |
| GET | `/api/world-templates/{id}/archive` | 已登录 | 下载平台模组完整备份 |
| GET | `/api/worlds` | 已登录 | 世界目录 |
| POST | `/api/worlds` | 已登录 | 登记服务器世界 |
| POST | `/api/worlds/{id}/join` | 已登录 | 加入世界 |
| POST | `/api/worlds/{id}/leave` | 已登录 | 离开世界 |
| POST | `/api/worlds/{id}/kick` | 创建者／平台管理员 | 移除成员 |
| POST | `/api/worlds/{id}/delete` | 创建者／平台管理员 | 下架或删除世界 |
| POST | `/api/worlds/{id}/transfer` | 创建者／平台管理员 | 转交服务器 GM 身份 |
| POST | `/api/worlds/{id}/snapshot` | 创建者／平台管理员 | 写入 GM 备份快照 |
| GET | `/api/worlds/{id}/snapshot` | 创建者／平台管理员 | 读取 GM 备份快照 |
| PUT | `/api/worlds/{id}/assets` | 创建者／平台管理员 | 替换旧式 JSON 资源集 |
| GET | `/api/worlds/{id}/manifest` | 已登录 | 旧式 JSON 资源清单 |
| GET | `/api/worlds/{id}/file/{path}` | 已登录 | 旧式 JSON 资源正文 |
| GET | `/api/worlds/{id}/publication` | 可访问的世界成员 | 当前公开发布清单 |
| PUT | `/api/worlds/{id}/publication/blobs/{hash}` | 创建者／平台管理员 | 预上传发布附件 |
| GET | `/api/worlds/{id}/publication/blobs/{hash}` | 可访问的世界成员 | 下载当前发布附件 |
| POST | `/api/worlds/{id}/publication` | 创建者／平台管理员 | 原子提交发布版本 |
| GET | `/api/worlds/{id}/media` | 可访问的世界成员 | 共享媒体清单 |
| GET | `/api/worlds/{id}/media/blob/{hash}` | 可访问的世界成员 | 下载共享媒体 |
| PUT | `/api/worlds/{id}/media/file/{path}` | 创建者／平台管理员 | 上传共享媒体 |
| GET | `/api/community` | 已登录 | 社区视图 |
| POST | `/api/community` | 已登录 | 社区动作 |
| POST | `/api/worlds/join-invite` | 已登录 | 通过邀请码加入世界 |
| GET | `/api/worlds/{id}/access` | 创建者／平台管理员 | 读取世界分享设置 |
| POST | `/api/worlds/{id}/access` | 创建者／平台管理员 | 修改分享与成员资格 |
| GET | `/api/worlds/{id}/role` | 已登录 | 读取世界内管理员角色 |
| POST | `/api/worlds/{id}/role` | 已登录 | 平台管理员切换自己的世界角色 |
| GET | `/api/worlds/{id}/roles` | 可访问的世界成员 | 读取本世界主持人名单 |
| POST | `/api/worlds/{id}/media/upload` | 创建者／平台管理员 | 获得外部附件上传 URL |
| POST | `/api/worlds/{id}/media/gc` | 创建者／平台管理员 | 回收外部孤立附件 |
| POST | `/api/worlds/{id}/publication/upload` | 创建者／平台管理员 | 获得外部附件上传 URL |
| POST | `/api/worlds/{id}/media/commit` | 创建者／平台管理员 | 核验并登记外部媒体 |
| GET | `/api/releases/current` | 匿名 | 运行版本与已激活发行 |
| GET | `/api/updates/{target}/{arch}/{current}` | 匿名 | Tauri 签名更新检查 |
| GET | `/api/admin/releases` | 更新管理员 | 候选发布与部署状态 |
| POST | `/api/admin/releases` | 更新管理员 | 登记不可覆盖的候选发布 |
| POST | `/api/admin/releases/{id}/deploy` | 更新管理员 | 管理员确认部署 |

## GET /api/health

健康与能力标记。包含世界访问、管理员角色、签名客户端更新与发布队列能力。返回当前运行 version 与 commit；计数不是活跃连接人数。

无需请求正文。

成功：200。返回结构：

```json
{
  "type": "object",
  "properties": {
    "ok": {
      "type": "boolean"
    },
    "version": {
      "type": "string"
    },
    "commit": {
      "type": "string"
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
    "version",
    "commit",
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

## GET /api/auth/challenge

取得本地图形验证码。图片为 SVG data URL；验证码绑定请求 IP，约两分钟有效，一次提交后即消耗。

无需请求正文。

成功：200。返回结构：

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "image": {
      "type": "string"
    },
    "expiresAt": {
      "type": "number"
    }
  },
  "required": [
    "id",
    "image",
    "expiresAt"
  ]
}
```

## GET /api/worlds/{id}/members

世界成员名单。仅世界 GM、已加入且有访问权的账号可读；不含被移除成员。

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

## GET /api/worlds/{id}/publication/compare

比较发布文档修订。必需查询参数 path（文档路径）与 revision（非负整数）；返回权威层文档修订对比。

无需请求正文。

成功：200。返回结构：

```json
{
  "type": "object"
}
```

## GET /api/worlds/{id}/publication/draft

读取权威备团稿。返回本世界权威备团稿；不支持时返回 409。

无需请求正文。

成功：200。返回结构：

```json
{
  "type": "object"
}
```

## POST /api/client/presence

客户端在线心跳。维护本账号在线租约；退出时 leaving=true。服务器保存退出期间返回 503。

请求正文：

```json
{
  "type": "object",
  "properties": {
    "clientId": {
      "type": "string",
      "pattern": "^[a-zA-Z0-9_-]{1,80}$"
    },
    "leaving": {
      "type": "boolean"
    }
  },
  "required": [
    "clientId"
  ]
}
```

成功：200。返回结构：

```json
{
  "type": "object",
  "properties": {
    "ready": {
      "type": "boolean"
    }
  },
  "required": [
    "ready"
  ]
}
```

## POST /api/internal/updates/claim

更新代理领取审核任务。内部代理接口，必须使用 X-Update-Key 本机控制密钥。准备和停服前分别校验站长审核及空闲条件；不是给一般客户端或 AI 使用的后门。

请求正文：

```json
{
  "type": "object",
  "properties": {
    "jobId": {
      "type": "string"
    },
    "phase": {
      "enum": [
        "prepare"
      ]
    }
  },
  "required": [
    "jobId"
  ]
}
```

成功：200。返回结构：

```json
{
  "type": "object"
}
```

## GET /api/admin/releases/check

检查配置的发行源。仅有更新提交权限的账号；未配置发行源返回 409。

无需请求正文。

成功：200。返回结构：

```json
{
  "type": "object",
  "properties": {
    "latest": {
      "$ref": "../schemas/AppRelease.schema.json"
    },
    "currentVersion": {
      "type": "string"
    },
    "available": {
      "type": "boolean"
    }
  },
  "required": [
    "latest",
    "currentVersion",
    "available"
  ]
}
```

## POST /api/admin/releases/jobs/{id}/approve

站长审核并等待空闲更新。额外要求站长身份；提交号必须与任务相同。approve 等待全平台连续无人在线满十分钟，force 在准备完成后保存并重启。

请求正文：

```json
{
  "type": "object",
  "properties": {
    "commit": {
      "type": "string",
      "pattern": "^[a-f0-9]{40}$"
    }
  },
  "required": [
    "commit"
  ]
}
```

成功：200。返回结构：

```json
{
  "$ref": "../schemas/DeploymentJob.schema.json"
}
```

## POST /api/admin/releases/jobs/{id}/force

站长审核并强制更新。额外要求站长身份；提交号必须与任务相同。approve 等待全平台连续无人在线满十分钟，force 在准备完成后保存并重启。

请求正文：

```json
{
  "type": "object",
  "properties": {
    "commit": {
      "type": "string",
      "pattern": "^[a-f0-9]{40}$"
    }
  },
  "required": [
    "commit"
  ]
}
```

成功：200。返回结构：

```json
{
  "$ref": "../schemas/DeploymentJob.schema.json"
}
```

## POST /api/admin/releases/jobs/{id}/reject

站长驳回更新。仅站长可驳回尚未执行的任务；执行中不可撤销。

请求正文：

```json
{
  "type": "object",
  "properties": {
    "reason": {
      "type": "string"
    }
  },
  "required": []
}
```

成功：200。返回结构：

```json
{
  "$ref": "../schemas/DeploymentJob.schema.json"
}
```

## GET /api/world-deletions

本人可见的清理任务。仅返回本人所有或具有该世界删除权限的任务。

无需请求正文。

成功：200。返回结构：

```json
{
  "type": "object",
  "properties": {
    "jobs": {
      "type": "array",
      "items": {
        "type": "object"
      }
    }
  },
  "required": [
    "jobs"
  ]
}
```

## POST /api/world-lifecycle/query

查询世界下架状态。仅返回本人原有世界或成员世界的清理状态。

请求正文：

```json
{
  "type": "object",
  "properties": {
    "worldIds": {
      "type": "array",
      "maxItems": 128,
      "items": {
        "type": "string"
      }
    }
  },
  "required": [
    "worldIds"
  ]
}
```

成功：200。返回结构：

```json
{
  "type": "object",
  "properties": {
    "removed": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "worldId": {
            "type": "string"
          },
          "mode": {
            "enum": [
              "unpublish",
              "delete"
            ]
          },
          "ownerId": {
            "type": "string"
          }
        },
        "required": [
          "worldId",
          "mode",
          "ownerId"
        ]
      }
    }
  },
  "required": [
    "removed"
  ]
}
```

## GET /api/worlds/{id}/deletion

世界清理任务状态。

无需请求正文。

成功：200。返回结构：

```json
{
  "type": "object",
  "properties": {
    "job": {
      "type": "object"
    }
  },
  "required": [
    "job"
  ]
}
```

## GET /api/world-templates

平台模组目录。仅登录账号可读。返回模组说明与可用状态，不返回剧情正文。正式发行从配套清单提供模组，首次创建时自动下载并校验，缓存位于 WORLD_TEMPLATE_ROOT 或 DATA_DIR/world-templates。开发或自托管环境也可显式放置本地模组。

无需请求正文。

成功：200。返回结构：

```json
{
  "type": "object",
  "properties": {
    "templates": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "description": {
            "type": "string"
          },
          "systemId": {
            "const": "dnd5e-2024"
          },
          "ruleVariant": {
            "const": "terra-walker"
          },
          "available": {
            "type": "boolean"
          },
          "version": {
            "type": "string"
          },
          "size": {
            "type": "number"
          },
          "sha256": {
            "type": "string",
            "pattern": "^[a-f0-9]{64}$"
          },
          "contents": {
            "type": "object",
            "properties": {
              "chapters": {
                "type": "number"
              },
              "scenes": {
                "type": "number"
              },
              "beats": {
                "type": "number"
              },
              "players": {
                "type": "number"
              },
              "compendiums": {
                "type": "number"
              }
            },
            "required": [
              "chapters",
              "scenes",
              "beats",
              "players",
              "compendiums"
            ]
          }
        },
        "required": [
          "id",
          "name",
          "description",
          "systemId",
          "ruleVariant",
          "available"
        ]
      }
    }
  },
  "required": [
    "templates"
  ]
}
```

## GET /api/world-templates/{id}/archive

下载平台模组完整备份。必须携带目录返回的 sha256 查询参数；版本变化返回 409，服务器未备妥返回 503。Cache-Control 为 private, no-store。下载后核对长度和 SHA256，并通过完整备份校验建立独立世界；不覆盖原存档。

无需请求正文。

成功：200。返回文件字节；检查响应头。

## GET /api/worlds

世界目录。只返回本人有权访问的世界，邀请码不包含在摘要。没有分页和系统过滤参数。

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

加入世界。按 canAccessWorld 校验可见性、成员和移除状态；私密世界首次使用 join-invite。平台管理员可访问。一个账号只有一个当前 worldId。

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

下架或删除世界。先持久化任务再撤销目录，后台清理可恢复续作。完成时 200、执行中 202；按权限核验，不能把请求受理当作已经完成。

请求正文：

```json
{
  "type": "object",
  "properties": {
    "mode": {
      "enum": [
        "unpublish",
        "delete"
      ],
      "default": "unpublish"
    }
  },
  "required": []
}
```

成功：202。返回结构：

```json
{
  "type": "object",
  "properties": {
    "ok": {
      "type": "boolean"
    },
    "job": {
      "type": "object"
    }
  },
  "required": [
    "ok",
    "job"
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

替换旧式 JSON 资源集。整个 files 集合替换，不是增量追加。哈希针对 canonicalJson；清单及正文也要求 canAccessWorld 权限，不应在玩家可见资源中写 GM 秘密。请求上限 2 MiB。

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

旧式 JSON 资源清单。要求登录并通过 canAccessWorld；无权访问时返回 404。

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

旧式 JSON 资源正文。path 对应 Express 通配符 :path(*)；可以包含斜线。要求登录并通过 canAccessWorld。

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

## POST /api/worlds/join-invite

通过邀请码加入世界。

请求正文：

```json
{
  "type": "object",
  "properties": {
    "inviteCode": {
      "type": "string"
    }
  },
  "required": [
    "inviteCode"
  ]
}
```

成功：200。返回结构：

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

## GET /api/worlds/{id}/access

读取世界分享设置。

无需请求正文。

成功：200。返回结构：

```json
{
  "type": "object",
  "properties": {
    "visibility": {
      "enum": [
        "public",
        "invite"
      ]
    },
    "inviteCode": {
      "type": "string"
    },
    "members": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          }
        },
        "required": [
          "id",
          "name"
        ]
      }
    }
  },
  "required": [
    "visibility",
    "inviteCode",
    "members"
  ]
}
```

## POST /api/worlds/{id}/access

修改分享与成员资格。私密化保留当前成员并轮换邀请码。移除成员会撤销本世界访问与管理员演出角色记录。

请求正文：

```json
{
  "type": "object",
  "properties": {
    "visibility": {
      "enum": [
        "public",
        "invite"
      ]
    },
    "rotateInvite": {
      "type": "boolean"
    },
    "removePlayerId": {
      "type": "string"
    },
    "addPlayerId": {
      "type": "string"
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
    "visibility": {
      "enum": [
        "public",
        "invite"
      ]
    },
    "inviteCode": {
      "type": "string"
    },
    "members": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "name": {
            "type": "string"
          }
        },
        "required": [
          "id",
          "name"
        ]
      }
    }
  },
  "required": [
    "visibility",
    "inviteCode",
    "members"
  ]
}
```

## GET /api/worlds/{id}/role

读取世界内管理员角色。可选 playerId 查询参数；普通账号只能查本人，创建者或管理员可查他人。创建者 hostId 与管理员附加 role 分开。

无需请求正文。

成功：200。返回结构：

```json
{
  "type": "object",
  "properties": {
    "worldId": {
      "type": "string"
    },
    "hostId": {
      "type": "string"
    },
    "playerId": {
      "type": "string"
    },
    "nickname": {
      "type": "string"
    },
    "role": {
      "enum": [
        "gm",
        "player"
      ]
    },
    "admin": {
      "type": "boolean"
    }
  },
  "required": [
    "worldId",
    "hostId",
    "playerId",
    "nickname",
    "role",
    "admin"
  ]
}
```

## POST /api/worlds/{id}/role

平台管理员切换自己的世界角色。仅平台管理员、已进入世界、且不是世界创建者时可调用；不能提升其他玩家。

请求正文：

```json
{
  "type": "object",
  "properties": {
    "role": {
      "enum": [
        "gm",
        "player"
      ]
    }
  },
  "required": [
    "role"
  ]
}
```

成功：200。返回结构：

```json
{
  "type": "object",
  "properties": {
    "worldId": {
      "type": "string"
    },
    "hostId": {
      "type": "string"
    },
    "playerId": {
      "type": "string"
    },
    "nickname": {
      "type": "string"
    },
    "role": {
      "enum": [
        "gm",
        "player"
      ]
    },
    "admin": {
      "type": "boolean"
    }
  },
  "required": [
    "worldId",
    "hostId",
    "playerId",
    "nickname",
    "role",
    "admin"
  ]
}
```

## GET /api/worlds/{id}/roles

读取本世界主持人名单。

无需请求正文。

成功：200。返回结构：

```json
{
  "type": "object",
  "properties": {
    "worldId": {
      "type": "string"
    },
    "hostId": {
      "type": "string"
    },
    "gms": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  },
  "required": [
    "worldId",
    "hostId",
    "gms"
  ]
}
```

## POST /api/worlds/{id}/media/upload

获得外部附件上传 URL。需配置外部对象存储。短期签名 URL 仅用于该对象上传；不能给不受信任 AI。

请求正文：

```json
{
  "type": "object",
  "properties": {
    "path": {
      "type": "string"
    },
    "hash": {
      "type": "string"
    },
    "size": {
      "type": "number"
    },
    "mime": {
      "type": "string"
    }
  },
  "required": [
    "path",
    "hash",
    "size",
    "mime"
  ]
}
```

成功：200。返回结构：

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string"
    }
  },
  "required": [
    "url"
  ]
}
```

## POST /api/worlds/{id}/media/gc

回收外部孤立附件。无需正文。对比本世界当前清单，删除不再被清单引用的对象；不是按年龄删除。

无需请求正文。

成功：200。返回结构：

```json
{
  "type": "object",
  "properties": {
    "removed": {
      "type": "number"
    },
    "kept": {
      "type": "number"
    }
  },
  "required": [
    "removed",
    "kept"
  ]
}
```

## POST /api/worlds/{id}/publication/upload

获得外部附件上传 URL。需配置外部对象存储。短期签名 URL 仅用于该对象上传；不能给不受信任 AI。

请求正文：

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

成功：200。返回结构：

```json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string"
    }
  },
  "required": [
    "url"
  ]
}
```

## POST /api/worlds/{id}/media/commit

核验并登记外部媒体。服务端核验对象长度、哈希和文件类型后提交；SVG 走全文校验的本机通道。

请求正文：

```json
{
  "type": "object",
  "properties": {
    "path": {
      "type": "string"
    },
    "hash": {
      "type": "string"
    },
    "size": {
      "type": "number"
    },
    "mime": {
      "type": "string"
    }
  },
  "required": [
    "path",
    "hash",
    "size",
    "mime"
  ]
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

## GET /api/releases/current

运行版本与已激活发行。无需账号；no-store。候选版本不会提前向客户端发布。

无需请求正文。

成功：200。返回结构：

```json
{
  "type": "object",
  "properties": {
    "version": {
      "type": "string"
    },
    "commit": {
      "type": "string"
    },
    "protocol": {
      "type": "number"
    },
    "release": {
      "anyOf": [
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "commit": {
              "type": "string"
            },
            "docsCommit": {
              "type": "string"
            },
            "publishedAt": {
              "type": "string"
            },
            "notes": {
              "type": "string"
            },
            "protocol": {
              "type": "number"
            },
            "minClientVersion": {
              "type": "string"
            },
            "artifacts": {
              "type": "object",
              "additionalProperties": {
                "type": "object",
                "properties": {
                  "url": {
                    "type": "string"
                  },
                  "signature": {
                    "type": "string"
                  },
                  "sha256": {
                    "type": "string"
                  }
                },
                "required": [
                  "url",
                  "signature",
                  "sha256"
                ]
              }
            }
          },
          "required": [
            "id",
            "version",
            "commit",
            "docsCommit",
            "publishedAt",
            "notes",
            "protocol",
            "minClientVersion",
            "artifacts"
          ]
        },
        {
          "type": "null"
        }
      ]
    }
  },
  "required": [
    "version",
    "commit",
    "protocol",
    "release"
  ]
}
```

## GET /api/updates/{target}/{arch}/{current}

Tauri 签名更新检查。无更新或不支持该平台返回 204，无 JSON 正文。仅返回已激活且高于 current 的稳定版本。

无需请求正文。

成功：200。返回结构：

```json
{
  "type": "object",
  "properties": {
    "version": {
      "type": "string"
    },
    "notes": {
      "type": "string"
    },
    "pub_date": {
      "type": "string"
    },
    "url": {
      "type": "string"
    },
    "signature": {
      "type": "string"
    }
  },
  "required": [
    "version",
    "notes",
    "pub_date",
    "url",
    "signature"
  ]
}
```

## GET /api/admin/releases

候选发布与部署状态。

无需请求正文。

成功：200。返回结构：

```json
{
  "type": "object",
  "properties": {
    "active": {
      "anyOf": [
        {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "version": {
              "type": "string"
            },
            "commit": {
              "type": "string"
            },
            "docsCommit": {
              "type": "string"
            },
            "publishedAt": {
              "type": "string"
            },
            "notes": {
              "type": "string"
            },
            "protocol": {
              "type": "number"
            },
            "minClientVersion": {
              "type": "string"
            },
            "artifacts": {
              "type": "object",
              "additionalProperties": {
                "type": "object",
                "properties": {
                  "url": {
                    "type": "string"
                  },
                  "signature": {
                    "type": "string"
                  },
                  "sha256": {
                    "type": "string"
                  }
                },
                "required": [
                  "url",
                  "signature",
                  "sha256"
                ]
              }
            }
          },
          "required": [
            "id",
            "version",
            "commit",
            "docsCommit",
            "publishedAt",
            "notes",
            "protocol",
            "minClientVersion",
            "artifacts"
          ]
        },
        {
          "type": "null"
        }
      ]
    },
    "candidates": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "version": {
            "type": "string"
          },
          "commit": {
            "type": "string"
          },
          "docsCommit": {
            "type": "string"
          },
          "publishedAt": {
            "type": "string"
          },
          "notes": {
            "type": "string"
          },
          "protocol": {
            "type": "number"
          },
          "minClientVersion": {
            "type": "string"
          },
          "artifacts": {
            "type": "object",
            "additionalProperties": {
              "type": "object",
              "properties": {
                "url": {
                  "type": "string"
                },
                "signature": {
                  "type": "string"
                },
                "sha256": {
                  "type": "string"
                }
              },
              "required": [
                "url",
                "signature",
                "sha256"
              ]
            }
          }
        },
        "required": [
          "id",
          "version",
          "commit",
          "docsCommit",
          "publishedAt",
          "notes",
          "protocol",
          "minClientVersion",
          "artifacts"
        ]
      }
    },
    "jobs": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "release": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string"
              },
              "version": {
                "type": "string"
              },
              "commit": {
                "type": "string"
              },
              "docsCommit": {
                "type": "string"
              },
              "publishedAt": {
                "type": "string"
              },
              "notes": {
                "type": "string"
              },
              "protocol": {
                "type": "number"
              },
              "minClientVersion": {
                "type": "string"
              },
              "artifacts": {
                "type": "object",
                "additionalProperties": {
                  "type": "object",
                  "properties": {
                    "url": {
                      "type": "string"
                    },
                    "signature": {
                      "type": "string"
                    },
                    "sha256": {
                      "type": "string"
                    }
                  },
                  "required": [
                    "url",
                    "signature",
                    "sha256"
                  ]
                }
              }
            },
            "required": [
              "id",
              "version",
              "commit",
              "docsCommit",
              "publishedAt",
              "notes",
              "protocol",
              "minClientVersion",
              "artifacts"
            ]
          },
          "requestedBy": {
            "type": "string"
          },
          "requestedAt": {
            "type": "string"
          },
          "status": {
            "enum": [
              "queued",
              "preparing",
              "stopping",
              "switching",
              "checking",
              "complete",
              "rolled-back",
              "failed"
            ]
          },
          "message": {
            "type": "string"
          },
          "previous": {
            "type": "string"
          },
          "backup": {
            "type": "string"
          }
        },
        "required": [
          "id",
          "release",
          "requestedBy",
          "requestedAt",
          "status",
          "message"
        ]
      }
    }
  },
  "required": [
    "active",
    "candidates",
    "jobs"
  ]
}
```

## POST /api/admin/releases

登记不可覆盖的候选发布。64 KB 上限，完整项目与文档提交 SHA；下载 URL 来自 UPDATE_ARTIFACT_ORIGINS；必须提供签名客户端包。

请求正文：

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "version": {
      "type": "string"
    },
    "commit": {
      "type": "string"
    },
    "docsCommit": {
      "type": "string"
    },
    "publishedAt": {
      "type": "string"
    },
    "notes": {
      "type": "string"
    },
    "protocol": {
      "type": "number"
    },
    "minClientVersion": {
      "type": "string"
    },
    "artifacts": {
      "type": "object",
      "additionalProperties": {
        "type": "object",
        "properties": {
          "url": {
            "type": "string"
          },
          "signature": {
            "type": "string"
          },
          "sha256": {
            "type": "string"
          }
        },
        "required": [
          "url",
          "signature",
          "sha256"
        ]
      }
    }
  },
  "required": [
    "id",
    "version",
    "commit",
    "docsCommit",
    "publishedAt",
    "notes",
    "protocol",
    "minClientVersion",
    "artifacts"
  ]
}
```

成功：201。返回结构：

```json
{
  "type": "object",
  "properties": {
    "release": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "version": {
          "type": "string"
        },
        "commit": {
          "type": "string"
        },
        "docsCommit": {
          "type": "string"
        },
        "publishedAt": {
          "type": "string"
        },
        "notes": {
          "type": "string"
        },
        "protocol": {
          "type": "number"
        },
        "minClientVersion": {
          "type": "string"
        },
        "artifacts": {
          "type": "object",
          "additionalProperties": {
            "type": "object",
            "properties": {
              "url": {
                "type": "string"
              },
              "signature": {
                "type": "string"
              },
              "sha256": {
                "type": "string"
              }
            },
            "required": [
              "url",
              "signature",
              "sha256"
            ]
          }
        }
      },
      "required": [
        "id",
        "version",
        "commit",
        "docsCommit",
        "publishedAt",
        "notes",
        "protocol",
        "minClientVersion",
        "artifacts"
      ]
    }
  },
  "required": [
    "release"
  ]
}
```

## POST /api/admin/releases/{id}/deploy

管理员确认部署。需显式确认完整候选提交编号，只允许一个未完成任务。由独立 Linux 更新代理执行，202 不表示已经更新成功。

请求正文：

```json
{
  "type": "object",
  "properties": {
    "commit": {
      "type": "string"
    }
  },
  "required": [
    "commit"
  ]
}
```

成功：202。返回结构：

```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "release": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "version": {
          "type": "string"
        },
        "commit": {
          "type": "string"
        },
        "docsCommit": {
          "type": "string"
        },
        "publishedAt": {
          "type": "string"
        },
        "notes": {
          "type": "string"
        },
        "protocol": {
          "type": "number"
        },
        "minClientVersion": {
          "type": "string"
        },
        "artifacts": {
          "type": "object",
          "additionalProperties": {
            "type": "object",
            "properties": {
              "url": {
                "type": "string"
              },
              "signature": {
                "type": "string"
              },
              "sha256": {
                "type": "string"
              }
            },
            "required": [
              "url",
              "signature",
              "sha256"
            ]
          }
        }
      },
      "required": [
        "id",
        "version",
        "commit",
        "docsCommit",
        "publishedAt",
        "notes",
        "protocol",
        "minClientVersion",
        "artifacts"
      ]
    },
    "requestedBy": {
      "type": "string"
    },
    "requestedAt": {
      "type": "string"
    },
    "status": {
      "enum": [
        "queued",
        "preparing",
        "stopping",
        "switching",
        "checking",
        "complete",
        "rolled-back",
        "failed"
      ]
    },
    "message": {
      "type": "string"
    },
    "previous": {
      "type": "string"
    },
    "backup": {
      "type": "string"
    }
  },
  "required": [
    "id",
    "release",
    "requestedBy",
    "requestedAt",
    "status",
    "message"
  ]
}
```

## 权限注意事项

世界目录、加入和资源读取执行访问控制；私密入场、成员资格和世界内 GM 角色是不同权限。更新管理员还必须进入服务器显式 ID 名单。世界资源与应用发行包是不同通道。删除世界不等于回收全部附件。更新接口已经实现；Linux 部署与首个签名安装包仍须按部署文档实机验收。
