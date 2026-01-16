import React from 'react';
import { FiDownload, FiMail } from 'react-icons/fi'; 
import { Typewriter } from 'react-simple-typewriter'; 
import BentoCard from '../components/BentoCard';
import profileImg from '../assets/profile.png';
// 1. Import Helmet
import { Helmet } from 'react-helmet-async';

const Hero = () => {
    return (
        <section id="home" className="max-w-7xl mx-auto px-4 pt-32 pb-20">
            
            {/* 2. SEO Configuration */}
            <Helmet>
                <title>Ayush Mhaisane | Full Stack Developer</title>
                <meta 
                    name="description" 
                    content="Portfolio of Ayush Mhaisane, a Full Stack Engineer and Open Source Contributor based in Pune, India. Specializing in MERN Stack, React, and Next.js." 
                />
                <meta name="keywords" content="Ayush Mhaisane, Full Stack Developer, React Developer, MERN Stack, Pune, Open Source, Portfolio" />
            </Helmet>

            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[500px]">

                {/* 1. Large Intro Card (Top Left) */}
                <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col justify-center gap-6">
                    <div>
                        <div className="flex flex-wrap gap-3 mb-4">
                            <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/20">
                                OPEN TO WORK
                            </span>
                            <span className="inline-block px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-bold rounded-full border border-purple-500/20">
                                OSCG'26 CONTRIBUTOR
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                            Hi, I'm <span className="text-cyan-400">Ayush</span>
                        </h1>
                        
                        {/* Typewriter Effect */}
                        <div className="text-xl text-gray-400 mt-2 font-light h-8">
                            I am a{" "}
                            <span className="text-cyan-400 font-bold">
                                <Typewriter
                                    words={[
                                        "Full Stack Engineer",
                                        "Open Source Enthusiast",
                                        "MERN Stack Developer",
                                        "React Specialist",
                                        "Backend Developer",
                                        "AI Enthusiast"
                                    ]}
                                    loop={0} // Infinite loop
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </div>
                    </div>

                    <p className="text-gray-400 leading-relaxed max-w-md">
                        I build pixel-perfect, scalable web applications. Contributing to open-source giants like
                        <strong className="text-white"> Cal.com</strong> & <strong className="text-white">Strapi</strong>.
                        Currently mastering <span className="text-white">WordPress Architecture</span>.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-2">
                        <a
                            href="mailto:ayushmhaisane25@gmail.com"
                            className="bg-cyan-400 text-black font-bold py-3 px-8 rounded-full hover:bg-white transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] flex items-center gap-2"
                        >
                            <FiMail /> Hire Me
                        </a>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 border border-white/20 py-3 px-6 rounded-full hover:bg-white/5 hover:border-white transition-all cursor-pointer text-white"
                        >
                            <FiDownload /> Resume
                        </a>
                    </div>
                </BentoCard>

                {/* 2. Photo Card (Top Right) */}
                <BentoCard delay={0.1} className="md:col-span-1 md:row-span-2 relative p-0 overflow-hidden min-h-[300px]">
                    <img
                        src={profileImg}
                        alt="Ayush Mhaisane"
                        className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        onError={(e) => { e.target.style.display = 'none' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
                    <div className="absolute bottom-6 left-6">
                        <h3 className="text-xl font-bold text-white">Ayush Mhaisane</h3>
                        <p className="text-cyan-400 text-sm">Pune, India</p>
                    </div>
                </BentoCard>

                {/* 3. Stats / LeetCode (Middle Right) */}
                <BentoCard delay={0.2} className="md:col-span-1 md:row-span-2 flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-black border-gray-800">
                    <h2 className="text-5xl font-bold text-white mb-1">170+</h2>
                    <p className="text-gray-400 text-sm tracking-widest uppercase text-center">LeetCode<br />Solved</p>
                </BentoCard>

            </div>
        </section>
    );
};

export default Hero;