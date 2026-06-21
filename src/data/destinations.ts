export interface GalleryPhoto {
  title: string;
  image: string;
  caption: string;
}

export interface Destination {
  slug: string;
  city: string;
  country: string;
  region: string;
  season: string;
  year: string;
  status: string;
  href: string;
  cover: string;
  hero?: string;
  accent?: string;
  summary: string;
  intro?: string;
  notes?: string[];
  gallery?: GalleryPhoto[];
}

export const siteConfig = {
  name: "Walter Mitty",
  title: "Walter Mitty 的旅行手记",
  tagline: "把路上的光、风和偶然相遇，整理成一座可以反复回来的地图。",
  description:
    "一个面向旅行照片、城市漫游和个人随笔的静态博客。先从柏林开始，之后继续收纳世界各地的照片与故事。",
  email: "hello@example.com",
  social: [
    { label: "Instagram", href: "#" },
    { label: "小红书", href: "#" },
    { label: "Email", href: "mailto:hello@example.com" },
  ],
};

export const destinations: Destination[] = [
  {
    slug: "berlin",
    city: "Berlin",
    country: "Germany",
    region: "Europe",
    season: "Early Summer",
    year: "2023",
    status: "已开始整理",
    href: "/berlin/",
    cover: "/assets/images/berlin-cover-editorial.png",
    hero: "/assets/images/berlin-cover-editorial.png",
    accent: "#9f5c35",
    summary:
      "在柏林，历史不是一堵墙，而是街角、河岸和博物馆岛上不断回声的日常。",
    intro:
      "这座城市适合慢慢走。早晨沿着施普雷河看穹顶变亮，下午在画廊和旧书店之间迷路，傍晚把相机收起来，听电车穿过街区。",
    notes: [
      "把 Berlin Cathedral 和 Museum Island 放在同一条步行线里。",
      "留一点时间给没有目的地的街区漫游。",
      "照片建议按晨光、建筑、夜色三个章节整理。",
    ],
    gallery: [
      {
        title: "Berlin Cathedral",
        image: "/assets/images/berlin-cathedral.svg",
        caption: "穹顶、河风和夏天偏长的傍晚。",
      },
      {
        title: "Museum Island",
        image: "/assets/images/berlin-museum.svg",
        caption: "石柱之间的光线，像城市留给行人的停顿。",
      },
      {
        title: "Street Lines",
        image: "/assets/images/berlin-street.svg",
        caption: "电车轨道、咖啡杯和不着急的午后。",
      },
    ],
  },
  {
    slug: "shanghai",
    city: "Shanghai",
    country: "China",
    region: "Asia",
    season: "Night Walk",
    year: "2026",
    status: "已开始整理",
    href: "/shanghai/",
    cover: "/assets/photos/china-shanghai/hero-cover.jpg",
    hero: "/assets/photos/china-shanghai/hero-cover.jpg",
    accent: "#24384a",
    summary:
      "在黄浦江边看城市亮起来，水面把天际线拉长成一段会流动的夜色。",
    intro:
      "上海的夜晚有一种很清晰的层次：江风、灯光、船影和高楼的轮廓。站在外滩边，城市像刚刚打开的胶片，所有反光都在提醒你慢一点看。",
    notes: [
      "把外滩夜景作为这一页的主视觉，先建立上海的城市情绪。",
      "后续可以补充白天街区、咖啡馆、老建筑和黄浦江两岸的对照照片。",
      "照片章节建议按天际线、江边步行、城市细节三个方向扩展。",
    ],
    gallery: [
      {
        title: "Bund Skyline",
        image: "/assets/photos/china-shanghai/hero-cover.jpg",
        caption: "黄浦江上的反光，把上海的夜色铺成一条缓慢移动的路。",
      },
    ],
  },
  {
    slug: "iceland",
    city: "Iceland",
    country: "Iceland",
    region: "Nordic",
    season: "To be planned",
    year: "Next",
    status: "待补照片",
    href: "#photo-slots",
    cover: "/assets/images/photo-placeholder-postcards.png",
    summary:
      "为瀑布、黑沙滩和极光预留的章节。适合做成宽幅照片和路线日志。",
  },
  {
    slug: "tokyo",
    city: "Tokyo",
    country: "Japan",
    region: "Asia",
    season: "Cloudy Day",
    year: "2026",
    status: "已开始整理",
    href: "/tokyo/",
    cover: "/assets/photos/japan-tokyo/hero-cover.jpg",
    hero: "/assets/photos/japan-tokyo/hero-cover.jpg",
    accent: "#6f4b3e",
    summary:
      "在东京的灰蓝天光下，红砖钟楼把城市的安静一面留在镜头里。",
    intro:
      "东京不只有霓虹和人潮，也有被云层压低的校园、湿润的石板路和红砖建筑的沉稳线条。这一页先从一座钟楼开始，记录城市里更安静的侧面。",
    notes: [
      "把红砖钟楼作为东京页的第一张主视觉，先记录建筑和天气带来的氛围。",
      "后续可以补充街区散步、车站、咖啡馆和夜色里的城市细节。",
      "照片章节建议按校园建筑、街道秩序、夜晚霓虹三个方向扩展。",
    ],
    gallery: [
      {
        title: "Red Brick Clock Tower",
        image: "/assets/photos/japan-tokyo/hero-cover.jpg",
        caption: "阴天让红砖和钟面显得更安静，像东京慢下来的一次呼吸。",
      },
    ],
  },
  {
    slug: "morocco",
    city: "Morocco",
    country: "Morocco",
    region: "Africa",
    season: "To be planned",
    year: "Next",
    status: "待补照片",
    href: "#photo-slots",
    cover: "/assets/images/photo-placeholder-postcards.png",
    summary:
      "沙丘、蓝色山城和集市纹理。适合做成色彩浓烈的图文系列。",
  },
];

export const journalPrompts = [
  {
    title: "到达",
    kicker: "Arrival",
    copy:
      "写下第一眼看见这个城市时的细节：空气、路牌、噪音、第一顿饭，以及你还没拍照就想记住的瞬间。",
  },
  {
    title: "路线",
    kicker: "Route",
    copy:
      "记录真实走过的路线，而不是完美攻略。让后来的人知道哪些地方值得慢下来，哪些地方只是路过也很好。",
  },
  {
    title: "照片背后",
    kicker: "Behind The Frame",
    copy:
      "每组照片配一段小注释：拍摄时间、光线、当时的心情，以及为什么选择留下这一张。",
  },
];

export const photoSlots = [
  "hero-cover.jpg - 首页主视觉",
  "country-city-cover.jpg - 国家/城市封面",
  "gallery-01.jpg - 街道或建筑",
  "gallery-02.jpg - 人物或餐桌",
  "gallery-03.jpg - 夜色或天气",
  "map-route.png - 路线截图",
  "postcard-detail.jpg - 纪念品细节",
  "journal-thumb.jpg - 手记缩略图",
];
