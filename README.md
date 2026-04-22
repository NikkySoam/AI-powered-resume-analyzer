🚀 AI Resume & Skill Analysis Platform

A full-stack web application that analyzes resumes using AI, detects skill gaps, and generates ATS friendly resumes.

Built while learning through tutorials and hands on practice, with a focus on understanding how real world applications are structured.

✨ Features
🔐 JWT Authentication (Login/Register)
🚫 Token Blacklisting (secure logout handling)
🤖 Resume parsing using Gemini AI
🧠 Skill extraction & gap analysis
📄 ATS optimized resume generation
📥 Dynamic PDF generation using Puppeteer
🔗 Fullstack integration (Frontend + Backend + AI)

🛠 Tech Stack
Frontend: React.js
Backend: Node.js, Express.js
Authentication: JWT + Token Blacklisting
AI: Gemini API
PDF: Puppeteer

📂 Project Structure
├── Backend/
│   ├── src/                # Backend source code
│   ├── .env                # Environment variables
│   ├── server.js           # Entry point
│   ├── package.json
│
├── Frontend/
│   ├── public/
│   ├── src/
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   │   ├── components/
│   │   │   │   ├── hooks/
│   │   │   │   ├── pages/
│   │   │   │   ├── services/
│   │   │   │   ├── auth.context.jsx
│   │   │   │   ├── auth.form.scss
│   │   │   │
│   │   │   ├── interview/
│   │   │
│   │   ├── style/
│   │   ├── App.jsx
│   │   ├── app.route.jsx
│   │   ├── main.jsx
│   │   ├── style.scss
│
└── README.md

⚙️ Setup Instructions
1. Clone the repository
git clone https://github.com/NikkySoam/AI-Interview-coach
cd AI-Interview-coach

2. Setup Backend
cd Backend
npm install
npm run dev

3. Setup Frontend
cd Frontend
npm install
npm start


🔑 Environment Variables
Create a .env file inside Backend/:
PORT=3000
JWT_SECRET=
GEMINI_API_KEY=


📚 What I Learned
How authentication works using JWT
Handling logout securely with token blacklisting
Integrating AI APIs into real applications
Parsing and analyzing resume data
Generating PDFs dynamically
Structuring a scalable full-stack project
