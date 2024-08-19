import React from "react";
import "react-native-gesture-handler/jestSetup";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");
jest.mock("react-native-reanimated", () =>
  require("react-native-reanimated/mock")
);
jest.mock("@react-navigation/native", () => {
  return {
    useNavigation: jest.fn(),
  };
});

jest.mock("expo-router", () => ({
  useLocalSearchParams: () => ({ id: "1" }),
  router: {
    push: jest.fn(),
  },
}));

jest.mock("./context/ProductContext", () => {
  const mockReact = require("react");
  return {
    ProductContext: mockReact.createContext({
      products: [
        {
          id: "1",
          title: "Test Product",
          description: "This is a test product",
          price: 100,
          category: "Category Test",
          image: "https://example.com/product.jpg",
        },
      ],
      addToCart: jest.fn(),
      removeFromCart: jest.fn(),
      isInCart: jest.fn().mockReturnValue(false),
    }),
  };
});
