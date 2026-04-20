/**
 * Fallback content used only when the CMS hasn't been populated yet.
 * These values mirror the original hardcoded copy the site was launched with —
 * the moment an editor fills the matching field in WordPress, the CMS value
 * wins.
 */

import type {
  AboutCms,
  ArticleCms,
  Bootstrap,
  EventCms,
  HomeCms,
  PartnersCms,
  PillarCms,
  RegisterCms,
} from "./cms";

export const fbBootstrap: Bootstrap = {
  identity: {
    logo: null,
    logo_white: null,
    site_name: "Thailand Content Creator Associaton",
    tagline: "ออกแบบและพัฒนาด้วยความภูมิใจ · สำหรับชุมชนครีเอเตอร์ไทย",
    description:
      "สมาคมผู้สร้างสรรค์คอนเทนต์แห่งประเทศไทย — รวมพลังคอนเทนต์ครีเอเตอร์ อินฟลูเอนเซอร์ และนักขายออนไลน์ เพื่อยกระดับวงการสื่อสร้างสรรค์ของไทย สู่มาตรฐานวิชาชีพระดับสากล",
    favicon: null,
    default_og_image: null,
    brand_avatar: null,
    contact_email: "contact@tcca.or.th",
    contact_address: "",
    socials: [
      { platform: "facebook", label: "Facebook", url: "#" },
      { platform: "instagram", label: "Instagram", url: "#" },
      { platform: "tiktok", label: "TikTok", url: "#" },
      { platform: "youtube", label: "YouTube", url: "#" },
      { platform: "x", label: "X", url: "#" },
      { platform: "line", label: "LINE", url: "#" },
    ],
    brand_assets: [],
  },
  navigation: {
    primary_menu: [
      { href: "/about", label: "เกี่ยวกับสมาคม" },
      { href: "/#pillars", label: "พันธกิจ" },
      { href: "/#events", label: "กิจกรรม" },
      { href: "/news", label: "ข่าวสาร" },
      { href: "/tags", label: "แท็ก" },
      { href: "/#partners", label: "เครือข่าย" },
    ],
    cta_label: "สมัครสมาชิก",
    cta_href: "/register",
  },
  footer: {
    description:
      "สมาคมผู้สร้างสรรค์คอนเทนต์แห่งประเทศไทย — รวมพลังคอนเทนต์ครีเอเตอร์ อินฟลูเอนเซอร์ และนักขายออนไลน์ เพื่อยกระดับวงการสื่อสร้างสรรค์ของไทย สู่มาตรฐานวิชาชีพระดับสากล",
    columns: [
      {
        title: "เกี่ยวกับ",
        items: [
          { label: "วิสัยทัศน์และพันธกิจ", href: "#about" },
          { label: "คณะกรรมการ", href: "#committee" },
          { label: "สมัครสมาชิก", href: "#join" },
          { label: "ร่วมงานกับเรา", href: "#careers" },
        ],
      },
      {
        title: "กิจกรรม",
        items: [
          { label: "ข่าวสาร & แถลงการณ์", href: "#news" },
          { label: "งานอีเวนต์", href: "#events" },
          { label: "โครงการฝึกอบรม", href: "#programs" },
          { label: "Thailand Creator Awards", href: "#awards" },
        ],
      },
      {
        title: "ติดต่อ",
        items: [
          { label: "contact@tcca.or.th", href: "mailto:contact@tcca.or.th" },
          { label: "พาร์ทเนอร์และสปอนเซอร์", href: "#partners" },
          { label: "ข้อกำหนดและเงื่อนไข", href: "#terms" },
          { label: "นโยบายความเป็นส่วนตัว", href: "#privacy" },
        ],
      },
    ],
    copyright: "© {year} Thailand Content Creator Associaton. All rights reserved.",
    tagline: "ออกแบบและพัฒนาด้วยความภูมิใจ · สำหรับชุมชนครีเอเตอร์ไทย",
  },
};

