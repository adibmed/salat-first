<template>
  <div>
    <h1>Salat First</h1>
    <hello-world />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import { useSettingsStore } from "../store/settings";
import { mapActions } from "pinia";
export default {
  name: "App",
  components: { HelloWorld },

  mounted() {
    console.log("🔥 ");
    this.getCities();
  },
  methods: {
    ...mapActions(useSettingsStore, ["getCities"]),
  },
};
</script>

<style>
html {
  width: 400px;
  height: 400px;
}
</style>
