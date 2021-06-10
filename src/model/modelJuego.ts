import { Schema} from "mongoose";
const mongoose=require('mongoose')
//const schema=mongoose.schema;

//-------------------- modelos (interfase) -----------------------------------
const juegosShema=new Schema({
    _id:String,
    name:String,
    descripcion:String,
    presio:Number,
    img:String
},{collection: 'juegosGamer'})
const juegosGamer=mongoose.model('Juego',juegosShema)
module.exports=juegosGamer;