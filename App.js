import * as React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MainTabNavigator from "./navigator/MainTabNavigator";

MainTabNavigator;

const Tab = createBottomTabNavigator();

function App() {
  return <MainTabNavigator />;
}

export default App;
