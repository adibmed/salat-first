<template>
  <div class="h-full w-96 relative">
    <nav-bar />
    <aside-menu :menu="menu" />
    <router-view />
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import NavBar from '../components/NavBar.vue';
  import AsideMenu from '../components/AsideMenu.vue';
  import menuFile from '../menu';

  export default defineComponent({
    name: 'popupView',
    components: { NavBar, AsideMenu },
    setup() {
      const menu = reactive(menuFile);
      return {
        menu,
      };
    },
  });
</script>
<style>
  .default {
    max-height: 750px;
  }
</style>
