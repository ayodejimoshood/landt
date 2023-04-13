import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { KeyboardAvoidingView, Animated } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navigation from './src/navigation/Navigation';
// import Amplify, {
//   Auth,
//   API,
//   graphqlOperation,
// } from 'aws-amplify';

export default function App() {
  return (
    <Provider store={store}>
        <SafeAreaProvider>
          <Navigation/>
        </SafeAreaProvider>
    </Provider>
  );
}
