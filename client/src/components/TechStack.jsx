import React, { useState } from 'react';
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiHtml5, SiCss3,
  SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiFirebase,
  SiBootstrap, SiRender, SiLinux, SiGit, SiGithub, SiPython,
  SiWordpress, SiPostman, SiVercel
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { VscVscode } from 'react-icons/vsc';

const CATEGORIES = [
  {
    id: 'frontend',
    title: 'Frontend',
    accent: '#06b6d4',
    accentBg: 'rgba(6,182,212,0.08)',
    accentBorder: 'rgba(6,182,212,0.2)',
    dot: 'bg-cyan-400',
    skills: [
      { name: 'HTML', icon: <SiHtml5 />, color: '#f97316' },
      { name: 'CSS', icon: <SiCss3 />, color: '#60a5fa' },
      { name: 'JavaScript', icon: <SiJavascript />, color: '#facc15' },
      { name: 'React JS', icon: <SiReact />, color: '#22d3ee' },
      { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#67e8f9' },
      { name: 'Bootstrap', icon: <SiBootstrap />, color: '#a855f7' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Database',
    accent: '#10b981',
    accentBg: 'rgba(16,185,129,0.08)',
    accentBorder: 'rgba(16,185,129,0.2)',
    dot: 'bg-emerald-400',
    skills: [
      { name: 'Node.js', icon: <SiNodedotjs />, color: '#4ade80' },
      { name: 'Express.js', icon: <SiExpress />, color: '#9ca3af' },
      { name: 'WordPress', icon: <SiWordpress />, color: '#38bdf8' },
      { name: 'MongoDB', icon: <SiMongodb />, color: '#4ade80' },
      { name: 'MySQL', icon: <SiMysql />, color: '#60a5fa' },
      { name: 'Firebase', icon: <SiFirebase />, color: '#fbbf24' },
      { name: 'Java', icon: <FaJava />, color: '#f87171' },
      { name: 'Python', icon: <SiPython />, color: '#93c5fd' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & DevOps',
    accent: '#a78bfa',
    accentBg: 'rgba(167,139,250,0.08)',
    accentBorder: 'rgba(167,139,250,0.2)',
    dot: 'bg-violet-400',
    skills: [
      { name: 'Git', icon: <SiGit />, color: '#f97316' },
      { name: 'GitHub', icon: <SiGithub />, color: '#ffffff' },
      { name: 'Linux', icon: <SiLinux />, color: '#fef08a' },
      { name: 'Render', icon: <SiRender />, color: '#ffffff' },
      { name: 'VS Code', icon: <VscVscode />, color: '#60a5fa' },
      { name: 'Postman', icon: <SiPostman />, color: '#f97316' },
      { name: 'Vercel', icon: <SiVercel />, color: '#ffffff' },
    ],
  },
];

const TechStack = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const active = CATEGORIES.find((c) => c.id === activeTab);

  return (
    <section id="tech" className="relative py-24 px-5 overflow-hidden bg-[#080b10]">

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-[0.04]"
        style={{ background: active.accent }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* ── Section header ── */}
        <div className="mb-14 text-center">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-white/30 uppercase mb-3">
            What I work with
          </p>
          <h2
            className="text-4xl md:text-5xl font-extrabold text-white leading-tight"
            style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '-1px' }}
          >
            Tech <span style={{ color: active.accent }}>Stack</span>
          </h2>
        </div>

        {/* ── Tab switcher ── */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex gap-1 p-1 rounded-2xl bg-white/[0.04] border border-white/[0.07]">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className="relative px-5 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                style={{
                  color: activeTab === cat.id ? cat.accent : 'rgba(232,234,240,0.4)',
                  background: activeTab === cat.id ? cat.accentBg : 'transparent',
                  border: activeTab === cat.id ? `1px solid ${cat.accentBorder}` : '1px solid transparent',
                  fontFamily: activeTab === cat.id ? 'Syne, sans-serif' : undefined,
                }}
              >
                {activeTab === cat.id && (
                  <span
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ background: cat.accent }}
                  />
                )}
                <span className={activeTab === cat.id ? 'pl-3' : ''}>{cat.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Skills grid ── */}
        <div
          key={activeTab}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
          style={{ animation: 'fadeUp 0.35s ease both' }}
        >
          {active.skills.map((skill, i) => (
            <div
              key={skill.name}
              className="group relative flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.07] cursor-default transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              style={{
                animationDelay: `${i * 0.04}s`,
                animation: 'fadeUp 0.4s ease both',
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
                style={{ background: `radial-gradient(ellipse at left, ${active.accent}10, transparent 70%)` }}
              />
              {/* Icon */}
              <span
                className="text-xl flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </span>
              {/* Name */}
              <span className="text-sm text-white/60 group-hover:text-white/90 transition-colors duration-200 font-medium leading-tight">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* ── Bottom stat bar ── */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {CATEGORIES.map((cat) => (
            <div key={cat.id} className="text-center">
              <p
                className="text-2xl font-extrabold mb-0.5"
                style={{ fontFamily: 'Syne, sans-serif', color: cat.accent }}
              >
                {cat.skills.length}
              </p>
              <p className="text-[11px] text-white/30 tracking-widest uppercase">{cat.title}</p>
            </div>
          ))}
          <div className="text-center">
            <p
              className="text-2xl font-extrabold mb-0.5 text-white"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              {CATEGORIES.reduce((acc, c) => acc + c.skills.length, 0)}
            </p>
            <p className="text-[11px] text-white/30 tracking-widest uppercase">Total Skills</p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
      `}</style>
    </section>
  );
};

export default TechStack;