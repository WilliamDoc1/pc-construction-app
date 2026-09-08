export interface ProjectCaseStudySchema {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: 'Luxury Residential' | 'Heritage Restoration' | 'Timber & Roofing' | 'Architectural Thatching' | 'Roofing & Timber' | 'Heritage & Thatch';
  location: string;
  credits: {
    architect?: string;
    interiorDesigner?: string;
    photographer?: string;
    quantitySurveyor?: string;
    constructionDivisions: string[];
  };
  narrative: string;
  leadQuote?: string;
  elevationSketchUrl?: string;
  heroImage: string;
  gallery: string[];
  specifications: {
    structuralSystem: string;
    primaryMaterials: string[];
    roofType: string;
    areaSquareMeters?: number;
  };
}

export interface DivisionSchema {
  id: string;
  title: string;
  tagline: string;
  establishedYear?: number;
  description: string;
  coreServices?: string[];
  accreditations?: string[];
  heroImage: string;
}

export interface BrochureDocumentSchema {
  id: string;
  title: string;
  fileSize: string;
  pageCount: number;
  pdfUrl: string;
  coverImage: string;
  divisionKey?: 'residential' | 'roofing' | 'thatching';
  sections?: {
    title: string;
    pageStart: number;
  }[];
}

export interface OfficeLocation {
  city: string;
  phone: string;
  address: string;
  email?: string;
}

export interface CompanySchema {
  name: string;
  tagline: string;
  establishedYear: number;
  description: string;
  accreditations: string[];
  offices: OfficeLocation[];
}
