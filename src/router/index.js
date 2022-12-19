import {createRouter,createWebHistory} from 'vue-router';
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Notfound from '../components/Shared/Notfound.vue';
import SingleProduct from '../components/SingleProduct/SingleProduct.vue';
import Payment from "../components/Payment.vue";

const routes = [
    { path: '/',name:"Home", component: Home },
    { path: '/about',name:"About", component: About },
    { path: '/product/:id',name:"SingleProduct", component: SingleProduct },
    { path: '/payment',name:"Payment", component: Payment },
    { path: '/:pathMatch(.*)*', name:"Notfound", component: Notfound },
  ]
const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router