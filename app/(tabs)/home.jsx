import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  RefreshControl,
  Alert,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import Trending from "../components/Trending";
import EmptyState from "../components/EmptyState";

import { ProductContext } from "../../context/ProductContext";
import { AuthContext } from "../../context/AuthContext";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);

  const { user } = useContext(AuthContext);

  const { products, trendingProducts, isLoading, fetchProducts } =
    useContext(ProductContext);

  const onRefresh = async () => {
    setRefreshing(true);
    fetchProducts();
    setRefreshing(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <SafeAreaView className="h-full">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-4">
              <View>
                <Text className="font-pAmsterdam font-medium text-lg">
                  Welcome Back
                </Text>
                <Text className="font-pAmsterdam text-5xl">{user}</Text>
              </View>
            </View>

            <SearchInput otherStyles="" placeholder="Search Products" />

            <View className="w-full flex-1 pt-4 pb-8">
              <Text className="font-regular text-2xl font-pAmsterdam">
                Latest Products
              </Text>

              <Trending products={trendingProducts} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => <EmptyState title="No Products Found" />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
