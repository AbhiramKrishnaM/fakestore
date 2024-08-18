import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { ClosedEye, OpenEye } from "../../constants/IconSet";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangetext,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-700 font-medium">{title}</Text>

      <View className="w-full h-14 px-3 bg-black-100 border-2 rounded-lg focus:border-gray-900  flex-row items-center">
        <TextInput
          className="flex-1 font-semibold"
          value={value}
          placeholder={placeholder}
          placeholderTextColor=""
          onChangeText={handleChangetext}
          secureTextEntry={title === "Password" && !showPassword}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? ClosedEye : OpenEye}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
