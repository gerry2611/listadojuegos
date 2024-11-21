<template>
    <button @click="reloadMovimiento()">Movimiento</button>
    <div>
        <Line :data="chartData" :options="chartOptions"></Line>
    </div>
</template>

<script>
/* eslint-disable */
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    CategoryScale,
    LinearScale,
} from 'chart.js'
import {Line} from 'vue-chartjs'
import axios from 'axios'
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default{
    data(){
        return{
            nintendo_eshop: [],
            playstation_store: [],
            steam: [],
            itunes: [],
            google_play: [],
            fecha: [],
            chartData: {
                labels: [],
                datasets: [],
            },
            chartOptions: {
                responsive: true,
            }
        };
    },
    components: { Line },
    mounted(){this.movimientos()},
    methods: {
        movimientos: function(){
            axios.get("/api/movimiento").then((res) => {
                this.fecha = res.data.data.map(movimiento => movimiento.fecha)
                this.nintendo_eshop = res.data.data.map(movimiento => movimiento.saldo_nes)
                this.playstation_store = res.data.data.map(movimiento => movimiento.saldo_ps)
                this.steam = res.data.data.map(movimiento => movimiento.saldo_steam)
                this.itunes = res.data.data.map(movimiento => movimiento.saldo_itunes)
                this.google_play = res.data.data.map(movimiento => movimiento.saldo_google)
            })
            .catch(()=>{
                console.log("Algo anda mal con el componente")
            })
        },
        reloadMovimiento(){
            this.chartData = {
                ...this.chartData,
                labels: [
                ...this.chartData.labels = this.fecha
                ],
                datasets: [
                    ...this.chartData.datasets,
                    {
                        label: "Nintendo eShop",
                        backgroundColor: "#f87979",
                        data: this.nintendo_eshop,
                    },
                    {
                        label: "Playstation Store",
                        backgroundColor: "blue",
                        data: this.playstation_store,
                    },
                    {
                        label: "Steam",
                        backgroundColor: "black",
                        data: this.steam,
                    },
                    {
                        label: "iTunes",
                        backgroundColor: "gray",
                        data: this.itunes,
                    },
                    {
                        label: "Google Play",
                        backgroundColor: "orange",
                        data: this.google_play,
                    }
                ],
            };
        },
    },
   };
</script>