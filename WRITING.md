# Writing a bite

Every bite or article is one Markdown file (`.mdx`). Save it in the right folder, push it to GitHub, and it is live about a minute later.

| What | Folder |
|---|---|
| English bite | `src/content/bites/en/` |
| Arabic bite | `src/content/bites/ar/` |
| English article | `src/content/articles/en/` |
| Arabic article | `src/content/articles/ar/` |

The **file name is the link**: `src/content/bites/ar/vitamin-d.mdx` becomes `/ar/bites/vitamin-d`. Use short Latin letters and dashes, even for Arabic posts.

## 1. The header

Every file starts with this block between `---` lines:

```yaml
---
title: What exactly is HbA1c?
description: One or two sentences shown under the title and on cards.
lang: en                    # en or ar
translationKey: hba1c       # same key on the English and Arabic versions
stage: seedling             # seedling 🌱 · budding 🌿 · evergreen 🌳
planted: 2026-10-16         # date you first wrote it
tended: 2026-11-02          # optional: date of your last big update
topics: [Diabetes, Lab tests]
draft: true                 # true = hidden on the live site
---
```

`draft: true` keeps the post hidden while you work on it (it still shows on your computer preview with a "Draft" label). Change it to `false` to publish.

## 2. The body: Markdown

```md
## A heading
### A smaller heading

Normal paragraph. **Bold**, *italic*, and a [link](/bites/metformin).

- bullet
- bullet

1. numbered
2. numbered

> A quote or a highlighted fact.

---   ← a divider line
```

Leave an empty line between paragraphs, lists and headings.

## 3. Boxes (optional)

These work in any post. Keep an empty line after the opening tag and before the closing tag.

**Tips / note / result / danger box**

```mdx
<Callout type="tips" title="Tips that help">

- Eat small meals
- Drink enough water

</Callout>
```

`type` can be `tips` (warm box), `note` (side line), `result` (dark bar) or `danger` (red warning box).

**Cards in a grid**

```mdx
<Cards>
  <Card title="Brain">Sends a fullness signal.</Card>
  <Card title="Stomach">Slows emptying.</Card>
</Cards>
```

**Row of labels**

```mdx
<Chips items={["Nausea", "Diarrhoea", "Constipation"]} />
```

**Small print at the end**

```mdx
<p class="disclaimer">Educational information, not a substitute for medical advice.</p>
```

See `src/content/bites/ar/glp-1-patients.mdx` for a full example using all of them.

## 4. Publishing

**From your phone (Pages CMS)**: open app.pagescms.org → pick the section → **+** → type the file name → fill the fields → write Markdown in **Body** → **Save**. Untick **Draft** when it's ready.

**From your computer (VS Code)**:

1. Create the file in the right folder, e.g. `src/content/bites/en/hba1c.mdx`.
2. In the empty file type `bite` (or `bite-ar`) and press **Tab**. The header fills itself in, with today's date. Press **Tab** to jump between fields.
3. Write. Preview at http://localhost:4321 (run `npx astro dev --background` if it isn't running).
4. Open **Source Control** in the left bar (the branch icon, or `Ctrl+Shift+G`), type a short message like `New bite: HbA1c`, click **Commit**, then **Sync Changes**.

Other shortcuts in `.mdx` files: `callout`, `cards`, `chips` + **Tab**.
