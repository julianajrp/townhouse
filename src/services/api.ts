import axios from "axios";

export const api = axios.create({
  baseURL: "https://m3-final-town-house.herokuapp.com/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
