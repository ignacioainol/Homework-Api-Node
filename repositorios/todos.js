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

const save = (body) => {
    const todos = getData();
    const id = getData().length + 1;

    const newTodo = {id, ...body};
    todos.push(newTodo);
    fs.writeFileSync('./repositorios/data/todos.json',JSON.stringify(todos));

    return todos;

}

module.exports = {
    getTodoByUser,
    getAll,
    save
}