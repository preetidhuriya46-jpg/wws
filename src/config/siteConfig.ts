/**
 * LUXORA INTERIORS — Business & Site Configuration
 * 
 * This file centralizes all business details, contact information,
 * portfolio projects, services, and editable business parameters.
 * When deploying for an actual interior design client, update the fields below.
 */

import heroImage from '@/src/assets/images/hero_luxury_living_room_1792731838341.jpg';
import studioImage from '@/src/assets/images/studio_architectural_interior_1792731839738.jpg';
import kitchenImage from '@/src/assets/images/service_modular_kitchen_1792731839825.jpg';
import quietResidenceImage from '@/src/assets/images/project_quiet_residence_1792731841624.jpg';
import designerPortraitImage from '@/src/assets/images/designer_studio_portrait_1792731841137.jpg';
import urbanSanctuaryImage from '@/src/assets/images/project_urban_sanctuary_1792731867884.jpg';
import contemporaryVillaImage from '@/src/assets/images/project_contemporary_villa_1792731868253.jpg';
import creativeWorkplaceImage from '@/src/assets/images/project_creative_workplace_1792731869823.jpg';
import minimalStylingImage from '@/src/assets/images/project_minimal_styling_1792731869296.jpg';

export interface SiteConfig {
  brandName: string;
  tagline: string;
  category: string;
  phone: string;
  whatsappNumber: string;
  email: string;
  location: string;
  serviceAreas: string;
  instagram: string;
  facebook: string;
  pinterest: string;
  stats: {
    yearsOfExperience: string;
    projectsCompleted: string;
    clientSatisfaction: string;
  };
}

export const defaultSiteConfig: SiteConfig = {
  brandName: 'LUXORA INTERIORS',
  tagline: 'Thoughtfully Designed. Beautifully Lived.',
  category: 'Luxury Residential & Commercial Interior Design',
  phone: '+91 98765 43210',
  whatsappNumber: '919876543210',
  email: 'studio@luxorainteriors.com',
  location: 'Offices in Mumbai & Delhi NCR',
  serviceAreas: 'Mumbai, Delhi NCR, Bengaluru, Hyderabad & Bespoke Destination Villas',
  instagram: 'https://instagram.com/luxorainteriors',
  facebook: 'https://facebook.com/luxorainteriors',
  pinterest: 'https://pinterest.com/luxorainteriors',
  stats: {
    yearsOfExperience: '12+',
    projectsCompleted: '140+',
    clientSatisfaction: '98%',
  },
};

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  subOfferings: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 'residential',
    number: '01',
    title: 'Residential Interiors',
    description: 'Personalized home interiors designed around your lifestyle, preferences, and everyday rituals.',
    image: quietResidenceImage,
    subOfferings: ['Living rooms', 'Bedrooms', 'Complete home interiors', 'Space planning'],
  },
  {
    id: 'kitchens',
    number: '02',
    title: 'Modular Kitchens',
    description: 'Beautifully organized kitchens combining intelligent storage, refined finishes, and practical functionality.',
    image: kitchenImage,
    subOfferings: ['Contemporary kitchens', 'Storage optimization', 'Material selection', 'Lighting design'],
  },
  {
    id: 'commercial',
    number: '03',
    title: 'Commercial Spaces',
    description: 'Distinctive commercial environments that express your brand identity and create memorable experiences.',
    image: creativeWorkplaceImage,
    subOfferings: ['Offices', 'Retail spaces', 'Studios', 'Reception areas'],
  },
  {
    id: 'renovation',
    number: '04',
    title: 'Renovation & Styling',
    description: 'Thoughtful transformations that refresh existing spaces through carefully selected materials, furnishings, and finishes.',
    image: minimalStylingImage,
    subOfferings: ['Interior renovation', 'Furniture selection', 'Wall finishes', 'Decorative styling'],
  },
];

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  filterCategory: 'residential' | 'kitchen' | 'commercial' | 'styling';
  image: string;
  aspectRatio: string;
  summary: string;
  overview: string;
  palette: string[];
  materials: string[];
  specifications: {
    area: string;
    timeline: string;
    locationConcept: string;
  };
}

