# Pattern reference

Generated from data/patterns.json. Each entry: what to do, poses it covers, and the SwiftUI starting point.

## 00-spec — Spec cheat sheet (规范速查)
- Poses: closed, open
- Sizes, size classes and bar placement for the three display states, plus the four core rules.
- 中文：三种屏幕形态的尺寸、尺寸类别和栏的位置，加 4 条核心规则。
- Card: `cards/00-spec.html`

## 01-image-list — Image + list (图片 + 列表)
- Poses: closed, open
- Same components, different container axis: side by side when open, stacked when closed, image shrunk to about a third.
- 中文：同一套组件只换容器方向：展开横排，折叠竖排；折叠时图片压到约 1/3 屏高。
- SwiftUI: `AnyLayout(isWide ? HStackLayout() : VStackLayout())`
- Card: `cards/01-image-list.html`

## 02-list-detail — List · detail (列表 · 详情)
- Poses: closed, open, book
- Columns meet at the hinge; closed shows the list with disclosure arrows; only the detail column gets the vertical bar.
- 中文：两栏以折痕为界各占一面；折叠后只留列表，每行加 ›；只有详情栏换成竖向栏。
- SwiftUI: `NavigationSplitView { list } detail: { detail }`
- Card: `cards/02-list-detail.html`

## 03-tab-sidebar — Tab bar to sidebar (Tab 变侧栏)
- Poses: closed, open
- Dense apps turn the tab bar into a labelled sidebar on the inner display; on the outer display tabs sit low on the right edge.
- 中文：内容密集的 App 在内屏把 Tab 升级成带文字的侧栏；外屏 Tab 在右侧竖排、靠下。
- SwiftUI: `TabView { … }.tabViewStyle(.sidebarAdaptable)`
- Card: `cards/03-tab-sidebar.html`

## 04-even-grid — Even-column grid (偶数列网格)
- Poses: closed, open, book
- Six columns as three per half so the hinge lands in a gutter; set a minimum cell width instead of a fixed count.
- 中文：内屏 6 列 = 左右各 3 列，折痕落在列缝；不写死列数，写每格最小宽度。
- SwiftUI: `LazyVGrid(columns: [GridItem(.adaptive(minimum: 88))])`
- Card: `cards/04-even-grid.html`

## 05-reader — Single page to spread (单页 → 双页)
- Poses: closed, open, book
- The spine sits on the hinge; keep line length readable; restore position by paragraph, not page number.
- 中文：书脊对准折痕；中文一行 30–40 字；切换时按段落定位，不按页码。
- SwiftUI: `ViewThatFits { spread; singlePage }`
- Card: `cards/05-reader.html`

## 06-video-comments — Video + comments (视频 + 评论)
- Poses: closed, open, book
- Video on one half, comments on the other; closed merges details and comments into a segmented control; playback never restarts.
- 中文：视频左半、评论右半；折叠后简介和评论合成分段 Tab；播放不中断。
- SwiftUI: `VideoPlayer(…).aspectRatio(16/9, contentMode: .fit)`
- Card: `cards/06-video-comments.html`

## 07-product — Product detail (商品详情)
- Poses: closed, open, book
- Gallery left, options and purchase right; icon actions go to the vertical bar, text buttons stay in content.
- 中文：左半看图，右半选规格下单；图标操作进竖栏，“立即购买”这类文字按钮留在内容里。
- SwiftUI: `.safeAreaInset(edge: .bottom) { purchaseBar }`
- Card: `cards/07-product.html`

## 08-chat — Conversations + chat (会话 + 聊天)
- Poses: closed, open, book
- When closing, stay in the open conversation instead of jumping back to the list; keep the draft.
- 中文：折叠后停在正在聊的对话，不跳回列表；草稿不丢。
- SwiftUI: `NavigationSplitView(preferredCompactColumn: $column)`
- Card: `cards/08-chat.html`

## 09-calendar — Month + agenda (月历 + 日程)
- Poses: closed, open, book
- Month grid on one half, agenda on the other; closed collapses to a week strip and keeps the selected date.
- 中文：月历整块放左面，日程放右面；折叠后收成一周横条，选中日期不丢。
- SwiftUI: `@State var selected: Date`
- Card: `cards/09-calendar.html`

