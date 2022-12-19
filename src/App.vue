<template>
  <div>
    <Navbar />
    <div>
      <router-view :PAGE_COUNT="totalPage" :IS_LOADING="isLoading" :ALL_PRODUCTS="allProducts" @setCurrentPage="setPage"></router-view>
    </div>
    <MainFooter />
  </div>
</template>

<script setup>
import {useStore} from 'vuex'
import { onMounted,ref,onBeforeMount,watch} from 'vue';
import Navbar from "./components/Shared/Navbar.vue";
import MainFooter from './components/Shared/MainFooter.vue'
import services from './services/productServices/Product' 
const  store = useStore();
const totalPage = ref([])
const allProducts = ref([])
const currentPage = ref(0)
const isLoading = ref(true)
async function getAllProducts(currentPage){
      isLoading.value= true
      await services.GET_ALL_PRODUCTS(currentPage)
      .then( res => {
                    console.log("loaded after page",res.data,"for page ", currentPage)
                    // store.dispatch('insertProduct',res.data.products)
                    allProducts.value= res.data.products
                    totalPage.value =createPages(res.data.totalPage)
                    isLoading.value = false
                    console.log(totalPage)
                })
                .catch(err => {
                    if(err) {
                        console.log(err)
                    }
                })
    }
function createPages(num){
  return Array.from({ length: num }, (v, i) => i);
}

function setPage(value){
  currentPage.value = value
}
watch(currentPage, (currentValue) => {
  console.log("this is in APP",currentValue);
  getAllProducts(currentPage.value)
});
onMounted(()=>{
  getAllProducts(currentPage.value)
})

console.log(currentPage.value)

</script>

<style></style>
