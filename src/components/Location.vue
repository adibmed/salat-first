<script>
  import Icon from './Icon.vue';
  import { mdiMapMarker } from '@mdi/js';
  import { ref, defineComponent, reactive, computed } from 'vue';
  export default defineComponent({
    components: { Icon },
    setup() {
      const icons = reactive({
        mdiMapMarker,
      });
      const city = ref('');
      chrome.storage.sync.get('city', (data) => {
        city.value = data.city || '';
      });
      return {
        icons,
        city,
      };
    },
  });
</script>

<template>
  <div class="w-full flex items-center justify-center text-white py-3">
    <span class="text-yellow-300">
      <icon :path="icons.mdiMapMarker" :w="'w-8'" :h="'h-8'" :size="24"
    /></span>
    <span class="text-lg font-semibold">{{ city.name }}</span>
  </div>
</template>
