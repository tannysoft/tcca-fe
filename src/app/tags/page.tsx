import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { getTags } from "@/lib/cms";

export const metadata: Metadata = {
  title: "แท็กทั้งหมด",
  description:
    "ค้นหาบทความของ TCCA ตามแท็ก — ดูหัวข้อที่สนใจจากแท็กทั้งหมดของ Newsroom",
};

export default async function TagsPage() {
  const tags = (await getTags()) ?? [];
  const sorted = [...tags].sort((a, b) => b.count - a.count);

  return (
    <>
      <PageHero
        eyebrow="Tags"
        breadcrumbs={[
          { label: "หน้าแรก", href: "/" },
          { label: "ข่าวสาร", href: "/news" },
          { label: "แท็กทั้งหมด" },
        ]}
        title={
          <>
            เรียกดูตาม
            <br />
            <span className="brand-gradient-text">แท็ก</span>
          </>
        }
        description="เลือกแท็กเพื่อดูบทความทั้งหมดที่เกี่ยวข้อง — จัดหมวดตามประเด็นสำคัญของวงการครีเอเตอร์ไทย"
      />

      <section className="relative pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          {sorted.length === 0 ? (
            <div className="rounded-3xl border border-navy-600/10 bg-white/60 p-10 text-center text-navy-600/70">
              ยังไม่มีแท็กในระบบ — เพิ่มแท็กให้บทความใน WordPress แล้วกลับมาที่หน้านี้อีกครั้ง
            </div>
          ) : (
            <div className="flex flex-wrap gap-3">
              {sorted.map((t) => (
                <Link
                  key={t.slug}
                  href={`/tags/${t.slug}`}
                  className="group inline-flex items-center gap-3 rounded-full border border-navy-600/15 bg-white px-5 py-2.5 text-sm font-semibold text-navy-700 shadow-sm transition hover:-translate-y-0.5 hover:border-orange-tcca/50 hover:bg-orange-soft hover:shadow-md"
                >
                  <span className="text-orange-tcca">#</span>
                  {t.name}
                  <span className="inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-navy-700 px-2 text-[10px] font-bold text-cream transition-colors group-hover:bg-orange-tcca">
                    {t.count}
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
