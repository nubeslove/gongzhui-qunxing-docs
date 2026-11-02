# game/packages/tabletop-runtime/src/story/actorTransferTypes.ts

源码核对日：2026-11-02。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import type {ActorFile,ActorTransferCommand} from '@aelzerant/contracts';
```
</details>

## ActorTransferAdapter

导出接口 · 源码第 2 行。

```ts
export interface ActorTransferAdapter {
    export: (id: string) => ActorFile;
    inspect: (file: ActorFile) => void;
    submit: (c: ActorTransferCommand) => Promise<boolean>;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `export` | 否 | `(id:string)=>ActorFile` | 见结构定义及所属功能文档 |
| `inspect` | 否 | `(file:ActorFile)=>void` | 见结构定义及所属功能文档 |
| `submit` | 否 | `(c:ActorTransferCommand)=>Promise<boolean>` | 见结构定义及所属功能文档 |
