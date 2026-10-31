# Contributing · 参与贡献

Thanks for helping. Three kinds of contributions are most useful:

1. **Corrections** — a size, rule or API on a card is wrong or outdated. Open an issue with the "Correction" template and include a source link.
2. **New patterns** — a layout or scene that is not covered yet. Open an issue with the "New pattern" template first, so we can agree on the idea before you build the card.
3. **Translations** — English (or other) versions of card text.

## Adding or editing a card

1. Copy an existing file in `cards/` that is close to what you need. Every card is a self-contained 1080 × 1440 HTML file; open it in a browser to preview.
2. Keep the shared look: background `#F2F1EC`, accent `#F5A653`, accent text `#9A4A0C`, hinge line `#E9A866` dashed, font Noto Sans SC. Use placeholders such as `[价格]` instead of invented numbers.
3. Add an entry to `data/patterns.json` (`id` must match the file name) and copy it to `docs/patterns.json`.
4. Run `npm run render -- <id>` and commit the new `exports/png/<id>.png` and `docs/assets/cards/<id>.jpg`.
5. Mention your sources in the pull request.

## 中文简要说明

- 纠错：用 “Correction” 模板提 issue，附上来源链接。
- 新模式：先用 “New pattern” 模板提 issue 讨论，再动手做卡片。
- 做卡片：复制 `cards/` 里相近的一张来改，保持统一配色和字体；在 `data/patterns.json` 加一条记录；运行 `npm run render -- <id>` 导出图片后一起提交。
