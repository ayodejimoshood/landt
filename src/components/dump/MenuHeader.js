import React, { useContext } from "react";

import { View, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Text, Card, Button, Avatar, Header } from "react-native-elements";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { Context as AuthContext } from "../context/AuthContext";
import { DrawerActions } from "@react-navigation/drawer";
// import { DrawerActions } from "@react-navigation/drawer";
// import { withNavigation } from "react-navigation";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
// import tw from "tailwind-react-native-classnames";

const MenuHeader = ({ user, navigation, title }) => {
  const { profile } = user;
  return (
    <View style={{flex: 1}}>
      <Header
        barStyle="light-content"
        leftComponent={
          <TouchableOpacity
            onPress={() => {
              navigation.dispatch(DrawerActions.openDrawer());
            }}
          >
            {/* <Avatar
              rounded
              size="small"
              source={{
                // uri: profile ? profile.avatar.filename : null,
                uri: "https://links.papareact.com/gzs"
                // uri: "https://drive.google.com/file/d/16RSkoRfeD4wZr5LKNKP6xELJxljxtcyX/view",
              }}
            /> */}
            {/* <FontAwesome5 name="user" size={20} color="#8e7aea" /> */}
            {/* <Icon
            // onPress={() => navigation.navigate("ProfileSettingsScreen")}
            style={tw`mb-2 rounded-full bg-gray-200 p-8`}
            name={icon}
            type="ionicon"
            color="gray"
            size={25}
          /> */}
          </TouchableOpacity>
        }
        centerComponent={
          title ? (
            <Text style={styles.text}>{title}</Text>
          ) : (
            <TouchableOpacity onPress={() => navigation.navigate("Tweet")}>
              {/* <FontAwesome5 name="paw" size={20} color="#8e7aea" /> */}
              <Image
                style={{
                  alignSelf: 'center',
                  width: 30,
                  height: 30,
                  bottom: -7,
                  // position: 'relative'
                }}
                source={ require("../../assets/wabbling-logo.png")}
              />
            </TouchableOpacity>
          )
        }
        rightComponent={<Feather name="star" size={20} color="#8e7aea" />}
        containerStyle={{
          backgroundColor: "grey",
          justifyContent: "space-around",
          height: 50,
          paddingTop: 0,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "700",
  },
});
export default MenuHeader;
