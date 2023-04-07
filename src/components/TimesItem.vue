<script>
  import Icon from './Icon.vue';
  import { mdiBell } from '@mdi/js';
  import { ref, defineComponent, reactive, computed } from 'vue';
  export default defineComponent({
    props: {
      title: {
        type: String,
        required: true,
      },
      time: {
        type: String,
        required: true,
      },
      isActive: {
        type: Boolean,
        required: true,
      },
    },
    components: {
      Icon,
    },
    setup(props) {
      const icons = reactive({
        mdiBell,
      });
      const activeClass = computed(() => 'bg-gray-700');
      const translatedTitle = computed(() => {
        return props?.title.toLowerCase();
      });

      return {
        icons,
        activeClass,
        translatedTitle,
      };
    },
  });
</script>

<template>
  <li class="flex items-center justify-between py-0.5 px-4" :class="isActive ? activeClass : ''">
    <span class="text-lg text-white">{{ $t(translatedTitle) }}</span>
    <div class="flex items-center">
      <div class="text-base px-2 text-white">{{ time }}</div>
      <div class="text-yellow-400">
        <icon :path="icons.mdiBell" :h="'h-6'" :w="'w-6'" :size="20" />
      </div>
    </div>
  </li>
</template>
