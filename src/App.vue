<script>
import ProjectMain from "./components/ProjectMain.vue";
import AppHeader from "./components/AppHeader.vue";

export default {
  components: {
    ProjectMain,
    AppHeader,
  },
};
</script>
<template>
  <ProjectMain></ProjectMain>
  <AppHeader></AppHeader>
  <router-view></router-view>
</template>
<style lang="scss">
@use "./styles/generals.scss" as *;
</style>
