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
    <div class="btn-group">
        <button type="button" class="btn btn-primary">Insertar</button>
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
            juegos: {}
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
            })
        }
    }
};
</script>