const router = require('express').Router();
const repoPhotos = require('./../repositorios/photos');
const repoAlbums = require('./../repositorios/albums');

router.get('/', (req,res) => {
    try {
        let photos = repoPhotos.getAll();

        if(req.query.fields != null){
            const fields = req.query.fields;

            if(fields == "album"){
                photos = photos.map(photo => {
                    let album = repoAlbums.getAlbumByPhoto(photo.albumId);
                    return {...photo, album};
                });
            }
        }

        res.send(photos);

    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get('/:id', (req,res) => {
    try {
        const id = req.params.id;
        let photo = repoPhotos.getPhotoById(id);

        if(req.query.fields != null){
            let fields = req.query.fields;

            if(fields == "album"){
                let album = repoAlbums.getAlbumByPhoto(photo.albumId);
                photo = {...photo, album};
            }
        }

        res.send(photo);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.post('/', (req,res) => {
    try {
        const { body } = req;
        const newPhoto = repoPhotos.save(body);

        res.send(newPhoto);
    } catch (error) {
        res.status(500).send(error.message);        
    }
});

router.put('/:id', (req,res) => {
    try {
        const { id } = req.params;
        const { body } = req;

        const updatedPhoto = repoPhotos.update(id, body);
        res.send(updatedPhoto);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.delete('/:id', (req,res) => {
    try {
        const { id } = req.params;
        const photoDeleted = repoPhotos.deletePhoto(id);

        res.send(photoDeleted);
    } catch (error) {
        res.status(500).send(error.message);        
    }
});

module.exports = router;