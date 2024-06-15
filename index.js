const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();
app.use(bodyParser());

app.listen(3000, () => {
    console.log("Servidor iniciado...");
});

app.get("/", (req, res) => {
    res.send("Hola desde el servidor");
})
//Generar tablas
app.get("/api/plataformas", (req, res) => {
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
    let query = "SELECT * FROM listado_juegos.juegos;"

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
    let query = 'CALL listado_juegos.DD_Consolas();'

    connection.query(query, (err, result) => {
        if(err){
            res.json(500, {
                msg: "Problemas con el procedimiento"
            })
        }

        res.send(200, {
            msg: "Datos obtenidos con éxito.",
            data: result
        })
    })
})

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