export const fbHome: HomeCms = {
  hero: {
    line1: "บ้านของ",
    highlight: "คอนเทนต์ครีเอเตอร์",
    line2: "ของประเทศไทย",
    description:
      "<p><strong>Thailand Content Creator Associaton</strong> รวมพลังครีเอเตอร์ อินฟลูเอนเซอร์ และนักขายออนไลน์ เพื่อยกระดับมาตรฐานวิชาชีพ สร้างโอกาส และขับเคลื่อน Creator Economy ของไทยให้เติบโตอย่างสร้างสรรค์และยั่งยืน</p>",
    primary_cta_label: "ร่วมเป็นสมาชิก",
    primary_cta_href: "/register",
    secondary_cta_label: "รู้จักเรามากขึ้น",
    secondary_cta_href: "/about",
    visual: null,
    og_image: null,
    marquee: [
      "CREATE",
      "CONNECT",
      "COLLABORATE",
      "CULTIVATE",
      "COMMUNITY",
      "CREATIVITY",
      "CREDIBILITY",
    ],
  },
  about: {
    eyebrow: "About TCCA",
    title:
      "สมาคมที่สร้างขึ้น<br><span class=\"brand-gradient-text\">โดยครีเอเตอร์</span><br>เพื่อครีเอเตอร์",
    description:
      "TCCA เป็นองค์กรกลางที่รวบรวมคอนเทนต์ครีเอเตอร์ อินฟลูเอนเซอร์ นักขายออนไลน์ และผู้ประกอบการในอุตสาหกรรมสร้างสรรค์ ทำหน้าที่เป็นกระบอกเสียง สร้างมาตรฐานวิชาชีพ และผลักดันให้อุตสาหกรรมครีเอเตอร์ของไทยเติบโตเคียงข้างเศรษฐกิจดิจิทัลระดับโลก",
    quote:
      "เราเชื่อว่าครีเอเตอร์ไทยมีศักยภาพระดับโลก — สิ่งที่ต้องการคือโครงสร้างที่รองรับ และชุมชนที่เข้าใจกัน",
    quote_caption: "TCCA Manifesto",
    cards: [
      {
        tone: "navy",
        kicker: "Vision",
        title: "ยกระดับ Creator Economy ไทย",
        body: "ผลักดันอุตสาหกรรมคอนเทนต์ให้เติบโตเป็นเสาหลักเศรษฐกิจสร้างสรรค์ใหม่ของประเทศ",
        icon: "eye",
        span_two: true,
      },
      {
        tone: "orange",
        kicker: "Mission",
        title: "มาตรฐานวิชาชีพ",
        body: "สร้างเกณฑ์มาตรฐานความโปร่งใส ความปลอดภัย และจริยธรรมในการสร้างคอนเทนต์",
        icon: "target",
        span_two: false,
      },
      {
        tone: "cream",
        kicker: "Community",
        title: "ชุมชนที่สนับสนุนกัน",
        body: "เวที Workshop, Mentorship และเครือข่ายที่ช่วยให้ครีเอเตอร์เติบโตได้เร็วขึ้น",
        icon: "people",
        span_two: false,
      },
      {
        tone: "gradient",
        kicker: "Impact",
        title: "สร้างโอกาส · สร้างความรู้ · สร้างความร่วมมือ",
        body: "ทำงานร่วมกับภาครัฐ เอกชน และแพลตฟอร์ม เพื่อปลดล็อกโอกาสใหม่ ๆ ให้กับครีเอเตอร์ไทย",
        icon: "infinity",
        span_two: true,
      },
    ],
  },
  pillars_section: {
    eyebrow: "Our Pillars",
    title:
      "6 พันธกิจหลัก<br>ที่ขับเคลื่อน<span class=\"text-orange-tcca\"> วงการครีเอเตอร์ไทย</span>",
    subtitle:
      "TCCA ทำงานตลอดทั้งปีเพื่อให้ครีเอเตอร์ไทยมีมาตรฐาน โอกาส และเครื่องมือที่ดีที่สุดในการเติบโต",
  },
  events_section: {
    eyebrow: "Events & Agenda",
    title: "มาเจอกัน<br>ที่งานของเรา",
    featured_event: null,
    upcoming_events: [],
  },
  news_section: {
    eyebrow: "Newsroom",
    title:
      "ข่าวสารและ<br><span class=\"brand-gradient-text\">บทความล่าสุด</span>",
    featured_article: null,
    insight_article: null,
    community_article: null,
    insight_big_number: "2026",
    insight_subtitle: "โตอย่างไร · โตไปทางไหน",
    community_highlight: "1,000 คนแรก",
  },
  partners_section: {
    eyebrow: "Partners & Network",
    title: "เครือข่ายที่ร่วมขับเคลื่อน<br>วงการครีเอเตอร์ไปด้วยกัน",
  },
  join: {
    eyebrow: "Membership · Founding Class",
    title:
      "เข้าร่วมเป็น<br><span class=\"brand-gradient-text\">ครอบครัว TCCA</span>",
    description:
      "เปิดรับสมาชิกรุ่นก่อตั้ง 1,000 คนแรก รับสิทธิประโยชน์พิเศษและเป็นส่วนหนึ่งในการวางรากฐานวงการครีเอเตอร์ไทย ร่วมกับเรา",
    primary_cta_label: "สมัครสมาชิกตอนนี้",
    primary_cta_href: "/register",
    secondary_cta_label: "ติดต่อสมาคม",
    secondary_cta_href: "mailto:contact@tcca.or.th",
    benefits: [
      "Workshop & Masterclass ฟรีตลอดปีแรก",
      "เข้าถึงเครือข่ายครีเอเตอร์และแบรนด์พาร์ทเนอร์",
      "ปรึกษากฎหมาย สัญญา ลิขสิทธิ์ และภาษี",
      "ส่วนลดและสิทธิพิเศษจากพาร์ทเนอร์",
      "ใบรับรองมาตรฐานวิชาชีพ TCCA",
      "สิทธิ์โหวตในทิศทางของสมาคม",
    ],
    note_title: "ฟรีค่าสมัคร ตลอดปีแรก",
    note_body: "สำหรับสมาชิกรุ่นก่อตั้งเท่านั้น · จำนวนจำกัด",
    benefits_avatar: null,
  },
};

