const express = require('express');
const cors = require('cors');


class Server { //Clase

    constructor() { //Constructor
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        
        //Middlewares
        this.middlewares();
        
        //Rutas de mi aplicacion
        this.routes();

    }

    middlewares() {
        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use(express.json());
        
        //Directorio publico
        this.app.use(express.static('public'));
    }

    routes() { //Metodo
        this.app.use(this.usuariosPath, require('../routes/user'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriento', this.port);
        });
    }   
}

module.exports = Server;