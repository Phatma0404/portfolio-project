export default function Hero() {
  return (
    <section id="about" className="min-h-[calc(100vh-1rem)] flex items-center justify-center px-6 -mt-16">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row items-center justify-between gap-16">

        {/* Left — text */}
        <div className="flex-1">
          <div
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 animate-fade-up"
            style={{ animationDelay: "0ms" }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-zinc-400">Available for work</span>
          </div>

          <h1
            className="text-5xl sm:text-6xl font-bold text-white leading-tight tracking-tight mb-6 animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            Hi, I'm{" "}
            <span className="text-[#E8472A]">Phatma</span>
            <br />
            Kiazumova
          </h1>

          <p
            className="text-lg text-zinc-400 leading-relaxed max-w-xl mb-10 animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            Frontend developer focused on building clean, fast, and accessible
            digital experiences. Turning ideas into polished interfaces.
          </p>

          <div
            className="flex items-center gap-4 flex-wrap animate-fade-up"
            style={{ animationDelay: "360ms" }}
          >
            <a
              href="#projects"
              className="bg-[#E8472A] hover:bg-[#d03d22] text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="border border-white/15 hover:border-white/30 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Right — avatar card */}
        <div
          className="relative flex-shrink-0 animate-fade-up"
          style={{ animationDelay: "300ms" }}
        >
          {/* Glow */}
          <div className="absolute inset-0 rounded-3xl bg-[#E8472A]/20 blur-3xl scale-110" />

          {/* Card */}
          <div className="relative w-72 h-80 rounded-3xl bg-white/5 border border-white/10 overflow-hidden flex items-end">
            {/* Avatar placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-[#E8472A]/20 border-2 border-[#E8472A]/40 flex items-center justify-center">
                <span className="text-6xl font-bold text-[#E8472A]">P</span>
              </div>
            </div>

            {/* Bottom info strip */}
            <div className="relative w-full bg-black/40 backdrop-blur-sm border-t border-white/10 px-5 py-4">
              <p className="text-white font-semibold text-sm">Phatma Kiazumova</p>
              <p className="text-zinc-400 text-xs mt-0.5">Frontend Developer</p>
            </div>
          </div>

          {/* Floating stat — top right */}
          <div
            className="absolute -top-4 -right-6 bg-[#1a1a1a] border border-white/10 rounded-2xl px-4 py-3 shadow-xl animate-float-in"
            style={{ animationDelay: "600ms" }}
          >
            <p className="text-2xl font-bold text-white">2+</p>
            <p className="text-xs text-zinc-500">Years exp.</p>
          </div>

          {/* Floating stat — bottom left */}
          <div
            className="absolute -bottom-4 -left-6 bg-[#1a1a1a] border border-white/10 rounded-2xl px-4 py-3 shadow-xl animate-float-in"
            style={{ animationDelay: "750ms" }}
          >
            <p className="text-2xl font-bold text-white">20+</p>
            <p className="text-xs text-zinc-500">Projects done</p>
          </div>
        </div>

      </div>
    </section>
  );
}
