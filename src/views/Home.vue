<script>
import DaySwitcher from "../components/DaySwitcher.vue";
import HomeHeader from "../components/HomeHeader.vue";
export default { components: { HomeHeader, DaySwitcher } };
</script>

<template>
  <div class="h-full w-full">
    <home-header />
    <day-switcher />
    <h1>This is a home page</h1>
  </div>
</template>
