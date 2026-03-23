# 📝 Todo App (Fullstack EJS)

A simple and efficient fullstack Todo application built with **Node.js**, **Express**, and **EJS**. This app allows users to register, log in, and manage their personal tasks with full CRUD functionality.

---

## 📦 Features

- 🔐 **User Authentication**  
  Secure registration, login, and logout functionality.

- 👤 **Personalized Accounts**  
  Each user has access to their own private todo list.

- 📝 **Todo Management (CRUD)**  
  - **Create**: Add new tasks  
  - **Read**: View all tasks (pending & completed)  
  - **Update**: Edit task content or toggle completion status  
  - **Delete**: Permanently remove tasks  

- 🛡️ **Data Validation**  
  Input validation using **Joi** to ensure data integrity.

---

## 🛠️ Tech Stack

- **Runtime**: Node.js  
- **Framework**: Express.js (v5.2.1)  
- **View Engine**: EJS (Embedded JavaScript Templates)  
- **Validation**: Joi  
- **Environment Variables**: dotenv  
- **Development Tool**: nodemon  

---

## ⚙️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Avo444/Todo-FullStack-EJS.git
   cd Todo-FullStack-EJS
````

2. **Install dependencies**

   ```bash
   npm install
   ```

---

## 🔐 Environment Variables

Create a `.env` file in the root directory and add your configuration:

```env
PORT=3000
# SESSION_SECRET=your_secret_key_here
```

---

## 🚀 Running the Project

### Development Mode

Start the server with nodemon (auto-restarts on file changes):

```bash
npm run dev
```

Once started, open your browser at:

```
http://localhost:3000
```

---

## 📁 Project Structure

```text
├── middleware/   # Authentication middleware & Joi validation schemas
├── routes/       # Express routes (Auth, Todos)
├── views/        # EJS templates
├── .env          # Environment variables (ignored by Git)
├── index.js      # Application entry point
└── package.json  # Dependencies and scripts
```

---

## 🛣️ Routes Overview

| Route               | Method        | Description        |
| ------------------- | ------------- | ------------------ |
| `/auth/register`    | GET / POST    | User registration  |
| `/auth/login`       | GET / POST    | User login         |
| `/todos`            | GET           | Get all user todos |
| `/todos/add`        | POST          | Create a new todo  |
| `/todos/delete/:id` | POST / DELETE | Delete a todo      |

---

## ✨ Author

**Avo**
GitHub: [https://github.com/Avo444](https://github.com/Avo444)

```

---

Եթե ուզես, կարող եմ նաև՝  
- README-ին badge-ներ ավելացնել (build, license, etc.)  
- demo GIF կամ screenshots հատված ավելացնել  
- կամ ավելի “GitHub-ready” պրոֆեսիոնալ դարձնել 🚀
```
