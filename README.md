# 📝 Todo App (Fullstack EJS)

A complete fullstack Todo application built with **Node.js**, **Express**, and **EJS**. The app features a secure authentication system, personalized user profiles, and full CRUD task management using a local JSON database.

---

## 📦 Features

### 🔐 Security & Auth

- **User Authentication**: Secure Signup and Login functionality.
- **Brute-force Protection**: Users are blocked for **15 minutes** after 3 failed login attempts.
- **Password Management**: Secure password hashing with `bcryptjs` and old password verification for updates.
- **Session Management**: Sessions are stored in a local JSON file (`session.json`) to persist login states.

### 👤 User Profile & Settings

- **Personalized Dashboard**: Users can only view and manage their own tasks.
- **Profile Update**: Update Name, Email, or Login credentials securely.
- **Password Update**: Change password by verifying the old password first.

### 📝 Task Management (CRUD)

- **Create Tasks**: Add new tasks with automatic timestamping (`createdAt`).
- **Read Tasks**: View all tasks or details of a specific task.
- **Update Tasks**: Edit task content, toggle completion status (`isDone`), and track `updatedAt`.
- **Delete Tasks**: Permanently remove your tasks.

---

## 🛠️ Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/) v5.2.1
- **View Engine**: [EJS](https://ejs.co/) – server-side templates
- **Database**: JSON files (`users.json`, `todos.json`, `session.json`)
- **Validation**: [Joi](https://joi.dev/) – request schema validation
- **Password Security**: [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- **Environment Variables**: [dotenv](https://www.npmjs.com/package/dotenv)

---

## 📁 Project Structure

```text
├── db/           # JSON databases: users.json, todos.json, session.json
├── helpers/      # Utility functions: file operations, responses, date formatting
├── middlewares/  # Middleware: authentication, validation, session handling
├── routes/       # Route handlers: Auth, Todos, Profile
├── views/        # EJS templates and static assets (CSS/JS)
├── .env          # Environment configuration (PORT)
├── index.js      # Main server entry point
└── package.json  # Dependencies and scripts
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**:

```bash
git clone https://github.com/Avo444/Todo-FullStack-EJS.git
cd Todo-FullStack-EJS
```

2. **Install dependencies**:

```bash
npm install
```

3. **Configure Environment**:

Create a `.env` file in the root directory:

```env
PORT=3000
```

---

## 🚀 Running the Project

Start the server in development mode with auto-reload:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛣️ API & Route Overview

### 📄 Page Routes (UI)

| Route          | Method | Description                                 |
| :------------- | :----- | :------------------------------------------ |
| `/`            | GET    | Home page                                   |
| `/login`       | GET    | Login page (redirects if already logged in) |
| `/signup`      | GET    | Signup page                                 |
| `/profile`     | GET    | Dashboard showing user tasks                |
| `/profile/:id` | GET    | Detailed view of a specific task            |
| `/settings`    | GET    | Account settings page                       |
| `/logout`      | GET    | Clears session and redirects to login       |

### ⚙️ API Routes (Logic)

| Route           | Method         | Description                                               |
| :-------------- | :------------- | :-------------------------------------------------------- |
| `/auth/signup`  | POST           | Register a new user (with password hashing)               |
| `/auth/login`   | POST           | Authenticate user and manage login attempts/blocking      |
| `/api/profile`  | PATCH          | Update profile or change password (requires old password) |
| `/api/todo`     | GET / POST     | Get all tasks or create a new task                        |
| `/api/todo/:id` | PATCH / DELETE | Update or delete a specific task                          |

---

## 💡 Security Notes

- Passwords are hashed using **bcryptjs** before storing.
- Login attempts are tracked per session; after 3 failed attempts, login is blocked for **15 minutes**.
- Profile updates require validation and verification of the current password before changing.

---

## ✨ Author

**Avo** – [GitHub Profile](https://github.com/Avo444)

---
