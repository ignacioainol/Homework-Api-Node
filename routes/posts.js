const router = require('express').Router();
const repoUsers = require('./../repositorios/users');
const repoPosts = require('./../repositorios/posts');
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

            // if(fields.includes('posts')) {
            //     users = users.map(user => {
            //         let posts = repoPosts.getPostByUser(user.id);
            //         return { ...user, posts };
            //     });
            // }

        }
        res.send(posts);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;