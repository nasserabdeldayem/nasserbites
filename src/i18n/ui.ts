// Interface strings for each language. Post content lives in src/content.
export const ui = {
  en: {
    langName: 'English',
    bite: 'Bite',
    article: 'Article',
    allBites: '← All bites',
    allArticles: '← All articles',
    stage: 'Stage',
    planted: 'Planted',
    tended: 'Last tended',
    draft: 'Draft',
    stages: { seedling: 'Seedling', budding: 'Budding', evergreen: 'Evergreen' },
  },
  ar: {
    langName: 'العربية',
    bite: 'بايت',
    article: 'مقال',
    allBites: '→ كل البايتس',
    allArticles: '→ كل المقالات',
    stage: 'المرحلة',
    planted: 'زُرعت',
    tended: 'آخر عناية',
    draft: 'مسودة',
    stages: { seedling: 'بذرة', budding: 'برعم', evergreen: 'دائمة الخضرة' },
  },
} as const;

export const useTranslations = (lang: keyof typeof ui) => ui[lang];
