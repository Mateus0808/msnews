import axios from "axios";

export const api = axios.create({
  baseURL: "/api", // O axios ira aproveitar a url da aplicação http://local.../api
});
