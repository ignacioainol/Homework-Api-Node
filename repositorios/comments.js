const fs = require('fs');

const getJsonComments = () => {
    return JSON.parse(fs.readFileSync('./repositorios/data/comments.json'));
}

const getJsonPosts = () => {
    return JSON.parse(fs.readFileSync('./repositorios/data/posts.json'));
}

const getAll = () => {
    return getJsonComments();
}

const getCommentById = (commentId) => {
    return getJsonComments().find(x => x.id === parseInt(commentId));
}

const getCommentsByPost = (postId) => {
    let data = getJsonComments();
    return data.filter(x => x.postId === parseInt(postId)) || undefined;
}

const save = (body) => {
    const id =  getJsonComments().length + 1;
    const newComment = {id, ...body};

    const comments = getJsonComments();
    comments.push(newComment);
    fs.writeFileSync('./repositorios/data/comments.json', JSON.stringify(comments,null,1));
    //return comments.reverse();
    return comments;
}

const update = (commentId, body) => {
    const comments = getJsonComments();

    const index = comments.findIndex(el => el.id == commentId);
    let updateComment = { ...comments[index], ...body };
    comments.splice(index,1,updateComment);

    fs.writeFileSync(`./repositorios/data/comments.json`, JSON.stringify(comments,null,1));

    return updateComment;
}

const getPostByComment = (postId) => {
    let data = getJsonPosts();
    return data.filter(x => x.id === parseInt(postId));
}

const deleteComment = (commentId) => {
    const comments = getJsonComments();
    const commentDeleted = comments.filter((el) => el.id != commentId);

    fs.writeFileSync(`./repositorios/data/comments.json`, JSON.stringify(commentDeleted,null,1));

    return commentDeleted;
}

module.exports = {
    getAll,
    getCommentsByPost,
    getPostByComment,
    getCommentById,
    save,
    update,
    deleteComment
}