import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  const backgroundStyle = "bg-black dark:bg-black";

  return (
    <SafeAreaView className="bg-white flex-1 items-center justify-center py-24 px-6 sm:py-32 lg:px-8">
      <Text className="text-gray-900 m-4 text-3xl font-bold tracking-tight">
        Kaizen
      </Text>
      <Text className="text-indigo-600 text-base font-semibold">Home</Text>
    </SafeAreaView>
  );
};

export default Home;
