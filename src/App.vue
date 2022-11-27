<template>
  <div>
    <Navbar />
    <div>
      <router-view :ALL_PRODUCTS="allProducts"></router-view>
    </div>
    <MainFooter />
  </div>
</template>

<script setup>
import {useStore} from 'vuex'
import { onMounted,ref,onBeforeMount } from 'vue';
import Navbar from "./components/Shared/Navbar.vue";
import MainFooter from './components/Shared/MainFooter.vue'
import services from './services/productServices/Product' 
const  store = useStore();




function getAllProducts(){
      services.GET_ALL_PRODUCTS()
      .then( res => {
                    console.log(res.data)
                    store.dispatch('insertProduct',res.data.products)
                })
                .catch(err => {
                    if(err) {
                        console.log(err)
                    }
                })
    }


onBeforeMount(()=>{
  getAllProducts()
})
</script>

<style lang="scss" scoped></style>
