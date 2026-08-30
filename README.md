# 🗒️ NoteKeeper

A full-stack MERN note-taking application that lets users create, edit, and delete notes through a clean, responsive dark-themed interface — with all data persisted in a MongoDB database via a RESTful API.

---

## 🚀 Features

- ✏️ **Create Notes** — Add new notes with a title and content
- 📋 **View All Notes** — Notes displayed in a responsive grid, sorted by newest first
- 🖊️ **Inline Editing** — Edit a note's title/content directly on its card without navigating away
- 🗑️ **Delete Notes** — Remove notes instantly with a single click
- 🌗 **Dark-Themed UI** — Clean, modern interface built with Tailwind CSS
- ⚡ **Real-Time UI Updates** — Frontend state syncs instantly with backend changes via Context API
- 📱 **Fully Responsive** — Optimized layout across mobile, tablet, and desktop screens

---

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- React Router DOM
- Tailwind CSS
- Axios

**Backend**
- Node.js
- Express.js
- Mongoose (MongoDB ODM)

**Database**
- MongoDB

---

## 📂 Project Structure

```
NoteKeeper/
├── backend/
│   ├── controllers/
│   │   └── note.controller.js     # CRUD logic for notes
│   ├── models/
│   │   └── note.model.js          # Mongoose schema
│   ├── routes/
│   │   └── note.route.js          # API endpoints
│   └── index.js                   # Server entry point
│
└── frontend/
    └── src/
        ├── api/                   # Axios base config
        ├── components/            # NavBar, Footer, Notecard, Noteform
        ├── context/               # Global note state (NoteContext)
        └── pages/                 # Home & Create Note pages
```

---

## 🔌 API Endpoints

| Method | Endpoint                              | Description              |
|--------|-----------------------------------------|---------------------------|
| POST   | `/api/v1/noteapp/create-note`           | Create a new note         |
| GET    | `/api/v1/noteapp/get-notes`             | Fetch all notes           |
| PUT    | `/api/v1/noteapp/update-note/:id`       | Update an existing note   |
| DELETE | `/api/v1/noteapp/delete-note/:id`       | Delete a note             |

---

## ⚙️ Getting Started

### Prerequisites
- Node.js installed
- MongoDB connection string (local or Atlas)

### 1. Clone the repository
```bash
git clone https://github.com/ALI-creator307/NoteKeeper.git
cd NoteKeeper
```

### 2. Setup the Backend
```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:
```env
PORT=4001
MONGO_URL=your_mongodb_connection_string
```

Run the backend server:
```bash
node index.js
```

### 3. Setup the Frontend
```bash
cd ../frontend
npm install
npm run dev
```

The app will be available at `http://localhost:5173` (or the port Vite assigns).

---

## 🧠 How It Works

- The **NoteContext** manages global state and handles all API calls (fetch, create, update, delete) using Axios.
- Each note is rendered as a **Notecard**, which toggles between view mode and inline edit mode.
- The Express backend exposes REST endpoints under `/api/v1/noteapp`, connected to MongoDB through Mongoose.

---

## 🔀 Other Versions

This repository contains the **MongoDB (MERN)** version of NoteKeeper.

A **PostgreSQL** version of this project is also available, with a live deployment:
- 🔗 Repository: [Add PostgreSQL repo link here]
- 🌐 Live Demo: [Add live demo link here]

---

## 📌 Future Improvements

- [ ] User authentication (login/signup)
- [ ] Note categories/tags and search
- [ ] Note pinning and color customization
- [ ] Pagination for large note lists

---

## 📄 License

This project is open source and available for learning and personal use.
