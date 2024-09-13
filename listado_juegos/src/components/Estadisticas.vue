<template>
    Proximamente
    <br>
    Gráfica de prueba

    <Bar :data="data" :options="options" />
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
    LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

    export default {
        name: "Estadisticas",
        components: {
            Bar
        },
        data(){
            return{
                data: {
                    labels: ['Enero', 'Febrero', 'Marzo'],
                    datasets: [{data: [40, 20, 12]}]
                },
                options: {
                    responsive: true
                }
            }
        }

    }
</script>