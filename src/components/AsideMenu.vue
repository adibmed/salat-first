<script>
import { mdiMenu } from "@mdi/js";
import AsideMenuList from "@/components/AsideMenuList.vue";
import { useAppStore } from "@/store/app";
import { mapState } from "pinia";
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
    ...mapState(useAppStore, ["isAsideOpen"]),

    icons() {
      return {
        mdiMenu,
      };
    },
  },

  methods: {
    // eslint-disable-next-line no-unused-vars
    menuClick(event, item) {
      // this.$emit("menu-click", event, item);
    },
  },
};
</script>

<template>
  <aside
    v-show="isAsideOpen"
    id="aside"
    class="w-60 bg-white border h-full top-0"
  >
    <div
      class="flex flex-row w-full flex-1 h-14 items-center dark:bg-transparent"
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
