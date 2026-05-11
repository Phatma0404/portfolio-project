export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">

      {/* Header */}
      <div className="mb-12 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Phatma Kiazumova</h1>
          <p className="text-[#E8472A] font-medium mb-4">
            Frontend Developer · Tbilisi, Georgia (GMT+4) · Open to Remote
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
            <a href="tel:+994554745313" className="hover:text-white transition-colors">
              +994 55 474 5313
            </a>
            <a href="mailto:phatmakiazumova@gmail.com" className="hover:text-white transition-colors">
              phatmakiazumova@gmail.com
            </a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn ↗</a>
            <a href="#" className="hover:text-white transition-colors">GitHub ↗</a>
          </div>
        </div>

        <a
          href="/Phatma-Kiazumova-CV.pdf"
          download="Phatma-Kiazumova-CV.pdf"
          className="inline-flex items-center gap-2 bg-[#E8472A] hover:bg-[#d03d22] text-white text-sm font-semibold px-5 py-3 rounded-lg transition-colors self-start whitespace-nowrap"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download CV
        </a>
      </div>

      <Divider />

      {/* Summary */}
      <Section title="Professional Summary">
        <p className="text-zinc-400 leading-relaxed">
          Frontend Developer with nearly 2 years of production experience building responsive React
          applications, including government and enterprise platforms in real-world use. Strong in
          JavaScript (ES6+), React.js, and Tailwind CSS, with hands-on experience in REST APIs,
          state management (Redux Toolkit, Context API), and component-based architecture.
          Comfortable integrating AI-assisted workflows (Claude Pro) into day-to-day development
          for code review, debugging, and rapid prototyping. Focused on clean, reusable code and
          shipping fast, maintainable interfaces.
        </p>
      </Section>

      <Divider />

      {/* Skills */}
      <Section title="Skills & Technologies">
        <div className="space-y-3">
          {[
            { label: "Languages", value: "JavaScript (ES6+), TypeScript, HTML5, CSS3" },
            { label: "Frameworks & Libraries", value: "React.js, Next.js, Redux Toolkit, React Hook Form, Yup" },
            { label: "Styling", value: "Tailwind CSS, Sass/SCSS, Styled Components, Bootstrap, React-Bootstrap" },
            { label: "Tools & Workflow", value: "Git, GitHub, GitLab, Vite, REST API, Context API" },
            { label: "AI-Assisted Dev", value: "Claude Pro — code review, debugging, and rapid UI prototyping" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col sm:flex-row sm:gap-3">
              <span className="text-white font-medium text-sm min-w-44">{item.label}</span>
              <span className="text-zinc-400 text-sm">{item.value}</span>
            </div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* Experience */}
      <Section title="Work Experience">
        <div className="space-y-10">

          <Job
            company="Self-Directed Frontend Projects"
            role="Independent Developer"
            location="Tbilisi, Georgia"
            period="Feb 2025 – Present"
            bullets={[
              "Building production-quality React apps with TypeScript, focusing on performance and modern frontend patterns.",
              "Strengthened JavaScript fundamentals (async patterns, closures, DOM internals) and integrated AI-assisted workflows into daily development.",
            ]}
          />

          <Job
            company="TIM Consulting MMC"
            role="Junior Frontend Developer"
            location="Baku, Azerbaijan"
            period="Mar 2024 – Sep 2024"
            bullets={[
              "Delivered 3 government and enterprise React platforms used in real production environments.",
              "Ministry of Energy — Digital Permits System: built UI for the unified electronic information system. Stack: React.js, Redux Toolkit, Tailwind CSS, REST API.",
              "EduRobot.AI — Education & Automation Platform: developed reusable components and state-managed views. Stack: React.js, Context API, Tailwind CSS, REST API.",
              "Ministry of Economy — Food Supply Map System for the Construction-Supply Union. Stack: React.js, Tailwind CSS, React-Bootstrap.",
              "Collaborated with backend engineers on API contracts and translated Figma designs into pixel-accurate, responsive interfaces.",
            ]}
          />

          <Job
            company="Agile Solutions"
            role="Junior Frontend Developer"
            location="Baku, Azerbaijan"
            period="Mar 2023 – Feb 2024"
            bullets={[
              "Built responsive, cross-browser, mobile-friendly interfaces with React, Tailwind CSS, and Bootstrap.",
              "Translated design specs into reusable React components under senior-developer guidance, focusing on consistency and accessibility.",
              "Followed clean-code principles and a structured Git workflow in a team-based environment with code reviews and iterative delivery.",
              "Gained hands-on experience in real-world frontend workflows: branching strategies, pull requests, and component-based development.",
            ]}
          />

        </div>
      </Section>

      <Divider />

      {/* Education */}
      <Section title="Education">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <div>
            <p className="text-white font-semibold">Azerbaijan Technical University</p>
            <p className="text-zinc-400 text-sm">B.Sc. in Computer Science</p>
          </div>
          <span className="text-zinc-500 text-sm">2017 – 2021</span>
        </div>
      </Section>

      <Divider />

      {/* Languages */}
      <Section title="Languages">
        <div className="flex flex-wrap gap-3">
          {[
            { lang: "Azerbaijani", level: "Native" },
            { lang: "English", level: "Intermediate (B1)" },
            { lang: "Russian", level: "Beginner" },
          ].map((l) => (
            <div key={l.lang} className="bg-white/5 border border-white/10 rounded-lg px-4 py-2">
              <p className="text-white text-sm font-medium">{l.lang}</p>
              <p className="text-zinc-500 text-xs">{l.level}</p>
            </div>
          ))}
        </div>
      </Section>

    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="py-8">
      <h2 className="text-xs font-semibold text-[#E8472A] uppercase tracking-widest mb-5">
        {title}
      </h2>
      {children}
    </div>
  );
}

function Divider() {
  return <hr className="border-white/5" />;
}

function Job({
  company,
  role,
  location,
  period,
  bullets,
}: {
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
}) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
        <div>
          <p className="text-white font-semibold">{company}</p>
          <p className="text-zinc-400 text-sm">
            {role} · {location}
          </p>
        </div>
        <span className="text-zinc-500 text-sm whitespace-nowrap">{period}</span>
      </div>
      <ul className="space-y-1.5">
        {bullets.map((b, i) => (
          <li key={i} className="text-zinc-400 text-sm flex gap-2">
            <span className="text-[#E8472A] mt-1 flex-shrink-0">·</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}
