require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const rateLimit = require('express-rate-limit'); // Security feature

const app = express();

// --- Middleware ---
app.use(express.json()); // Allows parsing JSON bodies
app.use(cors()); // Allows your Frontend to talk to this Backend

// --- Security: Rate Limiter ---
// Limit repeated requests to public APIs (e.g., Chatbot)
// This prevents bots from spamming your Gemini API key.
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
    message: "Too many requests from this IP, please try again after 15 minutes",
    standardHeaders: true,
    legacyHeaders: false,
});

// Apply rate limiting specifically to the chat route
app.use('/api/chat', apiLimiter);


// --- 1. Connect to MongoDB ---
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ MongoDB Connected"))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));


// --- 2. Define Schemas & Models ---

// Contact Form Schema
const ContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

// Chat History Schema
const ChatSchema = new mongoose.Schema({
    userMessage: String,
    botResponse: String,
    timestamp: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', ContactSchema);
const Chat = mongoose.model('Chat', ChatSchema);


// --- 3. API Routes ---

// [POST] Save Contact Form Data
app.post('/api/contact', async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(201).json({ message: "Contact saved successfully!" });
    } catch (error) {
        console.error("Error saving contact:", error);
        res.status(500).json({ error: "Failed to save contact" });
    }
});

// [POST] Save Chat History
app.post('/api/chat', async (req, res) => {
    try {
        const newChat = new Chat(req.body);
        await newChat.save();
        res.status(201).json({ message: "Chat saved successfully!" });
    } catch (error) {
        console.error("Error saving chat:", error);
        res.status(500).json({ error: "Failed to save chat" });
    }
});

// [GET] Fetch All Contacts (For Admin Dashboard)
app.get('/api/contact', async (req, res) => {
    try {
        // Sort by date descending (newest first)
        const contacts = await Contact.find().sort({ date: -1 });
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch contacts" });
    }
});

// [GET] Fetch Chat Logs (For Admin Dashboard)
app.get('/api/chat', async (req, res) => {
    try {
        const chats = await Chat.find().sort({ timestamp: -1 });
        res.status(200).json(chats);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch chats" });
    }
});

// --- 4. Start Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));