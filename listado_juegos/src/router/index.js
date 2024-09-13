import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/Home'
import Juegos from '../components/Juegos'
import Consolas from '../components/Consolas'
import Plataformas from '../components/Plataformas'
import Sesiones from '../components/Sesiones'
import EditarJuego from "@/components/EditarJuego.vue";
import Wishlist from "@/components/Wishlist.vue";
import Estadisticas from "@/components/Estadisticas.vue";
const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/juegos",
        component: Juegos
    },
    {
        path: "/juegos/editar",
        component: EditarJuego
    },
    {
        path: "/consolas",
        component: Consolas
    },
    {
        path: "/plataformas",
        component: Plataformas
    },
    {
        path: "/sesiones",
        component: Sesiones
    },
    {
        path: "/wishlist",
        component: Wishlist
    },
    {
        path: "/estadisticas",
        component: Estadisticas
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;