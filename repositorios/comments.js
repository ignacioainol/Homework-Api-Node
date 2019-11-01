const fs = require('fs');

const getJsonCommens = () => {
    return JSON.parse(fs.readFileSync('./repositorios/data/comments.json'));
}

const getJsonPosts = () => {
    return JSON.parse(fs.readFileSync('./repositorios/data/posts.json'));
}

const getAll = () => {
    return getJsonCommens();
}

const getCommentsByPost = (postId) => {
    let data = getJsonCommens();
    return data.filter(x => x.postId === parseInt(postId)) || undefined;
}

const getPostByComment = (postId) => {
    let data = getJsonPosts();
    return data.filter(x => x.id === parseInt(postId));
}

module.exports = {
    getAll,
    getCommentsByPost,
    getPostByComment
}