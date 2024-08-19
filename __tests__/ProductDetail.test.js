import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import ProductDetail from "../app/product/[id]";
import { ProductContext } from "../context/ProductContext";

describe("ProductDetail Component", () => {
  const mockProduct = {
    id: "1",
    title: "Test Product",
    description: "This is a test product",
    price: 100,
    category: "Category Test",
    image: "https://example.com/product.jpg",
  };

  const addToCart = jest.fn();
  const removeFromCart = jest.fn();
  const isInCart = jest.fn().mockReturnValue(false);

  it("renders product details correctly", () => {
    const { getByText } = render(
      <ProductContext.Provider
        value={{ products: [mockProduct], addToCart, removeFromCart, isInCart }}
      >
        <ProductDetail />
      </ProductContext.Provider>
    );

    expect(getByText("Test Product")).toBeTruthy();
    expect(getByText("This is a test product")).toBeTruthy();
    expect(getByText("$100")).toBeTruthy();
  });

  it("calls addToCart when 'Add to Cart' button is pressed", () => {
    const { getByText } = render(
      <ProductContext.Provider
        value={{ products: [mockProduct], addToCart, removeFromCart, isInCart }}
      >
        <ProductDetail />
      </ProductContext.Provider>
    );

    const addToCartButton = getByText("Add to Cart");
    fireEvent.press(addToCartButton);

    expect(addToCart).toHaveBeenCalledWith(mockProduct);
  });

  it("calls removeFromCart when 'Remove from Cart' button is pressed if the product is already in the cart", () => {
    isInCart.mockReturnValue(true);

    const { getByText } = render(
      <ProductContext.Provider
        value={{ products: [mockProduct], addToCart, removeFromCart, isInCart }}
      >
        <ProductDetail />
      </ProductContext.Provider>
    );

    const removeFromCartButton = getByText("Remove from Cart");
    fireEvent.press(removeFromCartButton);

    expect(removeFromCart).toHaveBeenCalledWith(mockProduct.id);
  });

  it("renders the correct button text based on cart state", () => {
    isInCart.mockReturnValueOnce(false);

    const { getByText, rerender } = render(
      <ProductContext.Provider
        value={{ products: [mockProduct], addToCart, removeFromCart, isInCart }}
      >
        <ProductDetail />
      </ProductContext.Provider>
    );

    expect(getByText("Add to Cart")).toBeTruthy();

    isInCart.mockReturnValueOnce(true);

    rerender(
      <ProductContext.Provider
        value={{ products: [mockProduct], addToCart, removeFromCart, isInCart }}
      >
        <ProductDetail />
      </ProductContext.Provider>
    );

    expect(getByText("Remove from Cart")).toBeTruthy();
  });
});
