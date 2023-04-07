<script>
  import { useSalatStore } from '../store/salat';
  import Location from './Location.vue';
  import Timer from './Timer.vue';
  import { defineComponent, ref, reactive, computed } from 'vue';
  export default defineComponent({
    components: { Location, Timer },
    setup() {
      const salatStore = useSalatStore();

      const timeToNextSalat = computed(() => salatStore.timeToNextSalat);
      const isLoadingTimes = computed(() => salatStore.isLoadingTimes);

      const headerStyle = computed(() => {
        return `
      background-image: url('../static/wallpaper.jpg');
      background-size: cover;
      `;
      });
      return {
        timeToNextSalat,
        isLoadingTimes,
        headerStyle,
      };
    },
  });
</script>

<template>
  <div class="h-44 w-full py-4 relative pt-12" :style="headerStyle">
    <div class="absolute top-0 left-0 w-full h-full z-0">
      <img class="h-full w-full object-cover" src="../static/wallpaper.jpg" alt="wallpaper" />
    </div>
    <div class="bg-black bg-opacity-10 absolute top-0 left-0 w-full h-full z-0"></div>
    <div class="h-full w-full flex flex-col items-center z-10 absolute top-0 left-0 pt-8">
      <div v-if="!isLoadingTimes" class="text-3xl text-white pb-2">
        {{ $t(timeToNextSalat?.name.toLocaleLowerCase()) }}
      </div>
      <div v-else class="text-3xl text-white">...</div>
      <timer />
    </div>
    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2">
      <location />
    </div>
  </div>
</template>
