<script>
  import TimesItem from './TimesItem.vue';
  import { useSalatStore } from '../store/salat';
  import { ref, defineComponent, reactive, computed } from 'vue';

  export default defineComponent({
    components: { TimesItem },

    setup() {
      const salatStore = useSalatStore();
      const times = computed(() => salatStore.times);
      const upComingSalat = computed(() => salatStore.upComingSalat);

      const isActive = (title) => {
        return title === upComingSalat.name;
      };

      return {
        times,
        isActive,
      };
    },
  });
</script>

<template>
  <div class="bg-gray-900 pt-2">
    <ul>
      <times-item
        v-for="(time, key) in times"
        :key="key"
        :title="key"
        :time="time"
        :isActive="isActive(key)"
      />
    </ul>
  </div>
</template>
