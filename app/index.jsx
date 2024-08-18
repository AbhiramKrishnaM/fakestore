import { View, Text, ScrollView } from "react-native";
import { Link, Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "./components/Button";
import { isLoaded } from "expo-font";
import { useState, useEffect, useContext } from "react";

import { AuthContext } from "../context/AuthContext";

export default function App() {
  const { isLoggedIn } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  const handleAction = () => {
    router.push({ pathname: "/sign-in" });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);

      console.log(isLoggedIn, "user logged in");

      if (isLoggedIn) {
        router.push({ pathname: "/home" });
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full justify-center items-center px-4">
          <Text className="text-6xl font-pAmsterdam">Fakestore!</Text>

          <Button
            title="Continue"
            handlePress={() => handleAction()}
            containerStyles="mt-4 min-w-[50px] h-[50px]"
            isLoading={isLoading}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
