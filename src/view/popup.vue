<script>
import NavBar from "../components/NavBar.vue";
import AsideMenu from "../components/AsideMenu.vue";
import menuFile from "@/menu.js";
import { useSettingsStore } from "../store/settings";
import { mapActions } from "pinia";
export default {
  name: "popupView",

  components: { NavBar, AsideMenu },

  data() {
    return {
      msg: "popup",
    };
  },

  mounted() {
    this.getCities();
    // console.log("🔥 ");
  },

  computed: {
    menu() {
      return menuFile;
    },
  },

  methods: {
    ...mapActions(useSettingsStore, ["getCities"]),
  },
};
</script>

<template>
  <div class="default w-96 relative">
    <nav-bar />
    <aside-menu :menu="menu" />
    <router-view />
  </div>
</template>

<style>
.default {
  height: 600px;
}
</style>
