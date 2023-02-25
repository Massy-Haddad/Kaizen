import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, DateSlider } from "../../components";

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-skin-fill">
      <View className="flex-row items-center justify-between p-4">
        <View>
          <Text className="text-xl font-bold tracking-tight text-skin-base">
            Massy
          </Text>
          <Text className="text-xs font-semibold leading-6 text-skin-muted">
            Welcome back !
          </Text>
        </View>

        <Avatar />
      </View>
      <DateSlider />
    </SafeAreaView>
  );
};

export default Home;
