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
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-zinc-300 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
        >
          {open ? (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Backdrop — kliklədikdə menyunu bağlayır */}
      {open && (
        <div
          onClick={close}
          className="md:hidden fixed inset-0 top-16 bg-black/40 z-40"
        />
      )}

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden relative z-50 border-t border-white/5 bg-[#0e0e10]/95 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            <Link
              to="/#about"
              onClick={close}
              className="font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              to="/#projects"
              onClick={close}
              className="font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
            >
              Projects
            </Link>
            <Link
              to="/#skills"
              onClick={close}
              className="font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
            >
              Skills
            </Link>
            <Link
              to="/resume"
              onClick={close}
              className="font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
            >
              Resume
            </Link>
            <Link
              to="/blog"
              onClick={close}
              className="font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/#contact"
              onClick={close}
              className="font-mono text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
