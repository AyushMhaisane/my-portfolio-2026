import React, { useState } from "react";
import { Briefcase, Calendar, MapPin, Zap, ChevronDown } from "lucide-react";

const EXPERIENCES = [
  {
    company: "Kyoto Creative (Ark Global Ventures)",
    role: "Full Stack Intern",
    period: "Feb 2026 – Present",
    location: "Remote",
    current: true,
    accent: "#06b6d4",
    accentBg: "rgba(6,182,212,0.07)",
    accentBorder: "rgba(6,182,212,0.2)",
    letter: "K",
    description: [
      <>Building full-stack web features using <span className="text-cyan-400 font-medium">React</span> and modern <span className="text-cyan-400 font-medium">JavaScript</span>.</>,
      <>Integrating backend <span className="text-cyan-400 font-medium">APIs</span> to enable smooth communication between frontend and server.</>,
      <>Debugging real-world production issues and improving <span className="text-cyan-400 font-medium">application performance</span>.</>,
      <>Participating in daily development sessions, sprint discussions, and <span className="text-cyan-400 font-medium">code reviews</span>.</>,
      <>Delivering development tasks within strict timelines using <span className="text-cyan-400 font-medium">clean code practices</span>.</>,
    ],
    skills: ["React", "JavaScript", "Full Stack Development", "API Integration", "Debugging"],
  },
  {
    company: "Cyber Cell, Pimpri Chinchwad Police",
    role: "Cyber Security Intern",
    period: "Dec 2025 – Present",
    location: "Pune, Maharashtra",
    current: true,
    accent: "#10b981",
    accentBg: "rgba(16,185,129,0.07)",
    accentBorder: "rgba(16,185,129,0.2)",
    letter: "C",
    description: [
      <>Analyzing <span className="text-emerald-400 font-medium">digital footprints</span> and server logs to support cybercrime investigations.</>,
      <>Using <span className="text-emerald-400 font-medium">OSINT tools</span> to collect intelligence from open-source platforms.</>,
      <>Identifying suspicious online activity patterns during <span className="text-emerald-400 font-medium">technical investigations</span>.</>,
      <>Supporting investigators in processing <span className="text-emerald-400 font-medium">large technical datasets</span> under tight timelines.</>,
    ],
    skills: ["OSINT", "Digital Forensics", "Log Analysis", "Cyber Investigation"],
  },
  {
    company: "Compilers Technologies",
    role: "Software & Web Development Intern",
    period: "June 2023 – July 2023",
    location: "Amravati, Maharashtra",
    current: false,
    accent: "#a78bfa",
    accentBg: "rgba(167,139,250,0.07)",
    accentBorder: "rgba(167,139,250,0.2)",
    letter: "CT",
    description: [
      <>Completed hands-on training in <span className="text-violet-400 font-medium">Advanced Java</span> technologies including Swing, JDBC, and Servlets.</>,
      <>Built <span className="text-violet-400 font-medium">GUI desktop applications</span> with database connectivity using JDBC.</>,
      <>Developed dynamic backend functionality using <span className="text-violet-400 font-medium">Servlet architecture</span>.</>,
      <>Gained exposure to the <span className="text-violet-400 font-medium">Software Development Lifecycle</span>.</>,
    ],
    skills: ["Java", "JDBC", "Servlets", "SDLC"],
  },
];

