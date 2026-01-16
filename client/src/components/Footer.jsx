import React from 'react';
import { Mail, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="py-12 px-4 md:px-8 max-w-7xl mx-auto mt-10 border-t border-gray-900">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Left: Brand & CTA */}
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold text-white mb-2">
                        Let's build something <span className="text-cyan-400">extraordinary</span>.
                    </h2>
                    <p className="text-gray-400 text-sm">
                        Open for full-stack opportunities & open source collaborations.
                    </p>
                </div>

                {/* Right: Actions */}
                <div className="flex flex-col items-center md:items-end gap-4">
                    {/* UPDATE YOUR EMAIL HERE */}
                    <a
                        href="mailto:your.real.email@gmail.com"
                        className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-cyan-50 transition-colors"
                    >
                        <Mail size={18} />
                        Say Hello
                    </a>

                    <div className="flex gap-6 mt-2">
                        {/* UPDATE YOUR SOCIAL LINKS HERE */}
                        <a href="https://github.com/AyushMhaisane" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/ayush-mhaisane-858038304/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="https://www.instagram.com/ayush_mhaisane/" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                            <Instagram size={20} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="mt-12 text-center text-gray-600 text-xs">
                <p>© {new Date().getFullYear()} Ayush Mhaisane. Built with React, Tailwind & Caffeine.</p>
            </div>
        </footer>
    );
};

export default Footer;