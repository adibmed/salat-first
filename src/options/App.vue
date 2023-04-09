<template>
  <div class="h-screen w-screen bg-gray-100 pt-20">
    <div class="container mx-auto py-8 max-w-2xl bg-white">
      <h1 class="text-2xl font-bold mb-4 text-center">Salat First</h1>
      <div class="max-w-md mx-auto">
        <label class="block font-medium mb-2" for="city">{{ $t('city') }} : {{ city.name }}</label>

        <select
          class="block mb-2 w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          id="city"
          @change="cityChanged = true"
          v-model="city"
        >
          <option value="">{{ $t('select_city') }}</option>
          <option v-for="city in cities" :value="city" :key="city.id">
            {{ city.name }}
          </option>
        </select>
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
</template>

<script>
  import { ref, reactive } from 'vue';
  import locations from '../static/locations.json';

  export default {
    setup() {
      const city = ref('');
      const cities = reactive(locations);
      const cityChanged = ref(false);

      chrome.storage.sync.get('city', (data) => {
        city.value = data.city || '';
      });

      const saveSettings = () => {
        chrome.storage.sync.set({ city: city.value }, () => {});
      };

      return {
        city,
        cities,
        cityChanged,
        saveSettings,
      };
    },
  };
</script>
