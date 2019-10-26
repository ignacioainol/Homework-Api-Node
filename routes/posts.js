const router = require('express').Router();
const repoUsers = require('./../repositorios/users');
const repoPosts = require('./../repositorios/posts');
const repoComments = require('./../repositorios/comments');
const repoAlbums = require('./../repositorios/albums');
const repoTodos = require('./../repositorios/todos');

router.get('/',(req,res) => {
    try {
        let posts = repoPosts.getAll();
        
        if(req.query.fields != null){
            let fields = req.query.fields;

            if(fields.includes('user')){
                posts = posts.map(post => {
                    let user = repoUsers.getUserByPost(post.userId); 
                    return { ...post, user };
                });
            }

            if(fields.includes('comments')){
                posts = posts.map(post => {
                    let comments = repoComments.getCommentsByPost(post.id);
                    return { ...post, comments };
                });
            }

        }
        res.send(posts);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.post('/', (req,res) => {
    try {
        const { body } = req;
        const newPost = repoPosts.save(body);
        res.json(newPost);

    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/:postId', (req,res) => {
    try {
        let post = repoPosts.getPostById(req.params.postId);

        if(req.query.fields != null){
            let fields = req.query.fields.split(',');
            if(fields.includes('user')){
                let user = repoPosts.getUserByPost(post.userId);
                post = {...post, user};
            }

            if(fields.includes('comments')){
                let comments = repoComments.getCommentsByPost(post.id);
                post = {...post, comments};
            }
        }
        res.send(post);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;