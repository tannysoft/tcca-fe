import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { getCategories } from "@/lib/cms";

export const metadata: Metadata = {
  title: "หมวดหมู่ทั้งหมด",
  description:
    "เรียกดูบทความของ TCCA ตามหมวดหมู่ — แถลงการณ์ · Insight · Community · Events · Policy · Education",
};

export default async function CategoriesPage() {
  const cats = (await getCategories()) ?? [];
  const sorted = [...cats].sort((a, b) => b.count - a.count);

  return (
    <>
      <PageHero
        eyebrow="Categories"
        breadcrumbs={[
          { label: "หน้าแรก", href: "/" },
          { label: "ข่าวสาร", href: "/news" },
          { label: "หมวดหมู่" },
        ]}
        title={
          <>
            เรียกดูตาม
            <br />
            <span className="brand-gradient-text">หมวดหมู่</span>
          </>
        }
        description="เลือกหมวดหมู่เพื่อดูบทความทั้งหมดในประเภทนั้น — แถลงการณ์ บทความเชิงลึก งานอีเวนต์ และเนื้อหาสำหรับสมาชิก TCCA"
      />

      <section className="relative pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          {sorted.length === 0 ? (
            <div className="rounded-3xl border border-navy-600/10 bg-white/60 p-10 text-center text-navy-600/70">
              ยังไม่มีหมวดหมู่ในระบบ — เพิ่มหมวดหมู่ให้บทความใน WordPress แล้วกลับมาที่หน้านี้อีกครั้ง
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {sorted.map((c) => (
                <Link
                  key={c.slug}
                  href={`/category/${c.slug}`}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-navy-600/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-orange-tcca/40 hover:shadow-md"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-orange-soft opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <div className="relative">
                    <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-orange-tcca">
                      Category
                    </span>
                    <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-navy-700 md:text-3xl">
                      {c.name}
                    </h3>
                    {c.description && (
                      <p className="mt-3 text-sm leading-relaxed text-navy-600/75 line-clamp-2">
                        {c.description}
                      </p>
                    )}
                  </div>
                  <div className="relative mt-6 flex items-center justify-between">
                    <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-navy-700 px-2.5 text-xs font-bold text-cream transition-colors group-hover:bg-orange-tcca">
                      {c.count} บทความ
                    </span>
                    <span
                      aria-hidden
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy-600/15 text-navy-700 transition-transform group-hover:translate-x-1 group-hover:border-orange-tcca group-hover:text-orange-tcca"
                    >
                      →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="mt-12 flex items-center justify-center gap-6 text-sm">
            <Link
              href="/news"
              className="font-display font-semibold text-navy-700 hover:text-orange-tcca"
            >
              ← กลับไปที่ข่าวสาร
            </Link>
            <span aria-hidden className="h-4 w-px bg-navy-600/15" />
            <Link
              href="/tags"
              className="font-display font-semibold text-navy-700 hover:text-orange-tcca"
            >
              ดูแท็กทั้งหมด →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
