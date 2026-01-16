import React, { useState, useEffect } from "react";
// Using lucide-react since we used it in other components
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when page is scrolled down 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 bg-cyan-500 p-3 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)] z-50 hover:bg-cyan-400 transition-all duration-300 hover:-translate-y-1"
                aria-label="Scroll to top"
            >
                <ArrowUp className="text-black w-6 h-6" />
            </button>
        )
    );
};

export default ScrollToTop;