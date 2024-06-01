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
                <tr v-for="plataforma in plataformas" :key="plataforma.idconsola">
                    <td>{{ plataforma.idconsola }}</td>
                    <td><img class="img" v-bind:src="require(`@/assets/${plataforma.img}`)" alt="no disponible" width="20%" height="20%"></td>
                    <td>{{ plataforma.nombre }}</td>
                    <td>{{ plataforma.descripcion }}</td>
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
    name: "Plataformas",
    data() {
        return {
            plataformas: {}
        }
    },
    mounted(){
        this.cargaTablaPlataformas();
    },
    methods: {
        cargaTablaPlataformas: function(){
            axios.get("/api/plataformas").then((res) => {
                this.plataformas = res.data.data;
            })
            .catch(()=>{
                console.log("Algo anda mal.");
            })
        }
    }
};
</script>