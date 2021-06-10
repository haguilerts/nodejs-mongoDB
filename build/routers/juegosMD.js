"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//import {MyJuego} from '../model/modelJuego'
class Juegos {
    constructor() {
        this.router = express_1.Router();
        this.MyJuego = require('../model/modelJuego');
        this.router;
        this.config();
    }
    config() {
        this.router.get("/", (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const arrayjuegosDDBB = yield this.MyJuego.find();
                // console.log('arrayBBDD: ',arrayjuegosDDBB)
                res.render("juegos", { juego: arrayjuegosDDBB });
            }
            catch (error) {
                res.render("404");
            }
        }));
        this.router.get("/admin", (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const arrayjuegosDDBB = yield this.MyJuego.find();
                res.render("admin", { admin: arrayjuegosDDBB });
            }
            catch (error) {
                res.render("404");
            }
        }));
    }
}
const j = new Juegos();
exports.default = j.router;
