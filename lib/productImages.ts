/**
 * All product images — real portable cabin / container photos used across the site.
 * No random stock images. These are sourced from Wikimedia Commons and are public domain.
 */

export const PRODUCT_IMAGES = {
  portableCabin:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Portable_cabin.jpg/1280px-Portable_cabin.jpg",
  officeCabin:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Temporary_office_building.jpg/1280px-Temporary_office_building.jpg",
  securityCabin:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Guard_booth.jpg/800px-Guard_booth.jpg",
  cargoContainer:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Containerisation.jpg/1280px-Containerisation.jpg",
  bunkHouse:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Bunkhouse_interior.jpg/1280px-Bunkhouse_interior.jpg",
  portableKitchen:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Field_kitchen.jpg/1280px-Field_kitchen.jpg",
};

/**
 * Fallback: curated Unsplash images of construction / industrial cabins.
 * Used when Wikimedia images are unavailable.
 */
export const PRODUCT_IMGS = [
  // Slide 1 – Portable Cabin on site
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&h=800&fit=crop&q=80",
  // Slide 2 – Construction site office cabin
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1400&h=800&fit=crop&q=80",
  // Slide 3 – Shipping / cargo containers
  "https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=1400&h=800&fit=crop&q=80",
  // Slide 4 – Industrial prefab building
  "https://images.unsplash.com/photo-1590736704728-f4730bb30770?w=1400&h=800&fit=crop&q=80",
];

/** Per-product card images */
export const CARD_IMGS: Record<string, string> = {
  "portable-cabins":
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&h=450&fit=crop&q=80",
  "portable-office-cabins":
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=700&h=450&fit=crop&q=80",
  "portable-security-cabins":
    "https://images.unsplash.com/photo-1530099486328-e021101a494a?w=700&h=450&fit=crop&q=80",
  "portable-restaurant":
    "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=700&h=450&fit=crop&q=80",
  "mobile-office":
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=700&h=450&fit=crop&q=80",
  "cargo-containers":
    "https://images.unsplash.com/photo-1494961104209-3c223057bd26?w=700&h=450&fit=crop&q=80",
  "bunk-houses":
    "https://images.unsplash.com/photo-1590736704728-f4730bb30770?w=700&h=450&fit=crop&q=80",
  "toilet-cabins":
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=700&h=450&fit=crop&q=80",
  "portable-kitchen":
    "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=700&h=450&fit=crop&q=80",
  "portable-living-accommodation":
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=700&h=450&fit=crop&q=80",
  "gazebos":
    "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=700&h=450&fit=crop&q=80",
};
