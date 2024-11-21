<template>
    <button @click="reloadGraphP">Plataformas</button>
    <div style="max-width: 5000px; max-height: 5000px;">
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
            plataformas: [],
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
    mounted(){this.juegosPlataformas()},
    methods: {
        juegosPlataformas: function(){
            axios.get("/api/plataformas").then((res) => {
                this.nojuegos = res.data.data.map(plataforma => plataforma.nojuegos)
                this.plataformas = res.data.data.map(plataforma => plataforma.nombre)
            })
            .catch(()=>{
                console.log("Algo anda mal con el componente")
            })
        },
        reloadGraphP(){
            this.chartData = {
                ...this.chartData,
                labels: [
                    ...this.chartData.labels = this.plataformas,
                ],
                datasets: [
                    ...this.chartData.datasets,
                    {
                        label: "No. de juegos por plataforma",
                        backgroundColor: "#f87979",
                        data: this.nojuegos,
                    },
                ],
            };
        },
    },
   };
</script>