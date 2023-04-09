import { defineStore, acceptHMRUpdate } from 'pinia';
import Repository from '../repositories/RepositoryFactory';
const SalatRepository = Repository.get('salat');

export const useSalatStore = defineStore({
  id: 'salat',
  state: () => {
    return {
      isLoaded: false,
      moroccanTimes: [],
      nextDayFajr: null,
      calendarTimes: []
    };
  },

  getters: {
    upComingSalat: (state) => {
      const now = new Date();
      const times = state.moroccanTimes;
      let nextSalat = null;

      for (const time of times) {
        const prayerTime = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          time.time.split(':')[0],
          time.time.split(':')[1]
        );
        if (time.title === 'Chorouq') {
          continue;
        }

        if (
          prayerTime.getHours() > now.getHours() ||
          (prayerTime.getHours() === now.getHours() && prayerTime.getMinutes() > now.getMinutes())
        ) {
          nextSalat = { title: time.title, time: prayerTime };
          break;
        }
      }

      if (!nextSalat) {
        return 'null';
      }

      return {
        title: nextSalat.title,
      };
    },

    timeToNextSalat: (state) => {
      const now = new Date();
      const times = state.moroccanTimes;
      let nextSalat = null;

      for (const time of times) {
        const prayerTime = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          time.time.split(':')[0],
          time.time.split(':')[1]
        );
        if (time.title === 'Chorouq') {
          continue;
        }

        if (
          prayerTime.getHours() > now.getHours() ||
          (prayerTime.getHours() === now.getHours() && prayerTime.getMinutes() > now.getMinutes())
        ) {
          nextSalat = { title: time.title, time: prayerTime };
          break;
        }
      }

      if (!nextSalat) {
        return null;
      }

      const diff = nextSalat.time - now;
      const hours = Math.floor(diff / 3600000); // 3600000 ms in an hours
      const minutes = Math.floor((diff % 3600000) / 60000); // 60000 ms in a minute
      const seconds = Math.floor(((diff % 360000) % 60000) / 1000); // 1000 ms in a second

      return {
        title: nextSalat.title,
        hours,
        minutes,
        seconds,
      };
    },
  },

  actions: {
    getMoroccanTime(city, month, day) {
      SalatRepository.getTimes(city, month, day)
        .then((response) => {
          const times = Object.keys(response.data[0]).map((key) => {
            return { title: key, time: response.data[0][key] };
          });
          this.moroccanTimes = times;
          this.calendarTimes = times;
          this.isLoaded = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCalendarTime(city, month, day) {
      SalatRepository.getTimes(city, month, day)
        .then((response) => {
          const times = Object.keys(response.data[0]).map((key) => {
            return { title: key, time: response.data[0][key] };
          });
          this.calendarTimes = times;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
});

// if (import.meta.hot) {
//   import.meta.hot.accept(acceptHMRUpdate(useSalatStore, import.meta.hot));
// }
