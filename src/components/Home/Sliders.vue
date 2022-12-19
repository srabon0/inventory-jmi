<template>
  <swiper
    :spaceBetween="30"
    :centeredSlides="true"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    
    :modules="modules"
    class="mySwiper bg-base-200"
  >
  <swiper-slide v-for="item,index in 5" :key="index">
        <div class="hero min-h-screen bg-base-200 -mt-20">
      <div class="hero-content flex flex-row-reverse z-10">
        <img
          src="../../assets/images/hero-image-1.png"
          class="rounded-lg shadow-2xl"
        />
        <div class="text-left px-2">
          <h1 class="text-4xl font-bold">Vinventory</h1>
          <p class="py-6 text-justify">
            Inventory management is a process whereby businesses keep track of
            the items and materials they have in stock. This process is
            important in order to ensure that businesses have enough inventory
            to meet customer demand, while also avoiding excess inventory that
            can tie up valuable resources.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
</swiper-slide>
  </swiper>
</template>
<script setup>
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation,Pagination } from "swiper";
const  modules =  [Autoplay,Navigation,Pagination];
</script>
