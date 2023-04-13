import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { Context as TweetContext } from "../context/TweetContext";

import Tweet from "../components/Tweets";
import Header from "../components/Header";
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Icon } from "react-native-elements";

const MessageScreen = ({ onPress, navigation }) => {

  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.container}>
      
      <Tweet />
      <FlatList
        
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("SingleTweet", { item })}
            >
              <ListItem
                avatar={item.avatar}
                _id={item._id}
                userId={item.userId}
                username={item.username}
                name={item.name}
                content={item.content}
                image={item.img}
                timestamp={item.timestamp}
                likes={item.likes}
                user={state.user}
              />
            </TouchableOpacity>
          );
        }}
      />
      <View style={styles.tweet}>
        <TouchableOpacity onPress={() => navigation.navigate("AddTweet")}>
          <Icon reverse name="addfile" type="antdesign" color="#8e7aea" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8'
  },
  card: {
    padding: 0,
    margin: 0,
  },
  tweet: {
    position: "absolute",
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    bottom: 80,
  },
});
export default MessageScreen;
