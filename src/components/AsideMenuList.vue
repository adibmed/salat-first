<script setup>
import AsideMenuItem from "@/components/AsideMenuItem.vue";
export default {
  components: {
    AsideMenuItem,
  },
};
</script>

<template>
  <ul>
    <aside-menu-item v-for="(item, index) in 6" :key="index" />
  </ul>
</template>
