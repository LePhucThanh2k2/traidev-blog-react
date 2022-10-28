import axios from "axios";

export const api = axios.create({
  baseURL: "http://wp-api.test/wp-json",
});
