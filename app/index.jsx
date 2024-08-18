import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Fakestore!</Text>
      <Link href={"/pages/profile"} style={{ color: "blue" }}>
        Go to My Profile
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
