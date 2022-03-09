<script>
import Icon from "./Icon.vue";
import { mdiMenu } from "@mdi/js";

export default {
  components: { Icon },
  computed: {
    icons: () => {
      return {
        mdiMenu,
      };
    },
  },
};
</script>

<template>
  <nav class="h-12 bg-white flex items-center">
    <button>
      <icon :path="icons.mdiMenu" :h="'w-8'" :w="'w-8'" :size="24" />
    </button>
  </nav>
</template>
