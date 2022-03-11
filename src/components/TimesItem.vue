<script>
import Icon from "./Icon.vue";
import { mdiBell } from "@mdi/js";
export default {
  props: {
    item: { type: Object },
    isActive: Boolean,
  },
  components: {
    Icon,
  },
  computed: {
    icons() {
      return {
        mdiBell,
      };
    },
    activeClass: () => "bg-gray-500",
  },
};
</script>

<template>
  <li
    class="flex items-center justify-between py-0.5 px-2"
    :class="{ isActive: activeClass }"
  >
    <span class="text-lg text-white">salat</span>
    <div class="flex items-center">
      <div class="text-lg px-2 text-white">23:39</div>
      <div class="text-yellow-400">
        <icon :path="icons.mdiBell" :h="'h-6'" :w="'w-6'" :size="20" />
      </div>
    </div>
  </li>
</template>
