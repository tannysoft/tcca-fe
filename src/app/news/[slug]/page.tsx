import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticle } from "@/lib/cms";
import { fbArticles } from "@/lib/cms-fallback";
import { ArticleView } from "@/components/ArticleView";

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article =
    (await getArticle(slug)) ?? fbArticles.find((a) => a.slug === slug);
  if (!article) return { title: "ไม่พบบทความ" };
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: article.og_image?.url
      ? { images: [article.og_image.url] }
      : undefined,
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const article =
    (await getArticle(slug)) ?? fbArticles.find((a) => a.slug === slug);

  if (!article) notFound();

  return <ArticleView article={article} />;
}
