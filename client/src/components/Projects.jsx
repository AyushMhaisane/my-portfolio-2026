import React from 'react';
import { Github, ExternalLink, Code2, Database, Gamepad2, CloudSun, ShoppingCart, Mic } from 'lucide-react';
import FadeIn from './FadeIn';

const projects = [
    // 1. Voice Sync AI (COMPLEXITY: EXTREME)
    // Why #1: Handling raw audio streams (AudioWorklet), WebSockets, and real-time AI requires deep system understanding.
    {
        title: "Voice Sync AI",
        description: "Real-time streaming speech-to-text application powered by Google Gemini 2.0 Flash. Features low-latency WebSocket communication, raw PCM audio processing via AudioWorklet, and a neon glassmorphism UI.",
        tags: ["React", "Node.js", "WebSocket", "Gemini 2.0 Flash", "AudioWorklet"],
        github: "https://github.com/AyushMhaisane/voice-sync-ai",
        demo: "#",
        color: "from-cyan-400 to-purple-600",
        icon: Mic
    },
    // 2. AI-Powered IT Support (COMPLEXITY: HIGH)
    // Why #2: Involves workflow automation (n8n), Docker containerization, and full-stack logic with Supabase.
    {
        title: "AI-Powered IT Support Platform",
        description: "Full-stack ticket system with real-time chat. Uses Google Gemini via n8n workflows to automatically categorize issues and assign priority.",
        tags: ["Next.js", "Supabase", "n8n", "Gemini AI", "Docker"],
        github: "https://github.com/AyushMhaisane/ai-ticket-system",
        demo: "https://ai-ticket-system.vercel.app",
        color: "from-indigo-500 to-violet-500",
        icon: Database
    },
    // 3. Airtable Dynamic Form Builder (COMPLEXITY: HIGH)
    // Why #3: SaaS architecture requiring OAuth 2.0 security, custom logic engines, and API synchronization.
    {
        title: "Airtable Dynamic Form Builder",
        description: "Full-stack SaaS app enabling users to create logic-driven forms synced with Airtable. Features OAuth 2.0, a custom client-side logic engine, and dual-write backups.",
        tags: ["MERN Stack", "Airtable API", "OAuth 2.0", "JWT Auth"],
        github: "https://github.com/AyushMhaisane/airtable-form-builder",
        demo: "https://airtable-form-builder-dun.vercel.app",
        color: "from-emerald-500 to-green-600",
        icon: Database
    },
    // 4. Vibe Commerce Cart (COMPLEXITY: MEDIUM-HIGH)
    // Why #4: State management (Redux) and backend price calculations are critical for reliable e-commerce.
    {
        title: "Vibe Commerce Cart",
        description: "Full-stack shopping cart assignment. Features REST API design, MongoDB persistence, server-side price calculation, and dynamic data fetching from Fake Store API.",
        tags: ["MERN Stack", "Redux/Context", "REST API", "MongoDB"],
        github: "https://github.com/AyushMhaisane/vibe-commerce-cart",
        demo: "#",
        color: "from-violet-600 to-fuchsia-600",
        icon: ShoppingCart
    },
    // 5. Personal Portfolio (COMPLEXITY: MEDIUM)
    // Why #5: Integration of AI Chatbot with backend storage pushes this beyond a standard static site.
    {
        title: "Personal Portfolio (This Site)",
        description: "Interactive portfolio featuring a custom AI Chatbot powered by Google Gemini, real-time backend integration, and 3D Bento Grid design. Optimized for SEO.",
        tags: ["React", "Gemini AI", "Node.js", "MongoDB", "Framer Motion"],
        github: "https://github.com/AyushMhaisane/my-portfolio-2026",
        demo: "https://ayush-mhaisane.vercel.app",
        color: "from-cyan-500 to-blue-500",
        icon: Code2
    },
    // 6. LeetCode Stats Tracker (COMPLEXITY: MEDIUM)
    // Why #6: Requires a custom Proxy server to handle GraphQL and CORS, but scope is limited to fetching.
    {
        title: "LeetCode Stats Tracker",
        description: "Web app displaying detailed user stats with animated progress circles. Uses a custom Node.js proxy to handle LeetCode GraphQL API requests.",
        tags: ["JavaScript", "Node.js", "GraphQL", "CSS", "API"],
        github: "https://github.com/AyushMhaisane/leetcode-tracker",
        demo: "https://ayush-mhaisane.vercel.app",
        color: "from-yellow-500 to-orange-500",
        icon: Database
    },
    // 7. TechFlow Agency Website (COMPLEXITY: LOW-MEDIUM)
    // Why #7: Focus is on UI/UX and animation libraries rather than complex backend logic.
    {
        title: "TechFlow Agency Website",
        description: "High-performance digital agency site. Features real-time EmailJS forms, floating WhatsApp integration, and persuasion-focused Framer Motion animations.",
        tags: ["React", "Tailwind", "Framer Motion", "EmailJS"],
        github: "https://github.com/AyushMhaisane/techflow-agency",
        demo: "https://techflow.vercel.app",
        color: "from-blue-600 to-indigo-600",
        icon: Code2
    },
    // 8. Real-Time Weather App (COMPLEXITY: LOW)
    // Why #8: Standard API fetching using Vanilla JS. Good fundamentals, but architecturally simple.
    {
        title: "Real-Time Weather App",
        description: "Minimalist weather dashboard using WeatherAPI. Fetches real-time temperature, humidity, and wind speeds for any global location. Built with pure Vanilla JS.",
        tags: ["JavaScript", "WeatherAPI", "HTML5", "CSS3", "Fetch API"],
        github: "https://github.com/AyushMhaisane/weather-api-app",
        demo: "https://weather-api-app.vercel.app",
        color: "from-sky-400 to-blue-300",
        icon: CloudSun
    },
    // 9. React Tic Tac Toe (COMPLEXITY: BASIC)
    // Why #9: Intro to React state logic. Important foundation, but the simplest project here.
    {
        title: "React Tic Tac Toe",
        description: "Classic game with a modern UI. Features two-player mode, automatic winner/tie detection, and color-coded moves (🔴 vs 🟢). Fully responsive design.",
        tags: ["React.js", "CSS3", "Game Logic", "Interactive UI"],
        github: "https://github.com/AyushMhaisane/tic-tac-toe-react",
        demo: "https://tic-tac-toe-react.vercel.app",
        color: "from-red-500 to-pink-600",
        icon: Gamepad2
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-2">
                <Code2 className="text-cyan-400" />
                Featured Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => {
                    const IconComponent = project.icon || Database;

                    return (
                        <FadeIn key={index} delay={(index + 1) * 0.1}>
                            <div
                                className="group relative p-6 bg-[#111] rounded-3xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full flex flex-col"
                            >
                                {/* Glow Effect on Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className={`p-3 rounded-full bg-gray-900/50 border border-gray-800`}>
                                            <IconComponent size={20} className="text-gray-300" />
                                        </div>
                                        <div className="flex gap-3">
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                                <Github size={20} />
                                            </a>
                                            {project.demo !== "#" && (
                                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                                    <ExternalLink size={20} />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map((tag, i) => (
                                            <span
                                                key={i}
                                                className="text-xs px-3 py-1 rounded-full bg-gray-900 border border-gray-800 text-gray-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;