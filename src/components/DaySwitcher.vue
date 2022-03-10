<script>
import Icon from "./Icon.vue";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";
export default {
  components: { Icon },
  computed: {
    icons() {
      return {
        mdiChevronLeft,
        mdiChevronRight,
      };
    },
  },
  methods: {
    nextDay() {
      console.log("nextDay");
    },
    previousDay() {
      console.log("previousDay");
    },
  },
};
</script>

<template>
  <div class="w-full bg-gray-500 flex items-center justify-center px-2">
    <!-- <icon :path="icons.mdiMapMarker" :w="'w-12'" :h="'h-12'" :size="38" />
    <span>Khenifra</span> -->

    <button
      @click="previousDay"
      class="w-6 h-12 flex items-center justify-center text-yellow-300 hover:text-yellow-400"
    >
      <icon :path="icons.mdiChevronRight" :w="'w-12'" :h="'h-12'" :size="38" />
    </button>

    <div class="flex-1 flex flex-col items-center justify-center text-white">
      <div class="text-base">Saturday 12 March 2022</div>
      <div>23 Febray 1923</div>
    </div>
    <button
      @click="nextDay"
      class="w-6 h-12 flex items-center justify-center text-yellow-300 hover:text-yellow-400"
    >
      <icon :path="icons.mdiChevronLeft" :w="'w-12'" :h="'h-12'" :size="38" />
    </button>
  </div>
</template>
