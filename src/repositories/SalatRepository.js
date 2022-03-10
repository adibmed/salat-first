import Client from "./Clients/AxiosClient";
const resource =
  "timingsByCity?city=Dubai&country=United%20Arab%20Emirates&method=8";

export default {
  getCities() {
    return Client.get(resource);
  },
  getTimes() {
    return Client.get(resource);
  },
  get() {
    return Client.get(`${resource}`);
  },
  getPost(id) {
    return Client.get(`${resource}/${id}`);
  },
  create(payload) {
    return Client.post(`${resource}`, payload);
  },
  update(payload, id) {
    return Client.put(`${resource}/${id}`, payload);
  },
  delete(id) {
    return Client.delete(`${resource}/${id}`);
  },

  // MANY OTHER ENDPOINT RELATED STUFFS
};
