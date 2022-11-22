<template>
    <div>
    
      <button class="btn">{{name}}</button>
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
