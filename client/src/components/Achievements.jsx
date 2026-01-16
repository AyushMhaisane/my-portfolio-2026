import React from "react";
import { Trophy, Award, TrendingUp } from "lucide-react";
// 1. Import FadeIn
import FadeIn from './FadeIn';

// Import your local image
import oscgBadge from '../assets/oscg-badge.jpg';

const Achievements = () => {
  const achievements = [
    {
      title: "100 Days Badge 2025",
      date: "Nov 8, 2025",
      description: "Awarded for 100 days of consistent problem solving on LeetCode.",
      image: "https://assets.leetcode.com/static_assets/others/25100.gif",
      icon: <Trophy size={24} />,
      color: "yellow",
      // Standard Badge Style
      imageStyle: "h-70 w-70 object-contain drop-shadow-[0_0_25px_rgba(250,204,21,0.2)]"
    },
    {
      title: "50 Days Badge 2025",
      date: "Active",
      description: "Awarded for maintaining a 50-day coding streak.",
      image: "https://assets.leetcode.com/static_assets/others/2550.gif",
      icon: <TrendingUp size={24} />,
      color: "green",
      // Standard Badge Style
      imageStyle: "h-70 w-70 object-contain drop-shadow-[0_0_25px_rgba(74,222,128,0.2)]"
    },
    {
      title: "OSCG'26 Contributor",
      date: "Oct 2025",
      description: "Official contributor badge for Open Source Code Gwalior 2026.",
      image: oscgBadge,
      icon: <Award size={24} />,
      color: "purple",
      // Certificate Mode (Fills width)
      imageStyle: "w-full h-auto object-cover rounded-xl border border-gray-700 shadow-lg"
    },
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case "yellow":
        return "text-yellow-400 bg-yellow-500/10 border-yellow-500/20 shadow-[0_0_20px_rgba(250,204,21,0.2)]";
      case "green":
        return "text-green-400 bg-green-500/10 border-green-500/20 shadow-[0_0_20px_rgba(74,222,128,0.2)]";
      case "purple":
        return "text-purple-400 bg-purple-500/10 border-purple-500/20 shadow-[0_0_20px_rgba(192,132,252,0.2)]";
      default:
        return "text-gray-400 bg-gray-500/10 border-gray-500/20";
    }
  };

  return (
    <section id="achievements" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        Achievements & <span className="text-cyan-400">Badges</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map((item, index) => (
          // 2. WRAPPER: Use FadeIn with staggered delay
          <FadeIn key={index} delay={index * 0.2} className="h-full">
            <div
              className="bg-[#111] p-8 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group hover:-translate-y-1 flex flex-col items-center text-center h-full"
            >
              {/* Header: Icon & Date */}
              <div className="w-full flex justify-between items-center mb-6">
                <div
                  className={`p-3 rounded-xl border transition-all duration-300 ${getColorClasses(
                    item.color
                  )}`}
                >
                  {item.icon}
                </div>
                <span className="text-xs font-bold font-mono text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors">
                  {item.date}
                </span>
              </div>

              {/* Title & Description */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                  {item.description}
                </p>
              </div>

              {/* Image Area - Updated for Vertical Centering */}
              {item.image && (
                <div className="w-full flex-1 flex items-center justify-center mt-2">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`${item.imageStyle} transition-transform duration-500 group-hover:scale-105`}
                  />
                </div>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Achievements;