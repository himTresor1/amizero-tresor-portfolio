"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "thoughts", "connect"].map((section) => (
            <button
              key={section}
              onClick={() =>
                document
                  .getElementById(section)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section
                  ? "bg-foreground"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-8 lg:px-16">
        <header
          id="intro"
          ref={(el) => (sectionsRef.current[0] = el)}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-16 w-full">
            <div className="lg:col-span-3 space-y-8">
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground font-mono tracking-wider">
                  PORTFOLIO / 2025
                </div>
                <h1 className="text-6xl lg:text-7xl font-light tracking-tight">
                  AMIZERO
                  <br />
                  <span className="text-muted-foreground">Peace Tresor</span>
                </h1>
              </div>

              <div className="space-y-6 max-w-md">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Passionate fullstack developer and UI/UX designer creating
                  <span className="text-foreground"> intuitive</span> and
                  <span className="text-foreground"> impactful</span> digital
                  experiences that solve
                  <span className="text-foreground"> real-world problems</span>.
                </p>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Available for work
                  </div>
                  <div>Kigali, Rwanda</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-end space-y-8">
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">
                  CURRENTLY
                </div>
                <div className="space-y-2">
                  <div className="text-foreground">
                    Product Designer / Frontend Developer
                  </div>
                  <div className="text-muted-foreground">
                    @ Development Bank of Rwanda (BRD)
                  </div>
                  <div className="text-xs text-muted-foreground">
                    2024 — Present
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-muted-foreground font-mono">
                  FOCUS
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "TypeScript",
                    "Next.js",
                    "Node.js",
                    "UI/UX Design",
                    "Figma",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="work"
          ref={(el) => (sectionsRef.current[1] = el)}
          className="min-h-screen py-32"
        >
          <div className="space-y-16">
            <div className="flex items-end justify-between">
              <h2 className="text-4xl font-light">Professional Experience</h2>
              <div className="text-sm text-muted-foreground font-mono">
                2023 — 2025
              </div>
            </div>

            <div className="space-y-12">
              {[
                {
                  year: "2024",
                  role: "Frontend Developer and UI/UX Designer",
                  company: "GradPal",
                  description:
                    "Contributed to the development of GradPal Marketplace all-in-one platform to request academic help, share knowledge, and grow through meaningful learning experiences. Solo created the UI/UX blueprint of the whole marketplace, putting in place the wireframes and the high fidelity design system. Conducted user testing, reducing application processing time by 40% to expedite student financial aid.",
                  tech: ["React", "Figma", "User Testing"],
                },
                {
                  year: "2024",
                  role: "Product Designer / Frontend Developer",
                  company: "Development Bank of Rwanda (BRD)",
                  description:
                    "Contributing to MINUZA system for student loan management serving 10,000+ students. Developed BRD PROCUREMENT and other key projects supporting Rwanda's development mission.",
                  tech: ["React", "TypeScript", "Figma"],
                },
                {
                  year: "2024",
                  role: "Fullstack Engineer Intern",
                  company: "Ministry of Infrastructure (MININFRA)",
                  description:
                    "Developed KIVU-NAV-AID system enhancing maritime safety for 200+ vessels in Lake Kivu. Optimized system performance, reducing load times by 25%.",
                  tech: ["React", "Node.js", "PostgreSQL"],
                },
                {
                  year: "2024",
                  role: "Software Engineer",
                  company: "EmissionLog (REMA)",
                  description:
                    "Contributed to greenhouse gas management system for calculating and tracking emissions, supporting Rwanda's environmental compliance goals.",
                  tech: ["JavaScript", "Node.js", "MongoDB"],
                },
                {
                  year: "2023",
                  role: "UI/UX Designer / Frontend Developer",
                  company: "Rwanda TVET Board (RTB)",
                  description:
                    "Designed TVET Management Portal streamlining processes for 4,800+ trainers. Achieved 30% improvement in user satisfaction through research and testing.",
                  tech: ["React", "Figma", "Tailwind"],
                },
                {
                  year: "2023",
                  role: "Product Designer",
                  company: "Rwanda Coding Academy (RCA)",
                  description:
                    "Developed RCA-MIS school management system automating teacher/student management, marks recording, and administrative processes.",
                  tech: ["React", "Node.js", "MySQL"],
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="group grid lg:grid-cols-12 gap-8 py-8 border-b border-border/50 hover:border-border transition-colors duration-500"
                >
                  <div className="lg:col-span-2">
                    <div className="text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                      {job.year}
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <div>
                      <h3 className="text-xl font-medium">{job.role}</h3>
                      <div className="text-muted-foreground">{job.company}</div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">
                      {job.description}
                    </p>
                  </div>

                  <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="thoughts"
          ref={(el) => (sectionsRef.current[2] = el)}
          className="min-h-screen py-32"
        >
          <div className="space-y-16">
            <h2 className="text-4xl font-light">Skills & Expertise</h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {[
                {
                  title: "Frontend Development",
                  excerpt:
                    "Expertise in React, Next.js, TypeScript, and modern JavaScript frameworks for building responsive web applications.",
                  category: "Development",
                  skills: "React, Next.js, TypeScript",
                },
                {
                  title: "Backend Development",
                  excerpt:
                    "Proficient in Node.js, Nest.js, and database management with PostgreSQL, MongoDB, and MySQL.",
                  category: "Development",
                  skills: "Node.js, Nest.js, Databases",
                },
                {
                  title: "UI/UX Design",
                  excerpt:
                    "User research, wireframing, prototyping, and visual design using Figma, Adobe XD, and design thinking methodologies.",
                  category: "Design",
                  skills: "Figma, User Research, Prototyping",
                },
                {
                  title: "Mobile Development",
                  excerpt:
                    "Building cross-platform mobile applications using React Native and Expo for iOS and Android platforms.",
                  category: "Development",
                  skills: "React Native, Expo",
                },
              ].map((skill, index) => (
                <article
                  key={index}
                  className="group p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                      <span>{skill.category}</span>
                      <span>{skill.skills}</span>
                    </div>

                    <h3 className="text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                      {skill.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {skill.excerpt}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="connect"
          ref={(el) => (sectionsRef.current[3] = el)}
          className="py-32"
        >
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl font-light">Let's Connect</h2>

              <div className="space-y-6">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Always interested in new opportunities, collaborations, and
                  conversations about technology, design, and innovation in
                  Rwanda's tech ecosystem.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="text-sm text-muted-foreground font-mono">
                EDUCATION & CERTIFICATIONS
              </div>

              <div className="space-y-6">
                <div className="p-4 border border-border rounded-lg">
                  <div className="space-y-2">
                    <div className="text-foreground font-medium">
                      Rwanda Coding Academy
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Software Development • 2021 — 2024
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Specialized in Software Development, Embedded Systems, and
                      Cybersecurity
                    </div>
                  </div>
                </div>

                <div className="p-4 border border-border rounded-lg">
                  <div className="space-y-2">
                    <div className="text-foreground font-medium">
                      Petit Séminaire St Léon
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Secondary Education • 2018 — 2020
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Humanities, Sciences, and Religious Studies
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-sm text-muted-foreground font-mono">
                    CERTIFICATIONS
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div>• FreeCode Camp - User Experience and Design</div>
                    <div>• RCA - Wireframing and Prototyping</div>
                    <div>• 3rd Position - RCA's First Hackathon</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                © 2025 AMIZERO Peace Tresor. All rights reserved.
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414 0zM5.05 17.536A1 1 0 106.465 18.945l-.708.707a1 1 0 00-1.414-1.414l.707-.707a1 1 0 001.414 0zM18.945 5.05A1 1 0 1017.536 6.464l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 0zM18.945 18.945A1 1 0 1017.536 17.536l.707-.707a1 1 0 001.414 1.414l-.707.707a1 1 0 00-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>

              <Link
                href="https://wa.me/250792999642"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Contact via WhatsApp"
              >
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </Link>

              <Link
                href="https://www.linkedin.com/in/amizero-tresor-89b2b222b/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Connect on LinkedIn"
              >
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>

              <Link
                href="https://www.instagram.com/tresorr_officiel/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Follow on Instagram"
              >
                <svg
                  className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.057-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
