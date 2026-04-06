import React, { useState } from 'react';
import { Github, ExternalLink, Code2, Database, Gamepad2, CloudSun, ShoppingCart, Mic } from 'lucide-react';

const ALL = 'All';

const PROJECTS = [
    {
        title: "Voice Sync AI",
        description: "Real-time streaming speech-to-text powered by Google Gemini 2.0 Flash. Features low-latency WebSocket communication, raw PCM audio processing via AudioWorklet, and a neon glassmorphism UI.",
        tags: ["React", "Node.js", "WebSocket", "Gemini 2.0", "AudioWorklet"],
        category: "AI",
        github: "https://github.com/AyushMhaisane/voice-sync-ai",
        demo: null,
        icon: Mic,
        accent: "#06b6d4",
        featured: true,
    },
    {
        title: "AI-Powered IT Support Platform",
        description: "Full-stack ticket system with real-time chat. Uses Google Gemini via n8n workflows to automatically categorize issues and assign priority.",
        tags: ["Next.js", "Supabase", "n8n", "Gemini AI", "Docker"],
        category: "AI",
        github: "https://github.com/AyushMhaisane/ai-ticket-system",
        demo: null,
        icon: Database,
        accent: "#a78bfa",
        featured: true,
    },
    {
        title: "Airtable Dynamic Form Builder",
        description: "Full-stack SaaS app enabling users to create logic-driven forms synced with Airtable. Features OAuth 2.0, a custom client-side logic engine, and dual-write backups.",
        tags: ["MERN Stack", "Airtable API", "OAuth 2.0", "JWT Auth"],
        category: "Full Stack",
        github: "https://github.com/AyushMhaisane/airtable-form-builder",
        demo: null,
        icon: Database,
        accent: "#10b981",
        featured: true,
    },
    {
        title: "Vibe Commerce Cart",
        description: "Full-stack shopping cart with REST API design, Firebase persistence, server-side price calculation, and dynamic data fetching from Fake Store API.",
        tags: ["Full-Stack", "Redux", "REST API", "Firebase"],
        category: "Full Stack",
        github: "https://github.com/AyushMhaisane/snacks-ordering-app",
        demo: "https://snacks-ordering-app-ms7j.vercel.app/login",
        icon: ShoppingCart,
        accent: "#f59e0b",
        featured: false,
    },
    {
        title: "Personal Portfolio",
        description: "Interactive portfolio featuring a custom AI Chatbot powered by Google Gemini, real-time backend integration, and 3D Bento Grid design. Optimized for SEO.",
        tags: ["React", "Gemini AI", "Node.js", "MongoDB"],
        category: "Full Stack",
        github: "https://github.com/AyushMhaisane/my-portfolio-2026",
        demo: "https://ayush-mhaisane.vercel.app",
        icon: Code2,
        accent: "#06b6d4",
        featured: false,
    },
    {
        title: "LeetCode Stats Tracker",
        description: "Web app displaying detailed user stats with animated progress circles. Uses a custom Node.js proxy to handle LeetCode GraphQL API requests.",
        tags: ["JavaScript", "Node.js", "GraphQL", "CSS"],
        category: "Tools",
        github: "https://github.com/AyushMhaisane/leetcode-stats-tracker",
        demo: "https://paste-app-yzd9.vercel.app",
        icon: Database,
        accent: "#f97316",
        featured: false,
    },
    {
        title: "TechFlow Agency Website",
        description: "High-performance digital agency site with real-time EmailJS forms, floating WhatsApp integration, and persuasion-focused animations.",
        tags: ["React", "Tailwind", "Framer Motion", "EmailJS"],
        category: "Frontend",
        github: "https://github.com/AyushMhaisane/techflow-agency",
        demo: "https://business-page-gold-iota.vercel.app",
        icon: Code2,
        accent: "#ec4899",
        featured: false,
    },
    {
        title: "Real-Time Weather App",
        description: "Minimalist weather dashboard using WeatherAPI. Fetches real-time temperature, humidity, and wind speeds for any global location. Built with pure Vanilla JS.",
        tags: ["JavaScript", "WeatherAPI", "HTML5", "CSS3"],
        category: "Tools",
        github: "https://github.com/AyushMhaisane/weather-api-app",
        demo: "https://weather-api-app.vercel.app",
        icon: CloudSun,
        accent: "#38bdf8",
        featured: false,
    },
    {
        title: "React Tic Tac Toe",
        description: "Classic game with a modern UI. Features two-player mode, automatic winner/tie detection, and color-coded moves. Fully responsive design.",
        tags: ["React.js", "CSS3", "Game Logic"],
        category: "Frontend",
        github: "https://github.com/AyushMhaisane/tic-tac-toe-react",
        demo: "https://tic-tac-toe-react.vercel.app",
        icon: Gamepad2,
        accent: "#4ade80",
        featured: false,
    },
];

