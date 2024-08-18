import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-6xl font-pAmsterdam">Fakestore!</Text>
      <StatusBar style="auto" />
      <Link href="/home">Go to Home</Link>
    </View>
  );
}
