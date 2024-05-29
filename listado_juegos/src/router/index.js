import { createWebHistory, createRouter } from "vue-router";
import Home from '../components/Home'
import Juegos from '../components/Juegos'
import Plataformas from '../components/Plataformas'
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
        path: "/plataformas",
        component: Plataformas
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;