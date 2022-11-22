import {createRouter,createWebHistory} from 'vue-router'
import Home from "../components/Home.vue"
import About from "../components/About.vue"
import Notfound from '../components/Shared/Notfound.vue'

const routes = [
    { path: '/',name:"Home", component: Home },
    { path: '/about',name:"About", component: About },
    { path: '/:pathMatch(.*)*', name:"Notfound", component: Notfound },
  ]
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router