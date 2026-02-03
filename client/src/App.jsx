import React from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contributions from './components/Contributions';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ChatBot from './components/ChatBot';
import FadeIn from './components/FadeIn';

function App() {
  return (
    // 1. Main Container with "Depth" Background
    <div className="min-h-screen text-white selection:bg-cyan-500/30 relative overflow-hidden">

      {/* 2. GLOBAL BACKGROUND LAYER */}
      <div className="fixed inset-0 z-[-1]">
        {/* Dark subtle gradient mesh */}
        <div className="absolute inset-0 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>
        {/* Top Cyan Glow for depth */}
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      </div>

      <ToastContainer position="bottom-right" theme="dark" />
      <Navbar />

      {/* Hero Section (No FadeIn needed, it should be instant) */}
      <Hero />

      {/* Tech Stack */}
      <FadeIn>
        <TechStack />
      </FadeIn>

      <FadeIn>
        <Experience/>
      </FadeIn>
      {/* Projects */}
      <FadeIn>
        <Projects />
      </FadeIn>

      {/* Open Source */}
      <FadeIn>
        <Contributions />
      </FadeIn>

      {/* Achievements */}
      <FadeIn>
        <Achievements />
      </FadeIn>

      {/* Experience */}

      {/* Education */}
      <FadeIn>
        <Education />
      </FadeIn>

      {/* Contact */}
      <FadeIn>
        <Contact />
      </FadeIn>

      <Footer />
      <ScrollToTop />
      <ChatBot />
    </div>
  );
}

export default App;