import { View, Text, Image } from "react-native";
import React, { useContext } from "react";
import { Tabs, Redirect } from "expo-router";
import * as IconSet from "../../constants/IconSet";
import { ProductContext } from "../../context/ProductContext";

const TabIcon = ({ icon, color, name, focused, showBadge, count }) => {
  return (
    <View className="items-center justify-center gap-1 relative">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className={`${focused ? "w-8 h-8" : "w-6 h-6"}`}
      />
      {showBadge && (
        <View
          className="absolute bg-red-500 rounded-full w-5 h-5 justify-center items-center"
          style={{
            top: -16,
            right: -12,
          }}
        >
          <Text className="text-white text-xs">{count}</Text>
        </View>
      )}
      <Text
        className={`${
          focused ? `text-sm` : `text-xs text-slate-500`
        } font-pAmsterdam`}
      >
        {name}
      </Text>
    </View>
  );
};
const TabsLayout = () => {
  const { cartItemCount } = useContext(ProductContext); // Access cart item count

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "#cdcde0",
          tabBarStyle: {
            padding: 20,
            marginBottom: 10,
            backgroundColor: "transparent",
            borderStyle: "none",
            width: "80%",
            marginHorizontal: "auto",
            borderTopWidth: 0,
            elevation: 0,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={IconSet.Home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={IconSet.User}
                color={color}
                name="Profile"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="cart"
          options={{
            title: "Cart",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={IconSet.Cart}
                color={color}
                name="Cart"
                focused={focused}
                count={cartItemCount}
                showBadge={cartItemCount > 0}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
