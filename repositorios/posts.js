const fs = require('fs');

const getJsonPosts = () => {
    return JSON.parse(fs.readFileSync('./repositorios/data/posts.json'));
}

const getPostByUser = (userId) => {
    let data = getJsonPosts();
    return data.filter(x => x.userId === parseInt(userId)) || undefined;
}

const getAll = () => {
    return getJsonPosts();
}

module.exports = {
    getPostByUser,
    getAll
}