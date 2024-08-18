import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../context/AuthContext";
import { Logout } from "../../constants/IconSet";
import { router } from "expo-router";
import { Wave } from "react-native-animated-spinkit";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const { user, isUserDataLoading, getUserDetails, signOut } =
    useContext(AuthContext);

  const logout = () => {
    signOut();
    router.push("/");
  };

  // Fetch user data when component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      const userDetails = await getUserDetails(); // Call getUserDetails to fetch user data
      if (userDetails) {
        setUserData(userDetails); // Set the state with fetched user details
      }
    };

    fetchUserData();
  }, []);

  return (
    <SafeAreaView className="h-full">
      <View className="my-6 px-4 space-y-6">
        <View className="justify-between items-start flex-row mb-4">
          <View>
            <Text className="font-pAmsterdam text-5xl">Settings</Text>
            <Text className="font-pAmsterdam font-medium text-lg">
              Update your preferences here.
            </Text>
          </View>

          <View className="pt-2">
            <TouchableOpacity activeOpacity={0.7} onPress={logout}>
              <Image source={Logout} className="w-8 h-8" resizeMode="contain" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="justify-between items-start flex-row ">
          <View>
            <Text className="font-pAmsterdam font-medium text-lg">
              Username
            </Text>
            <Text className="font-pAmsterdam text-4xl">
              {isUserDataLoading ? (
                <Wave />
              ) : (
                userData?.username || "No user found"
              )}
            </Text>
          </View>
        </View>

        <View className="justify-between items-start flex-row">
          <View>
            <Text className="font-pAmsterdam font-medium text-lg">Email</Text>
            <Text className="font-pAmsterdam text-4xl">
              {isUserDataLoading ? (
                <Wave />
              ) : (
                userData?.email || "No email found"
              )}
            </Text>
          </View>
        </View>

        <View className="justify-between items-start flex-row ">
          <View>
            <Text className="font-pAmsterdam font-medium text-lg">City</Text>
            <Text className="font-pAmsterdam text-4xl">
              {isUserDataLoading ? (
                <Wave />
              ) : (
                userData?.address.city || "No city found"
              )}
            </Text>
          </View>
        </View>

        <View className="justify-between items-start flex-row ">
          <View>
            <Text className="font-pAmsterdam font-medium text-lg">Street</Text>
            <Text className="font-pAmsterdam text-4xl">
              {isUserDataLoading ? (
                <Wave />
              ) : (
                userData?.address.street || "No street found"
              )}
            </Text>
          </View>
        </View>

        <View className="justify-between items-start flex-row ">
          <View>
            <Text className="font-pAmsterdam font-medium text-lg">Zipcode</Text>
            <Text className="font-pAmsterdam text-4xl">
              {isUserDataLoading ? (
                <Wave />
              ) : (
                userData?.address.zipcode || "No zipcode found"
              )}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
