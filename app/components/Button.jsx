import { TouchableOpacity, Text } from "react-native";
import React from "react";
import { Wander } from "react-native-animated-spinkit";

const Button = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      className={`bg-black rounded-xl h-14 items-center justify-center  ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      activeOpacity={0.7}
      disabled={isLoading}
      onPress={handlePress}
    >
      {isLoading ? (
        <Wander size={18} color="#FFF" />
      ) : (
        <Text className={`${textStyles} text-white p-3`}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
