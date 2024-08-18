import { View, Text, ScrollView } from "react-native";
import { Link, Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "./components/Button";

export default function App() {
  const handleAction = () => {
    router.push({ pathname: "/sign-in" });
  };

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full justify-center items-center px-4">
          <Text className="text-6xl font-pAmsterdam">Fakestore!</Text>

          {/* <Link href="/home">Go to Home</Link> */}
          <Button title="Continue" handlePress={() => handleAction()} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
