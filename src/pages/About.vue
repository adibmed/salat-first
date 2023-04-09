<script>
  import { defineComponent, reactive } from 'vue';
  import Icon from '../components/Icon.vue';
  import { mdiTwitter } from '@mdi/js';

  export default defineComponent({
    components: {
      Icon,
    },
    setup() {
      const icons = reactive({
        mdiTwitter,
      });
      return {
        icons,
      };
    },
  });
</script>

<template>
  <div id="about" class="h-full w-full pt-12 bg-gray-900">
    <div class="h-full w-full grid place-content-center">
      <img class="h-32 w-32 mx-auto" src="../static/salat.png" />
      <div class="text-center text-white">
        <div class="text-lg pt-4">{{ $t('app_name') }}</div>
        <div class="pt-2 pb-4">2023</div>

        <a href="https://twitter.com/realAdibMed" target="_blank">
          <icon :path="icons.mdiTwitter" :h="'w-8'" :w="'w-8'" :size="24" />
        </a>
      </div>
    </div>
  </div>
</template>

<style>
  #about {
    min-height: 600px;
  }
</style>
