<script>
import { mdiMenu } from "@mdi/js";
import AsideMenuList from "@/components/AsideMenuList.vue";

export default {
  components: {
    AsideMenuList,
  },

  props: {
    menu: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    asideStyle() {
      return "";
    },
    asideBrandStyle() {
      return "";
    },
    asideMenuCloseLgStyle() {
      return "";
    },
    asideMenuLabelStyle() {
      return "";
    },
    isFullScreen() {
      return false;
    },
    isAsideMobileExpanded() {
      return false;
    },
    isAsideLgActive() {
      return false;
    },
    icons() {
      return {
        mdiMenu,
      };
    },
  },
  methods: {
    asideLgClose() {
      // store.dispatch("asideLgToggle", false);
    },
    // eslint-disable-next-line no-unused-vars
    menuClick(event, item) {
      // this.$emit("menu-click", event, item);
    },
  },
};
</script>

<template>
  <aside
    v-show="!isFullScreen || true"
    id="aside"
    class="w-60 fixed top-0 z-40 h-screen transition-position lg:left-0 dark:border-r dark:border-gray-800 dark:bg-gray-900/70 lg:dark:bg-gray-900 xl:dark:bg-gray-900/70"
    :class="[
      asideStyle,
      isAsideMobileExpanded ? 'left-0' : '-left-60',
      isAsideLgActive ? 'block' : 'lg:hidden xl:block',
    ]"
  >
    <div
      class="flex flex-row w-full flex-1 h-14 items-center dark:bg-transparent"
      :class="[asideBrandStyle]"
    >
      <div class="flex-1 px-3">
        <span>Admin</span> <b class="font-black">One</b>
      </div>
    </div>
    <div>
      <template v-for="(menuGroup, index) in menu">
        <p
          v-if="typeof menuGroup === 'string'"
          :key="`a-${index}`"
          class="p-3 text-xs uppercase"
          :class="[asideMenuLabelStyle]"
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
</template>
