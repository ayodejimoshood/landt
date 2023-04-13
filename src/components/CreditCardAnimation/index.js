import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  SafeAreaView,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import cardbg1 from "../../assets/cards/card1.jpg";
import cardbg2 from "../../assets/cards/card2.jpg";

// const cardss = [
//   {
//     id: "1",
//     cardType: "",
//     cardName: "",
//     cardNumber: "",
//     cardexpTitle: "",
//     cardexpDate: "",
//   },
//   {
//     id: "2",
//     cardType: "",
//     cardName: "",
//     cardNumber: "",
//     cardexpTitle: "",
//     cardexpDate: "",
//   },
//   {
//     id: "3",
//     cardType: "",
//     cardName: "",
//     cardNumber: "",
//     cardexpTitle: "",
//     cardexpDate: "",
//   }
// ];
// card logic
const cardHeight = 200;
const cardTitle = 7;
const cardPadding = 10;

const { height } = Dimensions.get("window");
const image = {
      card1: require('../assets/cards/card1.jpg')
}

const cards = [
  {
    name: "Care",
    color: "#043f7c",
    image: <Image source={require('../../assets/cards/card1.jpg')} />,
    price: "30 CHF"
  },
  {
    name: "Wallet",
    color: "#ff5757",
    image: <Image source={require('../../assets/cards/card2.jpg')} />,
    price: "64 CHF"
  },
  {
    name: "Rewards",
    color: "#000000",
    image: <Image source={require('../../assets/cards/card1.jpg')} />,
    price: "80 CHF"
  },
//   {
//     name: "Sandwich",
//     color: "#95c3e4",
//     price: "85 CHF"
//   },
//   {
//     name: "Combi",
//     color: "#1c1c1c",
//     price: "145 CHF"
//   },
//   {
//     name: "Signature",
//     color: "#a390bc",
//     price: "92 CHF"
//   },
//   {
//     name: "Coffee",
//     color: "#fef2a0",
//     price: "47 CHF"
//   }
];

export default class App extends React.Component {
      state = {
            y: new Animated.Value(0)
      };

      render() {
            const { y } = this.state;
            return (
            <SafeAreaView style={styles.root}>
                  <View style={styles.container}>
                        <View style={StyleSheet.absoluteFill}>
                              {cards.map((card, i) => {
                                    const inputRange = [-cardHeight, 0];
                                    const outputRange = [
                                          cardHeight * i,
                                          (cardHeight - cardTitle) * -i
                                    ];
                                    if (i > 0) {
                                          inputRange.push(cardPadding * i);
                                          outputRange.push((cardHeight - cardPadding) * -i);
                                    }
                                    const translateY = y.interpolate({
                                          inputRange,
                                          outputRange,
                                          extrapolateRight: "clamp"
                                    });
                                    return (
                                          // renderItem={({ item: { cardType, cardName, cardNumber, cardexpTitle, cardexpDate, } }) => (
                                          //       <TouchableOpacity style={tw`flex-row items-center p-4 w-4/5`}>
                                          //             <Image style={styles.imageContainer} source={avatar} />
                                          //             <View>
                                          //                   <Text style={tw`font-semibold text-lg`}>{name} <Text style={tw`font-normal text-sm`}>{handle}</Text> • <Text style={tw`font-normal text-sm`}>{time}</Text> </Text>
                                          //                   <Text style={tw`text-gray-500`}>{tweet}</Text>
                                          //                   <View style={styles.engagement}>
                                          //                         <View style={styles.engagementItem}>
                                          //                               {commentButton}
                                          //                         </View>
                                          //                         <View style={styles.engagementItem}>
                                          //                               {rewabButton}
                                          //                         </View>
                                          //                         <View style={styles.engagementItem}>
                                          //                               <Text style={tw`font-normal text-sm`}>{likeButton}<Text style={{marginBottom: 20}}>35</Text></Text>
                                          //                         </View>
                                          //                         <View style={styles.engagementItem}>
                                          //                               {shareButton}
                                          //                         </View>
                                          //                   </View>
                                          //             </View>
                                          //             <Animated.View
                                          //                   key={card.name}
                                          //                   style={{ transform: [{ translateY }] }}>
                                          //                   <View
                                          //                         style={[styles.card, { backgroundColor: card.color }]}
                                          //                   >
                                          //                         <Text style={{color: 'white', fontWeight: 'bold', paddingHorizontal: 20, paddingVertical: 20}}>{cardName}</Text>
                                          //                         <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18, paddingHorizontal: 20, paddingVertical: 20}}>{cardNumber}</Text>
                                          //                         <View>
                                          //                               <Text style={{color: 'white', fontWeight: 'bold', paddingHorizontal: 20, paddingVertical: 20}}><Text style={{fontSize: 10}}>{cardexpTitle}</Text> {"\n"}<Text style={{fontSize: 14}}>{cardexpDate}</Text></Text>
                                          //                         </View>
                                          //                   </View>
                                          //             </Animated.View>
                                          //       </TouchableOpacity>
                                          // )}
                                          // />
                        <Animated.View key={card.name} style={{ transform: [{ translateY }] }}>
                              <View style={[styles.card, { backgroundColor: card.color }]}>
                                    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                                          <Text style={{color: 'white', fontWeight: 'bold', paddingHorizontal: 20, paddingVertical: 20}}>Ayodeji Moshood</Text>
                                          <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18, paddingHorizontal: 20, paddingVertical: 20}}>••••  ••••  ••••  5432</Text>
                                          <View>
                                                <Text style={{color: 'white', fontWeight: 'bold', paddingHorizontal: 20, paddingVertical: 20}}><Text style={{fontSize: 10}}>EXP/DATE</Text> {"\n"}<Text style={{fontSize: 14}}>09/24</Text></Text>
                                          </View>
                                    </ImageBackground>
                              </View>
                        </Animated.View>
                  );
            })}
          </View>
          <Animated.ScrollView
            scrollEventThrottle={16}
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: { y }
                  }
                }
              ],
              { useNativeDriver: true }
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: 30,
    top: 50
  },
  container: {
    flex: 1
  },
  content: {
    height: height * 2
  },
  card: {
    height: cardHeight,
    borderRadius: 30,
//     backgroundImage: "./assets/splash-bg.png"
  },
  image: {
        flex: 1,
        justifyContent: 'center',
        borderRadius: 30
  }
});