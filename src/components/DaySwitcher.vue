<script lang="ts">
  import Icon from './Icon.vue';
  import { mdiChevronLeft, mdiChevronRight, mdiCalendarToday } from '@mdi/js';
  import { defineComponent, reactive, computed, getCurrentInstance, ref } from 'vue';

  import { useSalatStore } from '../store/salat';

  export default defineComponent({
    components: { Icon },

    setup() {
      const icons = reactive({
        mdiChevronLeft,
        mdiChevronRight,
        mdiCalendarToday,
      });

      const salatStore = useSalatStore();
      const isLoaded = computed(() => salatStore.isLoaded);
      const { getCalendarTime } = salatStore;
      const cityId = ref('');
      chrome.storage.sync.get('city', (data) => {
        cityId.value = data.city?.id || 1;
      });

      const $hijriDateHelper =
        getCurrentInstance()?.appContext.config.globalProperties.$hijriDateHelper;

      const gregorianDate = ref('');
      const hijriDate = ref('');

      const date = ref(new Date());

      const getHijriDate = () => {
        hijriDate.value = $hijriDateHelper.getHijriDate(
          date.value.getDate(),
          date.value.getMonth() + 1,
          date.value.getFullYear()
        );
      };

      const getGregorianDate = () => {
        gregorianDate.value = $hijriDateHelper.getGregorianDate(
          date.value.getDate(),
          date.value.getMonth(),
          date.value.getFullYear()
        );
      };

      getHijriDate();
      getGregorianDate();

      const isToday = ref(true);
      const refreshTimes = () => {
        const day = date.value.getDate();
        const month = date.value.getMonth() + 1;
        getCalendarTime(cityId.value, month, day);
        isToday.value = date.value.getDate() === new Date().getDate();
      };

      const getPrevDate = () => {
        date.value.setDate(date.value.getDate() - 1);
        getHijriDate();
        getGregorianDate();
        refreshTimes();
      };

      const getNextDate = () => {
        date.value.setDate(date.value.getDate() + 1);
        getHijriDate();
        getGregorianDate();
        refreshTimes();
      };

      const resetDate = () => {
        if (date.value.getDate() === new Date().getDate()) return;
        date.value = new Date();
        getHijriDate();
        getGregorianDate();
        refreshTimes();
      };

      return {
        icons,
        getPrevDate,
        getNextDate,
        hijriDate,
        gregorianDate,
        resetDate,
        isToday,
      };
    },
  });
</script>

<template>
  <div class="w-full bg-gray-700 flex items-center justify-center px-2 py-1.5">
    <button
      @click="getPrevDate"
      class="w-6 h-12 flex items-center justify-center text-yellow-300 hover:text-yellow-400"
    >
      <icon :path="icons.mdiChevronRight" :w="'w-12'" :h="'h-12'" :size="38" />
    </button>

    <button @click="resetDate" class="flex-1 flex items-center justify-center text-white">
      <div
        ><div class="text-base">{{ hijriDate }}</div> <div>{{ gregorianDate }}</div></div
      >
      <div
        class="flex items-center justify-center mr-2"
        :class="{
          hidden: isToday,
          block: !isToday,
        }"
      >
        <icon
          class="text-yellow-400"
          :path="icons.mdiCalendarToday"
          :w="'w-6'"
          :h="'h-6'"
          :size="38"
        />
      </div>
    </button>
    <button
      @click="getNextDate"
      class="w-6 h-12 flex items-center justify-center text-yellow-300 hover:text-yellow-400"
    >
      <icon :path="icons.mdiChevronLeft" :w="'w-12'" :h="'h-12'" :size="38" />
    </button>
  </div>
</template>
