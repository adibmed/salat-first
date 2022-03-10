<script>
import TimesItem from "./TimesItem.vue";
import { useSalatStore } from "../store/salat";
import { mapState } from "pinia";

export default {
  components: { TimesItem },

  computed: {
    ...mapState(useSalatStore, ["times"]),
  },

  mounted() {
    console.log();
  },
};
</script>

<template>
  <div class="bg-gray-900 pt-2">
    <ul>
      <times-item
        v-for="(time, key) in times"
        :key="key"
        :title="key"
        :time="time"
      />
    </ul>
  </div>
</template>
