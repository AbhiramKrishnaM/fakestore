import { TouchableOpacity, Text } from "react-native";
import React from "react";

const Button = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      className={`bg-black rounded-xl h-14 items-center justify-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      activeOpacity={0.7}
      disabled={isLoading}
    >
      <Text className={`${textStyles} text-white p-3`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
