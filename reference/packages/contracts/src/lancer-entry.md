# game/packages/contracts/src/lancer-entry.ts

源码核对日：2026-11-06。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../README.md)

## LancerEntry

导出接口 · 源码第 2 行。

Durable pre-battle handshake. Secret roster rows are removed from player snapshots.

```ts
export interface LancerEntry {
    id: string;
    stage: 'confirm' | 'deploy' | 'complete';
    participants: string[];
    confirmed: string[];
    order: string[];
    current: string | null;
    controller: string;
    freeDeployment?: boolean;
    roster: {
        unit: string;
        name: string;
        side: 'players' | 'hostiles';
        portrait: string;
        public: boolean;
    }[];
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `stage` | 否 | `'confirm'&#124;'deploy'&#124;'complete'` | 见结构定义及所属功能文档 |
| `participants` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `confirmed` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `order` | 否 | `string[]` | 见结构定义及所属功能文档 |
| `current` | 否 | `string&#124;null` | 见结构定义及所属功能文档 |
| `controller` | 否 | `string` | 见结构定义及所属功能文档 |
| `freeDeployment` | 是 | `boolean` | Ordinary sorties allow every controller to deploy after the shared confirmation. Omitted for legacy sequential entries. |
| `roster` | 否 | `{unit:string;name:string;side:'players'&#124;'hostiles';portrait:string;public:boolean}[]` | 见结构定义及所属功能文档 |
| `roster.[].unit` | 否 | `string` | 见结构定义及所属功能文档 |
| `roster.[].name` | 否 | `string` | 见结构定义及所属功能文档 |
| `roster.[].side` | 否 | `'players'&#124;'hostiles'` | 见结构定义及所属功能文档 |
| `roster.[].portrait` | 否 | `string` | 见结构定义及所属功能文档 |
| `roster.[].public` | 否 | `boolean` | 见结构定义及所属功能文档 |

## parseLancerEntry

导出接口 · 源码第 9 行。

```ts
export function parseLancerEntry(raw: unknown): LancerEntry;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `raw` | 否 | `unknown` | — |
