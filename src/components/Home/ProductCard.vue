<template>
 <div class="card card-compact h-96 w-full bg-base-100 shadow-xl">
  <figure class="w-full h-2/3" ><img class="object-contain" :src="singleItem.thumbnail" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">{{singleItem?.title}}</h2>
    <p>{{singleItem?.description}}</p>
    <div class="card-actions flex justify-between">
      <h1 class="card-title">$220</h1>
      <button class="btn btn-primary">Buy Now </button>
    </div>
  </div>
</div>
</template>

<script setup>
import { defineProps,onMounted,toRefs } from 'vue';
const props=defineProps(['ITEM'])
// export default {
//   name: "ShoppingCartProductCard",

//   data() {
//     return {};
//   },

//   mounted() {},

//   methods: {},
// };
const singleItem =  props.ITEM

</script>

<style lang="scss" scoped></style>
