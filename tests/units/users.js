const { assert } = require("chai");
const userValidator = require("../../validations/users");

describe("Users Validator", () => {

    it("El campo name es requerido", () => {
        try {
            const obj = {
                "name": "   ",
                "username": "ashjkldajskldjaksldja",
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

               const errors = userValidator.saveAndUpdate(obj);
               assert.isDefined(errors, "Es undefined");
               assert.isArray(errors.name, "name no es array");

        } catch (error) {
            return Promise.reject(error);
        }
    });

    it("Name debe contener entre 10 a 50 caracteres", () => {
        try {
            const obj = {
                "name": "Ignacio",
                "username": "ignacio ainol",
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

               const errors = userValidator.saveAndUpdate(obj);
               assert.isDefined(errors, "Es undefined");
               assert.isArray(errors.name, "name no es array");
               assert.isArray(errors.username, "username no es array");

        } catch (error) {
            return Promise.reject(error);
        }
    });

    it("El campo username es requerido", () => {
        try {
            const obj = {
                "name": "Billy Idol",
                "username": "       ",
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

               const errors = userValidator.saveAndUpdate(obj);
               assert.isDefined(errors, "Es undefined");
               assert.isArray(errors.username, "username no es array");

        } catch (error) {
            return Promise.reject(error);
        }
    });

    it("El campo username debe tener entre 10 a 50 caracteres", () => {
        try {
            const obj = {
                "name": "Ignacio",
                "username": "ignacio",
                "email": "al@go.cl",
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

               const errors = userValidator.saveAndUpdate(obj);
               assert.isDefined(errors, "Es undefined");
               assert.isArray(errors.name, "name no es array");
               assert.isArray(errors.username, "username no es array");

        } catch (error) {
            return Promise.reject(error);
        }
    });

    it("El campo email es requerido", () => {
        try {
            const obj = {
                "name": "Jonh Billy Idol",
                "username": "Lorem Ipsum",
                "email": "    ",
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

               const errors = userValidator.saveAndUpdate(obj);
               assert.isDefined(errors, "Es undefined");
               assert.isArray(errors.email, "email no es array");

        } catch (error) {
            return Promise.reject(error);
        }
    });

    it("Debe ser un email válido", () => {
        try {
            const obj = {
                "name": "Ignacio",
                "username": "ignacio",
                "email": "loquesea@nose",
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

               const errors = userValidator.saveAndUpdate(obj);
               assert.isDefined(errors, "Es undefined");
               assert.isArray(errors.name, "name no es array");
               assert.isArray(errors.username, "username no es array");

        } catch (error) {
            return Promise.reject(error);
        }
    });

    it("El email debe ser .cl o .com", () => {
        try {
            const obj = {
                "name": "Ignacio",
                "username": "ignacio",
                "email": "hallo@world.de",
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

               const errors = userValidator.saveAndUpdate(obj);
               assert.isDefined(errors, "Es undefined");
               assert.isArray(errors.name, "name no es array");
               assert.isArray(errors.username, "username no es array");

        } catch (error) {
            return Promise.reject(error);
        }
    });

    it("El campo address es requerido", () => {
        try {
            const obj = {
                "name": "Billy Idol",
                "username": "Lo que sea",
                "email": "Sincere@april.cl",
                "address": "",
                "phone": "9879384930",
                "website": "https://hildegard.org",
                "company": {
                 "name": "Roma Roma :D",
                 "catchPhrase": "Multi Todooo",
                 "bs": "harness Buenos Aires"
                }
               }

               const errors = userValidator.saveAndUpdate(obj);
               assert.isDefined(errors, "Es undefined");
               assert.isArray(errors.address, "address no es array");

        } catch (error) {
            return Promise.reject(error);
        }
    });

    it("El campo street de address es requerido", () => {
        try {
            const obj = {
                "name": "Billy Idol",
                "username": "Lo que sea",
                "email": "Sincere@april.cl",
                "address": {
                    "street": "",
                    "suite": "asasddasdas",
                    "city": "Gwenborough",
                    "zipcode": "92998-3874",
                    "geo": {
                     "lat": "-37.3159",
                     "lng": "81.1496"
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

               const errors = userValidator.saveAndUpdate(obj);
               assert.isDefined(errors, "Es undefined");
               assert.isArray(errors.address, "address no es array");

        } catch (error) {
            return Promise.reject(error);
        }
    });

    it("El campo suite de address es requerido", () => {
        try {
            const obj = {
                "name": "Billy Idol",
                "username": "Lo que sea",
                "email": "Sincere@april.cl",
                "address": {
                    "street": "aaaaaaaaaaaaa",
                    "suite": "",
                    "city": "Gwenborough",
                    "zipcode": "92998-3874",
                    "geo": {
                     "lat": "-37.3159",
                     "lng": "81.1496"
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

               const errors = userValidator.saveAndUpdate(obj);
               assert.isDefined(errors, "Es undefined");
               assert.isArray(errors.address, "address no es array");

        } catch (error) {
            return Promise.reject(error);
        }
    });

    it("El campo city de address es requerido", () => {
        try {
            const obj = {
                "name": "Billy Idol",
                "username": "Lo que sea",
                "email": "Sincere@april.cl",
                "address": {
                    "street": "aaaaaaaaaaaaa",
                    "suite": "Charles Gaulle",
                    "city": "    ",
                    "zipcode": "92998-3874",
                    "geo": {
                     "lat": "-37.3159",
                     "lng": "81.1496"
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

               const errors = userValidator.saveAndUpdate(obj);
               assert.isDefined(errors, "Es undefined");
               assert.isArray(errors.address, "address no es array");

        } catch (error) {
            return Promise.reject(error);
        }
    });

    it("El campo zipcode de address es requerido", () => {
        try {
            const obj = {
                "name": "Billy Idol",
                "username": "Lo que sea",
                "email": "Sincere@april.cl",
                "address": {
                    "street": "aaaaaaaaaaaaa",
                    "suite": "Charles Gaulle",
                    "city": "Big City Night",
                    "zipcode": "",
                    "geo": {
                     "lat": "-37.3159",
                     "lng": "81.1496"
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

               const errors = userValidator.saveAndUpdate(obj);
               assert.isDefined(errors, "Es undefined");
               assert.isArray(errors.address, "address no es array");

        } catch (error) {
            return Promise.reject(error);
        }
    });

    it("El campo geo de address es requerido", () => {
        try {
            const obj = {
                "name": "Billy Idol",
                "username": "Lo que sea",
                "email": "Sincere@april.cl",
                "address": {
                    "street": "aaaaaaaaaaaaa",
                    "suite": "Charles Gaulle",
                    "city": "Big City Night",
                    "zipcode": "12321312",
                    "geo": ""
                },
                "phone": "9879384930",
                "website": "https://hildegard.org",
                "company": {
                 "name": "Roma Roma :D",
                 "catchPhrase": "Multi Todooo",
                 "bs": "harness Buenos Aires"
                }
               }

               const errors = userValidator.saveAndUpdate(obj);
               assert.isDefined(errors, "Es undefined");
               assert.isArray(errors.address, "address no es array");

        } catch (error) {
            return Promise.reject(error);
        }
    });

    it("El campo lat (de geo) de address es requerido", () => {
        try {
            const obj = {
                "name": "Billy Idol",
                "username": "Lo que sea",
                "email": "Sincere@april.cl",
                "address": {
                    "street": "aaaaaaaaaaaaa",
                    "suite": "Charles Gaulle",
                    "city": "Big City Night",
                    "zipcode": "1231312233",
                    "geo": {
                     "lat": "",
                     "lng": "81.1496"
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

               const errors = userValidator.saveAndUpdate(obj);
               assert.isDefined(errors, "Es undefined");
               assert.isArray(errors.address, "address no es array");

        } catch (error) {
            return Promise.reject(error);
        }
    });

    it("El campo lng (de geo) de address es requerido", () => {
        try {
            const obj = {
                "name": "Billy Idol",
                "username": "Lo que sea",
                "email": "Sincere@april.cl",
                "address": {
                    "street": "aaaaaaaaaaaaa",
                    "suite": "Charles Gaulle",
                    "city": "Big City Night",
                    "zipcode": "1231312233",
                    "geo": {
                     "lat": "81.1496",
                     "lng": ""
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

               const errors = userValidator.saveAndUpdate(obj);
               assert.isDefined(errors, "Es undefined");
               assert.isArray(errors.address, "address no es array");

        } catch (error) {
            return Promise.reject(error);
        }
    });

    it("El campo phone es requerido", () => {
        try {
            const obj = {
                "name": "Billy Idol",
                "username": "Lo que sea",
                "email": "Sincere@april.cl",
                "address": {
                    "street": "aaaaaaaaaaaaa",
                    "suite": "Charles Gaulle",
                    "city": "Big City Night",
                    "zipcode": "1231312233",
                    "geo": {
                     "lat": "81.1496",
                     "lng": "81.1496"
                    }
                },
                "phone": "      ",
                "website": "https://hildegard.org",
                "company": {
                 "name": "Roma Roma :D",
                 "catchPhrase": "Multi Todooo",
                 "bs": "harness Buenos Aires"
                }
               }

               const errors = userValidator.saveAndUpdate(obj);
               assert.isDefined(errors, "Es undefined");
               assert.isArray(errors.phone, "phone no es array");

        } catch (error) {
            return Promise.reject(error);
        }
    });

    it("El campo teléfono debe tener entre 10 a 30 caracteres", () => {
        try {
            const obj = {
                "name": "Billy Idol",
                "username": "Lo que sea",
                "email": "Sincere@april.cl",
                "address": {
                    "street": "aaaaaaaaaaaaa",
                    "suite": "Charles Gaulle",
                    "city": "Big City Night",
                    "zipcode": "56238472332",
                    "geo": {
                     "lat": "81.1496",
                     "lng": "81.1496"
                    }
                },
                "phone": "123456789",
                "website": "https://hildegard.org",
                "company": {
                 "name": "Roma Roma :D",
                 "catchPhrase": "Multi Todooo",
                 "bs": "harness Buenos Aires"
                }
               }

               const errors = userValidator.saveAndUpdate(obj);
               assert.isDefined(errors, "Es undefined");
               assert.isArray(errors.address, "address no es array");

        } catch (error) {
            return Promise.reject(error);
        }
    });

    it("El numero ingresado no es correcto", () => {
        try {
            const obj = {
                "name": "Billy Idol",
                "username": "Lo que sea",
                "email": "Sincere@april.cl",
                "address": {
                    "street": "aaaaaaaaaaaaa",
                    "suite": "Charles Gaulle",
                    "city": "Big City Night",
                    "zipcode": "56238472332",
                    "geo": {
                     "lat": "81.1496",
                     "lng": "81.1496"
                    }
                },
                "phone": "asdaaaasdadas",
                "website": "https://hildegard.org",
                "company": {
                 "name": "Roma Roma :D",
                 "catchPhrase": "Multi Todooo",
                 "bs": "harness Buenos Aires"
                }
               }

               const errors = userValidator.saveAndUpdate(obj);
               assert.isDefined(errors, "Es undefined");
               assert.isArray(errors.phone, "phone no es array");

        } catch (error) {
            return Promise.reject(error);
        }
    });   

    it("El campo website es requerido", () => {
        try {
            const obj = {
                "name": "Billy Idol",
                "username": "Lo que sea",
                "email": "Sincere@april.cl",
                "address": {
                    "street": "aaaaaaaaaaaaa",
                    "suite": "Charles Gaulle",
                    "city": "Big City Night",
                    "zipcode": "56238472332",
                    "geo": {
                     "lat": "81.1496",
                     "lng": "81.1496"
                    }
                },
                "phone": "98792837-28",
                "website": " ",
                "company": {
                 "name": "Roma Roma :D",
                 "catchPhrase": "Multi Todooo",
                 "bs": "harness Buenos Aires"
                }
               }

               const errors = userValidator.saveAndUpdate(obj);
               assert.isDefined(errors, "Es undefined");
               assert.isArray(errors.website, "website no es array");

        } catch (error) {
            return Promise.reject(error);
        }
    });

    it("El campo website debe tener entre 10 a 30 caracteres", () => {
        try {
            const obj = {
                "name": "Billy Idol",
                "username": "Lo que sea",
                "email": "Sincere@april.cl",
                "address": {
                    "street": "aaaaaaaaaaaaa",
                    "suite": "Charles Gaulle",
                    "city": "Big City Night",
                    "zipcode": "56238472332",
                    "geo": {
                     "lat": "81.1496",
                     "lng": "81.1496"
                    }
                },
                "phone": "12345678910",
                "website": "https://",
                "company": {
                 "name": "Roma Roma :D",
                 "catchPhrase": "Multi Todooo",
                 "bs": "harness Buenos Aires"
                }
               }

               const errors = userValidator.saveAndUpdate(obj);
               assert.isDefined(errors, "Es undefined");
               assert.isArray(errors.website, "website no es array");

        } catch (error) {
            return Promise.reject(error);
        }
    });

    it("El campo company es requerido", () => {
        try {
            const obj = {
                "name": "Billy Idol",
                "username": "Lo que sea",
                "email": "Sincere@april.cl",
                "address": {
                    "street": "aaaaaaaaaaaaa",
                    "suite": "Charles Gaulle",
                    "city": "Big City Night",
                    "zipcode": "56238472332",
                    "geo": {
                     "lat": "81.1496",
                     "lng": "81.1496"
                    }
                },
                "phone": "12345678910",
                "website": "https://www.nose.cl",
                "company": ""
               }

               const errors = userValidator.saveAndUpdate(obj);
               assert.isDefined(errors, "Es undefined");
               assert.isArray(errors.company, "company no es array");

        } catch (error) {
            return Promise.reject(error);
        }
    });

    it("El campo name de company es requerido", () => {
        try {
            const obj = {
                "name": "Billy Idol",
                "username": "Lo que sea",
                "email": "Sincere@april.cl",
                "address": {
                    "street": "aaaaaaaaaaaaa",
                    "suite": "Charles Gaulle",
                    "city": "Big City Night",
                    "zipcode": "56238472332",
                    "geo": {
                     "lat": "81.1496",
                     "lng": "81.1496"
                    }
                },
                "phone": "12345678910",
                "website": "https://www.nose.cl",
                "company": {
                    "name": " ",
                    "catchPhrase": "Multi Todooo",
                    "bs": "harness Buenos Aires"
                   }
               }

               const errors = userValidator.saveAndUpdate(obj);
               assert.isDefined(errors, "Es undefined");
               assert.isArray(errors.company, "company no es array");

        } catch (error) {
            return Promise.reject(error);
        }
    });

    it("El campo catchPhrase de company es requerido", () => {
        try {
            const obj = {
                "name": "Billy Idol",
                "username": "Lo que sea",
                "email": "Sincere@april.cl",
                "address": {
                    "street": "aaaaaaaaaaaaa",
                    "suite": "Charles Gaulle",
                    "city": "Big City Night",
                    "zipcode": "56238472332",
                    "geo": {
                     "lat": "81.1496",
                     "lng": "81.1496"
                    }
                },
                "phone": "12345678910",
                "website": "https://www.nose.cl",
                "company": {
                    "name": "Multi Todooo",
                    "catchPhrase": "   ",
                    "bs": "harness Buenos Aires"
                   }
               }

               const errors = userValidator.saveAndUpdate(obj);
               assert.isDefined(errors, "Es undefined");
               assert.isArray(errors.company, "company no es array");

        } catch (error) {
            return Promise.reject(error);
        }
    });

    it("El campo bs de company es requerido", () => {
        try {
            const obj = {
                "name": "Billy Idol",
                "username": "Lo que sea",
                "email": "Sincere@april.cl",
                "address": {
                    "street": "aaaaaaaaaaaaa",
                    "suite": "Charles Gaulle",
                    "city": "Big City Night",
                    "zipcode": "56238472332",
                    "geo": {
                     "lat": "81.1496",
                     "lng": "81.1496"
                    }
                },
                "phone": "12345678910",
                "website": "https://www.nose.cl",
                "company": {
                    "name": "Multi Todooo",
                    "catchPhrase": "harness Buenos Aires",
                    "bs": "    "
                   }
               }

               const errors = userValidator.saveAndUpdate(obj);
               assert.isDefined(errors, "Es undefined");
               assert.isArray(errors.company, "company no es array");

        } catch (error) {
            return Promise.reject(error);
        }
    });

});