import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  Image
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import Images from "../../assets/avatar";
import CommentButton from "../components/Engagements/CommentButton";
import RewabButton from "../components/Engagements/RewabButton";
import LikeButton from "../components/Engagements/LikeButton";
import ShareButton from "../components/Engagements/ShareButton";

export default function WalletDoings() {
  return (
    <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ flex: 1,  margin: 0, paddingHorizontalx: 27,  top: 80, marginBottom: '-40%', alignSelf: 'center' }}
          >
            {/* <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Detail")}
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 66,
                width: 66,
                borderRadius: 50,
                backgroundColor: "#5facdb",
              }}
            >
              <Image
                source={require("../images/p.png")}
                style={{ height: 24, width: 24 }}
              />
            </TouchableOpacity> */}

            <TouchableOpacity>
              <View
                style={{
                  alignItems: "center",
                  alignSelf: 'center',
                  justifyContent: "center",
                  height: 66,
                  width: 66,
                  borderRadius: 50,
                  backgroundColor: "#FB5657",
                  marginHorizontal: 10,
                }}
              >
                {/* <Icon name="office-building" color="white" size={32} /> */}

                <Image
                source={require("../assets/home/Plus.png")}
                style={{ height: 24, width: 24 }}
              />
                
              </View>
              <Text style={{alignSelf: 'center', fontSize: '12', fontWeight: '500', marginTop: 5}}>Top Up</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{
                  alignItems: "center",
                  alignSelf: 'center',
                  justifyContent: "center",
                  height: 66,
                  width: 66,
                  borderRadius: 50,
                  // backgroundColor: "#ff5c83",
                  backgroundColor: '#FB5657',
                  marginHorizontal: 10,
                }}
              >
                <Image
                  source={require("../assets/home/Wallet.png")}
                  style={{ height: 24, width: 24 }}
                />
                
              </View>
              <Text style={{alignSelf: 'center', fontSize: '12', fontWeight: '500', marginTop: 5}}>Withdraw</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{
                  alignItems: "center",
                  alignSelf: 'center',
                  justifyContent: "center",
                  height: 66,
                  width: 66,
                  borderRadius: 50,
                  backgroundColor: "#FB5657",
                  marginHorizontal: 10,
                }}
              >
                <Image
                  source={require("../assets/home/Send.png")}
                  style={{ height: 24, width: 24 }}
                />
              </View>
              <Text style={{alignSelf: 'center', fontSize: '12', fontWeight: '500', marginTop: 5}}>Send</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  height: 66,
                  width: 66,
                  borderRadius: 50,
                  backgroundColor: "#FB5657",
                  // marginLeft: 10,
                  marginHorizontal: 10,
                }}
              >
                <Image
                  source={require("../assets/home/User.png")}
                  style={{ height: 24, width: 24 }}
                />
              </View>
              <Text style={{alignSelf: 'center', fontSize: '12', fontWeight: '500', marginTop: 5}}>Transfer</Text>
            </TouchableOpacity>
            
          </ScrollView>
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
  }
});
