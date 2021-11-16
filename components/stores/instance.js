import axios from "axios";

export const baseURL = "http://192.168.1.118:8001";

export const instance = axios.create({
  baseURL: `${baseURL}/api`,
});
