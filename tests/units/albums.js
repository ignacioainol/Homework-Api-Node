const { assert } = require("chai");
const albumValidator = require("../../validations/albums");

describe("Albums Validator", () => {
    it("El campo userId es requerido", () => {
        try {
            const obj = {
                "userId": "",
                "title": "sunt qui excepturi placeat culpa"
              }

              const errors = albumValidator.saveAndUpdate(obj);
              assert.isDefined(errors, "Es undefined");
              assert.isArray(errors.userId, "userId no es array");
        } catch (error) {
            return Promise.reject(error);
        }
    });


    it("El campo title es requerido", () => {
        try {
            const obj = {
                "userId": 12,
                "title": "  "
              }

              const errors = albumValidator.saveAndUpdate(obj);
              assert.isDefined(errors.title, "Es undefined");
              assert.isArray(errors.title, "title no es array");
        } catch (error) {
            return Promise.reject(error);
        }
    });

    it("El campo title debe contener entre 10 y 50 caracteres", () => {
        try {
            const obj = {
                "userId": 12,
                "title": "asdfghb"
              }

              const errors = albumValidator.saveAndUpdate(obj);
              assert.isDefined(errors.title, "Es undefined");
              assert.isArray(errors.title, "title no es array");
        } catch (error) {
            return Promise.reject(error);
        }
    });
})