import { createRouter } from 'vue-router'
import HomePage from '../home/HomePage.vue'
export default createRouter({
    routes: [{
        path: '/',
        name: 'Home',
        component: HomePage,
    }],
})