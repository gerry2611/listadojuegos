import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import 'plotly.js-dist/plotly';
import 'feather-icons/dist/feather';
import 'alertifyjs/alertify';
import 'alertifyjs/css/alertify.css';
createApp(App).use(router).mount('#app');
