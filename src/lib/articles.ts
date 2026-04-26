import fs from 'node:fs/promises';
import path from 'node:path';

import matter from 'gray-matter';

const articlesDirectory = path.join(process.cwd(), 'content', 'articles');

export type Article = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  content: string;
};

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const filePath = path.join(articlesDirectory, `${slug}.md`);
    const fileContents = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: String(data.title ?? ''),
      description: String(data.description ?? ''),
      publishedAt: String(data.publishedAt ?? ''),
      content,
    };
  } catch {
    return null;
  }
}
