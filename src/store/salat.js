import { defineStore } from "pinia";
import Repository from "../repositories/RepositoryFactory";
const SalatRepository = Repository.get("salat");

export const useSalatStore = defineStore("salat", {
  state: () => {
    return {
      timings: [],
      hijriDate: "",
      currentDay: 28,
      gregorianDate: "",
      currentMonth: 4,
      currentYear: 1443,
      monthCalenday: [],
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

    async getMonthCalendar(month, year) {
      const { data } = await SalatRepository.getCalendar(month, year);
      this.monthCalenday = data.data;
    },

    getNextCalendar() {
      this.getCalendar(1);
    },

    getPrevCalendar() {
      this.getCalendar(-1);
    },

    async getCalendar(inc) {
      // check if the month calendary is not empty
      if (this.monthCalenday.length === 0) {
        await this.getMonthCalendar(this.currentMonth, this.currentYear);
      } else {
        this.currentDay += inc;

        if (this.currentDay > this.monthCalenday.length) {
          this.currentDay = 1;
          this.currentMonth += 1;
          if (this.currentMonth > 12) {
            this.currentMonth = 1;
            this.currentYear += 1;
          }

          this.getMonthCalendar(this.currentMonth, this.currentYear);
        }

        if (this.currentDay === 0) {
          this.currentMonth -= 1;
          if (this.currentMonth < 1) {
            this.currentMonth = 12;
            this.currentYear -= 1;
          }
          this.getMonthCalendar(this.currentMonth, this.currentYear);
          this.currentDay = this.monthCalenday.length;
        }

        this.timings = this.monthCalenday[this.currentDay - 1].timings;
        this.hijriDate = `${
          this.monthCalenday[this.currentDay - 1].date.hijri.weekday.ar
        } ${this.monthCalenday[this.currentDay - 1].date.hijri.day} ${
          this.monthCalenday[this.currentDay - 1].date.hijri.month.ar
        } ${this.monthCalenday[this.currentDay - 1].date.hijri.year}`;
        this.gregorianDate = `${
          this.monthCalenday[this.currentDay - 1].date.gregorian.day
        } ${this.monthCalenday[this.currentDay - 1].date.gregorian.month.en} ${
          this.monthCalenday[this.currentDay - 1].date.gregorian.year
        }`;
      }
    },
  },
});