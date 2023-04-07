<script>
  import dikhrData from '../static/dhikr.json';
  import { defineComponent, ref } from 'vue';

  export default defineComponent({
    setup() {
      const today = new Date();
      const day = today.getDay();
      const dikhr = dikhrData[day].text;
      return {
        dikhr,
      };
    },
  });
</script>

<template>
  <div class="px-2 py-4">
    <div class="bg-gray-800 rounded-md">
      <div class="text-center bg-gray-700 text-sm rounded-t-md text-white py-1">
        {{ $t('dikr_of_the_day') }}
      </div>
      <div class="text-white text-center px-1 py-2 text-sm">
        {{ dikhr }}
      </div>
    </div>
  </div>
</template>
