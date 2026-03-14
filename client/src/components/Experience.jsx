import React from "react";
import { Briefcase, Calendar, MapPin, Zap } from "lucide-react";
import FadeIn from "./FadeIn";

const Experience = () => {
  const experiences = [
    {
      company: "Kyoto Creative (Ark Global Ventures)",
      role: "Full Stack Intern",
      period: "Feb 2026 - Present",
      location: "Remote",
      current: true,
      description: [
        <>
          Building full-stack web features using
          <span className="text-cyan-400 font-medium"> React </span>
          and modern
          <span className="text-cyan-400 font-medium"> JavaScript</span>.
        </>,
        <>
          Integrating backend
          <span className="text-cyan-400 font-medium"> APIs </span>
          to enable smooth communication between frontend and server.
        </>,
        <>
          Debugging real-world production issues and improving
          <span className="text-cyan-400 font-medium">
            {" "}
            application performance
          </span>.
        </>,
        <>
          Participating in daily development sessions, sprint discussions,
          and
          <span className="text-cyan-400 font-medium"> code reviews</span>.
        </>,
        <>
          Delivering development tasks within strict timelines using
          <span className="text-cyan-400 font-medium">
            {" "}
            clean code practices
          </span>.
        </>
      ],
      skills: [
        "React",
        "JavaScript",
        "Full Stack Development",
        "API Integration",
        "Debugging"
      ]
    },
    {
      company: "Cyber Cell, Pimpri Chinchwad Police",
      role: "Cyber Security Intern",
      period: "Dec 2025 - Present",
      location: "Pune, Maharashtra",
      current: true,
      description: [
        <>
          Analyzing
          <span className="text-cyan-400 font-medium"> digital footprints </span>
          and server logs to support cybercrime investigations.
        </>,
        <>
          Using
          <span className="text-cyan-400 font-medium"> OSINT tools </span>
          to collect intelligence from open-source platforms.
        </>,
        <>
          Identifying suspicious online activity patterns during
          <span className="text-cyan-400 font-medium">
            {" "}
            technical investigations
          </span>.
        </>,
        <>
          Supporting investigators in processing
          <span className="text-cyan-400 font-medium">
            {" "}
            large technical datasets
          </span>
          under tight timelines.
        </>
      ],
      skills: ["OSINT", "Digital Forensics", "Log Analysis", "Cyber Investigation"]
    },
    {
      company: "Compilers Technologies",
      role: "Software & Web Development Intern",
      period: "June 2023 - July 2023",
      location: "Amravati, Maharashtra",
      current: false,
      description: [
        <>
          Completed hands-on training in
          <span className="text-cyan-400 font-medium">
            {" "}
            Advanced Java
          </span>
          technologies including Swing, JDBC, and Servlets.
        </>,
        <>
          Built
          <span className="text-cyan-400 font-medium">
            {" "}
            GUI desktop applications
          </span>
          with database connectivity using JDBC.
        </>,
        <>
          Developed dynamic backend functionality using
          <span className="text-cyan-400 font-medium">
            {" "}
            Servlet architecture
          </span>.
        </>,
        <>
          Gained exposure to the
          <span className="text-cyan-400 font-medium">
            {" "}
            Software Development Lifecycle
          </span>.
        </>
      ],
      skills: ["Java", "JDBC", "Servlets", "SDLC"]
    }
  ];

  return (
    <section id="experience" className="py-14 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Title */}
      <div className="flex items-center gap-3 mb-12">
        <Briefcase className="text-cyan-400" size={30} />
        <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
          Work Experience
        </h2>
      </div>

      {/* Timeline Container */}
      <div className="relative">

        {/* Timeline Line */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-cyan-400 via-cyan-500/40 to-transparent"></div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row md:items-start group ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Dot */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-400 border-4 border-[#0a0a0a] top-7 z-10 group-hover:scale-125 group-hover:shadow-[0_0_12px_#22d3ee] transition-all duration-300"></div>

            {/* Card */}
            <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
              <FadeIn delay={index * 0.2} direction={index % 2 === 0 ? "left" : "right"}>
                <div className="bg-[#0f0f0f] border border-gray-800 rounded-2xl p-6 transition-all duration-300 hover:border-cyan-400/70 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:-translate-y-1">

                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-gray-400 text-sm">{exp.company}</p>

                      {exp.current && (
                        <span className="inline-flex items-center gap-1 mt-2 text-xs text-green-400 bg-green-500/10 border border-green-500/30 px-2 py-0.5 rounded-md shadow-[0_0_8px_rgba(34,197,94,0.3)]">
                          <Zap size={12} /> Currently Working
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col items-start md:items-end text-sm text-gray-500 gap-1">
                      <span className="flex items-center gap-1.5 bg-gray-900 px-3 py-1 rounded-full border border-gray-800">
                        <Calendar size={14} className="text-cyan-400" />
                        {exp.period}
                      </span>

                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <ul className="space-y-3 mb-5">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start text-gray-400 text-sm leading-6"
                      >
                        <span className="text-cyan-400 mt-[3px] mr-2">•</span>
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-800/60">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </FadeIn>
            </div>

            {/* Spacer */}
            <div className="hidden md:block md:w-1/2"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;