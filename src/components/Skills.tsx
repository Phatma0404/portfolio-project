import Reveal from "./Reveal";

const categories = [
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["React.js", "Next.js", "Redux Toolkit", "React Hook Form", "Yup"],
  },
  {
    title: "Styling",
    items: [
      "Tailwind CSS",
      "Sass / SCSS",
      "Styled Components",
      "Bootstrap",
      "React-Bootstrap",
    ],
  },
  {
    title: "Tools & Workflow",
    items: ["Git", "GitHub", "GitLab", "Vite", "REST API", "Context API"],
  },
  {
    title: "AI-Assisted Dev",
    items: ["Claude Pro", "Code review", "Debugging", "Rapid prototyping"],
  },
  {
    title: "Practices",
    items: [
      "Responsive design",
      "Accessibility",
      "Clean code",
      "Component architecture",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <Reveal>
          <div className="mb-14">
            <p className="text-xs font-semibold text-[#E8472A] uppercase tracking-widest mb-3">
              Skills
            </p>
            <h2 className="text-4xl font-bold text-white">What I Work With</h2>
          </div>
        </Reveal>

        {/* Categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 100}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-white/20 transition-colors h-full">
                <h3 className="text-white font-semibold text-lg mb-4">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs text-zinc-400 bg-white/5 border border-white/10 rounded-full px-3 py-1"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