export const fbPillars: PillarCms[] = [
  {
    n: "01",
    title: "มาตรฐานวิชาชีพ",
    description:
      "พัฒนากรอบจรรยาบรรณ มาตรฐานการทำงาน และแนวปฏิบัติที่ดีให้วงการคอนเทนต์ไทย",
    color_from: "#ff5a8a",
    color_to: "#e87a26",
  },
  {
    n: "02",
    title: "พัฒนาทักษะ",
    description:
      "Workshop, Masterclass และ Mentorship จากผู้เชี่ยวชาญในอุตสาหกรรม ตลอดทั้งปี",
    color_from: "#e87a26",
    color_to: "#f9e24a",
  },
  {
    n: "03",
    title: "โอกาสทางธุรกิจ",
    description:
      "จับคู่ครีเอเตอร์กับแบรนด์ แพลตฟอร์ม และเอเจนซี่อย่างเป็นธรรมและโปร่งใส",
    color_from: "#f9e24a",
    color_to: "#b2ea3a",
  },
  {
    n: "04",
    title: "คุ้มครองสิทธิ์",
    description:
      "ให้คำปรึกษาด้านสัญญา ลิขสิทธิ์ ภาษี และความปลอดภัยบนโลกออนไลน์",
    color_from: "#b2ea3a",
    color_to: "#3ed0e6",
  },
  {
    n: "05",
    title: "Research & Insight",
    description:
      "จัดทำรายงานอุตสาหกรรมครีเอเตอร์ไทย ข้อมูลที่ใช้ได้จริงสำหรับตัดสินใจทางธุรกิจ",
    color_from: "#3ed0e6",
    color_to: "#8a5cff",
  },
  {
    n: "06",
    title: "เชื่อมภาครัฐ-เอกชน",
    description:
      "เป็นกระบอกเสียงและสะพานเชื่อม เพื่อผลักดันนโยบายที่เอื้อต่อการเติบโตของวงการ",
    color_from: "#8a5cff",
    color_to: "#ff5a8a",
  },
];

