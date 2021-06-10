import express, { Application, Router } from "express";
import { miBBDD } from "../BBDD";
 
class Rutas{
    public router:Router=Router()
    constructor(){
        this.router
        this.config()
    }
    config(){
        this.router.get("/", (req, res) => {
            res.render("index", { name: miBBDD });
        });

        this.router.get("/servicios", (req, res) => {
            res.render("servicios", { servicios: " ropa, manza y banana etc.." });
        });
        this.router.get("/apiRest", (req, res) => {
            res.render("api", { api: " apii" });
        });
    }


}
const ruta=new Rutas()
export default ruta.router