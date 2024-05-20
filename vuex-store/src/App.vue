<template>
  <div id="app">
    <MainLayout>
      <RouterView />
      <Button variant="contained">12312</Button>
    </MainLayout>
  </div>
</template>

<script>
import MainLayout from "./layout/Layout/MainLayout.vue";
import Button from "./ui-components/Button/UIButton.vue";
export default {
  name: "App",
  components: {
    MainLayout,
    Button,
  },
};
</script>
