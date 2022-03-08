<script>
export default {
  name: "popupView",
  data() {
    return {
      msg: "popup",
    };
  },
};
</script>

<template>
  <div class="h-96 w-96 bg-blue-500">
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>
