import axios from 'axios';

const baseDomain = 'https://www.habous.gov.ma/';
const baseURL = `${baseDomain}`;

export default axios.create({
  baseURL,
});
