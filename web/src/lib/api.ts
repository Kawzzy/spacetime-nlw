import axios from "axios";

// configure the application's default route
export const api = axios.create({
  baseURL: "http://192.168.0.2:3333",
});
