<script>
  import { mdiMenu, mdiCogOutline } from '@mdi/js';
  import { useAppStore } from '../store/app';
  import Icon from './Icon.vue';
  import { ref, defineComponent, reactive, computed } from 'vue';
  export default defineComponent({
    components: { Icon },

    setup() {
      const { isAsideOpen, toggleAsideMenu } = useAppStore();

      const icons = reactive({
        mdiMenu,
        mdiCogOutline,
      });

      return {
        icons,
        isAsideOpen,
        toggleAsideMenu,
      };
    },
  });
</script>

<template>
  <nav class="h-12 flex items-center justify-between absolute top-0 left-0 w-full z-50 px-2">
    <button class="text-gray-200 hover:text-white" @click="toggleAsideMenu">
      <icon :path="icons.mdiMenu" :h="'w-8'" :w="'w-8'" :size="24" />
    </button>
  </nav>
</template>
