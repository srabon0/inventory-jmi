<template>
    <div>
      <h1 class="text-red-500"> {{name}} </h1>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
import {computed} from  'vue'
const store = useStore()

const name = computed(()=>{
    return store.state.name
}) 
</script>
