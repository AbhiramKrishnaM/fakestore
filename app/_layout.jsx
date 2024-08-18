import { Slot, Stack, SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";

import { AuthProvider } from "../context/AuthContext";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "NewAmsterdam-Regular": require("../assets/fonts/NewAmsterdam-Regular.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="/search/[id]" options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  );
};

export default RootLayout;
