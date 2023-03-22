<template>
  <div class="h-screen w-screen bg-gray-100 pt-20">
    <div class="container mx-auto py-8 max-w-2xl bg-white text-left">
      <h1 class="text-2xl font-bold mb-4 text-center">Salat First</h1>
      <div class="max-w-md mx-auto">
        <label class="block font-medium mb-2" for="city">City</label>
        <input
          class="w-full py-2 px-4 border border-gray-400 rounded mb-4"
          type="text"
          id="city"
          v-model="city"
        />
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          @click="saveSettings"
        >
          Save Settings
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: "",
    };
  },
  methods: {
    saveSettings() {
      chrome.storage.sync.set({ city: this.city }, () => {
        console.log("Settings saved");
      });
    },
  },
  created() {
    chrome.storage.sync.get("city", (data) => {
      this.city = data.city || "";
    });
  },
};
</script>
