<template>
  <div class="min-h-screen p-10 bg-gray-100">
    <div class="max-w-xl mx-auto bg-white p-10 rounded border">
      <label for="select" class="text-sm font-semibold block py-2">{{
        $t('select_city') + ' :'
      }}</label>

      <div class="text-lg py-2">{{ $t('city') }} : {{ city.name }}</div>

      <div class="relative">
        <div class="h-10 bg-white flex border border-gray-200 rounded items-center">
          <input
            name="select"
            id="select"
            class="px-4 appearance-none outline-none text-gray-800 w-full h-full"
            checked
            v-model="search"
            @focus="showDropdown = true"
            @click="showDropdown = true"
          />

          <button
            class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-gray-600"
          >
            <svg
              class="w-4 h-4 mx-2 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div
          v-show="showDropdown"
          class="absolute rounded shadow bg-white overflow-y-scroll max-h-96 w-full mt-1 border border-gray-200"
        >
          <div
            v-for="city in cities"
            class="cursor-pointer group border-b flex items-center justify-between p-2 hover:bg-gray-100 z-50"
            :key="city.id"
            @click="selectCity(city)"
          >
            <div class="block">{{ city.name }} </div>
            <div class="ml-2">{{ city.name_en }} </div>
          </div>
        </div>

        <div class="mt-8">
          <button
            :disabled="!cityChanged"
            :class="{
              'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded': cityChanged,
              'bg-gray-500 text-white font-bold py-2 px-4 rounded': !cityChanged,
            }"
            @click="saveSettings"
          >
            {{ $t('save') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref, computed, defineComponent } from 'vue';
  import locations from '../static/locations.json';

  export default defineComponent({
    setup() {
      const cityChanged = ref(false);
      const city = ref('');
      const showDropdown = ref(false);
      const search = ref('');

      const cities = computed(() => {
        return locations.filter((location) => {
          return (
            location.name.toLowerCase().includes(search.value.toLowerCase()) ||
            location.name_en.toLowerCase().includes(search.value.toLowerCase())
          );
        });
      });

      chrome.storage.sync.get('city', (data) => {
        city.value = data.city || '';
      });

      const saveSettings = () => {
        chrome.storage.sync.set({ city: city.value }, () => {});
        cityChanged.value = false;
      };

      const selectCity = (c) => {
        cityChanged.value = true;
        city.value = c;
        showDropdown.value = false;
      };

      return {
        city,
        cities,
        cityChanged,
        saveSettings,
        search,
        showDropdown,
        selectCity,
      };
    },
  });
</script>
