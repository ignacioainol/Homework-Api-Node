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

const update = (photoId,body) => {
    const photos = getData();
    const index = photos.findIndex(x => x.id == photoId);

    let updatePhoto = { ...photos[index], ...body };
    photos.splice(index,1,updatePhoto);
    fs.writeFileSync(`./repositorios/data/photos.json`, JSON.stringify(photos,null,1));

    return updatePhoto;
}

module.exports = {
    getAll,
    getPhotoByAlbumId,
    save,
    update
}