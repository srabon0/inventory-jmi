<template>
    <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                <h2 class="text-sm title-font text-gray-500 tracking-widest">{{singleProduct?.brand}}</h2>
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">{{singleProduct?.title}}</h1>
                <div class="flex mb-4">
                <a class="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
                <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Reviews</a>
                <a class="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">Details</a>
                </div>
                <p class="leading-relaxed mb-4">{{singleProduct?.description}}</p>
                <div class="flex border-t border-gray-200 py-2">
                <span class="text-gray-500">Color</span>
                <span class="ml-auto text-gray-900">Blue</span>
                </div>
                
                <div class="flex border-t border-b mb-6 border-gray-200 py-2">
                <span class="text-gray-500">Quantity</span>
                <span class="ml-auto text-gray-900">{{singleProduct?.stock || 0}}</span>
                </div>
                <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900">$58.00</span>
                <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add to cart</button>
                <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                </button>
                </div>
            </div>
            
            <div class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded">
                <swiper :pagination="pagination" :modules="[Pagination]" class="mySwiper">
                    <swiper-slide v-for="item in singleProduct?.images"><img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" :src="item"></swiper-slide>
                    
                </swiper>
            </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper";
import services from '../../services/productServices/Product' 
import { useRoute,useRouter } from 'vue-router';
import {onBeforeMount,onMounted,watch,ref} from 'vue'
let  singleProduct = ref(null)
const route = useRoute();
const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      }
const  getProductById =async()=>{
    console.log(route.params.id)
    await services.GET_SINGLE_PRODUCT_DETAILS(route.params.id)
    .then( res => { 
                    singleProduct.value = res.data.product
                    console.log(singleProduct)
                })
                .catch(err => {
                    if(err) {
                        console.log(err)
                    }
                })

}
onMounted(()=>{
    getProductById()
})

watch(singleProduct, (currentValue, oldValue) => {
  console.log("this is new value",currentValue);
  console.log("this is old value",oldValue);
});

</script>

<style>

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-pagination-bullet {
  width: 20px ;
  height: 20px;
  border-radius: 25%;  
  text-align: center;
  font-size: 12px;
  color: rgb(255, 255, 255);
  opacity: 1;
  background: rgba(5, 2, 2, 0.948);
}

.swiper-pagination-bullet-active {
  color: #fff;
  background: #007aff;
}

</style>