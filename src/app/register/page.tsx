import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { getRegister, mergeCms, pickList } from "@/lib/cms";
import { fbRegister } from "@/lib/cms-fallback";

export const metadata: Metadata = {
  title: "สมัครสมาชิก",
  description:
    "สมัครเป็นสมาชิก TCCA รุ่นก่อตั้งฟรี — เป็นส่วนหนึ่งในการวางรากฐานวงการครีเอเตอร์ไทย",
};

export default async function RegisterPage() {
  const d = mergeCms(await getRegister(), fbRegister);
  d.benefits.list = pickList(
    d.benefits.list,
    fbRegister.benefits.list,
    (b) => !!(b.title?.trim() || b.body?.trim()),
  );
  d.form.channel_options = pickList(
    d.form.channel_options,
    fbRegister.form.channel_options,
    (c) => !!c?.trim(),
  );
  d.steps = pickList(
    d.steps,
    fbRegister.steps,
    (s) => !!(s.title?.trim() || s.body?.trim()),
  );

  return (
    <>
      <PageHero
        eyebrow={d.hero.eyebrow}
        breadcrumbs={[
          { label: "หน้าแรก", href: "/" },
          { label: "สมัครสมาชิก" },
        ]}
        title={<span dangerouslySetInnerHTML={{ __html: d.hero.title }} />}
        description={d.hero.description}
        accent={
          <div className="relative hidden h-full md:block">
            <div className="absolute inset-x-6 top-6 overflow-hidden rounded-[2rem] bg-navy-700 p-8 text-cream shadow-xl">
              <div aria-hidden className="absolute inset-0 dot-grid-light opacity-30" />
              <div
                aria-hidden
                className="absolute -right-20 -top-20 h-60 w-60 rounded-full brand-gradient opacity-30 blur-3xl"
              />
              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-light">
                  Membership
                </p>
                <p className="mt-4 font-display text-6xl font-bold">
                  {d.hero.price_badge}
                </p>
                <p className="mt-1 text-sm text-cream/75">
                  {d.hero.price_note}
                </p>
                <div className="mt-8 flex items-center gap-3 text-sm">
                  <span aria-hidden className="h-px w-10 bg-orange-tcca" />
                  <span className="text-cream/70">เปิดสำหรับครีเอเตอร์ทุกระดับ</span>
                </div>
              </div>
            </div>
          </div>
        }
      />

      <section className="relative pb-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-tcca">
                {d.benefits.eyebrow}
              </p>
              <h2
                className="mt-4 font-display text-4xl font-bold !leading-[1.05] text-navy-700 md:text-5xl"
                dangerouslySetInnerHTML={{ __html: d.benefits.title }}
              />
            </div>
            <p className="max-w-md text-base leading-relaxed text-navy-600/80">
              {d.benefits.subtitle}
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {d.benefits.list.map((b) => (
              <article
                key={b.number + b.title}
                className="group relative overflow-hidden rounded-3xl border border-navy-600/10 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-orange-tcca/40 hover:shadow-md"
              >
                <span
                  aria-hidden
                  className="font-display inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-soft text-base font-bold tracking-wider text-orange-tcca"
                >
                  {b.number}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-navy-700">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-600/75">
                  {b.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="form" className="relative py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 md:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-orange-tcca">
                {d.form.eyebrow}
              </p>
              <h2
                className="mt-4 font-display text-4xl font-bold !leading-[1.05] text-navy-700 md:text-5xl"
                dangerouslySetInnerHTML={{ __html: d.form.title }}
              />

              <form className="mt-10 space-y-5 rounded-[2rem] border border-navy-600/10 bg-white/80 p-8 shadow-sm backdrop-blur">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="ชื่อ" placeholder="ชื่อจริง" />
                  <Field label="นามสกุล" placeholder="นามสกุล" />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="อีเมล"
                    type="email"
                    placeholder="you@example.com"
                  />
                  <Field label="เบอร์โทรศัพท์" placeholder="081-xxx-xxxx" />
                </div>
                <Field
                  label="ชื่อที่ใช้ในงาน / Creator Name"
                  placeholder="เช่น Creative Joe"
                />
                <div>
                  <label className="font-display text-lg font-semibold !leading-tight text-navy-700">
                    ช่องทางหลัก
                  </label>
                  <div className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {d.form.channel_options.map((c) => (
                      <label
                        key={c}
                        className="flex items-center gap-2 rounded-full border border-navy-600/15 px-4 py-2.5 text-sm font-medium text-navy-700 transition hover:border-orange-tcca"
                      >
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-navy-600/30 accent-orange-tcca"
                        />
                        {c}
                      </label>
                    ))}
                  </div>
                </div>
                <Field
                  label="ลิงก์ผลงาน / ช่องหลัก (URL)"
                  placeholder="https://..."
                />
                <div>
                  <label className="font-display text-lg font-semibold !leading-tight text-navy-700">
                    เล่าให้ฟังหน่อย
                  </label>
                  <textarea
                    rows={4}
                    placeholder="คุณอยากได้อะไรจาก TCCA มากที่สุด?"
                    className="mt-2 w-full rounded-2xl border border-navy-600/15 bg-white px-4 py-3 text-sm text-navy-700 placeholder-navy-600/40 transition focus:border-orange-tcca focus:outline-none focus:ring-4 focus:ring-orange-tcca/15"
                  />
                </div>

                <label className="flex items-start gap-3 text-sm text-navy-600/80">
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-navy-600/30 accent-orange-tcca"
                  />
                  <span
                    dangerouslySetInnerHTML={{ __html: d.form.terms_html }}
                  />
                </label>

                <button
                  type="button"
                  className="font-display group inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-orange-tcca text-lg font-semibold text-white shadow-lg shadow-orange-tcca/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-orange-light hover:shadow-xl"
                >
                  {d.form.submit_label}
                  <span
                    aria-hidden
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:rotate-45"
                  >
                    ↗
                  </span>
                </button>
              </form>
            </div>

            <aside className="relative">
              <div className="sticky top-28 space-y-4">
                <div className="rounded-[2rem] bg-navy-700 p-8 text-cream shadow-xl">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-light">
                    3 ขั้นตอน
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold">
                    สมัครง่ายใน 3 นาที
                  </h3>
                  <ol className="mt-6 space-y-5">
                    {d.steps.map((s) => (
                      <li key={s.number + s.title} className="flex gap-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-tcca text-sm font-bold">
                          {s.number}
                        </span>
                        <div>
                          <p className="font-display text-lg font-semibold">
                            {s.title}
                          </p>
                          <p className="mt-1 text-xs text-cream/75">
                            {s.body}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="rounded-[2rem] border border-orange-tcca/30 bg-orange-soft p-6">
                  <p className="font-display text-lg font-bold text-navy-700">
                    {d.fee_note.title}
                  </p>
                  <p className="mt-2 text-sm text-navy-600/80">
                    {d.fee_note.body}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="font-display text-lg font-semibold !leading-tight text-navy-700">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-full border border-navy-600/15 bg-white px-5 py-3 text-sm text-navy-700 placeholder-navy-600/40 transition focus:border-orange-tcca focus:outline-none focus:ring-4 focus:ring-orange-tcca/15"
      />
    </div>
  );
}
