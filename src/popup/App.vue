<template>
  <div class="default w-96 relative">
    <nav-bar />
    <aside-menu :menu="menu" />
    <router-view />
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, reactive, computed } from 'vue';
  import NavBar from '../components/NavBar.vue';
  import AsideMenu from '../components/AsideMenu.vue';
  import menuFile from '../menu';
  import { useSalatStore } from '../store/salat';

  export default defineComponent({
    name: 'popupView',

    components: { NavBar, AsideMenu },

    setup() {
      const menu = reactive(menuFile);

      const { getTodayTimes } = useSalatStore();

      getTodayTimes();

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
