"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import { miBBDD } from "./BBDD";
const juegos_1 = __importDefault(require("./routers/juegos"));
const juegosMD_1 = __importDefault(require("./routers/juegosMD"));
const rutasWeb_1 = __importDefault(require("./routers/rutasWeb"));
class ServerMongo {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.router();
    }
    config() {
        this.app.set('port', process.env.PORT || 3200);
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
        this.app.set("view engine", "ejs");
        this.app.set("views", __dirname + "/views");
        this.app.use(express_1.default.static(__dirname + "/public")); // le doy acceso de manera estatica q se puede obtener cuqlquier dato desde esa carpera
    }
    router() {
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
        this.app.use('/', rutasWeb_1.default); // 1° forma de hacer
        this.app.use('/juegos', juegos_1.default);
        this.app.use('/juegosBBDD', juegosMD_1.default);
        // acceso a un api de la BBDD
        this.app.use((req, res, next) => {
            res.status(404).render("404", { titulo: "Página 404" });
        });
        //this.app.use('/api/games',gamerRouters)
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port ${this.app.get('port')} : http://localhost:${this.app.get('port')}/`);
        });
    }
}
const serverMongo = new ServerMongo();
serverMongo.start();
