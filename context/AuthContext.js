// context/AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// API
import Auth from "../api/auth.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const storedtoken = await AsyncStorage.getItem("authtoken");
        if (storedtoken) {
          setUserToken(JSON.parse(storedtoken));
        }
      } catch (error) {
        console.error("Failed to load user data:", error);
      }
    };
    loadUserData();
  }, []);

  const signIn = async (username, password) => {
    const response = await Auth.login({ username, password });

    if (response?.data?.token) {
      setUserToken(response.data.token);
      await AsyncStorage.setItem(
        "authtoken",
        JSON.stringify(response.data.token)
      );
    }

    return response;
  };

  const signOut = async () => {
    setUserToken(null);
    await AsyncStorage.removeItem("authtoken");
  };

  const createUser = async () => {
    await Auth.register({
      email: "John@gmail.com",
      username: "johnd",
      password: "m38rmF$",
      name: {
        firstname: "John",
        lastname: "Doe",
      },
      address: {
        city: "kilcoole",
        street: "7835 new road",
        number: 3,
        zipcode: "12926-3874",
        geolocation: {
          lat: "-37.3159",
          long: "81.1496",
        },
      },
      phone: "1-570-236-7033",
    });
  };

  return (
    <AuthContext.Provider value={{ userToken, signIn, signOut, createUser }}>
      {children}
    </AuthContext.Provider>
  );
};
