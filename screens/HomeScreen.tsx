import { SafeAreaView, View, Text } from "react-native";
import React from "react";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white py-24 px-6 sm:py-32 lg:px-8">
      <Text className="m-4 text-3xl font-bold tracking-tight text-gray-900">
        Kaizen
      </Text>
      <Text className="text-base font-semibold text-indigo-600">Home</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
