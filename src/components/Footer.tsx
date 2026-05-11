import { Link } from "react-router-dom";
import Reveal from "./Reveal";

const nav = [
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="px-6 pb-6 mt-24">
      <Reveal>
      <footer className="max-w-6xl mx-auto bg-white/5 border border-white/10 rounded-2xl px-10 py-10">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand + tagline */}
          <div className="max-w-xs">
            <Link to="/" className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-md bg-[#E8472A] flex items-center justify-center text-white font-bold text-sm">
                P
              </div>
              <span className="text-white font-semibold text-base  tracking-tight">
                Phatma.
              </span>
            </Link>
            <p className="text-sm text-zinc-500 leading-relaxed">
              Frontend developer crafting clean, fast, and accessible
              interfaces.
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center gap-8">
            {nav.map((n) => (
              <Link
                key={n.label}
                to={n.href}
                className="text-xs font-semibold uppercase tracking-widest text-zinc-300 hover:text-white transition-colors"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <hr className="border-white/10 my-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs text-zinc-500">
            © {year} Phatma Kiazumova. All rights reserved.
          </p>
          <p className="text-xs text-zinc-500">
            Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
      </Reveal>
    </div>
  );
}
