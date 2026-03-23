# 📝 Todo App (Fullstack EJS)

A complete fullstack Todo application built with **Node.js**, **Express**, and **EJS**. The app features a robust authentication system with security measures, personalized user profiles, and a full task management system.

---

## 📦 Features

### 🔐 Security & Auth
- **User Authentication**: Secure Signup and Login functionality.
- **Login Protection**: Automatic 15-minute block after 3 failed login attempts to prevent brute-force attacks.
- **Session Management**: Persistent sessions using a local JSON-based session store.

### 👤 User Profile & Settings
- **Personalized Dashboard**: Users can only see and manage their own tasks.
- **Profile Management**: Update user information (Name, Email, Login).
- **Password Updates**: Securely change passwords with old password verification.

### 📝 Task Management (CRUD)
- **Create**: Add new tasks with automatic timestamping (`createdAt`).
- **Read**: View a list of your tasks or a detailed view of a specific task.
- **Update**: Edit task content, toggle completion status (`isDone`), and track `updatedAt`.
- **Delete**: Permanently remove your own tasks.

---

## 🛠️ Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/) (v5.2.1)
- **View Engine**: [EJS](https://ejs.co/) – Dynamic server-side rendering
- **Database**: Local JSON files (Users, Todos, Sessions)
- **Validation**: [Joi](https://joi.dev/) – Schema validation for requests
- **Environment**: [dotenv](https://www.npmjs.com/package/dotenv) – Environment variables

---

## 📁 Project Structure

```text
├── db/           # JSON files (users.json, todos.json, session.json)
├── helpers/      # Utility functions (date formatting, file handling, responses)
├── middleware/   # Auth guards, session handlers, and Joi schemas
├── routes/       # API and Page routes (Auth, Todos, Profile, Pages)
├── views/        # EJS templates and static assets (CSS/JS)
├── .env          # Environment configuration (PORT)
├── index.js      # Main server entry point
└── package.json  # Dependencies and scripts
```

-----

## ⚙️ Installation & Setup

1.  **Clone the repository**:

    ```bash
    git clone [https://github.com/Avo444/Todo-FullStack-EJS.git](https://github.com/Avo444/Todo-FullStack-EJS.git)
    cd Todo-FullStack-EJS
    ```

2.  **Install dependencies**:

    ```bash
    npm install
    ```

3.  **Configure Environment**:
    Create a `.env` file in the root:

    ```env
    PORT=3000
    ```

-----

## 🚀 Running the Project

To start the server with auto-reload (development mode):

```bash
npm run dev
```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) in your browser.

-----

## 🛣️ API & Route Overview

### 📄 Page Routes (UI)

| Route | Method | Description |
| :--- | :--- | :--- |
| `/` | GET | Home page |
| `/login` | GET | Login page (Redirects if already logged in) |
| `/signup` | GET | Signup page |
| `/profile` | GET | User dashboard with task list |
| `/profile/:id` | GET | Detailed view of a specific task |
| `/settings` | GET | User account settings page |
| `/logout` | GET | Clears session and redirects to login |

### ⚙️ API Routes (Logic)

| Route | Method | Description |
| :--- | :--- | :--- |
| `/auth/signup` | POST | Register a new user |
| `/auth/login` | POST | Authenticate user & manage login attempts |
| `/api/profile` | PATCH | Update user profile / password |
| `/api/todo` | GET / POST | Get all tasks or create a new one |
| `/api/todo/:id`| PATCH / DELETE | Update or remove a specific task |

-----

## ✨ Author

**Avo** – [GitHub Profile](https://github.com/Avo444)

-----