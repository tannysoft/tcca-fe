# TCCA Headless — WordPress Backend

ชุด WordPress backend สำหรับใช้กับ Next.js frontend ที่อยู่ใน repo นี้ ประกอบด้วย
CPTs, Taxonomies, Options Pages และ ACF field groups ที่สะท้อนทุกข้อความ/รูป/ไฟล์
ที่แสดงบนเว็บ — ออกแบบให้เปิดเว็บ WP เป็น headless แล้ว fetch ผ่าน
**WPGraphQL** (แนะนำ) หรือ **REST API**

---

## 1) Prerequisites บน WordPress

ติดตั้งปลั๊กอินเหล่านี้ (ชื่อและลิงก์บน wp.org / github):

1. **Advanced Custom Fields PRO** — `https://www.advancedcustomfields.com/` (จำเป็น, ใช้ repeater / flexible / options page)
2. **WPGraphQL** — `https://www.wpgraphql.com/`
3. **WPGraphQL for ACF** — `https://github.com/wp-graphql/wpgraphql-acf`
4. *(optional)* **WPGraphQL Smart Cache** — เพิ่ม cache/stale-while-revalidate สำหรับ ISR

ถ้าจะใช้ REST แทน GraphQL ก็ข้ามข้อ 2–4 ได้

---

## 2) ติดตั้ง plugin นี้

1. zip โฟลเดอร์นี้ (`wp/tcca-headless`) แล้ว upload ใน `Plugins → Add New → Upload`
   หรือ copy โฟลเดอร์ไปวางที่ `wp-content/plugins/tcca-headless/`
2. Activate "TCCA Headless"
3. จะเห็นเมนูใหม่ใน WP admin:
   - **TCCA Settings** (Options Pages)
   - **News** (`tcca_news`)
   - **Events** (`tcca_event`)
   - **Partners / Pillars / Committee / Timeline / Benefits** (CPT สนับสนุน)

---

## 3) Import ACF field groups

1. ใน WP admin ไป `ACF → Tools → Import Field Groups`
2. เลือกไฟล์ `acf-fields.json` ใน plugin นี้
3. กด Import — จะได้ 14 groups ครบ (จับไปยัง Options pages และ CPTs อัตโนมัติ
   จาก location rules ที่กำหนดไว้)

*(ถ้าไม่เห็น Options pages บนเมนูฝั่งซ้าย ให้ลอง deactivate/activate plugin ใหม่
หรือเช็คว่ามี ACF PRO ติดตั้งอยู่)*

---

## 4) โครงสร้าง content ที่ได้

### Options pages (ข้อมูล singleton ของเว็บ)
| Page | ใช้กับ section ใด |
|---|---|
| `Identity & Contact` | Logo, favicon, OG default, brand avatar, brand kit downloads, email, socials |
| `Navigation` | Navbar เมนู + CTA button |
| `Footer` | Footer columns, description, copyright |
| `Partners Section` | Eyebrow + title (logo list มาจาก Partners CPT) |

### WordPress Pages (seed ตอน activate plugin)
| Slug | Template | ACF group |
|---|---|---|
| `/home` | `page-home.php` | Home Page — Hero, About section, Pillars/Events/News intros, JoinCTA (รวม marquee + avatar) |
| `/about` | `page-about.php` | About Page — Hero, Our Story, Values, Timeline, Committee, Final CTA |
| `/register` | `page-register.php` | Register Page — Hero, Price badge, Benefits, Form labels, Steps, Fee note |

Pages ถูก create อัตโนมัติตอน plugin activate ถ้ายังไม่มี (ดู `tcca_seed_pages()`). ACF groups ถูกผูกด้วย `page_template` location rule

### News (WP Posts มาตรฐาน — admin menu ถูก rename เป็น "News")
- **Categories** → ใช้เป็น "tag label" / badge บนการ์ด
- **Tags** → ใช้เป็น hashtags (รองรับหน้า `/tags` และ `/tags/[slug]` ใน Next.js)
- **Featured Image** → cover ของบทความ
- **Gutenberg post_content** → body ของบทความ
- **ACF เสริม**: subtitle, read minutes, is_featured, author display/role, OG override, gallery, attachments (PDF/press kit), TOC, related

### Custom Post Types (collection)
| CPT | ใช้ที่ | มีอะไรเด่น |
|---|---|---|
| `tcca_event` | Home events section | วันเวลา, venue, agenda repeater, cover, sticker, venue map, gallery, attachments |
| `tcca_partner` | Partners marquee | slug, logo, accent, website |
| `tcca_pillar` | 6 Pillars section | number, description, color gradient |
| `tcca_committee` | About → Committee | role EN, count label, members (name/position/photo/bio) |
| `tcca_timeline` | About → Journey | year, body, image |
| `tcca_benefit` | Register → Benefits | number, body, icon image |

ทุก CPT ตั้ง `show_in_rest` และ `show_in_graphql` ไว้แล้ว

### Seed news (9 บทความ)

ไฟล์ [seed-news.xml](seed-news.xml) เป็น WordPress WXR import file — มี 9 บทความที่ใช้ใน Home page / /news list พร้อม Categories (`แถลงการณ์`, `Insight`, `Community`, `Events`, `Policy`, `Program`, `Education`), Tags, Gutenberg body, ACF meta (subtitle, read_minutes, is_featured, author_display, author_role, TOC)

