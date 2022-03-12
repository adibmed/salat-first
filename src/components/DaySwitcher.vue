<script>
import Icon from "./Icon.vue";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import { useSalatStore } from "../store/salat";
import { mapState } from "pinia";
import { mapActions } from "pinia";

export default {
  components: { Icon },

  computed: {
    ...mapState(useSalatStore, ["hijriDate", "gregorianDate"]),

    icons() {
      return {
        mdiChevronLeft,
        mdiChevronRight,
      };
    },
  },

  methods: {
    ...mapActions(useSalatStore, ["getNextCalendar", "getPrevCalendar"]),

    nextDay() {
      this.getNextCalendar();
    },

    previousDay() {
      this.getPrevCalendar();
    },
  },
};
</script>

<template>
  <div class="w-full bg-gray-700 flex items-center justify-center px-2 py-1.5">
    <button
      @click="previousDay"
      class="w-6 h-12 flex items-center justify-center text-yellow-300 hover:text-yellow-400"
    >
      <icon :path="icons.mdiChevronRight" :w="'w-12'" :h="'h-12'" :size="38" />
    </button>

    <div class="flex-1 flex flex-col items-center justify-center text-white">
      <div class="text-base">{{ hijriDate }}</div>
      <div>{{ gregorianDate }}</div>
    </div>
    <button
      @click="nextDay"
      class="w-6 h-12 flex items-center justify-center text-yellow-300 hover:text-yellow-400"
    >
      <icon :path="icons.mdiChevronLeft" :w="'w-12'" :h="'h-12'" :size="38" />
    </button>
  </div>
</template>
