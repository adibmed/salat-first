import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
  state: () => {
    return {
      isAsideOpen: false,
    };
  },

  actions: {
    toggleAsideMenu() {
      this.isAsideOpen = !this.isAsideOpen;
    },
  },
});
