<template>
    <div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Tienda</th>
                    <th>Ingreso</th>
                    <th>Gasto</th>
                    <th>Adquirido</th>
                    <th>Tipo</th>
                    <th>Descuento</th>
                    <th>Precio Regular</th>
                    <th>Nota</th>
                </tr>
            </thead>
            <tbody style="color: #D1CBC8;">
                <tr v-for="compra in compras" :key="compra.movimiento">
                    <td>{{ compra.tienda }}</td>
                    <td>{{ compra.ingreso }}</td>
                    <td>{{ compra.gasto }}</td>
                    <td>{{ compra.adquirido }}</td>
                    <td>{{ compra.tipo }}</td>
                    <td v-if="compra.descuento > 0">{{ compra.descuento }}%</td>
                    <td v-else>{{ compra.descuento }}</td>
                    <td>{{ compra.precio_regular }}</td>
                    <td>{{ compra.nota }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
/* eslint-disable */
import axios from 'axios';
export default {
    name: "Compras",
    data() {
        return {
            compras: {},
            juego_deseado: {},
            producto_comprado: "",
            tipo: ""
        }
    },
    mounted(){this.cargaTablaCompras()},
    methods: {
        cargaTablaCompras: function(){
            axios.get("/api/lista_compras").then((res) => {
                this.compras = res.data.data;
            })
            .catch(() => {
                console.log("Algo anda mal con la tabla registro_compras");
                alert("Algo anda mal con la tabla registro_compras.");
            })
        }
    }
}
</script>