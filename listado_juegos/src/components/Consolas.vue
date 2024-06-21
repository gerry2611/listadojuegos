<template>
    <div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Logo</th>
                    <th>Plataforma</th>
                    <th>Descripcion</th>
                </tr>
            </thead>
            <tbody style="color: #D1CBC8;">
                <tr v-for="consola in consolas" :key="consola.idconsola">
                    <td>{{ consola.idplataforma }}</td>
                    <td><img class="img" v-bind:src="require(`@/assets/${consola.img}`)" alt="no disponible" width="20%" height="20%"></td>
                    <td>{{ consola.nombre }}</td>
                    <td>{{ consola.descripcion }}</td>
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

export default {
    name: "Consolas",
    data() {
        return {
            consolas: {}
        }
    },
    mounted(){
        this.cargaTablaConsolas();
    },
    methods: {
        cargaTablaConsolas: function(){
            axios.get("/api/consolas").then((res) => {
                this.consolas = res.data.data;
            })
            .catch(()=>{
                console.log("Algo anda mal.");
            })
        }
    }
};
</script>