# LawBandit — Chat with PDFs (Frontend)

This is the frontend of **LawBandit**, a small project I built where you can upload a PDF and then ask questions about its content.  
The backend handles parsing the PDF, creating embeddings, and talking to the LLM. The frontend just makes it easy for the user.

Live link: [https://lawbandit-chat-pdf-frontend-j4g7.vercel.app](https://lawbandit-chat-pdf-frontend-j4g7.vercel.app)

---

## What I used
- **Next.js 13** with App Router
- **TypeScript**
- **Tailwind CSS** for styling
- Backend is on **Render** (Express + pdf-parse + HuggingFace embeddings + Groq API)
- Frontend is deployed on **Vercel**

---

## Features
- Upload a PDF
- Ask questions about it in chat format
- Shows answers pulled from the backend with context

---

## Project structure
frontend/
app/ # Next.js app router
components/ # FileUpload, ChatBox, etc.
public/ # static files
styles/ # global styles
.env.local # env file


---

## Setup (local)

1. Clone this repo:
   ```bash
   git clone https://github.com/<your-username>/lawbandit_chat_pdf_frontend.git
   cd lawbandit_chat_pdf_frontend


Install deps:

npm install


Add an .env.local file with your backend URL:

NEXT_PUBLIC_API_BASE_URL=https://lawbandit-chat-pdf-backend15.onrender.com


Run locally:

npm run dev


App will run at http://localhost:3000

Build for production:

npm run build
npm start

API (handled by backend)

POST /api/upload → upload a PDF

POST /api/ask → ask questions about uploaded PDF

Notes

Frontend is Vercel

Backend is Render

CORS must be set properly on backend for it to work with Vercel

License

MIT