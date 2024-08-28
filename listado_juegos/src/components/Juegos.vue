<template>
    <div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Juego</th>
                    <th>Consola</th>
                    <th>Plataforma</th>
                    <th>Fecha Adquirido</th>
                    <th>Estado</th>
                    <th>Completado</th>
                    <th>Fecha Completado</th>
                    <th>Nota</th>
                </tr>
            </thead>
            <tbody style="color: #D1CBC8;">
                <tr v-for="juego in juegos" :key="juego.idjuegos">
                    <td>{{ juego.nombre }}</td>
                    <td>{{ juego.consola }}</td>
                    <td>{{ juego.plataforma }}</td>
                    <td>{{ juego.fecha_adquirido }}</td>
                    <td>{{ juego.estado }}</td>
                    <td><input type="checkbox" :checked="juego.completado" disabled></td>
                    <td>{{ juego.fecha_completado }}</td>
                    <td>{{ juego.nota }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <br>
    <!-- Modal -->
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
                            <div class="form-check form-check-inline">
                                <input type="radio" class="form-check-input" name="estado" v-model="estado" id="estadoWishlist" value="Wishlist">
                                <label class="form-check-label" for="estadoWishlist"><span class="badge rounded-pill bg-light text-dark">Wishlist</span></label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="radio" class="form-check-input" name="estado" v-model="estado" id="estadoActivo" value="Activo">
                                <label class="form-check-label" for="estadoActivo"><span class="badge rounded-pill bg-success">Activo</span></label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="radio" class="form-check-input" name="estado" v-model="estado" id="estadoBacklog" value="Backlog">
                                <label class="form-check-label" for="estadoBacklog"><span class="badge rounded-pill bg-primary">Backlog</span></label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="radio" class="form-check-input" name="estado" v-model="estado" id="estadoPausa" value="En pausa">
                                <label class="form-check-label" for="estadoPausa"><span class="badge rounded-pill bg-warning text-dark">En pausa</span></label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="radio" class="form-check-input" name="estado" v-model="estado" id="estadoCompletado" value="Completado">
                                <label class="form-check-label" for="estadoCompletado"><span class="badge rounded-pill bg-danger">Completado</span></label>
                            </div>
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
        <button class="btn btn-primary" @click="agregarJuego">Registrar</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>
    <div class="btn-group">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalInsert">Insertar</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalEdit">Editar</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-secondary" data-bs-toggle="modal" disabled>Borrar</button>
    </div>

<div class="modal fade" id="modalEdit" tabindex="-1" aria-labelledby="modalEditLabel" aria-hidden="true">
    <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalEditLabel">Editar Juego</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="row mt-6">
                        <div class="col-md-3">
                            <label for="" class="mt-1">Juego a Editar</label>
                        </div>
                        <div class="col-md-9">
                            <select class="form-control" v-model="juego_aeditar">
                                <option value="" selected>Seleccione</option>
                                <option v-for="opcion in juegos" :value="opcion" :key="opcion.idjuegos">{{ opcion.nombre }}</option>
                            </select>
                            
                        </div>
                    </div>
                    <br>
                    <div class="row mt-6">
                        <div class="col-md-3">
                            <label for="" class="mt-1">Nombre</label>
                        </div>
                        <div class="col-md-9">
                            <input type="text" class="form-control" :value="nombreEdit" placeholder="Nombre del juego" />
                        </div>
                    </div>
                    <br>
                    <br>
                    <div class="row mt-6">
                        <div class="col-md-3">
                            <label for="" class="mt-1">Consola</label>
                        </div>
                        <div class="col-md-9">
                            <select class="form-control" :value="lista_consolaEdit">
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
                            <select class="form-control" :value="lista_plataformaEdit">
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
                            <input type="date" class="form-control" placeholder="Fecha en el que se adquirió el juego (o se insertó a la BD)" v-model="fecha_adquiridoEdit"/>
                        </div>
                    </div>
                    <br>
                    <br>
                    <div class="row mt-6">
                        <div class="col-md-3">
                            <label for="" class="mt-1">Estado</label>
                        </div>
                        <div class="col-md-9">
                            <div class="form-check form-check-inline">
                                <input type="radio" class="form-check-input" name="estado" v-model="estadoEdit" id="estadoWishlist" value="Wishlist">
                                <label class="form-check-label" for="estadoWishlist"><span class="badge rounded-pill bg-light text-dark">Wishlist</span></label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="radio" class="form-check-input" name="estado" v-model="estadoEdit" id="estadoActivo" value="Activo">
                                <label class="form-check-label" for="estadoActivo"><span class="badge rounded-pill bg-success">Activo</span></label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="radio" class="form-check-input" name="estado" v-model="estadoEdit" id="estadoBacklog" value="Backlog">
                                <label class="form-check-label" for="estadoBacklog"><span class="badge rounded-pill bg-primary">Backlog</span></label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="radio" class="form-check-input" name="estado" v-model="estadoEdit" id="estadoPausa" value="En pausa">
                                <label class="form-check-label" for="estadoPausa"><span class="badge rounded-pill bg-warning text-dark">En pausa</span></label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="radio" class="form-check-input" name="estado" v-model="estadoEdit" id="estadoCompletado" value="Completado">
                                <label class="form-check-label" for="estadoCompletado"><span class="badge rounded-pill bg-danger">Completado</span></label>
                            </div>
                        </div>
                    </div>
                    <br>
                    <br>
                    <div class="row mt-6">
                        <div class="col-md-3">
                            <label for="" class="mt-1">Completado</label>
                        </div>
                        <div class="col-md-1">
                            <input type="checkbox" name="" id="" class="form-check-input" v-model="completadoEdit" :checked="completadoEdit">
                        </div>
                    </div>
                    <br>
                    <br>
                    <div class="row mt-6">
                        <div class="col-md-3">
                            <label for="" class="mt-1">Fecha Completado</label>
                        </div>
                        <div class="col-md-9">
                            <input type="date" class="form-control" placeholder="Fecha en el que se completó el juego (o se insertó a la BD)" v-model="fecha_completadoEdit"/>
                        </div>                        
                    </div>
                    <br>
                    <br>
                    <div class="row mt-6">
                        <div class="col-md-3">
                            <label for="" class="mt-1">Nota</label>
                        </div>
                        <div class="col-md-9">
                            <input type="textarea" name="" id="" class="form-control" v-model="notaEdit"/>
                        </div>
                    </div>
                    <br>
                    <br>
                </div>
            </div>
        </div>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" @click="editarJuego">Editar</button>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
        </div>
    </div>
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
           estado: "",
           completado: "",
           fecha_completado: "",
           nota: "",
           juego_aeditar: {},
           idjuego: "",
           nombreEdit: "",
           lista_consolaEdit: "",
           lista_plataformaEdit: "",
           fecha_adquiridoEdit: "",
           estadoEdit: "",
           completadoEdit: "",
           fecha_completadoEdit: "",
           notaEdit: ""
        }
    },
    watch: {
        juego_aeditar(val){
            this.idjuego = this.juego_aeditar.idjuegos
            this.nombreEdit = this.juego_aeditar.nombre
            this.lista_consolaEdit = this.juego_aeditar.idconsola
            this.lista_plataformaEdit = this.juego_aeditar.idplataforma
            this.fecha_adquiridoEdit = this.juego_aeditar.fecha_adquirido_edit
            this.estadoEdit = this.juego_aeditar.estado
            this.completadoEdit = this.juego_aeditar.completado
            this.fecha_completadoEdit = this.juego_aeditar.fecha_completado_edit
            this.notaEdit = this.juego_aeditar.nota
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
        },
        agregarJuego: function(){
            axios.post("/api/juego_nuevo", {
                nombre: this.nombre,
                idconsola: this.lista_consola,
                idplataforma: this.lista_plataforma,
                fecha_adquirido: this.fecha_adquirido,
                estado: this.estado,
                completado: this.completado,
                fecha_completado: this.fecha_completado,
                nota: this.nota
            }).then((res) => {
                alert("Juego guardado con éxito en la Base de datos");
            }).catch(() => {
                alert("Error al agregar el juego, intente más tarde");
            })
        },
        editarJuego: function(){
            axios.post("api/editar_juego", {
                idjuego: this.idjuego,
                nombre: this.nombreEdit,
                idconsola: this.lista_consolaEdit,
                idplataforma: this.lista_plataformaEdit,
                fecha_adquirido: this.fecha_adquiridoEdit,
                estado: this.estadoEdit,
                completado: this.completadoEdit,
                fecha_completado: this.fecha_completadoEdit,
                nota: this.notaEdit
            }).then((res) => {
                alert("Juego editado con éxito en la Base de datos");
            }).catch(() => {
                alert("Error al editar el juego, intente más tarde");
            })
        }
    },
};
</script>
