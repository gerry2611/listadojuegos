<template>
    <div style="padding: 10px; text-align: center;">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalAgregar">Agregar juego</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalEditar">Editar juego</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalCompra">Registrar compra</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalReserva">Registrar reserva</button>
    </div>
    <div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Juego</th>
                    <th>Tipo</th>
                    <th>Consola</th>
                    <th>Tienda</th>
                    <th>Fecha Lanzamiento</th>
                    <th>Precio</th>
                    <th>Precio Tiendas</th>
                    <th>Nota</th>
                </tr>
            </thead>
            <tbody style="color: #D1CBC8;">
                <tr v-for="juego in juegos" :key="juego.id">
                    <td>{{ juego.nombre }}</td>
                    <td>{{ juego.tipo }}</td>
                    <td>{{ juego.consola }}</td>
                    <td>{{ juego.tienda }}</td>
                    <td v-if="juego.fecha_lan != null">{{ juego.fecha_lan }}</td><td v-else>Proximamente</td>
                    <td v-if="juego.fecha_lan != null">${{ juego.precio }}</td><td v-else>Proximamente</td>
                    <td v-if="juego.precio_tienda != null">${{ juego.precio_tienda }}</td><td v-else>No disponible</td>
                    <td>{{ juego.nota }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div style="padding: 10px; text-align: center;">
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalAgregar">Agregar juego</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalEditar">Editar juego</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalCompra">Registrar compra</button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalReserva">Registrar reserva</button>
    </div>

    <!-- Modal -->
     <div class="modal fade" id="modalAgregar" tabindex="-1" aria-labelledby="modalAgregarLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalAgregarLabel">Agregar Juego</h5>
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
                                    <div class="col-md-3">Tipo</div>
                                    <div class="col-md-9">
                                        <div class="form-check form-check-inline">
                                            <input type="radio" name="tipo" v-model="tipoJuego" value="Juego">
                                            &nbsp;
                                            <label class="form-check-label"><span class="badge rounded-pill bg-primary">Juego</span></label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input type="radio" name="tipo" v-model="tipoJuego" value="Complemento">
                                            &nbsp;
                                            <label class="form-check-label"><span class="badge rounded-pill bg-primary">Complemento</span></label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input type="radio" name="tipo" v-model="tipoJuego" value="Paquete">
                                            &nbsp;
                                            <label class="form-check-label"><span class="badge rounded-pill bg-primary">Paquete</span></label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input type="radio" name="tipo" v-model="tipoJuego" value="Pase de batalla">
                                            &nbsp;
                                            <label class="form-check-label"><span class="badge rounded-pill bg-primary">Pase de batalla</span></label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input type="radio" name="tipo" v-model="tipoJuego" value="Otro">
                                            &nbsp;
                                            <label class="form-check-label"><span class="badge rounded-pill bg-primary">Otro</span></label>
                                        </div>                                                                                
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
                                        <label for="" class="mt-1">Tienda</label>
                                    </div>
                                    <div class="col-md-9">
                                        <select class="form-control" v-model="lista_tiendas">
                                            <option value="" selected disabled>Seleccione</option>
                                            <option value="Nintendo eShop">Nintendo eShop</option>
                                            <option value="Playstation Store">Playstation Store</option>
                                            <option value="Steam">Steam</option>
                                            <option value="Epic Games Store">Epic Games Store</option>
                                            <option value="App Store">App Store</option>
                                            <option value="Mac App Store">Mac App Store</option>
                                        </select>
                                    </div>
                                </div>
                                <br>
                                <br>
                                <div class="row mt-6">
                                    <div class="col-md-3">
                                        <label for="" class="mt-1">Fecha Lanzamiento</label>
                                    </div>
                                    <div class="col-md-9">
                                        <input type="date" class="form-control" placeholder="Fecha en el que se adquirió el juego (o se insertó a la BD)" v-model="fecha_lanzado"/>
                                    </div>
                                </div>
                                <br>
                                <br>
                                <div class="row mt-6">
                                    <div class="col-md-3">
                                        <label for="" class="mt-1">Precio</label>
                                    </div>
                                    <div class="col-md-9">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text">$</span>
                                            <input type="text" class="form-control" v-model="precio">
                                        </div>
                                    </div>
                                </div>
                                <br>
                                <br>
                                <div class="row mt-6">
                                    <div class="col-md-3">
                                        <label for="" class="mt-1">Nota</label>
                                    </div>
                                    <div class="col-md-9">
                                        <textarea class="form-control" v-model="nota"></textarea>
                                    </div>
                                </div>
                                <br>
                                <br>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="agregarJuego">Registrar</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
     </div>
     <div class="modal fade" id="modalEditar" tabindex="-1" aria-labelledby="modalEditarLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalEditarLabel">Editar Juego</h5>
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
                                            <option :value={} selected disabled>Seleccione</option>
                                            <option v-for="opcion in juegos" :value="opcion" :key="opcion.id">{{ opcion.nombre }}</option>
                                        </select>
                                    </div>
                                </div>
                                <br>                                
                                <div class="row mt-6">
                                    <div class="col-md-3">
                                        <label for="" class="mt-1">Nombre</label>
                                    </div>
                                    <div class="col-md-9">
                                        <input type="text" class="form-control" v-model="nombreEdit" placeholder="Nombre del juego" />
                                    </div>
                                </div>
                                <br>
                                <br>
                                <div class="row mt-6">
                                    <div class="col-md-3">Tipo</div>
                                    <div class="col-md-9">
                                        <div class="form-check form-check-inline">
                                            <input type="radio" name="tipo" v-model="tipoJuego" value="Juego">
                                            <label class="form-check-label"><span class="badge rounded-pill bg-primary">Juego</span></label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input type="radio" name="tipo" v-model="tipoJuego" value="Complemento">
                                            <label class="form-check-label"><span class="badge rounded-pill bg-primary">Complemento</span></label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input type="radio" name="tipo" v-model="tipoJuego" value="Paquete">
                                            <label class="form-check-label"><span class="badge rounded-pill bg-primary">Paquete</span></label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input type="radio" name="tipo" v-model="tipoJuego" value="Pase de batalla">
                                            <label class="form-check-label"><span class="badge rounded-pill bg-primary">Pase de batalla</span></label>
                                        </div>
                                        <div class="form-check form-check-inline">
                                            <input type="radio" name="tipo" v-model="tipoJuego" value="Otro">
                                            <label class="form-check-label"><span class="badge rounded-pill bg-primary">Otro</span></label>
                                        </div>                                                                                
                                    </div>
                                </div>                                
                                <div class="row mt-6">
                                    <div class="col-md-3">
                                        <label for="" class="mt-1">Consola</label>
                                    </div>
                                    <div class="col-md-9">
                                        <select class="form-control" v-model="lista_consolaEdit">
                                            <option value="" selected disabled>Seleccione</option>
                                            <option v-for="(opcion, index) in consolas" :key="index" :value="opcion.idconsola">{{ opcion.nombre }}</option>
                                        </select>
                                    </div>
                                </div>
                                <br>
                                <br>
                                <div class="row mt-6">
                                    <div class="col-md-3">
                                        <label for="" class="mt-1">Tienda</label>
                                    </div>
                                    <div class="col-md-9">
                                        <select class="form-control" v-model="lista_tiendasEdit">
                                            <option value="" selected disabled>Seleccione</option>
                                            <option value="Nintendo eShop">Nintendo eShop</option>
                                            <option value="Playstation Store">Playstation Store</option>
                                            <option value="Steam">Steam</option>
                                            <option value="Epic Games Store">Epic Games Store</option>
                                            <option value="App Store">App Store</option>
                                            <option value="Mac App Store">Mac App Store</option>
                                        </select>
                                    </div>
                                </div>
                                <br>
                                <br>
                                <div class="row mt-6">
                                    <div class="col-md-3">
                                        <label for="" class="mt-1">Fecha Lanzamiento</label>
                                    </div>
                                    <div class="col-md-9">
                                        <input type="date" class="form-control" v-model="fecha_lanEdit"/>
                                    </div>
                                </div>
                                <br>
                                <br>
                                <div class="row mt-6">
                                    <div class="col-md-3">
                                        <label for="" class="mt-1">Precio</label>
                                    </div>
                                    <div class="col-md-9">
                                        <div class="input-group mb-3">
                                            <span class="input-group-text">$</span>
                                            <input type="text" class="form-control" v-model="precioEdit">
                                        </div>
                                    </div>
                                </div>
                                <br>
                                <br>
                                <div class="row mt-6">
                                    <div class="col-md-3">
                                        <label for="" class="mt-1">Nota</label>
                                    </div>
                                    <div class="col-md-9">
                                        <textarea class="form-control" v-model="notaEdit"></textarea>
                                    </div>
                                </div>
                                <br>
                                <br>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="editarJuego">Editar</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>                     
                </div>
            </div>
        </div>
     </div>
     <div class="modal fade" id="modalCompra" tabindex="-1" aria-labelledby="modalCompraLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalCompraLabel">Registro de compra</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row mt-6">
                                    <div class="col-md-3">
                                        <label for="" class="mt-1">Juego Comprado</label>
                                    </div>
                                    <div class="col-md-9">
                                        <select class="form-control" v-model="juego_comprado">
                                            <option :value={} selected disabled>Seleccione</option>
                                            <option v-for="opcion in juegos" :value="opcion" :key="opcion.id">{{ opcion.nombre }}</option>
                                        </select>
                                    </div>
                                </div>
                                <br>
                                <br>
                                <div class="row mt-6">
                                    <div class="col-md-3">
                                        <label for="" class="mt-1">Consola</label>
                                    </div>
                                    <div class="col-md-9">
                                        <label for="" class="mt-1">{{ juego_comprado.consola }}</label>
                                        <input type="text" v-model="consolaid" hidden>
                                    </div>
                                </div>
                                <div class="row mt-6">
                                    <div class="col-md-3">
                                        <label for="" class="mt-1">Tienda</label>
                                    </div>
                                    <div class="col-md-6" v-if="consolaid === 4 || consolaid === 8">
                                        <select class="form-control" v-model="lista_plataformapc_compra">
                                            <option :value={} selected disabled>Seleccione</option>
                                            <option v-for="(opcion, index) in plataformapc" :key="index" :value="opcion.idplataforma">{{ opcion.nombre }}</option>
                                        </select>
                                        <input type="text" v-model="tiendacompra" hidden>
                                    </div>
                                    <div class="col-md-6" v-else>
                                        <label for="" class="mt-1" :hidden="compra_tienda">{{ juego_comprado.tienda }}</label>
                                        <input type="text" v-model="tiendacompra" :hidden="!compra_tienda">
                                    </div>
                                    <div class="col-md-3">
                                        <label for="" class="mt-1" :hidden="juego_comprado.nombre == null">Compra en tienda</label>
                                        &nbsp;
                                        <input type="checkbox" v-model="compra_tienda" :hidden="juego_comprado.nombre == null" :disabled="consolaid === 4 || consolaid === 8">
                                    </div>                                    
                                </div>
                                <div class="row mt-6">
                                    <div class="col-md-3">
                                        <label for="" class="mt-1">Precio</label>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="" class="mt-1" v-if="juego_comprado.nombre != null" :hidden="compra_tienda">${{ juego_comprado.precio }}</label>
                                        <input type="text" v-model="precio_juegocomprado" hidden>
                                        <input type="text" v-model="precio_juegocomprado" v-if="compra_tienda && juego_comprado.nombre != null" :hidden="!compra_tienda">
                                    </div>
                                    <div class="col-md-3">
                                        <label for="" class="mt-1">Precio en oferta</label>
                                        &nbsp;
                                        <input type="checkbox" v-model="precio_oferta">
                                    </div>
                                </div>
                                <div class="row mt-6" v-if="precio_oferta">
                                    <div class="col-md-3">
                                        Descuento
                                    </div>
                                    <div class="col-md-9">
                                        <input type="text" v-model="descuento">
                                    </div>
                                </div>
                                <div class="row mt-6" v-if="precio_oferta">
                                    <div class="col-md-3">Precio regular</div>
                                    <div class="col-md-9">
                                        <input type="text" v-model="precio_regular">
                                    </div>
                                </div>
                                <br>
                                <br>
                                <div class="row mt-6">
                                    <div class="col-md-3">
                                        <label for="" class="mt-1">Nota</label>
                                    </div>
                                    <div class="col-md-9">
                                        <textarea class="form-control" v-model="nota" :hidden="juego_comprado.nombre == null" ></textarea>
                                    </div>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="juegoComprado">Registrar</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>                    
                </div>
            </div>
        </div>
     </div>
     <div class="modal fade" id="modalReserva" tabindex="-1" aria-labelledby="modalReservaLabel" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalReservaLabel">Registro de reserva</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row mt-6">
                                    <div class="col-md-3">
                                        <label for="" class="mt-1">Juego Reservado</label>
                                    </div>
                                    <div class="col-md-9">
                                        <select class="form-control" v-model="juego_reservado">
                                            <option :value={} selected disabled>Seleccione</option>
                                            <option v-for="opcion in juegos" :value="opcion" :key="opcion.id">{{ opcion.nombre }}</option>
                                        </select>
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
                                        <input type="text" v-model="consolaid" hidden>
                                    </div>
                                </div>
                                <div class="row mt-6">
                                    <div class="col-md-3">
                                        <label for="" class="mt-1">Tienda</label>
                                    </div>
                                    <div class="col-md-6">
                                        <label for="" class="mt-1">{{ juego_reservado.tienda }}</label>
                                        <input type="text" v-model="tiendareserva" hidden>
                                    </div>
                                    <div class="col-md-3">
                                        <label for="" class="mt-1" :hidden="juego_reservado.nombre == null">Compra en tienda</label>
                                        &nbsp;
                                        <input type="checkbox" v-model="reserva_tienda" :hidden="juego_reservado.nombre == null">
                                    </div>                                    
                                </div>
                                <div class="row mt-6">
                                    <div class="col-md-3">
                                        <label for="" class="mt-1">Precio</label>
                                    </div>
                                    <div class="col-md-9">
                                        <label for="" class="mt-1" v-if="juego_reservado.nombre != null">${{ juego_reservado.precio }}</label>
                                        <input type="text" v-model="precio_juegoreservado" hidden>
                                        <input type="text" v-model="precio_juegoreservado" v-if="reserva_tienda && juego_reservado.nombre != null" :hidden="!reserva_tienda">
                                    </div>
                                </div>
                                <div class="row mt-6">
                                    <div class="col-md-3">
                                        <label for="" class="mt-1">Nota</label>
                                    </div>
                                    <div class="col-md-9">
                                        <textarea class="form-control" v-model="nota" :hidden="juego_comprado.nombre == null" ></textarea>
                                    </div>
                                </div>                                   
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Registrar</button>
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
    name: "Wishlist",
    data() {
        return {
            juegos: {},
           consolas: {},
           plataformas: {},
           nombre: "",
           tipoJuego: "",
           lista_consola: "",
           lista_tiendas: "",
           fecha_lanzado: "",
           precio: "",
           precio_tienda: "",
           comprado: "",
           reservado: "",
           nota: "",
           juego_aeditar: {},
           idjuego: "",
           nombreEdit: "",
           lista_consolaEdit: "",
           lista_tiendasEdit: "",
           fecha_lanEdit: "",
           precioEdit: "",
           precio_tiendaEdit: "",
           notaEdit: "",
           juego_comprado: {},
           juego_reservado: {},
           compra_tienda: false,
           reserva_tienda: false,
           nombre_compra: "",
           consolaid: "",
           tiendacompra: "",
           precio_juegocomprado: "",
           nombre_reserva: "",
           tiendareserva: "",
           precio_juegoreservado: "",
           plataformapc: {},
           lista_plataformapc_compra: {},
           lista_plataformapc_reserva: {},
           precio_oferta: false,
           descuento: "",
           precio_regular: ""
        }
    },
    mounted(){
        this.cargaTablaDeseados();
        this.cargaListadoConsola();
        this.cargaListadoPlataforma();
        this.cargaListadoPC();
    },
    watch: {
        juego_aeditar(val){
            this.idjuego = this.juego_aeditar.id
            this.nombreEdit = this.juego_aeditar.nombre
            this.lista_consolaEdit = this.juego_aeditar.idconsola
            this.lista_tiendasEdit = this.juego_aeditar.tienda
            this.fecha_lanEdit = this.juego_aeditar.fecha_lan_edit
            this.precioEdit = this.juego_aeditar.precio
            this.precio_tiendaEdit = this.juego_aeditar.precio_tienda
            this.notaEdit = this.juego_aeditar.nota
        },
        juego_comprado(val){
            this.idjuego = this.juego_comprado.id
            this.nombre_compra = this.juego_comprado.nombre
            this.consolaid = this.juego_comprado.idconsola
            this.tiendacompra = this.juego_comprado.tienda
            this.precio_juegocomprado = this.juego_comprado.precio
        },
        juego_reservado(val){
            this.idjuego = this.juego_reservado.id
            this.nombre_reserva = this.juego_reservado.nombre
            this.consolaid = this.juego_reservado.idconsola
            this.tiendareserva = this.juego_reservado.tienda
            this.precio_juegoreservado = this.juego_reservado.precio
        },
        lista_plataformapc(val){
            this.tiendacompra = this.lista_plataformapc.nombre
        }
    },
    methods: {
        cargaTablaDeseados: function(){
            axios.get("/api/lista_deseados").then((res) => {
                this.juegos = res.data.data;
            })
            .catch(() => {
                console.log("Algo anda mal con la tabla 'listado_deseados'.");
                alert("Algo anda mal con la tabla 'listado_deseados'");
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
        cargaListadoPC: function(){
            axios.get("/api/lista_plataformas_pc").then((res) => {
                this.plataformapc = ref(res.data.data[0]);
            })
            .catch(() => {
                console.log("Algo anda mal con el procedimiento DD_Plataformas_PC");
                alert("Algo anda mal con el procedimiento DD_Plataformas_PC");
            })
        },
        agregarJuego: function(){
            axios.post("/api/agregar_juego_deseado", {
                nombre: this.nombre,
                tipo: this.tipoJuego,
                idconsola: this.lista_consola,
                tienda: this.lista_tiendas,
                fecha_lanzamiento: this.fecha_lanzado,
                precio: this.precio,
                nota: this.nota
            }).then((res) => {
                alert("Juego guardado con éxito en la lista de deseos");
                this.nombre = ""
                this.tipoJuego = ""
                this.lista_consola = ""
                this.lista_tiendas = ""
                this.fecha_lanzado = ""
                this.precio = ""
                this.nota = ""
            }).catch(() => {
                alert("Error al agregar el juego, intente más tarde");
            })
        },
        editarJuego: function(){
            axios.post("/api/editar_juego_deseado", {
                idjuego: this.idjuego,
                nombre: this.nombreEdit,
                tipo: this.tipoJuego,
                idconsola: this.lista_consolaEdit,
                tienda: this.lista_tiendasEdit,
                fecha_lan: this.fecha_lanEdit,
                precio: this.precioEdit,
                nota: this.notaEdit
            }).then((res) => {
                alert("Juego editado con éxito en la lista de deseos.");
                this.idjuego = 0
                this.nombreEdit = ""
                this.tipoJuego = ""
                this.lista_consolaEdit = ""
                this.lista_tiendasEdit = ""
                this.fecha_lanEdit = ""
                this.precioEdit = ""
                this.notaEdit = ""
            }).catch(() => {
                alert("Error al editar el juego, intente más tarde");
            })
        },
        juegoComprado: function(){
            axios.post("/api/registrar_compra", {
                idjuego: this.idjuego,
                nombre: this.nombre_compra,
                consola: this.consolaid,
                tienda: this.tiendacompra,
                compratienda: this.compra_tienda,
                precio: this.precio_juegocomprado,
                precio_oferta: this.precio_oferta,
                descuento: this.descuento,
                precio_regular: this.precio_regular,
                nota: this.nota
            }).then((res) => {
                alert("Compra registrada con éxito.");
                this.juego_comprado = {}
                this.idjuego = 0
                this.nombre_compra = ""
                this.consolaid = ""
                this.tiendacompra = ""
                this.compra_tienda = false
                this.precio = ""
                this.descuento = ""
                this.precio_regular = ""
                this.nota = ""
                this.precio_oferta = false
            }).catch(() => {
                alert("Error al registrar la compra, intente más tarde");
            })
        },
        juegoReservado: function(){
            axios.post("/api/registrar_reserva", {
                idjuego: this.idjuego,
                nombre: this.nombre_reserva,
                tipo: this.tipoJuego,
                consola: this.consolaid,
                tienda: this.tiendareserva,
                reservatienda: this.reserva_tienda,
                precio: this.precio_juegoreservado
            })
        }
    },
};
</script>