// context/AuthContext.js
import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// API
import Auth from "../api/auth.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isUserDataLoading, setIsUserDataLoading] = useState(false);
  const [user, setUser] = useState(null);

  const loadUserData = async () => {
    try {
      const storedtoken = await AsyncStorage.getItem("authtoken");

      const user = await AsyncStorage.getItem("username");

      if (storedtoken) {
        setUserToken(JSON.parse(storedtoken));

        setUser(JSON.parse(user));

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

      setUser(username);

      await AsyncStorage.setItem(
        "authtoken",
        JSON.stringify(response.data.token)
      );

      await AsyncStorage.setItem("username", JSON.stringify(username));
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

  const getUserDetails = async () => {
    setIsUserDataLoading(true);
    try {
      const response = await Auth.getAllUsers();

      const users = response.data;

      const matchingUser = users.find((x) => x.username === user);

      console.log(matchingUser);

      if (matchingUser) {
        return matchingUser;
      } else {
        console.log("User not found.");
        return null;
      }
    } catch (error) {
      console.error("Failed to fetch users:", error);
      return null;
    } finally {
      setIsUserDataLoading(false);
    }
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
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        isUserDataLoading,
        signIn,
        signOut,
        createUser,
        getUserDetails,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
