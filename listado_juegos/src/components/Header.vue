<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="navbar-brand" href="#">Catálogo de Videojuegos</div>
        <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Cambia navegación"
        >
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/">Inicio</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/Juegos">
                Juegos</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/Consolas">
                    Consolas
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/Plataformas">
                Plataformas</router-link>
            </li> 
            <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/Sesiones">
                Sesiones</router-link>
            </li>                         
        </ul>
    </div>
    </nav>
</template>

<script>
/* eslint-disable */
export default {
    name: "Header",
};
</script>