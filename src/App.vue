<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from './components/nav/TheHeader.vue';


export default defineComponent({
  name: 'App',
  components: {
    TheHeader
  },
});
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
</style>

