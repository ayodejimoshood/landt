import React, { useContext } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import { Text, Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
// import NavLink from "../components/NavLink";
import { FontAwesome5 } from "@expo/vector-icons";
import Images from "../../assets/onboarding";

const OnboardingScreen = ({ navigation }) => {
  const onboardingList = [
    {
      id: 1,
      title: "enjoy a better experience with socials & payment",
      illustration: Images.saly,
      // illustration: require('../assets/onboarding/dispatch.gif'),
    },
  ];
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{
            alignSelf: 'center',
            width: 50,
            height: 50,
            top: 80,
            // position: 'relative'
          }}
          source={ require("../../assets/woozeee-icon.png")}
        />
        
      </View>
      {onboardingList.map((i) => {
          return (
            <View
              key={i.id}
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: '100%',
                top: 40
              }}
            >
              <Image style={styles.imageContainer} source={i.illustration} />
              <Text style={styles.textStyle}>{i.title}</Text>
            </View>
          );
        })}
      {/* <Text style={styles.text}>
        See what's happening in the world right now.
      </Text> */}
      <View
        style={{
          position: "absolute",
          bottom: "10%",
          left: 0,
          right: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={styles.loginButtonStyle}> Sign in</Text>
        </TouchableOpacity>
      {/* <Button
        buttonStyle={styles.button}
        title="Create Account"
        onPress={() => navigation.navigate("Signup")}
      /> */}
      <TouchableOpacity
        style={styles.createAccountButtonStyle}
        onPress={() => navigation.navigate("RegisterScreen")}
      >
        <Text style={styles.createaccountButtonStyle}> Create Account</Text>
      </TouchableOpacity>

      <View style={{marginTop: 10}}>
        <Text
          style={styles.textTermsStyle}
          onPress={() =>
            navigation.navigate("auth", { screen: "HomeScreen" })
          }
        >
          
          By tapping Create Account, you agree {"\n"}to our Terms and Privacy Policy.
        </Text>
        </View>
      </View>
    </View>
  );
};
// OnboardingScreen.navigationOptions = () => {
//   return {
//     headerShown: false,
//   };
// };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    // padding: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
  },
  imageContainer: {
    height: '60%',
    width: '100%',
    resizeMode: 'contain',
    marginHorizontal: 15,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 30,
  },
  textStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    width: '50%',
    textAlign: 'center',
    bottom: 50,
    marginBottom: 230
  },
  button: {
    borderRadius: 50,
    color: "black",
  },
  buttonStyle: {
    // backgroundColor: '#00b14f',
    backgroundColor: '#9CE570',
    // paddingHorizontal: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "#6DC637",
    paddingVertical: 18,
    borderRadius: 30,
    marginTop: 10,
    width: '88%',
    alignSelf: 'center',
  },
  createAccountButtonStyle: {
    // backgroundColor: '#00b14f',
    backgroundColor: '#9CE570',
    // paddingHorizontal: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: "#6DC637",
    paddingVertical: 18,
    borderRadius: 30,
    marginTop: 10,
    width: '88%',
    alignSelf: 'center',
  },
  textTermsStyle: {
    fontSize: 12,
    textAlign: 'center',
    alignSelf: 'center',
    width: '80%'
  },
  loginButtonStyle: {
    fontWeight: 500,
    fontSize: 15,
    color: '#000E24',
    textAlign: 'center',
    width: '120%'
  },
  createaccountButtonStyle: {
    fontWeight: 500,
    fontSize: 15,
    color: '#000E24',
    textAlign: 'center',
    width: '120%'
  },
  navlink: {
    marginTop: 20,
    alignSelf: 'center',
    textAlign: 'center',
    
  },
});
export default OnboardingScreen;
