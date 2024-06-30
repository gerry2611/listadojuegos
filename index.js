const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();
const server = require("http").createServer(app);
app.use(bodyParser());

app.listen(3000, () => {
    console.log("Servidor iniciado...");
});

app.get("/", (req, res) => {
    res.send("Hola desde el servidor");
})
//Generar tablas
app.get("/api/consolas", (req, res) => {
    let query = "SELECT * FROM listado_juegos.consolas";

    connection.query(query, (err, result) => {
        if (err) {
            res.json(500, {
                msg: "Error en el servidor interno, intentelo más tarde."
            })
        }

        res.send(200, {
            msg: "Datos obtenidos con éxito",
            data: result
        })
    })
})

app.get("/api/juegos", (req, res) => {
    let query = "SELECT * FROM lista_juegos;"

    connection.query(query, (err, result) => {
        if (err) {
            res.json(500, {
                msg: "Error en el servidor interno, intentelo más tarde."
            })
        }

        res.send(200, {
            msg: "Datos obtenidos con éxito",
            data: result
        })
    })
})

app.get("/api/sesiones", (req, res) => {
    let query = "SELECT * FROM lista_sesiones;"

    connection.query(query, (err, result) => {
        if (err) {
            res.json(500, {
                msg: "Error en el servidor interno, intentelo más tarde."
            })
        }

        res.send(200, {
            msg: "Datos obtenidos con éxito",
            data: result
        })
    })
})

app.get("/api/lista_consolas", (req, res) => {
    let query = 'CALL DD_Consolas();'

    connection.query(query, (err, result) => {
        if(err){
            res.json(500, {
                msg: "Problemas con el procedimiento"
            })
        }

        res.send(200, {
            msg: "Datos obtenidos con éxito",
            data: result
        })
    })
})

app.get("/api/plataformas", (req, res) => {
    let query = 'SELECT * FROM plataformas;'

    connection.query(query, (err, result) => {
        if(err){
            res.json(500, {
                msg: "Problemas con el procedimiento"
            })
        }

        res.send(200, {
            msg: "Datos obtenidos con éxito",
            data: result
        })
    })
})

app.get("/api/lista_plataformas", (req, res) => {
    let query = 'CALL DD_Plataformas();'

    connection.query(query, (err, result) => {
        if(err){
            res.json(500, {
                msg: "Problemas con el procedimiento DD_Plataformas"
            })
        }

        res.send(200, {
            msg: "Datos obtenidos con éxito",
            data: result
        })
    })
})

app.get("/api/lista_juegos", (req, res) => {
    let query = 'CALL DD_Juegos();'

    connection.query(query, (err, result) => {
        if(err){
            res.json(500, {
                msg: "Problemas con el procedimiento DD_Juegos"
            })
        }

        res.send(200, {
            msg: "Datos obtenidos con éxito",
            data:result
        })
    })
})

app.post("/api/juego_nuevo", (req, res) => {
    console.log("Registrando juego...");
    let nombre = req.body.nombre;
    let idconsola = req.body.idconsola;
    let idplataforma = req.body.idplataforma;
    let fecha_adquirido = req.body.fecha_adquirido;
    let estado = req.body.estado;
    let completado = req.body.completado;
    let fecha_completado = req.body.fecha_completado;
    let nota = req.body.nota;

    if(!completado){
        completado = 0
    }else{
        completado = 1
    }

    let query = `CALL agregar_juego("${nombre}",${idconsola},${idplataforma},"${fecha_adquirido}","${estado}",${completado},"${fecha_completado}","${nota}");`;

    connection.query(query, (err, result) => {
        if(err){
            res.json(500, {
                msg: "Error al insertar el juego"
            })
            return
        }

        res.json(200, {
            msg: "Juego nuevo agregado exitosamente a la base de datos",
        })
        return
    })
});
const connection = mysql.createConnection({
    host: "localhost",
    user: "gerry",
    password: "sou12sag",
    database: "listado_juegos"
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Conectado con exito al servidor MySQL")
});

