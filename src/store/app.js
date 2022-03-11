import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => {
    return {
      isAsideOpen: true,
    };
  },

  actions: {
    toggleAsideMenu() {
      this.isAsideOpen = !this.isAsideOpen;
    },
  },
});
