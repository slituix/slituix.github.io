import { Github, Twitter } from "lucide-react"

export default function HomePage() {
  const skills = [
    "Kotlin",
    "TypeScript",
    "JavaScript",
    "Rust",
    "HTML",
    "CSS",
    "Next.js",
    "shadcn/ui",
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-[#F5F1E8] via-[#FAF8F3] to-[#F0EBE0] dark:from-[#1A1816] dark:via-[#0F0E0D] dark:to-[#1A1816]">
      <div className="grow">
        <div className="max-w-4xl mx-auto px-6 py-20 sm:px-8 sm:py-32">
          {/* Header */}
          <header className="mb-20">
            <div className="inline-block mb-4">
              <span className="text-sm font-sans font-medium text-[#8B7355] dark:text-[#B4A192] tracking-wide">
                DEVELOPER & DESIGNER
              </span>
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-8xl font-sans font-bold text-[#2D2420] dark:text-[#E8DFD4] mb-6 leading-none">
              @2f1b08e
            </h1>

            <p className="text-xl sm:text-2xl text-[#5C4E42] dark:text-[#C4B5A6] max-w-2xl leading-relaxed mb-8">
              I craft beautiful user interfaces and build elegant web experiences
              with modern technologies. Passionate about design systems and
              thoughtful code.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/2f1b08e"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-3 bg-[#2D2420] dark:bg-[#E8DFD4] text-[#F5F1E8] dark:text-[#2D2420] rounded-full hover:bg-[#3D342F] dark:hover:bg-[#D4C7B8] transition-all duration-200 hover:scale-105"
              >
                <Github className="w-5 h-5" />
                <span className="font-sans font-medium">GitHub</span>
              </a>

              <a
                href="https://x.com/2f1b08e"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-3 bg-[#E8DFD4] dark:bg-[#2A2522] text-[#2D2420] dark:text-[#E8DFD4] rounded-full hover:bg-[#D4C7B8] dark:hover:bg-[#3D342F] transition-all duration-200 hover:scale-105"
              >
                <Twitter className="w-5 h-5" />
                <span className="font-sans font-medium">X (Twitter)</span>
              </a>
            </div>
          </header>

          {/* Skills Section */}
          <section className="mb-20">
            <h2 className="text-sm font-sans font-medium text-[#8B7355] dark:text-[#B4A192] tracking-wide mb-6">
              SKILLS & TECHNOLOGIES
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className="group relative px-4 py-4 bg-[#FDFCFA] dark:bg-[#211E1C] rounded-xl border border-[#E8DFD4] dark:border-[#2A2522] hover:border-[#C4B5A6] dark:hover:border-[#3D342F] transition-all duration-200 hover:shadow-lg hover:shadow-[#8B7355]/5 dark:hover:shadow-[#E8DFD4]/5"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-[#2D2420] dark:text-[#E8DFD4] font-medium text-base">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* About Section */}
          <section className="mb-20">
            <h2 className="text-sm font-sans font-medium text-[#8B7355] dark:text-[#B4A192] tracking-wide mb-6">
              ABOUT ME
            </h2>

            <div className="bg-[#FDFCFA] dark:bg-[#211E1C] rounded-2xl border border-[#E8DFD4] dark:border-[#2A2522] p-8 sm:p-10 shadow-xl shadow-[#8B7355]/5 dark:shadow-[#E8DFD4]/5">
              <p className="text-lg text-[#5C4E42] dark:text-[#C4B5A6] leading-relaxed mb-4">
                I&apos;m a developer who loves the intersection of design and code. My
                focus is on creating interfaces that are not only functional but
                truly delightful to use.
              </p>
              <p className="text-lg text-[#5C4E42] dark:text-[#C4B5A6] leading-relaxed mb-4">
                I work primarily with Next.js and shadcn/ui, leveraging modern web
                technologies to build fast, accessible, and beautiful
                applications. Whether it&apos;s TypeScript, Rust, or Kotlin, I choose
                the right tool for the job.
              </p>
              <p className="text-lg text-[#5C4E42] dark:text-[#C4B5A6] leading-relaxed">
                When I&apos;m not coding, I&apos;m exploring design systems, studying
                typography, and finding inspiration in great interface design.
              </p>
            </div>
          </section>

          {/* Footer */}
          <footer className="pt-12 border-t border-[#E8DFD4] dark:border-[#2A2522]">
            <p className="text-sm text-[#8B7355] dark:text-[#B4A192] text-center px-12">
              © 2025 @2f1b08e. Built with Next.js and passion for beautiful UI.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
