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

module.exports = {
    getTodoByUser,
    getAll
}