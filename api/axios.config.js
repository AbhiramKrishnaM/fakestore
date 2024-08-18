/**
 * Axios configuration
 */

import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_BASE_URL } from "@env";

// Create an instance of Axios
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem("authtoken");

      if (token) {
        config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      }
    } catch (error) {
      console.error("Error fetching token from AsyncStorage:", error);
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
