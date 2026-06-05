import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { MapPin, Phone, Clock, Instagram, MessageCircle, Star } from "lucide-react";
import { ADDRESS, INSTAGRAM, PHONE_DISPLAY, telLink, waLink, GOOGLE_PROFILE } from "@/lib/contact";
import storefront from "@/assets/storefront.webp";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

const HOURS = [
  ["Monday – Saturday", "9:00 AM – 8:00 PM"],
  ["Sunday", "10:00 AM – 6:00 PM"],
];

function Contact() {
  return (
    <Layout>
      <section className="container mx-auto px-6 py-20 md:py-28">
        <p className="text-base uppercase tracking-[0.2em] text-pink-deep mb-4">Contact</p>
        <h1 className="font-display text-6xl md:text-7xl mb-12">Come visit us</h1>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-5">
            <Card icon={MapPin} title="Address">
              {ADDRESS}
            </Card>
            <Card icon={Phone} title="Phone">
              <a href={telLink} className="hover:text-pink-deep">{PHONE_DISPLAY}</a>
            </Card>
            <Card icon={Clock} title="Working Hours">
              <ul className="space-y-1">
                {HOURS.map(([d, h]) => (
                  <li key={d} className="flex justify-between gap-4">
                    <span>{d}</span><span className="text-muted-foreground">{h}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <div className="flex flex-wrap gap-3 pt-2">
              <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-pink text-white font-medium shadow-elegant hover:shadow-glow transition-all">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a href={GOOGLE_PROFILE} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-background border border-border font-medium hover:bg-cream transition-all">
                <Star className="h-4 w-4 text-pink-deep" /> Find us on Google
              </a>
              <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram" className="inline-flex items-center justify-center h-12 w-12 rounded-full border border-border text-pink-deep hover:bg-gradient-pink hover:text-white transition-all">
                <Instagram className="h-5 w-5" />
              </a>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-soft mt-6">
              <img src={storefront} alt="Broadleaf Women's Parlour storefront in Nagercoil" className="w-full h-auto object-cover" loading="lazy" />
              <p className="text-xs text-center text-muted-foreground py-3 bg-cream">Visit our parlour at Weavers Colony, Nagercoil</p>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-elegant aspect-square lg:aspect-auto min-h-[400px]">
            <iframe
              title="Map"
              src="https://www.google.com/maps?q=1375+Kottar-Parvathipuram+Rd+Weavers+Colony+Nagercoil&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Card({ icon: Icon, title, children }: { icon: typeof MapPin; title: string; children: React.ReactNode }) {
  return (
    <div className="p-6 rounded-2xl bg-cream shadow-soft">
      <div className="flex items-center gap-2 text-pink-deep mb-2">
        <Icon className="h-6 w-6" />
        <h3 className="font-display text-2xl">{title}</h3>
      </div>
      <div className="text-base text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );
}
