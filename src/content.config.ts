import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Shared frontmatter for bites (short notes) and articles (long essays).
// Files live in src/content/<collection>/<lang>/<slug>.mdx
const post = z.object({
  title: z.string(),
  description: z.string(),
  lang: z.enum(['en', 'ar']).default('en'),
  // Same key on the English and Arabic versions links them as translations
  translationKey: z.string().optional(),
  stage: z.enum(['seedling', 'budding', 'evergreen']).default('seedling'),
  planted: z.coerce.date(),
  // The CMS saves an empty date as "" — treat that as "not set"
  tended: z.preprocess((v) => (v === '' || v === null ? undefined : v), z.coerce.date().optional()),
  topics: z.array(z.string()).default([]),
  // Share thumbnail (1200×630) shown when the link is posted on WhatsApp, X, Facebook…
  image: z.string().optional(),
  imageAlt: z.string().optional(),
  draft: z.boolean().default(false),
});

const bites = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/bites' }),
  schema: post,
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  schema: post,
});

export const collections = { bites, articles };
