import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  RefreshControl,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import Trending from "../components/Trending";
import EmptyState from "../components/EmptyState";

import { ProductContext } from "../../context/ProductContext";

const Home = () => {
  const [refreshing, setRefreshing] = useState(false);

  const { products, fetchProducts } = useContext(ProductContext);

  const onRefresh = async () => {
    setRefreshing(true);

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
        renderItem={({ item }) => <Text className="text-3xl">{item.id}</Text>}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-4">
              <View>
                <Text className="font-pAmsterdam font-medium text-lg">
                  Welcome Back
                </Text>
                <Text className="font-pAmsterdam text-5xl">Smantha</Text>
              </View>
            </View>

            <SearchInput otherStyles="" placeholder="Search Products" />

            <View className="w-full flex-1 pt-4 pb-8">
              <Text className="font-regular text-base">Latest Products</Text>

              <Trending products={[{ id: 0 }, { id: 1 }, { id: 2 }] ?? []} />
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
