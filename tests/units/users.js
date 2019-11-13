const { assert } = require("chai");
const userValidator = require("../../validations/users");

describe("Users Validator", () => {
    it("Name y username debe contener entre 10 a 50 caracteres", () => {
        try {
            const obj = {
                "name": "Ignacio",
                "username": "igna",
                "email": "Sincere@april.cl",
                "address": {
                 "street": "Kulas Bla bla bla ",
                 "suite": "Apt Lo que sea",
                 "city": "Gwen Stephany",
                 "zipcode": "929983874",
                 "geo": {
                  "lat": "-36789898",
                  "lng": "818698998"
                 }
                },
                "phone": "9879384930",
                "website": "https://hildegard.org",
                "company": {
                 "name": "Roma Roma :D",
                 "catchPhrase": "Multi Todooo",
                 "bs": "harness Buenos Aires"
                }
               }

               const errors = userValidator.save(obj);
               assert.isDefined(errors, "Es undefined");
               assert.isArray(errors.name, "name no es array");
               assert.isArray(errors.username, "username no es array");

        } catch (error) {
            return Promise.reject(error);
        }
    });
});