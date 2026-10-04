export type Category = 'portrait' | 'street' | 'landscape' | 'flower' | 'other';

export type Photo = {
  id: string;
  title: string;
  category: Category;
  location: string;
  year: string;
  src: string;
  alt: string;
  orientation: 'portrait' | 'landscape' | 'square';
};

export const categoryLabels: Record<Category, string> = {
  portrait: '人像',
  street: '街拍',
  landscape: '风景',
  flower: '花卉',
  animals: '动物',
  other: '其他',
};

// 图片的网页版本放在 public/images/portfolio。原始文件仍保留在 D:\照片\原图。
export const photos: Photo[] = [
  { id: '01', title: '林间微光', category: 'portrait', location: '自然光人像', year: '2026', src: '/images/portfolio/portrait-forest.jpg', alt: '林间侧脸人像', orientation: 'portrait' },
  { id: '02', title: '雪山来信', category: 'landscape', location: '四姑娘山', year: '2026', src: '/images/portfolio/mountain-bright.jpg', alt: '晴空下的雪山', orientation: 'landscape' },
  { id: '03', title: '山寺之前', category: 'portrait', location: '川西', year: '2026', src: '/images/portfolio/portrait-fan.jpg', alt: '手持扇子的民族风人像', orientation: 'landscape' },
  { id: '04', title: '山中白塔', category: 'other', location: '川西', year: '2026', src: '/images/portfolio/temple.jpg', alt: '山间白塔', orientation: 'portrait' },
  { id: '04a', title: '巷子深处', category: 'street', location: '宽窄巷子', year: '2026', src: '/images/portfolio/street-alley.jpg', alt: '夜色里的宽窄巷子招牌', orientation: 'landscape' },
  { id: '05', title: '沉静山脊', category: 'landscape', location: '四姑娘山', year: '2026', src: '/images/portfolio/mountain-dark.jpg', alt: '云层下的深色山脊', orientation: 'landscape' },
  { id: '06', title: '湖畔夏日', category: 'portrait', location: '自然光人像', year: '2026', src: '/images/portfolio/portrait-water.jpg', alt: '湖边白裙人像', orientation: 'portrait' },
  { id: '07', title: '一朵红玫瑰', category: 'flower', location: '花卉练习', year: '2026', src: '/images/portfolio/rose.jpg', alt: '深色背景中的红玫瑰', orientation: 'portrait' },
  { id: '08', title: '雪线之上', category: 'landscape', location: '四姑娘山', year: '2026', src: '/images/portfolio/mountain-snow.jpg', alt: '雪山与松林', orientation: 'landscape' },
  { id: '09', title: '风从经幡吹过', category: 'portrait', location: '川西', year: '2026', src: '/images/portfolio/portrait-flags.jpg', alt: '经幡前的人像', orientation: 'portrait' },
  { id: '10', title: '远山与湖', category: 'landscape', location: '山水练习', year: '2026', src: '/images/portfolio/lake.jpg', alt: '远山和湖面', orientation: 'landscape' },
  { id: '11', title: '绿意之中', category: 'portrait', location: '自然光人像', year: '2026', src: '/images/portfolio/portrait-garden.jpg', alt: '花园中的白裙人像', orientation: 'portrait' },
  { id: '12', title: '金色时刻', category: 'portrait', location: '自然光人像', year: '2026', src: '/images/portfolio/portrait-golden.jpg', alt: '金色植物旁的人像', orientation: 'portrait' },
];
