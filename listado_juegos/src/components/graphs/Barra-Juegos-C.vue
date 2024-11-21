<template>
    <button @click="reloadGraphC">Mostrar</button>
    <div>
        <Bar :data="chartData" :options="chartOptions" />
    </div>
</template>

<script>
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
} from 'chart.js'
import {Bar} from 'vue-chartjs'
import axios from 'axios'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default{
    data(){
        return{
            nojuegos: [],
            consolas: [],
            chartData: {
                labels: [],
                datasets: [],
            },
            chartOptions: {
                responsive: true,
            }
        };
    },
    components: { Bar, },
    mounted(){this.juegosConsolas()},
    methods: {
        juegosConsolas: function(){
            axios.get("/api/consolas").then((res) => {
                this.nojuegos = res.data.data.map(consola => consola.nojuegos)
                this.consolas = res.data.data.map(consola => consola.nombre)
            })
            .catch(()=>{
                console.log("Algo anda mal con el componente")
            })
        },
        reloadGraphC(){
            this.chartData = {
                ...this.chartData,
                labels: [
                    ...this.chartData.labels = this.consolas,
                ],
                datasets: [
                    ...this.chartData.datasets,
                    {
                        label: "No. de juegos por consola",
                        backgroundColor: "#f87979",
                        data: this.nojuegos,
                    },
                ],
            };
        },
    },
   };
</script>