export const projectsData: ProjectItem[] = [
  {
    id: 'quiet-residence',
    number: '01',
    title: 'The Quiet Residence',
    category: 'Residential Interiors',
    filterCategory: 'residential',
    image: quietResidenceImage,
    aspectRatio: '4/3',
    summary: 'A tranquil sanctuary focused on warm linen textures, bespoke walnut millwork, and diffused morning light.',
    overview: 'The Quiet Residence was conceived as an antidote to dense city life. Soft plaster walls, bespoke tactile textiles, and integrated walnut storage create a continuous sense of calm across every bedroom and living space.',
    palette: ['#F7F4EE (Warm Ivory)', '#E8DFD2 (Warm Beige)', '#4A3B32 (Smoked Walnut)', '#B69A69 (Champagne Gold)'],
    materials: ['Belgian Linen Wall Panels', 'American Walnut Veneer', 'Brushed Champagne Brass', 'Hand-Knotted Wool Rugs'],
    specifications: {
      area: '4,200 sq.ft.',
      timeline: 'Conceptual Showcase',
      locationConcept: 'Bespoke Urban Residence',
    },
  },
  {
    id: 'modern-kitchen',
    number: '02',
    title: 'The Modern Kitchen',
    category: 'Modular Kitchen',
    filterCategory: 'kitchen',
    image: kitchenImage,
    aspectRatio: '4/3',
    summary: 'Sculptural Calacatta marble island paired with fluted dark smoked oak and concealed chef-grade storage.',
    overview: 'Engineered for seamless culinary preparation and refined entertaining, this kitchen centers on a monumental monolithic marble island with recessed brass joinery and acoustic smoked oak paneling.',
    palette: ['#22221F (Charcoal Oak)', '#FFFFFF (Calacatta Honed)', '#B69A69 (Brushed Gold)', '#9E9C96 (Limestone Gray)'],
    materials: ['Honed Calacatta Marble', 'Quarter-Sawn Smoked Oak', 'Solid Brass Tapware', 'Integrated Architectural LED Profiles'],
    specifications: {
      area: '680 sq.ft.',
      timeline: 'Conceptual Showcase',
      locationConcept: 'Luxury Penthouse Suite',
    },
  },
  {
    id: 'urban-sanctuary',
    number: '03',
    title: 'The Urban Sanctuary',
    category: 'Apartment Interior',
    filterCategory: 'residential',
    image: urbanSanctuaryImage,
    aspectRatio: '4/3',
    summary: 'Panoramic high-rise apartment balanced by Japanese-Scandinavian warmth and bespoke bouclé seating.',
    overview: 'Perched high above the city skyline, The Urban Sanctuary utilizes low-slung timber furniture, fluted glass partitions, and warm indirect cove lighting to keep the breathtaking vistas grounded in human warmth.',
    palette: ['#E8DFD2 (Beige Bouclé)', '#2D2824 (Ebony Oak)', '#777A67 (Muted Olive)', '#1F2937 (Skyline Charcoal)'],
    materials: ['Natural Bouclé Fabric', 'Fluted Cast Glass', 'Solid Teak Coffee Table', 'Woven Sisal Floor Covering'],
    specifications: {
      area: '3,100 sq.ft.',
      timeline: 'Conceptual Showcase',
      locationConcept: 'High-Rise Horizon Residence',
    },
  },
  {
    id: 'contemporary-villa',
    number: '04',
    title: 'The Contemporary Villa',
    category: 'Luxury Residential',
    filterCategory: 'residential',
    image: contemporaryVillaImage,
    aspectRatio: '4/3',
    summary: 'Double-height architectural living volume with monumental dry-stacked stone fireplace and courtyard integration.',
    overview: 'A masterclass in indoor-outdoor fluidity. Expansive glass pocket doors dissolve the boundary between the monumental limestone living hall, private olive courtyard, and reflection pool.',
    palette: ['#F7F4EE (Bone Plaster)', '#C5BAA8 (Honed Travertine)', '#777A67 (Olive Canopy)', '#3D342B (Aged Bronze)'],
    materials: ['Dry-Stacked Limestone', 'Sculptural Bronze Chandelier', 'Full-Grain Caramel Leather', 'Polished Concrete Base'],
    specifications: {
      area: '7,800 sq.ft.',
      timeline: 'Conceptual Showcase',
      locationConcept: 'Private Country Estate',
    },
  },
  {
    id: 'creative-workplace',
    number: '05',
    title: 'The Creative Workplace',
    category: 'Commercial Interior',
    filterCategory: 'commercial',
    image: creativeWorkplaceImage,
    aspectRatio: '4/3',
    summary: 'An executive boardroom and private creative studio combining smoked timber library walls and bespoke travertine meeting tables.',
    overview: 'Designed to inspire visionary dialogue, this commercial space eschews sterile office conventions in favor of hospitality-grade finishes, acoustic wall paneling, and tactile leather executive seating.',
    palette: ['#44352D (Smoked Oak)', '#D9CEBF (Roman Travertine)', '#8C5638 (Cognac Leather)', '#22221F (Matte Black Steel)'],
    materials: ['Acoustic Ribbed Wood Paneling', 'Honed Roman Travertine', 'Cognac Semi-Aniline Leather', 'Blackened Steel Glazing'],
    specifications: {
      area: '2,400 sq.ft.',
      timeline: 'Conceptual Showcase',
      locationConcept: 'Boutique Creative Agency HQ',
    },
  },
  {
    id: 'minimal-living',
    number: '06',
    title: 'The Art of Minimal Living',
    category: 'Interior Styling',
    filterCategory: 'styling',
    image: minimalStylingImage,
    aspectRatio: '4/3',
    summary: 'Curated styling vignette pairing raw travertine consoles with handcrafted ceramics and golden afternoon light.',
    overview: 'Interior styling that elevates everyday contemplation. We source one-of-a-kind sculptural ceramics, rare architectural monographs, and natural botanicals that bring quiet soul to architectural niches.',
    palette: ['#E8DFD2 (Raw Travertine)', '#F2EFEB (Chalk Ceramic)', '#8A7B68 (Natural Linen)', '#B69A69 (Champagne Accents)'],
    materials: ['Porous Unfilled Travertine', 'Hand-Thrown Earthenware', 'Open-Weave Belgian Linen', 'Vintage Bronze Accents'],
    specifications: {
      area: 'Styling Curation',
      timeline: 'Conceptual Showcase',
      locationConcept: 'Curated Architectural Vignette',
    },
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    question: 'What types of interior design projects do you undertake?',
    answer:
      'We undertake high-end residential interiors (apartments, penthouses, bespoke villas), modular kitchen architecture, selective commercial spaces (executive offices, boutique retail, design studios), and comprehensive interior styling & renovation projects.',
  },
  {
    question: 'Can you design interiors according to my budget?',
    answer:
      'Yes. During our initial discovery phase, we evaluate your spatial requirements, desired material palette, and budgetary expectations to establish a clear, transparent scope of work before commencing detailed design development.',
  },
  {
    question: 'Do you offer modular kitchen design?',
    answer:
      'Absolutely. Our modular kitchen service covers space optimization, ergonomic workflows, premium cabinetry finishes (fluted veneers, matte lacquers, textured laminates), custom quartz or marble countertops, hardware selection, and integrated architectural lighting.',
  },
  {
    question: 'How does the design consultation work?',
    answer:
      'Our initial consultation is an in-depth conversation exploring your aesthetic sensibilities, daily living patterns, architectural drawings or floor plans, and project aspirations. From there, we present an initial design direction and roadmap tailored specifically for you.',
  },
  {
    question: 'How can I get started with my project?',
    answer:
      'You can reach out through our booking form on this website, or connect with us directly on WhatsApp. Share your floor plan, preferred timeline, and brief project details, and our studio team will promptly arrange your initial discovery session.',
  },
];

export interface TestimonialItem {
  quote: string;
  clientType: string;
  projectContext: string;
}

export const testimonialData: TestimonialItem[] = [
  {
    quote: 'An inspiring design direction and a thoughtful approach to every detail.',
    clientType: 'Private Residence Client',
    projectContext: '4-BHK Sea-Facing Apartment',
  },
  {
    quote: 'Beautifully considered spaces with a wonderful balance of aesthetics and function.',
    clientType: 'Villa Homeowner',
    projectContext: 'Modern Country Villa & Kitchen',
  },
  {
    quote: 'The design process felt organized, collaborative, and tailored to our needs.',
    clientType: 'Creative Director',
    projectContext: 'Boutique Commercial Studio',
  },
];

export const heroMedia = {
  heroImage,
  studioImage,
  designerPortraitImage,
};
