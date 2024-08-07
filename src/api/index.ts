import axios from "axios";
export * from "./types";
export * from "./api_routes";

export const Api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Pragma: "no-cache",
  },
});
