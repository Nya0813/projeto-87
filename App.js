import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import DailyPicScreen from "./screens/DailyPic";
import HomeScreen from "./screens/Home";
import SpaceCraftScreen from "./screens/SpaceCraft";
import StarMapScreen from "./screens/StarMap";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DailyPic" component={DailyPicScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SpaceCraft" component={SpaceCraftScreen} />
        <Stack.Screen name="StarMap" component={StarMapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
