import Reveal from "@/components/Reveal";

const skills = [
  { label: "Languages", value: "JavaScript (ES6+), TypeScript, HTML5, CSS3" },
  {
    label: "Frameworks",
    value: "React.js, Next.js, Redux Toolkit, React Hook Form, Yup",
  },
  {
    label: "Styling",
    value: "Tailwind CSS, Sass/SCSS, Styled Components, Bootstrap",
  },
  {
    label: "Workflow",
    value: "Git, GitHub, GitLab, Vite, REST API, Context API",
  },
  {
    label: "AI-Assisted",
    value: "Claude Pro — code review, debugging, rapid UI prototyping",
  },
];

const jobs = [
  {
    id: "01",
    company: "Self-Directed Frontend Projects",
    role: "Independent Developer",
    location: "Tbilisi, Georgia",
    period: "Feb 2025 — Present",
    bullets: [
      "Building production-quality React apps with TypeScript, focused on performance and modern frontend patterns.",
      "Strengthened JavaScript fundamentals (async patterns, closures, DOM internals) and integrated AI-assisted workflows into daily development.",
    ],
  },
  {
    id: "02",
    company: "TIM Consulting MMC",
    role: "Junior Frontend Developer",
    location: "Baku, Azerbaijan",
    period: "Mar 2024 — Sep 2024",
    bullets: [
      "Delivered 3 government and enterprise React platforms used in real production environments.",
      "Ministry of Energy — Digital Permits System: built UI for the unified electronic information system. Stack: React.js, Redux Toolkit, Tailwind CSS, REST API.",
      "EduRobot.AI — Education & Automation Platform: reusable components and state-managed views. Stack: React.js, Context API, Tailwind, REST API.",
      "Ministry of Economy — Food Supply Map System for the Construction-Supply Union.",
      "Collaborated with backend engineers on API contracts and translated Figma designs into pixel-accurate, responsive interfaces.",
    ],
  },
  {
    id: "03",
    company: "Agile Solutions",
    role: "Junior Frontend Developer",
    location: "Baku, Azerbaijan",
    period: "Mar 2023 — Feb 2024",
    bullets: [
      "Built responsive, cross-browser, mobile-friendly interfaces with React, Tailwind CSS, and Bootstrap.",
      "Translated design specs into reusable React components under senior-developer guidance, focusing on consistency and accessibility.",
      "Followed clean-code principles and a structured Git workflow with code reviews and iterative delivery.",
    ],
  },
];

