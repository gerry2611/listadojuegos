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
    <div class="modal-dialog modal-fullscreen">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalInsertLabel">Agregar Juego</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="row mt-6">
                        <div class="col-md-3">
                            <label for="" class="mt-1">Nombre</label>
                        </div>
                        <div class="col-md-9">
                            <input type="text" class="form-control" v-model="nombre" placeholder="Nombre del juego" />
                        </div>
                    </div>
                    <br>
                    <br>
                    <div class="row mt-6">
                        <div class="col-md-3">
                            <label for="" class="mt-1">Consola</label>
                        </div>
                        <div class="col-md-9">
                            <select class="form-control" v-model="lista_consola">
                                <option value="" selected disabled>Seleccione</option>
                                <option v-for="(opcion, index) in consolas" :key="index" :value="opcion.idconsola">{{ opcion.nombre }}</option>
                            </select>
                        </div>
                    </div>
                    <br>
                    <br>
                    <div class="row mt-6">
                        <div class="col-md-3">
                            <label for="" class="mt-1">Plataforma</label>
                        </div>
                        <div class="col-md-9">
                            <select class="form-control" v-model="lista_plataforma">
                                <option value="" selected disabled>Seleccione</option>
                                <option v-for="(opcion, index) in plataformas" :key="index" :value="opcion.idplataforma">{{ opcion.nombre }}</option>
                            </select>
                        </div>
                    </div>
                    <br>
                    <br>
                    <div class="row mt-6">
                        <div class="col-md-3">
                            <label for="" class="mt-1">Fecha Adquirido</label>
                        </div>
                        <div class="col-md-9">
                            <input type="date" class="form-control" placeholder="Fecha en el que se adquirió el juego (o se insertó a la BD)" v-model="fecha_adquirido"/>
                        </div>
                    </div>
                    <br>
                    <br>
                    <div class="row mt-6">
                        <div class="col-md-3">
                            <label for="" class="mt-1">Estado</label>
                        </div>
                        <div class="col-md-9">
                            Insertar Estado
                        </div>
                    </div>
                    <br>
                    <br>
                    <div class="row mt-6">
                        <div class="col-md-3">
                            <label for="" class="mt-1">Completado</label>
                        </div>
                        <div class="col-md-1">
                            <input type="checkbox" name="" id="" class="form-check-input" v-model="completado">
                        </div>
                    </div>
                    <br>
                    <br>
                    <div class="row mt-6">
                        <div class="col-md-3">
                            <label for="" class="mt-1">Fecha Completado</label>
                        </div>
                        <div class="col-md-9">
                            <input type="date" class="form-control" placeholder="Fecha en el que se completó el juego (o se insertó a la BD)" v-model="fecha_completado"/>
                        </div>                        
                    </div>
                    <br>
                    <br>
                    <div class="row mt-6">
                        <div class="col-md-3">
                            <label for="" class="mt-1">Nota</label>
                        </div>
                        <div class="col-md-9">
                            <input type="textarea" name="" id="" class="form-control" v-model="nota"/>
                        </div>
                    </div>
                    <br>
                    <br>
                </div>
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary">Registrar</button>
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
import {ref} from 'vue';
export default{
    name: "Juegos",
    data() {
        return {
            juegos: {},
           consolas: {},
           plataformas: {},
           nombre: "",
           lista_consola: "",
           lista_plataforma: "",
           fecha_adquirido: "",
           completado: "",
           fecha_completado: "",
           nota: ""
        }
    },
    mounted(){
        this.cargaTablaJuegos();
        this.cargaListadoConsola();
        this.cargaListadoPlataforma();
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
        cargaListadoConsola: function(){
            axios.get("/api/lista_consolas").then((res) => {
                this.consolas = ref(res.data.data[0]);
            })
            .catch(() => {
                console.log("Algo anda mal con el procedimiento DD_Consolas");
                alert("Algo anda mal con el procedimiento DD_Consolas");
            })
        },
        cargaListadoPlataforma: function(){
            axios.get("/api/lista_plataformas").then((res) => {
                this.plataformas = ref(res.data.data[0]);
            })
            .catch(() => {
                console.log("Algo anda mal con el procedimiento DD_Plataformas");
                alert("Algo anda mal con el procedimiento DD_Plataformas");
            })
        }
    }
};
</script>