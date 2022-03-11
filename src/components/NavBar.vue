<script>
import Icon from "./Icon.vue";
import { mdiMenu, mdiCogOutline } from "@mdi/js";
import { mapActions, mapState } from "pinia";
import { useAppStore } from "../store/app";

export default {
  components: { Icon },

  computed: {
    ...mapState(useAppStore, ["isAsideOpen"]),

    icons() {
      return {
        mdiMenu,
        mdiCogOutline,
      };
    },
  },

  methods: {
    ...mapActions(useAppStore, ["toggleAsideMenu"]),
  },
};
</script>

<template>
  <nav class="h-12 bg-white flex items-center justify-between">
    <button @click="toggleAsideMenu">
      <icon :path="icons.mdiMenu" :h="'w-8'" :w="'w-8'" :size="24" />
    </button>

    <button>
      <icon :path="icons.mdiCogOutline" :h="'w-8'" :w="'w-8'" :size="24" />
    </button>
  </nav>
</template>
