const fs = require('fs');

const getJsonPosts = () => {
    return JSON.parse(fs.readFileSync('./repositorios/data/posts.json'));
}

const getJsonUsers = () => {
    return JSON.parse(fs.readFileSync('./repositorios/data/users.json'));
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

const getUserByPost = (userId) => {
    return getJsonUsers().find(x => x.id === parseInt(userId));
}

const update = (postId,body) => {
    const posts = getJsonPosts();

    const index = posts.findIndex(el => el.id == postId);
    let updatePost = { ...posts[index], ...body };
    posts.splice(index,1,updatePost);
    fs.writeFileSync(`./repositorios/data/posts.json`, JSON.stringify(posts,null,1));

    return updatePost;
}

const deletePost = (postId) => {
    const posts = getJsonPosts();

    const postDeleted = posts.filter((el) => el.id != postId);
    fs.writeFileSync(`./repositorios/data/posts.json`, JSON.stringify(postDeleted,null,1));

    return postDeleted;
}

const getPostByComment = (postId) => {
    return getJsonPosts().find(x => x.id === parseInt(postId));
}

module.exports = {
    getPostByUser,
    getAll,
    save,
    update,
    deletePost,
    getPostById,
    getUserByPost,
    getPostByComment
}