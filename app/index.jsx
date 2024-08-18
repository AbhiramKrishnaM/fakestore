import { StatusBar } from "expo-status-bar";
import { View, Text, ScrollView } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "./components/Button";

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full justify-center items-center px-4">
          <Text className="text-6xl font-pAmsterdam">Fakestore!</Text>
          <StatusBar style="auto" />
          {/* <Link href="/home">Go to Home</Link> */}

          <Button title="Continue" handlePress={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
