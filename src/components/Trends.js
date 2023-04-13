import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Button,
  TouchableOpacity,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  Modal,
  FlatList,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { useDispatch, useSelector } from "react-redux";
import Animated from "react-native-reanimated";
import Images from "../../assets/avatar";

const Trends = () => {
  const dataTitle = [
    {
      id: "1",
      dataTitle: "Trends for you"
    }
  ];
  const dataContent = [
    {
      id: "1",
      trendRegion: "Trending in Nigeria",
      handle: "@VogueRunway",
      time: "1h",
      name: "Bae U",
    },
    {
      id: "2",
      name: "logan 🚀",
      handle: "@trcinspotting",
      time: "1d",
      tweet: "pastor asked for a child to come up and sing a song so my sister at 3 yrs old went up and sang 'oh na na what's my name'",
    },
    {
      id: "3",
      name: "NIMI ❤️",
      handle: "@iamslickp",
      time: "1d",
      tweet: "Make i go sleep before",
    }
  ];

  return (
    <>
    <View
      style={{
        flexDirection: "row",
        height: '70%',
        background: 'transparent',
        top: -30
      }}
    >
      <View
        style={{
          backgroundColor: "#f8f8f8",
          width: "90%",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          flex: 1,
        }}
      >
        {/* <Text
          style={{
            fontWeight: "bold",
            color: "#111111",
            fontSize: 17,
            right: 0,
            paddingLeft: 32,
            paddingTop: 20,
          }}
        >
          Trends for you
        </Text> */}
        
        <FlatList
          style={{ flexGrow: 0, maxHeight: "95%" }}
          data={dataTitle, dataContent}
          automaticallyAdjustContentInsets={false}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => (
        <>
        {/* <Text
          style={{
            fontWeight: "bold",
            color: "#111111",
            fontSize: 17,
            right: 0,
            paddingLeft: 32,
            paddingTop: 20,
          }}
        >
          Trends for you
        </Text>
        <Text
          style={{
            fontWeight: "normal",
            color: "#111111",
            fontSize: 12,
            right: 0,
            paddingLeft: 32,
            paddingTop: 20,
          }}
        >
          Trending in Nigeria
        </Text> */}
        
        <View
          style={[
            tw`bg-gray-200`,
            {
              height: 0.5,
            },
          ]}
        />
        </>
      )}
      renderItem={({ item: { trendRegion, name, handle, time, tweet, commentButton, rewabButton, likeButton, shareButton} }) => (
        
        
        
        <TouchableOpacity style={tw`flex-row items-center p-8 w-4/5`}>
        
        
          {/* <Image style={styles.imageContainer} source={avatar} /> */}
          
          {/* <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={avatar}
            type="ionicon"
            color="white"
            size={18}
          /> */}
          
          <View>
            <Text style={tw`font-semibold text-lg`}>{trendRegion} </Text>
            <Text style={tw`text-gray-500 w-96`}>{tweet}</Text>
            {/* <Text style={tw`text-gray-500`}>{likeButton} &nbsp;&nbsp; {likeButton} &nbsp;&nbsp; {likeButton}</Text> */}
          </View>
        </TouchableOpacity>
        
      )}
    />
      </View>
    </View>
    {/*  */}
    
    
    </>
  );
};

export default Trends;
const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    height: 110,
    justifyContent: "center",
    // borderRadius: 100
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  fundWalletButtonStyle: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#ffffff",
    // color: '#0b86c2',
    textAlign: "center",
    alignItems: "center",
    // width: '50%'
  },
  fundWalletModalButtonStyle: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#ffffff",
    textAlign: "center",
    alignItems: "center",
    paddingVertical: 5,
    // flexDirection:"row"
    // width: '50%'
  },
  fundWalletModalButtonContainerStyle: {
    alignItems: "center",
    textAlign: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 72,
    marginRight: 72,
    borderRadius: 30,
    marginBottom: 12,
    // width: '50%',
    backgroundColor: "#1197F2",
  },
  useBankCardButtonContainerStyle: {
    alignItems: "center",
    textAlign: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 72,
    marginRight: 72,
    borderRadius: 30,
    marginBottom: 12,
    // width: '50%',
    backgroundColor: "#363636",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  withdrawWalletButtonStyle: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#f58d46",
    // color: '#ba4363',
    textAlign: "center",
    alignItems: "center",
    // width: '50%'
  },
  buttonStyle: {
    backgroundColor: "#16344e",
    // justifyContent: 'center',
    // marginVertical: 50,
    // alignItems: 'center',
    paddingVertical: 18,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 28,
    borderRadius: 30,
    marginBottom: 20,
    width: "40%",
  },
  buttonRightStyle: {
    backgroundColor: "#fef6e4",
    // justifyContent: 'center',
    // marginVertical: 50,
    // alignItems: 'center',
    paddingVertical: 18,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: 28,
    borderRadius: 30,
    marginBottom: 20,
    width: "40%",
  },
  buttonEmailLoginStylex: {
    backgroundColor: "#191721",
    paddingHorizontal: 50,
    justifyContent: "center",
    // marginVertical: 50,
    alignItems: "center",
    paddingVertical: 18,
    paddingLeft: 50,
    // paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: "50%",
  },

  // css
  imageContainer: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    marginHorizontal: 15,
    borderRadius: 30
  },
  engagement: {
    // flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    paddingTop: 5
    // alignItems: 'flex-start'
  },
  engagementItem: {
    width: '25%'
  }
});


  