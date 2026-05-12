import Reveal from "./Reveal";

const links = [
  { label: "Phone", value: "+994 55 474 53 13", href: "tel:+994554745313" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/phatma",
    href: "https://www.linkedin.com/in/phatma-kiazumova/",
  },
  {
    label: "GitHub",
    value: "github.com/phatma",
    href: "https://github.com/Phatma0404",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <Reveal>
          <div className="mb-14 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#E8472A] mb-4">
              / contact
            </p>
            <h2 className="text-5xl md:text-6xl font-light text-white leading-[0.95]">
              Let's build{" "}
              <em className="italic font-normal text-[#E8472A]">something</em>.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <Reveal delay={100}>
            <div>
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-300">
                  Available — Q2 2026
                </span>
              </div>

              <p className="text-zinc-300 text-lg leading-relaxed mb-8 max-w-md">
                Have a project, a role to fill, or just want to say hi? Email
                is the{" "}
                <em className="italic font-display text-[#E8472A]">fastest</em>{" "}
                way — I usually reply within a day.
              </p>

              <a
                href="mailto:phatmakiazumova@gmail.com"
                className="group inline-flex items-center gap-3 bg-[#E8472A] hover:bg-[#d03d22] text-white text-sm font-semibold px-6 py-4 rounded-full transition-colors"
              >
                <span>phatmakiazumova@gmail.com</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </div>
          </Reveal>

          {/* Right — other ways to reach */}
          <Reveal delay={200}>
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-7">
              <div className="flex items-baseline justify-between mb-5 pb-3 border-b border-white/10">
                <h3 className="font-display text-xl text-white">Other ways</h3>
                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                  / direct
                </span>
              </div>
              <ul className="flex flex-col">
                {links.map((link, i) => (
                  <li
                    key={link.label}
                    className={i !== links.length - 1 ? "border-b border-white/5" : ""}
                  >
                    <a
                      target="_blank"
                      href={link.href}
                      className="group flex items-center justify-between py-4"
                    >
                      <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                        {link.label}
                      </span>
                      <span className="text-sm text-zinc-300 group-hover:text-[#E8472A] transition-colors flex items-center gap-1">
                        {link.value}
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        >
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}