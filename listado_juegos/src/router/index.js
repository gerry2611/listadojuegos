import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/Home'
import Juegos from '../components/Juegos'
import Consolas from '../components/Consolas'
import Plataformas from '../components/Plataformas'
import Sesiones from '../components/Sesiones'
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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;