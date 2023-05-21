import axios from "axios";

// configure the application's default route
export const api = axios.create({
  baseURL: "http://localhost:3333",
});