## 10-map-sheet — Map + sheet (地图 + 抽屉)
- Poses: closed, open
- Full-bleed map; the same panel floats on the side when wide and becomes a three-detent sheet when compact.
- 中文：地图铺满；同一个面板宽屏浮在左侧，窄屏变三档底部抽屉。
- SwiftUI: `.presentationDetents([.height(120), .medium, .large])`
- Card: `cards/10-map-sheet.html`

## 11-settings — Grouped settings (设置分组)
- Poses: closed, open, book
- Show categories and options side by side when there is room; toggles stay in content, not in the bar.
- 中文：放得下两栏就别再点进下一层；开关属于编辑控件，留在内容里。
- SwiftUI: `List { Section { … } }.listStyle(.insetGrouped)`
- Card: `cards/11-settings.html`

## 12-dashboard — Dashboard reflow (数据卡片重排)
- Poses: closed, open, book
- Split KPI tiles into pairs per half, keep charts off the hinge, wrap instead of shrinking type.
- 中文：4 个指标拆成两组各占一面，图表不横跨折痕；放不下就换行，不压缩字号。
- SwiftUI: `LazyVGrid(columns: isWide ? cols4 : cols2)`
- Card: `cards/12-dashboard.html`

## 13-canvas-inspector — Canvas + inspector (画布 + 工具面板)
- Poses: closed, open, book
- Canvas on one half, parameters on the other; vertical bar order: close, done, tools.
- 中文：画布一面、参数一面；竖栏顺序：关闭 → 完成 → 工具。
- SwiftUI: `.inspector(isPresented: $show) { panel }`
- Card: `cards/13-canvas-inspector.html`

## 14-player-queue — Player + queue (播放 + 队列)
- Poses: closed, open, book, tent
- Now playing on one half, up next on the other; in tent pose, artwork up top and controls below.
- 中文：左面正在播放，右面接下来；帐篷姿态封面在上、按钮在下。
- SwiftUI: `@Environment(\.horizontalSizeClass) var size`
- Card: `cards/14-player-queue.html`

## 15-vertical-bars — Vertical bars (竖向工具栏)
- Poses: closed
- Top to bottom: back/close, primary action, secondary tools, overflow, tab bar. Icons only. Custom bottom bars do not turn vertical.
- 中文：从上到下：返回/关闭 → 主操作 → 次要工具 → 溢出菜单 → Tab 栏；只放图标；自己画的底栏不会自动变竖。
- SwiftUI: `.toolbar { … } with system TabView`
- Card: `cards/15-vertical-bars.html`

## 16-avoid-hinge — Avoid the hinge (避开折痕)
- Poses: book, table
- Book pose moves alerts to one side; tabletop puts viewing up top and touch below; switch three columns to two; scrolling content is exempt.
- 中文：书本姿态弹窗移到一侧；桌面姿态上看下点；3 列网格会被劈开，改 2 列；滚动内容不需要避让。
- SwiftUI: `GeometryProxy reserved regions (iOS 27.1, confirm against the SDK)`
- Card: `cards/16-avoid-hinge.html`

## 17-sports — Live sports · tabletop (体育直播 · 桌面姿态)
- Poses: table, open, closed · Reference app: MLB
- The upright half plays the game, the flat half shows stats and actions; video height equals the top half.
- 中文：立起的一半看比赛，平放的一半看数据和竞猜；视频高度等于上半屏。
- SwiftUI: `Arrangement split mode (iOS 27.1, confirm against the SDK)`
- Card: `cards/17-sports.html`

## 18-recipe — Recipe · kitchen counter (菜谱 · 厨房台面)
- Poses: table, open, closed · Reference app: NYT Cooking
- Top half shows only the current step in large type; a 60pt+ Next button sits below; keep the screen awake.
- 中文：上半只放当前一步、字号放大；“下一步”放下半做到 60pt 以上；屏幕常亮。
- SwiftUI: `UIApplication.shared.isIdleTimerDisabled = true`
- Card: `cards/18-recipe.html`

