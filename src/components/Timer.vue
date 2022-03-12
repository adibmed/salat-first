<script>
export default {
  data() {
    return {
      counter: 0,
    };
  },
  computed: {
    time() {
      return `${this.counter}`;
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
  <div class="text-3xl text-white text-right">{{ time }}</div>
</template>
