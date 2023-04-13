import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
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

export default function Tweets() {
  const data = [
    {
      id: "1",
      avatar: Images.punkface,
      name: "Vogue Runway",
      handle: "@VogueRunway",
      time: "1h",
      tweet: "If anybody tweets any rubbish comparing legitimate struggle money to fraud money again, may hot pot burn your hand 🙏. let your generator catch fire ijn 🙏",
      commentButton: (<View><CommentButton/></View>),
      rewabButton: (<View><RewabButton/></View>),
      likeButton: (<View><LikeButton/></View>),
      shareButton: (<View><ShareButton/></View>),
    },
    {
      id: "2",
      avatar: Images.avatar2,
      name: "logan 🚀",
      handle: "@trcinspotting",
      time: "1d",
      tweet: "pastor asked for a child to come up and sing a song so my sister at 3 yrs old went up and sang 'oh na na what's my name'",
      commentButton: (<View><CommentButton/></View>),
      rewabButton: (<View><RewabButton/></View>),
      likeButton: (<View><LikeButton/></View>),
      shareButton: (<View><ShareButton/></View>),
    },
    {
      id: "3",
      avatar: Images.tulip,
      name: "NIMI ❤️",
      handle: "@iamslickp",
      time: "1d",
      tweet: "Make i go sleep before",
      commentButton: (<View><CommentButton/></View>),
      rewabButton: (<View><RewabButton/></View>),
      likeButton: (<View><LikeButton/></View>),
      shareButton: (<View><ShareButton/></View>),
    },
    {
      id: "4",
      avatar: Images.avatar4,
      name: "Kẹ́hìndé Adélékè",
      handle: "@trcinspotting",
      time: "1d",
      tweet: "I think one thing I like about learning React is how components are emphasized from the start. The very first time I made a component reusable, it literally blew my mind lol. Almost as exciting as my first hello world with HTML.",
      commentButton: (<View><CommentButton/></View>),
      rewabButton: (<View><RewabButton/></View>),
      likeButton: (<View><LikeButton/></View>),
      shareButton: (<View><ShareButton/></View>),
    },
    {
      id: "5",
      avatar: Images.theking,
      name: "Ezra 'God' Olubi",
      handle: "@0x",
      time: "1d",
      tweet: "it was dead on arrival the moment proponents called it yabacon valley",
      commentButton: (<View><CommentButton/></View>),
      rewabButton: (<View><RewabButton/></View>),
      likeButton: (<View><LikeButton/></View>),
      shareButton: (<View><ShareButton/></View>),
    },
    {
      id: "6",
      avatar: Images.punk,
      name: "O.A 💫",
      handle: "@SeniormanOA",
      time: "1d",
      tweet: "Nft wey everybody Dey manage, e reach una turn. You turn am to       xv!deos, Nawa oh.",
      commentButton: (<View><CommentButton/></View>),
      rewabButton: (<View><RewabButton/></View>),
      likeButton: (<View><LikeButton/></View>),
      shareButton: (<View><ShareButton/></View>),
    },
    {
      id: "7",
      avatar: Images.jermy,
      name: "Nikki Star TV 💫",
      handle: "@MissNikkiStar",
      time: "Jan 28",
      tweet: "During praise and worship a woman started started singing in a bone chilling voice. She stopped looked at the Pastor of the church and told him that he had 14 days to live and then she started weep. The church went nuts and kicked her out. Pastor never made it to day 15.",
      commentButton: (<View><CommentButton/></View>),
      rewabButton: (<View><RewabButton/></View>),
      likeButton: (<View><LikeButton/></View>),
      shareButton: (<View><ShareButton/></View>),
    },
    {
      id: "8",
      avatar: Images.jermy,
      name: "Nikki Star TV 💫",
      handle: "@MissNikkiStar",
      time: "Jan 28",
      tweet: "During praise and worship a woman started started singing in a bone chilling voice. She stopped looked at the Pastor of the church and told him that he had 14 days to live and then she started weep. The church went nuts and kicked her out. Pastor never made it to day 15.",
      commentButton: (<View><CommentButton/></View>),
      rewabButton: (<View><RewabButton/></View>),
      likeButton: (<View><LikeButton/></View>),
      shareButton: (<View><ShareButton/></View>),
    },
    {
      id: "9",
      avatar: Images.jermy,
      name: "Nikki Star TV 💫",
      handle: "@MissNikkiStar",
      time: "Jan 28",
      tweet: "During praise and worship a woman started started singing in a bone chilling voice. She stopped looked at the Pastor of the church and told him that he had 14 days to live and then she started weep. The church went nuts and kicked her out. Pastor never made it to day 15.",
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
        <TouchableOpacity style={tw`flex-row items-center p-4 w-4/5`}>
          <Image style={styles.imageContainer} source={avatar} />
          
          {/* <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3`}
            name={avatar}
            type="ionicon"
            color="white"
            size={18}
          /> */}
          <View>
            <Text style={tw`font-semibold text-lg`}>{name} <Text style={tw`font-normal text-sm`}>{handle}</Text> • <Text style={tw`font-normal text-sm`}>{time}</Text> </Text>
            <Text style={tw`text-gray-500`}>{tweet}</Text>
            {/* <Text style={tw`text-gray-500`}>{likeButton} &nbsp;&nbsp; {likeButton} &nbsp;&nbsp; {likeButton}</Text> */}
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
          </View>
        </TouchableOpacity>
      )}
    />
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
