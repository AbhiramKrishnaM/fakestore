import { View, Text, ScrollView, Alert } from "react-native";
import React, { useState, useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../components/FormField";
import Button from "../components/Button";
import { Link, router } from "expo-router";

import { AuthContext } from "../../context/AuthContext";

const SignIn = () => {
  const { signIn } = useContext(AuthContext);

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const submit = async () => {
    const { username, password } = form;

    // Validation: Check if username or password fields are empty
    if (!username || !password) {
      Alert.alert("Error", "Username and password are required.");
      setSubmitting(false);
      return;
    }

    setSubmitting(true);

    try {
      const response = await signIn(username, password);

      router.push({ pathname: "/home" });
    } catch (error) {
      console.error("Failed to sign in:", error);
      Alert.alert("Error", "Failed to sign in. Please check your credentials.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="flex-1  bg-white">
      <ScrollView>
        <View className="w-full mt-28  px-8 ">
          <Text className="text-5xl font-pAmsterdam">Fakestore!</Text>
          <Text className="text-xl font-pAmsterdam">Log into Fakestore</Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangetext={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-4"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangetext={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-4"
          />

          <Button
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-4"
            isLoading={submitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-700 font-regular">
              Don't have an account?
            </Text>

            <Link
              href="/sign-up"
              className="text-lg font-semibold text-blue-600 underline"
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
