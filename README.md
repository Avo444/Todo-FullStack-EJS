
---

```markdown
# 📝 Todo App (Fullstack EJS)

A simple and efficient fullstack Todo application built with **Node.js**, **Express**, and **EJS**. This app allows users to register, log in, and manage their personal tasks with full CRUD functionality.

---

## 📦 Features

- 🔐 **User Authentication**: Secure Register, Login, and Logout functionality.
- 👤 **Personalized Accounts**: Each user manages their own private todo list.
- 📝 **Todo Management (CRUD)**:
    - **Create**: Add new tasks to your list.
    - **Read**: View all pending and completed tasks.
    - **Update**: Edit task content or toggle completion status.
    - **Delete**: Permanently remove tasks.
- 🛡️ **Data Validation**: Robust input validation using **Joi** to ensure data integrity.

---

## 🛠️ Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/) (v5.2.1)
- **View Engine**: [EJS](https://ejs.co/) – Embedded JavaScript templates
- **Validation**: [Joi](https://joi.dev/) – Data validation
- **Environment**: [dotenv](https://www.npmjs.com/package/dotenv) – Environment variable management
- **Development**: [nodemon](https://nodemon.io/) – Hot-reloading for development

---

## ⚙️ Installation

1. **Clone the repository**:
   ```bash
   git clone [https://github.com/Avo444/Todo-FullStack-EJS.git](https://github.com/Avo444/Todo-FullStack-EJS.git)
   cd Todo-FullStack-EJS
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory and add your configurations:

```env
PORT=3000
# Example: SESSION_SECRET=your_secret_key_here
```

---

## 🚀 Run Project

### Development Mode
To start the server with `nodemon` (auto-restarts on changes):
```bash
npm run dev
```
Once started, the app will be available at `http://localhost:3000`.

---

## 📌 Project Structure Overview

```text
├── middleware/  # Auth guards and Joi validation schemas
├── routes/      # Express routes (Auth, Todos)
├── views/       # EJS templates (.ejs files)
├── .env         # Environment variables (ignored by git)
├── index.js     # Main entry point
└── package.json # Project dependencies and scripts
```

---

## 🛣️ API / Route Preview

| Route | Method | Description |
| :--- | :--- | :--- |
| `/auth/register` | GET/POST | User registration |
| `/auth/login` | GET/POST | User authentication |
| `/todos` | GET | View all user's todos |
| `/todos/add` | POST | Create a new todo |
| `/todos/delete/:id`| POST/DELETE | Remove a specific todo |

---

## ✨ Author

**Avo** – [GitHub Profile](https://github.com/Avo444)
