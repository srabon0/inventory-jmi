<template>
  <div>
    <Navbar />
    <div>
      <router-view></router-view>
    </div>
    <MainFooter />
  </div>
</template>

<script>
import Navbar from "./components/Shared/Navbar.vue";
import MainFooter from './components/Shared/MainFooter.vue'


export default {
  name: "ShoppingCartApp",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: { Navbar,MainFooter },
};
</script>

<style lang="scss" scoped></style>
