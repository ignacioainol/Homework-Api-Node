const { apiClient } = require("./config");
const { assert } = require("chai");
const apiClientBaseUrl = "/v1/users";

describe("Users API", () => {
    // [users post]
    it("No debe guardar usuario (1)", async () => {
        try {
            const obj = {
                "name": "",
                "username": "Bret",
                "email": "Sincere@april.biz",
                "address": {
                    "street": "Kulas",
                    "suite": "Apt",
                    "city": "Gwen",
                    "zipcode": "92998-3874",
                    "geo": {
                        "lat": "-37",
                        "lng": "81"
                    }
                },
                "phone": "1234",
                "website": "hildegard.org",
                "company": {
                    "name": "Roma",
                    "catchPhrase": "Multi",
                    "bs": "harness"
                }
            }

            const response = await apiClient
                .post(apiClientBaseUrl)
                .send(obj)
                .expect(400);

            const { body:errors } = response;

            //Name assert
            assert.isArray(errors.name, "Name no es un array");
            assert.isNotEmpty(errors.name, "Name no reporta errores");

            //username assert
            assert.isArray(errors.username, "username no es un array");
            assert.isNotEmpty(errors.username, "username no reporta errores");

            //email assert
            assert.isArray(errors.email, "email no es un array");
            assert.isNotEmpty(errors.email, "email no reporta errores");

            //address assert
            assert.isArray(errors.address, "address no es un array");
            assert.isNotEmpty(errors.address, "address no reporta errores");

            //phone assert
            assert.isArray(errors.phone, "phone no es un array");
            assert.isNotEmpty(errors.phone, "phone no reporta errores");

            //website assert
            // assert.isArray(errors.website, "website no es un array");
            // assert.isNotEmpty(errors.website, "website no reporta errores");

            //company assert
            assert.isArray(errors.company, "company no es un array");
            assert.isNotEmpty(errors.company, "company no reporta errores");

            return Promise.resolve();

        } catch (error) {
            return Promise.reject(error);
        }
    });

    it("Debe guardar usuario", async () => {
        try {
            const obj = {
                "name": "Ignacio Kai",
                "username": "Iggnaxioss",
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

            const response = await apiClient
                .post(apiClientBaseUrl)
                .send(obj)
                .expect(201);

            const { body } = response;
            assert.isArray(body, "No es array");
            // const props = ["id", "nombres", "apellidos", "edad"];
            // assert.hasAllKeys(body, props);

            return Promise.resolve()
        } catch (error) {
            return Promise.reject(error)
        }
    })
    // [/users post]

    // [users get]
    it("Debe obtener usuarios", async () => {
        try {
            const response = await apiClient
                .get(apiClientBaseUrl)
                .expect(200);

            const { body } = response;

            assert.isArray(body, "No es array");
            assert.isNotEmpty(body, "Esta vacio");

            const obj = body[0];
            const props = ["id", "name", "username", "email","address","company","phone","website"];
            assert.hasAllKeys(obj, props);

            return Promise.resolve()
        } catch (error) {
            return Promise.reject(error)
        }
    });

    it("Debe obtener usuario por ID", async () => {
        const userId = 1;
        try {
            const response = await apiClient
                .get(`${apiClientBaseUrl}/${userId}`)
                .expect(200);

            const { body } = response;
            assert.isObject(body, "No es object");
            const props = ["id", "name", "username", "email","address","company","phone","website"];
            assert.hasAllKeys(body, props);

            return Promise.resolve()
        } catch (error) {
            return Promise.reject(error)
        }
    });

    it("No debe encontrar usuario por ID", async () => {
        const userId = 10000;
        try {
            const response = await apiClient
                .get(`${apiClientBaseUrl}/${userId}`)
                .expect(404);

            return Promise.resolve();
        } catch (error) {
            return Promise.reject(error);
        }
    })
    // [/users get]


});