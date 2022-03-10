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
  <nav class="h-12 flex items-center justify-between">
    <button @click="toggleAsideMenu">
      <icon :path="icons.mdiMenu" :h="'w-8'" :w="'w-8'" :size="24" />
    </button>
    <div class="text-lg">صلاة</div>

    <router-link :to="{ name: 'Settings' }">
      <button>
        <icon :path="icons.mdiCogOutline" :h="'w-8'" :w="'w-8'" :size="24" />
      </button>
    </router-link>
  </nav>
</template>
