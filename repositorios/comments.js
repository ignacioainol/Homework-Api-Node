const fs = require('fs');

const getJsonCommens = () => {
    return JSON.parse(fs.readFileSync('./repositorios/data/comments.json'));
}

const getCommentsByPost = (postId) => {
    let data = getJsonCommens();
    return data.filter(x => x.id === parseInt(postId)) || undefined;
}

module.exports = {
    getJsonCommens,
    getCommentsByPost
}