const fs = require('fs');

const getJsonUser = () => {
    return JSON.parse(fs.readFileSync('./repositorios/resources/users.json'));
}

const getAll = () => {
    let getUsers = getJsonUser();
}

module.exports = {
    getAll
}