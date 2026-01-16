import React from 'react';
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiHtml5, SiCss3,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiFirebase,
  SiBootstrap, SiRender, SiLinux, SiGit, SiGithub, SiPython,
  SiWordpress, SiPostman, SiVercel
} from 'react-icons/si';
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

// 1. Import the FadeIn component
import FadeIn from './FadeIn';

const TechStack = () => {

  const techCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "React JS", icon: <SiReact className="text-cyan-400" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
        { name: "WordPress", icon: <SiWordpress className="text-[#21759B]" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "Python", icon: <SiPython className="text-blue-300" /> },
      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", icon: <SiGit className="text-orange-600" /> },
        { name: "GitHub", icon: <SiGithub className="text-white" /> },
        { name: "Linux", icon: <SiLinux className="text-yellow-200" /> },
        { name: "Render", icon: <SiRender className="text-white" /> },
        { name: "VS Code", icon: <VscVscode className="text-blue-500" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        { name: "Vercel", icon: <SiVercel className="text-white" /> },
      ]
    }
  ];

  return (
    <section id="tech" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-10 text-center">
        Technologies <span className="text-cyan-400">Stack</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {techCategories.map((category, index) => (
          // 2. WRAPPER: Added FadeIn here with a staggered delay
          // "delay={index * 0.2}" makes them appear 1st -> 2nd -> 3rd
          <FadeIn key={index} delay={index * 0.2} className="h-full">
            <div
              className="bg-[#111] p-6 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col"
            >
              <h3 className="text-xl font-semibold text-gray-200 mb-6 border-b border-gray-800 pb-2">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3 grow content-start">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all cursor-default hover:scale-105"
                  >
                    <span className="text-xl">
                      {skill.icon}
                    </span>
                    <span className="text-gray-400 text-sm font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default TechStack;