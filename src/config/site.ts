import { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  businessName: "Name of business",
  businessType: "Type of business",
  businessLogo: "/boa.png",
  tagline: "Slogan or tagline of business",
  description: "Descriprion of the business",

  // Colors of site design
  colors: {
    primary: "#00FFFF",
    secondary: "#E04A2A",
    accent: "#5733FF",
    background: "#FFFFFF",
    text: "#FFFFFF",
  },

  contact: {
    phone: "99999-9999",
    phoneRaw: "99999999999",
    instagram: "instagram",
    instagramHandler: "instagram Handler",
  },

  hero: {
    title: "hero title",
    subtitle: "hero subtitle",
    image: "/V (1).png",
    primaryButton: "text for hero primary button",
    secondaryButton: "text for hero secondary button",
  },
};
