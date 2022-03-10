import axios from "axios";

const baseDomain = "http://api.aladhan.com/v1/";
const baseURL = `${baseDomain}`;

export default axios.create({
  baseURL,
});
