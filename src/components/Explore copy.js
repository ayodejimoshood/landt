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

export default function Explore() {
  return (
    <View>
      <View style={{paddingHorizontal: 37, bottom: -20}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Explore: <Text style={{fontSize: 14, fontWeight: '500'}}>Do more without limitations</Text></Text>
      </View>
      <ImageBackground
        imageStyle={{ borderTopLeftRadius: 25, borderTopRightRadius: 25, opacity: 1 }}
        source={require("../assets/18.png")}
        resizeMode="cover"
        // style={styles.image}
        style={{ flex: 1,  margin: 15, marginRightx: 10, paddingHorizontal: 27, position: 'absolute', bottom: 0, top: 50, height: 200, marginBottomx: -200, widthx: '100%', textAlign: 'center', alignSelf: 'center', borderRadius: 15 }}
      >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ position: 'fixed', bottom: 0, top: -10, widthx: 400, alignItemsx: 'center', textAlign: 'center', alignSelf: 'center'}}
      >
            

            <TouchableOpacity>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  height: '70%',
                  width: 95,
                  // borderRadius: 20,
                  borderTopLeftRadius: 20,
                  borderBottomLeftRadius: 20,
                  backgroundColor: "green",
                  // marginHorizontal: 5,
                  alignSelf: 'center',
                  marginVertical: 30
                }}
              >
                <Image
                source={require("../assets/home/Plus.png")}
                style={{ height: 24, width: 24 }}
              />
                
              </View>
              {/* <Text style={{alignSelf: 'center', fontSize: 12, fontWeight: '500', marginTop: 5}}>Social</Text> */}
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  height: '70%',
                  width: 95,
                  // borderTopLeftRadius: 0,
                  // borderTopRightRadius: 0,
                  // borderRadius: 20,
                  // backgroundColor: "#ff5c83",
                  backgroundColor: 'white',
                  // marginHorizontal: 5,
                  alignSelf: 'center',
                  marginVertical: 30
                }}
              >
                <Image
                  source={require("../assets/home/Wallet.png")}
                  style={{ height: 24, width: 24 }}
                />
                
              </View>
              {/* <Text style={{alignSelf: 'center', fontSize: 12, fontWeight: '500', marginTop: 5}}>Marketplace</Text> */}
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  height: '70%',
                  width: 95,
                  borderTopRightRadius: 20,
                  borderBottomRightRadius: 20,
                  // borderRadius: 20,
                  backgroundColor: "green",
                  // marginHorizontal: 5,
                  marginVertical: 30
                }}
              >
                <Image
                  source={require("../assets/home/Send.png")}
                  style={{ height: 24, width: 24 }}
                />
              </View>
              {/* <Text style={{alignSelf: 'center', fontSize: 12, fontWeight: '500', marginTop: 5}}>Charity</Text> */}
            </TouchableOpacity>
            
          </ScrollView>
          </ImageBackground>
          </View>
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
