import React, { useState, useEffect } from 'react';
import { GitPullRequest, GitMerge, ArrowUpRight, CheckCircle2, Github } from 'lucide-react';
// 1. Import FadeIn
import FadeIn from './FadeIn';

const Contributions = () => {
    const githubUsername = "ayushmhaisane";

    // State for the custom calendar
    const [calendarData, setCalendarData] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch data from the same API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${githubUsername}?y=last`);
                const data = await res.json();

                if (data.contributions) {
                    setCalendarData(data.contributions);
                }
            } catch (error) {
                console.error("Failed to load GitHub data", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    // Helper to get color based on contribution level (0-4)
    const getLevelColor = (level) => {
        switch (level) {
            case 1: return 'bg-[#0e4429]'; // Low
            case 2: return 'bg-[#006d32]';
            case 3: return 'bg-[#26a641]';
            case 4: return 'bg-[#39d353]'; // High
            default: return 'bg-[#1a1a1a]'; // None
        }
    };

    const contributionsList = [
        {
            org: "Cal.com",
            repo: "calcom/cal.com",
            type: "Open Source",
            action: "Merged",
            title: "Fix: Calendar timezone synchronization issue",
            description: "Resolved a critical bug where timezones were desyncing for users in APAC regions. Improved date-fns implementation.",
            prLink: "https://github.com/calcom/cal.com/pulls",
            color: "text-orange-400",
            bg: "bg-orange-500/10",
            border: "border-orange-500/20"
        },
        {
            org: "Strapi",
            repo: "strapi/strapi",
            type: "Open Source",
            action: "Merged",
            title: "Feat: Enhanced media library sorting",
            description: "Added ability to sort media assets by upload date and file size in the admin panel dashboard.",
            prLink: "https://github.com/strapi/strapi/pulls",
            color: "text-purple-400",
            bg: "bg-purple-500/10",
            border: "border-purple-500/20"
        },
        {
            org: "WordPress Core",
            repo: "WordPress/gutenberg",
            type: "Learning / Contrib",
            action: "In Progress",
            title: "Gutenberg Block Optimization",
            description: "Currently exploring block rendering performance improvements within the WordPress Gutenberg editor architecture.",
            prLink: "https://github.com/WordPress/gutenberg/pulls",
            color: "text-blue-400",
            bg: "bg-blue-500/10",
            border: "border-blue-500/20"
        }
    ];

    return (
        <section id="contributions" className="py-20 px-4 md:px-8 max-w-5xl mx-auto">

            <div className="flex flex-col items-center mb-12 text-center">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                        <GitPullRequest className="text-cyan-400" size={28} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Open Source <span className="text-cyan-400">Contributions</span>
                    </h2>
                </div>
                <p className="text-gray-400 max-w-lg">
                    My journey in open source, from consistent daily coding to merging PRs in massive repositories.
                </p>
            </div>

            {/* CUSTOM GITHUB CALENDAR RENDERER */}
            {/* 2. WRAPPER: FadeIn the Calendar Block */}
            <FadeIn>
                <div className="mb-16">
                    <div className="bg-[#111] border border-gray-800 rounded-3xl p-8 hover:border-cyan-500/30 transition-all duration-300 shadow-lg overflow-hidden">
                        <div className="flex items-center gap-3 mb-6">
                            <Github className="text-white" size={20} />
                            <h3 className="text-xl font-bold text-white">Contribution Activity</h3>
                        </div>

                        {/* The Graph Container */}
                        <div className="w-full overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-800">
                            {loading ? (
                                <div className="flex items-center justify-center h-32 text-gray-500 animate-pulse">
                                    Loading GitHub Data...
                                </div>
                            ) : (
                                <div className="flex gap-1 min-w-max">
                                    <div className="grid grid-rows-7 grid-flow-col gap-1">
                                        {calendarData.slice(-91).map((day, i) => (
                                            <div
                                                key={i}
                                                title={`${day.date}: ${day.count} contributions`}
                                                className={`w-3 h-3 rounded-sm ${getLevelColor(day.level)} hover:ring-1 hover:ring-white/50 transition-all`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                            {!loading && (
                                <div className="flex items-center gap-2 mt-4 text-xs text-gray-500">
                                    <span>Less</span>
                                    <div className="flex gap-1">
                                        <div className="w-3 h-3 rounded-sm bg-[#1a1a1a]"></div>
                                        <div className="w-3 h-3 rounded-sm bg-[#0e4429]"></div>
                                        <div className="w-3 h-3 rounded-sm bg-[#006d32]"></div>
                                        <div className="w-3 h-3 rounded-sm bg-[#26a641]"></div>
                                        <div className="w-3 h-3 rounded-sm bg-[#39d353]"></div>
                                    </div>
                                    <span>More</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </FadeIn>

            {/* PR List */}
            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="text-cyan-400">#</span> Featured Pull Requests
                </h3>

                {contributionsList.map((item, index) => (
                    // 3. WRAPPER: Cascade effect for PR cards
                    <FadeIn key={index} delay={index * 0.2}>
                        <a
                            href={item.prLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block relative bg-[#111] border border-gray-800 rounded-2xl p-6 md:p-8 hover:border-gray-600 transition-all duration-300 hover:bg-[#151515] hover:-translate-y-1"
                        >
                            <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
                                <div className="flex items-start gap-5">
                                    <div className={`p-3 rounded-xl ${item.bg} ${item.border} border shrink-0`}>
                                        <GitMerge className={item.color} size={24} />
                                    </div>
                                    <div>
                                        <div className="flex flex-wrap items-center gap-2 mb-2">
                                            <span className="text-gray-200 font-bold text-lg hover:text-cyan-400 transition-colors">
                                                {item.org}
                                            </span>
                                            <span className="text-xs text-gray-500 border border-gray-800 px-2 py-1 rounded-md font-mono bg-black/50">
                                                {item.repo}
                                            </span>
                                        </div>
                                        <h3 className="text-white font-semibold text-xl mb-2 group-hover:text-cyan-400 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-row md:flex-col items-center md:items-end gap-4 md:gap-2 md:pl-6 md:border-l md:border-gray-800 min-w-fit">
                                    <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${item.border} ${item.bg} ${item.color}`}>
                                        {item.action === "Merged" && <CheckCircle2 size={14} />}
                                        {item.action}
                                    </div>
                                    <div className="flex items-center gap-1 text-xs text-gray-500 font-medium group-hover:text-cyan-400 transition-colors">
                                        View PR <ArrowUpRight size={14} />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
};

export default Contributions;