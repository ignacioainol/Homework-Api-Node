const fs = require('fs');

const getData = () => {
    return JSON.parse(fs.readFileSync('./repositorios/data/todos.json'));
}

const getAll = () => {
    return getData();
}

const getTodoByUser = (userId) => {
    let data = getData();
    return data.filter(x => x.userId === parseInt(userId)) || undefined;
}

const getTodoById = (todoId) => {
    let todo = getData().find(x => x.id === parseInt(todoId));
    return todo;
}

const save = (body) => {
    const todos = getData();
    const id = getData().length + 1;

    const newTodo = {id, ...body};
    todos.push(newTodo);
    fs.writeFileSync('./repositorios/data/todos.json',JSON.stringify(todos));

    return todos;

}

const update = (todoId, body) => {
    const todos = getData();

    const index = todos.findIndex(x => x.id == todoId);
    let updateTodo = { ...todos[index], ...body };
    todos.splice(index,1,updateTodo);
    fs.writeFileSync(`./repositorios/data/todos.json`, JSON.stringify(todos,null,1));

    return updateTodo;
}

const deleteTodo = (todoId) => {
    const todos = getData();

    const todoDeleted = todos.filter((x) => x.id != todoId);
    fs.writeFileSync(`./repositorios/data/todos.json`, JSON.stringify(todoDeleted,null,1));

    return todoDeleted;
}

module.exports = {
    getTodoByUser,
    getAll,
    save,
    update,
    deleteTodo,
    getTodoById
}