import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from 'react-markdown';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi! I'm Ayush's AI Assistant. Ask me anything about his skills, projects, or experience!", sender: "bot" },
    ]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    
    // REFS (These persist without re-rendering)
    const messagesEndRef = useRef(null);
    const chatSessionRef = useRef(null);

    // Portfolio Context
    const portfolioContext = `
    You are an AI assistant for Ayush Mhaisane's Portfolio. 
    You are professional, friendly, and helpful. Your goal is to help recruiters and clients understand Ayush's value.

    --- PERSONAL INFO ---
    Name: Ayush Mhaisane
    Role: Full Stack Engineer & Open Source Enthusiast
    Location: Pune, India
    Education: 
    - B.E. in Information Technology, D.Y. Patil College of Engineering (2024 - Present), SGPA: 9.25
    - Diploma in IT, Government Polytechnic Amravati (2021 - 2024), 92.89%
    Languages: English, Hindi, Marathi

    --- SKILLS ---
    Frontend: React.js, Next.js, Tailwind CSS, HTML5, CSS3, JavaScript (ES6+), Bootstrap
    Backend: Node.js, Express.js, Java, Python, REST APIs
    Databases: MongoDB, MySQL, Firebase
    Tools: Git, GitHub, Linux, VS Code, Postman, Vercel, Render
    Concepts: Data Structures & Algorithms (DSA), OOP, DBMS, OS, Computer Networks

    --- KEY PROJECTS ---
    1. Project Name: "Portfolio Website" (The one the user is currently on)
       - Tech: React, Tailwind, Gemini AI, Framer Motion
       - Features: AI Chatbot, 3D animations, Responsive design.
    
    2. Project Name: "Open Source Contributor"
       - Role: Contributor to Cal.com & Strapi
       - Impact: Fixed bugs, improved documentation, and added features to large codebases.

    --- ACHIEVEMENTS ---
    - Solved 170+ problems on LeetCode.
    - Earned the "100 Days Badge 2025" and "50 Days Badge 2025" on LeetCode for consistency.
    - Official Contributor Badge: Open Source Code Gwalior (OSCG '26).

    --- AVAILABILITY ---
    - Open to: Full-time Software Engineering roles, Freelance Web Development, and Open Source collaborations.
    - Notice Period: Immediate / Available to join.

    --- CONTACT ---
    - Email: ayushmhaisane25@gmail.com
    - LinkedIn: https://www.linkedin.com/in/ayush-mhaisane-858038304/
    - GitHub: https://github.com/AyushMhaisane
    - Leetcode : https://leetcode.com/u/Ayush_Mhaisane/
    - Mobile Number: +91 7218558993

    --- BEHAVIOR RULES ---
    - If asked about "Tech Stack", list the specific technologies above.
    - If asked "Can I hire him?", answer enthusiastically and point to the Contact section.
    - If asked a question unrelated to Ayush (e.g., "What is the capital of France?"), politely decline and steer back to Ayush.
    - Keep answers concise (under 3 sentences) unless asked for details.
    `;

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    // Initialize Chat Session ONCE on mount
    useEffect(() => {
        const initChat = async () => {
            try {
                // Ensure API key is available
                const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
                if (!apiKey) {
                    console.error("Gemini API Key is missing");
                    return;
                }

                const genAI = new GoogleGenerativeAI(apiKey);
                
                // --- MODEL SELECTION ---
           
                
                const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

                chatSessionRef.current = model.startChat({
                    history: [
                        {
                            role: "user",
                            parts: [{ text: portfolioContext }],
                        },
                        {
                            role: "model",
                            parts: [{ text: "Understood. I am ready to answer questions about Ayush." }],
                        },
                    ],
                });
            } catch (error) {
                console.error("Failed to initialize chat:", error);
            }
        };

        initChat();
    }, []); 

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = input;
        setInput(""); 
        setMessages((prev) => [...prev, { text: userMessage, sender: "user" }]);
        setIsTyping(true);

        try {
            if (!chatSessionRef.current) {
                // Try re-initializing if connection was lost or not set up
                const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
                const genAI = new GoogleGenerativeAI(apiKey);
                const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
                chatSessionRef.current = model.startChat({
                     history: [{ role: "user", parts: [{ text: portfolioContext }] }]
                });
            }

            const result = await chatSessionRef.current.sendMessage(userMessage);
            const response = await result.response;
            const botResponse = response.text();

            setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);

            // Save Chat History to MongoDB (Optional)
            const apiUrl = import.meta.env.VITE_API_URL || 'https://ayush-portfolio-api-55nm.onrender.com';
            
            // Fire and forget (don't await this to keep chat fast)
            fetch(`${apiUrl}/api/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userMessage: userMessage,
                    botResponse: botResponse
                }),
            }).catch(err => console.error("DB Save Error:", err));

        } catch (error) {
            console.error("Chat Error:", error);
            setMessages((prev) => [
                ...prev,
                { text: "Oops! My AI brain is having a moment. Please try again later.", sender: "bot" }
            ]);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <>
            {/* Floating Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 p-4 bg-cyan-500 text-black rounded-full shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:bg-cyan-400 transition-all hover:scale-110 animate-bounce-slow"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-50 w-80 md:w-96 bg-[#111] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px]">

                    {/* Header */}
                    <div className="bg-gray-900 p-4 border-b border-gray-800 flex items-center gap-3">
                        <div className="p-2 bg-cyan-500/10 rounded-full">
                            <Bot className="text-cyan-400" size={20} />
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-sm">Portfolio AI</h3>
                            <p className="text-green-400 text-xs flex items-center gap-1">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Online
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-black/50 scrollbar-thin scrollbar-thumb-gray-800">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === "user"
                                        ? "bg-cyan-500 text-black rounded-tr-none"
                                        : "bg-gray-800 text-gray-200 rounded-tl-none border border-gray-700"
                                        }`}
                                >
                                    <ReactMarkdown
                                        components={{
                                            strong: ({ node, ...props }) => <span className="font-bold text-white" {...props} />,
                                            ul: ({ node, ...props }) => <ul className="list-disc ml-4 mt-2 space-y-1" {...props} />,
                                            li: ({ node, ...props }) => <li className="text-gray-300" {...props} />,
                                            a: ({ node, ...props }) => (
                                                <a
                                                    className="text-cyan-400 hover:underline break-all"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    {...props}
                                                />
                                            ),
                                            p: ({ node, ...props }) => <p className="mb-1 last:mb-0" {...props} />
                                        }}
                                    >
                                        {msg.text}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        ))}

                        {/* Typing Indicator */}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-gray-800 p-3 rounded-2xl rounded-tl-none border border-gray-700 flex gap-1">
                                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
                                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-75"></span>
                                    <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-150"></span>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Field */}
                    <div className="p-4 bg-gray-900 border-t border-gray-800">
                        <form onSubmit={handleSend} className="flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask me anything..."
                                className="flex-1 bg-black border border-gray-700 text-white text-sm rounded-xl px-4 py-2 focus:outline-none focus:border-cyan-500 placeholder-gray-500"
                            />
                            <button
                                type="submit"
                                disabled={isTyping}
                                className={`p-2 bg-cyan-500 text-black rounded-xl hover:bg-cyan-400 transition-colors ${isTyping ? "opacity-50 cursor-not-allowed" : ""}`}
                            >
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatBot;