import  StatusBar  from "expo-status-bar";
import React from "react";
import  store  from "../store";
import  Provider  from "react-redux";
import  SafeAreaProvider  from "react-native-safe-area-context";
import KeyboardAvoidingView  from "react-native";
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import "react-native-gesture-handler";
import NavigationContainer from "@react-navigation/native";
import createBottomTabNavigator from "@react-navigation/bottom-tabs";

import StackNavigator from "../navigation/StackNavigator";

// begin of app screens import
// import OnboardingScreen from "../screens/OnboardingScreen";
// import LoginScreen from "../screens/LoginScreen";
// import OTPScreen from "../screens/OTPScreen";
// import RegisterScreen from "../screens/RegisterScreen";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import NotificationScreen from "../screens/NotificationScreen";
import MessageScreen from "../screens/MessageScreen";

// import StackNavigator from "./StackNavigator";

// Plus...
import plus from "../assets/bottomtabnavigation/plus.png";

// Font Awesome Icons...
import  FontAwesome5  from "@expo/vector-icons";
import  useRef from "react";

const Tab = createBottomTabNavigator();

// Hiding Tab Names...
const BottomTabNavigator = () => {
  // Animated Tab Indicator...
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          >
            <Tab.Navigator
              tabBarOptions={{
                showLabel: false,
                // Floating Tab Bar...
                style: {
                  backgroundColor: "white",
                  position: "absolute",
                  bottom: 40,
                  marginHorizontal: 20,
                  // Max Height...
                  height: 60,
                  borderRadius: 10,
                  // Shadow...
                  shadowColor: "#000",
                  shadowOpacity: 0.06,
                  shadowOffset: {
                    width: 10,
                    height: 10,
                  },
                  paddingHorizontal: 20,
                },
              }}
            >
              {
                // Tab Screens....
                // Tab ICons....
              }
              <Tab.Screen
                name={"Home"}
                component={HomeScreen}
                options={{
                  tabBarIcon: ({ focused }) => (
                    <View
                      style={{
                        // centring Tab Button...
                        position: "absolute",
                        top: 20,
                      }}
                    >
                      <FontAwesome5
                        name="home"
                        size={20}
                        color={focused ? "red" : "gray"}
                      ></FontAwesome5>
                    </View>
                  ),
                }}
                listeners={({ navigation, route }) => ({
                  // Onpress Update....
                  tabPress: (e) => {
                    Animated.spring(tabOffsetValue, {
                      toValue: 0,
                      useNativeDriver: true,
                    }).start();
                  },
                })}
              />

              <Tab.Screen
                name={"Trips"}
                component={MapScreen}
                options={{
                  tabBarIcon: ({ focused }) => (
                    <View
                      style={{
                        // centring Tab Button...
                        position: "absolute",
                        top: 20,
                      }}
                    >
                      <FontAwesome5
                        name="search"
                        size={20}
                        color={focused ? "red" : "gray"}
                      ></FontAwesome5>
                    </View>
                  ),
                }}
                listeners={({ navigation, route }) => ({
                  // Onpress Update....
                  tabPress: (e) => {
                    Animated.spring(tabOffsetValue, {
                      toValue: getWidth(),
                      useNativeDriver: true,
                    }).start();
                  },
                })}
              />

              {
                // Extra Tab Screen For Action Button..
              }

              <Tab.Screen
                name={"ActionButton"}
                component={TripsScreen}
                options={{
                  tabBarIcon: ({ focused }) => (
                    <TouchableOpacity>
                      <View
                        style={{
                          width: 55,
                          height: 55,
                          backgroundColor: "red",
                          borderRadius: 30,
                          justifyContent: "center",
                          alignItems: "center",
                          marginBottom: Platform.OS == "android" ? 50 : 30,
                        }}
                      >
                        <Image
                          source={plus}
                          style={{
                            width: 22,
                            height: 22,
                            tintColor: "white",
                          }}
                        ></Image>
                      </View>
                    </TouchableOpacity>
                  ),
                }}
              />

              <Tab.Screen
                name={"Notifications"}
                component={DispatchScreen}
                options={{
                  tabBarIcon: ({ focused }) => (
                    <View
                      style={{
                        // centring Tab Button...
                        position: "absolute",
                        top: 20,
                      }}
                    >
                      <FontAwesome5
                        name="bell"
                        size={20}
                        color={focused ? "red" : "gray"}
                      ></FontAwesome5>
                    </View>
                  ),
                }}
                listeners={({ navigation, route }) => ({
                  // Onpress Update....
                  tabPress: (e) => {
                    Animated.spring(tabOffsetValue, {
                      toValue: getWidth() * 3,
                      useNativeDriver: true,
                    }).start();
                  },
                })}
              />

              <Tab.Screen
                name={"Settings"}
                component={LoginScreen}
                options={{
                  tabBarIcon: ({ focused }) => (
                    <View
                      style={{
                        // centring Tab Button...
                        position: "absolute",
                        top: 20,
                      }}
                    >
                      <FontAwesome5
                        name="user-alt"
                        size={20}
                        color={focused ? "red" : "gray"}
                      ></FontAwesome5>
                    </View>
                  ),
                }}
                listeners={({ navigation, route }) => ({
                  // Onpress Update....
                  tabPress: (e) => {
                    Animated.spring(tabOffsetValue, {
                      toValue: getWidth() * 4,
                      useNativeDriver: true,
                    }).start();
                  },
                })}
              />
              {/* <Animated.View
                style={{
                  width: getWidth() - 20,
                  height: 2,
                  backgroundColor: "red",
                  position: "absolute",
                  bottom: 98,
                  // Horizontal Padding = 20...
                  left: 50,
                  borderRadius: 20,
                  transform: [{ translateX: tabOffsetValue }],
                }}
              ></Animated.View> */}
            </Tab.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default BottomTabNavigator;

function getWidth() {
  let width = Dimensions.get("window").width;

  // Horizontal Padding = 20...
  width = width - 80;

  // Total five Tabs...
  return width / 5;
}

// function StackNavigator() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     </View>
//   );
// }

// function StackNavigator() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// function StackNavigator() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function StackNavigator() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Notifications!</Text>
//     </View>
//   );
// }

// function StackNavigator() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Search!</Text>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