export const fbPartners: PartnersCms = {
  section: {
    eyebrow: "Partners & Network",
    title: "เครือข่ายที่ร่วมขับเคลื่อน<br>วงการครีเอเตอร์ไปด้วยกัน",
  },
  items: [
    { slug: "gmm-grammy", name: "GMM Grammy", accent: "navy", website: "", logo: null },
    { slug: "woody-world", name: "Woody World", accent: "orange", website: "", logo: null },
    { slug: "youweevee", name: "YouWeeVee", accent: "navy", website: "", logo: null },
    { slug: "salmon-house", name: "Salmon House", accent: "orange", website: "", logo: null },
    { slug: "tellscore", name: "Tellscore", accent: "gradient", website: "", logo: null },
    { slug: "icreator", name: "iCreator", accent: "navy", website: "", logo: null },
    { slug: "the-zero", name: "The Zero", accent: "navy", website: "", logo: null },
    { slug: "buff-geek", name: "Buff Geek", accent: "orange", website: "", logo: null },
    { slug: "scbx-next-tech", name: "SCBX Next Tech", accent: "gradient", website: "", logo: null },
    { slug: "siam-paragon", name: "Siam Paragon", accent: "navy", website: "", logo: null },
    { slug: "ransom", name: "Ransom", accent: "orange", website: "", logo: null },
    { slug: "bangkok-post", name: "Bangkok Post", accent: "navy", website: "", logo: null },
  ],
};

export const fbEventsFeatured: EventCms = {
  id: 0,
  slug: "tcca-launch-2026",
  title: "แถลงข่าวเปิดตัวสมาคมอย่างเป็นทางการ",
  excerpt:
    "ร่วมเป็นสักขีพยานวันสำคัญของวงการครีเอเตอร์ไทย พร้อมประกาศวิสัยทัศน์ คณะกรรมการสมาคม และเวทีเสวนาพิเศษ \u201cอนาคตวงการและวิชาชีพ\u201d โดยผู้นำอุตสาหกรรมตัวจริง",
  event_date: "2026-04-27",
  time_start: "13:00",
  time_end: "16:00",
  date_display_th: "27 เม.ย. 69",
  day_label: "27",
  month_label: "APR",
  tag: "Press Conference",
  host: "TCCA",
  venue: "SCBX Next Tech · ชั้น 4 ศูนย์การค้าสยามพารากอน",
  is_featured: true,
  featured_eyebrow: "Press Conference · Grand Opening",
  featured_title:
    "แถลงข่าว<br><span class=\"brand-gradient-text\">เปิดตัวสมาคม</span><br>อย่างเป็นทางการ",
  agenda: [
    { time: "13:00", label: "ลงทะเบียนผู้เข้าร่วมงาน" },
    { time: "13:30", label: "Opening Session · VTR แนะนำสมาคม" },
    { time: "13:35", label: "วิสัยทัศน์และวัตถุประสงค์" },
    { time: "13:50", label: "ที่ปรึกษา & คณะกรรมการสมาคม" },
    { time: "14:20", label: "เวทีเสวนา · อนาคตวงการและวิชาชีพ" },
    { time: "15:20", label: "ถ่ายภาพร่วมกัน" },
    { time: "15:30", label: "สัมภาษณ์สื่อมวลชน" },
  ],
  cta_label: "ลงทะเบียนเข้าร่วมงาน",
  cta_href: "#",
  cover: null,
  sticker: null,
  og_image: null,
  venue_map: null,
  gallery: [],
  attachments: [],
};

