import { defineStore } from "pinia";
import Repository from "../repositories/RepositoryFactory";
const SalatRepository = Repository.get("salat");

export const useSalatStore = defineStore("salat", {
  state: () => {
    return {
      timings: [],
      hijriDate: "",
      gregorianDate: "",
    };
  },

  getters: {
    times: (state) => {
      var myTime = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha", "Sunrise"];

      const times = Object.keys(state.timings)
        .filter((key) => myTime.includes(key))
        .reduce((obj, key) => {
          obj[key] = state.timings[key];
          return obj;
        }, {});
      return times;
    },
  },

  actions: {
    async getTodayTimes() {
      const { data } = await SalatRepository.getTimes();
      this.timings = data.data.timings;
      this.hijriDate = `${data.data.date.hijri.weekday.ar} ${data.data.date.hijri.day} ${data.data.date.hijri.month.ar} ${data.data.date.hijri.year}`;
      this.gregorianDate = `${data.data.date.gregorian.day} ${data.data.date.gregorian.month.en} ${data.data.date.gregorian.year}`;
    },
  },
});
