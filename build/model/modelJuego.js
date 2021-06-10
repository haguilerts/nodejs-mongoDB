"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose = require('mongoose');
//const schema=mongoose.schema;
//-------------------- modelos (interfase) -----------------------------------
const juegosShema = new mongoose_1.Schema({
    _id: String,
    name: String,
    descripcion: String,
    presio: Number,
    img: String
}, { collection: 'juegosGamer' });
const juegosGamer = mongoose.model('Juego', juegosShema);
module.exports = juegosGamer;
