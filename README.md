<div align="center">

# iPhone Duo Design Kit

**同一份内容，两种屏幕。** 折叠屏 iPhone 的 29 个布局模式：可交互的折叠演示、可编辑的 HTML 卡片、高清图片和 SwiftUI 实现提示。

[**在线演示**](https://tgchtggn29-bit.github.io/iphone-duo-design-kit/) · [English](README.en.md) · [全部卡片](#全部卡片) · [给 AI 用](#给-ai-用)

![License: CC BY 4.0](https://img.shields.io/badge/content-CC%20BY%204.0-F5A653) ![License: MIT](https://img.shields.io/badge/code-MIT-1F1F1C) ![Cards](https://img.shields.io/badge/cards-31-9A4A0C) ![No build needed](https://img.shields.io/badge/view-no%20build-6B7F5E)

<img src="docs/assets/fold-lab.gif" width="720" alt="Fold Lab：在折叠、展开、书本、桌面四种姿态之间切换">

</div>

## 这是什么

iPhone Duo 有两块屏：外屏 466 × 678 pt，内屏 951 × 669 pt，中间一条折痕。这个仓库把 Apple 的设计规范、真实 App 的做法，整理成一套能直接拿来用的设计样板：

- **在线 Fold Lab**：在折叠、展开、书本、桌面四种姿态之间切换，看同一个界面怎么变。
- **31 张 3:4 卡片**：规范速查 + 16 种基础布局 + 12 个真实场景 + 2 张封面，每张都是独立 HTML，浏览器打开就能改。
- **高清图片**：`exports/png/` 里是 2160 × 2880 原图，可以直接发小红书、公众号和 X。
- **结构化数据**：`data/patterns.json` 用中英文描述每个模式的姿态、要点和 SwiftUI 起点。
- **Agent Skill**：`skills/iphone-duo-layout-patterns`，让 Claude Code 等 AI 编程工具按这些模式做适配和评审。

<img src="docs/assets/overview.jpg" alt="31 张卡片总览">

## 四条核心规则

1. **按尺寸类别设计，不按姿态设计。** 外屏按 Compact，内屏按 Regular。不写固定宽度，不判断横竖屏或设备型号。
2. **能点的东西远离折痕，滚动内容不受限。** 自定义网格优先用偶数列，让折痕落在列缝。
3. **栏改竖向。** 外屏的导航栏、工具栏、Tab 栏移到右侧；内屏横向时在侧边。系统组件自动适配，自己画的不会。
4. **内屏三种用法：** 分栏、重排成两列、Tab 变侧栏。

| 形态 | 尺寸 | 尺寸类别 | 栏的位置 |
|---|---|---|---|
| 外屏（折叠） | 466 × 678 pt | Compact | 右侧竖排 |
| 内屏竖向 | 669 × 951 pt | Regular | 上下横排 |
| 内屏横向 | 951 × 669 pt | Regular | 侧边竖排 |
| App Store 截图 | 外屏 1398 × 2034 px · 内屏 2007 × 2853 px | | |

## 快速开始

**只想看或发图**：打开[在线演示](https://tgchtggn29-bit.github.io/iphone-duo-design-kit/)，或者直接下载 `exports/png/`。

**改成你自己的版本**：

```bash
git clone https://github.com/tgchtggn29-bit/iphone-duo-design-kit.git
cd iphone-duo-design-kit
# 1. 用浏览器打开 cards/ 里任意一个 .html，直接改文字、颜色
# 2. 重新导出图片
npm install
npx playwright install chromium
npm run render              # 全部导出
npm run render -- 17-sports # 只导出一张
```

导出结果：

| 路径 | 内容 |
|---|---|
| `exports/png/<id>.png` | 2160 × 2880，发帖用 |
| `docs/assets/cards/<id>.jpg` | 1080 × 1440，演示站画廊用 |
| `docs/assets/overview.jpg` | 全部卡片总览图 |

**本地预览演示站**：`npm run serve`，然后打开 http://localhost:8080 。

## 给 AI 用

把 Skill 装进 Claude Code（项目级）：

```bash
mkdir -p .claude/skills
cp -r skills/iphone-duo-layout-patterns .claude/skills/
```

或者全局安装：复制到 `~/.claude/skills/`。装好之后可以直接说“按 iPhone Duo 的模式检查这个页面”或“把这个列表页改成 Duo 适配”。

`data/patterns.json` 也可以直接喂给任何模型或工具，字段包括 `id`、`part`、`poses`、`title`、`summary`、`swiftui`、`ref`。

## 全部卡片

点图片打开对应的 HTML 源文件。

<table>
<tr><td align="center" width="25%"><a href="cards/cover-basics.html"><img src="docs/assets/cards/cover-basics.jpg" width="200" alt="封面 · 同一份内容，两种屏幕"></a><br><sub>封面 · 同一份内容，两种屏幕</sub></td><td align="center" width="25%"><a href="cards/00-spec.html"><img src="docs/assets/cards/00-spec.jpg" width="200" alt="规范速查"></a><br><sub>00 规范速查</sub></td><td align="center" width="25%"><a href="cards/01-image-list.html"><img src="docs/assets/cards/01-image-list.jpg" width="200" alt="图片 + 列表"></a><br><sub>01 图片 + 列表</sub></td><td align="center" width="25%"><a href="cards/02-list-detail.html"><img src="docs/assets/cards/02-list-detail.jpg" width="200" alt="列表 · 详情"></a><br><sub>02 列表 · 详情</sub></td></tr>
<tr><td align="center" width="25%"><a href="cards/03-tab-sidebar.html"><img src="docs/assets/cards/03-tab-sidebar.jpg" width="200" alt="Tab 变侧栏"></a><br><sub>03 Tab 变侧栏</sub></td><td align="center" width="25%"><a href="cards/04-even-grid.html"><img src="docs/assets/cards/04-even-grid.jpg" width="200" alt="偶数列网格"></a><br><sub>04 偶数列网格</sub></td><td align="center" width="25%"><a href="cards/05-reader.html"><img src="docs/assets/cards/05-reader.jpg" width="200" alt="单页 → 双页"></a><br><sub>05 单页 → 双页</sub></td><td align="center" width="25%"><a href="cards/06-video-comments.html"><img src="docs/assets/cards/06-video-comments.jpg" width="200" alt="视频 + 评论"></a><br><sub>06 视频 + 评论</sub></td></tr>
<tr><td align="center" width="25%"><a href="cards/07-product.html"><img src="docs/assets/cards/07-product.jpg" width="200" alt="商品详情"></a><br><sub>07 商品详情</sub></td><td align="center" width="25%"><a href="cards/08-chat.html"><img src="docs/assets/cards/08-chat.jpg" width="200" alt="会话 + 聊天"></a><br><sub>08 会话 + 聊天</sub></td><td align="center" width="25%"><a href="cards/09-calendar.html"><img src="docs/assets/cards/09-calendar.jpg" width="200" alt="月历 + 日程"></a><br><sub>09 月历 + 日程</sub></td><td align="center" width="25%"><a href="cards/10-map-sheet.html"><img src="docs/assets/cards/10-map-sheet.jpg" width="200" alt="地图 + 抽屉"></a><br><sub>10 地图 + 抽屉</sub></td></tr>
<tr><td align="center" width="25%"><a href="cards/11-settings.html"><img src="docs/assets/cards/11-settings.jpg" width="200" alt="设置分组"></a><br><sub>11 设置分组</sub></td><td align="center" width="25%"><a href="cards/12-dashboard.html"><img src="docs/assets/cards/12-dashboard.jpg" width="200" alt="数据卡片重排"></a><br><sub>12 数据卡片重排</sub></td><td align="center" width="25%"><a href="cards/13-canvas-inspector.html"><img src="docs/assets/cards/13-canvas-inspector.jpg" width="200" alt="画布 + 工具面板"></a><br><sub>13 画布 + 工具面板</sub></td><td align="center" width="25%"><a href="cards/14-player-queue.html"><img src="docs/assets/cards/14-player-queue.jpg" width="200" alt="播放 + 队列"></a><br><sub>14 播放 + 队列</sub></td></tr>
<tr><td align="center" width="25%"><a href="cards/15-vertical-bars.html"><img src="docs/assets/cards/15-vertical-bars.jpg" width="200" alt="竖向工具栏"></a><br><sub>15 竖向工具栏</sub></td><td align="center" width="25%"><a href="cards/16-avoid-hinge.html"><img src="docs/assets/cards/16-avoid-hinge.jpg" width="200" alt="避开折痕"></a><br><sub>16 避开折痕</sub></td><td align="center" width="25%"><a href="cards/cover-scenes.html"><img src="docs/assets/cards/cover-scenes.jpg" width="200" alt="场景篇封面 · 12 个真实场景"></a><br><sub>场景篇封面 · 12 个真实场景</sub></td><td align="center" width="25%"><a href="cards/17-sports.html"><img src="docs/assets/cards/17-sports.jpg" width="200" alt="体育直播 · 桌面姿态"></a><br><sub>17 体育直播 · 桌面姿态</sub></td></tr>
<tr><td align="center" width="25%"><a href="cards/18-recipe.html"><img src="docs/assets/cards/18-recipe.jpg" width="200" alt="菜谱 · 厨房台面"></a><br><sub>18 菜谱 · 厨房台面</sub></td><td align="center" width="25%"><a href="cards/19-flight.html"><img src="docs/assets/cards/19-flight.jpg" width="200" alt="航班追踪 · 一眼可读"></a><br><sub>19 航班追踪 · 一眼可读</sub></td><td align="center" width="25%"><a href="cards/20-fitness.html"><img src="docs/assets/cards/20-fitness.jpg" width="200" alt="健身跟练 · 一个 App 四种姿态"></a><br><sub>20 健身跟练 · 一个 App 四种姿态</sub></td><td align="center" width="25%"><a href="cards/21-dual-camera.html"><img src="docs/assets/cards/21-dual-camera.jpg" width="200" alt="双屏同显 · 拍照预览"></a><br><sub>21 双屏同显 · 拍照预览</sub></td></tr>
<tr><td align="center" width="25%"><a href="cards/22-meeting.html"><img src="docs/assets/cards/22-meeting.jpg" width="200" alt="视频会议"></a><br><sub>22 视频会议</sub></td><td align="center" width="25%"><a href="cards/23-paywall.html"><img src="docs/assets/cards/23-paywall.jpg" width="200" alt="付费墙 · 限宽居中"></a><br><sub>23 付费墙 · 限宽居中</sub></td><td align="center" width="25%"><a href="cards/24-video-edit.html"><img src="docs/assets/cards/24-video-edit.jpg" width="200" alt="视频剪辑 · 时间线横跨"></a><br><sub>24 视频剪辑 · 时间线横跨</sub></td><td align="center" width="25%"><a href="cards/25-dj.html"><img src="docs/assets/cards/25-dj.jpg" width="200" alt="DJ 双碟 · 对称布局"></a><br><sub>25 DJ 双碟 · 对称布局</sub></td></tr>
<tr><td align="center" width="25%"><a href="cards/26-feed.html"><img src="docs/assets/cards/26-feed.jpg" width="200" alt="电商瀑布流 · 捏合调列数"></a><br><sub>26 电商瀑布流 · 捏合调列数</sub></td><td align="center" width="25%"><a href="cards/27-fold-action.html"><img src="docs/assets/cards/27-fold-action.jpg" width="200" alt="开合即交互"></a><br><sub>27 开合即交互</sub></td><td align="center" width="25%"><a href="cards/28-split-view.html"><img src="docs/assets/cards/28-split-view.jpg" width="200" alt="分屏多任务"></a><br><sub>28 分屏多任务</sub></td></tr>
</table>

## 仓库结构

```
cards/                 31 张卡片的 HTML 源文件（独立文件，浏览器直接打开）
exports/png/           2x 高清图片
data/patterns.json     模式数据（中英）
docs/                  在线演示站（GitHub Pages）
skills/                Agent Skill
scripts/render.cjs     一键导出图片
source/canvas/         Claude Design 画布原始文件
scripts/build-cards.cjs 从画布原始文件重新生成 cards/
```

## 参考资料

- [Design for iPhone Duo — Apple Developer Tech Talk](https://developer.apple.com/videos/play/tech-talks/111466/)
- [Developers bring incredible new app experiences to iPhone Duo — Apple Newsroom](https://www.apple.com/newsroom/2026/10/developers-bring-incredible-new-app-experiences-to-iphone-duo/)
- [These clever apps show off the iPhone Duo's potential — TechCrunch](https://techcrunch.com/2026/10/24/these-clever-apps-show-off-the-iphone-duos-potential/)
- [Designing RevenueCat paywalls for both iPhone Duo displays](https://www.revenuecat.com/blog/company/designing-revenuecat-paywalls-for-both-iphone-duo-displays)
- [Designing for iPhone Duo — Infinum](https://infinum.com/blog/designing-for-iphone-duo/)
- [Designing for iPhone Duo: What Moves, Splits, and Stays — Blake Crosley](https://blakecrosley.com/blog/designing-for-iphone-duo)
- [Where toolbars and tab bars go on iPhone Duo — DuoApps](https://www.duoapps.com/patterns/where-the-bars-go/)
- [mirzaaghazadeh/iphone-duo-skills](https://github.com/mirzaaghazadeh/iphone-duo-skills) · [divyaravitech/awesome-iphone-duo](https://github.com/divyaravitech/awesome-iphone-duo)

部分接口（折痕区域、Arrangement、场景附件）来自 iOS 27.1，卡片上已标注“以正式 SDK 为准”。发现过时或不准确的地方，欢迎[提 issue](../../issues/new/choose)。

## 参与贡献

欢迎补充新的模式、修正说明、翻译。请先看 [CONTRIBUTING.md](CONTRIBUTING.md)。

## 许可

- 卡片内容、图片、文案：[CC BY 4.0](CONTENT-LICENSE.md)，转载或改编请注明出处并附上本仓库链接。
- 代码（脚本、演示站）：[MIT](LICENSE)。

本项目与 Apple 无关。iPhone 是 Apple Inc. 的商标。卡片中的界面都是示意占位，不代表任何 App 的真实界面；参考的 App 名称仅用于说明设计思路的来源。