**วิธี import**:
1. WP Admin → Tools → Import → WordPress → Run Importer (ถ้ายังไม่ติดตั้ง installer ให้ติดตั้งก่อน)
2. Upload `seed-news.xml` → Assign authors → **ติ๊ก "Download and import file attachments"** → Submit
3. Plugin hook `tcca_assign_thumbnails_from_parent` จะทำงานหลัง import อัตโนมัติ — ดึงรูป Unsplash (9 ภาพ) มาเก็บใน Media Library แล้วตั้งเป็น Featured Image ของแต่ละบทความให้เอง
4. แก้ไข Page `/home` → News section → เลือก 3 บทความลงในฟิลด์ `featured_article`, `insight_article`, `community_article`

**รูปประกอบ** — ใช้ seed จาก Unsplash (free license) ผ่าน `images.unsplash.com/photo-*` ที่เลือกเข้ากับหัวข้อ:
ไมโครโฟน · แผนภูมิ analytics · กลุ่มคน · เวทีอีเวนต์ · เอกสารนโยบาย · จับมือ · ห้องเรียน · ประชุมบอร์ด · หนังสือวิจัย
สามารถแก้ URL ใน `seed-news.xml` เป็นรูปอื่นได้ก่อน import

**Slugs ที่ import มา** — ใช้ตรงกับ `/news/[slug]` บน Next.js:
- `tcca-launch-2026` (is_featured=true) · `creator-economy-report-2026` · `founding-members-1000` · `creator-summit-2026` · `creator-standards-draft` · `brand-match-program` · `masterclass-series-launch` · `advisory-board-announcement` · `research-call-2026`

### REST endpoints ใหม่สำหรับ Tags
- `GET /wp-json/tcca/v1/tags` — list แท็กทั้งหมด + count
- `GET /wp-json/tcca/v1/tags/{slug}` — ข้อมูลแท็ก + บทความในแท็กนั้น
- `GET /wp-json/tcca/v1/articles?tag=<slug>` — กรอง articles ตามแท็ก
- `GET /wp-json/tcca/v1/articles?category=<slug>` — กรองตาม category

---

## 5) จุดที่ upload รูป/ไฟล์ได้ (สรุป)

**รูปภาพ (Image field — คืนเป็น object พร้อม `url` / `sizes` / `alt`):**
- Identity: logo default, logo white, favicon, default OG, brand avatar
- Home: hero visual, home OG, join CTA avatar, about card icons
- About: OG, hero accent image, story image
- Register: OG, hero accent image
- Article: cover, OG, gallery (หลายรูป), รูปในบล็อก body
- Event: cover, sticker, OG, venue map, gallery
- Partner: logo
- Committee member: photo
- Timeline: image
- Benefit: icon image

**ไฟล์ดาวน์โหลด (File field — PDF/DOC/ZIP):**
- Identity → `brand_assets` repeater (brand kit)
- Article → `attachments` repeater
- Event → `attachments` repeater (กำหนดการ PDF, RSVP form)

**Rich media ในเนื้อหา:**
- Article `body_sections` เป็น flexible content มี 4 บล็อก:
  `rich_text` (WYSIWYG พร้อม media upload), `pull_quote`, `image`, `ordered_list`

---

## 6) ตัวอย่าง query (WPGraphQL)

```graphql
# ดึง options ของหน้าแรก + partners + news ล่าสุด
query HomeData {
  identity {
    identity {
      siteName
      tagline
      logo { node { sourceUrl altText } }
      socials { platform label url }
    }
  }
  home {
    home {
      heroLine1
      heroHighlight
      heroLine2
      heroDescription
      marqueeWords { word }
      featuredArticle { ... on Article { id title slug } }
    }
  }
  articles(first: 6, where: { orderby: { field: DATE, order: DESC } }) {
    nodes {
      id slug title date excerpt
      articleFields {
        tagLabel
        readMinutes
        cover { node { sourceUrl altText } }
      }
    }
  }
  partners(first: 50) {
    nodes {
      title
      partnerFields {
        slug
        accent
        logo { node { sourceUrl altText } }
      }
    }
  }
}
```

## 7) Next.js side (สั้นๆ)

- ตั้ง env `WP_GRAPHQL_URL=https://cms.tcca.or.th/graphql`
- ใช้ `fetch(..., { next: { revalidate: 60 } })` เพื่อ ISR
- รูปจาก WP domain → เพิ่มใน `next.config.ts` → `images.remotePatterns`
- Map field จาก ACF ไปยัง component ที่มีอยู่ (โครงสร้าง field ชื่อตรงกับ props
  ใน components เดิมอยู่แล้ว)

---

## 8) Deploy checklist

- [ ] ใส่ CORS allowlist ให้ frontend domain (ใช้ plugin เช่น "WP Headless CORS"
      หรือ filter `graphql_response_headers_to_send`)
- [ ] ตั้ง permalink เป็น `/%postname%/`
- [ ] เปิด revalidate webhook จาก WP → Next.js เมื่อมีการ publish (optional)
- [ ] ตั้ง WPGraphQL Smart Cache keys = `global:*` สำหรับ options pages
