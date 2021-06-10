import express, { Application, Router } from "express";
import { JuegoBBDD, interJuego,  } from "../BBDD";
//import {MyJuego} from '../model/modelJuego'

class Juegos {
    public router: Router = Router()
    public MyJuego=require('../model/modelJuego')
    constructor() {
        this.router
        this.config()
    }
     config() {
         this.router.get("/", async(req, res) => {
            try {
               // console.log(JuegoBBDD)
               res.render("juegos", { juego:JuegoBBDD });

            } catch (error) {
                res.render("404");
            }

        });
         this.router.get("/admin", async(req, res) => {
            try {
                await res.render("admin", { admin:JuegoBBDD });
            } catch (error) {
                res.render("404");
            }
        });
    }
}
const j = new Juegos()
export default j.router