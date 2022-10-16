import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import View1 from "../screens/View1";
import View2 from "../screens/View2";

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "View1") {
              iconName = focused ? "ios-information-circle" : "arrow-back";
            } else if (route.name === "View2") {
              iconName = focused ? "ios-information-circle" : "arrow-forward";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "dodgerblue",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="View1" component={View1} />
        <Tab.Screen name="View2" component={View2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainTabNavigator;
