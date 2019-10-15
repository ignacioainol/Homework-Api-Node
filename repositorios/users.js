const fs = require('fs');

const getJsonUser = () => {
    return JSON.parse(fs.readFileSync('./repositorios/resources/users.json'));
}

const getAll = () => {
    let getUsers = getJsonUser();
    return getUsers;
}

const save = (body) => {
    return getJsonUser().length;
}

module.exports = {
    getAll,
    save
}