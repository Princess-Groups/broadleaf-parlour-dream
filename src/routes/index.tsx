import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { StatsSection } from "@/components/StatsSection";
import { CollageImage } from "@/components/CollageImage";
import { Instagram, MessageCircle, Phone, Sparkles, Heart, ShieldCheck, Star, ArrowRight } from "lucide-react";
import { INSTAGRAM, telLink, waLink } from "@/lib/contact";
import { services } from "@/lib/services";
import { galleryImages } from "@/lib/gallery";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          <img src={hero} alt="Elegant salon interior" width={1920} height={1280} className="w-full h-full object-cover opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25" />
        </div>
        <div className="relative container mx-auto px-6 py-36 md:py-52 max-w-5xl">
          <span className="inline-flex items-center gap-2 text-xl md:text-2xl font-medium uppercase tracking-[0.25em] text-white/80 animate-fade-in">
            <Sparkles className="h-6 w-6 md:h-7 md:w-7" /> Premium Women's Parlour
          </span>
          <h1 className="mt-8 md:mt-10 font-display text-[5.5rem] sm:text-[7rem] md:text-[9rem] lg:text-[10rem] font-light leading-[0.92] tracking-tighter animate-fade-up text-white">
            Broadleaf<br />
            <span className="italic bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
              Women's Parlour
            </span>
          </h1>
          <p className="mt-8 md:mt-10 text-3xl md:text-4xl text-white/90 max-w-xl animate-fade-up delay-200 font-light tracking-wide">
            Enhancing Natural Beauty with Care.
          </p>
          <div className="mt-12 md:mt-14 flex flex-wrap gap-5 animate-fade-up delay-300">
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-12 py-6 rounded-full bg-gradient-to-r from-white to-white/80 text-black text-lg md:text-xl font-medium shadow-elegant hover:shadow-glow transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="h-6 w-6 md:h-7 md:w-7" /> Book on WhatsApp
            </a>
            <a
              href={telLink}
              className="inline-flex items-center gap-3 px-12 py-6 rounded-full bg-white/5 backdrop-blur border border-white/40 text-white text-lg md:text-xl font-medium hover:bg-white/10 transition-all"
            >
              <Phone className="h-6 w-6 md:h-7 md:w-7" /> Call Now
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center justify-center h-16 w-16 md:h-[4.5rem] md:w-[4.5rem] rounded-full bg-white/5 backdrop-blur border border-white/40 text-white hover:bg-gradient-to-r hover:from-white hover:to-white/80 hover:text-black hover:scale-110 transition-all"
            >
              <Instagram className="h-7 w-7 md:h-8 md:w-8" />
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <StatsSection />



      {/* FEATURES */}
      <section className="container mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Heart, title: "Caring Touch", text: "Every treatment delivered with warmth and personal attention." },
            { icon: ShieldCheck, title: "Hygiene First", text: "Sterilised tools and single-use essentials for your safety." },
            { icon: Star, title: "Expert Stylists", text: "Years of training in modern and traditional beauty arts." },
          ].map((f) => (
            <div key={f.title} className="p-8 rounded-3xl bg-cream shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1">
              <f.icon className="h-7 w-7 text-pink-deep mb-4" />
              <h3 className="font-display text-3xl mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-gradient-soft py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-base uppercase tracking-[0.2em] text-pink-deep mb-3">Our Services</p>
              <h2 className="font-display text-5xl md:text-6xl">Curated for every occasion</h2>
            </div>
            <Link to="/services" className="inline-flex items-center gap-2 text-base font-medium text-pink-deep hover:gap-3 transition-all">
              View all <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.slice(0, 3).map((s) => (
              <div key={s.slug} className="group rounded-3xl overflow-hidden bg-card shadow-soft hover:shadow-elegant transition-all">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-3xl mb-2">{s.title}</h3>
                  <p className="text-lg text-muted-foreground mb-4">{s.description}</p>
                  <a href={waLink(`Hi! I'd like to book ${s.title}.`)} target="_blank" rel="noreferrer" className="text-base font-medium text-pink-deep hover:underline">
                    Book Now →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="container mx-auto px-6 py-20 md:py-28">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="text-base uppercase tracking-[0.2em] text-pink-deep mb-3">Bridal Gallery</p>
            <h2 className="font-display text-5xl md:text-6xl">Real brides, radiant moments</h2>
          </div>
          <Link to="/gallery" className="inline-flex items-center gap-2 text-base font-medium text-pink-deep hover:gap-3 transition-all">
            View gallery <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-1 [column-fill:_balance]">
          {galleryImages.slice(0, 6).map((img, i) => (
            <CollageImage key={i} src={img.src} alt={img.alt} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20 md:py-28">
        <div className="rounded-3xl bg-white p-12 md:p-16 text-center shadow-elegant">
          <h2 className="font-display text-5xl md:text-6xl text-black mb-4">Ready to be pampered?</h2>
          <p className="text-black/70 text-xl max-w-xl mx-auto mb-8">Book your appointment today and let our experts bring out your most radiant self.</p>
          <a href={waLink()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-black text-white font-medium hover:scale-105 transition-transform shadow-elegant">
            <MessageCircle className="h-5 w-5" /> Book on WhatsApp
          </a>
        </div>
      </section>
    </Layout>
  );
}
