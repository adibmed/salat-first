import Client from './Clients/AxiosClient';

export default {
  getTimes(city, month, day) {
    return Client.get(`prieres/api.php?ville=${city}&mois=${month}&jour=${day}`);
  },
};
