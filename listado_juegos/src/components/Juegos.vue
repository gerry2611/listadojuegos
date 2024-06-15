<template>
    <div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Acciones</th>
                    <th>Juego</th>
                    <th>Plataforma</th>
                </tr>
            </thead>
            <tbody style="color: #D1CBC8;">
                <tr v-for="juego in juegos" :key="juego.idjuegos">
                    <td></td>
                    <td>{{ juego.nombre }}</td>
                    <td>{{ juego.plataforma }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <br>
    <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal de Prueba</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Modal de Prueba
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="modalInsert" tabindex="-1" aria-labelledby="modalInsertLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalInsertLabel">Agregar Juego</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3">
                    <div class="row mt-2">
                        <div class="col-md-1">
                            <label for="" class="mt-1">Nombre</label>
                        </div>
                        <div class="col-md-2">
                            <input type="text" class="form-control" v-model="nombre" placeholder="Nombre del juego" />
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-1">
                            <label for="" class="mt-1">Consola</label>
                        </div>
                        <div class="col-md-2">
                            Inserte DD_Consolas
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-1">
                            <label for="" class="mt-1">Plataforma</label>
                        </div>
                        <div class="col-md-2">
                            Inserte DD_Plataformas
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-1">
                            <label for="" class="mt-1">Fecha Adquirido</label>
                        </div>
                        <div class="col-md-2">
                            <input type="date" class="form-control" placeholder="Fecha en el que se adquirió el juego (o se insertó a la BD)" v-model="fecha_adquirido"/>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-1">
                            <label for="" class="mt-1">Estado</label>
                        </div>
                        <div class="col-md-2">
                            Insertar Estado
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-1">
                            <label for="" class="mt-1">Completado</label>
                        </div>
                        <div class="col-md-2">
                            <input type="checkbox" name="" id="" class="form-control" v-model="completado">
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-1">
                            <label for="" class="mt-1">Fecha Completado</label>
                        </div>
                        <div class="col-md-2">
                            <input type="date" class="form-control" placeholder="Fecha en el que se completó el juego (o se insertó a la BD)" v-model="fecha_completado"/>
                        </div>                        
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-1">
                            <label for="" class="mt-1">Nota</label>
                        </div>
                        <div class="col-md-2">
                            <input type="textarea" name="" id="" class="form-control" v-model="nota"/>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-2">
                            <button class="btn btn-primary">Registrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
    <div class="btn-group">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalInsert">Insertar</button>
        <button type="button" class="btn btn-danger">Eliminar</button>
        <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">Modal</button>
    </div>



</template>

<script>
/* eslint-disable */
import axios from 'axios';

export default{
    name: "Juegos",
    data() {
        return {
            juegos: {},
            consolas: {}
        }
    },
    mounted(){
        this.cargaTablaJuegos();
    },
    methods: {
        cargaTablaJuegos: function(){
            axios.get("/api/juegos").then((res) => {
                this.juegos = res.data.data;
            })
            .catch(() => {
                console.log("Algo anda mal con la tabla 'listado_juegos'.");
                alert("Algo anda mal con la tabla 'listado_juegos'");
            })
        },
        cargaProcedimientos: function(){
            axios.get("/api/lista_consolas").then((res) => {
                this.consolas = res.data.data;
            })
            .catch(() => {
                console.log("Algo anda mal con el procedimiento DD_Consolas");
                alert("Algo anda mal con el procedimiento DD_Consolas");
            })
        }
    }
};
</script>