"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BBDD_1 = require("../BBDD");
class Rutas {
    constructor() {
        this.router = express_1.Router();
        this.router;
        this.config();
    }
    config() {
        this.router.get("/", (req, res) => {
            res.render("index", { name: BBDD_1.miBBDD });
        });
        this.router.get("/servicios", (req, res) => {
            res.render("servicios", { servicios: " ropa, manza y banana etc.." });
        });
        this.router.get("/apiRest", (req, res) => {
            res.render("api", { api: " apii" });
        });
    }
}
const ruta = new Rutas();
exports.default = ruta.router;
