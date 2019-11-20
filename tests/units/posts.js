const { assert } = require("chai");
const postValidator = require("../../validations/posts");

describe("Posts Validator", () => {
    it("El campo userId es requerido", () => {
        try {
            const obj = {
                "userId": '',
                "title": "shot in the daark (8)",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
              }

              const errors = postValidator.saveAndUpdate(obj);
              assert.isDefined(errors, "Es undefined");
              assert.isArray(errors.userId, "userId no es array");

        } catch (error) {
            return Promise.reject(error);
        }
    });

    it("El campo title es requerido", () => {
        try {
            const obj = {
                "userId": 1,
                "title": "           ",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
              }

              const errors = postValidator.saveAndUpdate(obj);
              assert.isDefined(errors, "Es undefined");
              assert.isArray(errors.title, "title no es array");
        } catch (error) {
            return Promise.reject(error);
        }
    });

    it("El campo title debe contener entre 100 a 500 caracteres", () => {
        try {
            const obj = {
                "userId": 1,
                "title": "lorem ipsum bla bla bla",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
              }

              const errors = postValidator.saveAndUpdate(obj);
              assert.isDefined(errors, "Es undefined");
              assert.isArray(errors.title, "title no es array");
        } catch (error) {
            return Promise.reject(error);
        }
    });

    it("El campo body es requerido", () => {
        try {
            const obj = {
                "userId": 1,
                "title": "Wise man said just walk this way To the dawn of the light The wind will blow into your face As the years pass you by Hear this voice from deep inside",
                "body": "               "
              }

              const errors = postValidator.saveAndUpdate(obj);
              assert.isDefined(errors, "Es undefined");
              assert.isArray(errors.body, "body no es array");
        } catch (error) {
            return Promise.reject(error);
        }
    });

    it("El campo body debe contener entre 100 a 500 caracteres", () => {
        try {
            const obj = {
                "userId": 1,
                "title": "Wise man said just walk this way To the dawn of the light The wind will blow into your face As the years pass you by Hear this voice from deep inside",
                "body": "It's the call of your heart Close your eyes and you will find"
              }

              const errors = postValidator.saveAndUpdate(obj);
              assert.isDefined(errors, "Es undefined");
              assert.isArray(errors.body, "body no es array");
        } catch (error) {
            return Promise.reject(error);
        }
    });

});