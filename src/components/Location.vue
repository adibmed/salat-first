<script>
import Icon from "./Icon.vue";
import { mdiMapMarker } from "@mdi/js";
export default {
  components: { Icon },
  computed: {
    icons() {
      return {
        mdiMapMarker,
      };
    },
  },
};
</script>

<template>
  <div class="w-full flex items-center justify-center text-white py-1">
    <span class="text-yellow-300">
      <icon :path="icons.mdiMapMarker" :w="'w-8'" :h="'h-8'" :size="24"
    /></span>
    <span class="text-lg">Khenifra</span>
  </div>
</template>
