import { Instagram, MessageCircle } from "lucide-react";
import { INSTAGRAM, waLink } from "@/lib/contact";

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a
        href={INSTAGRAM}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className="h-12 w-12 rounded-full bg-gradient-pink shadow-elegant flex items-center justify-center text-white hover:scale-110 transition-transform animate-float"
      >
        <Instagram className="h-5 w-5" />
      </a>
      <a
        href={waLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="h-14 w-14 rounded-full shadow-elegant flex items-center justify-center text-white hover:scale-110 transition-transform"
        style={{ backgroundColor: "#25D366" }}
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
