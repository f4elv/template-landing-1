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

  products: [
    {
      id: 1,
      name: "name of product 1",
      image: "/amigurumi1.jpg",
    },
    {
      id: 2,
      name: "name of product 1",
      image: "/amigurumi2.jpg",
    },
    {
      id: 3,
      name: "name of product 1",
      image: "/amigurumi3.jpg",
    },
    {
      id: 4,
      name: "name of product 1",
      image: "/amigurumi4.jpg",
    },
    {
      id: 5,
      name: "name of product 1",
      image: "/amigurumi5.jpg",
    },
    {
      id: 6,
      name: "name of product 1",
      image: "/boa.png",
    },
  ],

  socialProof: {
    image1: "/image.jpg",
    image2: "/image.jpg",
    image3: "/image.jpg",
    image4: "/image.jpg",
    image5: "/image.jpg",
    image6: "/image.jpg",
    image7: "/image.jpg",
    image8: "/image.jpg",
    image9: "/image.jpg",
    image10: "/image.jpg",
    image11: "/image.jpg",
    image12: "/image.jpg",
  },
};
