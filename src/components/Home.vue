<template>
  <div>
    <div class="max-w-full bg-base-200 flex justify-center items-center">
      <section
        class="relative w-full max-w-md px-5 py-4 mx-auto rounded-md z-40"
      >
        <div class="relative">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>

          <input
            type="text"
            class="w-full py-3 pl-10 pr-4 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
            placeholder="Search Product...."
          />
        </div>

        <div
          v-if="dark"
          class="absolute inset-x-0 px-6 py-3 mx-5 mt-4 overflow-y-auto bg-white border rounded-md max-h-72"
        >
          <a href="#" class="block py-1">
            <h3 class="font-medium text-gray-700 hover:underline">
              Software engineer
            </h3>
            <p class="mt-2 text-sm text-gray-500">02/04/2020</p>
          </a>
          <a href="#" class="block py-1">
            <h3 class="font-medium text-gray-700 hover:underline">
              Software engineer
            </h3>
            <p class="mt-2 text-sm text-gray-500">02/04/2020</p>
          </a>
          <a href="#" class="block py-1">
            <h3 class="font-medium text-gray-700 hover:underline">
              Software engineer
            </h3>
            <p class="mt-2 text-sm text-gray-500">02/04/2020</p>
          </a>
          <a href="#" class="block py-1">
            <h3 class="font-medium text-gray-700 hover:underline">
              Software engineer
            </h3>
            <p class="mt-2 text-sm text-gray-500">02/04/2020</p>
          </a>
        </div>
      </section>
    </div>
    <!-- hero start  -->

    <div class="grid grid-cols-6">
      <div class="col-span-1">
        <ul class="h-full w-full menu bg-base-200 rounded-box p-2">
          <li><a>Item 1</a></li>
          <!-- tabindex will make the parent menu focusable to keep the submenu open if it's focused -->
          <li tabindex="0">
            <span>Nested menu 1</span>
            <ul class="rounded-box p-2 bg-base-100 z-30">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
              <ul class="menu bg-base-100">
                <li><a>Item x1</a></li>
                <!-- tabindex will make the parent menu focusable to keep the submenu open if it's focused -->
                <li tabindex="0">
                  <span>Parent</span>
                  <ul class="menu bg-base-100">
                    <li><a>Submenu x1</a></li>
                    <li><a>Submenu x2</a></li>
                    <li><a>Submenu x3</a></li>
                  </ul>
                </li>
                <li><a>Item 3</a></li>
              </ul>
            </ul>
          </li>
          <li tabindex="0">
            <span>Nested menu 1</span>
            <ul class="rounded-box p-2 bg-base-100 z-30">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
              <li tabindex="0">
                <ul class="menu rounded-box p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                  <li><a>Submenu 3</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <div class="col-span-5">
        <Sliders></Sliders>
      </div>
    </div>
    <!-- hero end  -->
    <section class="bg-base-200">
      <div class="container px-6 py-10 mx-auto">
        <div class="mt-6 md:flex md:items-center md:justify-between">
          <div>
            <h1
              class="text-3xl font-semibold text-gray-800 capitalize xl:text-5xl lg:text-4xl"
            >
              Our Products
            </h1>

            <div class="flex mx-auto mt-6">
              <span
                class="inline-block w-40 h-1 bg-blue-500 rounded-full"
              ></span>
              <span
                class="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"
              ></span>
              <span
                class="inline-block w-1 h-1 bg-blue-500 rounded-full"
              ></span>
            </div>
          </div>

          <div class="form-control flex justify-between items-center flex-row">
            <div class="input-group input-sm">
              <select class="select select-bordered">
                <option disabled selected>Pick category</option>
                <option>T-shirts</option>
                <option>Mugs</option>
              </select>
            </div>
          </div>
        </div>

        <section v-if="!isLoading" class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-3 xl:grid-cols-3">
         
            <ProductCard v-for="(item, index) in allProducts" :ITEM="item" :Key="index" />
        

          <!-- pagination start -->
          <!-- pagination end -->
        </section>
        <section v-else>Loading</section>
        <div class="btn-group mt-10">
          
          <button @click="setPage(index)" v-for="item,index in totalPages" class="btn btn-outline">{{ index+1 }}</button>
         
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import ProductCard from "../components/Home/ProductCard.vue";
import { useRouter } from "vue-router";
import { computed,defineProps,watch,ref,defineEmits} from "vue";
import { useStore } from "vuex";
import Sliders from "./Home/Sliders.vue";
const router = useRouter();
const store = useStore();
const currentPage = ref(0)
const props = defineProps(['PAGE_COUNT','ALL_PRODUCTS','IS_LOADING'])
const emits = defineEmits(['setCurrentPage'])
const totalPages = computed(() => {
 
  return props.PAGE_COUNT;
});
const allProducts = props.ALL_PRODUCTS
const setPage = (page)=>{
  console.log("setting page" , page);
  return emits('setCurrentPage',page);

}
const isLoading = props.IS_LOADING

const dark = false;

watch(allProducts, (currentValue) => {
  console.log("this is new current page",currentValue);
  
});


</script>

<style scoped></style>
