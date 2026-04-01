
---

# 📝 Todo App (Fullstack EJS)

A complete fullstack Todo application built with **Node.js**, **Express**, and **EJS**, following the **MVC (Model–View–Controller)** architecture. The app includes secure authentication, user profiles, and full CRUD task management using a local JSON database.

---

## 📦 Features

### 🔐 Security & Authentication

* **User Authentication**: Secure Signup and Login system.
* **Brute-force Protection**: After 3 failed login attempts, the user is blocked for **15 minutes**.
* **Password Security**: Passwords are hashed using `bcryptjs`.
* **Password Update**: Requires verification of the old password.
* **Session Management**: Sessions are stored in a local `session.json` file.

---

### 👤 User Profile & Settings

* **Personal Dashboard**: Users can only access their own tasks.
* **Profile Updates**: Modify name, email, and password.
* **Secure Password Change**: Requires old password confirmation.

---

### 📝 Task Management (CRUD)

* **Create** → Add new tasks (with automatic `createdAt`)
* **Read** → View all tasks or a specific task
* **Update** → Edit task (`isDone`, `updatedAt`)
* **Delete** → Remove tasks permanently

---

## 🏗️ Architecture (MVC)

The application is structured using the **MVC pattern**:

* **Model (Services)** → Handles business logic and data (`AuthService`, `UserService`, `TodoService`)
* **View (EJS)** → UI layer (`views/`)
* **Controller** → Handles request/response flow
* **Middleware** → Validation and preprocessing (`Joi` schemas)

---

## 🛠️ Tech Stack

* **Runtime**: Node.js
* **Framework**: Express.js (v5)
* **Template Engine**: EJS
* **Database**: JSON (file-based)
* **Validation**: Joi
* **Password Hashing**: bcryptjs
* **Environment Variables**: dotenv

---

## 📁 Project Structure

```text
├── db/              # JSON databases (users, todos, session)
├── controllers/     # Controllers (MVC layer)
├── services/        # Business logic (Model layer)
├── routes/          # Express routes
├── middlewares/     # Validation & request processing
├── helpers/         # Utility functions
├── views/           # EJS templates (View layer)
├── .env             # Environment variables
├── index.js         # Entry point
└── package.json
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/Avo444/Todo-FullStack-EJS.git
cd Todo-FullStack-EJS
```

2. **Install dependencies**

```bash
npm install
```

3. **Create `.env` file**

```env
PORT=3000
```

---

## 🚀 Running the Project

```bash
npm run dev
```

Open in your browser:
👉 [http://localhost:3000](http://localhost:3000)

---

## 🛣️ Routes

### 📄 Page Routes (UI)

| Route          | Method | Description    |
| -------------- | ------ | -------------- |
| `/`            | GET    | Home page      |
| `/login`       | GET    | Login page     |
| `/signup`      | GET    | Signup page    |
| `/profile`     | GET    | User dashboard |
| `/profile/:id` | GET    | Task details   |
| `/settings`    | GET    | Settings page  |
| `/logout`      | GET    | Logout         |

---

### ⚙️ API Routes

| Route           | Method         | Description           |
| --------------- | -------------- | --------------------- |
| `/auth/signup`  | POST           | Register user         |
| `/auth/login`   | POST           | Login with protection |
| `/api/profile`  | PATCH          | Update profile        |
| `/api/todo`     | GET / POST     | Get / Create todos    |
| `/api/todo/:id` | PATCH / DELETE | Update / Delete todo  |

---

## 🧠 Key Improvements (MVC)

* 🔹 Clear separation of concerns (Controller / Service layers)
* 🔹 Middleware-based validation using Joi
* 🔹 Reusable helper utilities
* 🔹 Scalable and maintainable structure
* 🔹 Clean and modular architecture

---

## 🔒 Security Notes

* Password hashing with `bcryptjs`
* Login attempt limiting (3 attempts → temporary block)
* Session-based authorization
* Request validation using Joi

---

## ✨ Author

**Avo** – [https://github.com/Avo444](https://github.com/Avo444)

---
