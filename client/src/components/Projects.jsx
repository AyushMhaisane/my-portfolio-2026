import React from 'react';
import { Github, ExternalLink, Code2, Database, Gamepad2, CloudSun, ShoppingCart, Mic } from 'lucide-react';
import FadeIn from '../components/FadeIn'; // Adjusted path if needed
import SpotlightCard from '../components/SpotlightCard';

const projects = [
    // 1. Voice Sync AI (COMPLEXITY: EXTREME)
    {
        title: "Voice Sync AI",
        description: "Real-time streaming speech-to-text application powered by Google Gemini 2.0 Flash. Features low-latency WebSocket communication, raw PCM audio processing via AudioWorklet, and a neon glassmorphism UI.",
        tags: ["React", "Node.js", "WebSocket", "Gemini 2.0 Flash", "AudioWorklet"],
        github: "https://github.com/AyushMhaisane/voice-sync-ai",
        demo: "#",
        icon: Mic
    },
    // 2. AI-Powered IT Support (COMPLEXITY: HIGH)
    {
        title: "AI-Powered IT Support Platform",
        description: "Full-stack ticket system with real-time chat. Uses Google Gemini via n8n workflows to automatically categorize issues and assign priority.",
        tags: ["Next.js", "Supabase", "n8n", "Gemini AI", "Docker"],
        github: "https://github.com/AyushMhaisane/ai-ticket-system",
        demo: "https://ai-ticket-system.vercel.app",
        icon: Database
    },
    // 3. Airtable Dynamic Form Builder (COMPLEXITY: HIGH)
    {
        title: "Airtable Dynamic Form Builder",
        description: "Full-stack SaaS app enabling users to create logic-driven forms synced with Airtable. Features OAuth 2.0, a custom client-side logic engine, and dual-write backups.",
        tags: ["MERN Stack", "Airtable API", "OAuth 2.0", "JWT Auth"],
        github: "https://github.com/AyushMhaisane/airtable-form-builder",
        demo: "https://airtable-form-builder-dun.vercel.app",
        icon: Database
    },
    // 4. Vibe Commerce Cart (COMPLEXITY: MEDIUM-HIGH)
    {
        title: "Vibe Commerce Cart",
        description: "Full-stack shopping cart assignment. Features REST API design, MongoDB persistence, server-side price calculation, and dynamic data fetching from Fake Store API.",
        tags: ["MERN Stack", "Redux/Context", "REST API", "MongoDB"],
        github: "https://github.com/AyushMhaisane/vibe-commerce-cart",
        demo: "#",
        icon: ShoppingCart
    },
    // 5. Personal Portfolio (COMPLEXITY: MEDIUM)
    {
        title: "Personal Portfolio (This Site)",
        description: "Interactive portfolio featuring a custom AI Chatbot powered by Google Gemini, real-time backend integration, and 3D Bento Grid design. Optimized for SEO.",
        tags: ["React", "Gemini AI", "Node.js", "MongoDB", "Framer Motion"],
        github: "https://github.com/AyushMhaisane/my-portfolio-2026",
        demo: "https://ayush-mhaisane.vercel.app",
        icon: Code2
    },
    // 6. LeetCode Stats Tracker (COMPLEXITY: MEDIUM)
    {
        title: "LeetCode Stats Tracker",
        description: "Web app displaying detailed user stats with animated progress circles. Uses a custom Node.js proxy to handle LeetCode GraphQL API requests.",
        tags: ["JavaScript", "Node.js", "GraphQL", "CSS", "API"],
        github: "https://github.com/AyushMhaisane/leetcode-tracker",
        demo: "https://ayush-mhaisane.vercel.app",
        icon: Database
    },
    // 7. TechFlow Agency Website (COMPLEXITY: LOW-MEDIUM)
    {
        title: "TechFlow Agency Website",
        description: "High-performance digital agency site. Features real-time EmailJS forms, floating WhatsApp integration, and persuasion-focused Framer Motion animations.",
        tags: ["React", "Tailwind", "Framer Motion", "EmailJS"],
        github: "https://github.com/AyushMhaisane/techflow-agency",
        demo: "https://techflow.vercel.app",
        icon: Code2
    },
    // 8. Real-Time Weather App (COMPLEXITY: LOW)
    {
        title: "Real-Time Weather App",
        description: "Minimalist weather dashboard using WeatherAPI. Fetches real-time temperature, humidity, and wind speeds for any global location. Built with pure Vanilla JS.",
        tags: ["JavaScript", "WeatherAPI", "HTML5", "CSS3", "Fetch API"],
        github: "https://github.com/AyushMhaisane/weather-api-app",
        demo: "https://weather-api-app.vercel.app",
        icon: CloudSun
    },
    // 9. React Tic Tac Toe (COMPLEXITY: BASIC)
    {
        title: "React Tic Tac Toe",
        description: "Classic game with a modern UI. Features two-player mode, automatic winner/tie detection, and color-coded moves (🔴 vs 🟢). Fully responsive design.",
        tags: ["React.js", "CSS3", "Game Logic", "Interactive UI"],
        github: "https://github.com/AyushMhaisane/tic-tac-toe-react",
        demo: "https://tic-tac-toe-react.vercel.app",
        icon: Gamepad2
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-3">
                <Code2 className="text-cyan-400" size={36} />
                Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <FadeIn key={index} delay={index * 0.1}>
                        <SpotlightCard className="h-full group">
                            <div className="flex flex-col h-full p-8">

                                {/* 1. HEADER: Icons & Links */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300">
                                        <project.icon size={28} />
                                    </div>
                                    <div className="flex gap-4">
                                        <a href={project.github} target="_blank" className="text-gray-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                                            <Github size={20} />
                                        </a>
                                        {project.demo !== "#" && (
                                            <a href={project.demo} target="_blank" className="text-gray-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* 2. TITLE & DESCRIPTION */}
                                <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3 group-hover:text-gray-300 transition-colors">
                                    {project.description}
                                </p>

                                {/* 3. TECH STACK (Updated Style) */}
                                <div className="mt-auto flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-[10px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/5 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </SpotlightCard>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
};

export default Projects;