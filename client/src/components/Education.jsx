import React from 'react';
import { GraduationCap, Calendar, BookOpen, ExternalLink } from 'lucide-react';
// 1. Remove RevealOnScroll and Import FadeIn
import FadeIn from './FadeIn';

const Education = () => {
    const educationData = [
        {
            degree: "B.E. in Information Technology",
            school: "D.Y. Patil College of Engineering, Akurdi",
            year: "2024 - Present",
            grade: "2nd Year SGPA: 9.25",
            desc: "Specializing in full-stack development and scalable software architecture. Active member of the Open Source community.",
            link: "http://www.dypcoeakurdi.ac.in/",
            courses: ["Data Structures & Algo", "Database Management", "OS", "Computer Networks", "Object-Oriented Programming"]
        },
        {
            degree: "Diploma in Information Technology",
            school: "Government Polytechnic, Amravati",
            year: "2021 - 2024",
            grade: "Percentage: 92.89%",
            desc: "Graduated with distinction. Built a strong foundation in computer science principles and early web technologies.",
            link: "https://www.gpamravati.ac.in/",
            courses: ["Java Programming", "Web Development", "Software Engineering", "C++", "Linux Administration"]
        },
    ];

    return (
        <section id="education" className="py-20 px-4 md:px-8 max-w-5xl mx-auto">

            {/* Header */}
            <div className="flex items-center justify-center gap-3 mb-16">
                <GraduationCap className="text-cyan-400" size={32} />
                <h2 className="text-4xl font-bold text-white">
                    Education <span className="text-cyan-400">&</span> Certification
                </h2>
            </div>

            <div className="space-y-8">
                {educationData.map((edu, index) => (
                    // 2. WRAPPER: Use FadeIn with staggered delay
                    <FadeIn key={index} delay={index * 0.2}>
                        <div className="group relative bg-[#111] border border-gray-800 rounded-3xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1">

                            {/* Subtle Background Gradient for Depth */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="p-8 md:p-10 relative z-10 flex flex-col md:flex-row gap-8">

                                {/* Left Side: Degree & School */}
                                <div className="flex-1">
                                    <div className="flex items-start justify-between mb-4">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                            {edu.degree}
                                        </h3>

                                        {/* Mobile Date */}
                                        <span className="md:hidden text-sm text-cyan-400 font-mono border border-cyan-500/20 px-2 py-1 rounded bg-cyan-500/5">
                                            {edu.year}
                                        </span>
                                    </div>

                                    <p className="text-gray-400 font-medium text-lg mb-4">
                                        {edu.school}
                                    </p>

                                    <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-2xl">
                                        {edu.desc}
                                    </p>

                                    {/* Course Tags */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {edu.courses.map((course, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 bg-white/5 text-gray-400 text-xs font-medium rounded-lg border border-white/5 transition-all hover:bg-cyan-500/10 hover:text-cyan-300 hover:border-cyan-500/20 cursor-default"
                                            >
                                                {course}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Visit Link */}
                                    <a
                                        href={edu.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                                    >
                                        Visit Website <ExternalLink size={14} />
                                    </a>
                                </div>

                                {/* Right Side: Date & Grade (Desktop) */}
                                <div className="hidden md:flex flex-col items-end gap-3 min-w-[140px]">
                                    <span className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-cyan-400 text-sm font-bold border border-white/10">
                                        <Calendar size={16} /> {edu.year}
                                    </span>

                                    {edu.grade && (
                                        <span className="flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full text-green-400 text-sm font-bold border border-green-500/20 shadow-[0_0_10px_rgba(74,222,128,0.1)]">
                                            <BookOpen size={16} /> {edu.grade}
                                        </span>
                                    )}
                                </div>

                                {/* Mobile Grade */}
                                <div className="md:hidden mt-2">
                                    {edu.grade && (
                                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full text-green-400 text-sm font-bold border border-green-500/20">
                                            <BookOpen size={16} /> {edu.grade}
                                        </span>
                                    )}
                                </div>

                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
};

export default Education;