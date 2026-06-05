import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { services } from "@/lib/services";
import { waLink } from "@/lib/contact";

export const Route = createFileRoute("/book")({
  component: Book,
});

function Book() {
  const [form, setForm] = useState({ name: "", phone: "", service: services[0].title as string, date: "", time: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi Broadleaf! I'd like to book an appointment.%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AService: ${form.service}%0ADate: ${form.date}%0ATime: ${form.time}`;
    window.open(waLink(decodeURIComponent(msg)), "_blank");
  };

  return (
    <Layout>
      <section className="container mx-auto px-6 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-base uppercase tracking-[0.2em] text-pink-deep mb-4">Appointments</p>
            <h1 className="font-display text-6xl md:text-7xl mb-6">Book your moment</h1>
            <p className="text-muted-foreground text-xl mb-6">
              Fill in the form and we'll continue the conversation on WhatsApp to confirm your slot.
            </p>
            <a
              href={waLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-cream text-pink-deep font-medium border border-border hover:bg-background transition-colors"
            >
              <MessageCircle className="h-5 w-5" /> Or chat directly on WhatsApp
            </a>
          </div>

          <form onSubmit={handleSubmit} className="rounded-3xl bg-card shadow-elegant p-8 md:p-10 space-y-5">
            <Field label="Your Name">
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="input" placeholder="Jane Doe" />
            </Field>
            <Field label="Phone Number">
              <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="input" placeholder="+91 ..." />
            </Field>
            <Field label="Service">
              <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="input">
                {services.map((s) => <option key={s.slug}>{s.title}</option>)}
              </select>
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Date">
                <input required type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="input" />
              </Field>
              <Field label="Time">
                <input required type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className="input" />
              </Field>
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-9 py-4.5 rounded-full bg-gradient-pink text-white font-medium shadow-elegant hover:shadow-glow transition-all">
              <MessageCircle className="h-5 w-5" /> Send via WhatsApp
            </button>
          </form>
        </div>
      </section>
      <style>{`
        .input { width: 100%; padding: 0.75rem 1rem; border-radius: 0.75rem; border: 1px solid var(--border); background: var(--background); font-size: 1.05rem; transition: all .2s; }
        .input:focus { outline: none; border-color: var(--pink-deep); box-shadow: 0 0 0 3px oklch(0.84 0.08 10 / 0.2); }
      `}</style>
    </Layout>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-base font-medium text-foreground mb-1.5 block">{label}</span>
      {children}
    </label>
  );
}
