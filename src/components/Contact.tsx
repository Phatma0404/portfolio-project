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
    <section id="contact" className="py-24 px-6 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <Reveal>
          <div className="mb-14">
            <p className="text-xs font-semibold text-[#E8472A] uppercase tracking-widest mb-3">
              Contact
            </p>
            <h2 className="text-4xl font-bold text-white">Let's Work Together</h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <Reveal delay={100}>
            <div>
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-zinc-400">Available for work</span>
            </div>

            <p className="text-zinc-400 text-base leading-relaxed mb-8 max-w-md">
              Have a project in mind, a role to fill, or just want to say hi?
              The fastest way to reach me is email — I usually reply within a
              day.
            </p>

            <a
              href="mailto:phatmakiazumova@gmail.com"
              className="inline-flex items-center gap-2 bg-[#E8472A] hover:bg-[#d03d22] text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              phatmakiazumova@gmail.com →
            </a>
            </div>
          </Reveal>

          {/* Right — other ways to reach */}
          <Reveal delay={200}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold text-lg mb-4">
                Other ways
              </h3>
              <ul className="flex flex-col divide-y divide-white/5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      target="_blank"
                      href={link.href}
                      className="group flex items-center justify-between py-4 hover:text-white transition-colors"
                    >
                      <span className="text-sm text-zinc-500">{link.label}</span>
                      <span className="text-sm text-zinc-300 group-hover:text-[#E8472A] transition-colors">
                        {link.value} ↗
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
