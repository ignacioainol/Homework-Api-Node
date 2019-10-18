const fs = require('fs');

const getData = () => {
    return JSON.parse(fs.readFileSync('./repositorios/data/posts.json'));
}

const getPostByUser = (userId) => {
    let data = getData();
    return data.filter(x => x.userId === parseInt(userId)) || undefined;
}

module.exports = {
    getPostByUser
}