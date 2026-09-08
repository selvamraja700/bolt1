export const BUSINESS = {
  name: 'The Mush Club',
  tagline: 'MYCOLOGY SUPPLY CO.',
  established: '2022',
  location: 'Abishekapatti, Tirunelveli, Tamil Nadu, India',
  locationShort: 'Tirunelveli · India',
  phone: '+91 73958 41171',
  phoneRaw: '+917395841171',
  whatsapp: 'https://wa.me/917395841171',
  email: 'themushclub.in@gmail.com',
  canonicalUrl: 'https://mushclubb.netlify.app/',
  logo: 'https://ik.imagekit.io/Selvamraj700/logo_opaque_3000px%20(1).png',
  liveStatus: 'HARVESTING TODAY',
} as const;

export const IMAGES = {
  heroFarm: 'https://ik.imagekit.io/Selvamraj700/MushClub/ChatGPT%20Image%20Jul%2026,%202026,%2005_04_17%20PM.png',
  oyster: 'https://ik.imagekit.io/Selvamraj700/MushClub/Oyster.png',
  spawn: 'https://ik.imagekit.io/Selvamraj700/MushClub/spawnPM.png',
  pellet: 'https://ik.imagekit.io/Selvamraj700/MushClub/pellet.png',
  kit: 'https://ik.imagekit.io/Selvamraj700/mushroomKit.png',
} as const;

export type ProductCategory = 'fresh-supply' | 'grower-input' | 'starter-format';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  audience: string;
  image: string;
  description: string;
  specs: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'fresh-oyster',
    name: 'Fresh Oyster Mushrooms',
    category: 'fresh-supply',
    categoryLabel: 'Fresh supply',
    audience: 'Restaurants · Retail',
    image: IMAGES.oyster,
    description:
      'Harvested daily and dispatched in temperature-controlled transport for optimal shelf life and kitchen prep.',
    specs: [
      'Daily harvest from climate-controlled grow rooms',
      'Temperature-controlled cold-chain dispatch',
      'Protective bio-packaging for transit safety',
      'Dispatch goal within 24 hours of plucking',
    ],
  },
  {
    id: 'grain-spawn',
    name: 'Premium Grain Spawn',
    category: 'grower-input',
    categoryLabel: 'Grower input',
    audience: 'Commercial growers',
    image: IMAGES.spawn,
    description:
      'First-generation culture strains on sterilized cereal grain for rapid colonisation and high biological efficiency.',
    specs: [
      'First-generation laboratory-grade strains',
      'Sterilized cereal grain substrate base',
      'Rapid colonisation and high biological efficiency',
      'Cleanroom-isolated and quality-tested',
    ],
  },
  {
    id: 'substrate-pellets',
    name: 'Hardwood Substrate Pellets',
    category: 'grower-input',
    categoryLabel: 'Grower input',
    audience: 'Farms · Training',
    image: IMAGES.pellet,
    description:
      'Natural broadleaf hardwood pellets prepared for repeatable, clean fruiting substrate formulations.',
    specs: [
      'Natural broadleaf hardwood composition',
      'Sterilized at 121°C for contamination control',
      'Repeatable, clean fruiting substrate formulations',
      'Available in bulk commercial quantities',
    ],
  },
  {
    id: 'training-kit',
    name: 'Oyster Training Kit',
    category: 'starter-format',
    categoryLabel: 'Starter format',
    audience: 'New growers',
    image: IMAGES.kit,
    description:
      'A complete guided route from fully inoculated spawn to your first successful home or farm harvest.',
    specs: [
      'Fully inoculated spawn included',
      'Step-by-step cultivation guide',
      'Complete guided route to first harvest',
      'Ideal for home or starter farm use',
    ],
  },
];

export const CATEGORIES = [
  { id: 'all', label: 'All formats' },
  { id: 'fresh-supply', label: 'Fresh supply' },
  { id: 'grower-input', label: 'Grower input' },
  { id: 'starter-format', label: 'Starter format' },
] as const;

export interface Audience {
  id: string;
  title: string;
  description: string;
  icon: 'utensils' | 'truck' | 'leaf';
  buyerType: string;
}

export const AUDIENCES: Audience[] = [
  {
    id: 'restaurants',
    title: 'Restaurants & Hotels',
    description:
      'Guaranteed daily fresh gourmet mushroom supply with temperature-controlled delivery and protective bio-packaging.',
    icon: 'utensils',
    buyerType: 'Restaurant/hotel',
  },
  {
    id: 'retail',
    title: 'Retail & Distributors',
    description:
      'Volume orders backed by cold-chain logistics, consistent quality standards, and protective bio-packaging.',
    icon: 'truck',
    buyerType: 'Retail/distribution',
  },
  {
    id: 'growers',
    title: 'Commercial Growers',
    description:
      'High-purity biological inputs, grain spawn, substrate pellets, and full commercial farm setup consultation.',
    icon: 'leaf',
    buyerType: 'Commercial farm',
  },
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Isolate',
    description:
      'Pure strains cultured in sterile laboratory conditions for consistent genetics and reliable fruiting.',
  },
  {
    step: '02',
    title: 'Formulate',
    description:
      'Natural hardwood inputs sterilized and prepared at 121°C for contamination-free substrate.',
  },
  {
    step: '03',
    title: 'Monitor',
    description:
      'Climate-managed grow rooms with controlled humidity, temperature, and airflow for consistent fruiting.',
  },
  {
    step: '04',
    title: 'Dispatch',
    description:
      'Hand-harvested and moved at peak freshness through temperature-controlled logistics within 24 hours.',
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What supply formats are available?',
    answer:
      'We work across fresh gourmet mushrooms, laboratory-grade grain spawn, hardwood substrate pellets, and starter training kits. Share your operating model and our team will recommend the optimal format.',
  },
  {
    question: 'How quickly can fresh orders be dispatched?',
    answer:
      'Fresh harvests are dispatched via temperature-controlled logistics, targeting delivery within 24 hours of plucking wherever transport routes allow.',
  },
  {
    question: 'Can you support a new commercial farm setup?',
    answer:
      'Yes. MushClub provides commercial grower inputs, strain cultures, infrastructure advice, and practical hands-on cultivation training.',
  },
];

export const GALLERY_IMAGES = [
  { src: IMAGES.heroFarm, alt: 'Fresh oyster mushrooms growing in a controlled environment at MushClub farm', span: 'large' },
  { src: IMAGES.oyster, alt: 'Harvested fresh oyster mushrooms ready for dispatch', span: 'small' },
  { src: IMAGES.spawn, alt: 'Premium grain spawn in sterile laboratory conditions', span: 'small' },
  { src: IMAGES.pellet, alt: 'Hardwood substrate pellets prepared for clean fruiting', span: 'wide' },
];

export const METRICS = [
  { value: '250+', label: 'Commercial Partners' },
  { value: '<24h', label: 'Cold-Chain Goal' },
  { value: '100%', label: 'Chemical-Free' },
] as const;
