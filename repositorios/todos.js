const fs = require('fs');

const getData = () => {
    return JSON.parse(fs.readFileSync('./repositorios/data/todos.json'));
}

const getTodoByUser = (userId) => {
    let data = getData();
    return data.filter(x => x.userId === userId) || undefined;
}

module.exports = {
    getTodoByUser
}