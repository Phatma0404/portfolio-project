import Reveal from "./Reveal";

type Project = {
  id: string;
  title: string;
  year: string;
  role: string;
  description: string;
  stack: string[];
  live: string;
  github: string;
  accent: string;
  cover?: string;
  iconSvg?: string;
  wordmarkSvg?: string;
};

const projects: Project[] = [
  {
    id: "01",
    title: "SmartAbituriyent",
    year: "2025",
    role: "Frontend · Education Platform",
    description:
      "Mobile-first platform helping Azerbaijani high-school graduates pick a university specialization based on their entrance exam results. Turns dense academic catalogs into a guided, friendly selection flow.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://smartabitur.az/",
    github: "#",
    accent: "#E8472A",
    iconSvg: "/images/smartabitur-icon.svg",
    wordmarkSvg: "/images/smartabitur-wordmark.svg",
  },
  {
    id: "02",
    title: "ServiceSecurity",
    year: "2025",
    role: "Frontend · React · SPA",
    description:
      "Marketing site for a security camera solutions company in Azerbaijan. Built as a responsive single-page app with smooth section navigation, animated stats, and a polished service catalog.",
    stack: ["React", "Vite", "Tailwind CSS", "React Router"],
    live: "https://securityca.netlify.app/",
    github: "https://github.com/Phatma0404/security-camera",
    accent: "#1e3a8a",
    cover: "/images/securityca-cover.png",
  },
  {
    id: "03",
    title: "EduRobot.AI",
    year: "2024",
    role: "Frontend · Components",
    description:
      "Education & automation platform — reusable components and state-managed views.",
    stack: ["React", "Context API", "Tailwind"],
    live: "#",
    github: "#",
    accent: "#7B61FF",
  },
  {
    id: "04",
    title: "Food Supply Map",
    year: "2024",
    role: "Frontend · UI Implementation",
    description:
      "Mapping system for the Construction-Supply Union under Ministry of Economy.",
    stack: ["React", "Tailwind", "React-Bootstrap"],
    live: "#",
    github: "#",
    accent: "#FFB547",
  },
];

const [featured, ...rest] = projects;

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6 scroll-mt-16">
      {/* Decorative rotated label on the side */}
      <div
        aria-hidden="true"
        className="hidden xl:block absolute right-0 top-32 origin-top-right -rotate-90 translate-x-full"
      >
        <span className="font-mono text-xs uppercase tracking-[0.4em] text-zinc-600">
          ◆ selected_work / 2024–2026
        </span>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <Reveal>
          <div className="mb-16 flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#E8472A] mb-4">
                / projects
              </p>
              <h2 className="text-5xl md:text-6xl font-light text-white leading-[0.95]">
                Selected{" "}
                <em className="italic font-normal text-[#E8472A]">work</em>.
              </h2>
            </div>
            <p className="text-sm text-zinc-500 max-w-xs">
              A few production projects I've shipped. More on{" "}
              <a
                href="#"
                className="text-zinc-300 hover:text-white underline underline-offset-4"
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </Reveal>

        {/* Featured project — big */}
        <Reveal>
          <a
            href={featured.live}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-10 mb-6 overflow-hidden shine-on-hover transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05]"
          >
            {/* Background glow following project accent */}
            <div
              className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-30 transition-opacity duration-500 group-hover:opacity-50"
              style={{ background: featured.accent }}
            />

            <div className="relative grid md:grid-cols-12 gap-8 items-center">
              {/* Preview — composed logo, image, or fallback number */}
              <div className="md:col-span-7 aspect-[16/10] rounded-2xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/5 flex items-center justify-center overflow-hidden relative">
                {featured.iconSvg && featured.wordmarkSvg ? (
                  <>
                    <div className="absolute inset-0 bg-white flex flex-col items-center justify-center gap-6 sm:gap-8 px-8 py-10 transition-transform duration-700 group-hover:scale-[1.03]">
                      <img
                        src={featured.iconSvg}
                        alt=""
                        loading="lazy"
                        className="h-28 sm:h-36 md:h-40 w-auto"
                      />
                      <img
                        src={featured.wordmarkSvg}
                        alt={featured.title}
                        loading="lazy"
                        className="h-6 sm:h-8 md:h-10 w-auto"
                      />
                    </div>
                    {/* Soft brand-tinted vignette so the white block feels intentional */}
                    <div
                      className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none mix-blend-multiply"
                      style={{ background: featured.accent }}
                    />
                  </>
                ) : featured.cover ? (
                  <>
                    <img
                      src={featured.cover}
                      alt={featured.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />
                    <div
                      className="absolute top-0 right-0 w-24 h-24 opacity-20 blur-2xl pointer-events-none"
                      style={{ background: featured.accent }}
                    />
                  </>
                ) : (
                  <span
                    className="font-display text-[8rem] md:text-[10rem] leading-none font-light tracking-tighter opacity-20 transition-transform duration-700 group-hover:scale-110"
                    style={{ color: featured.accent }}
                  >
                    {featured.id}
                  </span>
                )}
                <span className="absolute top-4 left-4 z-10 font-mono text-[10px] uppercase tracking-widest text-white/90 backdrop-blur-sm bg-black/30 px-2 py-1 rounded">
                  ▲ featured
                </span>
              </div>

              {/* Meta */}
              <div className="md:col-span-5">
                <div className="flex items-center gap-3 mb-4 font-mono text-xs uppercase tracking-widest text-zinc-500">
                  <span>{featured.year}</span>
                  <span className="w-8 h-px bg-zinc-700" />
                  <span>{featured.role}</span>
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-normal text-white mb-4 leading-tight">
                  {featured.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  {featured.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.stack.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 border border-white/10 rounded-full px-3 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-[#E8472A] transition-colors">
                  View case study
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </span>
              </div>
            </div>
          </a>
        </Reveal>

        {/* Smaller cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((p, i) => (
            <Reveal key={p.id} delay={150 + i * 120}>
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative bg-white/[0.03] border border-white/10 rounded-3xl p-7 overflow-hidden shine-on-hover transition-all duration-500 hover:border-white/20 hover:bg-white/[0.05] h-full"
              >
                <div
                  className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl opacity-20 transition-opacity duration-500 group-hover:opacity-40"
                  style={{ background: p.accent }}
                />
                <div className="relative">
                  {p.cover && (
                    <div className="aspect-[16/10] rounded-xl bg-white border border-white/5 overflow-hidden mb-5 -mx-1">
                      <img
                        src={p.cover}
                        alt={p.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex items-center justify-between mb-5 font-mono text-xs uppercase tracking-widest text-zinc-500">
                    <span>{p.id}</span>
                    <span>{p.year}</span>
                  </div>
                  <h3 className="font-display text-2xl font-normal text-white mb-3 leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] uppercase tracking-widest text-zinc-400 border border-white/10 rounded-full px-2.5 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">
                    Explore
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}