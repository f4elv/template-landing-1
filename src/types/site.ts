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

  socialProof: SocialProof;
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
  image: string;
}

export interface SocialProof {
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  image6: string;
  image7: string;
  image8: string;
  image9: string;
  image10: string;
  image11: string;
  image12: string;
}
