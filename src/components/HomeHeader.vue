<script>
import Location from "./Location.vue";
export default {
  components: { Location },
  computed: {
    headerStyle() {
      return "background-image: url('https://unsplash.com/photos/5Sbx0pj9Tok/download?force=true&w=640')";
    },
  },
};
</script>

<template>
  <div class="h-40 w-full bg-white relative" :style="headerStyle">
    <div class="flex flex-col items-center justify-center">
      <div class="text-2xl text-white">Al Fajr</div>
      <div class="text-2xl text-white">-02:35:13</div>
    </div>

    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2">
      <location />
    </div>
  </div>
</template>
