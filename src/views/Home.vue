<script>
import DaySwitcher from "../components/DaySwitcher.vue";
import HomeHeader from "../components/HomeHeader.vue";
import TimesList from "../components/TimesList.vue";
export default { components: { HomeHeader, DaySwitcher, TimesList } };
</script>

<template>
  <div class="h-full w-full">
    <home-header />
    <day-switcher />
    <times-list />
    <h1>This is a home page</h1>
  </div>
</template>
