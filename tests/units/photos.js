const { assert } = require("chai");
const photoValidator = require("../../validations/photos");

describe("Photos Validator", () => {
    it("El campo albumId es requerido", () => {
        try {
            const obj = {
                "albumId": '',
                "title": "accusamus beatae ad facilis cum similique qui sunt",
                "url": "https://via.placeholder.com/600/92c952",
                "thumbnailUrl": "https://via.placeholder.com/150/92c952"
            }

            const errors = photoValidator.saveAndUpdate(obj);
            assert.isDefined(errors, "Es undefined");
            assert.isArray(errors.albumId, "albumId no es array");
        } catch (error) {
            return Promise.reject(error);
        }
    })

    it("El campo title es requerido", () => {
        try {
            const obj = {
                "albumId": 12,
                "title": "aasasd",
                "url": "https://via.placeholder.com/600/92c952",
                "thumbnailUrl": "https://via.placeholder.com/150/92c952"
            }

            const errors = photoValidator.saveAndUpdate(obj);
            assert.isDefined(errors, "Es undefined");
            assert.isArray(errors.title, "title no es array");
        } catch (error) {
            return Promise.reject(error);
        }
    })

    it("El campo title debe contener entre 10 y 50 caracteres", () => {
        try {
            const obj = {
                "albumId": 12,
                "title": "silencio",
                "url": "https://via.placeholder.com/600/92c952",
                "thumbnailUrl": "https://via.placeholder.com/150/92c952"
            }

            const errors = photoValidator.saveAndUpdate(obj);
            assert.isDefined(errors, "Es undefined");
            assert.isArray(errors.title, "title no es array");
        } catch (error) {
            return Promise.reject(error);
        }
    })

    it("El campo url es requerido", () => {
        try {
            const obj = {
                "albumId": 12,
                "title": "heroesdelsilencio",
                "url": "ssasdssd",
                "thumbnailUrl": "https://via.placeholder.com/150/92c952"
            }

            const errors = photoValidator.saveAndUpdate(obj);
            assert.isDefined(errors.url, "Es undefined");
            assert.isArray(errors.url, "url no es array");
        } catch (error) {
            return Promise.reject(error);
        }
    })

    it("El campo url debe contener entre 10 y 50 caracteres", () => {
        try {
            const obj = {
                "albumId": 12,
                "title": "heroesdelsilencio",
                "url": "aaaaaaa",
                "thumbnailUrl": "https://via.placeholder.com/150/92c952"
            }

            const errors = photoValidator.saveAndUpdate(obj);
            assert.isDefined(errors, "Es undefined");
            assert.isArray(errors.url, "url no es array");
        } catch (error) {
            return Promise.reject(error);
        }
    })

    it("El campo url debe comenzar con https://", () => {
        try {
            const obj = {
                "albumId": 12,
                "title": "heroesdelsilencio",
                "url": "www.google.cl",
                "thumbnailUrl": "https://via.placeholder.com/150/92c952"
            }

            const errors = photoValidator.saveAndUpdate(obj);
            assert.isDefined(errors, "Es undefined");
            assert.isArray(errors.url, "url no es array");
        } catch (error) {
            return Promise.reject(error);
        }
    })

    it("El campo thumbnail es requerido", () => {
        try {
            const obj = {
                "albumId": 12,
                "title": "heroesdelsilencio",
                "url": "https://aaassd.cl",
                "thumbnailUrl": " "
            }

            const errors = photoValidator.saveAndUpdate(obj);
            assert.isDefined(errors.thumbnailUrl, "Es undefined");
            assert.isArray(errors.thumbnailUrl, "thumbnail no es array");
        } catch (error) {
            return Promise.reject(error);
        }
    })

    it("El campo thumbnailUrl debe contener entre 10 y 50 caracteres", () => {
        try {
            const obj = {
                "albumId": 12,
                "title": "heroesdelsilencio",
                "url": "https://aaassd.cl",
                "thumbnailUrl": "aaa"
            }

            const errors = photoValidator.saveAndUpdate(obj);
            assert.isDefined(errors.thumbnailUrl, "Es undefined");
            assert.isArray(errors.thumbnailUrl, "thumbnail no es array");
        } catch (error) {
            return Promise.reject(error);
        }
    })

    it("El campo thumbnailUrl debe comenzar con https://", () => {
        try {
            const obj = {
                "albumId": 12,
                "title": "heroesdelsilencio",
                "url": "https://aaassd.cl",
                "thumbnailUrl": "http://www.algo.cl"
            }

            const errors = photoValidator.saveAndUpdate(obj);
            assert.isDefined(errors.thumbnailUrl, "Es undefined");
            assert.isArray(errors.thumbnailUrl, "thumbnail no es array");
        } catch (error) {
            return Promise.reject(error);
        }
    })

});