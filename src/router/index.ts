import about_page from '@/shared/pages/about_page.vue';
import home_page from '@/shared/pages/home_page.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { characterRoute } from '@/modules/characters/router/index';


const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        // Public
        {
            path: '/',
            name: 'home',
            component: home_page
        },
        {
            path: '/about',
            name: 'about',
            component: about_page
        },
        // Characters
        {
            ...characterRoute,
            path: '/characters'
        },
        // Default
        {
            path: '/:pathMatch(.*)*',
            redirect: () => ({ name: 'home' })
        }
    ]
})

export default router