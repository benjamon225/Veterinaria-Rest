const express = require("express");
const { dbConnection } = require("./model/Database/db");

class Server {
  constructor() {
    this.app = express();
    this.port = 8080;

    //conectar a la base de datos
    this.conectarDB();

    // Middlewares
    this.middlewares();

    // Rutas de mi aplicación
    this.routes();


  }

 
  
  async conectarDB() {
    await dbConnection();
  }


  middlewares() {
    //seteamos el motor de plantillas
    this.app.set("view engine", "ejs");

    this.app.get('/', (req, res)=>{
      res.render(__dirname + "/views/loguin.ejs");
    })
  
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());

    this.app.use(express.static("public"));

    this.app.use((req, res, next) => {
      if (req.query.method == "PUT") {
        req.method = "PUT";
      } else if (req.query.method == "DELETE") {
        req.method = "DELETE";
      }
      next();
    });

  }

  routes() {
    const mascotas = require("./routes/mascotas");

    this.app.use(mascotas);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto", this.port);
    });
  }
}

module.exports = Server;
