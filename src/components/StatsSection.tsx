import { Scissors, Sparkles, Award, Users } from "lucide-react";

const stats = [
  { icon: Scissors, value: "1000+", label: "Hair Styles" },
  { icon: Sparkles, value: "3000+", label: "Services" },
  { icon: Award, value: "4+", label: "Years Experience" },
  { icon: Users, value: "1 Lakh+", label: "Happy Clients" },
];

export function StatsSection() {
  return (
    <section className="bg-black py-20 md:py-28 border-y border-white/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-base uppercase tracking-[0.25em] text-white/80 mb-3">Our Milestones</p>
          <h2 className="font-display text-5xl md:text-6xl text-white">Crafted with passion, proven by numbers</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group flex flex-col items-center text-center rounded-3xl border border-white/25 bg-gradient-to-b from-white/5 to-transparent p-8 transition-all hover:-translate-y-1.5 hover:border-white/60 hover:shadow-glow"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-white/40 text-white/80 transition-all group-hover:scale-110 group-hover:bg-white/10">
                <s.icon className="h-7 w-7" />
              </div>
              <span className="font-display text-5xl md:text-6xl font-light text-white">{s.value}</span>
              <span className="mt-2 text-sm md:text-base font-semibold uppercase tracking-[0.18em] text-white/90">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
