import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
// 1. Import FadeIn
import FadeIn from './FadeIn';

const Experience = () => {
  const experiences = [
    {
      company: "Cyber Cell, Pimpri Chinchwad Police",
      role: "Cyber Security Intern",
      period: "Dec 2025 - Present",
      location: "Pune, Maharashtra",
      description: [
        "Assisting officials in analyzing digital footprints and server logs to extract actionable intelligence.",
        "Utilizing OSINT (Open Source Intelligence) tools to gather and structure sensitive data while adhering to privacy protocols.",
        "Collaborating with the technical investigation team to process large datasets under tight deadlines."
      ],
      skills: ["OSINT", "Data Analysis", "Server Logs"]
    },
    {
      company: "Compilers Technologies",
      role: "Software & Web Development Intern",
      period: "June 2023 - July 2023",
      location: "Amravati, Maharashtra",
      description: [
        "Completed hands-on training in Advanced Java (Swing, JDBC, Servlets) and web fundamentals.",
        "Developed GUI-based applications with backend integration via JDBC and Servlet architecture.",
        "Participated in the full software development lifecycle (SDLC), from frontend design to server-side logic."
      ],
      skills: ["Java", "JDBC", "Servlets", "SDLC"]
    }
  ];

  return (
    <section id="experience" className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <Briefcase className="text-cyan-400" size={28} />
        <h2 className="text-3xl font-bold text-white">Work Experience</h2>
      </div>

      <div className="grid grid-cols-1 gap-8 relative">
        {/* Vertical Line for Timeline Effect (Desktop) */}
        <div className="hidden md:block absolute left-8 top-4 bottom-4 w-0.5 bg-gray-800"></div>

        {experiences.map((exp, index) => (
          // 2. WRAPPER: Added FadeIn with staggered delay
          <FadeIn key={index} delay={index * 0.2}>
            <div className="relative pl-0 md:pl-20 group">

              {/* Timeline Dot (Desktop) */}
              <div className="hidden md:block absolute left-[27px] top-6 w-3 h-3 rounded-full bg-cyan-500 border-4 border-[#0a0a0a] z-10 group-hover:scale-125 transition-transform"></div>

              <div className="bg-[#111] border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 hover:bg-[#161616]">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-100 group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-gray-400 font-medium text-base">
                      {exp.company}
                    </p>
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

                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-400 text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-cyan-500 mt-1.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-800/50">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Experience;