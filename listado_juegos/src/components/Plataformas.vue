<template>
    <div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Plataforma</th>
                    <th>Descripcion</th>
                </tr>
            </thead>
            <tbody style="color: #D1CBC8;">
                <tr v-for="plataforma in plataformas" :key="plataforma.idconsola">
                    <td>{{ plataforma.idconsola }}</td>
                    <td>{{ plataforma.nombre }}</td>
                    <td>{{ plataforma.descripcion }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div>
        <button>Insertar</button>
        <button>Eliminar</button>
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