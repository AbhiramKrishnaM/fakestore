import { useLocalSearchParams } from "expo-router";
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
import ProductCard from "../components/ProductCard";

const ProductSearch = () => {
  const { query } = useLocalSearchParams();
  const { products } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (query) {
      const lowerCaseQuery = query.toLowerCase();

      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(lowerCaseQuery)
      );

      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [query, products]);

  return (
    <SafeAreaView className="h-full">
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard product={item} />}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="justify-between items-start flex-row mb-4">
              <View>
                <Text className="font-pAmsterdam font-medium text-lg">
                  Search Results
                </Text>
                <Text className="font-pAmsterdam text-5xl">{query}</Text>
              </View>
            </View>

            <SearchInput initialQuery={query} placeholder="Search Products" />
          </View>
        )}
        ListEmptyComponent={() => <EmptyState title="No Products Found" />}
      />
    </SafeAreaView>
  );
};

export default ProductSearch;
