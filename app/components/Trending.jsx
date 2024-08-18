import { View, Text, FlatList } from "react-native";
import React from "react";

const Trending = ({ products }) => {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Text className="text-3xl ">{item.id}</Text>}
      horizontal
    />
  );
};

export default Trending;
