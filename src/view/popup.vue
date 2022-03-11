<script>
import NavBar from "../components/NavBar.vue";
import AsideMenu from "../components/AsideMenu.vue";
import menuFile from "@/menu.js";
import { useSalatStore } from "../store/salat";
import { mapActions } from "pinia";
export default {
  name: "popupView",

  components: { NavBar, AsideMenu },

  data() {
    return {
      msg: "popup",
    };
  },

  computed: {
    menu() {
      return menuFile;
    },
  },

  methods: {
    ...mapActions(useSalatStore, ["getTodayTimes"]),
  },

  mounted() {
    this.getTodayTimes();
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
  max-height: 750px;
}
</style>
