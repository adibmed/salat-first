<template>
  <ul>
    <AsideMenuItem
      v-for="(item, index) in menu"
      :key="index"
      :item="item"
      :is-submenu-list="isSubmenuList"
      @onMenuClick="menuClick"
    />
  </ul>
</template>

<script>
  import AsideMenuItem from './AsideMenuItem.vue';
  import { defineComponent, ref, reactive, computed } from 'vue';
  export default defineComponent({
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
    setup(props, { emit }) {
      const menuClick = (event, item) => {
        emit('onMenuClick', event, item);
      };
      return {
        menuClick,
      };
    },
  });
</script>
