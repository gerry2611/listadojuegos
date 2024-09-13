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

app.get("/api/lista_plataformas_pc", (req, res) => {
    let query = 'CALL DD_Plataformas_PC();'

    connection.query(query, (err, result) => {
        if(err){
            res.json(500, {
                msg: "Problemas con el procedimiento DD_Plataformas_PC"
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

app.get("/api/juego_editar", (req, res) => {
    let idjuegoeditar = req.body.id;
    let query = `CALL juego_paraeditar("${idjuegoeditar}");`

    connection.query(query, (err, result) => {
        if(err){
            res.json(500, {
                msg: "Problemas con el procedimiento juego_paraeditar"
            })
        }

        res.send(200, {
            msg: "Datos obtenidos con éxito",
            data:result
        })
    })
})

app.get("/api/lista_deseados", (req, res) => {
    let query = 'SELECT * FROM lista_deseados;'

    connection.query(query, (err, result) => {
        if(err){
            res.json(500, {
                msg: "Problemas con el procedimiento lista_deseados"
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
        
    })
});

app.post("/api/agregar_juego_deseado", (req, res) => {
    console.log("Registrar juego a la lista de deseos...");
    let nombre = req.body.nombre;
    let tipo = req.body.tipo;
    let idconsola = req.body.idconsola;
    let tienda = req.body.tienda;
    let fecha_lan = req.body.fecha_lanzamiento;
    let precio = req.body.precio;
    let nota = req.body.nota;
    
    let query = `CALL agregar_juego_deseado("${nombre}","${tipo}",${idconsola},"${tienda}","${fecha_lan}",${precio},"${nota}");`

    if (fecha_lan === '' || fecha_lan === '1900-01-01' || fecha_lan === null) {
        fecha_lan = null
        query = `CALL agregar_juego_deseado("${nombre}","${tipo}",${idconsola},"${tienda}",${fecha_lan},${precio},"${nota}");`
    }

    if (nota === '') {
        nota = null
        if (fecha_lan === '' || fecha_lan === '1900-01-01' || fecha_lan === null){
            fecha_lan = null
            query = `CALL agregar_juego_deseado("${nombre}","${tipo}",${idconsola},"${tienda}",${fecha_lan},${precio},${nota});`
        }else{
        query = `CALL agregar_juego_deseado("${nombre}","${tipo}",${idconsola},"${tienda}","${fecha_lan}",${precio},${nota});`
        }
    }

    connection.query(query, (err, result) => {
        if(err){
            res.json(500, {
                msg: "Error al insertar el juego"
            })
            return            
        }
        res.json(200, {
            msg: "Juego nuevo agregado exitosamente a la lista de deseos en la base de datos",
        })        
    })
})

app.post("/api/editar_juego", (req, res) => {
    console.log("Editando juego...");
    let idjuego = req.body.idjuego;
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

    if(fecha_adquirido === null){
        fecha_adquirido = "1900-01-01"
    }

    if(fecha_completado === null){
        fecha_completado = "1900-01-01"
    }
    

    let query = `CALL editar_juego(${idjuego},"${nombre}",${idconsola},${idplataforma},"${fecha_adquirido}","${estado}",${completado},"${fecha_completado}","${nota}");`;

    if(nota === null) {
        query = `CALL editar_juego(${idjuego},"${nombre}",${idconsola},${idplataforma},"${fecha_adquirido}","${estado}",${completado},"${fecha_completado}",${nota});`;
    }
    connection.query(query, (err, result) => {
        if(err){
            res.json(500, {
                msg: "Error al editar el juego"
            })
            return
        }

        res.json(200, {
            msg: "Se ha editado el juego " + idjuego + "con éxito",
        })
        
    })
});

app.post("/api/editar_juego_deseado", (req, res) => {
    console.log("Editando juego deseado...");
    let idjuego = req.body.idjuego;
    let nombre = req.body.nombre;
    let tipo = req.body.tipo;
    let idconsola = req.body.idconsola;
    let tienda = req.body.tienda;
    let fecha_lan = req.body.fecha_lan;
    let precio = req.body.precio;
    let nota = req.body.nota;

    if (fecha_lan === null){
        fecha_lan = "1900-01-01"
    }

    let query = `CALL editar_juego_deseado(${idjuego},"${nombre}","${tipo}",${idconsola},"${tienda}","${fecha_lan}",${precio},"${nota}");`

    connection.query(query, (err, result) => {
        if(err){
            res.json(500, {
                msg: "Error al editar el juego"
            })
            return
        }

        res.json(200, {
            msg: "Se ha editado el juego " + idjuego + "con éxito",
        })        
    })
});

app.post("/api/inicio_sesion", (req, res) => {
    console.log("Iniciando sesión...");
    let juego = req.body.juego;
    let idconsola = req.body.idconsola;
    let idplataforma = req.body.idplataforma;
    let demo = req.body.demo;

    if(juego != "Demo"){
        demo = ""
    }

    let query = `CALL sesion_inicio("${juego}", ${idconsola}, ${idplataforma}, "${demo}");`

    connection.query(query, (err, result) => {
        if(err){
            res.json(500, {
                msg: "Error al iniciar la sesión"
            })
            return
        }

        res.json(200, {
            msg: "Sesión iniciada",
        })        
    })
});

app.put("/api/fin_sesion", (req, res) => {
    let juego = req.body.juego;

    let query = `CALL sesion_fin(${juego});`

    connection.query(query, (err, result) => {
        if(err){
            res.json(500, {
                msg: "Error al finalizar la sesión."
            })
            return
        }

        res.json(200, {
            msg: "Sesión finalizada"
        })
    })
});

app.post("/api/registrar_compra", (req, res) => {
    let idjuego = req.body.idjuego;
    let nombre = req.body.nombre;
    let consola = req.body.consola;
    let tienda = req.body.tienda;
    let compratienda = req.body.compratienda;
    let precio = req.body.precio;
    let precio_oferta = req.body.precio_oferta;
    let descuento = req.body.descuento;
    let precio_regular = req.body.precio_regular;
    let nota = req.body.nota;

    if(compratienda){
        compratienda = 1
    }else{
        compratienda = 0
    }

    if(descuento === ""){
        descuento = 0
    }

    if(precio_regular === ""){
        precio_regular = 0
    }

    let query = `CALL juego_comprado(${idjuego},"${nombre}",${consola},"${tienda}",${compratienda},${precio},${precio_oferta},${descuento},${precio_regular},"${nota}");`

    connection.query(query, (err, result) => {
        if(err){
            res.json(500, {
                msg: "Error al registrar la compra"
            })
            return
        }

        res.json(200, {
            msg: "Compra registrada"
        })
    })
});

app.post("/api/registrar_reserva", (req, res) => {
    let idjuego = req.body.idjuego;
    let nombre = req.body.nombre;
    let tipo = req.body.tipo;
    let consola = req.body.consola;
    let tienda = req.body.tienda;
    let compratienda = req.body.compratienda;
    let precio = req.body.precio;
    let nota = req.body.nota;

    if(compratienda){
        compratienda = 1
    }else{
        compratienda = 0
    }

    let query = `CALL juego_reservado(${idjuego},"${nombre}","${tipo}",${consola},"${tienda}",${compratienda},${precio},"${nota}");`

    connection.query(query, (err, result) => {
        if(err){
            res.json(500, {
                msg: "Error al registrar la reserva"
            })
            return
        }

        res.json(200, {
            msg: "Reserva registrada"
        })        
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

