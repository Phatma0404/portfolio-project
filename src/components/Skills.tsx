import Reveal from "./Reveal";

const primary = [
  "React.js",
  "TypeScript",
  "JavaScript (ES6+)",
  "Tailwind CSS",
  "Next.js",
  "Redux Toolkit",
  "REST API",
  "React Hook Form",
  "Yup",
  "Sass / SCSS",
  "Context API",
  "Vite",
  "Git",
  "Figma",
];

const categories = [
  {
    label: "Build",
    items: ["React.js", "Next.js", "TypeScript", "Vite"],
  },
  {
    label: "Style",
    items: ["Tailwind v4", "Sass / SCSS", "Styled Components", "Bootstrap"],
  },
  {
    label: "State",
    items: ["Redux Toolkit", "Context API", "React Hook Form", "Yup"],
  },
  {
    label: "Workflow",
    items: ["Git / GitHub / GitLab", "REST APIs", "Figma → Code", "Claude Pro"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 scroll-mt-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <Reveal>
          <div className="mb-14 max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#E8472A] mb-4">
              / stack
            </p>
            <h2 className="text-5xl md:text-6xl font-light text-white leading-[0.95] mb-5">
              Tools I reach for{" "}
              <em className="italic font-normal text-[#E8472A]">first</em>.
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              Two years of production React. Comfortable in the whole frontend
              loop — from Figma into pixels, into state, into shipped code.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Infinite marquee — primary stack */}
      <Reveal>
        <div className="relative py-10 border-y border-white/5 bg-white/[0.02]">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...primary, ...primary].map((s, i) => (
              <span
                key={i}
                className="font-display text-4xl md:text-5xl font-light text-white/80 mx-8 inline-flex items-center gap-8"
              >
                {s}
                <span className="text-[#E8472A] text-2xl">✦</span>
              </span>
            ))}
          </div>
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0e0e10] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0e0e10] to-transparent pointer-events-none" />
        </div>
      </Reveal>

      {/* Categories — 4 columns with mono labels */}
      <div className="max-w-6xl mx-auto px-6 mt-20 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {categories.map((c, i) => (
          <Reveal key={c.label} delay={i * 100}>
            <div className="group">
              <div className="flex items-baseline gap-3 mb-5 pb-3 border-b border-white/10 group-hover:border-[#E8472A]/40 transition-colors">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                  0{i + 1}
                </span>
                <h3 className="font-display text-xl text-white">{c.label}</h3>
              </div>
              <ul className="space-y-2">
                {c.items.map((it) => (
                  <li
                    key={it}
                    className="text-sm text-zinc-400 flex items-center gap-2 group/item"
                  >
                    <span className="w-1 h-1 rounded-full bg-zinc-600 group-hover/item:bg-[#E8472A] transition-colors" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}