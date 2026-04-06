import React, { useEffect, useRef, useState } from 'react';
import { FiDownload, FiMail } from 'react-icons/fi';
import { ArrowUpRight, Cpu, Database, Globe, Code2, Layers } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import profileImg from '../assets/profile.png';

// ─── Typewriter hook ───────────────────────────────────────────────────────────
function useTypewriter(words, typeSpeed = 70, deleteSpeed = 40, delay = 1800) {
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = words[wordIndex % words.length];
        const timeout = setTimeout(() => {
            if (!deleting) {
                setText(current.slice(0, text.length + 1));
                if (text.length + 1 === current.length) {
                    setTimeout(() => setDeleting(true), delay);
                }
            } else {
                setText(current.slice(0, text.length - 1));
                if (text.length - 1 === 0) {
                    setDeleting(false);
                    setWordIndex((i) => i + 1);
                }
            }
        }, deleting ? deleteSpeed : typeSpeed);
        return () => clearTimeout(timeout);
    }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, delay]);

    return text;
}

// ─── Data ──────────────────────────────────────────────────────────────────────
const ROLES = ['Full Stack Engineer', 'MERN Stack Developer', 'System Architect', 'Problem Solver'];

const LEET = { total: '180+', easy: '50+', medium: '100+', hard: '10+' };

