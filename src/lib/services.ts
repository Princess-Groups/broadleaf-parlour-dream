import bridal from "@/assets/bridal.jpg";
import hair from "@/assets/hair.jpg";
import facial from "@/assets/facial.jpg";
import hairspa from "@/assets/hairspa.jpg";
import threading from "@/assets/threading.jpg";

export const services = [
  {
    slug: "bridal-makeup",
    title: "Bridal Makeup",
    description: "Radiant, long-lasting bridal looks tailored for your special day.",
    image: bridal,
    duration: "2 – 3 hrs",
    priceFrom: "₹4,999",
    details: [
      "HD airbrush & matte finish options",
      "Premium brands: MAC, Huda, Bobbi Brown",
      "Saree draping & hair styling included",
      "Trial session available on request",
    ],
  },
  {
    slug: "hair-styling",
    title: "Hair Styling",
    description: "Cuts, blowouts, curls, and updos crafted by expert stylists.",
    image: hair,
    duration: "45 – 90 mins",
    priceFrom: "₹499",
    details: [
      "Precision haircuts & layering",
      "Blow-dry, curls & elegant updos",
      "Hair colouring & global highlights",
      "Keratin & smoothening treatments",
    ],
  },
  {
    slug: "facials-skincare",
    title: "Facials & Skin Care",
    description: "Rejuvenating facials with premium products for glowing skin.",
    image: facial,
    duration: "60 – 75 mins",
    priceFrom: "₹799",
    details: [
      "Gold, diamond & pearl facials",
      "De-tan, anti-acne & brightening therapies",
      "Hydrating & anti-ageing treatments",
      "Skin-type consultation included",
    ],
  },
  {
    slug: "hair-spa",
    title: "Hair Spa & Treatments",
    description: "Deep nourishment treatments for healthy, lustrous hair.",
    image: hairspa,
    duration: "60 mins",
    priceFrom: "₹699",
    details: [
      "Deep-conditioning & scalp therapy",
      "Anti-dandruff & hair-fall treatments",
      "Nourishing oil & cream massage",
      "Steam & rinse for shine",
    ],
  },
  {
    slug: "threading-waxing",
    title: "Threading & Waxing",
    description: "Precise, gentle threading and waxing for smooth, defined beauty.",
    image: threading,
    duration: "20 – 45 mins",
    priceFrom: "₹99",
    details: [
      "Eyebrow, upper-lip & forehead threading",
      "Honey, chocolate & rica waxing",
      "Full arms, legs & full-body options",
      "Sensitive-skin friendly products",
    ],
  },
] as const;
