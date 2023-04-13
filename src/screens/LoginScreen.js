import React, { useState, useContext } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Text, Button, Input } from "react-native-elements";
// import { useNavigation } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { Context as AuthContext } from "../context/AuthContext";
import { FontAwesome5 } from "@expo/vector-icons";
// import NavLink from "../components/NavLink";
import TextInput from "../components/TextInput";

const LoginScreen = ({ onPress, navigation }) => {
  // const { state, signin, clearErrorMessage } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <View>
        {/* <Image
          style={{
            alignSelf: 'center',
            width: 50,
            height: 50,
            top: 35
          }}
          source={ require("../../assets/wabbling-logo.png")}
        /> */}
        <TouchableOpacity
          style={styles.createAccountButtonStyle}
          onPress={() => navigation.navigate("LoginScreen")}
        >
        

        <FontAwesome5
            style={{ alignSelf: "center", right: 138, top: 50 }}
            name="arrow-left"
            size={24}
            onPress={() => navigation.navigate("LoginScreen")}
            color="#043F7C"
          />
          
        </TouchableOpacity>
        
      </View>
      
      <View>
        <Text style={styles.title}>Let's sign you in</Text>
        <Text style={styles.title2}>Welcome back.</Text>
      </View>
      
      {/* <NavigationEvents onWillFocus={clearErrorMessage} /> */}

      {/* {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      ) : null} */}
      <View
        style={{
          flex: 1,
          // backgroundColor: '#fff',
          alignItems: "center",
          justifyContent: "center",
          // marginTop: 35
        }}>
        <View
          style={{ marginBottom: 20 }}>
          
          <TextInput
            icon='user'
            placeholder="Username"
            autoCapitalize="none"
            label="Username"
            value={username}
            // onChangeText={username => setUsername(username)}
            mode="outlined"
            // keyboardType="phone-pad"
            fontSize={12}
            style={{
              // marginBottom: 10,
              height: 45,
              fontSize: 13,
              // width: '80%',
            }}
            activeOutlineColor="#252525"
          />
        </View>
        <View
          style={{ marginBottom: 30}}>
          
          <TextInput
            icon='lock'
            placeholder="Password"
            autoCapitalize="none"
            label="Username"
            value={username}
            // onChangeText={username => setUsername(username)}
            mode="outlined"
            // keyboardType="phone-pad"
            fontSize={12}
            style={{
              // marginBottom: 10,
              height: 45,
              fontSize: 13,
              // width: '80%',
            }}
            activeOutlineColor="#252525"
          />
        </View>
        <TouchableOpacity
          style={styles.buttonStyle}
          // onPress={() => signin({ username, password })}
          // onPress={() => navigation.navigate("HomeScreen")}
          onPress={() => navigation.navigate("auth", { screen: "HomeScreen" })}
        >
          <Text style={styles.loginButtonStyle}> Login</Text>
        </TouchableOpacity>
              {/* <View>
                <Button
                  buttonStyle={styles.signInButton}
                  title="Log in"
                  onPress={() => signin({ username, password })}
                />
              </View> */}
              <View style={{marginTop: 10}}>
                {/* <NavLink
                  routeName="Signup"
                  text="Don't have an account? Sign up instead"
                /> */}
                <Text
                  style={styles.textTermsStyle}
                  
                  onPress={() => navigation.navigate("RegisterScreen")}
                >
                  Don't have an account? <Text style={{fontWeight: '600'}}>Sign Up</Text>
                  {/* By tapping Create account, you agree {"\n"}to our Terms and Privacy Policy. */}
                </Text>
              </View>
              {/* <View style={{marginTop: 10}}>
                <Text
                  style={styles.textTermsStyle}
                  onPress={() =>
                    navigation.navigate("auth", { screen: "HomeScreen" })
                  }
                >
          
                  By tapping Create account, you agree {"\n"}to our Terms and Privacy Policy.
                </Text>
              </View> */}
        </View>
        </View>
  );
};

LoginScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    margin: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    top: 200,
    // paddingVertical: 20
    // paddingHorizontal: 10
  },
  title2: {
    fontSize: 23,
    fontWeight: "500",
    top: 200,
    // paddingVertical: 20
    // paddingHorizontal: 10
  },
  signInButton: {
    color: "#1DA1F2",
    borderRadius: 50,
    marginTop: 5,
  },
  buttonStyle: {
    backgroundColor: '#043F7C',
    paddingHorizontal: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 8,
    // marginTop: 10,
    width: '100%',
    alignSelf: 'center',
  },
  loginButtonStyle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    width: '120%'
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
  textTermsStyle: {
    fontSize: 12,
    textAlign: 'center',
    alignSelf: 'center',
    width: '80%'
  },
});

export default LoginScreen;
