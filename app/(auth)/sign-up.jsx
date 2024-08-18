import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../components/FormField";
import Button from "../components/Button";
import { Link } from "expo-router";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [submitting, setSubmitting] = useState(false);

  const submit = () => {
    setSubmitting(true);
  };

  return (
    <SafeAreaView className="flex-1  bg-white">
      <ScrollView>
        <View className="w-full mt-28  px-8 ">
          <Text className="text-5xl font-pAmsterdam">Fakestore!</Text>
          <Text className="text-xl font-pAmsterdam">Create Your account</Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangetext={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-4"
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangetext={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-4"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangetext={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-4"
          />

          <Button
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-4"
            isLoading={submitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-700 font-regular">
              Have an account already?
            </Text>

            <Link
              href="/sign-in"
              className="text-lg font-semibold text-blue-600 underline"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
