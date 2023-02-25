import { useColorScheme, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import { Home, FoodDetail, Analytics } from "../screens";

const BottomTab = createBottomTabNavigator();

export default function RootNavigator() {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <NavigationContainer>
      <StatusBar translucent style={isDarkMode ? "light" : "dark"} />
      <BottomTab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBarStyle,
          tabBarActiveTintColor: "#fff",
        }}
      >
        <BottomTab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View className="items-center justify-center">
                <Ionicons
                  // name={focused ? "home" : "home-outline"}
                  name="home-outline"
                  size={32}
                  color={focused ? "#111802" : "#2F4306"}
                />
              </View>
            ),
          }}
        />
        <BottomTab.Screen
          name="Analytics"
          component={Analytics}
          options={{
            tabBarIcon: ({ focused }) => (
              <View className="items-center justify-center">
                <Ionicons
                  // name={focused ? "analytics" : "analytics-outline"}
                  name="analytics-outline"
                  size={32}
                  color={focused ? "#111802" : "#2F4306"}
                />
              </View>
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 70,
  },
});
