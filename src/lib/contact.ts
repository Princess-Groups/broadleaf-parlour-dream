export const PHONE = "6380906817";
export const PHONE_DISPLAY = "+91 63809 06817";
export const INSTAGRAM = "https://www.instagram.com/broadleaf_womens_parlour/";
export const ADDRESS = "1375, Kottar-Parvathipuram Rd, Weavers Colony, Nagercoil, Tamil Nadu 629003";
export const GOOGLE_PROFILE = "https://share.google/u4tsUV7f0DY3NPt0x";

export const waLink = (msg = "Hi! I'd like to book an appointment at Broadleaf Women's Parlour.") =>
  `https://wa.me/91${PHONE}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:+91${PHONE}`;
