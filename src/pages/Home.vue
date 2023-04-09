<script>
  import DayHadith from '../components/DayHadith.vue';
  import DaySwitcher from '../components/DaySwitcher.vue';
  import HomeHeader from '../components/HomeHeader.vue';
  import TimesList from '../components/TimesList.vue';
  import DayDikr from '../components/DayDikr.vue';
  import Donation from '../components/Donation.vue';
  import { defineComponent, computed } from 'vue';

  import { useSalatStore } from '../store/salat';

  export default defineComponent({
    components: {
      HomeHeader,
      DaySwitcher,
      TimesList,
      DayHadith,
      DayDikr,
      Donation,
    },

    setup() {
      const salatStore = useSalatStore();
      const isLoaded = computed(() => salatStore.isLoaded);
      const { getMoroccanTime } = salatStore;
      chrome.storage.sync.get('city', (data) => {
        const cityId = data.city?.id || 1;
        const day = new Date().getDate();
        const month = new Date().getMonth() + 1;
        getMoroccanTime(cityId, month, day);
      });

      return {
        isLoaded,
      };
    },
  });
</script>

<template>
  <div class="h-full w-full bg-gray-900">
    <div v-if="isLoaded">
      <home-header />
      <day-switcher />
      <times-list />
      <day-hadith />
      <day-dikr />
      <div class="grid place-content-center pb-4">
        <donation />
      </div>
    </div>
    <div v-else class="h-screen w-full flex justify-center items-center">
      <div class="text-xl text-gray-600">..loading</div>
    </div>
  </div>
</template>
