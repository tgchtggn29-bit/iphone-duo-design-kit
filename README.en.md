<div align="center">

# iPhone Duo Design Kit

**One content, two screens.** A foldable iPhone design kit: 29 iPhone Duo layout patterns with an interactive fold lab, editable HTML cards, high-res images and SwiftUI adaptive layout starting points.

<sub>Keywords: foldable iPhone layout · iPhone Fold design kit · iPhone Duo UI kit · iOS 27 foldable · hinge-aware layout · SwiftUI adaptive layout</sub>

[**Live demo**](https://tgchtggn29-bit.github.io/iphone-duo-design-kit/) · [中文](README.md) · [All cards](#all-cards) · [For agents](#for-coding-agents)

![License: CC BY 4.0](https://img.shields.io/badge/content-CC%20BY%204.0-F5A653) ![License: MIT](https://img.shields.io/badge/code-MIT-1F1F1C) ![Cards](https://img.shields.io/badge/cards-31-9A4A0C) ![No build needed](https://img.shields.io/badge/view-no%20build-6B7F5E)

<img src="docs/assets/fold-lab.gif" width="720" alt="Fold Lab switching between closed, open, book and tabletop poses">

</div>

## What's inside

iPhone Duo has two displays: a 466 × 678 pt outer display and a 951 × 669 pt inner display with a hinge down the middle. This repository turns Apple's guidance and what shipping apps do into a design kit you can use right away:

- **Fold Lab** (live demo): switch between closed, open, book and tabletop poses and watch one interface adapt.
- **31 cards in 3:4**: a spec cheat sheet, 16 base layouts, 12 real-world scenes and two covers. Each card is a standalone HTML file you can open and edit in a browser.
- **High-res images**: `exports/png/` has every card at 2160 × 2880.
- **Structured data**: `data/patterns.json` describes each pattern's poses, rules and SwiftUI entry point in English and Chinese.
- **Agent Skill**: `skills/iphone-duo-layout-patterns` lets Claude Code and similar tools adapt and review screens using these patterns.

Card text is in Chinese with English titles; the demo site, data and skill are bilingual.

<img src="docs/assets/overview.jpg" alt="Overview of all 31 cards">

## Four core rules

1. **Design for size classes, not poses.** Compact on the outer display, regular on the inner. No fixed widths, no orientation or device checks.
2. **Keep interactive elements away from the hinge.** Scrolling content may cross it. Prefer even column counts so the hinge lands in a gutter.
3. **Bars go vertical.** On the outer display, navigation, toolbars and tab bars move to the right edge; on the inner landscape display, to the side. System bars adapt; custom ones do not.
4. **Three ways to use the inner display:** split view, reflow to two columns, tab bar to sidebar.

| State | Size | Size class | Bars |
|---|---|---|---|
| Outer (closed) | 466 × 678 pt | compact | right edge, vertical |
| Inner portrait | 669 × 951 pt | regular | top and bottom |
| Inner landscape | 951 × 669 pt | regular | side, vertical |
| App Store screenshots | outer 1398 × 2034 px · inner 2007 × 2853 px | | |

## Quick start

```bash
git clone https://github.com/tgchtggn29-bit/iphone-duo-design-kit.git
cd iphone-duo-design-kit
# Edit any file in cards/ in your browser or editor, then re-export:
npm install
npx playwright install chromium
npm run render              # every card
npm run render -- 17-sports # one card
npm run serve               # preview the demo site at http://localhost:8080
```

## For coding agents

```bash
mkdir -p .claude/skills
cp -r skills/iphone-duo-layout-patterns .claude/skills/   # or ~/.claude/skills/ for all projects
```

Then ask things like "review this screen against the iPhone Duo patterns" or "adapt this list view for iPhone Duo". `data/patterns.json` works as context for any model or tool.

## All cards

Click a card to open its HTML source.

<table>
<tr><td align="center" width="25%"><a href="cards/cover-basics.html"><img src="docs/assets/cards/cover-basics.jpg" width="200" alt="封面 · 同一份内容，两种屏幕"></a><br><sub>Cover · One content, two screens</sub></td><td align="center" width="25%"><a href="cards/00-spec.html"><img src="docs/assets/cards/00-spec.jpg" width="200" alt="规范速查"></a><br><sub>00 Spec cheat sheet</sub></td><td align="center" width="25%"><a href="cards/01-image-list.html"><img src="docs/assets/cards/01-image-list.jpg" width="200" alt="图片 + 列表"></a><br><sub>01 Image + list</sub></td><td align="center" width="25%"><a href="cards/02-list-detail.html"><img src="docs/assets/cards/02-list-detail.jpg" width="200" alt="列表 · 详情"></a><br><sub>02 List · detail</sub></td></tr>
<tr><td align="center" width="25%"><a href="cards/03-tab-sidebar.html"><img src="docs/assets/cards/03-tab-sidebar.jpg" width="200" alt="Tab 变侧栏"></a><br><sub>03 Tab bar to sidebar</sub></td><td align="center" width="25%"><a href="cards/04-even-grid.html"><img src="docs/assets/cards/04-even-grid.jpg" width="200" alt="偶数列网格"></a><br><sub>04 Even-column grid</sub></td><td align="center" width="25%"><a href="cards/05-reader.html"><img src="docs/assets/cards/05-reader.jpg" width="200" alt="单页 → 双页"></a><br><sub>05 Single page to spread</sub></td><td align="center" width="25%"><a href="cards/06-video-comments.html"><img src="docs/assets/cards/06-video-comments.jpg" width="200" alt="视频 + 评论"></a><br><sub>06 Video + comments</sub></td></tr>
<tr><td align="center" width="25%"><a href="cards/07-product.html"><img src="docs/assets/cards/07-product.jpg" width="200" alt="商品详情"></a><br><sub>07 Product detail</sub></td><td align="center" width="25%"><a href="cards/08-chat.html"><img src="docs/assets/cards/08-chat.jpg" width="200" alt="会话 + 聊天"></a><br><sub>08 Conversations + chat</sub></td><td align="center" width="25%"><a href="cards/09-calendar.html"><img src="docs/assets/cards/09-calendar.jpg" width="200" alt="月历 + 日程"></a><br><sub>09 Month + agenda</sub></td><td align="center" width="25%"><a href="cards/10-map-sheet.html"><img src="docs/assets/cards/10-map-sheet.jpg" width="200" alt="地图 + 抽屉"></a><br><sub>10 Map + sheet</sub></td></tr>
<tr><td align="center" width="25%"><a href="cards/11-settings.html"><img src="docs/assets/cards/11-settings.jpg" width="200" alt="设置分组"></a><br><sub>11 Grouped settings</sub></td><td align="center" width="25%"><a href="cards/12-dashboard.html"><img src="docs/assets/cards/12-dashboard.jpg" width="200" alt="数据卡片重排"></a><br><sub>12 Dashboard reflow</sub></td><td align="center" width="25%"><a href="cards/13-canvas-inspector.html"><img src="docs/assets/cards/13-canvas-inspector.jpg" width="200" alt="画布 + 工具面板"></a><br><sub>13 Canvas + inspector</sub></td><td align="center" width="25%"><a href="cards/14-player-queue.html"><img src="docs/assets/cards/14-player-queue.jpg" width="200" alt="播放 + 队列"></a><br><sub>14 Player + queue</sub></td></tr>
<tr><td align="center" width="25%"><a href="cards/15-vertical-bars.html"><img src="docs/assets/cards/15-vertical-bars.jpg" width="200" alt="竖向工具栏"></a><br><sub>15 Vertical bars</sub></td><td align="center" width="25%"><a href="cards/16-avoid-hinge.html"><img src="docs/assets/cards/16-avoid-hinge.jpg" width="200" alt="避开折痕"></a><br><sub>16 Avoid the hinge</sub></td><td align="center" width="25%"><a href="cards/cover-scenes.html"><img src="docs/assets/cards/cover-scenes.jpg" width="200" alt="场景篇封面 · 12 个真实场景"></a><br><sub>Cover · 12 real-world scenes</sub></td><td align="center" width="25%"><a href="cards/17-sports.html"><img src="docs/assets/cards/17-sports.jpg" width="200" alt="体育直播 · 桌面姿态"></a><br><sub>17 Live sports · tabletop</sub></td></tr>
<tr><td align="center" width="25%"><a href="cards/18-recipe.html"><img src="docs/assets/cards/18-recipe.jpg" width="200" alt="菜谱 · 厨房台面"></a><br><sub>18 Recipe · kitchen counter</sub></td><td align="center" width="25%"><a href="cards/19-flight.html"><img src="docs/assets/cards/19-flight.jpg" width="200" alt="航班追踪 · 一眼可读"></a><br><sub>19 Flight tracking · glanceable</sub></td><td align="center" width="25%"><a href="cards/20-fitness.html"><img src="docs/assets/cards/20-fitness.jpg" width="200" alt="健身跟练 · 一个 App 四种姿态"></a><br><sub>20 Workout · one app, four poses</sub></td><td align="center" width="25%"><a href="cards/21-dual-camera.html"><img src="docs/assets/cards/21-dual-camera.jpg" width="200" alt="双屏同显 · 拍照预览"></a><br><sub>21 Dual display · camera preview</sub></td></tr>
<tr><td align="center" width="25%"><a href="cards/22-meeting.html"><img src="docs/assets/cards/22-meeting.jpg" width="200" alt="视频会议"></a><br><sub>22 Video meeting</sub></td><td align="center" width="25%"><a href="cards/23-paywall.html"><img src="docs/assets/cards/23-paywall.jpg" width="200" alt="付费墙 · 限宽居中"></a><br><sub>23 Paywall · capped width</sub></td><td align="center" width="25%"><a href="cards/24-video-edit.html"><img src="docs/assets/cards/24-video-edit.jpg" width="200" alt="视频剪辑 · 时间线横跨"></a><br><sub>24 Video editing · spanning timeline</sub></td><td align="center" width="25%"><a href="cards/25-dj.html"><img src="docs/assets/cards/25-dj.jpg" width="200" alt="DJ 双碟 · 对称布局"></a><br><sub>25 DJ decks · mirrored layout</sub></td></tr>
<tr><td align="center" width="25%"><a href="cards/26-feed.html"><img src="docs/assets/cards/26-feed.jpg" width="200" alt="电商瀑布流 · 捏合调列数"></a><br><sub>26 Shopping feed · pinch for columns</sub></td><td align="center" width="25%"><a href="cards/27-fold-action.html"><img src="docs/assets/cards/27-fold-action.jpg" width="200" alt="开合即交互"></a><br><sub>27 Fold as an action</sub></td><td align="center" width="25%"><a href="cards/28-split-view.html"><img src="docs/assets/cards/28-split-view.jpg" width="200" alt="分屏多任务"></a><br><sub>28 Split View multitasking</sub></td></tr>
</table>

## Sources

- [Design for iPhone Duo — Apple Developer Tech Talk](https://developer.apple.com/videos/play/tech-talks/111466/)
- [Developers bring incredible new app experiences to iPhone Duo — Apple Newsroom](https://www.apple.com/newsroom/2026/10/developers-bring-incredible-new-app-experiences-to-iphone-duo/)
- [These clever apps show off the iPhone Duo's potential — TechCrunch](https://techcrunch.com/2026/10/24/these-clever-apps-show-off-the-iphone-duos-potential/)
- [Designing RevenueCat paywalls for both iPhone Duo displays](https://www.revenuecat.com/blog/company/designing-revenuecat-paywalls-for-both-iphone-duo-displays)
- [Designing for iPhone Duo — Infinum](https://infinum.com/blog/designing-for-iphone-duo/)
- [Designing for iPhone Duo: What Moves, Splits, and Stays — Blake Crosley](https://blakecrosley.com/blog/designing-for-iphone-duo)
- [Where toolbars and tab bars go on iPhone Duo — DuoApps](https://www.duoapps.com/patterns/where-the-bars-go/)
- [mirzaaghazadeh/iphone-duo-skills](https://github.com/mirzaaghazadeh/iphone-duo-skills) · [divyaravitech/awesome-iphone-duo](https://github.com/divyaravitech/awesome-iphone-duo)

Some APIs (hinge regions, Arrangement, scene accessories) are from iOS 27.1 and are marked as such on the cards. Spotted something outdated? [Open an issue](../../issues/new/choose).

## Contributing

New patterns, corrections and translations are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

- Card content, images and text: [CC BY 4.0](CONTENT-LICENSE.md). Credit this repository when you share or adapt them.
- Code (scripts, demo site): [MIT](LICENSE).

Not affiliated with Apple. iPhone is a trademark of Apple Inc. All UI on the cards is placeholder and does not reproduce any app's real interface; app names only credit where a design idea came from.
