export type ProjectType = "Residential" | "Commercial" | "Mixed-Use";

export interface Project {
  id: string;
  name: string;
  location: string;
  type: ProjectType;
  image: string | null;
  aspectRatio: string;
  year: number;
}

export const projects: Project[] = [
  {
    id: "the-meridien-residence",
    name: "The Meridien Residence",
    location: "Kuala Lumpur, Malaysia",
    type: "Residential",
    image: null,
    aspectRatio: "4/3",
    year: 2025,
  },
  {
    id: "suria-klcc-penthouse",
    name: "Suria KLCC Penthouse",
    location: "Kuala Lumpur, Malaysia",
    type: "Residential",
    image: null,
    aspectRatio: "3/4",
    year: 2024,
  },
  {
    id: "ara-greens-townhouse",
    name: "Ara Greens Townhouse",
    location: "Ara Damansara, Malaysia",
    type: "Residential",
    image: null,
    aspectRatio: "16/9",
    year: 2024,
  },
  {
    id: "damansara-heights-villa",
    name: "Damansara Heights Villa",
    location: "Damansara Heights, Malaysia",
    type: "Residential",
    image: null,
    aspectRatio: "4/3",
    year: 2023,
  },
  {
    id: "mont-kiara-estate",
    name: "Mont Kiara Estate",
    location: "Mont Kiara, Malaysia",
    type: "Residential",
    image: null,
    aspectRatio: "3/4",
    year: 2025,
  },
  {
    id: "the-mines-residence",
    name: "The Mines Residence",
    location: "Seri Kembangan, Malaysia",
    type: "Residential",
    image: null,
    aspectRatio: "16/9",
    year: 2023,
  },
  {
    id: "bangsar-luxury-apartment",
    name: "Bangsar Luxury Apartment",
    location: "Bangsar, Malaysia",
    type: "Residential",
    image: null,
    aspectRatio: "4/3",
    year: 2024,
  },
  {
    id: "ttdi-bungalow",
    name: "TTDI Bungalow",
    location: "Taman Tun Dr Ismail, Malaysia",
    type: "Residential",
    image: null,
    aspectRatio: "3/4",
    year: 2025,
  },
  {
    id: "the-alfa-office-tower",
    name: "The Alfa Office Tower",
    location: "Kuala Lumpur, Malaysia",
    type: "Commercial",
    image: null,
    aspectRatio: "16/9",
    year: 2024,
  },
  {
    id: "menara-corporate-lounge",
    name: "Menara Corporate Lounge",
    location: "Kuala Lumpur, Malaysia",
    type: "Commercial",
    image: null,
    aspectRatio: "4/3",
    year: 2025,
  },
  {
    id: "sunway-tech-hq",
    name: "Sunway Tech HQ",
    location: "Bandar Sunway, Malaysia",
    type: "Commercial",
    image: null,
    aspectRatio: "3/4",
    year: 2023,
  },
  {
    id: "pj-creative-hub",
    name: "PJ Creative Hub",
    location: "Petaling Jaya, Malaysia",
    type: "Commercial",
    image: null,
    aspectRatio: "16/9",
    year: 2024,
  },
  {
    id: "kl-sentral-retail-space",
    name: "KL Sentral Retail Space",
    location: "Kuala Lumpur, Malaysia",
    type: "Commercial",
    image: null,
    aspectRatio: "4/3",
    year: 2025,
  },
  {
    id: "mid-valley-showroom",
    name: "Mid Valley Showroom",
    location: "Kuala Lumpur, Malaysia",
    type: "Commercial",
    image: null,
    aspectRatio: "3/4",
    year: 2024,
  },
  {
    id: "johor-bahru-mixed-development",
    name: "Johor Bahru Mixed Development",
    location: "Johor Bahru, Malaysia",
    type: "Mixed-Use",
    image: null,
    aspectRatio: "16/9",
    year: 2023,
  },
  {
    id: "penang-waterfront-complex",
    name: "Penang Waterfront Complex",
    location: "George Town, Malaysia",
    type: "Mixed-Use",
    image: null,
    aspectRatio: "4/3",
    year: 2025,
  },
  {
    id: "kota-damansara-integrated",
    name: "Kota Damansara Integrated",
    location: "Kota Damansara, Malaysia",
    type: "Mixed-Use",
    image: null,
    aspectRatio: "3/4",
    year: 2024,
  },
  {
    id: "subang-jaya-lifestyle-hub",
    name: "Subang Jaya Lifestyle Hub",
    location: "Subang Jaya, Malaysia",
    type: "Mixed-Use",
    image: null,
    aspectRatio: "16/9",
    year: 2023,
  },
  {
    id: "puchong-commercial-centre",
    name: "Puchong Commercial Centre",
    location: "Puchong, Malaysia",
    type: "Mixed-Use",
    image: null,
    aspectRatio: "4/3",
    year: 2025,
  },
  {
    id: "shah-alam-business-park",
    name: "Shah Alam Business Park",
    location: "Shah Alam, Malaysia",
    type: "Mixed-Use",
    image: null,
    aspectRatio: "3/4",
    year: 2024,
  },
  {
    id: "klang-riverside-development",
    name: "Klang Riverside Development",
    location: "Klang, Malaysia",
    type: "Mixed-Use",
    image: null,
    aspectRatio: "16/9",
    year: 2023,
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}

export function getProjectsByType(type: ProjectType | "All"): Project[] {
  if (type === "All") {
    return projects;
  }
  return projects.filter((project) => project.type === type);
}

export function getFeaturedProjects(count: number = 4): Project[] {
  return projects.slice(0, count);
}
