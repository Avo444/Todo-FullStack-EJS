-----

````markdown
# 📝 Todo App (Fullstack EJS)

A simple and efficient fullstack Todo application built with **Node.js**, **Express**, and **EJS**. The app allows users to register, log in, and manage their personal todos with full CRUD functionality.

---

## 📦 Features

- 🔐 **User Authentication**: Secure Register, Login, and Logout functionality.
- 👤 **Personalized Accounts**: Each user manages their own private todo list.
- 📝 **Todo Management (CRUD)**:
    - **Create**: Add new tasks to your list.
    - **Read**: View all your pending and completed tasks.
    - **Update**: Edit existing tasks or mark them as completed.
    - **Delete**: Remove tasks from your list.
- 🛡️ **Data Validation**: Input validation using **Joi** to ensure data integrity.

---

## 🛠️ Tech Stack

- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/) (v5.2.1)
- **View Engine**: [EJS](https://ejs.co/) – Embedded JavaScript templates
- **Validation**: [Joi](https://joi.dev/) – Schema description language and data validator
- **Environment**: [dotenv](https://www.npmjs.com/package/dotenv) – For managing environment variables
- **Development**: [nodemon](https://nodemon.io/) – Automatically restarting the node application

---

## ⚙️ Installation

1. **Clone the repository**:
   ```bash
   git clone [https://github.com/Avo444/Todo-FullStack-EJS.git](https://github.com/Avo444/Todo-FullStack-EJS.git)
   cd Todo-FullStack-EJS
````

2.  **Install dependencies**:
    ```bash
    npm install
    ```

-----

## 🚀 Run Project

### Development mode

To run the server with `nodemon` (auto-restart on changes):

```bash
npm run dev
```

The server will start at `http://localhost:3000` (or the port specified in your `.env`).

-----

## 🔐 Environment Variables

Create a `.env` file in the root directory and add the following:

```env
PORT=3000
# Add other variables if needed (e.g., SESSION_SECRET, DB_URL)
```

-----

## 📌 Project Structure Overview

  - `index.js` - Entry point of the application.
  - `views/` - Contains EJS templates for the UI.
  - `routes/` - Express routes for Auth and Todos.
  - `middleware/` - Custom middleware (e.g., Auth guards, Joi validation).

-----

## ✨ Author

**Avo** [GitHub Profile](https://github.com/Avo444)

-----
