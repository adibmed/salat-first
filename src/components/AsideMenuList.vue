<script>
import AsideMenuItem from "@/components/AsideMenuItem.vue";

export default {
  components: {
    AsideMenuItem,
  },

  props: {
    isSubmenuList: {
      type: Boolean,
      default: false,
    },
    menu: {
      type: Array,
      default: () => [],
    },
  },

  methods: {
    menuClick(event, item) {
      this.$emit("menu-click", event, item);
    },
  },
};
</script>

<template>
  <ul>
    <aside-menu-item
      v-for="(item, index) in menu"
      :key="index"
      :item="item"
      :is-submenu-list="isSubmenuList"
      @menu-click="menuClick"
    />
  </ul>
</template>
