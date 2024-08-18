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

// Axios request interceptor to add the token to the request headers
api.interceptors.request.use(
  async (config) => {
    try {
      // Get the token from AsyncStorage
      const token = await AsyncStorage.getItem("authtoken");

      if (token) {
        // Attach the token to the Authorization header if it exists
        config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      }
    } catch (error) {
      console.error("Error fetching token from AsyncStorage:", error);
    }

    return config;
  },
  (error) => {
    // Handle the error
    return Promise.reject(error);
  }
);

export default api;
