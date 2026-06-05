import { Link } from "@tanstack/react-router";
import { Instagram, Phone, MapPin, Star } from "lucide-react";
import { INSTAGRAM, PHONE_DISPLAY, ADDRESS, telLink, GOOGLE_PROFILE } from "@/lib/contact";
import logo from "@/assets/logo.jpeg";

export function Footer() {
  return (
    <footer className="bg-gradient-soft border-t border-border/60 mt-20">
      <div className="container mx-auto px-6 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Broadleaf Women's Parlour" className="h-24 w-24 rounded-full object-cover shadow-soft ring-1 ring-pink-deep/30" />
            <span className="font-display text-3xl font-semibold">Broadleaf</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Enhancing natural beauty with care. A premium women's parlour in Nagercoil.
          </p>
        </div>
        <div>
          <h4 className="font-display text-xl mb-4">Quick Links</h4>
          <ul className="space-y-2 text-base text-muted-foreground">
            <li><Link to="/about" className="hover:text-pink-deep">About Us</Link></li>
            <li><Link to="/services" className="hover:text-pink-deep">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-pink-deep">Gallery</Link></li>
            <li><Link to="/book" className="hover:text-pink-deep">Book Appointment</Link></li>
            <li><Link to="/contact" className="hover:text-pink-deep">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-xl mb-4">Contact</h4>
          <ul className="space-y-3 text-base text-muted-foreground">
            <li className="flex gap-2"><MapPin className="h-5 w-5 mt-0.5 shrink-0 text-pink-deep" /><span>{ADDRESS}</span></li>
            <li className="flex gap-2"><Phone className="h-5 w-5 mt-0.5 shrink-0 text-pink-deep" /><a href={telLink}>{PHONE_DISPLAY}</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-xl mb-4">Follow</h4>
          <div className="flex flex-col gap-3">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-base text-muted-foreground hover:text-pink-deep transition-colors"
            >
              <Instagram className="h-5 w-5" /> @broadleaf_womens_parlour
            </a>
            <a
              href={GOOGLE_PROFILE}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-base text-muted-foreground hover:text-pink-deep transition-colors"
            >
              <Star className="h-5 w-5" /> Review us on Google
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Broadleaf Women's Parlour. All rights reserved.
      </div>
    </footer>
  );
}
