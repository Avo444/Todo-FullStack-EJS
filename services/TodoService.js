const { formatDate } = require("../helpers");
const RootService = require("./RootService");

class TodoService extends RootService {
    async getTodos() {
        const todos = await RootService.database("todos");
        return todos;
    }

    async getTodoByID(id) {
        const session = await this.session();
        if (!session.id) {
            throw new Error("You aren't logged in!");
        }

        const todos = await RootService.database("todos");
        const todo = todos.find((todo) => todo.id === id);

        if (!todo) {
            throw new Error("Todo is not found!");
        }

        if (todo.userID !== session.id) {
            throw new Error("This is not your todo");
        }
        return todo;
    }

    async getUserTodos(id) {
        const todos = await RootService.database("todos");
        const filtered = todos.filter((todo) => todo.userID === id);

        return filtered;
    }

    async addTodo(body) {
        const session = await this.session();
        if (!session.id) {
            throw new Error("You aren't logged in!");
        }

        const todos = await RootService.database("todos");
        const newTodo = {
            ...body,
            isDone: false,
            userID: session.id,
            createdAt: formatDate(),
            id: crypto.randomUUID(),
        };
        todos.push(newTodo);

        await RootService.save("todos", todos);
        return newTodo;
    }

    async changeTodoData(id, body) {
        const session = await this.session();
        if (!session.id) {
            throw new Error("You aren't logged in");
        }
        const todos = await RootService.database("todos");
        const todo = todos.findIndex((todo) => todo.id === id);

        if (todo === -1) {
            throw new Error("Todo is not found!");
        }
        if (todos[todo].userID !== session.id) {
            throw new Error("This isn't your todo");
        }

        todos[todo] = {
            ...todos[todo],
            ...body,
            updatedAt: formatDate(),
        };

        await RootService.save("todos", todos);
        return todos[todo];
    }

    async deleteTodo(id) {
        const session = await this.session();
        if (!session.id) {
            throw new Error("You can't logged in!");
        }
        const todos = await RootService.database("todos");
        const todo = todos.findIndex((todo) => todo.id === id);

        if (todo === -1) {
            throw new Error("Todo is not found");
        }

        if (todos[todo].userID !== session.id) {
            throw new Error("This isn't your todo!");
        }

        todos.splice(todo, 1);

        await RootService.save("todos", todos);
        const message = { message: "Success!" };
        return message;
    }
}

module.exports = TodoService;
