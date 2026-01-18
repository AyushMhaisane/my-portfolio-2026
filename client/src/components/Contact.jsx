import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Send } from "lucide-react";
import { toast } from "react-toastify";
import FadeIn from './FadeIn';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSending, setIsSending] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);

        // --- 1. Save to MongoDB (Backend) ---
        try {
            await fetch('https://ayush-portfolio-api-55nm.onrender.com/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            console.log("Contact saved to MongoDB");
        } catch (err) {
            console.error("Failed to save to MongoDB:", err);
            // We don't stop execution here; we still want to send the email
        }

        // --- 2. Send Email via EmailJS ---
        emailjs.sendForm(serviceId, templateId, e.target, publicKey)
            .then(() => {
                toast.success("Message sent successfully!");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                toast.error("Failed to send message via Email.");
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    return (
        <section id="contact" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
            <FadeIn>
                <div className="flex flex-col md:flex-row gap-6 bg-[#111] border border-gray-800 rounded-3xl overflow-hidden p-6 md:p-10 relative group">

                    {/* Glow Effect */}
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] -z-10 group-hover:bg-cyan-500/20 transition-all duration-500"></div>

                    {/* Left Column: Info */}
                    <div className="md:w-1/2 flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Let's work <span className="text-cyan-400">together</span>.
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                I'm currently looking for new opportunities. Whether you have a question,
                                a project idea, or just want to say hi, feel free to drop a message!
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-gray-300">
                                <div className="p-3 bg-gray-900 rounded-full border border-gray-800 text-cyan-400">
                                    <Mail size={20} />
                                </div>
                                <span className="font-medium">ayushmhaisane25@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <div className="p-3 bg-gray-900 rounded-full border border-gray-800 text-cyan-400">
                                    <MapPin size={20} />
                                </div>
                                <span className="font-medium">Pune, Maharashtra</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="md:w-1/2 mt-8 md:mt-0">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-gray-900 transition-all"
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-gray-900 transition-all"
                                />
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    placeholder="Your Message"
                                    rows={4}
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-gray-900 transition-all resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSending}
                                className="w-full bg-cyan-400 text-black font-bold py-4 rounded-xl hover:bg-cyan-300 transition-all shadow-[0_0_15px_rgba(34,211,238,0.3)] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSending ? "Sending..." : "Send Message"}
                                {!isSending && <Send size={18} />}
                            </button>
                        </form>
                    </div>

                </div>
            </FadeIn>
        </section>
    );
};

export default Contact;