const FILTERS = [ALL, 'AI', 'Full Stack', 'Frontend', 'Tools'];

const ProjectCard = ({ project, index }) => {
    const Icon = project.icon;
    return (
        <div
            className="group relative flex flex-col rounded-2xl border bg-white/[0.02] overflow-hidden transition-all duration-300 hover:-translate-y-1"
            style={{
                borderColor: 'rgba(255,255,255,0.07)',
                animation: `fadeUp 0.45s ${index * 0.06}s ease both`,
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = project.accent + '40'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'}
        >
            {/* Top accent line */}
            <div
                className="h-[2px] w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(to right, ${project.accent}, transparent)` }}
            />

            {/* Glow bg */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse at top left, ${project.accent}0d, transparent 60%)` }}
            />

            <div className="relative z-10 flex flex-col h-full p-6">
                {/* Header */}
                <div className="flex justify-between items-start mb-5">
                    <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                        style={{ background: project.accent + '18', border: `1px solid ${project.accent}33` }}
                    >
                        <Icon size={18} style={{ color: project.accent }} />
                    </div>

                    <div className="flex gap-1">
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-white/25 hover:text-white hover:bg-white/[0.07] transition-all duration-200"
                        >
                            <Github size={15} />
                        </a>
                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noreferrer"
                                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                                style={{ color: project.accent, background: project.accent + '15' }}
                            >
                                <ExternalLink size={15} />
                            </a>
                        )}
                    </div>
                </div>

                {/* Title */}
                <h3
                    className="text-base font-bold text-white mb-2 leading-snug transition-colors duration-200"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                    onMouseEnter={e => (e.currentTarget.style.color = project.accent)}
                    onMouseLeave={e => (e.currentTarget.style.color = '#fff')}
                >
                    {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/45 leading-relaxed mb-5 line-clamp-3 flex-1">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-[10px] font-semibold tracking-wider px-2.5 py-1 rounded-full"
                            style={{
                                background: project.accent + '12',
                                border: `1px solid ${project.accent}25`,
                                color: project.accent,
                            }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const [active, setActive] = useState(ALL);

    const filtered = active === ALL ? PROJECTS : PROJECTS.filter(p => p.category === active);

    return (
        <section id="projects" className="relative py-24 px-5 bg-[#080b10] overflow-hidden">

            {/* Ambient blobs */}
            <div className="pointer-events-none absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-violet-500/[0.04] blur-[100px]" />
            <div className="pointer-events-none absolute bottom-1/4 left-0 w-[350px] h-[350px] rounded-full bg-cyan-500/[0.04] blur-[100px]" />

            <div className="relative z-10 max-w-6xl mx-auto">

                {/* Header */}
                <div className="mb-12 text-center">
                    <p className="text-[11px] font-semibold tracking-[0.2em] text-white/30 uppercase mb-3">
                        Things I've built
                    </p>
                    <h2
                        className="text-4xl md:text-5xl font-extrabold text-white"
                        style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '-1px' }}
                    >
                        Featured <span className="text-cyan-400">Projects</span>
                    </h2>
                </div>

                {/* Filter tabs */}
                <div className="flex justify-center mb-10">
                    <div className="inline-flex flex-wrap gap-1.5 p-1 rounded-2xl bg-white/[0.04] border border-white/[0.07]">
                        {FILTERS.map((f) => (
                            <button
                                key={f}
                                onClick={() => setActive(f)}
                                className="px-4 py-1.5 rounded-xl text-sm font-medium transition-all duration-200"
                                style={{
                                    background: active === f ? 'rgba(6,182,212,0.1)' : 'transparent',
                                    border: active === f ? '1px solid rgba(6,182,212,0.25)' : '1px solid transparent',
                                    color: active === f ? '#06b6d4' : 'rgba(232,234,240,0.35)',
                                    fontFamily: active === f ? 'Syne, sans-serif' : undefined,
                                }}
                            >
                                {f}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div
                    key={active}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                    style={{ animation: 'fadeUp 0.3s ease both' }}
                >
                    {filtered.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} />
                    ))}
                </div>

                {/* Footer count */}
                <p className="text-center text-xs text-white/20 mt-10">
                    Showing {filtered.length} of {PROJECTS.length} projects
                </p>
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

export default Projects;