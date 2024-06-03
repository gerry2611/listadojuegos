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
    <div class="btn-group">
        <button type="button" class="btn btn-primary">Insertar</button>
        <button type="button" class="btn btn-danger">Eliminar</button>
        <button type="button" class="btn btn-secondary">Modal</button>
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
                console.log("Algo anda mal.");
            })
        }
    }
};
</script>