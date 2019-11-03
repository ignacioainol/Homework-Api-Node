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

const deletePhoto = (photoId) => {
    const photos = getData();

    const photoDeleted = photos.filter((x) => x.id != photoId);
    fs.writeFileSync(`./repositorios/data/photos.json`, JSON.stringify(photoDeleted,null,1));

    return photoDeleted;
}

const getPhotoById = (photoId) => {
    return getData().find(x => x.id === parseInt(photoId));
}

module.exports = {
    getAll,
    getPhotoByAlbumId,
    save,
    update,
    deletePhoto,
    getPhotoById
}