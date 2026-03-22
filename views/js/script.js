const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");
const error = document.getElementById("error");
signupForm?.addEventListener("submit", async (e) => {
    try {
        e.preventDefault();
        const form = new FormData(e.target);
        const body = Object.fromEntries(form.entries());

        const response = await fetch("http://localhost:3000/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error);
        }

        window.location.href = "/login";
    } catch (err) {
        error.textContent = err;
    }
});

loginForm?.addEventListener("submit", async (e) => {
    try {
        e.preventDefault();

        const form = new FormData(e.target);
        const body = Object.fromEntries(form.entries());

        const response = await fetch("http://localhost:3000/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error);
        }

        window.location.href = "/profile";
    } catch (err) {
        error.textContent = err;
    }
});

const todoContent = document.getElementById("todoContent");

const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoBtn = document.getElementById("todoBtn");

let editID = null;

todoForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
        const title = e.target[0].value;
        if (!title) {
            alert("Please write todo name!");
            return;
        }
        const response = await fetch(
            `http://localhost:3000/api/todo${editID ? `/${editID}` : ""}`,
            {
                method: editID ? "PATCH" : "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title }),
            },
        );
        if (!response.ok) {
            throw new Error("There are was a problem");
        }

        editID = null;
        todoBtn.textContent = "Add";
        render();

        e.target.reset();
    } catch (err) {
        alert(err.message);
    }
});

const editTodoStatus = async (id, status) => {
    try {
        const response = await fetch(`http://localhost:3000/api/todo/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ isDone: status }),
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        render();
    } catch (err) {
        alert(err.message);
    }
};

const editItem = (id, title) => {
    editID = id;
    todoInput.value = title;
    todoBtn.textContent = "Update";
};

const deleteItem = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/api/todo/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error(response.statusText);
        }

        render();
    } catch (err) {
        alert(err);
    }
};

const createItem = (data) => {
    const item = document.createElement("div");
    const checkbox = document.createElement("input");
    const title = document.createElement("a");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
    const buttons = document.createElement("div");

    item.classList.add("todo__item", "flex-between");
    title.classList.add("text");
    editBtn.classList.add("btn");
    deleteBtn.classList.add("btn", "btn-primary");
    buttons.classList.add("buttons");
    checkbox.type = "checkbox";
    editBtn.textContent = "Edit";
    deleteBtn.textContent = "Delete";

    title.textContent = data.title;
    checkbox.checked = data.isDone;
    title.href = `/profile/${data.id}`;
    title.style.textDecoration = data.isDone ? "line-through" : "none";

    editBtn.onclick = () => editItem(data.id, data.title);
    deleteBtn.onclick = () => deleteItem(data.id);
    checkbox.onchange = (e) => editTodoStatus(data.id, e.target.checked);
    buttons.append(editBtn, deleteBtn);
    item.append(checkbox, title, buttons);

    return item;
};

const render = async () => {
    try {
        const response = await fetch(`http://localhost:3000/api/todo`);
        if (!response.ok) {
            throw new Error("There are was a problem");
        }

        const data = await response.json();
        if (!data.length) {
            todoContent.textContent = "Empty!";
            return;
        }
        todoContent.textContent = "";
        data.forEach((item) => {
            todoContent.append(createItem(item));
        });
    } catch (err) {
        todoContent.textContent = err;
    }
};
