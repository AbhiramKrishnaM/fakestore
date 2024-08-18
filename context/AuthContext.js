// context/AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// API
import Auth from "../api/auth.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loadUserData = async () => {
    try {
      const storedtoken = await AsyncStorage.getItem("authtoken");

      if (storedtoken) {
        setUserToken(JSON.parse(storedtoken));

        setIsLoggedIn(true);
      }
    } catch (error) {
      console.error("Failed to load user data:", error);
    }
  };

  const signIn = async (username, password) => {
    const response = await Auth.login({ username, password });

    if (response?.data?.token) {
      setUserToken(response.data.token);

      setIsLoggedIn(true);

      await AsyncStorage.setItem(
        "authtoken",
        JSON.stringify(response.data.token)
      );
    }

    return response;
  };

  const createUser = async (username, email, password) => {
    const response = await Auth.register({
      email: email,
      username: username,
      password: password,
      // random data
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

    return response;
  };

  const signOut = async () => {
    setUserToken(null);
    setIsLoggedIn(false);
    await AsyncStorage.removeItem("authtoken");
  };

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, signIn, signOut, createUser }}>
      {children}
    </AuthContext.Provider>
  );
};
