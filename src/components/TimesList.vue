<script>
  import TimesItem from './TimesItem.vue';
  import { useSalatStore } from '../store/salat';
  import { ref, defineComponent, computed } from 'vue';

  export default defineComponent({
    components: { TimesItem },

    setup() {
      const salatStore = useSalatStore();
      const calendarTimes = computed(() => salatStore.calendarTimes);
      const upComingSalat = computed(() => salatStore.upComingSalat);
      const isLoaded = computed(() => salatStore.isLoaded);
      const isActive = (title) => {
        return title === upComingSalat.value.title;
      };

      return {
        isActive,
        calendarTimes,
        isLoaded,
        upComingSalat,
      };
    },
  });
</script>

<template>
  <div class="bg-gray-900 pt-2 text-white">
    <ul>
      <times-item
        v-for="item in calendarTimes"
        :key="item.title"
        :title="item.title"
        :time="item.time"
        :isActive="isActive(item.title)"
      />
    </ul>
  </div>
</template>
´
