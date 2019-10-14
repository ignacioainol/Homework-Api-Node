const router = require('express').Router();
const posts = require('./../repositorios/resources/posts.json');
const albums = require('./../repositorios/resources/albums.json');
const todos = require('./../repositorios/resources/todos.json');
const users = require('./../repositorios/resources/users.json');

router.get('/', (req, res) => {

    if (req.query.fields != null) {
        // const fields = req.query.fields.split(',');

        // const allContent = {};
        // //res.send(fields);
        // if (fields.includes('posts')) {
        //     allContent.posts = posts;
        // }

        // if (fields.includes('albums')) {
        //     allContent.albums = albums;
        // }

        // if (fields.includes('todos')) {
        //     allContent.todos = todos;
        // }

        // res.send(allContent);
        res.send("va con query strings");
    }else{
        res.send(users);
    }
})

module.exports = router;

