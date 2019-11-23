const { assert } = require("chai");
const todoValidator = require("../../validations/todos");

describe("Todos Validator", () => {
    it("El campo userId es requerido", () => {
        try {
            const obj = {
                "userId": "",
                "title": "delectus aut autem",
                "completed": false
              }

              const errors = todoValidator.saveAndUpdate(obj);
               assert.isDefined(errors.userId, "Es undefined");
               assert.isArray(errors.userId, "userId no es array");
        } catch (error) {
            return Promise.reject(error);
        }
    })

    it("El campo title es requerido", () => {
        try {
            const obj = {
                "userId": 2,
                "title": " ",
                "completed": true
            }

            const errors = todoValidator.saveAndUpdate(obj);
            assert.isDefined(errors.title, "Es undefined");
            assert.isArray(errors.title, "title no es array");
            //assert.isEmpty(errors.title);
        } catch (error) {
            return Promise.reject(error);
        }
    })

    it("El campo completed es requerido", () => {
        try {
            const obj = {
                "userId": 2,
                "title": "holamundosssa",
                "completed": ''
            }

            const errors = todoValidator.saveAndUpdate(obj);
            assert.isDefined(errors, "Es undefined");
            assert.isArray(errors.completed, "completed no es array");
        } catch (error) {
            return Promise.reject(error);
        }
    })

    it("El campo completed debe ser booleano", () => {
        try {
            const obj = {
                "userId": 2,
                "title": "holamundosssa",
                "completed": ""
            }

            const errors = todoValidator.saveAndUpdate(obj);
            assert.isDefined(errors, "Es undefined");
            assert.isArray(errors.completed, "completed no es array");
        } catch (error) {
            return Promise.reject(error);
        }
    })
})