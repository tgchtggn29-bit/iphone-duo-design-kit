---
name: iphone-duo-layout-patterns
description: Adapt or review an iOS screen for iPhone Duo (Apple's foldable iPhone) using 29 named layout patterns — outer vs inner display, book and tabletop poses, vertical bars, hinge avoidance. Use when designing, building or reviewing a screen for iPhone Duo, or when asked how a layout should change when the phone folds.
---

# iPhone Duo layout patterns

A pattern library for adapting screens to iPhone Duo. Pick the closest pattern, apply its rules, and point the user to the matching card for a picture.

## Device facts

| State | Size | Size class | Bars |
|---|---|---|---|
| Outer display (closed) | 466 × 678 pt | compact | right edge, vertical |
| Inner display, portrait | 669 × 951 pt | regular | top and bottom, horizontal |
| Inner display, landscape | 951 × 669 pt | regular | side, vertical |

The hinge is a division region while the device is partially folded and has zero width when flat. Some APIs mentioned here (reserved regions, Arrangement, scene accessories) are from the iOS 27.1 SDK; tell the user to confirm signatures against the shipping SDK.

## Core rules

1. Design for size classes, not poses. Branch on `horizontalSizeClass`, never on orientation, idiom or `UIScreen.main`.
2. Keep interactive elements away from the hinge. Scrolling content may cross it. Use even column counts so the hinge lands in a gutter.
3. Bars go vertical: right edge on the outer display, side edge on the inner landscape display. System `TabView`, `NavigationStack` and `.toolbar` adapt automatically; custom bottom bars do not.
4. Use the inner display for more context, not bigger elements: split view, reflow to two columns, or tab bar to sidebar.
5. Pose-specific layouts (book, tabletop, tent) are extras. Hierarchy and available actions must match the base layouts.

## Vertical bar order (top to bottom)

Back or close → primary action → secondary icon tools → overflow menu → tab bar. Icon-only items go vertical; text buttons, segmented controls, editing toggles and keyboard accessory bars stay horizontal in the content.

## Picking a pattern

| If the screen is… | Use |
|---|---|
| a list that opens items | 02 list · detail, 08 chat, 11 settings |
| hero media plus a list | 01 image + list, 06 video + comments, 14 player + queue |
| a grid of items | 04 even-column grid, 26 pinch-for-columns feed |
| long-form reading | 05 single page to spread |
| commerce | 07 product detail, 23 paywall |
| a map | 10 map + sheet |
| a dashboard | 12 dashboard reflow |
| a creation tool | 13 canvas + inspector, 24 video editing |
| something people watch from a distance | 17 sports, 18 recipe, 19 flight (tabletop) |
| a camera or face-to-face flow | 21 dual display |
| a call | 22 meeting |
| two equal objects | 25 mirrored layout |
| state that should survive opening and closing | 27 fold as an action |
| any app (multitasking) | 28 Split View: it must work at half width |

Full details for every pattern: [references/patterns.md](references/patterns.md). Machine-readable version: `data/patterns.json` in the repository.

## Reviewing a screen

Check, in order:

1. Does it read `horizontalSizeClass` or the scene size, and avoid `UIScreen.main`, orientation and idiom checks?
2. On the outer display, are bars on the right edge, and are they system bars?
3. On the inner display, does the extra width show more context (a second column, a sidebar) rather than larger elements?
4. In book pose, does anything tappable sit on the hinge (centred buttons, a control spanning both halves, the middle column of a three-column grid)?
5. In tabletop pose, is viewing content on the upright half and touch targets on the flat half?
6. Do selection, scroll position, playback and drafts survive opening and closing?

Report each problem with the pattern id that fixes it, for example "the centred purchase button lands on the hinge in book pose → see 23-paywall".

## Credit

From iPhone Duo Design Kit (https://github.com/tgchtggn29-bit/iphone-duo-design-kit), CC BY 4.0. Not affiliated with Apple.
