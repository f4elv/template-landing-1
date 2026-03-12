export interface SiteConfig {
  businessName: string;
  businessType: string;
  businessLogo: string;
  tagline: string;
  description: string;

  colors: SiteColors;

  contact: Contact;
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
