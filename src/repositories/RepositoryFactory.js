import CityRepository from "./SalatRepository";

const repositories = {
  salat: CityRepository,
};

export default {
  get: (name) => repositories[name],
};
