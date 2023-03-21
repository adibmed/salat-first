<script>
import { mapState } from "pinia";
import { useSalatStore } from "../store/salat";
export default {
  data() {
    return {
      counter: 0,
    };
  },
  computed: {
    ...mapState(useSalatStore, ["timeToNextSalat", "isLoadingTimes"]),
    time() {
      if (!this.timeToNextSalat) {
        return ''
      }
      let totalSeconds =
        this.timeToNextSalat.hours * 3600 +
        this.timeToNextSalat.minutes * 60 +
        this.timeToNextSalat.seconds;
      let remainingSeconds = Math.max(totalSeconds - this.counter, 0);
      let hours = Math.floor(remainingSeconds / 3600);
      let minutes = Math.floor((remainingSeconds % 3600) / 60);
      let seconds = remainingSeconds % 60;
      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} -`;
    },
  },
  mounted() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  },
};
</script>

<template>
  <div class="text-3xl text-white text-right">
    <div v-if="isLoadingTimes">
      <div class="text-2xl text-white text-right">...</div>
    </div>

    <div v-else>
      {{ time }}
    </div>
  </div>
</template>
