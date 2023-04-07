<script>
  import { useSalatStore } from '../store/salat';
  import { ref, defineComponent, reactive, computed } from 'vue';
  export default defineComponent({
    setup() {
      const salatStore = useSalatStore();
      const timeToNextSalat = computed(() => salatStore.timeToNextSalat);
      const isLoadingTimes = computed(() => salatStore.isLoadingTimes);

      const counter = ref(0);

      const time = computed(() => {
        if (!timeToNextSalat.value) {
          return '';
        }
        let totalSeconds =
          timeToNextSalat.value.hours * 3600 +
          timeToNextSalat.value.minutes * 60 +
          timeToNextSalat.value.seconds;
        let remainingSeconds = Math.max(totalSeconds - counter.value, 0);
        let hours = Math.floor(remainingSeconds / 3600);
        let minutes = Math.floor((remainingSeconds % 3600) / 60);
        let seconds = remainingSeconds % 60;
        return `${hours.toString().padStart(2, '0')}:${minutes
          .toString()
          .padStart(2, '0')}:${seconds.toString().padStart(2, '0')} -`;
      });

      setInterval(() => {
        counter.value++;
      }, 1000);

      return {
        isLoadingTimes,
        time,
      };
    },
  });
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
