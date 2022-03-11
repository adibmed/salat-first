import { defineStore } from "pinia";
import Repository from "../repositories/RepositoryFactory";
const SalatRepository = Repository.get("salat");

export const useSettingsStore = defineStore("settings", {
  state: () => {
    return {
      cities: [],
    };
  },

  getters: {
    // cities: (state) => {
    //   return state.Test;
    // },
  },

  actions: {
    async getCities() {
      const { data } = await SalatRepository.getCities();
      // this.cities = data;
      console.log(data);
    },
  },
});
