const { assert } = require("chai");
const commentValidator = require("../../validations/comments");

describe("Comments Validator", () => {
    it("El campo postId es requerido", () =>{
        try {
            const obj = {
                "postId": '',
                "name": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
                "email": "ignacio@gardner.cl",
                "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
              }

              const errors = commentValidator.saveAndUpdate(obj);
              assert.isDefined(errors, "Es undefined");
              assert.isArray(errors.postId, "postId no es array");


        } catch (error) {
            return Promise.reject(error);
        }
    });

    it("El campo postId debe tener algun valor numerico", () =>{
        try {
            const obj = {
                "postId": '12',
                "name": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
                "email": "ignacio@gardner.cl",
                "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
              }

              const errors = commentValidator.saveAndUpdate(obj);
              assert.isDefined(errors, "Es undefined");
              assert.isArray(errors.postId, "postId no es array");


        } catch (error) {
            return Promise.reject(error);
        }
    });

    it("El campo name es requerido", () =>{
        try {
            const obj = {
                "postId": 12,
                "name": "  ",
                "email": "ignacio@gardner.cl",
                "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
              }

              const errors = commentValidator.saveAndUpdate(obj);
              assert.isDefined(errors, "Es undefined");
              assert.isArray(errors.name, "name no es array");


        } catch (error) {
            return Promise.reject(error);
        }
    });

    it("El campo name debe contener entre 100 y 500 caracteres", () => {
        try {
            const obj = {
                "postId": 12,
                "name": "Cause you, you're walking on the edge You, you chose the way of love and pain ",
                "email": "ignacio@gardner.cl",
                "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
              }

              const errors = commentValidator.saveAndUpdate(obj);
              assert.isDefined(errors, "Es undefined");
              assert.isArray(errors.name, "name no es array");


        } catch (error) {
            return Promise.reject(error);
        }
    });

    it("El campo email es requerido", () => {
        try {
            const obj = {
                "postId": 12,
                "name": "Cause you, you're walking on the edge You, you chose the way of love and pain laudantium enim quasi est quidem magnam voluptate ipsam  ",
                "email": "    ",
                "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
              }

              const errors = commentValidator.saveAndUpdate(obj);
              assert.isDefined(errors, "Es undefined");
              assert.isArray(errors.email, "email no es array");


        } catch (error) {
            return Promise.reject(error);
        }
    });

    it("Debe ser un email válido", () => {
        try {
            const obj = {
                "postId": 12,
                "name": "Cause you, you're walking on the edge You, you chose the way of love and pain ",
                "email": "loquesea@algo",
                "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
              }

              const errors = commentValidator.saveAndUpdate(obj);
              assert.isDefined(errors, "Es undefined");
              assert.isArray(errors.email, "email no es array");


        } catch (error) {
            return Promise.reject(error);
        }
    });

    it("El email debe ser .cl o .com", () => {
        try {
            const obj = {
                "postId": 12,
                "name": "Cause you, you're walking on the edge You, you chose the way of love and pain ",
                "email": "loquesea@algo.de",
                "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
              }

              const errors = commentValidator.saveAndUpdate(obj);
              assert.isDefined(errors, "Es undefined");
              assert.isArray(errors.email, "email no es array");


        } catch (error) {
            return Promise.reject(error);
        }
    });

    it("El campo body es requerido", () => {
        try {
            const obj = {
                "postId": 12,
                "name": "Cause you, you're walking on the edge You, you chose the way of love and pain. You, you chose the way of love and pain  ",
                "email": "loquesea@algo.cl",
                "body": ''
              }

              const errors = commentValidator.saveAndUpdate(obj);
              assert.isDefined(errors, "Es undefined");
              assert.isArray(errors.body, "body no es array");


        } catch (error) {
            return Promise.reject(error);
        }
    });

    it("El campo body debe contener entre 100 y 500 caracteres", () => {
        try {
            const obj = {
                "postId": 12,
                "name": "Cause you, you're walking on the edge You, you chose the way of love and pain. You, you chose the way of love and pain  ",
                "email": "loquesea@algo.cl",
                "body": "Cause you, you're walking on the edge"
              }

              const errors = commentValidator.saveAndUpdate(obj);
              assert.isDefined(errors, "Es undefined");
              assert.isArray(errors.body, "body no es array");


        } catch (error) {
            return Promise.reject(error);
        }
    });



});