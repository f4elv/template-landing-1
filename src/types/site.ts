export interface SiteConfig {
  businessName: string;
  businessType: string;
  businessLogo: string;
  tagline: string;
  description: string;

  colors: SiteColors;

  contact: Contact;

  hero: Hero;

  products: Products[];
}

export interface SiteColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

export interface Contact {
  phone: string;
  phoneRaw: string;
  instagram: string;
  instagramHandler: string;
}

export interface Hero {
  title: string;
  subtitle: string;
  image: string;
  primaryButton: string;
  secondaryButton: string;
}

export interface Products {
  id: number;
  name: string;
  description: string;
  image: string;
}
