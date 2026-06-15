export type ProjectType = 'Residential' | 'Commercial' | 'Mixed-Use';

export interface Project {
  id: string;
  name: string;
  location: string;
  type: ProjectType;
  cover: string | null;
  gallery: string[];
  aspectRatio: string;
  year: number;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'pavillion-hill',
    name: 'Pavillion Hill',
    location: 'Kuala Lumpur',
    type: 'Residential',
    cover: '/projectImages/Demo1/Demo1_1.png',
    gallery: [
      '/projectImages/Demo1/Demo1_1.png',
      '/projectImages/Demo1/Demo1_2.png',
    ],
    aspectRatio: '4/3',
    year: 2024,
    featured: true,
  },
  {
    id: 'the-alba-glomac',
    name: 'The Alba @ Glomac',
    location: 'Petaling Jaya',
    type: 'Commercial',
    cover: '/projectImages/Demo2/Demo2_1.jpg',
    gallery: [
      '/projectImages/Demo2/Demo2_1.jpg',
      '/projectImages/Demo2/Demo2_2.jpg',
      '/projectImages/Demo2/Demo2_3.jpg',
    ],
    aspectRatio: '3/4',
    year: 2024,
    featured: true,
  },
  {
    id: 'desa-parkcity',
    name: 'Desa ParkCity Residence',
    location: 'Kepong',
    type: 'Residential',
    cover: '/projectImages/Demo3/Demo3_1.jpg',
    gallery: [
      '/projectImages/Demo3/Demo3_1.jpg',
      '/projectImages/Demo3/Demo3_2.jpg',
      '/projectImages/Demo3/Demo3_3.jpg',
      '/projectImages/Demo3/Demo3_4.jpg',
      '/projectImages/Demo3/Demo3_5.jpg',
    ],
    aspectRatio: '16/9',
    year: 2023,
    featured: true,
  },
  {
    id: 'eight-skw',
    name: 'Eight SKW',
    location: 'Damansara Heights',
    type: 'Commercial',
    cover: '/projectImages/Demo4/Demo4_1.jpg',
    gallery: [
      '/projectImages/Demo4/Demo4_1.jpg',
      '/projectImages/Demo4/Demo4_2.jpg',
      '/projectImages/Demo4/Demo4_3.jpg',
      '/projectImages/Demo4/Demo4_4.jpg',
    ],
    aspectRatio: '4/3',
    year: 2023,
    featured: true,
  },

  // ── Remaining projects — placeholders until images are uploaded
  // Note: 16/9 avoided on null covers — too flat against dark background
  { id: 'klcc-tridences', name: 'KLCC Tridences', location: 'Kuala Lumpur', type: 'Mixed-Use', cover: null, gallery: [], aspectRatio: '4/3', year: 2023 },
  { id: 'tropicana-gardens', name: 'Tropicana Gardens', location: 'Kota Damansara', type: 'Residential', cover: null, gallery: [], aspectRatio: '3/4', year: 2023 },
  { id: 'mrt-kajang-line', name: 'MRT Kajang Line Stations', location: 'Kajang', type: 'Commercial', cover: null, gallery: [], aspectRatio: '4/3', year: 2022 },
  { id: 'seventeen-damansara', name: 'Seventeen @ Damansara', location: 'Damansara Heights', type: 'Mixed-Use', cover: null, gallery: [], aspectRatio: '3/4', year: 2022 },
  { id: 'one-medeniaga', name: 'One Medeniaga', location: 'Damansara Heights', type: 'Residential', cover: null, gallery: [], aspectRatio: '4/3', year: 2022 },
  { id: 'emerald-putrajaya', name: 'Emerald Putrajaya', location: 'Putrajaya', type: 'Residential', cover: null, gallery: [], aspectRatio: '3/4', year: 2022 },
  { id: 'ttdi-crescent', name: 'TTDI Crescent House', location: 'Taman Tun Dr Ismail', type: 'Residential', cover: null, gallery: [], aspectRatio: '4/3', year: 2021 },
  { id: 'menara-ikhlas', name: 'Menara Ikhlas', location: 'Changkat Kiara', type: 'Commercial', cover: null, gallery: [], aspectRatio: '3/4', year: 2021 },
  { id: 'bukit-bintang-suite', name: 'Bukit Bintang Suite', location: 'Kuala Lumpur', type: 'Mixed-Use', cover: null, gallery: [], aspectRatio: '4/3', year: 2021 },
  { id: 'alam-impias', name: 'Alam Impias Residence', location: 'Shah Alam', type: 'Residential', cover: null, gallery: [], aspectRatio: '3/4', year: 2021 },
  { id: 'the-linc-kl', name: 'The LINC KL', location: 'Jalan Ampang', type: 'Commercial', cover: null, gallery: [], aspectRatio: '4/3', year: 2020 },
  { id: 'bandar-utama', name: 'Bandar Utama Hub', location: 'Bandar Utama', type: 'Mixed-Use', cover: null, gallery: [], aspectRatio: '3/4', year: 2020 },
  { id: 'kiara-bay', name: 'Kiara Bay Residence', location: 'Mont Kiara', type: 'Residential', cover: null, gallery: [], aspectRatio: '4/3', year: 2020 },
  { id: 'kota-kemuning', name: 'Kota Kemuning Villa', location: 'Kota Kemuning', type: 'Residential', cover: null, gallery: [], aspectRatio: '3/4', year: 2020 },
  { id: 'pavillion-damansara', name: 'Pavillion Damansara Heights', location: 'Damansara Heights', type: 'Mixed-Use', cover: null, gallery: [], aspectRatio: '4/3', year: 2019 },
  { id: 'seni-mont-kiara', name: 'SENI @ Mont Kiara', location: 'Mont Kiara', type: 'Residential', cover: null, gallery: [], aspectRatio: '3/4', year: 2019 },
  { id: 'pj-trade-centre', name: 'PJ Trade Centre', location: 'Petaling Jaya', type: 'Commercial', cover: null, gallery: [], aspectRatio: '4/3', year: 2019 },
  { id: 'jln-maharajalela', name: 'Jalan Maharajalela', location: 'Kuala Lumpur', type: 'Residential', cover: null, gallery: [], aspectRatio: '3/4', year: 2018 },
  { id: 'sierra-petas', name: 'Sierra Petas', location: 'Shah Alam', type: 'Residential', cover: null, gallery: [], aspectRatio: '4/3', year: 2018 },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getProjectsByType(type: ProjectType): Project[] {
  return projects.filter((p) => p.type === type);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured === true);
}