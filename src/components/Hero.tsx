export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-[calc(100vh-1rem)] flex items-center px-6 pt-20 md:pt-8 lg:pt-0 md:-mt-16 overflow-hidden"
    >
      {/* Signature vertical label — left */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 origin-center -rotate-90 whitespace-nowrap"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-zinc-600">
          ◆ portfolio_2026 / frontend_developer
        </span>
      </div>

      {/* Signature vertical label — right */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 origin-center rotate-90 whitespace-nowrap"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-zinc-600">
          scroll ↓ to explore
        </span>
      </div>

      <div className="max-w-6xl w-full mx-auto grid lg:grid-cols-12 gap-12 items-center">
        {/* Left — text */}
        <div className="lg:col-span-7">
          {/* Status */}
          <div
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-10 animate-fade-up font-mono"
            style={{ animationDelay: "0ms" }}
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-xs uppercase tracking-widest text-zinc-300">
              Available — Q2 2026
            </span>
          </div>

          {/* Greeting */}
          <p
            className="font-mono text-sm text-zinc-500 mb-4 animate-fade-up"
            style={{ animationDelay: "100ms" }}
          >
            ▲ hi, my name is
          </p>

          {/* Name — display serif */}
          <h1
            className="font-display text-[15vw] sm:text-7xl md:text-8xl lg:text-[7.5rem] leading-[0.95] font-light text-white tracking-[-0.04em] mb-6 animate-fade-up"
            style={{ animationDelay: "180ms" }}
          >
            Phatma{" "}
            <em className="italic font-normal text-[#E8472A]">Kiazumova</em>
            <span className="text-[#E8472A]">.</span>
          </h1>

          {/* Role tagline */}
          <p
            className="text-lg md:text-xl text-zinc-300 leading-relaxed max-w-xl mb-10 animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            Frontend developer crafting{" "}
            <span className="text-white">clean, fast, accessible</span>{" "}
            interfaces. Government platforms, enterprise tools, the works.
          </p>

          {/* CTAs */}
          <div
            className="flex items-center gap-4 flex-wrap animate-fade-up"
            style={{ animationDelay: "420ms" }}
          >
            <a
              href="/#projects"
              className="group relative inline-flex items-center gap-2 bg-[#E8472A] hover:bg-[#d03d22] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors overflow-hidden"
            >
              <span className="relative z-10">See selected work</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="relative z-10 transition-transform group-hover:translate-x-0.5"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 border border-white/15 hover:border-[#E8472A] hover:text-[#E8472A] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Right — portrait card */}
        <div
          className="lg:col-span-5 relative flex justify-center lg:justify-end animate-fade-up"
          style={{ animationDelay: "240ms" }}
        >
          <div className="relative">
            {/* Outer offset frame — gives a "polaroid" feel */}
            <div className="absolute inset-0 border border-[#E8472A]/40 rounded-[2rem] translate-x-3 translate-y-3" />

            {/* Card */}
            <div className="relative w-72 sm:w-80 h-96 rounded-[2rem] bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 overflow-hidden flex items-end backdrop-blur-sm">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-[#E8472A]/30 blur-2xl scale-150" />
                  <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-[#E8472A]/40 to-[#E8472A]/10 border-2 border-[#E8472A]/50 flex items-center justify-center">
                    <span className="font-display text-7xl font-light text-white italic">
                      P
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom strip */}
              <div className="relative w-full bg-black/50 backdrop-blur-md border-t border-white/10 px-5 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium text-sm">
                      Phatma Kiazumova
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 mt-1">
                      Tbilisi · GMT+4
                    </p>
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                    01
                  </span>
                </div>
              </div>
            </div>

            {/* Floating stat — top right */}
            <div
              className="absolute -top-4 -right-4 sm:-right-8 bg-[#1a1a1c] border border-white/10 rounded-2xl px-4 py-3 shadow-2xl animate-float-in"
              style={{ animationDelay: "650ms" }}
            >
              <p className="font-display text-3xl font-light text-white leading-none">
                2<span className="text-[#E8472A]">+</span>
              </p>
              <p className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 mt-1">
                yrs · prod
              </p>
            </div>

            {/* Floating stat — bottom left */}
            <div
              className="absolute -bottom-4 -left-4 sm:-left-8 bg-[#1a1a1c] border border-white/10 rounded-2xl px-4 py-3 shadow-2xl animate-float-in"
              style={{ animationDelay: "800ms" }}
            >
              <p className="font-display text-3xl font-light text-white leading-none">
                10<span className="text-[#E8472A]">+</span>
              </p>
              <p className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 mt-1">
                projects shipped
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div
        aria-hidden="true"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-fade-up"
        style={{ animationDelay: "900ms" }}
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
          scroll
        </span>
        <span className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
      </div>
    </section>
  );
}