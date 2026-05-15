import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0e0e10]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" onClick={close}>
          <div className="w-8 h-8 rounded-md bg-[#E8472A] flex items-center justify-center text-white font-bold text-sm">
            P
          </div>
          <span className="font-display text-white text-lg italic font-normal tracking-tight">
            Phatma.
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            to="/#about"
            className="font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
          >
            About
          </Link>
          <Link
            to="/#projects"
            className="font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
          >
            Projects
          </Link>
          <Link
            to="/#skills"
            className="font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
          >
            Skills
          </Link>
          <Link
            to="/resume"
            className="font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
          >
            Resume
          </Link>
          <Link
            to="/blog"
            className="font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
          >
            Blog
          </Link>
          <Link
            to="/#contact"
            className="font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile burger button */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden relative inline-flex items-center justify-center w-10 h-10 rounded-md text-zinc-300 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
        >
          <span className="sr-only">Toggle menu</span>
          <span
            aria-hidden="true"
            className={`absolute h-px w-5 bg-current transition-all duration-300 ease-out ${
              open ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            aria-hidden="true"
            className={`absolute h-px w-5 bg-current transition-all duration-200 ease-out ${
              open ? "opacity-0 scale-x-0" : "opacity-100"
            }`}
          />
          <span
            aria-hidden="true"
            className={`absolute h-px w-5 bg-current transition-all duration-300 ease-out ${
              open ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      {/* Backdrop — kliklədikdə menyunu bağlayır */}
      {open && (
        <div
          onClick={close}
          className="md:hidden fixed inset-0 top-16 bg-black/50 z-40 animate-fade-in"
        />
      )}

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden relative z-50 border-t border-white/5 bg-[#0e0e10]/95 backdrop-blur-xl animate-slide-down">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-1">
            {[
              { to: "/#about", label: "About", num: "01" },
              { to: "/#projects", label: "Projects", num: "02" },
              { to: "/#skills", label: "Skills", num: "03" },
              { to: "/resume", label: "Resume", num: "04" },
              { to: "/blog", label: "Blog", num: "05" },
              { to: "/#contact", label: "Contact", num: "06" },
            ].map((item, i) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={close}
                style={{ animationDelay: `${80 + i * 50}ms` }}
                className="animate-slide-in-left group flex items-baseline justify-between py-3 border-b border-white/[0.04] last:border-0 font-mono text-sm uppercase tracking-widest text-zinc-300 hover:text-[#E8472A] transition-colors"
              >
                <span className="flex items-baseline gap-3">
                  {/* <span className="text-[10px] text-zinc-600 group-hover:text-[#E8472A] transition-colors">
                    /{item.num}
                  </span> */}
                  {item.label}
                </span>
                {/* <span className="text-zinc-600 group-hover:text-[#E8472A] group-hover:translate-x-1 transition-all">
                  →
                </span> */}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
