import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";
import React, { useContext, useState } from "react";
import { ProductContext } from "../../context/ProductContext";
import { Wander } from "react-native-animated-spinkit";
import { router } from "expo-router";

const Cart = () => {
  const { cart, removeFromCart, setCart } = useContext(ProductContext);
  const [isLoading, setIsLoading] = useState(false);

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0).toFixed(2);
  };

  const handleCheckout = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      Alert.alert("Success", "Your order has been placed!", [
        {
          text: "OK",
          onPress: () => {
            setCart([]);
            router.push({ pathname: "/home" });
          },
        },
      ]);
    }, 2000);
  };

  const renderCartItem = ({ item }) => (
    <View className="flex-row justify-between items-center p-4 border-b border-gray-200">
      <Image
        source={{ uri: item.image }}
        className="w-16 h-16 rounded"
        resizeMode="cover"
      />
      <View className="flex-1 ml-4">
        <Text className="text-lg font-pAmsterdam">{item.title}</Text>
        <Text className="text-gray-500">${item.price.toFixed(2)}</Text>
      </View>
      <TouchableOpacity
        className="p-2 bg-black rounded"
        onPress={() => removeFromCart(item.id)}
      >
        <Text className="text-white">Remove</Text>
      </TouchableOpacity>
    </View>
  );

  if (cart.length === 0) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-lg font-pAmsterdam">Your cart is empty.</Text>
      </View>
    );
  }

  return (
    <SafeAreaView className="h-full">
      <FlatList
        className="mt-6"
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCartItem}
        ListFooterComponent={
          <View className="mt-4 p-4 items-center">
            <Text className="text-2xl font-pAmsterdam">
              Total: ${getTotalPrice()}
            </Text>

            <TouchableOpacity
              className="mt-4 p-4 bg-black rounded-lg w-full items-center"
              onPress={handleCheckout}
              disabled={isLoading}
            >
              {isLoading ? (
                <Wander size={18} color="#ffffff" />
              ) : (
                <Text className="text-white text-center text-lg">Checkout</Text>
              )}
            </TouchableOpacity>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default Cart;
