<template>
  <div>
    <!-- hero start  -->
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          src="../assets/images/hero-image-1.png"
          class="max-w-xl rounded-lg shadow-2xl"
        />
        <div>
          <h1 class="text-5xl font-bold">Vinventory</h1>
          <p class="py-6">
            Inventory management is a process whereby businesses keep track of the items and materials they have in stock. This process is important in order to ensure that businesses have enough inventory to meet customer demand, while also avoiding excess inventory that can tie up valuable resources.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
    <!-- hero end  -->
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { computed, ref } from "vue";
import { useStore } from "vuex";
const router = useRouter();
const store = useStore();
const newNameInput = ref("");
const isName = computed(() => {
  return store.state.name;
});

const newName = () => {
  store.dispatch("saveName", newNameInput.value);
  newNameInput.value = "";
  router.push("/about");
};
</script>

<style></style>
