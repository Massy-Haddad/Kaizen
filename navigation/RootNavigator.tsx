import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import { Home, FoodDetail, Analytics } from "../screens";
import { StatusBar } from "expo-status-bar";

const BottomTab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <StatusBar translucent />
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
            headerShown:false,
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Ionicons name="home-outline" size={32} />
              </View>
            ),
          }}
        />
        <BottomTab.Screen
          name="Analytics"
          component={Analytics}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Ionicons name="analytics-outline" size={32} />
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
