# game/apps/desktop/src/tabletop/lancer/catalog.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import data from './data/catalog.json';
import { LANCER_TALENT_EQUIPMENT } from './talentEquipmentRegistry';
import { LANCER_CATALOG_CORRECTIONS } from './catalogCorrections';
import type { LancerWeapon } from '@aelzerant/rules-engine';
import type { ManualActor } from '@aelzerant/contracts';
import { readLancer, setEquipment } from './model';
import { coreSystemId } from './coreResources';
```
</details>

## LancerCatalogEntry

导出接口 · 源码第 8 行。

```ts
export interface LancerCatalogEntry {
    id: string;
    kind: string;
    name: string;
    book: string;
    bookTitle: string;
    page: number;
    metadata: string;
    text: string;
    sp: number;
    limited: number;
    automation: string;
    size?: string;
    damage?: string;
    range?: string;
    tags?: string;
    compconId?: string;
}
```

| 字段 | 可选 | 类型 | 含义／来源注释 |
| --- | --- | --- | --- |
| `id` | 否 | `string` | 见结构定义及所属功能文档 |
| `kind` | 否 | `string` | 见结构定义及所属功能文档 |
| `name` | 否 | `string` | 见结构定义及所属功能文档 |
| `book` | 否 | `string` | 见结构定义及所属功能文档 |
| `bookTitle` | 否 | `string` | 见结构定义及所属功能文档 |
| `page` | 否 | `number` | 见结构定义及所属功能文档 |
| `metadata` | 否 | `string` | 见结构定义及所属功能文档 |
| `text` | 否 | `string` | 见结构定义及所属功能文档 |
| `sp` | 否 | `number` | 见结构定义及所属功能文档 |
| `limited` | 否 | `number` | 见结构定义及所属功能文档 |
| `automation` | 否 | `string` | 见结构定义及所属功能文档 |
| `size` | 是 | `string` | 见结构定义及所属功能文档 |
| `damage` | 是 | `string` | 见结构定义及所属功能文档 |
| `range` | 是 | `string` | 见结构定义及所属功能文档 |
| `tags` | 是 | `string` | 见结构定义及所属功能文档 |
| `compconId` | 是 | `string` | 见结构定义及所属功能文档 |

## installLancerResource

导出接口 · 源码第 11 行。

```ts
export function installLancerResource(actor: ManualActor, entry: LancerCatalogEntry, mount?: number): ManualActor;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `actor` | 否 | `ManualActor` | — |
| `entry` | 否 | `LancerCatalogEntry` | — |
| `mount` | 是 | `number` | 0 |
