<template>
  <div>
    <MainHeader />
    <div class="container">
      <slot />
    </div>
    <MainFooter />
  </div>
</template>
<script>
import MainHeader from "../Header/MainHeader.vue";
import MainFooter from "../Footer/MainFooter.vue";
export default {
  name: "MainLayout",
  components: {
    MainHeader,
    MainFooter
  },
};
</script>
<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
