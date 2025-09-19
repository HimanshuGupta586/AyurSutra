# AyurSutra – Panchakarma Patient Management & Therapy Scheduling Software  

A full-stack MedTech web application to streamline Panchakarma therapy scheduling, patient management and Ayurvedic product sales.  
Built with **Next.js**, **MongoDB/Mongoose**, **Tailwind + ShadCN** for UI, and an **AI chatbot** powered by **Python (FastAPI + LangChain)**.

---

## 🚀 Features

### 👩‍⚕️ Doctor Module
- Secure doctor login & dashboard
- Manage assigned patients with quick search/filter
- Schedule therapy sessions via calendar view
- Generate digital prescriptions & pre/post-procedure instructions
- Track patient progress & feedback
- Manage clinical inventory and order Ayurvedic products directly from the shop

### 🧑‍🦰 Patient Module
- Secure patient signup/login & dashboard
- View upcoming & past therapy sessions with reminders
- Track recovery milestones with progress charts
- Direct chat with doctor & upload reports
- Personalized diet & lifestyle recommendations
- Buy recommended Ayurvedic products in-app
- Digital health record downloads

### 🛒 Integrated Shop
- Smart product recommendations and bundles
- Order tracking, subscription kits and payments

### 🤖 AI Chatbot
- Built using LangChain and OpenAI gpt-40-mini model
- Patient FAQ answers, doctor therapy plan suggestions
- Multilingual support (English & Hindi planned)

---

## 🏗️ Tech Stack

| Layer                | Technology                           |
|----------------------|--------------------------------------|
| **Frontend**         | Next.js (App Router), ShadCN, Tailwind CSS |
| **Backend (Node)**   | Next.js Server Actions        |
| **Database**         | MongoDB + Mongoose                    |
| **AI Service**       | LangChain + OpenAI model: gpt-4o-mini |
| **Auth**             | Auth.js                               |

---

## 📂 Project Structure
src
 ├── app
 │    ├── api
 │    │    ├── ai-chat/                  # API route for AI chat
 │    │    └── auth/[...nextauth]/       # NextAuth handler
 │    ├── auth/                          # generic auth pages (if any)
 │    ├── dashboard/
 │    │    ├── doctor/                   # doctor dashboard pages
 │    │    └── patient/                  # patient dashboard pages
 │    ├── doctor/auth/login/             # doctor login page
 │    └── patient/auth/                  # patient auth pages
 │         ├── login/                    # patient login page
 │         └── signup/                   # patient signup page
 ├── components/
 │    ├── dashboard/                     # dashboard-specific components
 │    ├── home/                          # homepage components
 │    ├── themes/                        # theme utilities
 │    └── ui/                            # shared UI (ShadCN)
 └── lib/
      └── models/                        # mongoose schemas & models


    ---

## ⚙️ Setup Instructions

### 1. Clone the repository
    git clone https://github.com/your-username/ayursutra.git
    cd ayursutra

### 2. Install dependencies
    npm install
    # or
    yarn install
### 3. Environment variables
    Create a .env.local file in the root:
    MONGODB_URI=your_mongodb_connection_string
    NEXTAUTH_SECRET=your_secret_key
    NEXTAUTH_URL=http://localhost:3000
    OPENAI_API_KEY=your_openai_api_key
    
### 4. Run the development server
    npm run dev
    Visit http://localhost:3000.
