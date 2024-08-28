<template>
    <h2>Editar Juego</h2>
    <div v-if="juegoaEditar" class="edit-form">
        <form>
            <div class="form-group">
                <label for="titulo">Titulo</label>
                <input type="text" class="form-control" id="titulo" v-model="juegoaEditar.nombre" />
            </div>
        </form>
    </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
import {ref} from 'vue';
export default {
    name: "Editar-Juego",
    data() {
        return {
            juegoaEditar: null,
           consolas: {},
           plataformas: {},
           nombre: "",
           lista_consola: "",
           lista_plataforma: "",
           fecha_adquirido: "",
           estado: "",
           completado: "",
           fecha_completado: "",
           nota: ""
        };
    },
    methods: {
        juegoElegido(id){
            axios.get("/api/juego_editar", {
                idjuegoeditar: id
            }).then((res) => {
                this.juegoaEditar = ref(res.data.data[0]);
            })
            .catch(e => {
                alert("Error al recibir información")
                console.log(e);
            });
        }
    },
    mounted() {
        this.juegoElegido(this.$route.params.id);
    }
}

</script>