const fs = require('fs');

const getData = () => {
    return JSON.parse(fs.readFileSync('./repositorios/data/photos.json'));
}

const getAll = () => {
    return getData();
}

const getPhotoByAlbumId = (albumId) => {
    return getData().filter(x => x.albumId === parseInt(albumId));
}

const save = (body) => {
    const id = getData().length + 1;
    const newPhoto = { id, ...body };

    const photos = getData();
    photos.push(newPhoto);
    fs.writeFileSync('./repositorios/data/photos.json', JSON.stringify(photos,null,1));

    return photos;

}

module.exports = {
    getAll,
    getPhotoByAlbumId,
    save
}