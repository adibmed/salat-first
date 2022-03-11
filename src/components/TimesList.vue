<script>
import TimesItem from "./TimesItem.vue";
export default {
  components: { TimesItem },
  data() {
    return {
      times: [
        { time: "20:00" },
        { time: "20:00" },
        { time: "20:00" },
        { time: "20:00" },
        { time: "20:00" },
      ],
    };
  },
};
</script>

<template>
  <div class="bg-gray-900">
    <ul>
      <times-item v-for="(i, key) in 6" :key="key" />
    </ul>
  </div>
</template>
