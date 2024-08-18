import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import { MenuVertical } from "../../constants/IconSet";

const ProductCard = ({ product: { title, price, category, image } }) => {
  return (
    <View className="flex-col items-center px-4 mb-14">
      <View className="flex-row gap-3 items-start">
        <View className="justify-center items-center flex-row flex-1">
          <View className="w-[46px] h-[46px] rounded-lg border justify-center items-center p-0.5">
            <Image
              source={{ uri: image }}
              className="w-full h-full rounded-lg"
              resizeMode="cover"
            />
          </View>

          <View className="justify-center flex-1 ml-3 gap-y-1">
            <Text className="text-base font-pAmsterdam" numberOfLines={1}>
              {title}
            </Text>

            <Text className="text-2xl font-pAmsterdam" numberOfLines={1}>
              ${price}
            </Text>
          </View>
        </View>

        <View className="pt-2">
          <Image
            source={MenuVertical}
            className="w-5 h-5"
            resizeMode="contain"
          />
        </View>
      </View>

      <TouchableOpacity className="w-full h-60 rounded-xl mt-3 relative justify-center items-center">
        <Image
          source={{ uri: image }}
          className="w-full h-full rounded-xl mt-3"
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;
