
```markdown
# ⚡ Ayush Mhaisane | Full Stack Portfolio

[![Live Demo](https://img.shields.io/badge/Live_Demo-ayushmhaisane.in-06b6d4?style=for-the-badge&logo=vercel)](https://ayushmhaisane.in)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-v18-339933?style=for-the-badge&logo=nodedotjs)](https://nodejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

## 🚀 About The Project

This is my official personal portfolio website, engineered to showcase my skills, projects, and professional journey as a **Full Stack Engineer**. 

Unlike standard static portfolios, this application is a full-stack system featuring a **Real-time AI Chatbot** powered by Google Gemini, a custom backend for data persistence, and high-performance animations.

### ✨ Key Features

* **🤖 Custom AI Chatbot:** Integrated with **Google Gemini 1.5 Flash**, this assistant answers questions about my resume, skills, and availability in real-time.
* **🎨 3D Bento Grid Layout:** A modern, responsive grid design inspired by top-tier developer portfolios (Vercel/Linear style).
* **🔦 Spotlight Effects:** Interactive mouse-following glow effects on project cards for a premium UI feel.
* **⚡ High Performance:** Optimized with Vite, React Suspense, and lazy loading for near-instant paint times.
* **📱 Fully Responsive:** Flawless experience across mobile, tablet, and desktop devices.
* **🔌 Real-Time Backend:** Node.js/Express backend deployed on Render to handle API requests and chat logging.

---

## 🛠️ Tech Stack

### **Frontend**
* **Core:** React.js, Vite
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion
* **AI Integration:** Google Generative AI SDK
* **SEO:** React Helmet Async

### **Backend**
* **Server:** Node.js, Express.js
* **Database:** MongoDB (for chat logs and analytics)
* **Deployment:** Vercel (Frontend) + Render (Backend)

---

## ⚙️ Local Development Setup

Follow these steps to run the project locally.

### 1. Clone the Repository
```bash
git clone [https://github.com/AyushMhaisane/my-portfolio-2026.git](https://github.com/AyushMhaisane/my-portfolio-2026.git)
cd my-portfolio-2026

```

### 2. Frontend Setup

```bash
# Navigate to the root (or client folder if separated)
npm install

# Create a .env file
touch .env

```

**Add these variables to your `.env` file:**

```env
VITE_GEMINI_API_KEY=your_google_gemini_api_key
VITE_API_URL=http://localhost:5000  # Or your live backend URL

```

Start the frontend:

```bash
npm run dev

```

### 3. Backend Setup (Optional)

*If you want to run the custom server locally:*

```bash
cd server
npm install

# Create .env for backend
touch .env

```

**Add these variables to `server/.env`:**

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string

```

Start the server:

```bash
npm start

```

---

## 📂 Project Structure

```
├── public/              # Static assets (favicons, images)
├── src/
│   ├── assets/          # Project screenshots & icons
│   ├── components/      # Reusable UI components (SpotlightCard, ChatBot)
│   ├── sections/        # Page sections (Hero, Projects, About)
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Entry point
├── server/              # Node.js Express Backend
│   ├── models/          # MongoDB Schemas
│   ├── routes/          # API Routes
│   └── index.js         # Server entry point
└── package.json         # Dependencies & Scripts

```

---

## 🚀 Deployment

The project is designed for seamless deployment:

* **Frontend:** Deployed on **Vercel**.
* Build Command: `npm run build`
* Output Directory: `dist`


* **Backend:** Deployed on **Render**.
* Start Command: `node index.js`



---

## 📬 Contact

**Ayush Mhaisane** Full Stack Engineer | Open Source Enthusiast

* **Email:** ayushmhaisane25@gmail.com
* **LinkedIn:** [Ayush Mhaisane](https://www.linkedin.com/in/ayush-mhaisane-858038304/)
* **GitHub:** [AyushMhaisane](https://github.com/AyushMhaisane)
* **Live Portfolio:** [ayushmhaisane.in](https://ayushmhaisane.in)

---

*Built with ❤️ and ☕ by Ayush Mhaisane.*

```

```