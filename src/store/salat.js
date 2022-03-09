import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => {
    return {
      Test: 0,
    };
  },

  getters: {
    getTest: (state) => {
      return state.Test;
    },
  },

  actions: {
    incrementTest: (state) => {
      state.Test++;
    },
  },
});
