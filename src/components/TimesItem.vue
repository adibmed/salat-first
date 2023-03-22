<script>
import Icon from "./Icon.vue";
import { mdiBell } from "@mdi/js";
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
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
    activeClass: () => "bg-gray-700",

    translatedTitle() {
      return this.$t(this.title.toLowerCase());
    },
  },
};
</script>

<template>
  <li
    class="flex items-center justify-between py-0.5 px-4"
    :class="isActive ? activeClass : ''"
  >
    <span class="text-lg text-white">{{ translatedTitle }}</span>
    <div class="flex items-center">
      <div class="text-base px-2 text-white">{{ time }}</div>
      <div class="text-yellow-400">
        <icon :path="icons.mdiBell" :h="'h-6'" :w="'w-6'" :size="20" />
      </div>
    </div>
  </li>
</template>
