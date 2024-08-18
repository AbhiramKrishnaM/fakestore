import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { Search } from "../../constants/IconSet";

const SearchInput = ({
  title,
  value,
  placeholder,
  handleChangetext,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="w-full h-14 px-3 bg-black-100 border-2 rounded-lg focus:border-gray-900  flex-row items-center">
      <TextInput
        className="flex-1 font-semibold "
        value={value}
        placeholder={placeholder}
        placeholderTextColor=""
        onChangeText={handleChangetext}
        secureTextEntry={title === "Password" && !showPassword}
      />

      <TouchableOpacity>
        <Image source={Search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
