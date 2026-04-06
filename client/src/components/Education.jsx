import React, { useState } from 'react';
import { GraduationCap, Calendar, BookOpen, ExternalLink } from 'lucide-react';

const EDUCATION = [
    {
        degree: "B.E. in Information Technology",
        short: "B.E. IT",
        school: "D.Y. Patil College of Engineering, Akurdi",
        year: "2024 – Present",
        grade: "SGPA 9.25",
        gradeLabel: "2nd Year",
        desc: "Specializing in full-stack development and scalable software architecture. Active member of the Open Source community.",
        link: "http://www.dypcoeakurdi.ac.in/",
        accent: "#06b6d4",
        accentBg: "rgba(6,182,212,0.08)",
        accentBorder: "rgba(6,182,212,0.2)",
        courses: [
            "Data Structures & Algo",
            "Database Management",
            "Operating Systems",
            "Computer Networks",
            "Object-Oriented Programming",
        ],
    },
    {
        degree: "Diploma in Information Technology",
        short: "Diploma IT",
        school: "Government Polytechnic, Amravati",
        year: "2021 – 2024",
        grade: "92.89%",
        gradeLabel: "Percentage",
        desc: "Graduated with distinction. Built a strong foundation in computer science principles and early web technologies.",
        link: "https://www.gpamravati.ac.in/",
        accent: "#a78bfa",
        accentBg: "rgba(167,139,250,0.08)",
        accentBorder: "rgba(167,139,250,0.2)",
        courses: [
            "Java Programming",
            "Web Development",
            "Software Engineering",
            "C++",
            "Linux Administration",
        ],
    },
];

const EduCard = ({ edu, index }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1"
            style={{
                background: hovered ? edu.accentBg : 'rgba(255,255,255,0.02)',
                borderColor: hovered ? edu.accentBorder : 'rgba(255,255,255,0.07)',
                animation: `fadeUp 0.5s ${index * 0.15}s ease both`,
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Top accent line */}
            <div
                className="h-[2px] transition-all duration-500"
                style={{
                    width: hovered ? '100%' : '0%',
                    background: `linear-gradient(to right, ${edu.accent}, transparent)`,
                }}
            />

            {/* Radial glow */}
            <div
                className="absolute inset-0 pointer-events-none rounded-2xl transition-opacity duration-500"
                style={{
                    opacity: hovered ? 1 : 0,
                    background: `radial-gradient(ellipse at top left, ${edu.accent}0d, transparent 60%)`,
                }}
            />

            <div className="relative z-10 p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">

                    {/* Left: degree avatar */}
                    <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 text-xs font-extrabold leading-tight text-center"
                        style={{
                            background: edu.accentBg,
                            border: `1px solid ${edu.accentBorder}`,
                            color: edu.accent,
                            fontFamily: 'Syne, sans-serif',
                        }}
                    >
                        <GraduationCap size={20} style={{ color: edu.accent }} />
                    </div>

                    {/* Center: main info */}
                    <div className="flex-1 min-w-0">

                        {/* Degree + year (mobile) */}
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                            <h3
                                className="text-lg font-extrabold text-white leading-snug"
                                style={{ fontFamily: 'Syne, sans-serif' }}
                            >
                                {edu.degree}
                            </h3>
                            <span
                                className="md:hidden inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1 rounded-full"
                                style={{
                                    background: edu.accentBg,
                                    border: `1px solid ${edu.accentBorder}`,
                                    color: edu.accent,
                                }}
                            >
                                <Calendar size={10} /> {edu.year}
                            </span>
                        </div>

                        {/* School */}
                        <a
                            href={edu.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-white/40 hover:text-white/80 transition-colors mb-4 group/link"
                        >
                            {edu.school}
                            <ExternalLink size={11} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
                        </a>

                        {/* Desc */}
                        <p className="text-sm text-white/45 leading-relaxed mb-5 max-w-2xl">
                            {edu.desc}
                        </p>

                        {/* Courses */}
                        <div className="flex flex-wrap gap-2">
                            {edu.courses.map((course) => (
                                <span
                                    key={course}
                                    className="text-[11px] font-medium px-2.5 py-1 rounded-full transition-all duration-200 cursor-default"
                                    style={{
                                        background: edu.accentBg,
                                        border: `1px solid ${edu.accentBorder}`,
                                        color: edu.accent,
                                    }}
                                >
                                    {course}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Right: year + grade (desktop) */}
                    <div className="hidden md:flex flex-col items-end gap-2 flex-shrink-0">
                        <span
                            className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full whitespace-nowrap"
                            style={{
                                background: edu.accentBg,
                                border: `1px solid ${edu.accentBorder}`,
                                color: edu.accent,
                            }}
                        >
                            <Calendar size={11} /> {edu.year}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 whitespace-nowrap">
                            <BookOpen size={11} /> {edu.gradeLabel}: {edu.grade}
                        </span>
                    </div>

                </div>

                {/* Mobile grade */}
                <div className="md:hidden mt-4">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                        <BookOpen size={11} /> {edu.gradeLabel}: {edu.grade}
                    </span>
                </div>
            </div>
        </div>
    );
};

const Education = () => (
    <section id="education" className="relative py-24 px-5 bg-[#080b10] overflow-hidden">

        {/* Ambient blobs */}
        <div className="pointer-events-none absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/[0.04] blur-[110px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full bg-violet-500/[0.04] blur-[110px]" />

        <div className="relative z-10 max-w-4xl mx-auto">

            {/* Header */}
            <div className="mb-14 text-center">
                <p className="text-[11px] font-semibold tracking-[0.2em] text-white/30 uppercase mb-3">
                    Academic background
                </p>
                <h2
                    className="text-4xl md:text-5xl font-extrabold text-white"
                    style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '-1px' }}
                >
                    Education <span className="text-cyan-400">&amp;</span> Certifications
                </h2>
            </div>

            {/* Cards */}
            <div className="flex flex-col gap-5">
                {EDUCATION.map((edu, i) => (
                    <EduCard key={i} edu={edu} index={i} />
                ))}
            </div>

            {/* Timeline footnote */}
            <div className="mt-10 flex items-center gap-3 justify-center">
                <div className="h-px w-16 bg-white/10" />
                <p className="text-xs text-white/20 tracking-widest uppercase">Continuous learning</p>
                <div className="h-px w-16 bg-white/10" />
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

export default Education;