## 19-flight — Flight tracking · glanceable (航班追踪 · 一眼可读)
- Poses: table, open, closed · Reference app: Flighty
- A propped-up gauge: one big number, dark and dim, almost no interaction.
- 中文：支起来当仪表：一个大数字、深色低亮、几乎不需要操作。
- SwiftUI: `TimelineView(.periodic(from: .now, by: 60))`
- Card: `cards/19-flight.html`

## 20-fitness — Workout · one app, four poses (健身跟练 · 一个 App 四种姿态)
- Poses: closed, book, table, tent · Reference app: Wakeout
- One class in four poses with the same hierarchy; the farther from the hand, the fewer buttons and the larger the type.
- 中文：同一节课四种摆法，内容和层级不变；离手越远，按钮越少、字越大。
- SwiftUI: `horizontalSizeClass first, pose-specific layouts second`
- Card: `cards/20-fitness.html`

## 21-dual-camera — Dual display · camera preview (双屏同显 · 拍照预览)
- Poses: dual · Reference app: Camera · Duo Preview
- The photographer controls the inner display; the subject sees the preview and countdown outside, with no buttons there.
- 中文：内屏给拍的人操作，外屏给被拍的人看预览和倒计时；外屏不放按钮。
- SwiftUI: `Scene accessory (iOS 27.1, confirm against the SDK)`
- Card: `cards/21-dual-camera.html`

## 22-meeting — Video meeting (视频会议)
- Poses: book, open, closed · Reference app: Zoom · FaceTime
- Shared content on one half, participants on the other in an even grid; leave sits at the bottom of the bar.
- 中文：一面看共享内容，一面看参会者；参会者网格用偶数列；挂断放竖栏最下面。
- Card: `cards/22-meeting.html`

## 23-paywall — Paywall · capped width (付费墙 · 限宽居中)
- Poses: open, book, closed · Reference app: RevenueCat
- Full-width background, content capped at 600pt, CTA at 400pt; system close button; a centred CTA lands on the hinge when folded.
- 中文：背景铺满，内容最宽 600pt，按钮最宽 400pt；关闭交给系统导航；居中按钮半折时会压在折痕上。
- SwiftUI: `.frame(maxWidth: 600) / .frame(maxWidth: 400)`
- Card: `cards/23-paywall.html`

## 24-video-edit — Video editing · spanning timeline (视频剪辑 · 时间线横跨)
- Poses: book, open, closed · Reference app: Edits · VLLO
- Preview and parameters on separate halves, a full-width timeline below; the scrolling timeline may cross the hinge.
- 中文：预览一面、参数一面，时间线铺满底部；时间线可滚动，可以横跨折痕。
- SwiftUI: `.inspector`
- Card: `cards/24-video-edit.html`

## 25-dj — DJ decks · mirrored layout (DJ 双碟 · 对称布局)
- Poses: open, book, closed · Reference app: edjing Mix
- Two equal objects, one per half; a control spanning the centre splits into two when folded.
- 中文：两件对等的东西一面一个；横跨中线的推子半折时拆成两侧各一个。
- Card: `cards/25-dj.html`

## 26-feed — Shopping feed · pinch for columns (电商瀑布流 · 捏合调列数)
- Poses: open, book, closed · Reference app: Taobao · Rednote
- Pinch between 2, 4 and 6 columns; even steps only, so the hinge always lands in a gutter.
- 中文：双指捏合切换 2/4/6 列，只给偶数档，折痕永远落在列缝。
- SwiftUI: `MagnifyGesture() → LazyVGrid columns`
- Card: `cards/26-feed.html`

## 27-fold-action — Fold as an action (开合即交互)
- Poses: closed, open · Reference app: Netflix · Deck-Man
- Browse clips closed, keep watching open; pick an album open, close to play; state must carry over.
- 中文：折叠刷短片、打开接着看；打开选专辑、合上开始播；状态必须连续。
- SwiftUI: `onGeometryChange`
- Card: `cards/27-fold-action.html`

## 28-split-view — Split View multitasking (分屏多任务)
- Poses: open · Reference app: Fantastical · Cardhop
- Your app may get half the screen and must work as compact; each app keeps its bar on its outer edge.
- 中文：你的 App 可能只拿到半块屏，必须按 Compact 也好用；分屏时各自的竖栏靠外侧。
- SwiftUI: `Read scene size, never UIScreen.main`
- Card: `cards/28-split-view.html`
