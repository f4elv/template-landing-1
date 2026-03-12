export interface SiteConfig {
  businessName: string;
  businessType: string;
  businessLogo: string;
  tagline: string;
  description: string;

  colors: SiteColors;
}

export interface SiteColors {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}
