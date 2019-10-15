const fs = require('fs');

const getJsonUser = () => {
    return JSON.parse(fs.readFileSync('./repositorios/data/users.json'));
}

const getAll = () => {
    let getUsers = getJsonUser();
    return getUsers;
}

const getUserById = (userId) => {
    let user = getJsonUser().find(x => x.id === parseInt(userId));
    return user;
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
    getUserById,
    save
}