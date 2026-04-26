import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { getArticleBySlug } from '@/lib/articles';

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'Article Not Found | Sanketh Harnoorkar',
    };
  }

  return {
    title: `${article.title} | Sanketh Harnoorkar`,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      <article className="max-w-3xl mx-auto px-4 py-16">
        <Link href="/" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">
          ← Back to portfolio
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mt-6 mb-4">{article.title}</h1>
        <p className="text-gray-400 mb-10">{article.publishedAt}</p>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-a:text-blue-400 prose-li:text-gray-300">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.content}</ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
