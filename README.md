CollabSpace- A Project Collaboration Platform

A full-stack collaboration tool designed for students, teams, and organizations to manage projects seamlessly.
Built with the MERN stack, it combines real-time document collaboration, task tracking, and AI-powered assistance into one platform.

Features:

1. PDF Collaboration – Upload, view, highlight, and annotate PDFs as a group.
2. Shared Notes – Team members can add and edit notes collaboratively.
3. Real-Time Sync – Highlights, notes, and tasks update instantly using Socket.IO.
4. Meeting Scheduler – Schedule meetings directly via Google Meet/Zoom APIs.
5.  AI Chatbot – Get project plans, summarize documents, and answer queries.

Tech Stack

Frontend:

React.js, CSS

React Router (navigation)

PDF.js (document rendering)

Socket.IO (real-time updates)

Backend:

Node.js, Express.js

JWT Authentication & Google OAuth

Socket.IO (real-time events)

REST APIs (for tasks, notes, meetings, documents)

Database & Storage:

MongoDB + Mongoose (users, tasks, notes, highlights)

MongoDB Atlas (cloud database)

AI & Integrations:

OpenAI API / Hugging Face (chatbot & summarization)

Google Meet API / Zoom API (meeting scheduling)

Deployment:

Vercel

Getting Started
1. Clone the Repo
git clone https://github.com/yourusername/project-collab.git
cd project-collab

2. Setup Backend
cd backend
npm install
npm run dev

3. Setup Frontend
cd frontend
npm install
npm start

🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss your ideas.
