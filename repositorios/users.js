const fs = require('fs');

const getJsonUser = () => {
    return JSON.parse(fs.readFileSync('./repositorios/data/users.json'));
}

const getJsonPosts = () => {
    return JSON.parse(fs.readFileSync('./repositorios/data/posts.json'));
}

const getJsonAlbums = () => {
    return JSON.parse(fs.readFileSync('./repositorios/data/albums.json'));
}

const getJsonTodos = () => {
    return JSON.parse(fs.readFileSync('./repositorios/data/todos.json'));
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
    fs.writeFileSync('./repositorios/data/users.json', JSON.stringify(users,null,1));

    return users;
}

const update = (userId,body) => {
    const users = getJsonUser();

    const index = users.findIndex(el => el.id == userId);
    let updateUser = { ...users[index], ...body };
    users.splice(index,1,updateUser);
    fs.writeFileSync(`./repositorios/data/users.json`, JSON.stringify(users,null,1));

    return updateUser;
}

const deleteUser = (userId) => {
    const users = getJsonUser();

    const userDeleted = users.filter((el) => el.id != userId);
    fs.writeFileSync(`./repositorios/data/users.json`, JSON.stringify(userDeleted,null,1));

    return userDeleted;
}

const findPostsByUserId = (userId) => {
    const postsUser = getJsonPosts().filter((el) => el.userId == userId);
    return postsUser;
}

const findAlbumsByUserId = (userId) => {
    const albumsUser = getJsonAlbums().filter((el) => el.userId == userId);
    return albumsUser;
}

const findTodosByUserId = (userId) => {
    const todosUser = getJsonTodos().filter((el) => el.userId == userId);
    return todosUser;
}

module.exports = {
    getAll,
    getUserById,
    save,
    update,
    deleteUser,
    findPostsByUserId,
    findAlbumsByUserId,
    findTodosByUserId
}