const CS_SKILLS = [
    { name: 'Operating Systems', icon: <Cpu size={14} />, color: 'text-blue-400', bg: 'bg-blue-500/10' },
    { name: 'Database Management', icon: <Database size={14} />, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    { name: 'Object-Oriented Prog.', icon: <Code2 size={14} />, color: 'text-violet-400', bg: 'bg-violet-500/10' },
    { name: 'Computer Networks', icon: <Globe size={14} />, color: 'text-orange-400', bg: 'bg-orange-500/10' },
    { name: 'System Design', icon: <Layers size={14} />, color: 'text-pink-400', bg: 'bg-pink-500/10' },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

/** Glassmorphism bento card */
function Card({ children, className = '', style = {} }) {
    return (
        <div
            style={style}
            className={`
        relative overflow-hidden rounded-2xl
        bg-white/[0.03] border border-white/[0.07]
        transition-all duration-300
        hover:-translate-y-0.5 hover:border-white/[0.14]
        before:absolute before:inset-0 before:rounded-2xl
        before:bg-[radial-gradient(ellipse_at_top_left,rgba(6,182,212,0.05),transparent_60%)]
        before:pointer-events-none
        ${className}
      `}
        >
            {children}
        </div>
    );
}

// ─── Main Component ────────────────────────────────────────────────────────────
const Hero = () => {
    const typed = useTypewriter(ROLES);

    return (
        <section id="home" className="relative min-h-screen bg-[#080b10] text-[#e8eaf0] overflow-hidden">

            <Helmet>
                <title>Ayush Mhaisane | Full Stack Developer</title>
                <meta name="description" content="Portfolio of Ayush Mhaisane, a Full Stack Engineer." />
                <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap" rel="stylesheet" />
            </Helmet>

            {/* ── Ambient blobs ── */}
            <div className="pointer-events-none">
                <div className="absolute -top-28 -left-28 w-[500px] h-[500px] rounded-full bg-cyan-500/[0.07] blur-[90px] animate-[drift_12s_ease-in-out_infinite_alternate]" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-violet-500/[0.06] blur-[90px] animate-[drift_15s_ease-in-out_infinite_alternate]" />
                <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-emerald-500/[0.05] blur-[90px] animate-[drift_18s_ease-in-out_infinite_alternate]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-5 pt-14 pb-20">

                {/* ── Nav ── */}
                <nav className="flex justify-between items-center mb-14 animate-[fadeUp_0.6s_ease_both]">
                    <span style={{ fontFamily: 'Syne, sans-serif' }} className="text-xl font-extrabold tracking-tight text-white">
                        AM<span className="text-cyan-400">.</span>
                    </span>
                    <div className="flex items-center gap-2 bg-cyan-500/[0.08] border border-cyan-500/20 rounded-full px-4 py-1.5 text-cyan-400 text-xs font-medium tracking-wide">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Open to work
                    </div>
                </nav>

                {/* ── Bento grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-3.5">

                    {/* 1. Intro — spans 2 cols, 1 row */}
                    <Card className="md:col-span-2 md:row-span-1 p-7 animate-[fadeUp_0.5s_0.1s_ease_both]">
                        {/* Badges */}
                        <div className="flex flex-wrap gap-2 mb-5">
                            <span className="text-[10px] font-semibold tracking-widest px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400">
                                OPEN TO WORK
                            </span>
                            <span className="text-[10px] font-semibold tracking-widest px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-400">
                                FULL STACK ENGINEER
                            </span>
                        </div>

                        {/* Name */}
                        <h1
                            style={{ fontFamily: 'Syne, sans-serif', letterSpacing: '-1.5px' }}
                            className="text-5xl md:text-6xl font-extrabold leading-[1.05] text-white mb-3"
                        >
                            Hi, I'm <span className="text-cyan-400">Ayush</span>
                        </h1>

                        {/* Typewriter */}
                        <p className="text-base text-white/40 font-light mb-5 h-6">
                            I am a{' '}
                            <span className="text-cyan-400 font-medium">{typed}</span>
                            <span className="text-cyan-400 animate-[blink_1s_step-end_infinite]">_</span>
                        </p>

                        {/* Bio */}
                        <p className="text-sm leading-relaxed text-white/50 max-w-xl mb-7">
                            I engineer{' '}
                            <strong className="text-white/80 font-medium">high-performance</strong>, scalable web architectures using{' '}
                            <span className="text-cyan-400 font-medium">MERN Stack</span>. Specialized in{' '}
                            <strong className="text-white/80 font-medium">distributed backend systems</strong> and{' '}
                            <strong className="text-white/80 font-medium">interactive UIs</strong>, backed by strong{' '}
                            <span className="text-cyan-400 font-medium">DSA foundations</span> and a relentless focus on{' '}
                            <strong className="text-white/80 font-medium">optimization</strong>,{' '}
                            <strong className="text-white/80 font-medium">security</strong>, and shipping{' '}
                            <strong className="text-white/80 font-medium">production-ready</strong> software.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-3">
                            <a
                                href="mailto:ayushmhaisane25@gmail.com"
                                className="inline-flex items-center gap-2 bg-cyan-400 text-black font-bold text-sm px-6 py-3 rounded-full transition-all hover:bg-cyan-300 hover:scale-[1.03] active:scale-100"
                                style={{ fontFamily: 'Syne, sans-serif' }}
                            >
                                <FiMail size={14} /> Hire Me
                            </a>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 border border-white/[0.12] text-white/60 text-sm px-6 py-3 rounded-full transition-all hover:border-white/30 hover:text-white hover:scale-[1.03] active:scale-100"
                            >
                                <FiDownload size={14} /> Resume
                            </a>
                        </div>
                    </Card>

                    {/* 2. Photo — spans 1 col, 2 rows */}
                    <Card className="md:col-span-1 md:row-span-2 p-0 min-h-[420px] animate-[fadeUp_0.5s_0.2s_ease_both] bg-[#0f1419]">
                        {/* Rings */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="absolute w-[148px] h-[148px] rounded-full border border-cyan-400/20 -translate-y-[30%] animate-[ripple_3s_ease-out_infinite]" />
                            <div className="absolute w-[180px] h-[180px] rounded-full border border-cyan-400/20 -translate-y-[30%] animate-[ripple_3s_1s_ease-out_infinite]" />
                        </div>

                        {/* Profile image */}
                        <div className="absolute inset-0 flex items-center justify-center -translate-y-[10%]">
                            <img
                                src={profileImg}
                                alt="Ayush Mhaisane"
                                className="w-[120px] h-[120px] rounded-full object-cover object-top ring-4 ring-cyan-400/20 shadow-[0_0_60px_rgba(6,182,212,0.15)]"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                            {/* Fallback avatar */}
                            <div
                                style={{ display: 'none', fontFamily: 'Syne, sans-serif', background: 'linear-gradient(135deg,#06b6d4,#8b5cf6)' }}
                                className="w-[120px] h-[120px] rounded-full items-center justify-center text-5xl font-extrabold text-white ring-4 ring-cyan-400/20"
                            >
                                A
                            </div>
                        </div>

                        {/* Info chip */}
                        <div className="absolute bottom-6 left-5 right-5 bg-[#080b10]/70 backdrop-blur-xl border border-white/[0.08] rounded-xl px-4 py-3">
                            <p style={{ fontFamily: 'Syne, sans-serif' }} className="text-[15px] font-bold text-white mb-0.5">
                                Ayush Mhaisane
                            </p>
                            <p className="text-xs text-cyan-400 flex items-center gap-1">
                                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                                </svg>
                                Pune, India
                            </p>
                        </div>
                    </Card>

                    {/* 3. LeetCode */}
                    <Card className="md:col-span-1 md:row-span-1 p-6 animate-[fadeUp_0.5s_0.3s_ease_both]">
                        {/* Dot grid bg */}
                        <div
                            className="absolute inset-0 rounded-2xl opacity-[0.06] pointer-events-none"
                            style={{
                                backgroundImage: 'linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)',
                                backgroundSize: '32px 32px',
                            }}
                        />
                        <div className="relative z-10">
                            <div className="flex justify-between items-center mb-5">
                                <div className="w-9 h-9 rounded-xl bg-[#1a1f2e] border border-white/[0.08] flex items-center justify-center">
                                    <img src="https://leetcode.com/static/images/LeetCode_logo_rvs.png" alt="LeetCode" className="w-5 h-5 object-contain" />
                                </div>
                                <a
                                    href="https://leetcode.com/u/Ayush_Mhaisane/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-[11px] text-white/30 hover:text-cyan-400 transition-colors flex items-center gap-1"
                                >
                                    <ArrowUpRight size={13} /> Profile
                                </a>
                            </div>
                            <p style={{ fontFamily: 'Syne, sans-serif' }} className="text-5xl font-extrabold text-white leading-none mb-1">
                                {LEET.total}
                            </p>
                            <p className="text-[10px] font-semibold tracking-[0.15em] text-cyan-400 uppercase mb-5">DSA Solved</p>
                            <div className="grid grid-cols-3 gap-2">
                                {[
                                    { label: 'Easy', val: LEET.easy, color: 'text-emerald-400' },
                                    { label: 'Med', val: LEET.medium, color: 'text-amber-400' },
                                    { label: 'Hard', val: LEET.hard, color: 'text-red-400' },
                                ].map((s) => (
                                    <div key={s.label} className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-2.5 text-center">
                                        <p className="text-[10px] text-white/40 mb-1">{s.label}</p>
                                        <p style={{ fontFamily: 'Syne, sans-serif' }} className={`text-sm font-bold ${s.color}`}>{s.val}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Card>

                    {/* 4. CS Fundamentals */}
                    <Card className="md:col-span-1 md:row-span-1 p-6 animate-[fadeUp_0.5s_0.4s_ease_both]">
                        <p className="text-[11px] font-semibold tracking-[0.12em] text-white/35 uppercase mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse inline-block" />
                            CS Fundamentals
                        </p>
                        <div className="flex flex-col gap-2">
                            {CS_SKILLS.map((s) => (
                                <div
                                    key={s.name}
                                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border border-transparent hover:bg-white/[0.04] hover:border-white/[0.07] transition-all cursor-default`}
                                >
                                    <div className={`w-7 h-7 rounded-lg ${s.bg} flex items-center justify-center flex-shrink-0 ${s.color}`}>
                                        {s.icon}
                                    </div>
                                    <span className="text-[13px] text-white/70">{s.name}</span>
                                </div>
                            ))}
                        </div>
                    </Card>

                </div>
            </div>

            {/* ── Keyframe styles (injected once) ── */}
            <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes drift {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(40px, 30px) scale(1.08); }
        }
        @keyframes ripple {
          0%   { opacity: 0.6; transform: translate(-50%, -50%) scale(1);    }
          100% { opacity: 0;   transform: translate(-50%, -50%) scale(1.35); }
        }
      `}</style>
        </section>
    );
};

export default Hero;
