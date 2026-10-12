import { getCollection, type CollectionEntry } from 'astro:content';

export type PostCollection = 'bites' | 'articles';
export type Post = CollectionEntry<'bites'> | CollectionEntry<'articles'>;
export type Lang = 'en' | 'ar';

export const stages = {
  seedling: { icon: '🌱', label: 'Seedling' },
  budding: { icon: '🌿', label: 'Budding' },
  evergreen: { icon: '🌳', label: 'Evergreen' },
} as const;

// Drafts are visible while running `astro dev`, hidden in the built site
const isVisible = (post: Post) => import.meta.env.DEV || !post.data.draft;

const byNewest = (a: Post, b: Post) =>
  (b.data.tended ?? b.data.planted).valueOf() - (a.data.tended ?? a.data.planted).valueOf();

// Posts written in exactly this language (used to build each language's routes)
export async function getPosts(collection: PostCollection, lang: Lang = 'en') {
  const posts: Post[] = await getCollection(collection);
  return posts.filter((p) => p.data.lang === lang && isVisible(p)).sort(byNewest);
}

// Posts to list on a page in this language: its own posts, plus posts in the
// other language that have no translation yet
export async function getListing(collection: PostCollection, lang: Lang = 'en') {
  const posts = (await getCollection(collection) as Post[]).filter(isVisible);
  const translated = new Set(posts.filter((p) => p.data.lang === lang).map(keyOf));
  return posts.filter((p) => p.data.lang === lang || !translated.has(keyOf(p))).sort(byNewest);
}

export async function getAllPosts(lang: Lang = 'en') {
  const [bites, articles] = await Promise.all([getListing('bites', lang), getListing('articles', lang)]);
  return [...bites, ...articles].sort(byNewest);
}

const keyOf = (post: Post) => post.data.translationKey ?? slugOf(post);

// The same post in the other language, if it has been written
export async function getTranslation(post: Post) {
  const other: Lang = post.data.lang === 'ar' ? 'en' : 'ar';
  const posts = await getPosts(post.collection, other);
  return posts.find((p) => keyOf(p) === keyOf(post));
}

// "en/metformin" -> "metformin"
export const slugOf = (post: Post) => post.id.split('/').slice(1).join('/') || post.id;

// English lives at the root, Arabic under /ar
export const urlOf = (post: Post) =>
  `${post.data.lang === 'ar' ? '/ar' : ''}/${post.collection}/${slugOf(post)}`;

export const formatDate = (date: Date, lang: Lang = 'en') =>
  new Intl.DateTimeFormat(lang === 'ar' ? 'ar' : 'en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);
