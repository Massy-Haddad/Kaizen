import { View, Image } from "react-native";
import React from "react";

const Avatar = () => {
  return (
    <View className="flex h-10 w-10 justify-center items-center overflow-hidden rounded-full border-2 border-skin-inverted">
      <Image
        source={{
          uri: "https://lh3.googleusercontent.com/a/AGNmyxYjui5Gf1QAkN7Ke6BcefAYFRN02N_84NEpZUFsPQ=s192-c-rg-br100",
        }}
        className="inline-block h-10 w-10"
      />
    </View>
  );
};

export default Avatar;
