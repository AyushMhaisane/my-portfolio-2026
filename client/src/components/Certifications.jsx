import React from 'react';
import { Award, Database, Code, Zap } from 'lucide-react';

const Certifications = () => {
    const certifications = [
        {
            name: "Database Management Systems (DBMS)",
            issuer: "NPTEL",
            desc: "Elite certification validating proficiency in relational database design, SQL optimization, and normalization techniques.",
            tags: ["SQL", "Schema Design"],
            icon: <Database size={20} className="text-blue-400" />,
            color: "hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
        },
        {
            name: "Data Structures & Algorithms",
            issuer: "Multiple Sources",
            desc: "Comprehensive coursework in C, C++, and Java covering advanced algorithms, memory management, and efficiency analysis.",
            tags: ["Problem Solving", "Complexity Analysis"],
            icon: <Code size={20} className="text-yellow-400" />,
            color: "hover:border-yellow-500/50 hover:shadow-[0_0_20px_rgba(234,179,8,0.15)]"
        },
        {
            name: "Generative AI Workshop",
            issuer: "BE10x",
            desc: "Practical workshop on leveraging Large Language Models (LLMs) and prompt engineering to accelerate development workflows.",
            tags: ["GenAI", "Prompt Engineering"],
            icon: <Zap size={20} className="text-purple-400" />,
            color: "hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]"
        }
    ];

    return (
        <section id="certifications" className="py-10 px-4 md:px-8 max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
                <Award className="text-cyan-400" size={28} />
                <h2 className="text-3xl font-bold text-white">Certifications</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                    <div
                        key={index}
                        className={`group bg-[#111] border border-gray-800 rounded-2xl p-6 transition-all duration-300 ${cert.color}`}
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-gray-900 rounded-full border border-gray-800">
                                {cert.icon}
                            </div>
                            <span className="text-xs text-gray-500 font-medium px-2 py-1 border border-gray-800 rounded-lg">
                                {cert.issuer}
                            </span>
                        </div>

                        <h3 className="text-lg font-bold text-gray-100 mb-2 group-hover:text-white transition-colors">
                            {cert.name}
                        </h3>

                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            {cert.desc}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {cert.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;