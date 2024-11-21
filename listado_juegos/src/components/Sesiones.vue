<template>
    <div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Sesión No.</th>
                    <th>Juego</th>
                    <th>Consola</th>
                    <th>Plataforma</th>
                    <th>Inicio</th>
                    <th>Fin</th>
                    <th>Duración</th>
                    <th>Demo</th>
                </tr>
            </thead>
            <tbody style="color: #D1CBC8;">
                <tr v-for="sesion in sesiones" :key="sesion.idsesion">
                    <td>{{ sesion.idsesion }}</td>
                    <td>{{ sesion.juego }}</td>
                    <td>{{ sesion.consola }}</td>
                    <td>{{ sesion.plataforma }}</td>
                    <td>{{ sesion.hora_inicio }}</td>
                    <td>{{ sesion.hora_fin }}</td>
                    <td>{{ sesion.duracion }}</td>
                    <td>{{ sesion.demo }}</td>
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
        <h5 class="modal-title" id="modalInsertLabel">Agregar Sesión</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="row mt-6">
                        <div class="col-md-3">
                            <label for="" class="mt-1">Juego</label>
                        </div>
                        <div class="col-md-9">
                            <select class="form-control" v-model="juego_sesion">
                                <option value="" selected disabled>Seleccione</option>
                                <option v-for="(titulo, index) in juego" :key="index" :value="{ID: titulo.idjuegos, consola: titulo.consola, plataforma: titulo.plataforma, idconsola: titulo.idconsola, idplataforma: titulo.idplataforma, nombre: titulo.nombre }">{{ titulo.nombre }}</option>
                                <option :value="{ID: 0}">Demo</option>
                            </select>
                        </div>
                    </div>
                    <br>
                    <br>
                    <div class="row mt-6">
                        <div class="col-md-3">
                            <label for="" class="mt-1">Consola</label>
                        </div>
                        <div class="col-md-9" v-if="juego_sesion.ID === 0">
                            <select class="form-control" v-model="consolademo">
                                <option value="" selected disabled>Seleccione</option>
                                <option v-for="(opcion, index) in lista_consola" :key="index" :value="opcion.idconsola">{{ opcion.nombre }}</option>
                            </select>
                        </div>
                        <div class="col-md-9" v-else>
                            <input type="text" class="form-control" v-model="consola" disabled>
                        </div>
                    </div>
                    <br>
                    <br>
                    <div class="row mt-6">
                        <div class="col-md-3">
                            <label for="" class="mt-1">Plataforma</label>
                        </div>
                        <div class="col-md-9" v-if="juego_sesion.ID === 0">
                            <select class="form-control" v-model="plataformademo" disabled>
                                <option :value="0" selected>Demo</option>
                            </select>
                        </div>
                        <div class="col-md-9" v-else>
                            <input type="text" class="form-control" v-model="plataforma" disabled>
                        </div>
                    </div>
                    <br>
                    <br>
                    <div class="row mt-6" v-if="juego_sesion.ID === 0">
                        <div class="col-md-3">
                            <label for="" class="mt-1">Demo</label>
                        </div>
                        <div class="col-md-9" v-if="juego_sesion.ID === 0">
                            <input type="text" class="form-control" v-model="demo">
                        </div>
                        <div class="col-md-9" v-else>
                            <input type="text" class="form-control" v-model="demo" disabled>
                        </div>
                    </div>
                    <br>
                    <br>
                </div>
            </div>
            <div v-if="ensesion">En sesión</div>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-success" @click="inicioSesion">Inicio</button>
        <button class="btn btn-warning" @click="finSesion">Fin</button>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>


<div class="btn-group">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalInsert">Insertar</button>
</div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
import {ref} from 'vue';


export default{
    name: "Sesiones",
    data() {
        return {
            sesiones: {},
            juego: {},
            juego_sesion: "",
            juego_electo: "",
            consola: "",
            demo: "",
            plataforma: "",
            idconsola: "",
            idplataforma: "",
            idjuego: "",
            lista_consola: {},
            lista_plataforma: {},
            consolademo: "",
            plataformademo: -1,
            ensesion: false
        }
    },
        mounted(){
            this.cargaTablaSesiones();
            this.cargaListaJuegos();
            this.cargaListadoConsola();          
        },
        watch: {
            juego_sesion(titulo){
                this.idjuego = titulo.ID
                this.consola = titulo.consola
                this.plataforma = titulo.plataforma
                this.idconsola = titulo.idconsola
                this.idplataforma = titulo.idplataforma
                this.juego_electo = titulo.nombre
            }
        },
        methods: {
            cargaTablaSesiones: function(){
                axios.get("/api/sesiones").then((res) => {
                    this.sesiones = res.data.data;
                })
                .catch(() => {
                    console.log("Algo anda mal con la tabla 'sesiones'");
                    alert("Algo anda mal con la tabla 'sesiones'");
                })
            },

            cargaListaJuegos: function(){
                axios.get("/api/lista_juegos").then((res) => {
                    this.juego = ref(res.data.data[0]);
                })
                .catch(() => {
                    console.log("Algo anda mal con el procedimiento DD_Juegos");
                    alert("Algo anda mal con el procedimiento DD_Juegos")
                })
            },
            cargaListadoConsola: function(){
            axios.get("/api/lista_consolas").then((res) => {
                this.lista_consola = ref(res.data.data[0]);
            })
            .catch(() => {
                console.log("Algo anda mal con el procedimiento DD_Consolas");
                alert("Algo anda mal con el procedimiento DD_Consolas");
            })
        },
        inicioSesion: function(){
            axios.post("/api/inicio_sesion", {
                id: this.idjuego,
                juego: this.juego_electo,
                idconsola: this.idconsola,
                idplataforma: this.idplataforma,
                demo: this.demo
            }).then((res) => {
                alert("Sesión iniciada");
                this.ensesion = true;
            }).catch(() => {
                alert("Error al iniciar sesión, intente de nuevo.")
            })
        },
        finSesion: function(){
            axios.post("/api/fin_sesion", {
                id: this.idjuego,
                juego: this.juego_electo
            }).then((res) => {
                alert("Ha finalizado la sesión");
                this.ensesion = false;
            }).catch(() => {
                alert("Error al finalizar la sesión, intente de nuevo.")
            })
        }
        }
};
</script>