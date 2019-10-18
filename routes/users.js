const router = require('express').Router();
const repoUsers = require('./../repositorios/users');
const repoPosts = require('./../repositorios/posts');
const repoAlbums = require('./../repositorios/albums');
const repoTodos = require('./../repositorios/todos');

router.get('/', (req, res) => {
    try {
        let users = repoUsers.getAll();
        if (req.query.fields != null) {
            let fields = req.query.fields.split(',');

            if(fields.includes('posts')) {
                users = users.map(user => {
                    let posts = repoPosts.getPostByUser(user.id);
                    return { ...user, posts };
                });
            }

            if(fields.includes('albums')) {
                users = users.map(user => {
                    let albums = repoAlbums.getAlbumsByUser(user.id);
                    return {...user, albums};
                });
            }

            if(fields.includes('todos')){
                users = users.map(user => {
                    let todos = repoTodos.getTodoByUser(user.id);
                    return {...user, todos};
                });
            }
        }

        res.send(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get('/:id', (req, res) => {
    try {
        let userId = req.params.id;
        let user = repoUsers.getUserById(userId);
        //let posts = repoPosts.getPostByUser(userId);

        if(req.query.fields != null){
            let fields = req.query.fields.split(',')
                if(fields.includes('posts')){
                    let posts = repoPosts.getPostByUser(userId);
                    user = {...user, posts};
                }

                if(fields.includes('albums')){
                    let albums = repoAlbums.getAlbumsByUser(userId);
                    user = {...user, albums};
                }

                if(fields.includes('todos')){
                    let todos = repoTodos.getTodoByUser(userId);
                    user = {...user, todos};
                }
        }

        res.send(user);
    } catch (error) {
        res.sendStatus(500);
    }
});

router.post('/', (req, res) => {
    try {
        const { body } = req;
        const newUser = repoUsers.save(body);
        res.json(newUser);
        // const newUser = {id, ...body};
        // console.log(newUser);
        // res.send(newUser);

    } catch (error) {
        res.sendStatus(500).send(error);
    }
})

module.exports = router;

