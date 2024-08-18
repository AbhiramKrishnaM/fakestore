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

const Profile = () => {
  const { getUserDetails, signOut } = useContext(AuthContext);

  const logout = () => {
    signOut();
    router.push("/");
  };

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

        <View className="justify-between items-start flex-row mb-2">
          <View>
            <Text className="font-pAmsterdam font-medium text-lg">
              Username
            </Text>
            <Text className="font-pAmsterdam text-4xl">Abhiram</Text>
          </View>
        </View>

        <View className="justify-between items-start flex-row mb-2">
          <View>
            <Text className="font-pAmsterdam font-medium text-lg">Email</Text>
            <Text className="font-pAmsterdam text-4xl">abhiram@gmail.com</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
