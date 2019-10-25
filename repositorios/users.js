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
    fs.writeFileSync('./repositorios/data/users.json', JSON.stringify(users,null,2));

    return users;
}

const update = (userId,body) => {
    const users = getJsonUser();

    const index = users.findIndex(el => el.id == userId);
    let updateUser = { ...users[index], ...body };
    users.splice(index,1,updateUser);
    fs.writeFileSync(`./repositorios/data/users.json`, JSON.stringify(users,null,2));

    return updateUser;
}

module.exports = {
    getAll,
    getUserById,
    save,
    update
}