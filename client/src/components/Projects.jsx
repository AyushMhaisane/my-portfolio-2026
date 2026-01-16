import React from 'react';
import { Github, ExternalLink, Code2, Database } from 'lucide-react';
// 1. Import FadeIn
import FadeIn from './FadeIn';

const projects = [
    {
        title: "LawLens - AI Legal Assistant",
        description: "AI-powered consumer rights advocate analyzing contracts using GPT-4o Vision. Helps users understand legal jargon instantly.",
        tags: ["Next.js", "OpenAI API", "Tailwind", "Prisma"],
        github: "#",
        demo: "#",
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Cafe Lead Gen Tool",
        description: "Automated lead generation system targeting businesses without websites. streamlined outreach for freelance web services.",
        tags: ["Node.js", "Puppeteer", "Google Maps API"],
        github: "#",
        demo: "#",
        color: "from-emerald-500 to-green-500"
    },
    {
        title: "WordPress Custom Architecture",
        description: "Deep dive into WP internals. Custom themes and plugin development focusing on performance and scalability.",
        tags: ["PHP", "WordPress", "MySQL", "Docker"],
        github: "#",
        demo: "#",
        color: "from-purple-500 to-pink-500"
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
                {projects.map((project, index) => (
                    // 2. WRAPPER: Added FadeIn with staggered delay
                    <FadeIn key={index} delay={index * 0.2}>
                        <div
                            className="group relative p-6 bg-[#111] rounded-3xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:-translate-y-1 overflow-hidden h-full flex flex-col"
                        >
                            {/* Glow Effect on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-4">
                                    <div className={`p-3 rounded-full bg-gray-900/50 border border-gray-800`}>
                                        <Database size={20} className="text-gray-300" />
                                    </div>
                                    <div className="flex gap-3">
                                        <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                                            <Github size={20} />
                                        </a>
                                        <a href={project.demo} className="text-gray-400 hover:text-white transition-colors">
                                            <ExternalLink size={20} />
                                        </a>
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
                ))}
            </div>
        </section>
    );
};

export default Projects;