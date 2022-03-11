<script>
import { mdiMenu, mdiClose } from "@mdi/js";
import AsideMenuList from "@/components/AsideMenuList.vue";
import { useAppStore } from "@/store/app";
import { mapActions, mapState } from "pinia";
import Icon from "./Icon.vue";
export default {
  components: {
    AsideMenuList,
    Icon,
  },

  props: {
    menu: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    ...mapState(useAppStore, ["isAsideOpen"]),

    icons() {
      return {
        mdiMenu,
        mdiClose,
      };
    },
  },

  methods: {
    ...mapActions(useAppStore, ["toggleAsideMenu"]),
    // eslint-disable-next-line no-unused-vars
    menuClick(event, item) {
      // this.$emit("menu-click", event, item);
    },
  },
};
</script>

<template>
  <Transition name="slide-fade">
    <aside
      v-show="isAsideOpen"
      id="aside"
      class="fixed w-60 bg-white border h-full top-0 right-0"
    >
      <div class="flex items-center w-full py-2">
        <div class="flex-1 px-3">
          <span class="text-lg font-bold">Salaat First</span>
        </div>
        <button @click="toggleAsideMenu">
          <icon :path="icons.mdiClose" :h="'h-8'" :w="'w-8'" :size="24" />
        </button>
      </div>
      <div>
        <template v-for="(menuGroup, index) in menu">
          <p
            v-if="typeof menuGroup === 'string'"
            :key="`a-${index}`"
            class="p-3 text-xs uppercase"
          >
            {{ menuGroup }}
          </p>
          <aside-menu-list
            v-else
            :key="`b-${index}`"
            :menu="menuGroup"
            @menu-click="menuClick"
          />
        </template>
      </div>
    </aside>
  </Transition>
</template>

<style>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
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
</style>
