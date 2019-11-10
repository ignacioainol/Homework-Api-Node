const router = require('express').Router();
const repoPosts = require('./../repositorios/posts');
const repoComments = require('./../repositorios/comments');

//comments validation
const commentValidation = require('./../validations/comments');

router.get('/',(req,res) => {
    try {
        let comments = repoComments.getAll();

        if(req.query.fields != null){
            let fields = req.query.fields;
            
            if(fields == 'post'){
                comments = comments.map((comment) => {
                    let post = repoComments.getPostByComment(comment.postId);
                    return { ...comment, post };
                });
            }
        }

        res.send(comments);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get('/:id',(req,res) => {
    try {
        const commentId = req.params.id;
        let comment = repoComments.getCommentById(commentId);

        if(req.query.fields != null){
            const fields = req.query.fields;
            if(fields == "post"){
                const post = repoPosts.getPostByComment(comment.postId);
                comment = {...comment, post};
            }
        }

        res.send(comment);

    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.post('/', (req,res) => {
    try {
        const { body } = req;

        const commentErrors = commentValidation.saveAndUpdate(body);

        if(commentErrors){
            res.status(400).send(commentErrors);
            return;
        }

        const newComment = repoComments.save(body);
        res.json(newComment);

    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.put('/:id',(req,res) => {
    try {
        const { id } = req.params;
        const { body } = req;

        const commentErrors = commentValidation.saveAndUpdate(body);

        if(commentErrors){
            res.status(400).send(commentErrors);
            return;
        }

        const updateComment = repoComments.update(id,body);
        res.send(updateComment);

    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.delete('/:id', (req,res) => {    
    try {
        const { id } = req.params;
        const deleteComment = repoComments.deleteComment(id);
        res.send(deleteComment);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

module.exports = router;