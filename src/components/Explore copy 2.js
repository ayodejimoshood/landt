import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  Image, ImageBackground
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
import LinearGradient from 'expo-linear-gradient';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient)

export default function Explore() {
  return (
    // <ShimmerPlaceHolder>
    <View>
      <View style={{paddingHorizontal: 37, bottom: -20}}>
        {/* <ShimmerPlaceHolder visible={isFetched}> */}
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Explore: <Text style={{fontSize: 14, fontWeight: '500'}}>Do more without limitations</Text></Text>
        {/* </ShimmerPlaceHolder> */}
      </View>
      {/* <ImageBackground
        imageStyle={{ borderTopLeftRadius: 25, borderTopRightRadius: 25, opacity: 1 }}
        source={require("../assets/18.png")}
        resizeMode="cover"
        style={{ flex: 1,  margin: 15, marginRightx: 10, paddingHorizontal: 27, position: 'absolute', bottom: 0, top: 50, height: 200, marginBottomx: -200, widthx: '100%', textAlign: 'center', alignSelf: 'center', borderRadius: 15 }}
      > */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        // style={{ position: 'fixed', bottom: 0, top: -10, widthx: 400, alignItemsx: 'center', textAlign: 'center', alignSelf: 'center'}}
        style={{ 
   flex: 1,  margin: 0, marginRightx: 10, paddingHorizontal: 0, position: 'absolute', bottom: 0, top: 70, height: 200, marginBottomx: -200, widthx: '100%', textAlign: 'center', alignSelf: 'center', borderRadius: 15 }}
      >
            

            
          <TouchableOpacity>
            <ImageBackground
              imageStyle={{ borderTopLeftRadius: 25, opacity: 1 }}
              source={require("../assets/socials.jpg")}
              resizeMode="contain"
              style={{ flex: 1,  marginx: 15, marginRightx: 10, paddingHorizontalx: 27, positionx: 'absolute', bottom: 0, top: 10, height: 200, marginBottomx: 20, widthx: '100%', textAlign: 'center', alignSelf: 'center', borderRadius: 15 }}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  height: '90%',
                  width: 115,
                  borderRadius: 20,
                  marginHorizontal: 5,
                  alignSelf: 'center',
                  marginVertical: -10
                }}
              >
                {/* <Image
                  source={require("../assets/home/Plus.png")}
                  style={{ height: 24, width: 24 }}
                /> */}
                {/* <Text style={{alignSelf: 'center', fontSize: 16, fontWeight: 'bold', color: 'pink'}}>Social</Text> */}
              </View>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity>
            <ImageBackground
              imageStyle={{ borderTopLeftRadiusx: 25, borderTopRightRadiusx: 25, opacity: 1 }}
              source={require("../assets/marketplace.jpg")}
              resizeMode="contain"
              style={{ flex: 1, backgroundColorx: 'black',  marginx: 15, marginRightx: 10, paddingHorizontalx: 27, positionx: 'absolute', bottom: 0, top: 10, heightxx: 200, marginBottomx: 20, widthx: '100%', textAlign: 'center', alignSelf: 'center', borderRadius: 15 }}
            >
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  height: '90%',
                  width: 115,
                  borderRadius: 20,
                  marginHorizontal: 5,
                  alignSelf: 'center',
                  marginVertical: -10
                }}
              >
                {/* <Text style={{alignSelf: 'center', fontSize: 12, fontWeight: '500', marginTopx: 5}}>Marketplace</Text> */}
              </View>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity>
              {/* <ImageBackground
                imageStyle={{ borderTopLeftRadiusx: 25, borderTopRightRadius: 25, borderBottomRightRadius: 0, opacity: 1 }}
                source={require("../assets/charity.jpg")}
                resizeMode="contain"
                style={{ flex: 1,  marginx: 15, marginRightx: 10, paddingHorizontalx: 27, positionx: 'absolute', bottom: 0, top: 10, heightx: 200, marginBottomx: 20, widthx: '100%', textAlign: 'center', alignSelf: 'center', borderRadiusx: 15 }}
              > */}
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    height: '70%',
                    width: 115,
                    borderRadius: 20,
                    backgroundColor: "#ffffff",
                    marginHorizontal: 5,
                    alignSelf: 'center',
                    marginVertical: -10
                  }}
                >
                <Image
                  source={require("../assets/charity.jpg")}
                  style={{ height: 70, width: 70 }}
                />
                  {/* <Text style={{alignSelf: 'center', fontSize: 12, fontWeight: '500', marginTopx: 5}}>Charity</Text> */}
                </View>
              {/* </ImageBackground> */}
            </TouchableOpacity>
            

            {/* <TouchableOpacity>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  height: '90%',
                  width: 115,
                  borderRadius: 20,
                  backgroundColor: "#ff5c83",
                  marginHorizontal: 5,
                  alignSelf: 'center',
                }}
              >
                <Image
                  source={require("../assets/home/Wallet.png")}
                  style={{ height: 24, width: 24 }}
                />
                
              </View>
            </TouchableOpacity> */}

            {/* <TouchableOpacity>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  height: '90%',
                  width: 115,
                  borderRadius: 20,
                  backgroundColor: "#ff5c83",
                  marginHorizontal: 5,
                }}
              >
                <Image
                  source={require("../assets/home/Send.png")}
                  style={{ height: 24, width: 24 }}
                />
              </View>
            </TouchableOpacity> */}
            
          </ScrollView>
          {/* </ImageBackground> */}
          </View>
          // </ShimmerPlaceHolder>
  );
}

const styles = StyleSheet.create({
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
  },
   image: {
    flex: 1,
    // width: 300,
    height: 200,
    // justifyContent: "center",
    // borderRadius: 100
  },
});
