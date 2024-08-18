import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { ProductContext } from "../../context/ProductContext";
import { router } from "expo-router";

const ProductDetail = () => {
  const { id } = useLocalSearchParams();
  const { products, addToCart, removeFromCart, isInCart } =
    useContext(ProductContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id == id);
    setProduct(foundProduct);
  }, [id, products]);

  if (!product) {
    return <ActivityIndicator />;
  }

  const handleCartAction = () => {
    if (isInCart(product.id)) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  };

  const navigateToCart = () => {
    router.push({ pathname: "/cart" });
  };

  return (
    <SafeAreaView className="h-full">
      <View className="my-6 px-4 ">
        <View className="justify-between items-start flex-row ">
          <View>
            <Text className="font-pAmsterdam font-medium text-lg">
              {product.category}
            </Text>
            <Text className="font-pAmsterdam text-3xl">{product.title}</Text>
          </View>
        </View>

        <View className="w-full flex-1 pt-4 ">
          <Text className="font-regular text-2xl font-pAmsterdam">
            Latest Products
          </Text>
        </View>

        <View>
          <TouchableOpacity
            className="w-full h-60 rounded-xl mt-3  justify-center items-center"
            activeOpacity={0.7}
          >
            <Image
              source={{ uri: product.image }}
              className="w-full h-full rounded-xl mt-3"
              resizeMode="cover"
            />
          </TouchableOpacity>

          <Text className="mt-8 font-pAmsterdam text-base ">
            {product.description}
          </Text>
          <Text className="text-3xl font-pAmsterdam  text-center">
            ${product.price}
          </Text>

          <TouchableOpacity
            className="mt-4 p-4 bg-black rounded-lg"
            onPress={handleCartAction}
          >
            <Text className="text-white text-center font-pAmsterdam">
              {isInCart(product.id) ? "Remove from Cart" : "Add to Cart"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="mt-4 p-4 bg-black rounded-lg"
            onPress={navigateToCart}
          >
            <Text className="text-white text-center font-pAmsterdam">
              Go to Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;
