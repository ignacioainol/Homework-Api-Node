const router = require('express').Router();
const repoUsers = require('./../repositorios/users');
const repoPosts = require('./../repositorios/posts');
const repoAlbums = require('./../repositorios/albums');
const repoTodos = require('./../repositorios/todos');

router.get('/',(req,res) => {
    try {
        
        res.send(repoPosts);
    } catch (error) {
        res.status(500).send(error);
    }
});