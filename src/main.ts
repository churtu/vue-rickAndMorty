import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueQueryPlugin } from "@tanstack/vue-query";
import './assets/main.css'

// Inicializar el store
import './store/characters.store';

const app = createApp(App)

// Para que espere 2 minutos antes de refresacar el cache 
VueQueryPlugin.install( app, {
    queryClientConfig: {
        defaultOptions: {
            queries: {
                cacheTime: 1000 * 120, // 2 Minutos
                refetchOnReconnect: 'always'
            }
        }
    }
})

app
    .use(router)
    .mount('#app')
