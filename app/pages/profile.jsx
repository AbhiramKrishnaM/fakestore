import { StyleSheet, View, Text } from "react-native";
import React from "react";

const profile = () => {
  return (
    <View style={styles.container}>
      <Text>This is my profile page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default profile;