export const fbEventsUpcoming: EventCms[] = [
  {
    ...fbEventsFeatured,
    id: -1,
    slug: "creator-masterclass-storytelling",
    title: "Creator Masterclass · Storytelling for Short-form",
    date_display_th: "15 พ.ค. 69",
    day_label: "15",
    month_label: "MAY",
    tag: "Workshop",
    host: "TCCA × iCreator",
    is_featured: false,
  },
  {
    ...fbEventsFeatured,
    id: -2,
    slug: "roundtable-affiliate-live-commerce",
    title: "Roundtable: อนาคต Affiliate & Live Commerce ไทย",
    date_display_th: "04 มิ.ย. 69",
    day_label: "04",
    month_label: "JUN",
    tag: "Roundtable",
    host: "TCCA",
    is_featured: false,
  },
  {
    ...fbEventsFeatured,
    id: -3,
    slug: "thailand-creator-summit-2026",
    title: "Thailand Creator Summit 2026",
    date_display_th: "22 ก.ค. 69",
    day_label: "22",
    month_label: "JUL",
    tag: "Summit",
    host: "TCCA × Partners",
    is_featured: false,
  },
];

const blankArticle = (over: Partial<ArticleCms>): ArticleCms => ({
  id: 0,
  slug: "",
  title: "",
  excerpt: "",
  date: "",
  date_th: "",
  subtitle: "",
  tag_label: "",
  categories: [],
  read_minutes: 4,
  is_featured: false,
  author_display: "Newsroom",
  author_role: "TCCA Official",
  cover: null,
  cover_caption: "",
  og_image: null,
  body_html: "",
  hashtags: [],
  toc: [],
  related: [],
  gallery: [],
  attachments: [],
  ...over,
});

export const fbArticles: ArticleCms[] = [
  blankArticle({
    slug: "tcca-launch-2026",
    tag_label: "แถลงการณ์",
    title:
      "TCCA เปิดตัวอย่างเป็นทางการ พร้อมประกาศวิสัยทัศน์ยกระดับวงการครีเอเตอร์ไทย",
    excerpt:
      "สมาคมผู้สร้างสรรค์คอนเทนต์แห่งประเทศไทยเปิดตัวอย่างเป็นทางการ ณ SCBX Next Tech พร้อมเวทีเสวนาพิเศษโดยผู้นำอุตสาหกรรม",
    date_th: "27 เม.ย. 2569",
    read_minutes: 4,
    is_featured: true,
  }),
  blankArticle({
    slug: "creator-economy-report-2026",
    tag_label: "Insight",
    title: "Creator Economy Thailand Report 2026 — โตอย่างไร โตไปทางไหน",
    excerpt:
      "รายงานข้อมูลเชิงลึกฉบับแรกของ TCCA พร้อมตัวเลขสำคัญที่แบรนด์และครีเอเตอร์ต้องรู้ในปีนี้",
    date_th: "10 เม.ย. 2569",
    read_minutes: 8,
  }),
  blankArticle({
    slug: "founding-members-1000",
    tag_label: "Community",
    title: "เปิดรับสมาชิกรุ่นก่อตั้ง 1,000 คนแรก",
    excerpt:
      "Workshop ฟรีตลอดปีแรก เครือข่ายพาร์ทเนอร์ และสิทธิพิเศษอีกมากมายสำหรับครีเอเตอร์ที่เข้าร่วมในรอบก่อตั้ง",
    date_th: "01 เม.ย. 2569",
    read_minutes: 3,
  }),
  blankArticle({
    slug: "creator-summit-2026",
    tag_label: "Events",
    title: "Thailand Creator Summit 2026 เตรียมจัดเดือนกรกฎาคม",
    excerpt:
      "เวทีรวมครีเอเตอร์ แบรนด์ และแพลตฟอร์มชั้นนำของไทย พร้อมประกาศ Speaker Lineup ในเร็วๆ นี้",
    date_th: "22 มี.ค. 2569",
    read_minutes: 5,
  }),
  blankArticle({
    slug: "creator-standards-draft",
    tag_label: "Policy",
    title: "ร่างมาตรฐานวิชาชีพครีเอเตอร์ไทย ฉบับที่ 1",
    excerpt:
      "TCCA เปิดร่างมาตรฐานวิชาชีพให้สมาชิกร่วมเสนอความเห็น ก่อนประกาศใช้เป็นแนวทางอ้างอิงของวงการ",
    date_th: "14 มี.ค. 2569",
    read_minutes: 6,
  }),
  blankArticle({
    slug: "brand-match-program",
    tag_label: "Program",
    title: "เปิดตัว TCCA Match — ระบบจับคู่ครีเอเตอร์กับแบรนด์",
    excerpt:
      "แพลตฟอร์มภายในสำหรับสมาชิก ช่วยจับคู่งานและพาร์ทเนอร์ที่ตรงกับสไตล์และผู้ติดตามของคุณ",
    date_th: "02 มี.ค. 2569",
    read_minutes: 4,
  }),
  blankArticle({
    slug: "masterclass-series-launch",
    tag_label: "Education",
    title: "Masterclass Series ซีซันแรก เปิดให้สมาชิกลงทะเบียนแล้ว",
    excerpt:
      "8 คลาสจากผู้นำอุตสาหกรรม ครอบคลุมตั้งแต่ Storytelling, Brand Deal ไปจนถึง Tax & Legal สำหรับครีเอเตอร์",
    date_th: "20 ก.พ. 2569",
    read_minutes: 5,
  }),
  blankArticle({
    slug: "advisory-board-announcement",
    tag_label: "แถลงการณ์",
    title: "ประกาศคณะที่ปรึกษาสมาคม ชุดก่อตั้ง",
    excerpt:
      "8 ผู้นำจากวงการสื่อ เอเจนซี่ และแพลตฟอร์มดิจิทัล เข้าร่วมเป็นที่ปรึกษาของ TCCA",
    date_th: "12 ก.พ. 2569",
    read_minutes: 3,
  }),
  blankArticle({
    slug: "research-call-2026",
    tag_label: "Insight",
    title: "เปิดรับงานวิจัยร่วม Creator Economy 2026",
    excerpt:
      "TCCA ร่วมกับมหาวิทยาลัยพันธมิตร เปิดรับโจทย์วิจัยเชิงลึกเกี่ยวกับเศรษฐกิจครีเอเตอร์ไทย",
    date_th: "01 ก.พ. 2569",
    read_minutes: 4,
  }),
];

