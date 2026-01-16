import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            // 1. Frosted Glass Effect
            setScrolled(window.scrollY > 50);

            // 2. Determine Active Section
            const sections = ["home", "tech", "projects", "contributions", "achievements", "experience", "education", "contact"];

            // Find the current section in view
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the top of the section is near the top (offset by 100px)
                    if (rect.top >= -100 && rect.top < window.innerHeight / 2) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Tech", href: "#tech" },
        { name: "Projects", href: "#projects" },
        { name: "Open Source", href: "#contributions" },
        { name: "Achievements", href: "#achievements" },
        { name: "Experience", href: "#experience" },
        { name: "Education", href: "#education" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? "bg-black/50 backdrop-blur-xl border-b border-white/10 shadow-lg"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <a href="#home" className="text-xl font-bold text-white tracking-tight hover:opacity-80 transition-opacity">
                        Ayush<span className="text-cyan-400">.</span>dev
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors relative group ${isActive ? "text-cyan-400" : "text-gray-300 hover:text-white"
                                        }`}
                                >
                                    {link.name}
                                    {/* Animated Underline */}
                                    <span
                                        className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                            }`}
                                    ></span>
                                </a>
                            );
                        })}

                        <a
                            href="#contact"
                            className="bg-white/10 hover:bg-cyan-500 hover:text-black text-white px-4 py-2 rounded-full text-sm font-bold transition-all border border-white/10"
                        >
                            Connect
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-gray-300 hover:text-white transition p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown (Animated with Framer Motion) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden fixed top-16 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col items-center space-y-4 py-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`text-lg font-medium transition-colors ${activeSection === link.href.substring(1)
                                            ? "text-cyan-400"
                                            : "text-gray-300 hover:text-white"
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="bg-cyan-500 text-black px-8 py-3 rounded-full font-bold hover:bg-cyan-400 transition-all w-3/4 text-center mt-4"
                            >
                                Connect with Me
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;