import type { Metadata } from "next";
import { getArticles } from "@/lib/cms";
import { fbArticles } from "@/lib/cms-fallback";
import { ArticleView } from "@/components/ArticleView";

export const metadata: Metadata = {
  title: "TCCA เปิดตัวอย่างเป็นทางการ",
  description:
    "สมาคมผู้สร้างสรรค์คอนเทนต์แห่งประเทศไทยเปิดตัวอย่างเป็นทางการ พร้อมประกาศวิสัยทัศน์ยกระดับวงการครีเอเตอร์ไทย",
};

export default async function DetailPage() {
  const list = await getArticles({ limit: 10 });
  const article =
    list?.find((a) => a.is_featured) ?? list?.[0] ?? fbArticles[0];
  return <ArticleView article={article} />;
}
