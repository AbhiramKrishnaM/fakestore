import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";

const zoomIn = {
  0: { scale: 0.9 },
  1: {
    scale: 1.1,
  },
};

const zoomOut = {
  0: { scale: 1 },
  1: {
    scale: 0.9,
  },
};
const TrendingItem = ({ activeItem, item }) => {
  return (
    <Animatable.View
      className="mr-5"
      animation={activeItem === item.id ? zoomIn : zoomOut}
      duration={500}
    >
      <TouchableOpacity
        className="justify-center items-center"
        activeOpacity={0.7}
      >
        <ImageBackground
          source={{ uri: item.image }}
          className="w-52 h-72 rounded-3xl my-5 overflow-hidden shadow-lg shadow-black/40"
          resizeMode="cover"
        />
      </TouchableOpacity>
    </Animatable.View>
  );
};

const Trending = ({ products }) => {
  const [activeItem, setActiveItem] = useState(products[0]);

  const viewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveItem(viewableItems[0].key);
    }
  };

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TrendingItem activeItem={activeItem} item={item} />
      )}
      onViewableItemsChanged={viewableItemsChanged}
      viewabilityConfig={{ itemVisiblePercentThreshold: 70 }}
      contentOffset={{ x: 170 }}
      horizontal
    />
  );
};

export default Trending;