export default function Resume() {
  return (
    <div className="relative max-w-4xl mx-auto px-6 py-20">
      {/* Header */}
      <Reveal>
        <header className="mb-16 flex flex-col md:flex-row md:items-start md:justify-between gap-8 pb-12 border-b border-white/10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#E8472A] mb-4">
              / resume
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-light text-white leading-[0.95] mb-3">
              Phatma{" "}
              <em className="italic font-normal text-[#E8472A]">Kiazumova</em>
            </h1>
            <p className="text-zinc-400 mb-5">
              Frontend Developer · Tbilisi, Georgia (GMT+4) · Open to Remote
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-widest text-zinc-500">
              <a
                href="tel:+994554745313"
                className="hover:text-white transition-colors"
              >
                +994 55 474 5313
              </a>
              <span className="text-zinc-700">·</span>
              <a
                href="mailto:phatmakiazumova@gmail.com"
                className="hover:text-white transition-colors"
              >
                phatmakiazumova@gmail.com
              </a>
              <span className="text-zinc-700">·</span>
              <a href="https://www.linkedin.com/in/phatma-kiazumova/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                LinkedIn ↗
              </a>
              <span className="text-zinc-700">·</span>
              <a href="https://github.com/Phatma0404" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                GitHub ↗
              </a>
            </div>
          </div>

          <a
            href="/Phatma-Kiazumova-CV.pdf"
            download="Phatma-Kiazumova-CV.pdf"
            className="group inline-flex items-center gap-2 bg-[#E8472A] hover:bg-[#d03d22] text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors self-start whitespace-nowrap"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-transform group-hover:translate-y-0.5"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
        </header>
      </Reveal>

      {/* Summary */}
      <Reveal>
        <Section number="01" title="Summary">
          <p className="text-zinc-300 leading-relaxed text-lg">
            Frontend Developer with nearly{" "}
            <span className="text-white font-medium">2 years</span> of
            production experience building responsive React applications,
            including government and enterprise platforms in real-world use.
            Strong in{" "}
            <span className="text-white font-medium">
              JavaScript (ES6+), React.js, and Tailwind CSS
            </span>
            , with hands-on experience in REST APIs, state management (Redux
            Toolkit, Context API), and component-based architecture.
            Comfortable integrating AI-assisted workflows (Claude Pro) into
            day-to-day development. Focused on{" "}
            <em className="italic font-display text-[#E8472A]">
              clean, reusable code
            </em>{" "}
            and shipping fast, maintainable interfaces.
          </p>
        </Section>
      </Reveal>

      {/* Skills */}
      <Reveal>
        <Section number="02" title="Skills">
          <div className="space-y-4">
            {skills.map((s) => (
              <div
                key={s.label}
                className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-2 sm:gap-4 py-2 border-b border-white/5 last:border-0"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-[#E8472A] pt-1">
                  {s.label}
                </span>
                <span className="text-zinc-300 text-sm leading-relaxed">
                  {s.value}
                </span>
              </div>
            ))}
          </div>
        </Section>
      </Reveal>

      {/* Experience */}
      <Reveal>
        <Section number="03" title="Experience">
          <div className="space-y-12">
            {jobs.map((j) => (
              <div key={j.id} className="grid grid-cols-1 md:grid-cols-[5rem_1fr] gap-4">
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 pt-2">
                  {j.id}
                </span>
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
                    <h3 className="font-display text-2xl font-normal text-white">
                      {j.company}
                    </h3>
                    <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 whitespace-nowrap">
                      {j.period}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400 mb-4">
                    {j.role} <span className="text-zinc-600">·</span>{" "}
                    {j.location}
                  </p>
                  <ul className="space-y-2">
                    {j.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="text-sm text-zinc-300 leading-relaxed flex gap-3"
                      >
                        <span className="text-[#E8472A] mt-2 flex-shrink-0 w-2 h-px bg-current" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </Reveal>

      {/* Education + Languages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Reveal>
          <Section number="04" title="Education">
            <div>
              <h3 className="font-display text-xl text-white mb-1">
                Azerbaijan Technical University
              </h3>
              <p className="text-sm text-zinc-400 mb-2">
                B.Sc. in Computer Science
              </p>
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                2017 — 2021
              </p>
            </div>
          </Section>
        </Reveal>

        <Reveal delay={120}>
          <Section number="05" title="Languages">
            <ul className="space-y-3">
              {[
                { lang: "Azerbaijani", level: "Native" },
                { lang: "English", level: "Intermediate (B1)" },
                { lang: "Russian", level: "Beginner" },
              ].map((l) => (
                <li
                  key={l.lang}
                  className="flex items-baseline justify-between gap-4 pb-2 border-b border-white/5 last:border-0"
                >
                  <span className="text-white">{l.lang}</span>
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                    {l.level}
                  </span>
                </li>
              ))}
            </ul>
          </Section>
        </Reveal>
      </div>
    </div>
  );
}

function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-12 border-b border-white/5 last:border-0">
      <div className="flex items-baseline gap-4 mb-8">
        <span className="font-mono text-xs uppercase tracking-widest text-[#E8472A]">
          / {number}
        </span>
        <h2 className="font-display text-3xl font-light text-white">
          {title}
        </h2>
        <span className="flex-1 h-px bg-white/5" />
      </div>
      {children}
    </section>
  );
}