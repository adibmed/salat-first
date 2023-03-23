<script>
import hadithData from "../static/hadith.json";
export default {
  computed: {
    hadith() {
      const today = new Date();
      const day = today.getDay();
      const hadith = hadithData[day];
      return hadith;
    },
  },
};
</script>

<template>
  <div class="px-2 pt-4">
    <div class="bg-gray-800 rounded-md">
      <div class="text-center bg-gray-700 text-sm rounded-t-md text-white py-1">
        {{ $t("hadith_of_the_day") }}
      </div>
      <div class="text-white text-center px-1 py-2 text-sm leading-6">
        {{ hadith.text }}
      </div>
    </div>
  </div>
</template>
