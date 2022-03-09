<script>
import NavBar from "../components/NavBar.vue";
import AsideMenu from "../components/AsideMenu.vue";
export default {
  name: "popupView",
  data() {
    return {
      msg: "popup",
    };
  },
  components: { NavBar, AsideMenu },
};
</script>

<template>
  <div class="default w-96 bg-blue-500">
    <nav-bar />
    <aside-menu />

    <!-- <router-view /> -->
  </div>
</template>

<style>
.default {
  height: 500px;
  background-image: url("https://unsplash.com/photos/6M3_19hsDaw/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjQ2Nzg4NzE0&force=true&w=640");
  background-size: cover;
}
</style>