const ExperienceCard = ({ exp, index }) => {
  const [open, setOpen] = useState(index === 0);

  return (
    <div
      className="relative pl-10 md:pl-14"
      style={{ animation: `fadeUp 0.5s ${index * 0.12}s ease both` }}
    >
      {/* Timeline dot */}
      <div
        className="absolute left-0 top-6 w-4 h-4 rounded-full border-[3px] border-[#080b10] z-10 transition-transform duration-300"
        style={{ background: exp.accent, boxShadow: `0 0 12px ${exp.accent}60` }}
      />

      {/* Card */}
      <div
        className="rounded-2xl border transition-all duration-300 overflow-hidden"
        style={{
          background: open ? exp.accentBg : "rgba(255,255,255,0.02)",
          borderColor: open ? exp.accentBorder : "rgba(255,255,255,0.07)",
        }}
      >
        {/* Header — always visible */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-start gap-4 p-5 md:p-6 text-left"
        >
          {/* Company avatar */}
          <div
            className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center text-xs font-extrabold"
            style={{
              background: exp.accentBg,
              border: `1px solid ${exp.accentBorder}`,
              color: exp.accent,
              fontFamily: "Syne, sans-serif",
            }}
          >
            {exp.letter}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-0.5">
              <h3
                className="text-base font-bold text-white leading-tight"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                {exp.role}
              </h3>
              {exp.current && (
                <span
                  className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full"
                  style={{
                    background: "rgba(16,185,129,0.1)",
                    border: "1px solid rgba(16,185,129,0.25)",
                    color: "#10b981",
                  }}
                >
                  <Zap size={9} /> Live
                </span>
              )}
            </div>
            <p className="text-sm text-white/40 truncate">{exp.company}</p>

            <div className="flex flex-wrap gap-3 mt-2">
              <span className="flex items-center gap-1 text-[11px] text-white/30">
                <Calendar size={11} style={{ color: exp.accent }} />
                {exp.period}
              </span>
              <span className="flex items-center gap-1 text-[11px] text-white/30">
                <MapPin size={11} />
                {exp.location}
              </span>
            </div>
          </div>

          <ChevronDown
            size={16}
            className="flex-shrink-0 mt-1 text-white/30 transition-transform duration-300"
            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        </button>

        {/* Expandable body */}
        <div
          className="overflow-hidden transition-all duration-400"
          style={{ maxHeight: open ? "600px" : "0px" }}
        >
          <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
            {/* Divider */}
            <div
              className="h-px mb-5"
              style={{ background: `linear-gradient(to right, ${exp.accentBorder}, transparent)` }}
            />

            {/* Description */}
            <ul className="space-y-3 mb-5">
              {exp.description.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-white/55 leading-relaxed">
                  <span
                    className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: exp.accent }}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-[11px] font-medium px-3 py-1 rounded-full transition-all duration-200"
                  style={{
                    background: exp.accentBg,
                    border: `1px solid ${exp.accentBorder}`,
                    color: exp.accent,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => (
  <section id="experience" className="relative py-24 px-5 bg-[#080b10] overflow-hidden">

    {/* Ambient blob */}
    <div className="pointer-events-none absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/[0.04] blur-[100px]" />

    <div className="relative z-10 max-w-3xl mx-auto">

      {/* Header */}
      <div className="mb-14 text-center">
        <p className="text-[11px] font-semibold tracking-[0.2em] text-white/30 uppercase mb-3">
          Where I've worked
        </p>
        <h2
          className="text-4xl md:text-5xl font-extrabold text-white"
          style={{ fontFamily: "Syne, sans-serif", letterSpacing: "-1px" }}
        >
          Work <span className="text-cyan-400">Experience</span>
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div
          className="absolute left-[7px] top-0 w-px h-full"
          style={{ background: "linear-gradient(to bottom, rgba(6,182,212,0.4), rgba(6,182,212,0.05) 80%, transparent)" }}
        />

        <div className="flex flex-col gap-5">
          {EXPERIENCES.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} index={i} />
          ))}
        </div>
      </div>

      {/* End of timeline */}
      <div className="pl-10 md:pl-14 mt-6">
        <p className="text-xs text-white/20 flex items-center gap-2">
          <span className="w-3 h-px bg-white/20" />
          More experience to come
        </p>
      </div>
    </div>

    <style>{`
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(18px); }
        to   { opacity: 1; transform: translateY(0);    }
      }
    `}</style>
  </section>
);

export default Experience;