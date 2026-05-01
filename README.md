# 📝 Complaint Management System

A full-stack web application for managing and tracking customer complaints efficiently. Users can submit complaints, and admins can monitor and update their status in real time.

---

## 🚀 Features

- 📌 Add new complaints  
- 📋 View all complaints  
- 🔄 Update complaint status (Open / In Progress / Closed)  
- 🌐 REST API backend  
- 💻 Responsive frontend UI  
- 🗄️ PostgreSQL database integration  

---

## 🛠️ Tech Stack

**Frontend:**
- HTML  
- CSS  
- JavaScript  

**Backend:**
- Node.js  
- Express.js  

**Database:**
- PostgreSQL  

---

## 📂 Project Structure


Complaint Management System/
│
├── backend/
│ ├── index.js
│ ├── db.js
│ ├── package.json
│ ├── package-lock.json
│
├── frontend/
│ ├── index.html
│ ├── style.css
│ ├── script.js
│
└── .gitignore


---

## ⚙️ Installation & Setup

### 1. Clone Repository
```bash
git clone https://github.com/abdullah-khan41/Complaint-Management-System2.git
2. Install Backend Dependencies
cd backend
npm install
3. Setup Environment Variables

Create a .env file inside backend:

DATABASE_URL=your_postgresql_connection_string
4. Run Backend Server
node index.js

Server will run on:
http://localhost:3000

🌐 Frontend Setup
Simply open:
frontend/index.html
OR use VS Code Live Server extension.

🔗 API Endpoints
Get all complaints
GET /complaints
Add new complaint
POST /complaints

🌍 Deployment
Frontend → Netlify / Vercel
Backend → Railway / Render
Database → PostgreSQL (Neon / Supabase)

🔐 Environment Variables
DATABASE_URL = PostgreSQL connection string

👨‍💻 Author
Muhammad Abdullah
Full Stack Developer (Learning Phase 🚀)

⭐ Support
If you like this project, please give it a ⭐ on GitHub.
