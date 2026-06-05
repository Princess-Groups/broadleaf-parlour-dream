import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { MessageCircle } from "lucide-react";
import { services } from "@/lib/services";
import { waLink } from "@/lib/contact";

export const Route = createFileRoute("/services")({
  component: Services,
});

function Services() {
  return (
    <Layout>
      <section className="container mx-auto px-6 py-20 md:py-28">
        <div className="max-w-2xl mb-16">
          <p className="text-base uppercase tracking-[0.2em] text-pink-deep mb-4">Our Services</p>
          <h1 className="font-display text-6xl md:text-7xl mb-6">Treatments crafted with care</h1>
          <p className="text-muted-foreground text-xl">From everyday glow-ups to once-in-a-lifetime moments, our menu has you covered.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <article
              key={s.slug}
              className="group rounded-3xl overflow-hidden bg-card shadow-soft hover:shadow-elegant transition-all hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-7">
                <h2 className="font-display text-3xl mb-2">{s.title}</h2>
                <p className="text-lg text-muted-foreground mb-4">{s.description}</p>
                <div className="flex items-center gap-3 mb-4 text-sm">
                  <span className="px-3 py-1 rounded-full bg-cream text-pink-deep font-medium">{s.duration}</span>
                  <span className="px-3 py-1 rounded-full bg-cream text-pink-deep font-medium">From {s.priceFrom}</span>
                </div>
                <ul className="space-y-1.5 mb-5 text-base text-muted-foreground">
                  {s.details.map((d) => (
                    <li key={d} className="flex gap-2">
                      <span className="text-pink-deep mt-1">•</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={waLink(`Hi! I'd like to book ${s.title}.`)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-pink text-white text-base font-medium hover:shadow-glow transition-all"
                >
                  <MessageCircle className="h-5 w-5" /> Book Now
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
