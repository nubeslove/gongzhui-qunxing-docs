# game/apps/desktop/src/platform/sections.ts

源码核对日：2026-10-10。仅结构、签名与字段；不是独立 HTTP 服务。可选指规范化后的 TypeScript 属性，导入默认值和数值限制还需看对应解析器说明。

[全部索引](../../../../README.md)

<details><summary>类型依赖</summary>

```ts
import { GAME_SYSTEMS, type GameSystemId } from '@aelzerant/contracts';
```
</details>

## PLATFORM_NAME

导出接口 · 源码第 3 行。

```ts
export const PLATFORM_NAME = '共坠群星';
```

## APPLICATION_NAME

导出接口 · 源码第 4 行。

```ts
export const APPLICATION_NAME = '共坠群星_V0.1_TRPG在线跑团客户端';
```

## SectionId

导出接口 · 源码第 13 行。

```ts
export type SectionId = typeof SECTIONS[number]['id'];
```

## PlatformPage

导出接口 · 源码第 14 行。

```ts
export type PlatformPage = 'mirror' | 'forum' | 'announcements' | 'friends' | 'settings';
```

## LAST_SECTION_KEY

导出接口 · 源码第 15 行。

```ts
export const LAST_SECTION_KEY = 'gongzhui.last-section';
```

## START_PAGE_KEY

导出接口 · 源码第 16 行。

```ts
export const START_PAGE_KEY = 'gongzhui.start-page';
```

## sectionById

导出接口 · 源码第 17 行。

```ts
export const sectionById: (id: unknown): { readonly id: "aaf"; readonly systemId: "aaf"; readonly title: "艾尔泽兰特"; readonly label: "AAF"; readonly motif: "天穹之剑与命运之星。"; readonly image: "/presentation/dawn-harbor.webp"; readonly enabled: true; } | { readonly id: "dnd5e-2024"; readonly systemId: "dnd5e-2024"; readonly title: "龙与地下城"; readonly label: "DND 2024"; readonly motif: "剑与魔法"; readonly image: "/presentation/dnd/dragon-citadel.png"; readonly enabled: true; } | { readonly id: "lancer"; readonly systemId: "lancer"; readonly title: "枪骑兵"; readonly label: "LANCER"; readonly motif: "驰骋星海，游猎群星。"; readonly image: ""; readonly enabled: true; } | { readonly id: "terra-walker"; readonly systemId: "dnd5e-2024"; readonly title: "行于泰拉"; readonly label: "TERRA"; readonly motif: "游遍大地苦难，终得烟火人间。"; readonly image: "/terra/art/thumbs/revelation.webp"; readonly enabled: true; } | { readonly id: "new-utopia"; readonly systemId: "lancer"; readonly title: "新乌托邦"; readonly label: "NEW UTOPIA"; readonly motif: "于灰烬废土中重生"; readonly image: "/newutopia/eden-dawn.png"; readonly enabled: true; } | { readonly id: "otherworld-journey"; readonly systemId: "otherworld-journey"; readonly title: "梦旅心海"; readonly label: "HEARTSEA"; readonly motif: "在长梦尽头，与你相逢"; readonly image: "/heartsea/art/inn.png"; readonly enabled: true; } | undefined;
```

## resolveSection

导出接口 · 源码第 19 行。

```ts
export function resolveSection(search: string, startPage: string | null, lastSection: string | null): SectionId | null;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `search` | 否 | `string` | — |
| `startPage` | 否 | `string &#124; null` | — |
| `lastSection` | 否 | `string &#124; null` | — |

## sectionUrl

导出接口 · 源码第 26 行。

```ts
export function sectionUrl(href: string, section: SectionId | null, page?: PlatformPage): string;
```

| 参数 | 可选 | 类型 | 默认值 |
| --- | --- | --- | --- |
| `href` | 否 | `string` | — |
| `section` | 否 | `SectionId &#124; null` | — |
| `page` | 是 | `PlatformPage` | 'mirror' |
