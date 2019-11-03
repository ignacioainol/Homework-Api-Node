const router = require('express').Router();
const repoAlbums = require('./../repositorios/albums');
const repoPhotos = require('./../repositorios/photos');

router.get('/',(req,res) => {
    try {
        let albums = repoAlbums.getAll();

        if(req.query.fields != null){
            const fields = req.query.fields;

            if(fields == "photos"){
                albums = albums.map((album) => {
                    let photos = repoPhotos.getPhotoByAlbumId(album.id);
                    return {...albums, photos};
                });
            }
        }

        res.send(albums);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get('/:id', (req, res) => {
    try {
        const id = req.params.id;
        let album = repoAlbums.getAlbumById(id);

        res.send(album)
    } catch (error) {
        res.status(500).send(error.message);
    }
})

router.post('/', (req,res) => {
    try {
        const { body } = req;
        const newAlbum = repoAlbums.save(body);

        res.send(newAlbum);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.put('/:id',(req,res) => {
    try {
        const { id } = req.params;
        const { body } = req;

        const updateAlbum = repoAlbums.update(id,body);

        res.send(updateAlbum);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.delete('/:id', (req,res) => {
    try {
        const { id } = req.params;
        const deleteAlbum = repoAlbums.deleteAlbum(id);
        res.send(deleteAlbum);
    } catch (error) {
        res.status(500).send(error.message);        
    }
});


module.exports = router;
