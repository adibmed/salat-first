<script>
export default {
  props: {
    path: {
      type: String,
      required: true,
    },
    w: {
      type: String,
      default: "w-6",
    },
    h: {
      type: String,
      default: "h-6",
    },
    size: {
      type: [String, Number],
      default: 16,
    },
  },
  computed: {
    spanClass: function () {
      return `inline-flex justify-center items-center ${this.w} ${this.h}`;
    },
  },
};
</script>

<template>
  <span :class="spanClass">
    <svg viewBox="0 0 24 24" :width="size" :height="size" class="inline-block">
      <path fill="currentColor" :d="path" />
    </svg>
  </span>
</template>
