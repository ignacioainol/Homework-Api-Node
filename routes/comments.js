const router = require('express').Router();
const repoPosts = require('./../repositorios/posts');
const repoComments = require('./../repositorios/comments');

router.get('/',(req,res) => {
    try {
        let comments = repoComments.getAll();

        if(req.query.fields != null){
            let fields = req.query.fields;
            
            if(fields == 'post'){
                comments = comments.map((comment) => {
                    let post = repoComments.getPostByComment(comment.postId);
                    return { ...comment, post};
                });
            }
        }

        res.send(comments);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;