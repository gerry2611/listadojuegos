<template>
    <button class="btn btn-primary" @click="graphelegido = 1">Consolas</button><button class="btn btn-primary" @click="graphelegido = 2">Plataformas</button><button class="btn btn-primary" @click="graphelegido = 3">Movimientos</button>
    <component :is="activeComp"></component>
</template>
<script>
/* eslint-disable */
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
} from 'chart.js'
import BarraJuegosC from './graphs/Barra-Juegos-C.vue'
import BarraJuegosP from './graphs/Barra-Juegos-P.vue'
import LineaMovimientos from './graphs/Linea-Movimientos.vue'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

    export default {
        /* eslint-disable */
        name: "Estadisticas",
        data() {
            return {
                consolas: {},
                plataformas: {},
                graphelegido: 1,
            }
        },
        components: {
            'graph-1': BarraJuegosC,
            'graph-2': BarraJuegosP,
            'graph-3': LineaMovimientos
        },
        computed: {
            activeComp(){
                if(this.graphelegido === 1){
                    return 'graph-1'
                }else if(this.graphelegido === 2){
                    return 'graph-2'
                }else{
                    return 'graph-3'
                }
            }
        },
        mounted(){

        },
        methods: {

        }
    }
</script>