export const fbAbout: AboutCms = {
  hero: {
    eyebrow: "About us",
    title:
      "สมาคมที่สร้างขึ้น<br><span class=\"brand-gradient-text\">โดยครีเอเตอร์</span> เพื่อครีเอเตอร์",
    description:
      "TCCA คือองค์กรกลางที่รวบรวมคอนเทนต์ครีเอเตอร์ อินฟลูเอนเซอร์ นักขายออนไลน์ และผู้ประกอบการในอุตสาหกรรมสร้างสรรค์ — เพื่อขับเคลื่อน Creator Economy ไทยสู่มาตรฐานสากล",
    accent_image: null,
    og_image: null,
  },
  north_star: {
    eyebrow: "Our North Star",
    title: "ทำให้ครีเอเตอร์ไทย<br>เป็นวิชาชีพที่ภูมิใจ<br>และเติบโตอย่างยั่งยืน",
    caption: "TCCA Manifesto · 2026",
  },
  story: {
    eyebrow: "Our Story",
    title:
      "จากวันที่ครีเอเตอร์<br>เป็นอาชีพที่ถูก<span class=\"brand-gradient-text\"> มองข้าม</span>",
    body:
      "<p>ปี 2020 คอนเทนต์ครีเอเตอร์ไทยกระโดดจากงานอดิเรกกลายเป็นอาชีพหลักของคนรุ่นใหม่ นับล้านคน — แต่โครงสร้างรองรับยังเป็นศูนย์ ไม่มีมาตรฐานสัญญา ไม่มีการคุ้มครองลิขสิทธิ์ และไม่มีเสียงที่ดังพอต่อภาครัฐและแพลตฟอร์ม</p><p>TCCA ก่อตัวขึ้นจากครีเอเตอร์ตัวจริงที่เจอปัญหาเดียวกัน เรารวมพลังเพื่อเปลี่ยนวงการจาก <strong>ตัวใครตัวมัน</strong> เป็น <strong>ชุมชนที่มีมาตรฐาน</strong> — เปิดโอกาสให้ครีเอเตอร์ทุกระดับเติบโตอย่างมั่นคง</p>",
    image: null,
  },
  values_section: {
    eyebrow: "Our Values",
    title: "4 คุณค่าที่<br>ยึดถือร่วมกัน",
    values: [
      { number: "01", title: "Open", body: "เปิดกว้างสำหรับครีเอเตอร์ทุกขนาด ทุกแพลตฟอร์ม ทุกสไตล์ ไม่จำกัดแบบ", tone: "navy" },
      { number: "02", title: "Ethical", body: "เคารพจริยธรรมและข้อมูลผู้บริโภค — Creator ต้องน่าเชื่อถือระยะยาว", tone: "orange" },
      { number: "03", title: "Practical", body: "ลงมือทำจริงด้วยโปรแกรม Workshop, Mentorship และ Tooling ที่ใช้ได้", tone: "cream" },
      { number: "04", title: "Ambitious", body: "ผลักดันครีเอเตอร์ไทยสู่เวทีภูมิภาคและระดับโลกอย่างมีมาตรฐาน", tone: "gradient" },
    ],
  },
  timeline: {
    eyebrow: "Journey",
    title: "เส้นทางของเรา",
    items: [
      { year: "2024", title: "รวมตัวครั้งแรก", body: "กลุ่มครีเอเตอร์ อินฟลูเอนเซอร์ และผู้นำอุตสาหกรรมเริ่มประชุมร่วมกัน เพื่อร่างแนวทางจัดตั้งสมาคม", image: null },
      { year: "2025", title: "จดทะเบียนสมาคม", body: "จดทะเบียนเป็นสมาคมผู้สร้างสรรค์คอนเทนต์แห่งประเทศไทยอย่างเป็นทางการ และเปิดรับสมาชิกรุ่นก่อตั้ง", image: null },
      { year: "2026", title: "เปิดตัวสู่สาธารณะ", body: "จัดงานแถลงข่าวเปิดตัวสมาคมที่ SCBX Next Tech พร้อมประกาศทิศทาง 3 ปีแรก", image: null },
      { year: "ต่อไป", title: "Creator Summit 2026", body: "จัดงาน Thailand Creator Summit ครั้งแรก รวบรวมแบรนด์ แพลตฟอร์ม และครีเอเตอร์บนเวทีเดียวกัน", image: null },
    ],
  },
  committee: {
    eyebrow: "Committee",
    title: "คณะทำงานของ<br>สมาคม",
    description:
      "ทีมที่อยู่เบื้องหลัง TCCA คือผู้นำจริงในวงการครีเอเตอร์ สื่อ เอเจนซี่ และแพลตฟอร์มดิจิทัล ที่รู้ปัญหาและรับฟังชุมชน",
    groups: [
      { name: "คณะที่ปรึกษา", role_en: "Advisors", count_label: "8 ท่าน", members: [] },
      { name: "คณะกรรมการบริหาร", role_en: "Executive Committee", count_label: "12 ท่าน", members: [] },
      { name: "อนุกรรมการวิชาชีพ", role_en: "Professional Standards", count_label: "15 ท่าน", members: [] },
      { name: "อนุกรรมการกิจกรรม", role_en: "Events & Programs", count_label: "10 ท่าน", members: [] },
    ],
  },
  final_cta: {
    eyebrow: "Join us",
    title: "อยากเป็นส่วนหนึ่ง<br>ของเรา?",
    description:
      "เปิดรับสมาชิกรุ่นก่อตั้ง 1,000 คนแรก — ร่วมวางรากฐานวงการครีเอเตอร์ไทยไปด้วยกัน",
    label: "สมัครสมาชิก",
    href: "/register",
  },
};

