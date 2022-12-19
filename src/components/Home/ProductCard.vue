<template>
 <div class="card card-compact h-96 w-full bg-base-100 shadow-xl">
  <figure class="w-full h-2/3" ><img class="object-contain" :src="singleItem.thumbnail" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title">{{singleItem?.title}}</h2>
    <p>{{singleItem?.description}}</p>
    <div class="card-actions flex justify-between">
      <h1 class="card-title">$220</h1>
      <div class="flex flex-col-reverse gap-4">
        <button  class="btn btn-primary btn-sm">Add To Cart </button>
      <button @click="seeDetails" class="btn btn-secondary btn-sm">View Deails </button>
    </div>
      </div>
  </div>
</div>
</template>

<script setup>
import { defineProps,onMounted,toRefs } from 'vue';
import { useRouter,useRoute } from 'vue-router';
const router=useRouter();
const route = useRoute()
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

function seeDetails(){

  router.push(`/product/${singleItem._id}`)

}

</script>

<style scoped>

</style>
