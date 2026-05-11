import Reveal from "./Reveal";

const projects = [
  {
    title: "Project One",
    description:
      "Short description of what this project does and the problem it solves.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    live: "#",
    github: "#",
  },
  {
    title: "Project Two",
    description:
      "Short description of what this project does and the problem it solves.",
    stack: ["Next.js", "TypeScript", "REST API"],
    live: "#",
    github: "#",
  },
  {
    title: "Project Three",
    description:
      "Short description of what this project does and the problem it solves.",
    stack: ["React", "Redux Toolkit", "Tailwind CSS"],
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <Reveal>
          <div className="mb-14">
            <p className="text-xs font-semibold text-[#E8472A] uppercase tracking-widest mb-3">
              Projects
            </p>
            <h2 className="text-4xl font-bold text-white">Selected Work</h2>
          </div>
        </Reveal>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 120}>
              <div
                className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors flex flex-col h-full"
              >
              {/* Placeholder image */}
              <div className="w-full h-40 rounded-xl bg-white/5 mb-6 flex items-center justify-center">
                <span className="text-zinc-600 text-sm">Preview</span>
              </div>

              {/* Info */}
              <h3 className="text-white font-semibold text-lg mb-2">
                {project.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-zinc-400 bg-white/5 border border-white/10 rounded-full px-3 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                <a
                  href={project.live}
                  className="text-sm font-medium text-white hover:text-[#E8472A] transition-colors flex items-center gap-1"
                >
                  Live ↗
                </a>
                <a
                  href={project.github}
                  className="text-sm font-medium text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  GitHub ↗
                </a>
              </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
