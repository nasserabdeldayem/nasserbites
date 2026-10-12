// Interface strings for each language. Post content lives in src/content;
// page-specific text lives with each view in src/views.
export const ui = {
  en: {
    brand: 'Nasser’s Bites',
    siteDescription: 'Small pieces of pharmacy, medicine & things worth knowing.',
    nav: { bites: 'Bites', articles: 'Articles', garden: 'Garden', about: 'About' },
    switchTo: 'العربية',
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
    brand: 'Nasser’s Bites',
    siteDescription: 'قطع صغيرة من الصيدلة والطب، وأشياء تستحق المعرفة.',
    nav: { bites: 'البايتس', articles: 'المقالات', garden: 'الحديقة', about: 'عن المدونة' },
    switchTo: 'English',
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

export type Lang = keyof typeof ui;

export const useTranslations = (lang: Lang) => ui[lang];

// "/ar" for Arabic, "" for English (the default language lives at the root)
export const prefixOf = (lang: Lang) => (lang === 'ar' ? '/ar' : '');
