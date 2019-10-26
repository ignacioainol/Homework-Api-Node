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
        
        res.send(post);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;