import { useState } from "react";
import { MessageCircle, X, Instagram, Calendar, Sparkles, Tag, Send } from "lucide-react";
import { INSTAGRAM, PHONE_DISPLAY, waLink } from "@/lib/contact";
import logo from "@/assets/logo.jpeg";

const SALON = "Broadleaf Women's Parlour";

const actions = [
  {
    icon: Send,
    label: "Chat with our Team",
    href: waLink(`Hi ${SALON}, I'd like to chat with your team.`),
  },
  {
    icon: Calendar,
    label: "Book Your Salon Visit Now",
    href: waLink(`Hi ${SALON}, I would like to book an appointment.`),
  },
  {
    icon: Sparkles,
    label: "Find Your Perfect Treatment",
    href: waLink(`Hi ${SALON}, I need guidance on choosing the right treatment.`),
  },
  {
    icon: Tag,
    label: "View Our Latest Offers",
    href: waLink(`Hi ${SALON}, please share your latest offers.`),
  },
];

export function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {open && (
        <div className="w-[20rem] max-w-[calc(100vw-3rem)] origin-bottom-right animate-scale-in overflow-hidden rounded-3xl border border-white/30 bg-card shadow-elegant">
          {/* Header */}
          <div className="flex items-center gap-3 bg-gradient-to-r from-black to-neutral-900 p-4">
            <div className="relative">
              <img src={logo} alt={SALON} className="h-16 w-16 rounded-full object-cover ring-2 ring-white/50" />
              <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-black bg-green-500" />
            </div>
            <div className="flex-1">
              <p className="font-display text-xl leading-tight text-white">{SALON}</p>
              <span className="flex items-center gap-1.5 text-sm text-green-400">
                <span className="h-2 w-2 rounded-full bg-green-500" /> Online now
              </span>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="text-white/70 hover:text-white">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4">
            <div className="mb-4 rounded-2xl rounded-tl-sm bg-secondary px-4 py-3 text-base text-foreground">
              Hi, how can we help you? 👋
            </div>
            <div className="flex flex-col gap-2.5">
              {actions.map((a) => (
                <a
                  key={a.label}
                  href={a.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-white/25 bg-white/5 px-4 py-3 text-base font-medium text-white transition-all hover:border-white/60 hover:bg-white/10"
                >
                  <a.icon className="h-5 w-5 text-white/80" />
                  <span className="flex-1">{a.label}</span>
                </a>
              ))}
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-white/25 bg-white/5 px-4 py-3 text-base font-medium text-white transition-all hover:border-white/60 hover:bg-white/10"
              >
                <Instagram className="h-5 w-5 text-white/80" />
                <span className="flex-1">Follow us on Instagram</span>
              </a>
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">📞 {PHONE_DISPLAY}</p>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="relative flex h-16 w-16 items-center justify-center rounded-full text-white shadow-elegant transition-transform hover:scale-110"
        style={{ backgroundColor: "#25D366" }}
      >
        {open ? <X className="h-7 w-7" /> : <MessageCircle className="h-7 w-7" />}
        {!open && (
          <span className="absolute -right-0.5 -top-0.5 h-4 w-4 rounded-full border-2 border-background bg-white animate-float" />
        )}
      </button>
    </div>
  );
}
