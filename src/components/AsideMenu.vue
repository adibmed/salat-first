<script>
  import { mdiMenu, mdiClose, mdiCogOutline } from '@mdi/js';
  import AsideMenuList from './AsideMenuList.vue';
  import { useAppStore } from '../store/app';
  import { useRoute } from 'vue-router';
  import Icon from './Icon.vue';
  import Donation from './Donation.vue';
  import { ref, defineComponent, reactive, computed } from 'vue';
  export default defineComponent({
    components: {
      AsideMenuList,
      Icon,
      Donation,
    },

    props: {
      menu: {
        type: Array,
        default: () => [],
      },
    },

    setup(props, { emit }) {
      const appStore = useAppStore();
      const isAsideOpen = computed(() => appStore.isAsideOpen);
      const toggleAsideMenu = () => appStore.toggleAsideMenu();
      const route = useRoute();
      const icons = reactive({
        mdiMenu,
        mdiClose,
        mdiCogOutline,
      });
      const menuClick = () => {
        toggleAsideMenu();
      };
      const goToOptionsPage = () => {
        chrome.runtime.openOptionsPage();
      };
      return {
        isAsideOpen,
        icons,
        menuClick,
        goToOptionsPage,
        toggleAsideMenu,
      };
    },
  });
</script>

<template>
  <Transition name="slide-fade">
    <aside v-show="isAsideOpen" class="fixed h-full w-full top-0 right-0 z-50 flex">
      <div id="aside" class="w-60 h-full bg-gray-900 bg-opacity-90 flex flex-col">
        <div class="flex items-center w-full py-2 text-white">
          <div class="flex-1 px-3">
            <span class="text-lg font-bold">Salaat First</span>
          </div>
          <button class="p-1" @click="toggleAsideMenu">
            <icon :path="icons.mdiClose" :h="'h-8'" :w="'w-8'" :size="24" />
          </button>
        </div>
        <template v-for="(menuGroup, index) in menu">
          <p v-if="typeof menuGroup === 'string'" :key="`a-${index}`" class="p-3 text-xs uppercase">
            {{ menuGroup }}
          </p>
          <aside-menu-list v-else :key="`b-${index}`" :menu="menuGroup" @onMenuClick="menuClick" />
        </template>
        <div class="flex-1 flex items-end">
          <div class="w-full flex justify-between items-end p-3">
            <button
              @click="goToOptionsPage"
              class="text-gray-200 hover:text-white grid place-content-center p-1"
            >
              <icon :path="icons.mdiCogOutline" :h="'w-8'" :w="'w-8'" :size="24" />
            </button>
            <donation />
          </div>
        </div>
      </div>
      <div @click="toggleAsideMenu" class="w-36"></div>
    </aside>
  </Transition>
</template>

<style>
  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(230px);
    opacity: 0;
  }

  #aside {
    /* blured background with opacity */
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
</style>
