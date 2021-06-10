
const mongoose=require('mongoose')
//require('dotenv').config()
//------------------------------ conexion a una BBDD -----------------------------

const uri=`mongodb+srv://${process.env.USUARIO}:${process.env.PASSWORD}@mongodb.ho3r0.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`
//mongodb+srv://haguilertsBBDD:<password>@mongodb.ho3r0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(uri, 
    { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(()=> console.log('conectado a mongodb')) 
.catch( (error:any) => console.log('error de conexión', error));

//-------------------------------------------------------------------------------
export const miBBDD=[
    {
        id:1,
        name:"Giovanny",
        surname:"Aguilar Rojas",
        age:25,
        sexo:true
    },
    {
        id:2,
        name:"Rhonny",
        surname:"Aguilar Rojas",
        age:20,
        sexo:false
    }
]
export interface interJuego{
    id:number,
    name:string,
    descripcion:string,
    presio:number,
    img:string
}
export const JuegoBBDD:interJuego[]=[
    {
        id:1,
        name:"Dragon Ball z",
        descripcion:"juegos de niño",
        presio:3000,
        img:'https://generacionxbox.com/wp-content/uploads/2021/03/Dragon-Ball-Z-Kakarot-ID.jpg'
  
    },
    {
        id:2,
        name:"naruto",
        descripcion:"juegos de adolecente",
        presio:4000,
        img:'https://sm.ign.com/t/ign_latam/screenshot/default/sasuke-naruto-itachi_43mm.1280.jpg'
    },
    {
        id:3,
        name:"pikachu",
        descripcion:"juegos de super divertido",
        presio:5200,
        img:'https://i.ytimg.com/vi/LXY3dUpHkPU/maxresdefault.jpg'
    },
    {
        id:4,
        name:"Mario Bros",
        descripcion:"juegos de nenes",
        presio:2500,
        img:'https://i.ytimg.com/vi/4loRoeqff8o/maxresdefault.jpg'
    },
    {
        id:5,
        name:"minius",
        descripcion:"juegos de divertido",
        presio:2800,
        img:'https://i.ytimg.com/vi/0q8NIia2-t4/hqdefault.jpg'
    },
]