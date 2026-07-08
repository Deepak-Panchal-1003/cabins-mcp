/**
 * Client list for MP Cabins.
 * logoUrl points to files already in /public/ root.
 * fallbackBg / fallbackText used only if the image fails to load.
 */

export interface ClientEntry {
  id: string;
  name: string;
  sector: string;
  logoUrl: string;
  fallbackBg: string;
  fallbackText: string;
}

export const clientList: ClientEntry[] = [
  {
    id: "lnt",
    name: "Larsen & Toubro",
    sector: "Construction",
    logoUrl: "/logo1-300x129.png",
    fallbackBg: "#1e3a8a", fallbackText: "#ffffff",
  },
  {
    id: "panasonic",
    name: "Panasonic",
    sector: "Electronics",
    logoUrl: "/Panasonic_logo_Blue.svg_-300x129.png",
    fallbackBg: "#1d4ed8", fallbackText: "#ffffff",
  },
  {
    id: "amazon",
    name: "Amazon",
    sector: "E-Commerce",
    logoUrl: "/mbilelogo2-300x129.jpg",
    fallbackBg: "#111827", fallbackText: "#f59e0b",
  },
  {
    id: "bosch",
    name: "Bosch",
    sector: "Engineering",
    logoUrl: "/logo4-300x129.png",
    fallbackBg: "#dc2626", fallbackText: "#ffffff",
  },
  {
    id: "shell",
    name: "Shell",
    sector: "Oil & Gas",
    logoUrl: "/shell-logo-3.gif",
    fallbackBg: "#dc2626", fallbackText: "#fbbf24",
  },
  {
    id: "pennar-enviro",
    name: "Pennar Enviro",
    sector: "Environment",
    logoUrl: "/pennar-enviro-300x129.jpg",
    fallbackBg: "#0f766e", fallbackText: "#ffffff",
  },
  {
    id: "rays-power",
    name: "Rays Power Infra",
    sector: "Solar Energy",
    logoUrl: "/Rays-Power-infra-New-Logo-Final-1200x430-1-300x129.png",
    fallbackBg: "#166534", fallbackText: "#ffffff",
  },
  {
    id: "renew-power",
    name: "ReNew Power",
    sector: "Renewable Energy",
    logoUrl: "/renew-power-logo-headway-solar-post-300x129.jpg",
    fallbackBg: "#166534", fallbackText: "#ffffff",
  },
  {
    id: "refex-energy",
    name: "Refex Energy",
    sector: "Energy",
    logoUrl: "/refex_logo-300x129.png",
    fallbackBg: "#0369a1", fallbackText: "#ffffff",
  },
  {
    id: "spectra",
    name: "Spectra Technology",
    sector: "Technology",
    logoUrl: "/spectraa_logo-with-TM-300x129.jpg",
    fallbackBg: "#312e81", fallbackText: "#fbbf24",
  },
  {
    id: "shrushti-contech",
    name: "Shrushti Contech",
    sector: "Construction",
    logoUrl: "/shru-300x129.jpg",
    fallbackBg: "#1d4ed8", fallbackText: "#ffffff",
  },
  {
    id: "resil-vista",
    name: "Resil & Vista",
    sector: "Chemicals / Auto",
    logoUrl: "/Resil-vista-300x129.png",
    fallbackBg: "#111827", fallbackText: "#ef4444",
  },
  {
    id: "springboard",
    name: "91Springboard",
    sector: "Co-working",
    logoUrl: "/3e036-91springboard_logo-300x129.jpg",
    fallbackBg: "#ea580c", fallbackText: "#ffffff",
  },
  {
    id: "rec",
    name: "REC Limited",
    sector: "Power Finance",
    logoUrl: "/download-1-300x129.jpg",
    fallbackBg: "#1e3a8a", fallbackText: "#f59e0b",
  },
  {
    id: "indian-govt-mint",
    name: "Indian Govt Mint",
    sector: "Government",
    logoUrl: "/download-2-300x129.jpg",
    fallbackBg: "#1e3a8a", fallbackText: "#ffffff",
  },
  {
    id: "jd-creations",
    name: "JD Creations",
    sector: "Design",
    logoUrl: "/download-3-300x129.png",
    fallbackBg: "#7c2d4f", fallbackText: "#ffffff",
  },
  {
    id: "gjs",
    name: "GJS",
    sector: "Services",
    logoUrl: "/download-9-300x129.png",
    fallbackBg: "#1e1b8e", fallbackText: "#ffffff",
  },
  {
    id: "yellows-greens",
    name: "Yellows & Greens",
    sector: "Food & Retail",
    logoUrl: "/5-300x129.jpg",
    fallbackBg: "#84cc16", fallbackText: "#1a1a1a",
  },
  {
    id: "hebron-properties",
    name: "Hebron Properties",
    sector: "Real Estate",
    logoUrl: "/6-300x129.jpg",
    fallbackBg: "#1c1917", fallbackText: "#d4a84b",
  },
  {
    id: "praxair",
    name: "Praxair",
    sector: "Industrial Gases",
    logoUrl: "/7-300x129.jpg",
    fallbackBg: "#166534", fallbackText: "#ffffff",
  },
  {
    id: "inventure-academy",
    name: "Inventure Academy",
    sector: "Education",
    logoUrl: "/10-300x129.jpg",
    fallbackBg: "#1e3a8a", fallbackText: "#f97316",
  },
  {
    id: "tab-india",
    name: "Tab India",
    sector: "Finance",
    logoUrl: "/12-300x129.png",
    fallbackBg: "#111827", fallbackText: "#ffffff",
  },
  {
    id: "eximotek",
    name: "EximoTek",
    sector: "Industrial",
    logoUrl: "/logo-copia-grande-300x129.png",
    fallbackBg: "#dc2626", fallbackText: "#ffffff",
  },
  {
    id: "capacite",
    name: "Capacit'e",
    sector: "Construction",
    logoUrl: "/logoForLanguagePage.png",
    fallbackBg: "#6d28d9", fallbackText: "#f97316",
  },
  {
    id: "misc",
    name: "MP Cabins Partner",
    sector: "Industry",
    logoUrl: "/1000018084.jpg",
    fallbackBg: "#1a3c5e", fallbackText: "#ffffff",
  },
];
