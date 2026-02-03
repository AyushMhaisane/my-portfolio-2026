import React from 'react';
import { FiDownload, FiMail } from 'react-icons/fi';
import { ArrowUpRight, Cpu, Database, Globe, Code2, Layers } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import BentoCard from '../components/BentoCard';
import profileImg from '../assets/profile.png';
import { Helmet } from 'react-helmet-async';

const Hero = () => {
    // STATIC STATS (Fast & Reliable)
    const leetcodeStats = {
        total: '180+',
        easy: '50+',
        medium: '100+',
        hard: '10+'
    };

    return (
        <section id="home" className="max-w-7xl mx-auto px-4 pt-32 pb-20">

            <Helmet>
                <title>Ayush Mhaisane | Full Stack Developer</title>
                <meta name="description" content="Portfolio of Ayush Mhaisane, a Full Stack Engineer..." />
            </Helmet>

            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">

                {/* 1. Large Intro Card (Top Left) */}
                <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col justify-center gap-6">
                    <div>
                        <div className="flex flex-wrap gap-3 mb-4">
                            <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/20">
                                OPEN TO WORK
                            </span>
                            <span className="inline-block px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-bold rounded-full border border-purple-500/20">
                                FULL STACK ENGINEER
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                            Hi, I'm <span className="text-cyan-400">Ayush</span>
                        </h1>

                        <div className="text-xl text-gray-400 mt-2 font-light h-8">
                            I am a{" "}
                            <span className="text-cyan-400 font-bold">
                                <Typewriter
                                    words={["Full Stack Engineer", "MERN Stack Developer", "System Architect", "Problem Solver"]}
                                    loop={0}
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </div>
                    </div>

                    <p className="text-gray-400 leading-relaxed max-w-lg">
                        I engineer <strong className="text-white">high-performance</strong>, scalable web architectures using the <strong className="text-cyan-400">MERN Stack</strong>.
                        Specialized in designing <strong className="text-white">distributed backend systems</strong> and <strong className="text-white">interactive user interfaces</strong>.
                        <br className="mb-2 block" />
                        Backed by strong <strong className="text-cyan-400">algorithmic foundations</strong> (DSA) and a relentless focus on <strong className="text-white">optimization</strong>, <strong className="text-white">security</strong>, and shipping <strong className="text-white">production-ready</strong> software.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-2">
                        <a href="mailto:ayushmhaisane25@gmail.com" className="bg-cyan-400 text-black font-bold py-3 px-8 rounded-full hover:bg-white transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] flex items-center gap-2">
                            <FiMail /> Hire Me
                        </a>
                        <a href="/resume.pdf" target="_blank" className="flex items-center gap-2 border border-white/20 py-3 px-6 rounded-full hover:bg-white/5 hover:border-white transition-all cursor-pointer text-white">
                            <FiDownload /> Resume
                        </a>
                    </div>
                </BentoCard>

                {/* 2. Photo Card (Top Right) */}
                <BentoCard delay={0.1} className="md:col-span-1 md:row-span-2 relative p-0 overflow-hidden min-h-[300px]">
                    <img src={profileImg} alt="Ayush" className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" onError={(e) => { e.target.style.display = 'none' }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
                    <div className="absolute bottom-6 left-6">
                        <h3 className="text-xl font-bold text-white">Ayush Mhaisane</h3>
                        <p className="text-cyan-400 text-sm">Pune, India</p>
                    </div>
                </BentoCard>

                {/* 3. Right Column: Split into 2 Stacked Cards */}
                <div className="md:col-span-1 md:row-span-2 flex flex-col gap-6">

                    {/* A. Top Card: LeetCode Stats */}
                    <BentoCard delay={0.2} className="flex-1 relative flex flex-col justify-between p-5 bg-gradient-to-br from-gray-900 to-black border-gray-800 overflow-hidden group">

                        <div className="absolute inset-0 grid grid-cols-6 gap-2 p-4 opacity-20 transform -skew-y-12 scale-125 pointer-events-none">
                            {Array.from({ length: 20 }).map((_, i) => (
                                <div key={i} className={`rounded-sm ${[2, 5, 8, 12].includes(i) ? 'bg-cyan-500/80 animate-pulse' : 'bg-gray-800'} aspect-square`}></div>
                            ))}
                        </div>

                        <div className="relative z-10 flex justify-between items-start">
                            <div className="p-2 bg-[#282828] rounded-lg border border-white/10">
                                <img
                                    src="https://leetcode.com/static/images/LeetCode_logo_rvs.png"
                                    alt="LeetCode Logo"
                                    className="w-6 h-6 object-contain"
                                />
                            </div>
                            <a href="https://leetcode.com/u/Ayush_Mhaisane/" target="_blank" rel="noreferrer" className="text-xs font-mono text-gray-500 hover:text-white transition-colors flex items-center gap-1">
                                <ArrowUpRight size={14} />
                            </a>
                        </div>

                        <div className="relative z-10 my-2">
                            <h2 className="text-4xl font-bold text-white mb-1">{leetcodeStats.total}</h2>
                            <p className="text-cyan-400 text-[10px] font-bold uppercase tracking-widest">DSA Solved</p>
                        </div>

                        <div className="relative z-10 flex justify-between gap-1 mt-auto">
                            <div className="flex-1 flex flex-col items-center p-1.5 bg-white/5 rounded border border-white/5">
                                <span className="text-[10px] text-gray-400">Easy</span>
                                <span className="text-xs font-bold text-emerald-400">{leetcodeStats.easy}</span>
                            </div>
                            <div className="flex-1 flex flex-col items-center p-1.5 bg-white/5 rounded border border-white/5">
                                <span className="text-[10px] text-gray-400">Med</span>
                                <span className="text-xs font-bold text-yellow-400">{leetcodeStats.medium}</span>
                            </div>
                            <div className="flex-1 flex flex-col items-center p-1.5 bg-white/5 rounded border border-white/5">
                                <span className="text-[10px] text-gray-400">Hard</span>
                                <span className="text-xs font-bold text-red-400">{leetcodeStats.hard}</span>
                            </div>
                        </div>
                    </BentoCard>

                    {/* B. Bottom Card: CS Fundamentals */}
                    <BentoCard delay={0.3} className="flex-1 relative p-5 flex flex-col justify-center bg-[#111] border-gray-800">
                        <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                            CS Fundamentals
                        </h3>

                        <div className="flex flex-col gap-3">
                            {[
                                { name: 'Operating Systems', icon: <Cpu size={14} />, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
                                { name: 'Database Management', icon: <Database size={14} />, color: 'text-green-400', bg: 'bg-green-500/10', border: 'border-green-500/20' },
                                { name: 'Object-Oriented Prog.', icon: <Code2 size={14} />, color: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
                                { name: 'Computer Networks', icon: <Globe size={14} />, color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
                                { name: 'System Design', icon: <Layers size={14} />, color: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/20' },
                            ].map((skill) => (
                                <div
                                    key={skill.name}
                                    className={`flex items-center gap-3 px-3 py-2 rounded-lg border ${skill.border} ${skill.bg} hover:bg-opacity-20 transition-all cursor-default w-full`}
                                >
                                    <div className={`${skill.color} min-w-[14px]`}>{skill.icon}</div>
                                    <span className="text-xs font-medium text-gray-200 truncate">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </BentoCard>

                </div>
            </div>
        </section>
    );
};

export default Hero;