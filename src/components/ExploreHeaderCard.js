import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import Images from "../../assets/explore";
import CommentButton from "../components/Engagements/CommentButton";
import RewabButton from "../components/Engagements/RewabButton";
import LikeButton from "../components/Engagements/LikeButton";
import ShareButton from "../components/Engagements/ShareButton";

export default function ExploreHeaderCard() {
  const data = [
    {
      id: "1",
      avatar: Images.wagmi,
      name: "Vogue Runway",
      handle: "@VogueRunway",
      time: "1h",
      tweet: "If anybody tweets any rubbish comparing legitimate struggle money to fraud money again, may hot pot burn your hand 🙏. let your generator catch fire ijn 🙏",
      commentButton: (<View><CommentButton/></View>),
      rewabButton: (<View><RewabButton/></View>),
      likeButton: (<View><LikeButton/></View>),
      shareButton: (<View><ShareButton/></View>),
    },
  ];

  return (
    <FlatList
      style={{ flexGrow: 0, maxHeight: "95%" }}
      data={data}
      automaticallyAdjustContentInsets={false}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => (
        <View
          style={[
            tw`bg-gray-200`,
            {
              height: 0.5,
            },
          ]}
        />
      )}
      renderItem={({ item: { avatar, name, handle, time, tweet, commentButton, rewabButton, likeButton, shareButton} }) => (
        
        <TouchableOpacity style={tw`flex-row items-center`}>
        {/* <ImageBackground
          // imageStyle={{ borderRadius: 25, opacity: 1 }}
          source={avatar}
          resizeMode="cover"
          style={styles.imageContainer}
        /> */}
          <Image style={styles.imageContainer} source={avatar} />
          
          {/* <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={avatar}
            type="ionicon"
            color="white"
            size={18}
          /> */}
          {/* <View>
            <Text style={tw`font-semibold text-lg`}>{name} <Text style={tw`font-normal text-sm`}>{handle}</Text> • <Text style={tw`font-normal text-sm`}>{time}</Text> </Text>
            <Text style={tw`text-gray-500`}>{tweet}</Text>
            <Text style={tw`text-gray-500`}>{likeButton} &nbsp;&nbsp; {likeButton} &nbsp;&nbsp; {likeButton}</Text>
            <View style={styles.engagement}>
              <View style={styles.engagementItem}>
                {commentButton}
              </View>
              <View style={styles.engagementItem}>
                {rewabButton}
              </View>
              <View style={styles.engagementItem}>
                <Text style={tw`font-normal text-sm`}>{likeButton}<Text style={{marginBottom: 20}}>35</Text></Text>
              </View>
              <View style={styles.engagementItem}>
                {shareButton}
              </View>
            </View>
          </View> */}
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    height: 350,
    width: '100%',
    // resizeMode: 'cover',
    // marginVertical: 5,
    // borderRadius: 30
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
