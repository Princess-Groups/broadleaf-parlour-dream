import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Heart, ShieldCheck, Sparkles, Users } from "lucide-react";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <Layout>
      <section className="container mx-auto px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="text-base uppercase tracking-[0.2em] text-pink-deep mb-4 animate-fade-in">About Us</p>
          <h1 className="font-display text-6xl md:text-7xl mb-6 animate-fade-up">A space made for you</h1>
          <p className="text-xl text-muted-foreground leading-relaxed animate-fade-up delay-100">
            Broadleaf Women's Parlour is a sanctuary of beauty and care in the heart of Nagercoil.
            We combine modern techniques with traditional warmth to deliver experiences that feel as
            wonderful as they look. Every guest, every detail, every visit — handled with intention.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-3xl overflow-hidden shadow-elegant">
            <img src={about} alt="Salon interior" loading="lazy" width={1200} height={900} className="w-full h-full object-cover" />
          </div>
          <div className="grid gap-5">
            {[
              { icon: ShieldCheck, title: "Hygiene & Safety", text: "Sterilised tools, fresh linens, and meticulous standards on every visit." },
              { icon: Users, title: "Trained Professionals", text: "A skilled team committed to ongoing learning and craft." },
              { icon: Heart, title: "Personal Care", text: "Treatments tailored to your skin, hair, and lifestyle." },
              { icon: Sparkles, title: "Premium Products", text: "Only trusted brands and proven formulations." },
            ].map((f) => (
              <div key={f.title} className="flex gap-4 p-5 rounded-2xl bg-cream shadow-soft">
                <f.icon className="h-7 w-7 text-pink-deep shrink-0 mt-1" />
                <div>
                  <h3 className="font-display text-2xl mb-1">{f.title}</h3>
                  <p className="text-lg text-muted-foreground">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
