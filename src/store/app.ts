import { defineStore, acceptHMRUpdate } from 'pinia'

export const useAppStore = defineStore({
  id: "app",

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


if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}
