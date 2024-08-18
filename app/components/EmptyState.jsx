import { View, Text, Image } from "react-native";
import React from "react";
import { EmptyBox } from "../../constants/IconSet";

const EmptyState = ({ title }) => {
  return (
    <View className="justify-center items-center px-4 mt-8">
      <Image source={EmptyBox} className="w-28 h-28" resizeMode="contain" />
      <Text className="text-xl mt-4 font-pAmsterdam">{title}</Text>
    </View>
  );
};

export default EmptyState;