export const fbRegister: RegisterCms = {
  hero: {
    eyebrow: "Membership",
    title: "สมัครสมาชิก<br><span class=\"brand-gradient-text\">ฟรี ไม่มีค่าใช้จ่าย</span>",
    description:
      "TCCA เปิดรับครีเอเตอร์ทุกระดับเข้าร่วมเป็นสมาชิกโดยไม่มีค่าใช้จ่าย — ร่วมเป็นส่วนหนึ่งในการวางรากฐานวงการครีเอเตอร์ไทยไปด้วยกัน",
    og_image: null,
    accent_image: null,
    price_badge: "ฟรี",
    price_note: "ไม่มีค่าธรรมเนียม · ไม่มีรายปี",
  },
  benefits: {
    eyebrow: "Benefits",
    title: "สิ่งที่สมาชิก<br>จะได้รับ",
    subtitle:
      "ทุกสิทธิประโยชน์เปิดให้สมาชิกทุกคนโดยไม่มีค่าใช้จ่าย — ไม่ต้องเลือกแพ็กเกจ ไม่ต้องอัปเกรด",
    list: [
      { number: "01", title: "Workshop & Masterclass ฟรี", body: "เข้าถึงคลาสและเวิร์กช็อปจากผู้นำอุตสาหกรรมตลอดทั้งปี", icon: null },
      { number: "02", title: "เครือข่ายครีเอเตอร์", body: "เข้ากลุ่มไพรเวต พบปะครีเอเตอร์ แบรนด์ และแพลตฟอร์มชั้นนำ", icon: null },
      { number: "03", title: "จับคู่แบรนด์ผ่าน TCCA Match", body: "ระบบแนะนำงานและพาร์ทเนอร์ที่เหมาะกับสไตล์คุณ", icon: null },
      { number: "04", title: "ปรึกษาสัญญาและลิขสิทธิ์", body: "ทีมที่ปรึกษาช่วยตรวจสัญญาและคุ้มครองสิทธิ์ของคุณ", icon: null },
      { number: "05", title: "Newsletter & Insight", body: "รับ Insight วงการก่อนใคร พร้อมรายงานและข้อมูลเชิงลึกประจำเดือน", icon: null },
      { number: "06", title: "ใบรับรองมาตรฐานวิชาชีพ", body: "Badge และเอกสารยืนยันสถานะสมาชิก TCCA อย่างเป็นทางการ", icon: null },
    ],
  },
  form: {
    eyebrow: "Application",
    title: "สมัครสมาชิก<br>ใช้เวลาเพียง 3 นาที",
    channel_options: ["YouTube", "TikTok", "Instagram", "Facebook", "X", "LINE"],
    submit_label: "ส่งใบสมัคร",
    terms_html:
      "ยอมรับ <a href=\"#\" class=\"font-semibold text-navy-700 underline\">ข้อกำหนด</a> และ <a href=\"#\" class=\"font-semibold text-navy-700 underline\">นโยบายความเป็นส่วนตัว</a> ของ TCCA",
  },
  steps: [
    { number: "01", title: "กรอกข้อมูล", body: "ใช้เวลา 3 นาที — ข้อมูลพื้นฐานและลิงก์ช่องทางหลักของคุณ" },
    { number: "02", title: "ยืนยันตัวตน", body: "ทีมงานตรวจสอบความถูกต้องและช่องทางของคุณภายใน 48 ชม." },
    { number: "03", title: "Welcome Pack", body: "รับอีเมลยืนยันพร้อมเข้าถึงทรัพยากรของสมาชิกและกลุ่มไพรเวต" },
  ],
  fee_note: {
    title: "สมัครฟรี ไม่มีเงื่อนไข",
    body: "TCCA เปิดรับครีเอเตอร์ทุกระดับโดยไม่มีค่าธรรมเนียม ไม่มีรายปี — เพราะเราเชื่อว่าทุกคนควรเข้าถึงโอกาสนี้ได้",
  },
};
