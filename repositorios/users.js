const fs = require('fs');

const getJsonUser = () => {
    return JSON.parse(fs.readFileSync('./repositorios/data/users.json'));
}

const getAll = () => {
    let getUsers = getJsonUser();
    return getUsers;
}

const save = (body) => {
    const id =  getJsonUser().length + 1;
    const newUser = {id, ...body};

    const users = getJsonUser();
    users.push(newUser);

    return users;
}

module.exports = {
    getAll,
    save
}