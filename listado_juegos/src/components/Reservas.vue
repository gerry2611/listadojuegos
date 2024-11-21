<template>
    <div><button>Envíar a backlog</button></div>
    <div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Consola</th>
                    <th>Plataforma</th>
                    <th>Fecha Adquirido</th>
                    <th>Fecha de Lanzamiento</th>
                    <th>Estado</th>
                    <th>Nota</th>
                </tr>
            </thead>
            <tbody style="color: #D1CBC8;">
                <tr v-for="reserva in reservas" :key="reserva.idjuegos">
                    <td>{{ reserva.nombre }}</td>
                    <td>{{ reserva.tipo }}</td>
                    <td>{{reserva.consola}}</td>
                    <td>{{ reserva.plataforma }}</td>
                    <td>{{ reserva.fecha_adquirido }}</td>
                    <td>{{ reserva.fecha_disponible }}</td>
                    <td>{{ reserva.estado }}</td>
                    <td>{{ reserva.nota }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalReservaABacklog">Envíar a backlog</button></div>

    <!-- Modal -->
     <div class="modal fade" id="modalReservaABacklog" tabindex="-1" aria-labelledby="modalReservaABacklogLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalReservaABacklogLabel">Envíar a Backlog</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row mt-6">
                                    <div class="col-md-3">Juego Reservado</div>
                                    <div class="col-md-9">
                                        <select class="form-control" v-model="juego_reservado">
                                            <option :value={} selected disabled>Seleccione</option>
                                            <option v-for="opcion in reservas" :value="opcion" :key="opcion.idjuego">{{ opcion.nombre }}</option>
                                        </select>
                                    </div>
                                    {{ juego_reservado }}
                                </div>
                                <br>
                                <br>
                                <div class="row mt-6">
                                    <div class="col-md-3">
                                        <label for="" class="mt-1">Juego</label>
                                    </div>
                                    <div class="col-md-9">
                                        <label for="" class="mt-1">{{ juego_reservado.nombre }}</label>
                                    </div>
                                </div>
                                <br>
                                <br>                                
                                <div class="row mt-6">
                                    <div class="col-md-3">
                                        <label for="" class="mt-1">Consola</label>
                                    </div>
                                    <div class="col-md-9">
                                        <label for="" class="mt-1">{{ juego_reservado.consola }}</label>
                                    </div>
                                </div>
                                <br>
                                <br>
                                <div class="row mt-6">
                                    <div class="col-md-3">
                                        <label for="" class="mt-1">Plataforma</label>
                                    </div>
                                    <div class="col-md-9">
                                        <label for="" class="mt-1">{{ juego_reservado.plataforma }}</label>
                                    </div>
                                </div>
                                <br>
                                <br>
                                <div class="row mt-6">
                                    <div class="col-md-3">
                                        <label for="" class="mt-1">Tienda</label>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="text" v-model="tienda" :hidden="!reserva_tienda">
                                    </div>
                                    <div class="col-md-3">
                                        <label for="" class="mt-1" :hidden="juego_reservado.nombre == null">Reserva en tienda</label>
                                        &nbsp;
                                        <input type="checkbox" v-model="reserva_tienda" :hidden="juego_reservado.nombre == null">
                                    </div>
                                </div>
                                <br>
                                <br>
                                <div class="row mt-6">
                                    <div class="col-md-3">
                                        <label for="" class="mt-1">Precio</label>
                                    </div>
                                    <div class="col-md-9">
                                        <label for="" class="mt-1" v-if="juego_reservado.nombre != null" :hidden="reserva_tienda">{{ juego_reservado.precio }}</label>
                                        <input type="text" v-model="precio_reservado" v-if="reserva_tienda && juego_reservado.nombre != null" :hidden="!reserva_tienda">
                                    </div>
                                </div>
                                <br>
                                <br>
                                <div class="row mt-6">
                                    <div class="col-md-3">
                                        <label for="" class="mt-1">Fecha de la reserva</label>
                                    </div>
                                    <div class="col-md-9">
                                        <label for="" class="mt-1">{{ juego_reservado.fecha_adquirido }}</label>
                                        <input type="date" class="form-control" v-model="fecha_reserva" hidden/>
                                    </div>
                                </div>
                                <br>
                                <br>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="enviarABacklog">Envíar</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
     </div>
</template>

<script>
/* eslint-disable */

import axios from 'axios';
export default {
    name: "Reservas",
    data(){
        return{
            reservas: {},
            juego_reservado: {},
            idjuego: "",
            nombre_reservado: "",
            idconsola: "",
            idplataforma: "",
            precio_reservado: "",
            reserva_tienda: null,
            fecha_reserva: "",
            tienda: ""
        }
    },
    mounted(){this.cargaTablaReservas()},
    watch: {
        juego_reservado(val){
            this.idjuego = this.juego_reservado.idjuegos
            this.nombre_reservado = this.juego_reservado.nombre
            this.idconsola = this.juego_reservado.idconsola
            this.idplataforma = this.juego_reservado.idplataforma
            this.fecha_reserva = this.juego_reservado.fecha_adquirido_edit
        }
    },
    methods: {
        cargaTablaReservas: function(){
            axios.get("/api/lista_reservados").then((res) => {
                this.reservas = res.data.data;
            })
            .catch(() => {
                console.log("Algo anda mal con la tabla");
                alert("Algo anda mal con la tabla.")
            })
        },
        enviarABacklog: function(){
            axios.post("/api/reserva_a_backlog", {
                id: this.idjuego,
                nombre: this.nombre_reservado,
                IDConsola: this.idconsola,
                IDPlataforma: this.idplataforma,
                precio: this.precio_reservado,
                reservatienda: this.reserva_tienda,
                tienda: this.tienda,
                fecha_reservado: this.fecha_reserva
            }).then((res) => {
                alert("Envíado al Backlog");
                this.idjuego = 0
                this.nombre_reservado = ""
                this.idconsola = ""
                this.idplataforma = ""
                this.precio_reservado = ""
                this.reserva_tienda = false
                this.tienda = ""
                this.fecha_reserva = ""
                this.juego_reservado = {}
            }).catch(() => {
                alert("Error al envíar al backlog");
            })
        }
    }
}
</script>