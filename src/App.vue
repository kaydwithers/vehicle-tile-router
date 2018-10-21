<template>
  <div id="app">
    <BaseNavigation />
    <router-view />
  </div>
</template>

<script>
import BaseNavigation from "./components/BaseNavigation.vue";

export default {
  components: {
    BaseNavigation
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
