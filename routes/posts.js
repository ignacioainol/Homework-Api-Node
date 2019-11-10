const router = require('express').Router();
const repoUsers = require('./../repositorios/users');
const repoPosts = require('./../repositorios/posts');
const repoComments = require('./../repositorios/comments');

//validation
const postValidation = require('./../validations/posts.js');

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

        const postErrors = postValidation.saveAndUpdate(body);

        if(postErrors){
            res.status(400).send(postErrors);
            return;
        }

        const newPost = repoPosts.save(body);
        res.json(newPost);

    } catch (error) {
        res.status(500).send(error.message);
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

router.get('/:postId/comments', (req,res) => {
    try {
        let post = repoPosts.getPostById(req.params.postId);
        let comments = repoComments.getCommentsByPost(req.params.postId);
        post = {...post, comments } 
        res.send(post);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.put('/:id', (req,res) => {
    try {
        const { id } = req.params;
        const { body } = req;

        const postErrors = postValidation.saveAndUpdate(body);

        if(postErrors){
            res.status(400).send(postErrors);
            return;
        }

        const updatePost = repoPosts.update(id,body);
        res.send(updatePost);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.delete('/:id',(req,res) => {
    try {
        const { id } = req.params;
        const deletePost = repoPosts.deletePost(id);
        res.send(deletePost);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;