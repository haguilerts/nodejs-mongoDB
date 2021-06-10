/*
metodo de instalacion:
.) npm i init
.) npm i express --save 
   npm i --save-dev @types/express
.) npm i ejs // noes peermite instalr el motor de plantilla para usar
.) npm i mongoose // es para hacer mas simple la conexion a la base de datos
.) npm i dotenv   // variable de entorno: es para ocultar el usuaril y contraseña de la base de datos mongoDB
   usamos en la el archivo de la BBDD => require('dotenv').config() 
   luego creamos un archivo .env => hay se guardara los datos de nuetra BBDD de manera privada 
   finalmente en .gitignore agrego .env 
BBDD: https://cloud.mongodb.com/v2/60c1347aa941c041c424b5a4#metrics/replicaSet/60c17e15851a723a39f7349c/explorer/JuegosDDBB/juegosGamer/find

*/
motores de plantilla para nodejs:
https://bluuweb.github.io/node/03-vistas/#motores-de-plantilla
https://expressjs.com/en/resources/template-engines.html 
 /**
 extenciones: EJS language support  && EJS Snippets
 */