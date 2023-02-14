import { SafeAreaView, Text } from "react-native";
import React from "react";

const FoodDetail = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white py-24 px-6 sm:py-32 lg:px-8">
        <Text className="text-base font-semibold text-indigo-600">Food</Text>
    </SafeAreaView>
  );
};

export default FoodDetail;
