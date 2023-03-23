<template>
  <div class="h-screen w-screen bg-gray-100 pt-20">
    <div class="container mx-auto py-8 max-w-2xl bg-white">
      <h1 class="text-2xl font-bold mb-4 text-center">Salat First</h1>
      <div class="max-w-md mx-auto">
        <label class="block font-medium mb-2" for="city">City {{ city }}</label>

        <select
          class="block mb-2 w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          id="city"
          @change="cityChanged = true"
          v-model="city"
        >
          <option value="">Select City</option>
          <option v-for="city in cities" :value="city.Name" :key="city.id">
            {{ city.Name }}
          </option>
        </select>
        <button
          :disabled="!cityChanged"
          :class="{
            'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded':
              cityChanged,
            'bg-gray-500 text-white font-bold py-2 px-4 rounded': !cityChanged,
          }"
          @click="saveSettings"
        >
          Save Settings
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import locations from "../static/locations.json";
export default {
  data() {
    return {
      city: "",
      cities: [],
      cityChanged: false,
    };
  },

  methods: {
    saveSettings() {
      chrome.storage.sync.set({ city: this.city }, () => {});
    },
  },
  created() {
    this.cities = locations;
    chrome.storage.sync.get("city", function (data) {
      this.city = data.city || "";
    });
    chrome.storage.sync.get("city", (data) => {
      this.city = data.city || "";
    });
  },
};
</script>
