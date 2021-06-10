import express,{Application} from "express";
//import { miBBDD } from "./BBDD";
import juegos from "./routers/juegos";
import juegosMD from "./routers/juegosMD";
import rutasWeb from './routers/rutasWeb'

class ServerMongo{
    public app:Application
    constructor(){
        this.app=express()
        this.config()
        this.router()
    }
    config():void{
        this.app.set('port', process.env.PORT || 3200)
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended:false}))
        this.app.set("view engine", "ejs");
        this.app.set("views", __dirname + "/views");
        this.app.use(express.static(__dirname+"/public"))// le doy acceso de manera estatica q se puede obtener cuqlquier dato desde esa carpera
    }
    router():void{
        //.use son mirewords
       /*  this.app.get("/", (req, res) => {
            res.render("index", { name: miBBDD });
        });      
        this.app.get("/servicios", (req, res) => {
            res.render("servicios", { servicios: " ropa, manza y banana etc.." });
        });
        this.app.get("/apiRest", (req, res) => {
            res.render("api", { api: " apii" });
        }); */
        //this.app.use('/',require('./routers/rutasWeb')) // 2° 1° forma de hacer
        this.app.use('/',rutasWeb) // 1° forma de hacer
        this.app.use('/juegos',juegos)
        this.app.use('/juegosBBDD',juegosMD)


        // acceso a un api de la BBDD
        this.app.use((req, res, next) => {
            res.status(404).render("404", { titulo: "Página 404" });
        });
        //this.app.use('/api/games',gamerRouters)
    }
    start():void{
        this.app.listen(this.app.get('port'),()=>{
            console.log(`Server on port ${this.app.get('port')} : http://localhost:${this.app.get('port')}/`)
        });
    }
}
const serverMongo=new ServerMongo();
serverMongo.start(); 