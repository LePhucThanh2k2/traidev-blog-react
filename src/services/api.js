import axios from "axios";

export const api = axios.create({
  baseURL: "https://joker.azdigi.blog/wp-json",
});
