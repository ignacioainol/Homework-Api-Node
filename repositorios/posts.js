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

const save = (body) => {
    const id =  getJsonPosts().length + 1;
    const newPost = {id, ...body};

    const posts = getJsonPosts();
    posts.push(newPost);
    fs.writeFileSync('./repositorios/data/posts.json', JSON.stringify(posts,null,1));

    return posts;
}

const getPostById = (postId) => {
    return  getJsonPosts().find(x => x.id === parseInt(postId));
}

module.exports = {
    getPostByUser,
    getAll,
    save,
    getPostById
}