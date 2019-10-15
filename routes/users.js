const router = require('express').Router();
const repoUsers = require('./../repositorios/users');
const repoPosts = require('./../repositorios/posts');
const repoAlbums = require('./../repositorios/albums');

router.get('/', (req, res) => {
    let users = repoUsers.getAll();
    try {
        if (req.query.fields != null) {
            let fields = req.query.fields.split(',');

            if (fields.includes('posts')) {
                users = users.map(user => {
                    let posts = repoPosts.getPostByUser(user.id);
                    return { ...user, posts };
                })
            }

            if (fields.includes('albums')) {
                users = users.map(user => {
                    let albums = repoAlbums.getAlbumsByUser(user.id);
                    return {...user, albums};
                })
            }
        }

        res.send(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get('/:id', (req, res) => {
    const response = repoPosts.getPostByUser(1);

    res.json(response);
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

