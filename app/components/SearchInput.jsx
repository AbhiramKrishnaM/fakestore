import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Search } from "../../constants/IconSet";
import { router, usePathname } from "expo-router";

const SearchInput = ({
  title,
  value,
  placeholder,
  handleChangetext,
  otherStyles,
  initialQuery,
}) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");

  return (
    <View className="w-full h-14 px-3 bg-black-100 border-2 rounded-lg focus:border-gray-900  flex-row items-center">
      <TextInput
        className="flex-1 font-semibold "
        value={query}
        placeholder={placeholder}
        placeholderTextColor=""
        onChangeText={(e) => setQuery(e)}
      />

      <TouchableOpacity
        onPress={() => {
          if (!query) {
            return Alert.alert("Missing query!", "Please enter a query");
          }

          if (pathname.startsWith("/search")) {
            router.setParams({ query });
          } else router.push(`/search/${query}`);
        }}
      >
        <Image source={Search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
