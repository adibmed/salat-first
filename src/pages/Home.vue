<script>
  import DayHadith from '../components/DayHadith.vue';
  import DaySwitcher from '../components/DaySwitcher.vue';
  import HomeHeader from '../components/HomeHeader.vue';
  import TimesList from '../components/TimesList.vue';
  import DayDikr from '../components/DayDikr.vue';
  import Donation from '../components/Donation.vue';
  export default {
    components: {
      HomeHeader,
      DaySwitcher,
      TimesList,
      DayHadith,
      DayDikr,
      Donation,
    },
  };
</script>

<template>
  <div class="h-full w-full bg-gray-900">
    <home-header />
    <day-switcher />
    <times-list />
    <day-hadith />
    <day-dikr />
    <div class="grid place-content-center pb-4">
      <donation />
    </div>
  </div>
</template>
