import * as React from "react";
import { Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Colors } from "react-native-paper";

function View1() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#55c6cf",
      }}
    >
      <Text>Hello SER 423! my name is Nichole Courtney.</Text>
    </View>
  );
}

function View2() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#dec466",
      }}
    >
      <Text>Thanks for using my app!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function App() {
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

            // You can return any component that you like here!
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

export default App;
