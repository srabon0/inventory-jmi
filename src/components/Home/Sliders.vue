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
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
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


</style>
