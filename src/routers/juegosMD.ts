import express, { Application, Router } from "express";
import { miBBDD, JuegoBBDD, interJuego,  } from "../BBDD";
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
               const arrayjuegosDDBB= await this.MyJuego.find()
              // console.log('arrayBBDD: ',arrayjuegosDDBB)
               res.render("juegos", { juego:arrayjuegosDDBB });

            } catch (error) {
                res.render("404");
            }

        });
         this.router.get("/admin", async(req, res) => {
            try {
                const arrayjuegosDDBB= await this.MyJuego.find()
                res.render("admin", { admin:arrayjuegosDDBB });
            } catch (error) {
                res.render("404");
            }
        });
    }
}
const j = new Juegos()
export default j.router