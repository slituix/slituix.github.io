import { Github, Twitter, Mail, ExternalLink } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function HomePage() {
  const skills = [
    {
      name: "Kotlin",
      category: "Android & Backend",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 256">
          <defs>
            <linearGradient id="kotlinGrad" x1="99.991%" x2=".01%" y1="-.011%" y2="100.01%">
              <stop offset=".344%" stopColor="#e44857"></stop>
              <stop offset="46.89%" stopColor="#c711e1"></stop>
              <stop offset="100%" stopColor="#7f52ff"></stop>
            </linearGradient>
          </defs>
          <path fill="url(#kotlinGrad)" d="M256 256H0V0h256L128 127.949z"></path>
        </svg>
      ),
    },
    {
      name: "TypeScript",
      category: "Type-safe JavaScript",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="#007acc" rx="60"></rect>
          <path fill="#fff" d="m56.611 128.849l-.081 10.484h33.32v94.679h23.569v-94.679h33.32v-10.281c0-5.689-.121-10.443-.284-10.565c-.122-.162-20.399-.244-44.983-.203l-44.739.122zm149.956-10.741c6.501 1.626 11.459 4.511 16.01 9.224c2.357 2.52 5.851 7.112 6.136 8.209c.081.325-11.053 7.802-17.798 11.987c-.244.163-1.22-.894-2.317-2.519c-3.291-4.795-6.745-6.868-12.028-7.233c-7.761-.529-12.759 3.535-12.718 10.321c0 1.991.284 3.169 1.097 4.795c1.706 3.535 4.876 5.648 14.832 9.955c18.326 7.884 26.168 13.085 31.045 20.48c5.445 8.249 6.664 21.415 2.966 31.208c-4.063 10.646-14.141 17.879-28.323 20.277c-4.388.772-14.791.65-19.504-.203c-10.281-1.829-20.033-6.908-26.047-13.572c-2.357-2.601-6.949-9.387-6.664-9.875c.121-.162 1.178-.812 2.356-1.503c1.138-.65 5.446-3.129 9.509-5.486l7.355-4.267l1.544 2.276c2.154 3.291 6.867 7.802 9.712 9.305c8.167 4.308 19.383 3.698 24.909-1.259c2.357-2.154 3.332-4.389 3.332-7.68c0-2.967-.366-4.267-1.91-6.502c-1.991-2.844-6.054-5.242-17.595-10.24c-13.206-5.689-18.895-9.224-24.096-14.832c-3.007-3.25-5.852-8.452-7.03-12.8c-.975-3.616-1.219-12.678-.447-16.335c2.722-12.759 12.353-21.658 26.25-24.3c4.511-.853 14.994-.528 19.424.569"></path>
        </svg>
      ),
    },
    {
      name: "JavaScript",
      category: "Web Development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="#f0db4f" rx="60"></rect>
          <path fill="#323330" d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.889-3.092 12.889-15.12v-81.798h24.058v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.579c-17.357-7.388-28.871-16.668-28.871-36.258c0-18.044 13.748-31.792 35.229-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.731 12.029c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.139 14.778 14.608l6.014 2.577c20.449 8.765 31.963 17.699 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574"></path>
        </svg>
      ),
    },
    {
      name: "Next.js 16",
      category: "React Framework",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 128 128" className="text-foreground">
          <path fill="currentColor" d="M64 0A64 64 0 0 0 0 64a64 64 0 0 0 64 64a64 64 0 0 0 35.508-10.838L47.014 49.34v40.238H38.4V38.4h10.768l57.125 73.584A64 64 0 0 0 128 64A64 64 0 0 0 64 0m17.777 38.4h8.534v48.776L81.777 75.97Zm24.18 73.92l-.111.096z"></path>
        </svg>
      ),
    },
    {
      name: "shadcn/ui",
      category: "Component Library",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" className="text-foreground">
          <path fill="currentColor" d="M22.219 11.784L11.784 22.219a1.045 1.045 0 0 0 1.476 1.476L23.695 13.26a1.045 1.045 0 0 0-1.476-1.476M20.132.305L.305 20.132a1.045 1.045 0 0 0 1.476 1.476L21.608 1.781A1.045 1.045 0 0 0 20.132.305"></path>
        </svg>
      ),
    },
    {
      name: "HTML5",
      category: "Web Fundamentals",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="-52.5 0 361 361">
          <path fill="#e44d26" d="m255.555 70.766l-23.241 260.36l-104.47 28.962l-104.182-28.922L.445 70.766z"></path>
          <path fill="#f16529" d="m128 337.95l84.417-23.403l19.86-222.49H128z"></path>
          <path fill="#ebebeb" d="M82.82 155.932H128v-31.937H47.917l.764 8.568l7.85 88.01H128v-31.937H85.739zm7.198 80.61h-32.06l4.474 50.146l65.421 18.16l.147-.04V271.58l-.14.037l-35.568-9.604z"></path>
          <path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0M92.83 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88zm62.74 0h16.235v32.508h22.824v16.05h-39.06z"></path>
          <path fill="#fff" d="M127.89 220.573h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08l.779-8.576H127.89zm0-64.719v.078h77.143l.64-7.178l1.456-16.191l.763-8.568H127.89z"></path>
        </svg>
      ),
    },
    {
      name: "Tailwind CSS",
      category: "Utility-First CSS",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 128 128">
          <path fill="#38bdf8" d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597c6.398-8.531 13.867-11.73 22.398-9.597c4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602q-9.6 12.803-22.399 9.602c-4.87-1.215-8.347-4.746-12.207-8.66c-6.27-6.367-13.53-13.738-29.394-13.738M32.004 64c-17.066 0-27.73 8.531-32 25.602Q9.603 76.799 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66c6.274 6.367 13.536 13.738 29.395 13.738c17.066 0 27.73-8.53 32-25.597q-9.6 12.797-22.399 9.597c-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64m0 0"></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20 sm:px-8 sm:py-32">
        {/* Header */}
        <header className="mb-24">
          <div className="inline-block mb-6">
            <span className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
              Developer & Designer
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-foreground mb-8 leading-none tracking-tight">
            Saksham
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
            I craft beautiful user interfaces and build elegant web experiences
            with modern technologies. Passionate about design systems and
            thoughtful code.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap gap-3">
            <a
              href="https://github.com/slituix"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-all duration-200 hover:scale-105 font-medium text-sm"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>

            <a
              href="https://x.com/_slituix"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-all duration-200 hover:scale-105 font-medium text-sm"
            >
              <Twitter className="w-4 h-4" />
              <span>Twitter</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>

            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-full hover:bg-accent/80 transition-all duration-200 hover:scale-105 font-medium text-sm"
            >
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </a>
          </div>
        </header>

        {/* Skills Section */}
        <section className="mb-24">
          <h2 className="text-sm font-medium text-muted-foreground tracking-wide mb-8 uppercase">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative bg-card rounded-2xl border border-border hover:border-accent-foreground/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <div className="p-6 flex items-center gap-4">
                  <div className="shrink-0 w-12 h-12 flex items-center justify-center">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {skill.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="mb-24">
          <h2 className="text-sm font-medium text-muted-foreground tracking-wide mb-8 uppercase">
            About Me
          </h2>

          <div className="bg-card rounded-2xl border border-border p-8 sm:p-10 shadow-sm">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              I'm a developer who loves the intersection of design and code. My
              focus is on creating interfaces that are not only functional but
              truly delightful to use.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              I work primarily with Next.js 16 and shadcn/ui, leveraging modern
              web technologies to build fast, accessible, and beautiful
              applications. Whether it's TypeScript, Rust, or Kotlin, I choose
              the right tool for the job.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, I'm exploring design systems, studying
              typography, and finding inspiration in great interface design.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © 2025 Saksham All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>Powered by</span>
              <span className="font-medium">Vercel</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
