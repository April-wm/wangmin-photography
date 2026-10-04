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
  { id: '01', title: '川西微光', category: 'portrait', location: '自然光人像', year: '2026', src: '/images/portfolio/chuanxi.png', alt: '川西绝美', orientation: 'portrait' },
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
  {
  id: '13',
  title: '自然之美',
  category: 'flower',
  location: '杭州',
  year: '2026',
  src: '/images/portfolio/3_3.jpg',
  alt: '无敌之美花',
  orientation: 'portrait'
},
 {
  id: '14',
  title: '小黄花',
  category: 'flower',
  location: '杭州',
  year: '2026',
  src: '/images/portfolio/hh.jpg',
  alt: '小黄花',
  orientation: 'portrait'
},
   {
  id: '15',
  title: '',
  category: 'flower',
  location: '杭州',
  year: '2026',
  src: '/images/portfolio/4_2.jpg',
  alt: '',
  orientation: 'portrait'
},
  {
  id: '16',
  title: '',
  category: 'flower',
  location: '杭州',
  year: '2026',
  src: '/images/portfolio/DSC_0318.JPG',
  alt: '',
  orientation: 'portrait'
},
    {
  id: '17',
  title: '',
  category: 'flower',
  location: '杭州',
  year: '2026',
  src: '/images/portfolio/Z30_1607-2.jpg',
  alt: '',
  orientation: 'portrait'
},
   {
  id: '18',
  title: '',
  category: 'flower',
  location: '杭州',
  year: '2026',
  src: '/images/portfolio/Z30_1607-2.jpg',
  alt: '',
  orientation: 'portrait'
},
  {
  id: '19',
  title: '',
  category: 'portrait',
  location: '川西',
  year: '2026',
  src: '/images/portfolio/chuanxi2.png',
  alt: '',
  orientation: 'portrait'
},
  {
  id: '20',
  title: '',
  category: 'portrait',
  location: '川西',
  year: '2026',
  src: '/images/portfolio/Z30_2951.jpg',
  alt: '',
  orientation: 'portrait'
},
  {
  id: '21',
  title: '',
  category: 'portrait',
  location: '川西',
  year: '2026',
  src: '/images/portfolio/Z30_1883.jpg',
  alt: '',
  orientation: 'portrait'
},
{
  id: '22',
  title: '',
  category: 'portrait',
  location: '武义',
  year: '2026',
  src: '/images/portfolio/sa.jpg',
  alt: '',
  orientation: 'portrait'
},
  {
  id: '23',
  title: '',
  category: 'landscape',
  location: '川西',
  year: '2026',
  src: '/images/portfolio/snow.jpg',
  alt: '',
  orientation: 'landscape'
},
{
  id: '24',
  title: '',
  category: 'landscape',
  location: '川西',
  year: '2026',
  src: '/images/portfolio/tone.jpg',
  alt: '',
  orientation: 'landscape'
},
  {
  id: '25',
  title: '',
  category: 'landscape',
  location: '宁波',
  year: '2026',
  src: '/images/portfolio/Z30_0582.jpg',
  alt: '',
  orientation: 'portrait'
},
  {
  id: '26',
  title: '',
  category: 'animal',
  location: '成都',
  year: '2026',
  src: '/images/portfolio/Z30_1598.jpg',
  alt: '',
  orientation: 'portrait'
},
 {
  id: '27',
  title: '',
  category: 'animal',
  location: '成都',
  year: '2026',
  src: '/images/portfolio/Z30_1627',
  alt: '',
  orientation: 'portrait'
},
   {
  id: '28',
  title: '',
  category: 'animal',
  location: '成都',
  year: '2026',
  src: '/images/portfolio/Z30_1639.jpg',
  alt: '',
  orientation: 'portrait'
},
  {
  id: '29',
  title: '',
  category: 'animal',
  location: '杭州',
  year: '2026',
  src: '/images/portfolio/Z30_3317.jpg',
  alt: '',
  orientation: 'portrait'
},
 {
  id: '30',
  title: '',
  category: 'street',
  location: '龙游',
  year: '2026',
  src: '/images/portfolio/DSC_3936.JPG',
  alt: '',
  orientation: 'landscape'
},
  {
  id: '31',
  title: '',
  category: 'street',
  location: '龙游',
  year: '2026',
  src: '/images/portfolio/DSC_3972.JPG',
  alt: '',
  orientation: 'landscape'
},
 {
  id: '32',
  title: '',
  category: 'street',
  location: '龙游',
  year: '2026',
  src: '/images/portfolio/DSC_3974.JPG',
  alt: '',
  orientation: 'landscape'
},
   {
  id: '33',
  title: '',
  category: 'street',
  location: '湖州',
  year: '2026',
  src: '/images/portfolio/deng.JPG',
  alt: '',
  orientation: 'landscape'
},
   {
  id: '34',
  title: '',
  category: 'street',
  location: '南浔',
  year: '2026',
  src: '/images/portfolio/Z30_0424.jpg',
  alt: '',
  orientation: 'landscape'
},
   {
  id: '35',
  title: '',
  category: 'street',
  location: '武义',
  year: '2026',
  src: '/images/portfolio/DSC_4074.JPG',
  alt: '',
  orientation: 'portrait'
},
   {
  id: '36',
  title: '',
  category: 'street',
  location: '武义',
  year: '2026',
  src: '/images/portfolio/DSC_4138.jpg',
  alt: '',
  orientation: 'portrait'
},
  {
  id: '37',
  title: '',
  category: 'street',
  location: '运城',
  year: '2026',
  src: '/images/portfolio/Z30_1431.jpg',
  alt: '',
  orientation: 'portrait'
},
  {
  id: '38',
  title: '',
  category: 'street',
  location: '杭州',
  year: '2026',
  src: '/images/portfolio/leifeng.jpg',
  alt: '',
  orientation: 'portrait'
},
   {
  id: '39',
  title: '',
  category: 'street',
  location: '武义',
  year: '2026',
  src: '/images/portfolio/denglong.jpg',
  alt: '',
  orientation: 'landscape'
},
  {
  id: '40',
  title: '',
  category: 'street',
  location: '武义',
  year: '2026',
  src: '/images/portfolio/hebian.jpg',
  alt: '',
  orientation: 'landscape'
},
  {
  id: '41',
  title: '',
  category: 'street',
  location: '武义',
  year: '2026',
  src: '/images/portfolio/hemian.jpg',
  alt: '',
  orientation: 'landscape'
},
];
